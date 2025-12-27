import { ENK } from "#constants";

const NAV_ITEMS = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Journey", route: "/journey" },
  { label: "Skills", route: "/skill" },
  { label: "Blogs", route: "/blog" },

  { label: "Experience", route: "/experience" },
  { label: "Projects", route: "/project" },
  // {
  //   label: "Work",
  //   children: [
  //     { label: "Experience", route: "/experience" },
  //     { label: "Projects", route: "/project" },
  //     { label: "Case Studies", route: "/case-study" },
  //     { label: "Research", route: "/research" },
  //     { label: "Services", route: "/service" },
  //     { label: "Tools", route: "/tool" },
  //   ],
  // },
  // {
  //   label: "Recognition",
  //   children: [
  //     { label: "Achievements", route: "/achievement" },
  //     { label: "Testimonials", route: "/testimonial" },
  //     { label: "Talks & Events", route: "/talks-event" },
  //   ],
  // },
  // {
  //   label: "Media",
  //   children: [
  //     { label: "Media & Appearances", route: "/media" },
  //     { label: "Gallery", route: "/gallery" },
  //   ],
  // },
  // {
  //   label: "More",
  //   children: [
  //     { label: "Education", route: "/education" },
  //     { label: "Hobbies", route: "/hobbies" },
  //     { label: "Volunteering", route: "/volunteering" },
  //     { label: "Social Profiles", route: "/social-profile" },
  //     { label: "FAQs", route: "/faqs" },
  //   ],
  // },
  { label: "Contact Me", route: "/contact" },
  { label: "Resume", route: "/resume" },
];

export const getNavItems = () => {
  return NAV_ITEMS;
};
