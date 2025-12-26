import { Suspense } from "react";
import ErrorClient from "./ErrorClient.jsx";

export default function NotFoundPage() {
  return (
    <Suspense fallback={null}>
      <ErrorClient />
    </Suspense>
  );
}
