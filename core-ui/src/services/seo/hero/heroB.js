import { ENK } from "#constants";

export const heroBConfig = {
  [ENK.skill]: {
    type: "B",
    badge: "Core Expertise",
    title: {
      line1: "Backend &",
      line2: "Distributed",
      highlight: "Systems Engineering",
    },
    description:
      "Strong foundations combined with production-level backend development experience.",
    actions: [
      // { label: "Explore Skills", href: "#skills", type: "primary" },
      // { label: "Skill Depth", href: "#depth", type: "secondary" },
    ],
    visualCard: {
      title: "Key Skill Areas",
      points: [
        "Backend Architecture & API Design",
        "Distributed Systems & Scalability",
        "Performance & Reliability Engineering",
        "Data Structures & Algorithms",
        "System Design & Trade-offs",
        "Mentorship & Technical Ownership",
      ],
    },
  },

  [ENK.project]: {
    type: "B",
    badge: "Engineering Work",
    title: {
      line1: "Systems &",
      line2: "Backend",
      highlight: "Projects",
    },
    actions: [
      // { label: "Explore Projects", href: "#projects", type: "primary" },
    ],
    description:
      "Selected work demonstrating backend architecture, scalability, and real-world problem solving.",
    visualCard: {
      title: "Project Focus Areas",
      points: [
        "Backend Services & APIs",
        "Performance-Critical Systems",
        "Scalable Application Design",
        "Architecture Experiments",
      ],
    },
  },

  [ENK.tool]: {
    type: "B",
    badge: "Tooling Philosophy",
    title: { line1: "Mastering", line2: "Tools", highlight: "Efficiency" },
    description: "Tool categories, evolution, and build vs buy decisions.",
    actions: [{ label: "Explore Tools", href: "#tools", type: "primary" }],
    visualCard: {
      title: "Tool Categories",
      points: [
        "Core Engineering",
        "Architecture & Design",
        "Security & Trust",
        "AI & Automation",
        "Productivity & Knowledge",
      ],
    },
  },

  [ENK.faqs]: {
    type: "B",
    badge: "FAQs",
    title: { line1: "Questions", line2: "Answered", highlight: "Here" },
    description:
      "Quick links, categories, and contact for unanswered questions.",
    actions: [
      { label: "Browse FAQs", href: "#faqs", type: "primary" },
      { label: "Contact Us", href: "#contact", type: "secondary" },
    ],
    visualCard: {
      title: "FAQ Categories",
      points: [
        "About Work & Services",
        "Collaboration & Engagement",
        "Technical & Process Questions",
        "Personal / Journey Questions",
      ],
    },
  },
};
