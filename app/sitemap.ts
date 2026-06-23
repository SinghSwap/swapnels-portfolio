import type { MetadataRoute } from "next";
import { caseStudies, projects, site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, priority: 1 },
    ...projects.map((p) => ({
      url: `${site.url}/projects/${p.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
    ...caseStudies.map((c) => ({
      url: `${site.url}/case-studies/${c.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
