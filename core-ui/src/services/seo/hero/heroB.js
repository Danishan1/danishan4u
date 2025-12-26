import { ENK } from "#constants";

export const heroBConfig = {
  [ENK.skill]: {
    type: "B",
    badge: "Thinking Dimensions ",
    title: {
      line1: "Systems Intelligence",
      line2: "Engineer",
      highlight:
        "Designing scalable software systems today, and building the foundations for intelligent machines tomorrow.",
    },
    description:
      "Skills are systems. Intelligence emerges from fundamentals, not frameworks.",
    actions: [
      // { label: "Explore Skills", href: "#skills", type: "primary" },
      // { label: "Skill Depth", href: "#depth", type: "secondary" },
    ],
    visualCard: {
      title: "Core Skill Domains",
      points: [
        "Dsign, Develop & Deploy",
        "Engineering & Systems",
        "Security, Compliance & Trust",
        "Product & Platform Thinking",
        "AI & Automation",
        "Leadership & Execution",
      ],
    },
  },

  [ENK.project]: {
    type: "B",
    badge: "Project Philosophy",
    title: { line1: "Building", line2: "Products", highlight: "Platforms" },
    description: "Featured projects, categories, and real-world impact.",
    actions: [
      // { label: "Explore Projects", href: "#projects", type: "primary" },
    ],
    visualCard: {
      title: "Project Categories",
      points: [
        "Platforms & Products",
        "Infrastructure & Systems",
        "AI & Automation",
        "Experiments & R&D",
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
