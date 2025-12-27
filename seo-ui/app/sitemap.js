import { apiCaller, getEndpoint } from "#utils";

function extractLeafSlugs(nodes, result = []) {
  if (!Array.isArray(nodes)) return result;

  for (const node of nodes) {
    if (node.children && node.children.length > 0) {
      extractLeafSlugs(node.children, result);
    } else if (node.slug) {
      result.push(node.slug);
    }
  }

  return result;
}

export default async function sitemap() {
  const baseUrl = getEndpoint(); // e.g. https://yourdomain.com/

  // -----------------------------
  // Static Pages
  // -----------------------------
  const staticPages = [
    "",
    "about",
    "journey",
    "skill",
    "experience",
    "project",
    "blog",
    "contact",
    "resume",
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // -----------------------------
  // Dynamic Blog Posts (Leaf Only)
  // -----------------------------
  const endpoint = getEndpoint("public/posts/blog-list");
  const response = await apiCaller({ endpoint });

  const blogTree = response?.success ? response.data : [];
  const leafSlugs = extractLeafSlugs(blogTree);

  const blogRoutes = leafSlugs.map((slug) => ({
    url: `${baseUrl}blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
