// =====================================
// THINKING DIMENSIONS (Senior Backend Mindset)
// =====================================
export const thinkingDimensions = [
  { title: "Scalable System Design", metric: "Architecture" },
  { title: "High-Performance Backend", metric: "Efficiency" },
  { title: "Database Design & Optimization", metric: "Data" },
  { title: "API Design & Integration", metric: "Integration" },
  { title: "Reliability & Fault Tolerance", metric: "Stability" },
  { title: "Observability & Monitoring", metric: "Production-Readiness" },
  { title: "Ownership & End-to-End Delivery", metric: "Accountability" },
];

// =====================================
// CORE BACKEND SKILL SET
// =====================================
export const skills = [
  {
    group: "Backend Systems & Architecture",
    list: [
      { name: "System Design & Scalability", level: "Advanced", type: "Core" },
      {
        name: "Microservices & Modular Architecture",
        level: "Advanced",
        type: "Core",
      },
      { name: "Event-Driven & Async Systems", level: "Advanced", type: "Core" },
      { name: "REST & GraphQL API Design", level: "Advanced", type: "Core" },
      {
        name: "Caching & Queueing Systems (Redis, Kafka)",
        level: "Strong",
        type: "Core",
      },
      {
        name: "Load Balancing & Horizontal Scaling",
        level: "Strong",
        type: "Core",
      },
    ],
  },
  {
    group: "Programming & Backend Tech",
    list: [
      { name: "Node.js", level: "Advanced", type: "Core" },
      { name: "C++", level: "Advanced", type: "Core" },
      {
        name: "Python (Scripting & Automation)",
        level: "Working",
        type: "Active",
      },
      {
        name: "SQL & NoSQL Databases (MySQL, MongoDB)",
        level: "Advanced",
        type: "Core",
      },
      { name: "Redis & In-Memory Data Stores", level: "Strong", type: "Core" },
    ],
  },
  {
    group: "Production & Reliability",
    list: [
      { name: "Linux Server Management", level: "Working", type: "Core" },
      {
        name: "Nginx / Reverse Proxy Configuration",
        level: "Working",
        type: "Core",
      },
      {
        name: "CI/CD Pipelines & Deployment Automation",
        level: "Strong",
        type: "Core",
      },
      {
        name: "Docker (Containerization Awareness)",
        level: "Working",
        type: "Core",
      },
      {
        name: "Monitoring & Logging (Prometheus, Grafana, ELK)",
        level: "Strong",
        type: "Core",
      },
      {
        name: "Testing & Code Quality (Unit, Integration)",
        level: "Strong",
        type: "Core",
      },
      { name: "Security & Authentication", level: "Strong", type: "Core" },
    ],
  },
  {
    group: "Leadership & Execution",
    list: [
      { name: "Technical Ownership", level: "Advanced", type: "Core" },
      { name: "Mentoring & Code Reviews", level: "Strong", type: "Core" },
      { name: "Cross-Functional Collaboration", level: "Strong", type: "Core" },
      {
        name: "Project Delivery & Reliability",
        level: "Advanced",
        type: "Core",
      },
    ],
  },
];

export const getSkills = async () => skills;
export const getThinkingDimensions = async () => thinkingDimensions;
