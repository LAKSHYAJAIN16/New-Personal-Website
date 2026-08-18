// TODO: replace with your real projects
export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  color: "violet" | "pink" | "lime" | "orange" | "blue";
};

export const projects: Project[] = [
  {
    title: "[Project One]",
    description: "[One sentence on what it does and why you built it.]",
    tags: ["Tag A", "Tag B", "Tag C"],
    href: "#",
    color: "violet",
  },
  {
    title: "[Project Two]",
    description: "[One sentence on what it does and why you built it.]",
    tags: ["Tag A", "Tag B"],
    href: "#",
    color: "pink",
  },
  {
    title: "[Project Three]",
    description: "[One sentence on what it does and why you built it.]",
    tags: ["Tag A", "Tag B", "Tag C"],
    href: "#",
    color: "orange",
  },
  {
    title: "[Project Four]",
    description: "[One sentence on what it does and why you built it.]",
    tags: ["Tag A"],
    href: "#",
    color: "blue",
  },
];
