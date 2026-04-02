"use client";

import { useState, useRef, useEffect } from "react";

function formatMessage(text: string): string {
  const html = text
    // Remove markdown headers (## , ### , etc.) but keep the text, make it bold
    .replace(/^#{1,6}\s+(.+)$/gm, "<strong>$1</strong>")
    // Bold: **text** or __text__
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/__(.+?)__/g, "<strong>$1</strong>")
    // Italic: *text* or _text_ (but not inside words)
    .replace(/(?<!\w)\*(.+?)\*(?!\w)/g, "<em>$1</em>")
    .replace(/(?<!\w)_(.+?)_(?!\w)/g, "<em>$1</em>")
    // Bullet lists: - item or * item
    .replace(/^[\-\*]\s+(.+)$/gm, "<li>$1</li>")
    // Numbered lists: 1. item
    .replace(/^\d+\.\s+(.+)$/gm, "<li>$1</li>")
    // Wrap consecutive <li> in <ul>
    .replace(/((?:<li>.*<\/li>\n?)+)/g, "<ul>$1</ul>")
    // Line breaks
    .replace(/\n\n/g, "<br/><br/>")
    .replace(/\n/g, "<br/>");
  return html;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatBotProps {
  moduleContext: string;
}

export default function ChatBot({ moduleContext }: ChatBotProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
          moduleContext,
        }),
      });
      const data = await res.json();
      if (data.response) {
        setMessages([...newMessages, { role: "assistant", content: data.response }]);
      } else {
        setMessages([...newMessages, { role: "assistant", content: "Sorry, something went wrong. Try again." }]);
      }
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Connection error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-clay-500 text-white flex items-center justify-center shadow-lg hover:bg-clay-600 transition-colors z-50"
        aria-label="Open AI tutor"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-2rem)] bg-white border border-cream-300 shadow-xl flex flex-col z-50" style={{ height: "500px" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-cream-300 bg-cream-50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-clay-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold font-mono">AI</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-ink-900">PE Tutor</div>
            <div className="text-xs text-ink-400">Ask anything about PE</div>
          </div>
        </div>
        <button onClick={() => setOpen(false)} className="text-ink-400 hover:text-ink-700 p-1">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.293 4.293a1 1 0 011.414 0L8 6.586l2.293-2.293a1 1 0 111.414 1.414L9.414 8l2.293 2.293a1 1 0 01-1.414 1.414L8 9.414l-2.293 2.293a1 1 0 01-1.414-1.414L6.586 8 4.293 5.707a1 1 0 010-1.414z" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <div className="text-ink-300 text-sm mb-3">No messages yet</div>
            <div className="space-y-2">
              {[
                "Explain IRR vs MOIC",
                "Walk me through a paper LBO",
                "What makes a good LBO target?",
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setInput(q);
                  }}
                  className="block w-full text-left text-xs text-ink-500 border border-cream-300 p-2 hover:border-clay-400 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] px-3 py-2 text-sm ${
                msg.role === "user"
                  ? "bg-clay-500 text-white"
                  : "bg-cream-100 text-ink-700 border border-cream-300"
              }`}
            >
              {msg.role === "user" ? (
                <div className="whitespace-pre-wrap">{msg.content}</div>
              ) : (
                <div
                  className="prose-chat"
                  dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
                />
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-cream-100 border border-cream-300 px-3 py-2">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-ink-300 animate-pulse" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-ink-300 animate-pulse" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-ink-300 animate-pulse" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-cream-300 p-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask about PE concepts..."
            className="flex-1 bg-cream-50 border border-cream-300 px-3 py-2 text-sm text-ink-900 placeholder-ink-300 focus:outline-none focus:border-clay-500"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              !input.trim() || loading
                ? "bg-cream-200 text-ink-300 cursor-not-allowed"
                : "bg-clay-500 text-white hover:bg-clay-600"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 8l6-6v4h6v4H8v4z" transform="rotate(-90 8 8)" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
