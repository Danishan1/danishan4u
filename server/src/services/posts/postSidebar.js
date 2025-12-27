export const getBlogListService = () => {
  // Deep copy to avoid mutating original data
  const posts = JSON.parse(JSON.stringify(postSidebar));

  const generateSlugs = (items, parentSlug = "") => {
    return items.map((item) => {
      // Create current path for slug
      const currentSlugPart = item.title
        .toLowerCase() // lowercase
        .replace(/[^\w\s]/g, "") // remove special characters
        .replace(/\s+/g, "-"); // replace spaces with hyphens

      const fullSlug = parentSlug
        ? `${parentSlug}/${currentSlugPart}`
        : currentSlugPart;

      // Add slug to current item
      const newItem = { ...item, slug: fullSlug };

      // Recursively process children if exist
      if (item.children) {
        newItem.children = generateSlugs(item.children, fullSlug);
      }

      return newItem;
    });
  };

  return generateSlugs(posts);
};

export const getIdBySlug = (slug) => {
  // Get the blog list with slugs
  const blogListWithSlugs = getBlogListService();

  // Recursive search function
  const search = (items) => {
    for (const item of items) {
      if (item.slug === slug) {
        return item.id || null; // Return id if found
      }
      if (item.children) {
        const found = search(item.children);
        if (found) return found;
      }
    }
    return null; // Not found
  };

  return search(blogListWithSlugs);
};

const postSidebar = [
  {
    title: "Security",
    children: [
      {
        title: "HashiCorp Vault",
        children: [
          {
            id: "vault-01",
            title: "What is HashiCorp Vault?",
            description:
              "Learn HashiCorp Vault for Node.js: securely manage API keys, DB credentials, and secrets with dynamic rotation, fine-grained access, and CI/CD integration.",
            keywords:
              "HashiCorp Vault Node.js, Vault secrets management, Vault dynamic secrets, Vault CI/CD integration, Node.js secure secrets, Vault database credentials, Vault API key management, Vault access control, Vault deployment workflow, Node.js secret rotation, Vault authentication backend, Vault policies, Vault environment variables, Vault central secrets store, Vault for microservices",
          },
          {
            id: "vault-02",
            title: "Vault Architecture",
            description:
              "Explore HashiCorp Vault architecture: learn how Vault secures secrets with a stateless API, core control plane, pluggable secret engines, and encrypted storage.",
            keywords:
              "HashiCorp Vault architecture, Vault core, Vault secret engines, Vault storage backend, Vault API layer, Vault encryption, Vault stateless API, Vault plugin system, Vault authentication methods, Vault lease manager, Vault audit logging, Vault clustering, Vault unseal mechanism, Vault secure secrets, Vault dynamic secrets, Vault CI/CD integration",
          },
          {
            id: "vault-03",
            title:
              "Designing a Secure, Zero-Trust File Vault: Encryption, Keys, and Access Control",
            description:
              "Design a zero-trust file vault: learn envelope encryption, per-file keys, secure previews, access control, audit, and client/server-side encryption strategies.",
            keywords:
              "zero-trust file vault, envelope encryption, per-file DEK, client-side encryption, server-side encryption, secure file storage, file access control, AEAD encryption, KMS key wrapping, ephemeral tokens, file integrity, audit logging, secure previews, chunked file encryption, streaming AEAD, key rotation, wrapped DEK, file versioning, ransomware protection, privacy-first cloud storage",
          },
        ],
      },
      {
        title: "AI Era",
        children: [
          {
            id: "ai-era-01",
            title: "What Are AI Swarms?",
            description:
              "Explore AI Swarms — multiple AI agents working together autonomously to solve complex tasks. Learn their architecture, agent types, communication models, and enterprise applications.",
            keywords:
              "AI swarms, multi-agent AI, autonomous AI agents, RAG systems, MCP tools, enterprise AI, distributed AI, AI orchestration, AI workflow, AI research agents",
          },
          {
            id: "ai-era-02",
            title:
              "Engineering AI Swarms: Architecture, Coordination Algorithms, and Emergent Intelligence",
            description:
              "Learn how AI Swarms work — decentralized, specialized agents coordinating via blackboard systems for emergent intelligence. Explore architectures, agent types, and coordination algorithms.",
            keywords:
              "AI swarms, multi-agent AI, decentralized AI, emergent intelligence, swarm architecture, AI agent coordination, blackboard system, HTN planning, Contract Net Protocol, stigmergy",
          },

          {
            id: "ai-era-03",
            title:
              "Model Context Protocol (MCP): The Missing Infrastructure Layer for Tool-Connected AI",
            description:
              "Discover Model Context Protocol (MCP), the standardized infrastructure that allows AI models to securely connect with tools, databases, APIs, and enterprise systems.",
            keywords:
              "Model Context Protocol, MCP, AI infrastructure, AI tool integration, AI enterprise systems, AI APIs, AI databases, autonomous AI, AI control bus, MCP tool server, MCP model client",
          },
          {
            id: "ai-era-04",
            title:
              "MCP Engineering Preparation: How a Real MCP Server Works Under the Hood",
            description:
              "Learn how a real Model Context Protocol (MCP) server works under the hood, from architecture and tool registration to execution flow, JSON communication, and enterprise readiness.",
            keywords:
              "Model Context Protocol, MCP server, AI infrastructure, AI tool integration, JSON RPC, MCP architecture, MCP execution flow, AI systems engineering, MCP backend, AI enterprise systems, MCP C++ implementation, MCP Python Node.js",
          },
          {
            id: "ai-era-05",
            title:
              "MCP + RAG: How Tool-Augmented, Knowledge-Grounded AI Agents Actually Work",
            description:
              "Discover how MCP and RAG work together to create knowledge-grounded, tool-augmented AI agents, enabling reasoning, retrieval, and real-world actions in enterprise systems.",
            keywords:
              "MCP RAG AI, tool-augmented AI, knowledge-grounded AI, agentic AI systems, retrieval-augmented generation, MCP protocol, AI orchestration, AI enterprise agents, multi-step AI workflows, AI context fusion, LLM agents, AI automation systems",
          },
          {
            id: "ai-era-06",
            title:
              "Preventing Hallucinations in Agentic AI Systems: A Systems Engineering Approach",
            description:
              "Learn how to prevent hallucinations in agentic AI systems using RAG, MCP, validation agents, and structured workflows to build trustworthy, enterprise-grade AI.",
            keywords:
              "agentic AI hallucinations, prevent AI hallucinations, trustworthy AI systems, RAG, MCP, validation agents, structured AI workflows, enterprise AI safety, AI system design, hallucination-resistant AI, AI architecture best practices, AI control layers, multi-agent AI",
          },
          {
            id: "ai-era-07",
            title:
              "Hallucination Metrics and Benchmarks: How to Measure Trust in Agentic AI Systems",
            description:
              "Learn how to measure and benchmark hallucinations in agentic AI systems using groundedness, tool correctness, RAG validation, and multi-step consistency for safer, trustworthy AI.",
            keywords:
              "agentic AI hallucinations, hallucination metrics, hallucination benchmarks, groundedness score, RAG validation, MCP tool correctness, AI system trust, multi-step consistency, tool invocation accuracy, action safety AI, enterprise AI safety, hallucination measurement, AI evaluation metrics, trustworthy AI systems",
          },
          {
            id: "ai-era-08",
            title:
              "Enterprise RAG Chunking: The Hidden Control Plane for Hallucination Prevention",
            description:
              "Learn enterprise-grade RAG chunking strategies to reduce hallucinations, improve retrieval precision, and ensure traceable, auditable AI responses in agentic systems.",
            keywords:
              "RAG chunking, enterprise AI, hallucination prevention, retrieval augmentation, document chunking strategy, vector search, context grounding, metadata for AI, agentic AI systems, multi-step reasoning AI, traceable AI responses, auditable AI outputs, hybrid retrieval, semantic chunking, knowledge retrieval",
          },
          {
            id: "ai-era-09",
            title:
              "Agentic AI and Agentic RAG: Building Smarter, Grounded AI Agents",
            description:
              "Explore Agentic AI and Agentic RAG: build grounded AI agents that plan, act, retrieve knowledge, and safely execute workflows in enterprise systems.",
            keywords:
              "Agentic AI, Agentic RAG, grounded AI, enterprise AI agents, AI planning, multi-step reasoning AI, retrieval-augmented generation, RAG, MCP tools, AI workflow automation, tool-executing agents, provenance logging, AI safety, human-in-loop AI, AI agent architecture, context fusion, enterprise AI systems",
          },
        ],
      },
    ],
  },
  {
    title: "APIs",
    children: [
      {
        id: "api-01",
        title: "Types of APIs and When to Use Them: A Complete Guide",
        description:
          "Learn the different types of APIs—REST, SOAP, gRPC, GraphQL, WebSocket, WebRTC, and Webhooks—and when to use each for optimal performance and scalability.",
        keywords:
          "API types, REST API, SOAP API, gRPC, GraphQL, WebSocket, WebRTC, Webhooks, API guide, choosing APIs, API architecture, microservices APIs, real-time APIs, enterprise API design, API best practices, API decision tree, API integration",
      },
      {
        id: "api-02",
        title: "Choosing the Right API: Industry Best Practices",
        description:
          "Discover industry best practices for choosing APIs—REST, GraphQL, gRPC, WebSockets, WebRTC, and WebHooks—for real-time, event-driven, and enterprise-ready applications.",
        keywords:
          "API selection, choosing API, REST API, GraphQL, gRPC, WebSocket, WebRTC, WebHooks, real-time APIs, event-driven APIs, enterprise APIs, API architecture, API best practices, microservices APIs, modern API design, API decision guide",
      },
      {
        id: "api-03",
        title: "Building a Unified API Server for All API Types in JS",
        description:
          "Learn how to build a unified JavaScript API server supporting REST, GraphQL, WebSockets, gRPC, WebHooks, and WebRTC with shared core setup, scalable architecture, and best practices.",
        keywords:
          "Unified API server, JavaScript API server, REST API, GraphQL API, WebSocket server, gRPC API, WebHooks, WebRTC, full-stack JS APIs, scalable API architecture, Node.js APIs, multi-API project, shared server core, API server best practices",
      },
      {
        id: "api-04",
        title: "Building a Modern Node.js Backend with All Types of APIs",
        description:
          "Learn how to build a modern Node.js backend integrating REST, GraphQL, WebSockets, gRPC, WebHooks, and WebRTC with a shared core architecture for scalable, real-time, and event-driven applications.",
        keywords:
          "Node.js backend, unified API server, REST API, GraphQL API, WebSocket server, gRPC API, WebHooks, WebRTC, real-time APIs, microservices Node.js, multi-API architecture, scalable Node.js APIs, full-stack JS backend, event-driven APIs, modern API server",
      },
    ],
  },
  {
    title: "Node.js",
    children: [
      {
        id: "node-01",
        title: "Node.js: A Complete Guide to the Popular JavaScript Runtime",
        description:
          "Discover Node.js, the powerful JavaScript runtime for building scalable, high-performance, and real-time applications. Learn architecture, frameworks, use cases, and best practices.",
        keywords:
          "Node.js, JavaScript runtime, Node.js guide, Node.js architecture, Express.js, NestJS, Fastify, real-time applications, REST API, GraphQL API, WebSocket server, WebRTC, gRPC, server-side JavaScript, backend development, scalable Node.js apps, event-driven architecture",
      },
      {
        id: "node-02",
        title: "The Ultimate Guide to Node.js and Its Ecosystem",
        description:
          "Explore Node.js, the powerful JavaScript runtime powering web, mobile, desktop, and AI applications. Learn its architecture, ecosystem, platforms, and use cases.",
        keywords:
          "Node.js, JavaScript runtime, Node.js ecosystem, Express.js, NestJS, Fastify, Koa, React, Next.js, Electron, React Native, TensorFlow.js, WebSocket, WebRTC, gRPC, REST API, GraphQL API, Node.js development, cross-platform apps, backend JavaScript, server-side JavaScript, full-stack JavaScript",
      },
      {
        id: "node-03",
        title:
          "Debunking the Myth: Node.js Is Slow Because It’s Single-Threaded",
        description:
          "Debunk the myth that Node.js is slow. Learn how its single-threaded event loop, non-blocking I/O, and worker threads make it ideal for real-time and I/O-heavy applications.",
        keywords:
          "Node.js performance, Node.js single-threaded, Node.js event loop, non-blocking I/O, Node.js worker threads, real-time Node.js, Node.js I/O heavy, Node.js myth, Node.js vs multi-threaded servers, Node.js optimization, Node.js async, Node.js CPU tasks, Node.js best practices",
      },
      {
        id: "node-04",
        title: "Deep Dive into Node.js Libraries: Express.js",
        description:
          "Learn why Express.js is the most popular Node.js framework. Explore routing, middleware, REST APIs, real-world use cases, and best practices for scalable web development.",
        keywords:
          "Express.js tutorial, Node.js framework, Express.js routing, Express.js middleware, Express.js REST API, Express.js real-world examples, Express.js best practices, Express.js web development, Node.js API development, Express.js integration, Express.js Node.js combo, scalable Node.js apps",
      },
      {
        id: "node-05",
        title:
          "Mastering Express.js Middleware: Built-In, Third-Party, and Custom",
        description:
          "Master Express.js middleware: built-in, third-party, and custom. Learn how to handle requests, logging, security, validation, and error handling in Node.js apps.",
        keywords:
          "Express.js middleware, Node.js middleware, Express built-in middleware, Express third-party middleware, custom Express middleware, Express.js logging, Express.js security, Express.js validation, Express.js error handling, Node.js API development, Express.js tutorial, Express middleware best practices",
      },
      {
        id: "node-06",
        title: "Mastering Socket.IO: Real-Time Communication in Node.js",
        description:
          "Master Socket.IO in Node.js for real-time apps. Learn bidirectional communication, rooms, namespaces, broadcasting, middleware, and integration with Express.js.",
        keywords:
          "Socket.IO tutorial, Node.js real-time communication, Socket.IO Node.js, Socket.IO rooms, Socket.IO namespaces, Socket.IO middleware, real-time chat Node.js, live dashboards Node.js, Socket.IO Express integration, Node.js WebSocket library, Socket.IO best practices, Node.js multiplayer games, real-time apps Node.js",
      },
      {
        id: "node-07",
        title: "Mongoose: The Ultimate ODM for MongoDB in Node.js",
        description:
          "Master Mongoose for Node.js and MongoDB. Learn schemas, CRUD, validation, relationships, population, middleware, and Express.js integration for scalable apps.",
        keywords:
          "Mongoose Node.js tutorial, MongoDB ODM, Mongoose schemas, Node.js MongoDB CRUD, Mongoose middleware, Mongoose population, Mongoose validation, Node.js Express MongoDB, Mongoose hooks, Mongoose aggregation, MongoDB Node.js integration, Mongoose best practices, Mongoose relationships, Node.js database modeling",
      },
      {
        id: "node-08",
        title: "MySQL2: Fast, Reliable MySQL Client for Node.js",
        description:
          "Learn MySQL2 for Node.js: fast, promise-based MySQL client with connection pooling, prepared statements, transactions, and Express.js integration for scalable apps.",
        keywords:
          "MySQL2 Node.js tutorial, Node.js MySQL client, MySQL2 connection pooling, Node.js prepared statements, MySQL2 transactions, Express.js MySQL integration, Node.js database tutorial, MySQL2 async/await, scalable Node.js MySQL, Node.js MySQL CRUD, secure MySQL queries, MySQL2 streaming queries, Node.js relational database, MySQL2 best practices",
      },
      {
        id: "node-09",
        title: "Sequelize: Powerful ORM for Node.js and SQL Databases",
        description:
          "Master Sequelize ORM for Node.js: manage MySQL, PostgreSQL, SQLite, and more with models, associations, migrations, and promise-based CRUD operations.",
        keywords:
          "Sequelize Node.js tutorial, Sequelize ORM, Node.js MySQL ORM, PostgreSQL Node.js ORM, Sequelize CRUD operations, Sequelize associations, Sequelize migrations, Sequelize models, Node.js ORM tutorial, Sequelize Express.js integration, promise-based ORM Node.js, Sequelize validations, Sequelize seeders, Sequelize database management, scalable Node.js ORM",
      },
      {
        id: "node-10",
        title: "Sequelize: Powerful ORM for Node.js and SQL Databases",
        description:
          "Learn Supabase with Node.js: build real-time apps with managed PostgreSQL, authentication, serverless functions, and Express.js integration.",
        keywords:
          "Supabase Node.js tutorial, Supabase CRUD Node.js, Supabase real-time, Node.js PostgreSQL, Supabase authentication, Supabase Express.js integration, Supabase serverless functions, Supabase database Node.js, Supabase subscription tutorial, open-source Firebase alternative, Node.js real-time apps, Supabase backend Node.js, Supabase with React, Supabase API Node.js, Supabase setup Node.js",
        // { title: "Lifestyle", children: [{ title: "Travel Tips", description: "", keywords: "",id: 4 }] },
      },
    ],
  },
];

// export const postSidebar = [
//   {
//     title: "Tech",
//     children: [
//           { title: "React Basics", description: "", keywords: "",id: 1 },
//       {
//         title: "Frontend",
//         children: [
//       { title: "Backend", children: [{ title: "Node.js", description: "", keywords: "",id: 3 }] },
//           { title: "Advanced JS", description: "", keywords: "",id: 2 },
//         ],
//   { title: "Lifestyle", children: [{ title: "Travel Tips", description: "", keywords: "",id: 4 }] },
//       },
//     ],
//   },
// ];
