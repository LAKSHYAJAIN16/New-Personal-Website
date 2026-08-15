"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const socials = [
  { label: "GitHub", href: "https://github.com/LAKSHYAJAIN16" },
  { label: "LinkedIn", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
            Get in touch
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 text-4xl font-medium tracking-tight sm:text-6xl">
            Let&apos;s build something
            <br />
            <span className="font-display italic text-muted">together.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <motion.a
            href="mailto:lakshya16jain@gmail.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-block rounded-full bg-accent px-8 py-4 text-sm font-medium text-background"
          >
            lakshya16jain@gmail.com
          </motion.a>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex justify-center gap-8">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
