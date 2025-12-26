export const getProjects = async () => {
  return projects;
};

const projects = [
  {
    group: "Backend & Infrastructure Projects",
    list: [
      {
        code: "server",
        name: "Custom App Server Infrastructure",
        description:
          "Designed and managed custom application servers deployed on VPS and physical machines, handling Node.js applications, Nginx configuration, reverse proxying, SSL setup, and production-grade deployment workflows.",
      },
      {
        code: "mailserver",
        name: "Mail Server System",
        description:
          "Built a secure mail server capable of sending and receiving emails, implementing authentication, spam protection, and persistence of email data in a MySQL database for auditing and management.",
      },
    ],
  },
  {
    group: "Web Platforms & Showcase Websites",
    list: [
      {
        code: "itsrighttime",
        name: "itsRIGHTtime",
        description:
          "A multi-domain parent platform showcasing a diverse ecosystem of ventures across technology, creative services, food, fashion, and startup support, built with a focus on structured content and seamless integration.",
      },
      {
        code: "indiabillsweb",
        name: "IndiaBills Web",
        description:
          "A billing and invoicing platform designed for Indian businesses, providing tools for invoicing, inventory management, and reporting, along with a dedicated product landing page.",
      },
      {
        code: "creative",
        name: "itsRIGHTtime Creative",
        description:
          "A creative services showcase website highlighting a wide range of design, crafting, and service offerings across multiple divisions, departments, and specialized areas with a strong emphasis on branding and presentation.",
      },
      {
        code: "dev",
        name: "itsRIGHTtime Dev",
        description:
          "A developer-focused platform presenting software development services, scalable solutions, and technical capabilities within a unified digital ecosystem.",
      },
      {
        code: "portfolio",
        name: "Personal Portfolio",
        description:
          "A personal portfolio website showcasing professional experience, projects, technical skills, and real-world implementations with a clean and modern design.",
      },
      {
        code: "jkc",
        name: "JKC Softwares Showcase",
        description:
          "A corporate website built to present JKC Softwares’ services, solutions, and value proposition, emphasizing scalability, innovation, and enterprise-ready software delivery.",
      },
    ],
  },
  {
    group: "Libraries & Developer Tools",
    list: [
      {
        code: "socketio",
        name: "@itsrighttime/socket-io",
        description:
          "A scalable and high-performance Socket.IO management library designed for real-time systems. It supports one-to-one messaging, broadcasting, room-based communication, global announcements, Redis-based scaling, throttling, debouncing, compression, and secure authentication, enabling efficient handling of large concurrent connections.",
      },
      {
        code: "utils",
        name: "@itsrighttime/utils",
        description:
          "A comprehensive utility library providing reusable helpers for error handling, logging, validation, ID generation, formatting, date/time utilities, and security (encryption/decryption). Designed to streamline backend and frontend development by reducing repetitive boilerplate code.",
      },
      {
        code: "broadcast",
        name: "@itsrighttime/broadcast",
        description:
          "An advanced email service library built on top of Nodemailer, supporting attachments, CC/BCC, priority handling, templating, and scheduling. Provides a structured and extensible approach to email communication within applications.",
      },
      {
        code: "uicomponent",
        name: "@itsrighttime/ui-components",
        description:
          "A powerful and extensible React-based UI component library offering a wide range of reusable components, hooks, utilities, layouts, form controls, tables, icons, and special pages. Designed to accelerate frontend development while maintaining consistency, accessibility, and customization.",
      },
    ],
  },
  {
    group: "Software Products",
    list: [
      {
        code: "casgampro",
        name: "CasGamPro",
        description:
          "A casino gaming platform featuring multiple games including Teen Patti variants, Andar Bahar, Lucky 7, and Dragon Tiger. Designed with modular game logic, scalability, and real-time interaction support.",
      },
      {
        code: "indiabills",
        name: "IndiaBills",
        description:
          "A comprehensive billing and invoicing software designed for Indian businesses, providing tools for invoicing, inventory management, taxation-aware billing, and reporting through an easy-to-use platform.",
      },
      {
        code: "costcalc",
        name: "CostCalc",
        description:
          "A standalone project cost calculation software that models direct and dependent costs, including overheads and indirect expenses, enabling accurate product cost estimation and faster financial decision-making.",
      },
    ],
  },
];
