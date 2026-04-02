import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.CLAUDE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  try {
    const { messages, moduleContext } = await req.json();

    const systemPrompt = `You are a private equity tutor embedded in PE Academy, a learning platform for finance students preparing for PE internship interviews. You are knowledgeable, precise, and speak at the level of a first-year analyst at a PE firm.

Current module context: ${moduleContext || "General PE questions"}

Guidelines:
- Give concise, accurate answers about PE concepts, LBO mechanics, deal processes, valuation, and interview prep.
- Use real terminology. Don't dumb things down.
- When relevant, include numerical examples to illustrate concepts.
- If asked about something outside PE/finance, politely redirect to PE topics.
- Keep responses under 300 words unless a detailed walkthrough is needed.
- Format responses as clean plain text. Use line breaks between paragraphs.
- NEVER use markdown syntax like #, ##, ###, **, __, or * for formatting. Just write plain text.
- For emphasis, simply write clearly. Do not wrap words in asterisks or underscores.
- For lists, use simple dashes (- item) on new lines. Do not use numbered markdown lists.
- Do not use any heading markers (#) at all.`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1024,
        system: systemPrompt,
        messages: messages.slice(-10),
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: `Claude API error: ${response.status}` }, { status: response.status });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || "Sorry, I couldn't generate a response.";

    return NextResponse.json({ response: text });
  } catch {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
