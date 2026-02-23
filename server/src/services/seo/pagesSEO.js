export const PAGE_SEO = {
  home: {
    title: "Danishan | Software Development Engineer | Backend Systems | Node.js & C++ ",
    description:
      "Backend-focused Software Engineer building scalable systems in Node.js & C++.",
    keywords: [
      "systems intelligence engineer",
      "backend systems engineer",
      "node.js technical lead",
      "c++ systems developer",
    ],
  },

  about: {
    title: "About Danishan | Software Development Engineer ",
    description:
      "Learn about Danishan, Backend-focused Software Engineer building scalable systems in Node.js & C++.",
    keywords: [
      "about systems engineer",
      "backend engineer delhi",
      "technical lead node.js",
    ],
  },

  journey: {
    title: "My Journey | From Computation to Intelligent Systems",
    description:
      "A timeline of my journey from computer science fundamentals to building scalable systems.",
    keywords: [
      "engineering journey",
      "systems engineering path",
    ],
  },

  skill: {
    title: "Skills | Systems, Backend Foundations",
    description:
      "Explore my skills in backend systems, Node.js architecture, C++ and engineering leadership.",
    keywords: [
      "backend engineering skills",
      "systems thinking",
      "c++ fundamentals",
      "node.js architecture",
    ],
  },

  blog: {
    title: "Blog | Systems Thinking, Backend",
    description:
      "Technical writing on systems thinking, backend architecture.",
    keywords: [
      "systems thinking blog",
      "backend architecture articles",
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
    title: "Projects | Scalable Systems | Node.js & C++ | Scalable Architecture",
    description:
      "A collection of backend systems, scalable architectures, and intelligent system experiments.",
    keywords: [
      "node.js backend projects",
      "systems engineering projects",
      "ai system experiments",
    ],
  },

  contact: {
    title: "Contact | Work With a Software Development Engineer",
    description:
      "Get in touch to collaborate on backend systems, or engineering leadership roles.",
    keywords: ["contact systems engineer", "hire backend engineer india"],
  },

  resume: {
    title: "Resume | Danishan – Software Development Engineer",
    description:
      "Download the resume of Danishan, a Software Development Engineer with backend.",
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
