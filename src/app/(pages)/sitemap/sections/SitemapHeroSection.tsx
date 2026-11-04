import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const SitemapHeroSection = () => {
  return (
    <section id="sitemap-hero" className={cn("bg-white pt-12 pb-6 lg:pt-16", GUTTER)}>
      <div className="mx-auto max-w-7xl">
        <Eyebrow label="Site Map" className="text-black" />

        <h1 className="mt-5 font-cormorant text-4xl leading-tight font-semibold text-black sm:text-5xl lg:text-6xl">
          The whole of Apex,{" "}
          <span className="text-primary-subtle italic">at a glance.</span>
        </h1>

        <p className="mt-4 max-w-3xl font-roboto text-sm leading-relaxed text-[#393f42] sm:text-base">
          Every part of the Apex Kidney Care website, laid out as a tree. Follow
          any branch to where you would like to go.
        </p>

      </div>
    </section>
  );
};

export default SitemapHeroSection;
