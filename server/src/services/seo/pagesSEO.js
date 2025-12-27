export const PAGE_SEO = {
  home: {
    title: "Danishan | Systems Intelligence Engineer | Backend & AI Systems",
    description:
      "Systems Intelligence Engineer specializing in scalable backend systems, Node.js architecture, and AI foundations in C++. Based in Delhi NCR.",
    keywords: [
      "systems intelligence engineer",
      "backend systems engineer",
      "node.js technical lead",
      "c++ systems developer",
      "ai systems engineer india",
    ],
  },

  about: {
    title: "About Danishan | Systems Intelligence Engineer",
    description:
      "Learn about Danishan, a Systems Intelligence Engineer focused on scalable backend systems, C++ foundations, and intelligent machines.",
    keywords: [
      "about systems engineer",
      "backend engineer delhi",
      "technical lead node.js",
    ],
  },

  journey: {
    title: "My Journey | From Computation to Intelligent Systems",
    description:
      "A timeline of my journey from computer science fundamentals to building scalable and intelligent systems.",
    keywords: [
      "engineering journey",
      "systems engineering path",
      "ai engineer journey",
    ],
  },

  skill: {
    title: "Skills | Systems, Backend & AI Foundations",
    description:
      "Explore my skills in backend systems, Node.js architecture, C++, AI fundamentals, and engineering leadership.",
    keywords: [
      "backend engineering skills",
      "systems thinking",
      "c++ ai fundamentals",
      "node.js architecture",
    ],
  },

  blog: {
    title: "Blog | Systems Thinking, Backend & AI",
    description:
      "Technical writing on systems thinking, backend architecture, and learning AI from first principles.",
    keywords: [
      "systems thinking blog",
      "backend architecture articles",
      "ai from scratch c++",
    ],
  },

  experience: {
    title: "Experience | Technical Lead & Systems Engineer",
    description:
      "Professional experience as a Technical Lead and Systems Engineer building scalable backend platforms.",
    keywords: [
      "technical lead experience",
      "backend engineer portfolio",
      "systems engineer experience",
    ],
  },

  project: {
    title: "Projects | Scalable Systems & Intelligent Experiments",
    description:
      "A collection of backend systems, scalable architectures, and intelligent system experiments.",
    keywords: [
      "node.js backend projects",
      "systems engineering projects",
      "ai system experiments",
    ],
  },

  contact: {
    title: "Contact | Work With a Systems Intelligence Engineer",
    description:
      "Get in touch to collaborate on backend systems, intelligent platforms, or engineering leadership roles.",
    keywords: ["contact systems engineer", "hire backend engineer india"],
  },

  resume: {
    title: "Resume | Danishan – Systems Intelligence Engineer",
    description:
      "Download the resume of Danishan, a Systems Intelligence Engineer with backend and AI foundations.",
    keywords: [
      "systems engineer resume",
      "backend engineer resume",
      "technical lead resume",
    ],
  },
};

export const getPageSEO = (page) => {
  return PAGE_SEO[page] || null;
};
