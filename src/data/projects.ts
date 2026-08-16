export type ProjectCategory = "All" | "Full Stack" | "AI & Systems" | "Tools";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  href: string;
  github?: string;
  year: string;
  featured?: boolean;
  metrics?: string;
};

export const projects: Project[] = [
  {
    id: "nexus-flow",
    title: "NexusFlow Engine",
    description:
      "High-throughput real-time data streaming pipeline and analytics workflow engine built for ultra-low latency event processing.",
    category: "AI & Systems",
    tags: ["Rust", "TypeScript", "gRPC", "Kafka", "Next.js"],
    href: "https://github.com/LAKSHYAJAIN16",
    github: "https://github.com/LAKSHYAJAIN16",
    year: "2026",
    featured: true,
    metrics: "100k+ msg/sec",
  },
  {
    id: "prism-ai",
    title: "Prism AI Studio",
    description:
      "AI-assisted visual canvas for architecture design and automated code generation with local model inference support.",
    category: "Full Stack",
    tags: ["Next.js 16", "React 19", "Tailwind CSS", "Web Workers", "Python"],
    href: "https://github.com/LAKSHYAJAIN16",
    github: "https://github.com/LAKSHYAJAIN16",
    year: "2026",
    featured: true,
    metrics: "Production Ready",
  },
  {
    id: "hyper-cache",
    title: "HyperCache DB",
    description:
      "Distributed in-memory key-value cache store with custom eviction algorithms and zero-allocation binary protocol decoder.",
    category: "AI & Systems",
    tags: ["Go", "Distributed Systems", "Raft Consensus", "Docker"],
    href: "https://github.com/LAKSHYAJAIN16",
    github: "https://github.com/LAKSHYAJAIN16",
    year: "2025",
    featured: true,
    metrics: "< 1ms P99 Latency",
  },
  {
    id: "skema-ui",
    title: "Skema UI Design System",
    description:
      "Modular, highly dynamic React component library built with accessibility-first primitives and customizable token engine.",
    category: "Tools",
    tags: ["TypeScript", "React", "Framer Motion", "Tailwind"],
    href: "https://github.com/LAKSHYAJAIN16",
    github: "https://github.com/LAKSHYAJAIN16",
    year: "2025",
    featured: false,
    metrics: "Open Source",
  },
];
