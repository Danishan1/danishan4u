"use client";

import { useRouter } from "next/navigation";
import { use } from "react";

export default function BlogDynamicPage({ params }) {
  const { username, path } = use(params);
  const router = useRouter();

  router.push(
    `/${username}/blog/nodejs/nodejs-a-complete-guide-to-the-popular-javascript-runtime`
  );

  return <div>Blog Page</div>;
}
