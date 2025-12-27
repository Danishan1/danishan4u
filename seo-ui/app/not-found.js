import { Suspense } from "react";
import ErrorClient from "./ErrorClient.jsx";

export default function NotFoundPage() {
  return (
    <Suspense fallback={null}>
      <ErrorClient />
    </Suspense>
  );
}

export const metadata = {
  title: "Page Not Found | Danishan",
  description:
    "The page you are looking for does not exist. Explore systems engineering, backend architecture, and AI foundations instead.",

  robots: {
    index: false,
    follow: true,
  },

  openGraph: {
    title: "Page Not Found | Danishan",
    description:
      "This page does not exist. Visit the site to explore systems engineering and intelligent systems.",
    type: "website",
  },
};
