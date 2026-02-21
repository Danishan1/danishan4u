import { ENK } from "#constants";

export const heroAConfig = {
  [ENK.journey]: {
    type: "A",
    badge: "Professional Journey",
    title: {
      line1: "Engineering",
      line2: "Growth &",
      highlight: "Milestones",
    },
    description:
      "A focused progression from foundational development to backend ownership and architectural responsibility in production systems.",
    actions: [
      { label: "Explore Projects", href: "project", type: "primary" },
      { label: "Read Technical Blogs", href: "blog", type: "secondary" },
    ],
    visualCard: {
      title: "Career Highlights",
      points: [
        "Computer Science Foundations",
        "Full-Stack Development (MERN)",
        "Backend System Ownership",
        "Architecture & Performance Optimization",
        "Mentorship & Code Reviews",
        "Operating at SDE-II Level",
      ],
    },
  },

  [ENK.blog]: {
    type: "A",
    badge: "Technical Writing",
    title: {
      line1: "Engineering",
      line2: "Insights &",
      highlight: "System Design",
    },
    description:
      "Articles and notes focused on backend architecture, system design, and engineering fundamentals.",
    actions: [{ label: "Explore Blog", href: "#blog-index", type: "primary" }],
    visualCard: {
      title: "Topics Covered",
      points: [
        "Backend Architecture",
        "Distributed Systems Concepts",
        "Performance Optimization",
        "System Design Case Studies",
        "Core Computer Science Foundations",
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
