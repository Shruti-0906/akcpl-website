import type { MetadataRoute } from "next";

import { env } from "@/config/env";
import { site } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  if (!env.isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
