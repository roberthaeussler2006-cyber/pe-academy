"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getProgress } from "../lib/progress";
import { UserProgress } from "../lib/types";

const modules = [
  { id: 1, title: "What is Private Equity", short: "Intro to PE" },
  { id: 2, title: "LBO Mechanics", short: "LBO Mechanics" },
  { id: 3, title: "Good LBO Targets", short: "LBO Targets" },
  { id: 4, title: "Value Creation", short: "Value Creation" },
  { id: 5, title: "Deal Process", short: "Deal Process" },
  { id: 6, title: "Key Metrics", short: "Key Metrics" },
  { id: 7, title: "Real Estate PE", short: "Real Estate PE" },
  { id: 8, title: "Interview Prep", short: "Interview Prep" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState<UserProgress>({ modules: {}, lastModuleId: null });
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setProgress(getProgress());
  }, [pathname]);

  const getStatus = (id: number): "complete" | "in-progress" | "locked" => {
    const mod = progress.modules[id];
    if (mod?.completed) return "complete";
    if (mod) return "in-progress";
    if (id === 1) return "locked";
    const prev = progress.modules[id - 1];
    if (prev?.completed) return "locked";
    return "locked";
  };

  const navContent = (
    <>
      <Link href="/" className="block px-5 py-5 border-b border-cream-300">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-clay-500 flex items-center justify-center">
            <span className="font-mono text-white text-sm font-bold">PE</span>
          </div>
          <div>
            <div className="text-ink-900 font-semibold text-sm tracking-wide">PE ACADEMY</div>
            <div className="text-ink-400 text-xs font-mono">v1.0</div>
          </div>
        </div>
      </Link>
      <nav className="flex-1 overflow-y-auto py-3">
        {modules.map((mod) => {
          const status = getStatus(mod.id);
          const isActive = pathname === `/module/${mod.id}`;
          return (
            <Link
              key={mod.id}
              href={`/module/${mod.id}`}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-5 py-3 text-sm transition-colors ${
                isActive
                  ? "bg-cream-200 text-clay-500 border-l-2 border-clay-500"
                  : "text-ink-600 hover:text-ink-900 hover:bg-cream-100 border-l-2 border-transparent"
              }`}
            >
              <span className="font-mono text-xs text-ink-400 w-5">{String(mod.id).padStart(2, "0")}</span>
              <span className="flex-1 truncate">{mod.short}</span>
              {status === "complete" && (
                <span className="w-2 h-2 bg-green-600" />
              )}
              {status === "in-progress" && (
                <span className="w-2 h-2 bg-clay-500" />
              )}
            </Link>
          );
        })}
      </nav>
      <div className="px-5 py-4 border-t border-cream-300">
        <div className="text-xs text-ink-400 font-mono">
          {Object.values(progress.modules).filter((m) => m.completed).length}/8 MODULES COMPLETE
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-cream-50 border-r border-cream-300 h-screen fixed left-0 top-0 z-40">
        {navContent}
      </aside>

      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-cream-50 border-b border-cream-300 flex items-center justify-between px-4 h-14">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-clay-500 flex items-center justify-center">
            <span className="font-mono text-white text-xs font-bold">PE</span>
          </div>
          <span className="text-ink-900 font-semibold text-sm">PE ACADEMY</span>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-ink-500 p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-cream-50 flex flex-col shadow-lg">
            {navContent}
          </aside>
        </div>
      )}
    </>
  );
}
