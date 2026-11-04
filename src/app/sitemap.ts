import type { MetadataRoute } from "next";

import { liveRoutes } from "@/config/navigation";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return liveRoutes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
