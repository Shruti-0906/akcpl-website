import { Award, Handshake, HeartHandshake, ShieldCheck } from "lucide-react";
import Image from "next/image";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

/** Accent sets the card's text colour; the bar, icon wash and rule inherit it
 *  via `current`, so each value needs exactly one colour. */
const VALUES = [
  {
    tag: "// Value 01",
    title: "Integrity",
    accent: "text-tertiary",
    Icon: ShieldCheck,
    description:
      "Upholding the highest ethical standards in all our interactions and treatments. Integrity at AKC is not negotiable across any dimension — clinical decisions, financial dealings, research conduct, government partnerships, patient communications, internal disputes.",
    inPractice:
      "We disclose adverse events. We refuse to inflate session counts. We hold ourselves to the same standard whether or not we are being audited. That is what integrity actually looks like.",
  },
  {
    tag: "// Value 02",
    title: "Collaboration",
    accent: "text-primary-subtle",
    Icon: Handshake,
    description:
      "Working together with patients, families, healthcare professionals, and every other stakeholder for optimal outcomes. Kidney care is a long, multi-year partnership — not a single transaction. The best results emerge when everyone touching the patient's care is pointed in the same direction.",
    inPractice:
      "We co-author research with IIT Bombay. We partner with state governments through PPP. We support charitable trusts running dialysis programmes. The institution is more capable as part of a coalition than alone.",
  },
  {
    tag: "// Value 03",
    title: "Excellence",
    accent: "text-primary",
    Icon: Award,
    description:
      "Striving for superior results through continuous process improvement and dedicated care. Excellence at AKC means accepting that today's standards are tomorrow's baseline — and that quality is the result of structured, repeating, accountable effort, not occasional brilliance.",
    inPractice:
      "Quarterly vascular access surveillance. NABH-accredited centres. Real-time IRDS quality dashboards. Continuous protocol updates from clinical research. Excellence is what these systems exist to deliver.",
  },
  {
    tag: "// Value 04",
    title: "Empathy",
    accent: "text-secondary-light",
    Icon: HeartHandshake,
    description:
      "Being present with care, compassion, and understanding for every patient and every employee, every step of the way. Empathy is what separates a clinical service that works from a clinical service that patients trust.",
    inPractice:
      "We remember our patients' names. We sit with families during difficult conversations. We treat our colleagues the way we treat our patients — with the same care. Empathy is felt before it's articulated.",
  },
] as const;

const ValuesSection = () => {
  return (
    <section id="values" className={cn("bg-[#e0f2f9] py-16 lg:py-27.5", GUTTER)}>
      <div className="flex flex-col">
        <div className="mb-14 grid gap-7.5 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-6 border-b border-black/10 pb-6">
              <span className="font-cormorant text-5xl leading-none text-black italic lg:text-6xl">
                III
              </span>
              <div className="flex flex-col gap-2 pt-2">
                <Eyebrow
                  label="Chapter Three · The rules of the road"
                  className="text-black"
                />
                <h2 className="section-heading text-black">
                  Our{" "}
                  <span className="text-primary-subtle italic">
                    core values
                  </span>
                  .
                </h2>
              </div>
            </div>
            <p className="font-roboto text-[17px] leading-5.5 font-light text-[#393f42]">
              Values are what an institution refuses to compromise on, even when
              it would be convenient. At AKC, four values shape every decision,
              from how a patient is spoken to during dialysis, to how a contract
              with a state government is negotiated, to how an error is
              acknowledged and corrected when it happens.
            </p>
            <p className="font-roboto text-[17px] leading-5.5 font-light text-[#393f42]">
              <strong className="font-bold">
                These values are not posters on a wall.
              </strong>{" "}
              They are tested daily, and the institution has been built around
              the assumption that every Apexian carries them into the work they
              do.
            </p>
          </div>

          <Image
            src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Vision+Mission+Values+-+Values+Section.jpg"
            alt="Core Values"
            width={640}
            height={480}
            sizes="(min-width: 1024px) 30rem, 100vw"
            loading="lazy"
            className="mx-auto w-full max-w-120 rounded-lg object-cover lg:mr-0"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-sm border border-[#ccc] bg-white p-8 transition-[transform,box-shadow] hover:-translate-y-0.75 hover:shadow-[0_16px_32px_rgba(14,37,64,0.06)] lg:p-10",
                value.accent,
              )}
            >
              <span
                className="absolute inset-x-0 top-0 h-0.75 bg-current"
                aria-hidden="true"
              />

              <div className="mb-6 grid size-16 place-items-center rounded-full bg-current/15">
                <value.Icon
                  strokeWidth={1.6}
                  className="size-7"
                  aria-hidden="true"
                />
              </div>

              <p className="mb-2.5 font-roboto text-[10.5px] font-bold tracking-[0.24em] uppercase">
                {value.tag}
              </p>
              <h3 className="mb-4.5 font-cormorant text-3xl leading-tight font-semibold italic">
                {value.title}
              </h3>

              <p className="mb-6 font-roboto text-[16px] leading-[1.78] text-[#393f42]">
                {value.description}
              </p>

              <div className="mt-auto rounded-sm border-l-2 border-current bg-[#f7f7f7] px-6 py-5">
                <p className="mb-2 font-roboto text-[9.5px] font-bold tracking-[0.22em] uppercase">
                  {"// In practice"}
                </p>
                <p className="font-roboto text-[14px] leading-[1.65] text-[#2F2F2F] italic">
                  {value.inPractice}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 rounded-[0_2px_2px_0] border-l-2 border-primary-subtle bg-white px-7 py-6.5">
          <h2 className="section-heading text-black">
            Our <span className="text-primary-subtle italic">Philosophy</span>
          </h2>
          <p className="mt-3 font-roboto text-[17px] leading-5.5 font-light text-[#393f42]">
            Our goal is to end kidney disease itself. Until then, we keep every
            CKD patient alive and well.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
