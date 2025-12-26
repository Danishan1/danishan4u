import { skillsAIMaths } from "./ai";
import { skillsBackend } from "./backend";
import { skillsFoundation } from "./foundation";
import { skillsLeadership } from "./leadership";
import { skillsSoftwareArch } from "./softwareArch";
import { skillsSystemOs } from "./systemOs";
import { skillsUI } from "./ui";

const thinkingDimensions = [
  {
    title: "Systems Thinking",
    description:
      "Designing software as interconnected systems, accounting for dependencies, failure modes, scalability, and long-term evolution.",
    iconName: "network",
    metric: "Interconnectivity",
  },
  {
    title: "First-Principles Reasoning",
    description:
      "Breaking complex problems down to fundamental truths before selecting abstractions, tools, or frameworks.",
    iconName: "layers",
    metric: "Fundamentals",
  },
  {
    title: "Risk-Aware Engineering",
    description:
      "Engineering with security, reliability, misuse cases, and operational risk considered from the outset.",
    iconName: "shield",
    metric: "Resilience",
  },
  {
    title: "Automation Mindset",
    description:
      "Eliminating repetition through automation, tooling, and systemized workflows.",
    iconName: "cpu",
    metric: "Leverage",
  },
  {
    title: "Builder’s Mentality",
    description:
      "Learning through building, shipping, and iterating on real-world systems.",
    iconName: "tool",
    metric: "Execution",
  },
  {
    title: "Architectural Foresight",
    description:
      "Making design decisions with future scale, maintainability, and system evolution in mind.",
    iconName: "blueprint",
    metric: "Longevity",
  },
  {
    title: "Operational Awareness",
    description:
      "Understanding how software behaves in production, from deployment to monitoring and recovery.",
    iconName: "activity",
    metric: "Stability",
  },
  {
    title: "Performance Consciousness",
    description:
      "Being aware of time, space, and resource constraints across the full software stack.",
    iconName: "zap",
    metric: "Efficiency",
  },
  {
    title: "Foundations-Driven Intelligence",
    description:
      "Approaching AI and automation through mathematical, algorithmic, and systems-level foundations.",
    iconName: "brain",
    metric: "Intelligence",
  },
  {
    title: "Ownership & Accountability",
    description:
      "Taking responsibility for systems across their entire lifecycle.",
    iconName: "check-circle",
    metric: "Ownership",
  },
];

const skills = [
  skillsFoundation,
  skillsBackend,
  skillsUI,
  skillsSoftwareArch,
  skillsSystemOs,
  skillsLeadership,
  skillsAIMaths,
];

export const getSkills = async () => {
  return skills;
};

export const getThinkingDimensions = async () => {
  return thinkingDimensions;
};
