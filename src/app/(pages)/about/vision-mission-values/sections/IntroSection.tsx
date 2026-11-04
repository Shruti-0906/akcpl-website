import Image from "next/image";

import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const CARDS = [
  {
    image: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Vision+Mission+Values+-+Vision+Icon.png",
    title: "Vision",
    teaser: "Where we are trying to go",
    teaserEm: "the destination.",
    href: "#vision",
  },
  {
    image: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Vision+Mission+Values+-+Mission+Icon.png",
    title: "Mission",
    teaser: "What we do along the way",
    teaserEm: "the path of work.",
    href: "#mission",
  },
  {
    image: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Vision+Mission+Values+-+Core+Icon.png",
    title: "Values",
    teaser: "How we conduct ourselves",
    teaserEm: "the rules of the road.",
    href: "#values",
  },
] as const;

const IntroSection = () => {
  return (
    <section className={cn("bg-white pt-14 pb-10 lg:pt-30 lg:pb-15", GUTTER)}>
      <div className="mx-auto grid max-w-7xl gap-10 text-center sm:grid-cols-3 sm:gap-6 lg:gap-12">
        {CARDS.map(({ image, title, teaser, teaserEm, href }) => (
          <div key={title} className="flex flex-col items-center gap-2">
            <Image
              src={image}
              alt=""
              width={80}
              height={80}
              className="mb-2 size-16 lg:size-20"
            />

            <p className="section-heading text-black uppercase">{title}</p>

            <p className="font-roboto text-[17px] leading-5.5 font-light text-[#393f42]">
              {teaser}
              <br />
              <em className="text-tertiary italic">-- {teaserEm}</em>
            </p>

            <a
              href={href}
              className="mt-2 font-roboto text-[10px] font-bold tracking-[0.18em] text-primary-subtle uppercase transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              Read More &gt;&gt;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntroSection;
