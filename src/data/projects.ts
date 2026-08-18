// TODO: replace with your real projects
export type Project = {
  figure: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    figure: "01",
    title: "[Project One]",
    description: "[One sentence on what it does and why you built it.]",
    tags: ["Tag A", "Tag B", "Tag C"],
    href: "#",
  },
  {
    figure: "02",
    title: "[Project Two]",
    description: "[One sentence on what it does and why you built it.]",
    tags: ["Tag A", "Tag B"],
    href: "#",
  },
  {
    figure: "03",
    title: "[Project Three]",
    description: "[One sentence on what it does and why you built it.]",
    tags: ["Tag A", "Tag B", "Tag C"],
    href: "#",
  },
  {
    figure: "04",
    title: "[Project Four]",
    description: "[One sentence on what it does and why you built it.]",
    tags: ["Tag A"],
    href: "#",
  },
];
