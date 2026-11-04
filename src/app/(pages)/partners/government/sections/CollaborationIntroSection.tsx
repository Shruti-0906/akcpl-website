import { Eyebrow } from "@/components";
import { cn } from "@/lib";

const GOV_GUTTER = "px-6 sm:px-10 lg:px-15";

const CI_TITLE =
  "font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black";

const CI_BODY =
  "mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]";

const LABEL =
  "mb-5 text-sm leading-[normal] text-black [&>span]:w-6 [&>span]:opacity-100";

const TITLE_EM = "text-primary-subtle italic";

const COLLABORATION_AREAS = [
  {
    document: "Document i.",
    title: "Indian Renal Data System Brief",
    href: "#gov",
  },
  {
    document: "Document ii.",
    title: "Public Health Partnership Models",
    href: "#php",
  },
  {
    document: "Document iii.",
    title: "Policy Advocacy Capability",
    href: "#pa",
  },
] as const;

const CollaborationIntroSection = () => (
  <section
    id="areas-of-collaboration"
    className={cn(
      "scroll-mt-20 bg-[#e0f2f9] pt-30 pb-[59px] text-center",
      GOV_GUTTER,
    )}
  >
    <Eyebrow
      label="Four Areas of Collaboration"
      className={cn(LABEL, "inline-flex")}
    />

    <h2 className={cn(CI_TITLE, "mb-4")}>
      Where AKC
      <br />
      <em className={TITLE_EM}>can serve the country&apos;s mandate.</em>
    </h2>

    <p className={CI_BODY}>
      Each chapter below is a concrete offer &mdash; the kind that arrives at
      the table with a track record, a structure, and the discipline to be
      useful, <em className="italic">not just willing.</em>
    </p>

    <div className="mt-7.5 mb-12 grid gap-5 md:grid-cols-3">
      {COLLABORATION_AREAS.map((area) => (
        <article
          key={area.document}
          className="group rounded-[2px] border border-[#002238] bg-card-deep text-left hover:-translate-y-[3px] hover:border-primary-subtle hover:shadow-[0_10px_30px_rgba(0,34,56,0.16)]"
        >
          <a
            href={area.href}
            className="block h-full px-5.5 py-7 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <Eyebrow
              label={area.document}
              className={cn(LABEL, "text-white")}
            />
            <span className="mb-4 block font-cormorant text-[26px] leading-[1.05] font-bold tracking-[-0.015em] text-white">
              {area.title}
            </span>
            <Eyebrow label="Know more →" className={cn(LABEL, "text-white")} />
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default CollaborationIntroSection;
