import { user } from "../../app/(main)/user.js";
import { apiCaller } from "./apiCaller.js";
import { getEndpoint } from "./getEndpoint.js";

export const getMetaPerPage = async (page) => {
  const pageKey = page === undefined ? "home" : page;

  const response = await apiCaller({
    endpoint: getEndpoint("public/seo/pages", pageKey),
  });

  let seo = {};
  if (response.success) {
    seo = response.data;
  }

  const alternateUrl = getEndpoint(pageKey === "home" ? "" : pageKey);

  return {
    title: seo?.title,
    description: seo?.description,
    keywords: seo?.keywords,

    alternates: {
      canonical: alternateUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: seo?.title,
      description: seo?.description,
      url: alternateUrl,
      siteName: user.name,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: seo?.title,
      description: seo?.description,
    },
  };
};
