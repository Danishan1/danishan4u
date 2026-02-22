import { SERVICE_TECH_STACK_ICONS } from "./serviceTechStack";

const t = {
  [SERVICE_TECH_STACK_ICONS.REACT]:
    "React.js : A popular JavaScript library for building user interfaces.",
  [SERVICE_TECH_STACK_ICONS.VUE]:
    "Vue.js : A progressive JavaScript framework for building interactive web UIs.",
  [SERVICE_TECH_STACK_ICONS.ANGULAR]:
    "Angular : A TypeScript-based framework for building scalable web applications.",
  [SERVICE_TECH_STACK_ICONS.TAILWIND]:
    "Tailwind CSS : A utility-first CSS framework for rapid UI development.",
  [SERVICE_TECH_STACK_ICONS.BOOTSTRAP]:
    "Bootstrap : A responsive CSS framework with prebuilt UI components.",
  [SERVICE_TECH_STACK_ICONS.MATERIALUI]:
    "Material UI : A React component library implementing Google’s Material Design.",
  [SERVICE_TECH_STACK_ICONS.CHAKRAUI]:
    "Chakra UI : A modular React component library focused on accessibility and customization.",
  [SERVICE_TECH_STACK_ICONS.STYLEDCOMPONENT]:
    "Styled Components : A CSS-in-JS library for styling React components.",
  [SERVICE_TECH_STACK_ICONS.CSS]:
    "CSS : Cascading Style Sheets used for styling web pages.",
  [SERVICE_TECH_STACK_ICONS.HTML]:
    "HTML : The standard markup language for structuring web content.",
  [SERVICE_TECH_STACK_ICONS.NEXT]:
    "Next.js : A React framework for server-side rendering and static site generation.",
  [SERVICE_TECH_STACK_ICONS.JAVASCRIPT]:
    "JavaScript : The core scripting language of the web.",
  [SERVICE_TECH_STACK_ICONS.VITE]:
    "Vite : A fast build tool and development server for modern JavaScript frameworks.",
  [SERVICE_TECH_STACK_ICONS.PRETTIER]:
    "Prettier : A code formatter that enforces a consistent style.",
  [SERVICE_TECH_STACK_ICONS.SANITY]:
    "Sanity : A headless CMS for structured content.",
  [SERVICE_TECH_STACK_ICONS.CONTENTFUL]:
    "Contentful : A cloud-based headless CMS for managing digital content.",
  [SERVICE_TECH_STACK_ICONS.WORDPRESS]:
    "WordPress : A popular CMS for websites and blogs.",
  [SERVICE_TECH_STACK_ICONS.FLUTTER]:
    "Flutter : A UI toolkit by Google for building cross-platform apps.",
  [SERVICE_TECH_STACK_ICONS.NATIVESCRIPT]:
    "NativeScript : A framework for building native mobile apps using JavaScript/TypeScript.",
  [SERVICE_TECH_STACK_ICONS.KOTLIN]:
    "Kotlin : A modern programming language for Android development.",
  [SERVICE_TECH_STACK_ICONS.SWIFT]:
    "Swift : Apple’s programming language for iOS and macOS development.",
  [SERVICE_TECH_STACK_ICONS.JAVA]:
    "Java : A widely-used, platform-independent programming language.",
  [SERVICE_TECH_STACK_ICONS.WORKBOX]:
    "Workbox : A library for adding offline support with service workers.",
  [SERVICE_TECH_STACK_ICONS.PWA]:
    "PWA : Progressive Web App technology for building installable web apps.",
  [SERVICE_TECH_STACK_ICONS.FIREBASE]:
    "Firebase : Google’s backend-as-a-service platform for apps.",
  [SERVICE_TECH_STACK_ICONS.FASTLANE]:
    "Fastlane : A tool for automating mobile app deployment and release pipelines.",
  [SERVICE_TECH_STACK_ICONS.NODE]:
    "Node.js : A JavaScript runtime for server-side applications.",
  [SERVICE_TECH_STACK_ICONS.PYTHON]:
    "Python : A versatile high-level programming language.",
  [SERVICE_TECH_STACK_ICONS.GOLANG]:
    "Go (Golang) : A statically typed language designed for performance and scalability.",
  [SERVICE_TECH_STACK_ICONS.CPP]:
    "C++ : A powerful general-purpose programming language.",
  [SERVICE_TECH_STACK_ICONS.POSTGRESQL]:
    "PostgreSQL : An advanced open-source relational database system.",
  [SERVICE_TECH_STACK_ICONS.MYSQL]:
    "MySQL : A widely used relational database management system.",
  [SERVICE_TECH_STACK_ICONS.MONGODB]:
    "MongoDB : A NoSQL database for flexible and scalable applications.",
  [SERVICE_TECH_STACK_ICONS.DYNAMODB]:
    "DynamoDB : AWS-managed NoSQL database service.",
  [SERVICE_TECH_STACK_ICONS.NEO4J]:
    "Neo4j : A graph database for connected data.",
  [SERVICE_TECH_STACK_ICONS.AUTH0]:
    "Auth0 : An identity and authentication platform.",
  [SERVICE_TECH_STACK_ICONS.OKTA]:
    "Okta : An enterprise-grade identity and access management platform.",
  [SERVICE_TECH_STACK_ICONS.GRAPHQL]: "GraphQL : A query language for APIs.",
  [SERVICE_TECH_STACK_ICONS.GRPC]: "gRPC : A high-performance RPC framework.",
  [SERVICE_TECH_STACK_ICONS.AWS]:
    "AWS : Amazon Web Services, a leading cloud platform.",
  [SERVICE_TECH_STACK_ICONS.CLOUDINARY]:
    "Cloudinary : A cloud service for image and video management.",
  [SERVICE_TECH_STACK_ICONS.FIREBASESTORAGE]:
    "Firebase Storage : Scalable file storage by Firebase.",
  [SERVICE_TECH_STACK_ICONS.REDUX]:
    "Redux : A predictable state management library for JavaScript apps.",
  [SERVICE_TECH_STACK_ICONS.RECOIL]:
    "Recoil : A state management library for React applications.",
  [SERVICE_TECH_STACK_ICONS.REDIS]:
    "Redis : An in-memory data store for caching and databases.",
  [SERVICE_TECH_STACK_ICONS.HARUSHA]:
    "Harusha : A platform or tool (custom/internal) — definition pending update.",
  [SERVICE_TECH_STACK_ICONS.SUPABASE]:
    "Supabase : An open-source Firebase alternative that provides authentication, databases, and storage.",
  [SERVICE_TECH_STACK_ICONS.AWS_AMPLIFY]:
    "AWS Amplify : A set of tools and services to build, deploy, and host full-stack web and mobile apps on AWS.",
  [SERVICE_TECH_STACK_ICONS.PAYPAL]:
    "PayPal : A trusted online payment system for secure money transfers and transactions.",
  [SERVICE_TECH_STACK_ICONS.RAZORPAY]:
    "Razorpay : An Indian payment gateway offering seamless payment solutions for businesses.",
  [SERVICE_TECH_STACK_ICONS.GOOGLE_ANALYTICS]:
    "Google Analytics : A web analytics service that tracks and reports website traffic and user behavior.",
  [SERVICE_TECH_STACK_ICONS.HOTJAR]:
    "Hotjar : A behavior analytics tool that provides heatmaps, session recordings, and user feedback.",
  [SERVICE_TECH_STACK_ICONS.MIXPANEL]:
    "Mixpanel : A product analytics platform that helps track user interactions and engagement.",
  [SERVICE_TECH_STACK_ICONS.POSTHOG]:
    "PostHog : An open-source product analytics suite with event tracking, session recording, and feature flags.",
};

export const getTooltipMessage = (key) => t[key];
