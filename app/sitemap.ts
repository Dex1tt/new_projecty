import type { MetadataRoute } from "next";
import { absoluteUrl, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/privacy/"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
