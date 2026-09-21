import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://teplydom.ru/sitemap.xml",
    host: "https://teplydom.ru",
  };
}
