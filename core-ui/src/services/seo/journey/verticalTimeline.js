export const getTimelineConfig = async () => {
  const timelineItems = [
    /* =====================================================
     1. EDUCATION – MILESTONE
    ===================================================== */
    {
      label: "May 2020 - Dec 2024",
      side: "left",
      component: {
        type: "milestone",
        data: {
          title: "College",
          subtitle: "B-Tech, Amity University",
          description:
            "Completed undergraduate studies while exploring extracurricular opportunities.",
        },
        iconName: "schoolIcon",
      },
    },

    /* =====================================================
     2. EVENT – FIRST HOST
    ===================================================== */
    {
      label: "Nov 2022",
      side: "right",
      component: {
        type: "event",
        data: {
          name: "First Time Hosting Event",
          location: "Stage Event",
          date: "Nov 2022",
          description:
            "Hosted an event on stage for the first time, marking a public speaking milestone.",
        },
      },
    },

    /* =====================================================
     3. INTERNSHIP – EXPERIENCE
    ===================================================== */
    {
      label: "May 2023 - Aug 2023",
      component: {
        type: "experience",
        data: {
          role: "Intern",
          org: "JKC Softwares LLP",
          period: "May 2023 - Aug 2023",
          description:
            "Gained hands-on experience in industry projects and team collaboration.",
        },
        responsibilities: [
          "Learning",
          "Assisting projects",
          "Skill development",
        ],
        list: ["Technology used", "Tools", "Processes"],
      },
    },

    /* =====================================================
     4. SDE-I – EXPERIENCE
    ===================================================== */
    {
      label: "Nov 2023 - Mar 2025",
      component: {
        type: "experience",
        data: {
          role: "SDE-I",
          org: "JKC Softwares LLP",
          period: "Nov 2023 - Mar 2025",
          description:
            "Worked on development tasks, collaborating with cross-functional teams.",
        },
        responsibilities: ["Coding", "Code reviews", "Feature implementation"],
        list: ["Java", "Python", "Git"],
      },
    },

    /* =====================================================
     5. TEAM FACILITATOR – EXPERIENCE
    ===================================================== */
    {
      label: "Jan 2025 - Mar 2025",
      side: "left",
      component: {
        type: "experience",
        data: {
          role: "Team Facilitator",
          org: "JKC Softwares LLP",
          period: "Jan 2025 - Mar 2025",
          description:
            "Led team activities and coordinated project tasks to improve efficiency.",
        },
      },
    },

    /* =====================================================
     6. FREELANCE START – MILESTONE
    ===================================================== */
    {
      label: "Sep 2025",
      side: "right",
      component: {
        type: "milestone",
        data: {
          title: "Started Freelance Journey",
          subtitle: "Independent Work",
          description:
            "Embarked on a freelance career, taking ownership of projects and clients.",
        },
        iconName: "freelanceIcon",
      },
    },

    /* =====================================================
     7. TECHNICAL PROJECT LEAD – EXPERIENCE
    ===================================================== */
    {
      label: "Mar 2025 - Present",
      component: {
        type: "experience",
        data: {
          role: "Technical Project Lead",
          org: "JKC Softwares LLP",
          period: "Mar 2025 - Present",
          description:
            "Leading technical projects, mentoring team members, and ensuring timely delivery.",
        },
        responsibilities: [
          "Project planning",
          "Technical guidance",
          "Team collaboration",
        ],
        list: [
          "Project Management",
          "Technology Leadership",
          "Problem Solving",
        ],
      },
    },
  ];

  return { layout: "center", alternate: true, data: timelineItems.reverse() };
};

export const getTimelineSampleConfig = async () => {
  const timelineItems = [
    /* =====================================================
     1. MILESTONE – LEFT (CUSTOM)
     ===================================================== */
    {
      label: "2015",
      side: "left",
      component: {
        type: "milestone",
        data: {
          title: "Foundation Started",
          subtitle: "The first step",
          description:
            "This marks the very beginning of the journey with minimal resources but clear vision.",
        },
        iconName: "homeIcon",
        link: {
          label: "Click Me",
          href: "#",
        },
      },
    },

    /* =====================================================
     2. ACHIEVEMENT – RIGHT (CUSTOM)
     ===================================================== */
    {
      label: "2016",
      side: "right",
      component: {
        type: "achievement",
        data: {
          title: "First Public Release",
          metric: "10K+ users",
          iconName: "homeIcon",
          description:
            "Product was released publicly and reached its first major adoption milestone.",
        },
      },
    },

    /* =====================================================
     3. PHASE – AUTO (CENTER MODE)
     ===================================================== */
    {
      label: "2017 – 2018",
      component: {
        type: "phase",
        data: {
          title: "Growth Phase",
          period: "2025-2030",
          description:
            "Focused on scaling infrastructure, hiring core team members, and stabilizing operations.",
          highlights: ["This is one of the book.", "Can you still make sense."],
        },
      },
    },

    /* =====================================================
     4. EXPERIENCE – AUTO
     ===================================================== */
    {
      label: "2019",
      component: {
        type: "experience",
        data: {
          role: "Lead Engineer",
          org: "ABC Technologies",
          period: "2019 – 2021",
          description:
            "Led the core engineering team and redesigned the system architecture for scale.",
        },
        responsibilities: ["lead", "Working", "Highlight"],
        list: ["C++", "Java", "Command"],
      },
    },

    /* =====================================================
     5. PRODUCT – LONG CONTENT (RESPONSIVE TEST)
     ===================================================== */
    {
      label: "2020",
      component: {
        type: "product",
        data: {
          name: "Platform v2",
          tagline: "Rebuilt from the ground up",
          version: "v-2.326",
          highlights: [
            "Modular architecture",
            "Performance optimizations",
            "Improved developer experience",
            "Enterprise-grade security",
          ],
          links: [
            { label: "Click", href: "#" },
            { label: "Click", href: "#" },
          ],
        },
      },
    },

    /* =====================================================
     6. DECISION – TURNING POINT
     ===================================================== */
    {
      label: "2021",
      component: {
        type: "decision",
        data: {
          decision: "Pivot to SaaS Model",
          impact: "High",
          reason: "Need to figure it out",
          description:
            "This strategic decision changed the revenue model and accelerated long-term growth.",
        },
      },
    },

    /* =====================================================
     7. EVENT – DATE HEAVY
     ===================================================== */
    {
      label: "Mar 2022",
      component: {
        type: "event",
        data: {
          name: "Global Launch Event",
          location: "Bangalore, India",
          date: "March 14, 2022",
          description:
            "Official global launch with partners, media coverage, and customer showcases.",
        },
        links: [
          { label: "Click", href: "#" },
          { label: "Click", href: "#" },
        ],
      },
    },

    /* =====================================================
     8. MEDIA – IMAGE
     ===================================================== */
    {
      label: "2022",
      component: {
        type: "media",
        data: {
          mediaType: "image",
          src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Launch day snapshot",
        },
      },
    },

    /* =====================================================
     9. MEDIA – QUOTE (EMPHASIS)
     ===================================================== */
    {
      label: "Reflection",
      component: {
        type: "media",
        data: {
          mediaType: "quote",
          text: "Building slowly but correctly mattered more than growing fast.",
          caption: "Founder’s note",
          emphasis: true,
        },
      },
    },

    /* =====================================================
     10. MILESTONE – FINAL (CUSTOM SIDE)
     ===================================================== */
    {
      label: "2024",
      side: "right",
      component: {
        type: "milestone",
        data: {
          title: "Platform Maturity",
          subtitle: "Stable & scalable",
          description:
            "The platform reached operational maturity with strong foundations for future expansion.",
        },
      },
    },
  ];

  return { layout: "center", alternate: true, data: timelineItems };
};
