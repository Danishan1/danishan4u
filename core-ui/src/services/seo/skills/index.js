// =====================================
// ENGINEERING FOCUS
// =====================================
export const thinkingDimensions = [
  { title: "Backend Architecture", metric: "Design" },
  { title: "Distributed Systems", metric: "Scalability" },
  { title: "Performance Optimization", metric: "Efficiency" },
  { title: "Database Engineering", metric: "Data" },
  { title: "Infrastructure Automation", metric: "DevOps" },
  { title: "Production Reliability", metric: "Operations" },
  { title: "Engineering Ownership", metric: "Delivery" },
];

// =====================================
// TECHNICAL EXPERTISE
// =====================================
export const skills = [
  {
    group: "Backend Engineering",
    list: [
      {
        name: "Backend Architecture & Service Design",
        level: "Advanced",
        type: "Core",
      },
      {
        name: "REST API Design & Development",
        level: "Advanced",
        type: "Core",
      },
      {
        name: "Distributed Systems & Event-Driven Architecture",
        level: "Strong",
        type: "Core",
      },
      {
        name: "Real-Time Applications & WebSockets",
        level: "Strong",
        type: "Core",
      },
      {
        name: "Authentication & Authorization",
        level: "Strong",
        type: "Core",
      },
    ],
  },

  {
    group: "Programming Languages",
    list: [
      {
        name: "TypeScript / JavaScript (Node.js)",
        level: "Advanced",
        type: "Core",
      },
      {
        name: "C++",
        level: "Advanced",
        type: "Core",
      },
      {
        name: "Python",
        level: "Working",
        type: "Supporting",
      },
      {
        name: "SQL",
        level: "Advanced",
        type: "Core",
      },
    ],
  },

  {
    group: "Databases & Distributed Technologies",
    list: [
      {
        name: "PostgreSQL",
        level: "Advanced",
        type: "Core",
      },
      {
        name: "MySQL",
        level: "Advanced",
        type: "Core",
      },
      {
        name: "MongoDB",
        level: "Strong",
        type: "Core",
      },
      {
        name: "Redis",
        level: "Strong",
        type: "Core",
      },
      {
        name: "Kafka",
        level: "Working",
        type: "Core",
      },
    ],
  },

  {
    group: "Infrastructure & Production",
    list: [
      {
        name: "Docker",
        level: "Strong",
        type: "Core",
      },
      {
        name: "Linux",
        level: "Strong",
        type: "Core",
      },
      {
        name: "Nginx",
        level: "Strong",
        type: "Core",
      },
      {
        name: "PM2",
        level: "Advanced",
        type: "Core",
      },
      {
        name: "Git & Version Control",
        level: "Advanced",
        type: "Core",
      },
    ],
  },

  {
    group: "Engineering Practices",
    list: [
      {
        name: "System Design",
        level: "Strong",
        type: "Core",
      },
      {
        name: "Performance Optimization",
        level: "Strong",
        type: "Core",
      },
      {
        name: "Database Optimization",
        level: "Strong",
        type: "Core",
      },
      {
        name: "Code Reviews & Mentoring",
        level: "Strong",
        type: "Core",
      },
      {
        name: "End-to-End Feature Ownership",
        level: "Advanced",
        type: "Core",
      },
    ],
  },
];

export const getSkills = async () => skills;
export const getThinkingDimensions = async () => thinkingDimensions;
