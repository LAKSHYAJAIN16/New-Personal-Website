import Image from "next/image";
import { projects } from "@/data/projects";
import { PhotoGallery } from "@/components/PhotoGallery";
import { ProjectsNotebook } from "@/components/ProjectsNotebook";
import { placeholderClass } from "@/lib/placeholder";
import { ExpandableRow } from "@/components/ExpandableRow";
import { NamePronunciation } from "@/components/NamePronunciation";
import { ContactIcon } from "@/components/ContactIcon";

const EMAIL = "l4jain@uwaterloo.ca";

const experience = [
  {
    role: "intern",
    organization: "Simile",
    description: "Working on multi-agent coordination in social settings.",
    paper: "https://ar5iv.labs.arxiv.org/html/2304.03442",
  },
  { role: "research assistant", organization: "UofT" },
  { role: "research assistant", organization: "UMissouri" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/LAKSHYAJAIN16", placeholder: false },
  { label: "LinkedIn", href: "https://linkedin.com/", placeholder: true },
  { label: "Twitter / X", href: "https://x.com/", placeholder: true },
  { label: "Cal.com", href: "https://cal.com/lakshya-jain-n3k441", placeholder: false },
];

const jumpLinks = [
  { href: "#work", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#achievements", label: "achievements" },
  { href: "#photobooth", label: "photos" },
  { href: "#contact", label: "contact" },
];

export default function Home() {
  return (
    <main className="portfolio-poster">
        <section id="about" className="poster-intro">
          <div className="flex items-center gap-3 sm:gap-5">
          <h1 className="poster-name group grid cursor-pointer font-medium lowercase text-ink">
            <span className="name-glitch-en col-start-1 row-start-1">Lakshya Jain</span>
            <span lang="hi" aria-hidden="true" className="name-glitch-hi col-start-1 row-start-1">
              लक्ष्य जैन
            </span>
          </h1>
          <NamePronunciation />
          </div>
          <div className="poster-details">
          <div>
          <p className="flex items-center gap-2 text-sm lowercase text-ink-soft">
            <Image src="/waterloo-logo.svg" alt="" width={21} height={24} className="shrink-0" />
            <span>cs student @ university of waterloo, on.</span>
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm lowercase text-ink-soft">
            <Image src="/laurier-leaf.png" alt="" width={21} height={21} className="shrink-0 bg-[#330072] p-0.5" />
            <span>business student @ wilfrid laurier university, on.</span>
          </p>

          </div>
          <nav aria-label="Sections" className="poster-nav flex flex-wrap gap-x-5 gap-y-3 text-sm">
            {jumpLinks.map((link) => (
              <a key={link.href} href={link.href} className="w-fit text-ink no-underline hover:text-accent">
                {link.label}
              </a>
            ))}
          </nav>
          </div>
        </section>

        <div className="index-content">
        <section id="work" className="scroll-mt-10">
          <div className="index-section-heading">
            <h2 className="label text-ink">work experience</h2>
          </div>
          <ul>
            {experience.map((entry) => (
              <li key={entry.organization}>
                <ExpandableRow title={`${entry.role} @ ${entry.organization}`} meta="remote">
                  <p className={entry.description ? "" : placeholderClass}>
                    {entry.description ?? "[details about this role to be added]"}
                  </p>
                  {entry.paper && (
                    <a href={entry.paper} className="mt-4 inline-block text-ink">
                      related reading: Generative Agents &rarr;
                    </a>
                  )}
                </ExpandableRow>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="scroll-mt-10">
          <div className="index-section-heading">
            <h2 className="label text-ink">projects</h2>
            <span className="label text-ink-soft">{String(projects.length).padStart(2, "0")} projects</span>
          </div>
          <ProjectsNotebook />
        </section>

        <section id="achievements" className="mt-16 scroll-mt-10">
          <div className="index-section-heading">
            <h2 className="label text-ink">achievements</h2>
            <span className="label text-ink-soft">05 achievements</span>
          </div>
          <ul className="achievement-grid">
            <li>
              <h3 className="project-title">National Science Seminar (India)</h3>
                <p>Runner Up</p>
              
            </li>
            <li>
              <h3 className="project-title">AIME</h3>
                <p>1× qualifier <span role="img" aria-label="sad face">😔</span></p>
              
            </li>
            <li>
              <h3 className="project-title">CCC</h3><p>Distinction</p>
            </li>
            <li>
              <h3 className="project-title">Euclid</h3><p>Distinction</p>
            </li>
            <li>
              <h3 className="project-title">Cayley</h3><p>Honour Roll · 2024</p>
            </li>
          </ul>
        </section>

        <section id="photobooth" className="mt-16 scroll-mt-10">
          <div className="index-section-heading">
            <h2 className="label text-ink">photos</h2>
          </div>
          <PhotoGallery />
        </section>

        <section id="contact" className="mt-16 scroll-mt-10">
          <h2 className="label text-ink-soft">{"// contact"}</h2>
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
          <a href={`mailto:${EMAIL}`} title={EMAIL} className="inline-flex min-h-11 items-center gap-2 text-ink">
            <ContactIcon name="email" />
            {EMAIL}
          </a>
            {socialLinks.map((link) =>
              link.placeholder ? (
                <span key={link.label} role="link" aria-disabled="true" aria-label={`${link.label} (link coming soon)`} title={`${link.label} — link coming soon`} className="inline-flex min-h-11 items-center gap-2 text-ink-soft">
                  <ContactIcon name={link.label} />
                  {link.label === "Twitter / X" ? "X" : link.label}
                </span>
              ) : (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label} className="inline-flex min-h-11 items-center gap-2 text-ink-soft hover:text-ink">
                  <ContactIcon name={link.label} />
                  {link.label !== "Cal.com" && link.label}
                </a>
              )
            )}
            <span className={placeholderClass}>résumé</span>
          </div>
        </section>

        <footer className="mt-16 border-t border-line pt-6 text-xs text-ink-soft">
          © {new Date().getFullYear()} Lakshya Jain
        </footer>
        </div>
    </main>
  );
}
