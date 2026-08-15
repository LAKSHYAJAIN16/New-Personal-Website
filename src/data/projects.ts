export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of what this project does and the problem it solves.",
    tags: ["Next.js", "TypeScript"],
    href: "#",
    year: "2026",
  },
  {
    title: "Project Two",
    description:
      "A short description of what this project does and the problem it solves.",
    tags: ["React", "Node.js"],
    href: "#",
    year: "2025",
  },
  {
    title: "Project Three",
    description:
      "A short description of what this project does and the problem it solves.",
    tags: ["Python", "Machine Learning"],
    href: "#",
    year: "2025",
  },
];
