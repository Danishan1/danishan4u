import { ENK } from "#constants";

export const heroEConfig = {
  [ENK.gallery]: {
    type: "E",
    context: "Gallery Highlights",
    headline: { primary: "Moments", emphasized: "Captured" },
    description:
      "Explore featured highlights, albums, interactive timelines, and media lightbox.",
    cta: {
      // primary: { label: "View Gallery", href: "#gallery" },
      // secondary: { label: "Submit Media", href: "#submit" },
    },
    background: {
      type: "image",
      src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    meta: {
      placement: "bottom-right",
      overlayOpacity: 0.3,
      tone: "light",
    },
  },

  [ENK.hobbies]: {
    type: "E",
    context: "Philosophy of Play & Growth",
    headline: { primary: "Explore", emphasized: "Hobbies" },
    description:
      "Creative, physical, intellectual, and community hobbies that shaped my growth.",
    cta: {
      primary: { label: "See Hobbies", href: "#hobbies" },
    },
    background: {
      type: "video",
      src: "https://cdn.pixabay.com/video/2022/07/11/123839-729019798_large.mp4",
    },
    meta: {
      placement: "bottom-left",
      overlayOpacity: 0.6,
      tone: "light",
    },
  },

  [ENK.volunteering]: {
    type: "E",
    context: "Philosophy of Giving Back",
    headline: { primary: "Impactful", emphasized: "Volunteering" },
    description:
      "Mentorship, community, and technical contributions that made a difference.",
    cta: {
      primary: { label: "View Stories", href: "#volunteering" },
    },
    background: {
      type: "image",
      src: "https://images.unsplash.com/photo-1497302347632-904729bc24aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    meta: {
      placement: "center",
      overlayOpacity: 0.4,
      tone: "light",
    },
  },

  [ENK.social]: {
    type: "E",
    context: "Connectivity Philosophy",
    headline: { primary: "Connect", emphasized: "With Me" },
    description:
      "Professional profiles, thought leadership, and community platforms.",
    cta: {
      primary: { label: "View Profiles", href: "#profiles" },
    },
    background: {
      type: "video",
      src: "https://cdn.pixabay.com/video/2022/04/09/113379-697718102_large.mp4",
    },
    meta: {
      placement: "center",
      overlayOpacity: 0.2,
      tone: "light",
    },
  },

  [ENK.home]: {
    type: "E",
    context: "Builder • Systems Thinker • Founder",
    headline: {
      primary: "Technical Project Lead",
      emphasized: "JKC Softwares",
    },
    description:
      "I build secure, scalable platforms at the intersection of engineering, product, AI, and compliance — focused on long-term impact, not shortcuts.",
    cta: {
      primary: {
        label: "Explore My Work",
        href: "project",
      },
      secondary: {
        label: "My Journey",
        href: "journey",
      },
    },
    background: {
      type: "video",
      src: "https://cdn.pixabay.com/video/2019/10/09/27669-365224683_large.mp4",
    },
    meta: {
      placement: "center",
      overlayOpacity: 0.2,
      tone: "light",
    },
  },

  [ENK.about]: {
    type: "E",
    meta: {
      placement: "top-left",
      overlayOpacity: 0.55,
      tone: "auto",
    },
    background: {
      type: "image",
      src: "https://images.unsplash.com/photo-1605493666700-0716438e655c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    context: "About Me",
    headline: {
      primary: "Builder, Thinker,",
      emphasized: "Systems Architect",
    },
    description:
      "I focus on designing systems that scale — technically, philosophically, and operationally. My work blends engineering depth with long-term vision.",
    cta: {
      primary: {
        label: "View Journey",
        href: "journey",
      },
      // secondary: {
      //   label: "My Philosophy",
      //   href: "/blog/philosophy",
      // },
    },
  },
};
