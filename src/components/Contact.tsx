"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "./Reveal";

const socials = [
  { label: "GitHub", href: "https://github.com/LAKSHYAJAIN16" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter / X", href: "https://x.com" },
];

export function Contact({ onShowToast }: { onShowToast?: (msg: string) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("lakshya16jain@gmail.com");
    if (onShowToast) {
      onShowToast("Email copied to clipboard!");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    // Simulate sending message
    setSubmitted(true);
    if (onShowToast) {
      onShowToast("Message sent successfully!");
    }
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Get in touch
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-6xl">
              Let&apos;s build something
              <br />
              <span className="font-display italic text-muted">extraordinary together.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex justify-center">
              <button
                onClick={copyEmail}
                className="group flex items-center gap-3 rounded-full border border-border bg-surface px-6 py-3 text-xs font-mono text-foreground transition-all hover:border-accent hover:shadow-xl"
              >
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>lakshya16jain@gmail.com</span>
                <span className="text-muted group-hover:text-accent">📋</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Quick Message Form */}
        <Reveal delay={0.3} className="mt-16">
          <div className="rounded-2xl border border-border/80 bg-surface/60 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-6">
              Send a Quick Note
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl border border-accent/40 bg-accent/10 p-6 text-center font-mono text-xs text-accent"
              >
                ✓ Thanks for getting in touch! I&apos;ll get back to you shortly.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-muted mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Mercer"
                      className="w-full rounded-xl border border-border bg-surface-hover/50 px-4 py-2.5 text-foreground placeholder-muted focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-muted mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full rounded-xl border border-border bg-surface-hover/50 px-4 py-2.5 text-foreground placeholder-muted focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-muted mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full rounded-xl border border-border bg-surface-hover/50 px-4 py-2.5 text-foreground placeholder-muted focus:border-accent focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-accent py-3 font-semibold uppercase tracking-wider text-background transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </Reveal>

        {/* Social Links */}
        <Reveal delay={0.4}>
          <div className="mt-12 flex justify-center gap-8 font-mono text-xs">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
