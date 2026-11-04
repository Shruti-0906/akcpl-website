import { JsonLd } from "@/components/seo";
import { Reveal } from "@/components/ui";
import { pageSeo } from "@/lib";

import SiteTreeSection from "./sections/SiteTreeSection";
import SitemapHeroSection from "./sections/SitemapHeroSection";

const seo = pageSeo({
  title: "Sitemap",
  description:
    "Every page on the Apex Kidney Care website, organised by section and by audience.",
  path: "/sitemap",
});

export const metadata = seo.metadata;

const SitemapPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <SitemapHeroSection />
      <Reveal>
        <SiteTreeSection />
      </Reveal>
    </>
  );
};

export default SitemapPage;
