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
          { title: "What is HashiCorp Vault?", id: "vault-01" },
          { title: "Vault Architecture", id: "vault-02" },
          {
            title:
              "Designing a Secure, Zero-Trust File Vault: Encryption, Keys, and Access Control",
            id: "vault-03",
          },
        ],
      },
      {
        title: "AI Era",
        children: [
          { title: "What Are AI Swarms?", id: "ai-era-01" },
          {
            title:
              "Engineering AI Swarms: Architecture, Coordination Algorithms, and Emergent Intelligence",
            id: "ai-era-02",
          },

          {
            title:
              "Model Context Protocol (MCP): The Missing Infrastructure Layer for Tool-Connected AI",
            id: "ai-era-03",
          },
          {
            title:
              "MCP Engineering Preparation: How a Real MCP Server Works Under the Hood",
            id: "ai-era-04",
          },
          {
            title:
              "MCP + RAG: How Tool-Augmented, Knowledge-Grounded AI Agents Actually Work",
            id: "ai-era-05",
          },
          {
            title:
              "Preventing Hallucinations in Agentic AI Systems: A Systems Engineering Approach",
            id: "ai-era-06",
          },
          {
            title:
              "Hallucination Metrics and Benchmarks: How to Measure Trust in Agentic AI Systems",
            id: "ai-era-07",
          },
          {
            title:
              "Enterprise RAG Chunking: The Hidden Control Plane for Hallucination Prevention",
            id: "ai-era-08",
          },
          {
            title:
              "Agentic AI and Agentic RAG: Building Smarter, Grounded AI Agents",
            id: "ai-era-09",
          },
        ],
      },
    ],
  },
  {
    title: "APIs",
    children: [
      {
        title: "Types of APIs and When to Use Them: A Complete Guide",
        id: "api-01",
      },
      {
        title: "Choosing the Right API: Industry Best Practices",
        id: "api-02",
      },
      {
        title: "Building a Unified API Server for All API Types in JS",
        id: "api-03",
      },
      {
        title: "Building a Modern Node.js Backend with All Types of APIs",
        id: "api-04",
      },
    ],
  },
  {
    title: "Node.js",
    children: [
      {
        title: "Node.js: A Complete Guide to the Popular JavaScript Runtime",
        id: "node-01",
      },
      {
        title: "The Ultimate Guide to Node.js and Its Ecosystem",
        id: "node-02",
      },
      {
        title:
          "Debunking the Myth: Node.js Is Slow Because It’s Single-Threaded",
        id: "node-03",
      },
      {
        title: "Deep Dive into Node.js Libraries: Express.js",
        id: "node-04",
      },
      {
        title:
          "Mastering Express.js Middleware: Built-In, Third-Party, and Custom",
        id: "node-05",
      },
      {
        title: "Mastering Socket.IO: Real-Time Communication in Node.js",
        id: "node-06",
      },
      {
        title: "Mongoose: The Ultimate ODM for MongoDB in Node.js",
        id: "node-07",
      },
      {
        title: "MySQL2: Fast, Reliable MySQL Client for Node.js",
        id: "node-08",
      },
      {
        title: "Sequelize: Powerful ORM for Node.js and SQL Databases",
        id: "node-09",
      },
      {
        title: "Sequelize: Powerful ORM for Node.js and SQL Databases",
        id: "node-10",
      },
    ],
  },
  // { title: "Lifestyle", children: [{ title: "Travel Tips", id: 4 }] },
];

// export const postSidebar = [
//   {
//     title: "Tech",
//     children: [
//       {
//         title: "Frontend",
//         children: [
//           { title: "React Basics", id: 1 },
//           { title: "Advanced JS", id: 2 },
//         ],
//       },
//       { title: "Backend", children: [{ title: "Node.js", id: 3 }] },
//     ],
//   },
//   { title: "Lifestyle", children: [{ title: "Travel Tips", id: 4 }] },
// ];
