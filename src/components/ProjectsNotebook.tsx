"use client";

import { projects } from "@/data/projects";
import { isPlaceholder, placeholderClass } from "@/lib/placeholder";

// Real repo creation dates, fetched from the GitHub API (github.com/LAKSHYAJAIN16/<repo>).
const CREATED: Record<string, string> = {
  Ramsey: "2026.09",
  langBIOS: "2026.09",
  Hem: "2026.09",
  AntSQL: "2026.08",
  AtlasTerminal: "2026.08",
  RiffSpace: "2026.08",
  "LLM Mafia": "2026.08",
  AntPoW: "2026.08",
};

export function ProjectsNotebook() {
  return (
    <ol className="notebook-log">
      {projects.map((project) => (
        <li key={project.title} className="notebook-entry">
          <span className="notebook-date">{CREATED[project.title] ?? ""}</span>
          <div>
            <h3 className={`project-title${project.title === "langBIOS" ? " project-title-preserve-case" : ""}`}>
              {project.title}
            </h3>
            <p className={`notebook-body ${isPlaceholder(project.description) ? placeholderClass : ""}`}>
              {project.description}
            </p>
            <p className="notebook-meta">
              {project.tags.join(" · ")}
              <span className="notebook-sep"> — </span>
              <a href={project.href} className="notebook-link">repo →</a>
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
