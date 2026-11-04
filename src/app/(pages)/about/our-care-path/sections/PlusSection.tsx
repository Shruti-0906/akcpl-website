import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const CARDS = [
  {
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
    photoLabel: "/ Mental Health Support",
    photoSub: "Counselling · screening · referral",
    tag: "// 01 · MENTAL HEALTH",
    name: (
      <>
        A clinical issue,{" "}
        <em className="text-primary-subtle italic">not a tolerated one.</em>
      </>
    ),
    desc: (
      <>
        <strong className="font-bold">
          Depression and anxiety in maintenance dialysis are common
        </strong>{" "}
        &mdash; published literature places prevalence rates at 25&ndash;45%.
        AKC&rsquo;s centres treat this as a clinical issue: routine screening,
        accessible counselling, structured referral to mental health
        professionals when needed.{" "}
        <em className="text-tertiary italic">
          The kidney is being treated. So is the person.
        </em>
      </>
    ),
  },
  {
    icon: <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />,
    photoLabel: "/ Nutrition",
    photoSub: "Diet plans · family education",
    tag: "// 02 · NUTRITION",
    name: (
      <>
        Diet is{" "}
        <em className="text-primary-subtle italic">
          part of the prescription.
        </em>
      </>
    ),
    desc: (
      <>
        A dialysis patient&rsquo;s diet is a complex daily calculation &mdash;
        potassium, phosphorus, sodium, fluid, protein, all in tension with each
        other. AKC offers{" "}
        <strong className="font-bold">
          structured nutritional counselling
        </strong>{" "}
        through trained renal dietitians, with diet plans built around the
        patient&rsquo;s actual cuisine, family arrangements, and budget &mdash;
        not a generic template.
      </>
    ),
  },
  {
    icon: (
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    ),
    photoLabel: "/ Family Support",
    photoSub: "Education · involvement · respite",
    tag: "// 03 · FAMILY",
    name: (
      <>
        The family is{" "}
        <em className="text-primary-subtle italic">part of the team.</em>
      </>
    ),
    desc: (
      <>
        Chronic dialysis affects the whole family &mdash; spouse, parents,
        children, caregivers. AKC includes family in the care model:{" "}
        <strong className="font-bold">
          education about the modality, training on home-care between sessions,
          support for caregivers,
        </strong>{" "}
        and explicit recognition that the patient&rsquo;s outcome depends on the
        family&rsquo;s understanding.
      </>
    ),
  },
] as const;

const PlusSection = () => {
  return (
    <section className={cn("bg-[#e0f2f9] py-32.5", GUTTER)}>
      <div className="mb-16">
        <Eyebrow label="Beyond the Chair" className="text-black" />
        <h2 className="mt-5 section-heading text-black">
          The care that{" "}
          <em className="text-primary-subtle italic">doesn&rsquo;t end</em> when
          the session does.
        </h2>
        <p className="mt-5 font-roboto text-[17px] leading-5.5 font-light text-[#393f42]">
          Three dimensions of care that surround the dialysis treatment itself
          &mdash; each one a recognised contributor to better outcomes in
          maintenance dialysis, each one offered as a standard part of the AKC
          care model.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => (
          <div
            key={card.tag}
            className="flex flex-col overflow-hidden rounded-sm border border-black/10 bg-white"
          >
            <div
              className="flex aspect-5/3 w-full flex-col items-center justify-center p-6 text-center"
              style={{
                background: "linear-gradient(135deg, #003e68 0%, #0078ad 100%)",
              }}
            >
              <div className="mb-3.5 grid size-11.5 place-items-center rounded-full border border-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="size-5.5 text-white"
                  aria-hidden="true"
                >
                  {card.icon}
                </svg>
              </div>
              <Eyebrow label={card.photoLabel} className="text-white" />
              <p className="mt-1 font-roboto text-[14px] font-light text-white italic">
                {card.photoSub}
              </p>
            </div>

            <div className="flex flex-1 flex-col p-[30px_28px]">
              <Eyebrow label={card.tag} className="text-black" />
              <h3 className="mt-3.5 font-cormorant text-[24px] leading-[1.05] font-bold tracking-[-0.015em] text-black">
                {card.name}
              </h3>
              <p className="mt-3 font-roboto text-[17px] leading-5.5 font-light text-[#393f42]">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlusSection;
