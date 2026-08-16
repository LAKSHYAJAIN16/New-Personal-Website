"use client";

import { useState, useRef, useEffect } from "react";
import { Reveal } from "./Reveal";

type OutputLine = {
  id: string;
  type: "input" | "output" | "system" | "error";
  text: string;
};

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<OutputLine[]>([
    {
      id: "1",
      type: "system",
      text: "Lakshya OS Terminal v2.6.0 (type 'help' for available commands)",
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const newHistory: OutputLine[] = [
      ...history,
      { id: Date.now().toString(), type: "input", text: `lakshya@portfolio:~$ ${trimmed}` },
    ];

    const cmd = trimmed.toLowerCase();

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else if (cmd === "help") {
      newHistory.push({
        id: (Date.now() + 1).toString(),
        type: "output",
        text: `Available Commands:
  - whoami    : Brief introduction
  - skills    : Technical stack & tools
  - projects  : Featured projects overview
  - contact   : Email & social links
  - sudo hire : Highly recommended action 😉
  - clear     : Clear output window`,
      });
    } else if (cmd === "whoami" || cmd === "about") {
      newHistory.push({
        id: (Date.now() + 1).toString(),
        type: "output",
        text: "Lakshya Jain — Software Engineer focused on high-performance web systems, clean API architectures, and elegant developer tools.",
      });
    } else if (cmd === "skills") {
      newHistory.push({
        id: (Date.now() + 1).toString(),
        type: "output",
        text: "Languages: TypeScript, Rust, Go, Python, SQL\nFrameworks: React 19, Next.js 16, Node.js, Tailwind CSS\nTools: Docker, Git, Kafka, PostgreSQL, gRPC",
      });
    } else if (cmd === "projects") {
      newHistory.push({
        id: (Date.now() + 1).toString(),
        type: "output",
        text: "1. NexusFlow Engine — Real-time event streaming pipeline (Rust / Kafka)\n2. Prism AI Studio — AI architectural canvas & code synthesis (Next.js / Web Workers)\n3. HyperCache DB — High throughput in-memory KV cache (Go / Raft)",
      });
    } else if (cmd === "contact") {
      newHistory.push({
        id: (Date.now() + 1).toString(),
        type: "output",
        text: "Email: lakshya16jain@gmail.com\nGitHub: https://github.com/LAKSHYAJAIN16",
      });
    } else if (cmd.startsWith("sudo hire")) {
      newHistory.push({
        id: (Date.now() + 1).toString(),
        type: "output",
        text: "Permission granted! Launching email client to start conversation...",
      });
      setTimeout(() => {
        window.location.href = "mailto:lakshya16jain@gmail.com?subject=Opportunity%20Offer";
      }, 800);
    } else {
      newHistory.push({
        id: (Date.now() + 1).toString(),
        type: "error",
        text: `Command not found: '${trimmed}'. Type 'help' for available commands.`,
      });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <section id="terminal" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-display text-3xl italic text-muted">Terminal CLI</h2>
            <span className="font-mono text-xs text-muted">Interactive Console</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-surface/90 font-mono shadow-2xl backdrop-blur-xl">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-border/80 px-4 py-3 bg-surface-hover/50">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-muted">bash — lakshya@portfolio:~</span>
              <div className="w-12" />
            </div>

            {/* Terminal Body */}
            <div className="h-64 overflow-y-auto p-4 text-xs leading-relaxed text-foreground space-y-2">
              {history.map((line) => (
                <div key={line.id}>
                  {line.type === "input" && (
                    <div className="text-accent font-semibold">{line.text}</div>
                  )}
                  {line.type === "output" && (
                    <pre className="whitespace-pre-wrap text-muted-foreground font-sans text-xs">
                      {line.text}
                    </pre>
                  )}
                  {line.type === "system" && (
                    <div className="text-muted">{line.text}</div>
                  )}
                  {line.type === "error" && (
                    <div className="text-red-400">{line.text}</div>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleCommand}
              className="flex items-center border-t border-border/80 px-4 py-2.5 bg-surface-hover/30"
            >
              <span className="mr-2 text-xs text-accent">lakshya@portfolio:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a command..."
                className="w-full bg-transparent text-xs text-foreground placeholder-muted focus:outline-none font-mono"
              />
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
