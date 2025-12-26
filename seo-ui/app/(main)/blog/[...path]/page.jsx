import { notFound } from "next/navigation";
import { MarkdownRenderer } from "#components";
import { apiCaller, getEndpoint } from "#utils";
import { user } from "../../../(main)/user.js";

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
  const userData = user;
  if (!userData) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: `Blogs - ${userData.name}`,
    description: userData.bio || `Portfolio of ${userData.name}`,
  };
}

// export async function generateMetadata({ params }) {
//   const { path } = await params;
//   if (!path || path.length > 4) return {};

//   const post = {};

//   if (!post) return {};

//   return {
//     title: post.title,
//     description: post.excerpt,
//     openGraph: {
//       title: post.title,
//       description: post.excerpt,
//     },
//   };
// }
