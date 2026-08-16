"use client";

import { AnimatedBackground } from "@/components/AnimatedBackground";
import { SidebarNav } from "@/components/SidebarNav";
import { AboutHero } from "@/components/AboutHero";
import { WorkSection } from "@/components/WorkSection";
import { WritingSection } from "@/components/WritingSection";
import { ResumeSection } from "@/components/ResumeSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-amber-100">
      <AnimatedBackground />

      <div className="mx-auto flex flex-col md:flex-row max-w-6xl min-h-screen">
        {/* Left Fixed/Sticky Sidebar */}
        <SidebarNav />

        {/* Main Content Area */}
        <main className="flex-1 px-6 py-10 md:px-16 md:py-14 space-y-12">
          <AboutHero />
          <WorkSection />
          <WritingSection />
          <ResumeSection />

          <footer className="pt-12 pb-6 border-t border-border/80 text-xs font-mono text-muted flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>&copy; {new Date().getFullYear()} Lakshya Jain — Waterloo CS &apos;30</p>
            <p>Designed with craft &amp; speed.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
