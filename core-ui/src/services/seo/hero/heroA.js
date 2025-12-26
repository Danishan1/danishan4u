import { ENK } from "#constants";

export const heroAConfig = {
  [ENK.journey]: {
    type: "A",
    badge: "My Journey",
    title: {
      line1: "My",
      line2: "Journey",
      highlight: "Highlights",
    },
    description:
      "From building strong foundations in college to leading technical projects and freelancing independently, this timeline showcases my growth, key milestones, and professional achievements.",
    actions: [
      { label: "Explore Projects", href: "project", type: "primary" },
      { label: "Lessons Learned (Blogs)", href: "blog", type: "secondary" },
    ],
    visualCard: {
      title: "Timeline Phases",
      points: [
        "College and Early Learning",
        "Public Speaking & Internships",
        "SDE-I and Team Leadership",
        "Freelance Projects",
        "Technical Project Lead",
        "Looking for SDE-II or a related role",
      ],
    },
  },

  [ENK.blog]: {
    type: "A",
    badge: "Blog & Research",
    title: {
      line1: "Insights",
      line2: "From My",
      highlight: "Writing",
    },
    description:
      "Home to Essays, Research Highlights, and Knowledge Mapping across Projects and Talks.",
    actions: [
      { label: "Explore Blog", href: "#blog-index", type: "primary" },
      { label: "Subscribe Updates", href: "#subscribe", type: "secondary" },
    ],
    visualCard: {
      title: "Content Highlights",
      points: [
        "Featured Essays & Research",
        "Categories & Series",
        "Knowledge Graph / Idea Map",
        "Cross-Linking Hub: Projects, Talks,Studies",
      ],
    },
  },

  [ENK.education]: {
    type: "A",
    badge: "Learning Philosophy",
    title: {
      line1: "Education",
      line2: "Through",
      highlight: "Experience",
    },
    description:
      "Formal, Applied, and Self-Directed Learning that shaped my ongoing growth.",
    actions: [
      { label: "View Formal Education", href: "#formal", type: "primary" },
      {
        label: "Explore Key Takeaways",
        href: "#takeaways",
        type: "secondary",
      },
    ],
    visualCard: {
      title: "Learning Dimensions",
      points: [
        "Formal Education",
        "Applied & Self-Directed Learning",
        "Learning Through Building",
        "Ongoing Education",
        "Key Takeaways",
      ],
    },
  },
};
