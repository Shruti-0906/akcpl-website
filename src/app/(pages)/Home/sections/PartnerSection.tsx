import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const PARTNERS = [
  {
    title: "I am a Nephrologist / Clinician",
    description:
      "Join AKC's clinical network, access the ApEx Pathshala training platform, and contribute to India's renal data ecosystem.",
    href: "/partners/nephrologists",
    linkLabel: "Partner with AKC as a nephrologist or clinician",
    image: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Homepage+-+Partner+1+(Partner+Section).jpg",
    alt: "Four Indian clinicians in white coats standing in front of a glowing kidney illustration",
  },
  {
    title: "I am a Hospital",
    description:
      "Partner with AKC to bring proven dialysis operations, quality protocols, and clinical expertise to your patient population.",
    href: "/partners/hospitals",
    linkLabel: "Partner with AKC as a hospital",
    image: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Homepage+-+Partner+2+(Partner+Section).jpg",
    alt: "Two clinicians standing outside the entrance of a modern hospital building",
  },
  {
    title: "I am a Trust / NGO",
    description:
      "AKC offers five distinct engagement models, ordered from lightest-touch to fullest partnership. Most trusts begin with one and grow into others over time; a few stay at the model that fits them and never need more. Both are entirely fine.",
    href: "/partners/trusts",
    linkLabel: "Partner with AKC as a trust or NGO",
    image: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Homepage+-+Partner+3+(Partner+Section).jpg",
    alt: "A group of people joining their hands together in a circle",
  },
  {
    title: "I am a Government / Policy maker",
    description:
      "Collaborate with AKC on public health initiatives, renal care policy, and the Indian Renal Data System to transform population health.",
    href: "/partners/government",
    linkLabel: "Partner with AKC as a government or policy maker",
    image: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Homepage+-+Partner+4+(Partner+Section).jpg",
    alt: "Officials reviewing and signing documents together across a meeting table",
  },
  {
    title: "I am an Investor",
    description:
      "Back a data-driven, mission-aligned healthcare organisation at the forefront of India's booming renal care market.",
    href: "/investors",
    linkLabel: "Partner with AKC as an investor",
    image: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Homepage+-+Partner+5+(Partner+Section).jpg",
    alt: "Two people shaking hands after closing an agreement",
  },
  {
    title: "I am a Dialysis Professional",
    description:
      "AKC's institute for the next generation of dialysis professionals. Affiliated with the Tata Institute of Social Sciences (TISS) and the Maharashtra State Board of Skill, Vocational Education and Training (MSBSVET).",
    href: "/partners/our-people",
    linkLabel: "Train with AKC as a dialysis professional",
    image: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Homepage+-+Partner+6+(Partner+Section).jpg",
    alt: "A dialysis technician attending to a patient beside a dialysis machine",
  },
] as const;

const PartnerSection = () => {
  return (
    <section
      id="partner"
      className={cn("scroll-mt-24 bg-white py-12 lg:py-16", GUTTER)}
    >
      <h2 className="text-center section-heading text-black">
        For Those Who Would Like to{" "}
        <span className="text-primary-subtle italic">Partner With Us</span>
      </h2>

      <div className="mx-auto mt-10 grid max-w-7xl gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
        {PARTNERS.map((partner) => (
          <article key={partner.title} className="flex flex-col bg-depth-card">
            <Image
              src={partner.image}
              alt={partner.alt}
              width={800}
              height={534}
              sizes="(min-width: 1024px) 27rem, (min-width: 640px) 50vw, 100vw"
              className="aspect-16/10 w-full object-cover"
              loading="lazy"
            />

            <div className="flex flex-1 flex-col gap-2.5 p-5 lg:p-6">
              <h3 className="font-cormorant text-lg leading-snug font-bold text-white sm:text-2xl">
                {partner.title}
              </h3>
              <p className="font-roboto text-sm leading-relaxed text-white/70 sm:text-base">
                {partner.description}
              </p>

              <Link
                href={partner.href}
                aria-label={partner.linkLabel}
                className="group mt-auto inline-flex items-center gap-1.5 self-start pt-4 font-roboto text-xs font-medium text-primary transition hover:text-primary/75 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none sm:text-sm"
              >
                Click here
                <ArrowRight
                  aria-hidden="true"
                  className="size-3.5 transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PartnerSection;
