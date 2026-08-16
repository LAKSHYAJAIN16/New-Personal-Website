"use client";

import { useState, useEffect } from "react";

const navItems = [
  { id: "about", label: "About", href: "#about" },
  { id: "work", label: "Work", href: "#work" },
  { id: "writing", label: "Writing", href: "#writing" },
  { id: "resume", label: "Resume", href: "#resume" },
];

export function SidebarNav() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="w-full md:w-64 md:shrink-0 md:border-r border-border min-h-screen p-8 md:p-10 flex flex-col justify-between bg-background">
      <div>
        {/* Brand Name */}
        <a href="#about" className="font-serif text-2xl tracking-tight text-foreground block mb-12">
          Lakshya Jain
        </a>

        {/* Navigation Items */}
        <nav className="flex md:flex-col gap-6 text-sm font-sans">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`transition-colors ${
                activeSection === item.id
                  ? "text-accent font-medium"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Button */}
      <div className="mt-12 md:mt-0">
        <a
          href="mailto:lakshya16jain@gmail.com"
          className="w-full block text-center rounded border border-accent/60 bg-transparent px-4 py-2.5 text-sm text-accent transition-all hover:bg-accent-subtle active:scale-95"
        >
          Get in touch
        </a>
      </div>
    </aside>
  );
}
