import { ENK } from "#constants";

export const heroCConfig = {
  [ENK.experience]: {
    type: "C",
    eyebrow: "Experience Philosophy",
    headline: { primary: "Building", secondary: "Impact" },
    summary:
      "Professional growth and timeline across multiple roles, ventures, and key responsibilities.",
    cta: {
      // primary: { label: "View Experience", href: "#timeline" },
      // secondary: { label: "See Case Studies", href: "#case-studies" },
    },
    valueBlocks: [
      {
        title: "Founder & Builder Experience",
        description: "Hands-on leadership and product creation",
      },
      {
        title: "Key Responsibilities",
        description: "Cross-functional responsibilities across ventures",
      },
      {
        title: "Cross-Cutting Themes",
        description: "Leadership, systems thinking, AI & automation",
      },
    ],
  },

  [ENK.caseStudy]: {
    type: "C",
    eyebrow: "Case Study Philosophy",
    headline: { primary: "Learn", secondary: "Through Cases" },
    summary:
      "Featured case studies, structured for consistency, highlighting key challenges and solutions.",
    cta: {
      // primary: { label: "Explore Case Studies", href: "#case-studies" },
      // secondary: { label: "See Research", href: "/danishan/research" },
    },
    valueBlocks: [
      {
        title: "Featured Case Studies",
        description: "Selected impactful case studies across projects",
      },
      {
        title: "Case Study Index",
        description: "Quick navigation to all documented studies",
      },
      {
        title: "Navigation",
        description: "Links to projects and experience pages",
      },
    ],
  },

  [ENK.research]: {
    type: "C",
    eyebrow: "Research Overview",
    headline: { primary: "Discover", secondary: "Insights" },
    summary:
      "Landing page for research domains, featured studies, publications, and interactive knowledge graph.",
    cta: {
      primary: { label: "Explore Research", href: "#research-areas" },
      secondary: { label: "Collaboration", href: "#collaboration" },
    },
    valueBlocks: [
      {
        title: "Research Areas",
        description: "Domains, experiments, and field notes",
      },
      {
        title: "Featured Studies",
        description: "Highlighted insights and publications",
      },
      {
        title: "Interactive Graph",
        description: "Knowledge graph for navigation and discovery",
      },
    ],
  },
  [ENK.contact]: {
    type: "C",

    eyebrow: "Contact",

    headline: {
      primary: "Let’s Talk",
      secondary: "Ideas, Work, or Collaboration",
    },

    summary:
      "Whether you have a question, a proposal, or just want to connect — I’m always open to meaningful conversations.",

    cta: {
      primary: {
        label: "Send a Message",
        href: "#contact-form",
      },
      secondary: {
        label: "View Work",
        href: "/projects",
      },
    },

    valueBlocks: [
      {
        title: "Collaboration",
        description: "Open to startups, research, and long-term ventures.",
      },
      {
        title: "Consulting",
        description: "Architecture, systems design, and strategy.",
      },
      {
        title: "Speaking",
        description: "Talks, workshops, and knowledge sharing.",
      },
    ],
  },
};
