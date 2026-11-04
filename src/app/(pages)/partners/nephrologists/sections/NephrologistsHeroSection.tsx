import Image from "next/image";

import { SectionLabel } from "../components";

const NephrologistsHeroSection = () => (
  <section className="relative flex min-h-[80vh] items-center overflow-hidden px-6 text-white sm:px-10 lg:px-14.5">
    {/* Banner under a flat black scrim, matching the hospitals hero. This photo
        is far brighter than that one (220 against 132), so it needs a heavier
        scrim to land on the same backdrop and keep the white type legible. */}
    <div aria-hidden="true" className="absolute inset-0 z-0">
      <Image
        src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Banner/Nephrologist+Banner.jpg"
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/80" />
    </div>

    <div className="relative z-[2] w-full max-w-full pt-[142px]">
      <SectionLabel light>
        For Nephrologists &amp; Clinicians · Partnership
      </SectionLabel>
      <h1 className="mb-7 font-cormorant text-[clamp(48px,6vw,62px)] leading-[1.05] font-light tracking-[-0.01em] text-white [&_em]:text-[#00b3ff] [&_em]:italic">
        The career you trained for.
        <br />
        With the <em>institution</em> you didn&apos;t have.
      </h1>
      <p className="mb-12 max-w-[90%] font-roboto text-[17px] leading-[1.7] font-light text-white [&_em]:italic">
        AKC offers practising nephrologists six kinds of leverage their training
        prepared them for, and their career has not yet given them —{" "}
        <em>
          operational, intellectual, academic, reputational, and institutional.
        </em>
      </p>
    </div>
  </section>
);

export default NephrologistsHeroSection;
