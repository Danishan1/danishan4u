import { getEndpoint } from "#utils";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: getEndpoint("sitemap.xml"),
  };
}
