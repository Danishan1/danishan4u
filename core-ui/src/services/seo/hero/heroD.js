import { ENK } from "#constants";

export const heroDConfig = {
  [ENK.service]: {
    type: "D",
    context: "Services Philosophy",
    headline: { main: "Empowering", accent: "Organizations" },
    narrative:
      "Comprehensive service offerings, engagement models, and proof of impact through case studies.",
    cta: {
      primary: { label: "View Services", href: "#services" },
      secondary: { label: "Get in Touch", href: "#contact" },
    },
    signals: [
      "Core Service Offerings",
      "Who These Services Are For",
      "Engagement Models",
      "How I Work",
      "Proof & Case Study Links",
    ],
  },

  [ENK.achievement]: {
    type: "D",
    context: "Achievement Philosophy",
    headline: { main: "Tracking", accent: "Milestones" },
    narrative:
      "Major milestones, professional recognition, product and ecosystem achievements, and community impact.",
    cta: {
      primary: { label: "View Achievements", href: "#achievements" },
    },
    signals: [
      "Major Milestones",
      "Professional Recognition",
      "Product & Ecosystem Achievements",
      "Community & Thought Leadership",
      "Timeline / Index",
    ],
  },

  [ENK.testimonial]: {
    type: "D",
    context: "Trust Philosophy",
    headline: { main: "What People", accent: "Say" },
    narrative:
      "Featured testimonials across founders, teams, clients, and partners highlighting consistent themes.",
    cta: {
      primary: { label: "Read Testimonials", href: "#testimonials" },
    },
    signals: [
      "Featured Testimonials",
      "Testimonials by Context",
      "Consistent Highlights",
      "Call to Action",
    ],
  },

  [ENK.talk]: {
    type: "D",
    context: "Talks & Events",
    headline: { main: "Sharing", accent: "Knowledge" },
    narrative:
      "Landing page for talks and events, featuring calendars, recordings, signature topics, and speaker resources.",
    cta: {
      primary: { label: "View Talks", href: "#talks" },
      secondary: { label: "View Events", href: "#events" },
    },
    signals: [
      "Home / Landing",
      "Featured Talks",
      "Events Calendar",
      "Media & Recordings",
      "Speaker Resources",
    ],
  },

  [ENK.media]: {
    type: "D",
    context: "Media & Appearances",
    headline: { main: "Corporate", accent: "Highlights" },
    narrative:
      "Landing hub for media library, featured highlights, timeline milestones, and press kit resources.",
    cta: {
      // primary: { label: "Explore Media", href: "#media" },
    },
    signals: [
      "Media Library By Format",
      "Media Library By Topic / Campaign",
      "Featured Highlights",
      "Media Timeline / Milestones",
      "Press Kit & Journalist Access",
    ],
  },
};
