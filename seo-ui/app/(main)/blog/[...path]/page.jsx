import { notFound } from "next/navigation";
import { MarkdownRenderer } from "#components";
import { apiCaller, getEndpoint } from "#utils";

export default async function BlogDynamicPage({ params }) {
  const { path } = await params;
  if (!path || path.length > 4) notFound();

  const prepare = path.join("__");
  const endpoint = getEndpoint(`public/posts/single/${prepare}`);
  const response = await apiCaller({ endpoint });

  if (!response.success) notFound();

  return <MarkdownRenderer content={response.data} />;
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { path } = await params;
  if (!path || path.length > 4) notFound();

  const prepare = path.join("__");
  const endpoint = getEndpoint(`public/posts/meta-info/${prepare}`);
  const response = await apiCaller({ endpoint });

  const meta = response.data;

  if (!meta) {
    return {
      title: "Blog Not Found | Danishan",
      description: "The requested blog post could not be found.",
    };
  }

  const alterLink = getEndpoint(meta.slug);

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    canonical: alterLink,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: alterLink,
      // images: [{ url: `https://yourdomain.com${meta.ogImage}` }],
    },
  };
}
