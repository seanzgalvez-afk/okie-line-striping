import type { MetadataRoute } from "next";
import { citySlugs } from "@/lib/cities";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.okielinestriping.com";
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
  ];

  const cities: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${baseUrl}/line-striping/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: slug === "tulsa" ? 0.95 : 0.85,
  }));

  return [...home, ...cities];
}
