import { ENK } from "#constants";

export const heroCConfig = {
  [ENK.experience]: {
    type: "C",
    eyebrow: "Professional Experience",
    headline: { primary: "Engineering", secondary: "Impact" },
    summary:
      "Backend-focused development experience with increasing ownership across architecture, system design, and production delivery.",
    cta: {
      primary: { label: "View Resume", href: "resume" },
      // secondary: { label: "See Blogs", href: "blog" },
    },
    valueBlocks: [
      {
        title: "Backend System Design",
        description: "Designing scalable services and modular architectures.",
      },
      {
        title: "End-to-End Ownership",
        description:
          "Owning features from design through deployment and optimization.",
      },
      {
        title: "Code Quality & Mentorship",
        description:
          "Maintaining engineering standards and guiding developers.",
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
      primary: "Let’s Connect",
      secondary: "Backend & Systems Engineering",
    },
    summary:
      "Open to backend engineering roles, system design discussions, and meaningful technical collaboration.",
    cta: {
      primary: {
        label: "View Projects",
        href: "project",
      },
      secondary: {
        label: "View Experience",
        href: "experience",
      },
    },
    valueBlocks: [
      {
        title: "Backend Roles",
        description: "SDE-II and backend engineering opportunities.",
      },
      {
        title: "Architecture Discussions",
        description: "System design, scalability, and performance engineering.",
      },
      {
        title: "Technical Collaboration",
        description: "Engineering-focused product and platform work.",
      },
    ],
  },
};
