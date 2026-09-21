import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://teplydom.ru",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://teplydom.ru/privacy",
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
