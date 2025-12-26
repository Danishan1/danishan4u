"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BlogDynamicPage() {
  const router = useRouter();

  useEffect(() => {
    router.push(
      "/blog/nodejs/nodejs-a-complete-guide-to-the-popular-javascript-runtime"
    );
  }, [router]);

  return null; // or a loading state
}
