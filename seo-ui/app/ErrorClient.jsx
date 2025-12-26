"use client";

import { useSearchParams, useRouter } from "next/navigation";

import styles from "./page.module.css";
import { MyPages } from "#widgets";

const { ErrorPage } = MyPages;

export default function ErrorClient() {
  const params = useSearchParams();
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/");
  };

  return (
    <div className={styles.page}>
      <ErrorPage
        statusCode={params.get("code") || "404"}
        ErrorMsg={params.get("msg") || "not found"}
        statusDetail={params.get("detail")}
        responseCode={params.get("resp") || "NFERR404"}
        handleNavigate={handleNavigate}
        navigateTo={params.get("to") || "Home Page"}
      />
    </div>
  );
}
