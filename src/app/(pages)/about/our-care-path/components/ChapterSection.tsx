import Image from "next/image";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

type Chapter = {
  roman: string;
  tag: string;
  title: React.ReactNode;
  paragraphs: React.ReactNode[];
  calloutText: React.ReactNode;
  photo: string;
  photoAlt: string;
  photoVariant: "plain" | "teal";
  captionTag: string;
  captionText: React.ReactNode;
};

export const CHAPTERS: readonly Chapter[] = [
  {
    roman: "I",
    tag: "// The Arrival",
    title: (
      <>
        The first hour of{" "}
        <em className="text-primary-subtle italic">a chronic dialysis life.</em>
      </>
    ),
    paragraphs: [
      <>
        Almost no one walks into a dialysis centre for the first time without
        fear. The patient knows the diagnosis. They have heard things. They are
        about to surrender four hours of their day, three days of their week,
        for the rest of their life as it is currently imagined.{" "}
        <strong className="font-bold">
          The first encounter sets the entire arc of the relationship that
          follows.
        </strong>
      </>,
      <>
        AKC&rsquo;s centres are designed for this moment.{" "}
        <em className="text-tertiary italic">
          A clean reception area without the chaos of a hospital corridor.
        </em>{" "}
        A nephrologist or in-charge nurse who takes the time to explain &mdash;
        in plain language, in the patient&rsquo;s own language &mdash; what the
        modality is, why it is needed, and what the next year of life will look
        like in concrete terms. A walk-through of the treatment floor so the
        patient sees the chair they will sit in, the machine they will be on,
        the people who will be around them.
      </>,
      <>
        By the time the first session begins, the patient has not been informed
        &mdash; they have been{" "}
        <em className="text-tertiary italic">oriented.</em> The difference is
        not semantic. It is the foundation of everything that follows.
      </>,
    ],
    calloutText: (
      <>
        <strong className="font-bold">Orientation, not information.</strong> A
        frightened patient needs to feel the centre with their senses before
        they can absorb anything with their intellect.
      </>
    ),
    photo: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Our+Care+Path+-+Chapter+1.jpg",
    photoAlt:
      "A dialysis chair beside a window on an AKC treatment floor, with the station number and patient name displayed on the wall alongside it.",
    photoVariant: "plain",
    captionTag: "/ Chapter I · Photograph Region",
    captionText: (
      <>
        <em className="italic">The first walk-through</em> &mdash; the
        reception, the treatment floor, the chair where the patient will sit.
      </>
    ),
  },
  {
    roman: "II",
    tag: "// The Session",
    title: (
      <>
        Four hours,{" "}
        <em className="text-primary-subtle italic">
          built on protocol &amp; safety.
        </em>
      </>
    ),
    paragraphs: [
      <>
        The four hours in the chair are where AKC&rsquo;s clinical apparatus
        does its work.{" "}
        <strong className="font-bold">Pharmaceutical-grade water</strong> from
        the centre&rsquo;s RO plant. A{" "}
        <strong className="font-bold">calibrated machine</strong> that has been
        serviced to schedule. A{" "}
        <strong className="font-bold">dialysate prescription</strong> matched to
        the patient&rsquo;s weight, electrolytes, and vascular access.{" "}
        <em className="text-tertiary italic">
          Every parameter logged in real time into the Axis EMR.
        </em>
      </>,
      <>
        Safety is not an event &mdash; it is the entire architecture. Vitals are
        monitored continuously. Intra-dialytic events are flagged at the moment
        they occur, not at the end of the shift. Vascular access is examined
        every session for signs of recirculation, stenosis, or infection. The
        dialysate temperature, conductivity, blood-flow rate, and
        ultrafiltration target are watched against the prescription.{" "}
        <em className="text-tertiary italic">
          If anything deviates, someone is in front of the machine before the
          patient asks.
        </em>
      </>,
      <>
        The clinical standard is the same standard across every centre on the
        AKC network &mdash;{" "}
        <span className="mx-0.5 inline-flex items-center gap-1.5 rounded-full bg-[#EDF2EE] px-2.5 py-0.5 align-middle font-roboto text-[10px] font-semibold tracking-[0.16em] text-[#5C7766] uppercase">
          <span
            className="size-1.5 rounded-full bg-primary-subtle"
            aria-hidden="true"
          />
          Same Network Standard
        </span>{" "}
        whether the centre is a flagship in Mumbai, a hospital unit in
        Hyderabad, a government PPP in rural Madhya Pradesh, or a charitable
        trust centre serving low-income patients. The water, the machines, the
        protocols, the staff training, and the QA Dashboard oversight do not
        differ.
      </>,
    ],
    calloutText: (
      <>
        <strong className="font-bold">
          Scientific protocols are how empathy scales.
        </strong>{" "}
        A patient cannot be treated kindly if they are not first treated safely;
        safety is the precondition of every other kind of care.
      </>
    ),
    photo: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Our+Care+Path+-+Chapter+2.jpg",
    photoAlt:
      "A nurse checking a dialysis machine against a written prescription, a patient monitored mid-session beside a completed safety checklist, and a technician cannulating a vascular access under sterile conditions.",
    photoVariant: "teal",
    captionTag: "/ Chapter II · Photograph Region",
    captionText: (
      <>
        <em className="italic">The session itself</em> &mdash; machine,
        prescription, monitoring &mdash; the clinical core.
      </>
    ),
  },
  {
    roman: "III",
    tag: "// The Relationship",
    title: (
      <>
        The technician who{" "}
        <em className="text-primary-subtle italic">
          knows the patient by name.
        </em>
      </>
    ),
    paragraphs: [
      <>
        A chronic dialysis patient will, over years, spend more waking hours
        with the staff at their centre than with anyone outside their immediate
        family.{" "}
        <strong className="font-bold">
          The technician who cannulates them on Monday morning is the same one
          who will likely cannulate them next Monday, and the Monday after.
        </strong>{" "}
        The relationship is durable, intimate, and central to the
        patient&rsquo;s experience of treatment.
      </>,
      <>
        AKC trains its dialysis workforce through the{" "}
        <em className="text-tertiary italic">
          Apex School of Dialysis Technology
        </em>{" "}
        &mdash; the country&rsquo;s structured workforce pipeline AKC built in
        2011 because none existed. The training is technical, but it is also
        explicit about relational standards:{" "}
        <em className="text-tertiary italic">
          knowing the patient by name, observing changes in their condition
          without being asked, communicating with family members with dignity,
          escalating concerns up the clinical hierarchy without ego.
        </em>
      </>,
      <>
        What this looks like in practice is small. A technician who notices that
        a patient has lost weight since last session and flags it for
        nutritional review. An in-charge nurse who remembers that a
        patient&rsquo;s daughter is visiting from abroad this week. A
        nephrologist who knows that a particular patient prefers explanations
        drawn on paper rather than spoken.{" "}
        <em className="text-tertiary italic">
          This is not service. It is care, accumulated over years.
        </em>
      </>,
    ],
    calloutText: (
      <>
        <strong className="font-bold">The staff is the centre.</strong>{" "}
        Buildings and machines are durable; people are essential. AKC&rsquo;s
        workforce is trained to know that.
      </>
    ),
    photo: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Our+Care+Path+-+Chapter+3.jpg",
    photoAlt:
      "A dialysis technician resting a hand on the shoulder of a seated patient mid-session, with a nephrologist and nurse reviewing his chart beside the machine.",
    photoVariant: "plain",
    captionTag: "/ Chapter III · Photograph Region",
    captionText: (
      <>
        <em className="italic">The care team</em> &mdash; technician, nurse,
        nephrologist, in conversation with the patient.
      </>
    ),
  },
  {
    roman: "IV",
    tag: "// The Community",
    title: (
      <>
        The patients who{" "}
        <em className="text-primary-subtle italic">
          have walked this road before you.
        </em>
      </>
    ),
    paragraphs: [
      <>
        Maintenance dialysis can be isolating. The patient often feels like the
        only person they know living through the constraints of the modality
        &mdash; the fluid restrictions, the dietary calculations, the schedule
        that bends every other plan around itself. The{" "}
        <em className="text-tertiary italic">
          most powerful relief from this is the discovery that they are not
          alone.
        </em>
      </>,
      <>
        The treatment floor of an AKC centre is, by structure, a place where
        patients see other patients. They notice the woman in the adjacent chair
        who is on her tenth year of dialysis and still works full-time. The
        young man across the bay who got back to playing competitive chess last
        year. The retired teacher who became a peer support volunteer after his
        own successful transplant.{" "}
        <strong className="font-bold">
          The long-tenure patient is the new patient&rsquo;s most important
          teacher.
        </strong>{" "}
        AKC tries to make these connections visible.
      </>,
      <>
        Where appropriate, centres facilitate peer support &mdash; informal in
        some places, structured in others. Patient community events. Group
        education sessions. Family programmes for spouses, parents, and adult
        children.{" "}
        <em className="text-tertiary italic">
          The chronic dialysis patient is treated as a member of a community,
          not as an isolated case.
        </em>
      </>,
    ],
    calloutText: (
      <>
        <strong className="font-bold">The patient is not alone.</strong> A new
        patient meeting a long-tenure one is often the single most encouraging
        moment of their first year on dialysis.
      </>
    ),
    photo: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Our+Care+Path+-+Chapter+4.jpg",
    photoAlt:
      "Two families talking together in the corridor of an AKC centre beneath the branded signage, a long-tenure patient in conversation with a younger one.",
    photoVariant: "teal",
    captionTag: "/ Chapter IV · Photograph Region",
    captionText: (
      <>
        <em className="italic">The community</em> &mdash; patients connecting,
        peer support, family programmes.
      </>
    ),
  },
  {
    roman: "V",
    tag: "// The Horizon",
    title: (
      <>
        Dialysis is not the destination &mdash;{" "}
        <em className="text-primary-subtle italic">it is the bridge.</em>
      </>
    ),
    paragraphs: [
      <>
        For many patients on maintenance dialysis,{" "}
        <strong className="font-bold">
          a kidney transplant is the next chapter &mdash; not the final one.
        </strong>{" "}
        AKC&rsquo;s clinical philosophy treats this honestly: dialysis sustains
        life, transplant restores it. Every patient who is medically eligible
        for transplantation is actively counselled about the possibility, and
        walked through the multiple donor pathways that exist.
      </>,
      <>
        This is not a polite mention in a discharge note. It is{" "}
        <em className="text-tertiary italic">structured encouragement.</em> The
        transplant conversation is initiated early. Donor evaluation pathways
        are explained in detail. The family is brought in. The financial,
        surgical, immunological, and lifestyle implications are walked through.{" "}
        <em className="text-tertiary italic">
          For patients whose family donor isn&rsquo;t a match, the Paired Kidney
          Exchange registry opens a second door.
        </em>{" "}
        For those without a living donor at all, the waitlist is the third.
      </>,
      <>
        The transplant conversation is offered not because it is the cheaper
        option, or the more glamorous one &mdash; but because it is, for the
        right patient,{" "}
        <em className="text-tertiary italic">
          the path back to a fuller life.
        </em>{" "}
        AKC sees that and acts on it.
      </>,
    ],
    calloutText: (
      <>
        <strong className="font-bold">
          Encouragement is structural, not optional.
        </strong>{" "}
        Every transplant-eligible patient deserves to know about every available
        pathway. Hope is a clinical intervention.
      </>
    ),
    photo: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Our+Care+Path+-+Chapter+5.jpg",
    photoAlt:
      "A nephrologist sitting with a patient and his family at home, talking them through transplant options while a colleague takes notes.",
    photoVariant: "plain",
    captionTag: "/ Chapter V · Photograph Region",
    captionText: (
      <>
        <em className="italic">The transplant conversation</em> &mdash; family
        discussion, donor evaluation, the path forward.
      </>
    ),
  },
  {
    roman: "VI",
    tag: "// The Whole Person",
    title: (
      <>
        Dialysis is one organ.{" "}
        <em className="text-primary-subtle italic">
          The patient is a whole person.
        </em>
      </>
    ),
    paragraphs: [
      <>
        Chronic dialysis affects every part of a person&rsquo;s life &mdash; not
        just the kidney. Sleep is disrupted. Mood is affected. Diet becomes a
        daily calculation. Family relationships are recalibrated. Income may
        shift. Sexual health changes.{" "}
        <strong className="font-bold">
          Treating the kidney in isolation is treating only one part of what a
          person is going through.
        </strong>
      </>,
      <>
        AKC&rsquo;s care therefore extends beyond the dialysis chair.{" "}
        <em className="text-tertiary italic">Mental health support</em> &mdash;
        depression rates in maintenance dialysis patients run 25&ndash;45%
        globally, and AKC treats this as a clinical issue rather than a quietly
        tolerated one.{" "}
        <em className="text-tertiary italic">Nutritional counselling</em>{" "}
        &mdash; because the dietary calculations of a CKD patient are too
        complex to leave to a generic dietitian.{" "}
        <em className="text-tertiary italic">Family education</em> &mdash;
        because the spouse who learns to cook for a CKD diet is doing as much
        clinical work as anyone in the centre.
      </>,
      <>
        And quiet things, too. Help navigating insurance paperwork. Help finding
        a vocational option that fits a three-times-a-week schedule. Help
        thinking through whether a particular trip abroad is feasible.{" "}
        <em className="text-tertiary italic">
          The list of things a chronic dialysis patient needs is not on any
          standard menu &mdash; but the centre staff knows it well enough to
          help.
        </em>
      </>,
    ],
    calloutText: (
      <>
        <strong className="font-bold">
          The whole patient, not just the kidney.
        </strong>{" "}
        The boundaries of clinical care are drawn by what the patient actually
        needs &mdash; not by what fits inside a billing code.
      </>
    ),
    photo: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Our+Care+Path+-+Chapter+6.jpg",
    photoAlt:
      "Care beyond the dialysis chair: a mindfulness session, a patient preparing a renal-diet meal from a personalised plan, and a family reading together at home.",
    photoVariant: "teal",
    captionTag: "/ Chapter VI · Photograph Region",
    captionText: (
      <>
        <em className="italic">The whole person</em> &mdash; counselling,
        nutrition, family support, mental wellbeing.
      </>
    ),
  },
] as const;

const ChapterSection = ({
  chapter,
  index,
}: {
  chapter: Chapter;
  index: number;
}) => {
  const isEven = index % 2 === 1;

  return (
    <section
      className={cn("py-22.5", isEven ? "bg-white" : "bg-[#e0f2f9]")}
    >
      <div
        className={cn(
          "mx-auto grid items-stretch gap-16 lg:grid-cols-2",
          GUTTER,
        )}
      >
        <div className="pr-0 lg:pr-6">
          <div className="mb-5.5 inline-flex items-center gap-3.5">
            <span className="font-cormorant text-5xl leading-none text-black italic lg:text-6xl">
              {chapter.roman}
            </span>
            <span
              className="h-px w-15 bg-[#b3b3b3] opacity-50"
              aria-hidden="true"
            />
          </div>
          <Eyebrow label={chapter.tag} className="text-black" />
          <h2 className="mt-3.5 font-cormorant text-[28px] leading-[1.1] font-bold tracking-[-0.018em] text-black sm:text-[34px] lg:text-[42px]">
            {chapter.title}
          </h2>

          <div className="mt-6 flex flex-col gap-5 font-roboto text-[16.5px] leading-[1.78] text-[#2A2A2A]">
            {chapter.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div
            className={cn(
              "mt-7 rounded-sm border border-l-2 border-black/10 border-l-primary-subtle p-[24px_28px]",
              isEven ? "bg-[#e0f2f9]" : "bg-white",
            )}
          >
            <p className="mb-2.5 font-roboto text-[9.5px] font-semibold tracking-[0.22em] text-primary-subtle uppercase">
              The Care Principle
            </p>
            <p className="font-roboto text-[16.5px] leading-normal tracking-[-0.003em] text-secondary italic">
              {chapter.calloutText}
            </p>
          </div>
        </div>

        <div className="relative flex flex-col overflow-hidden rounded-sm border border-white shadow-[0_20px_35px_rgba(0,0,0,0.3)]">
          <div
            className="relative aspect-3/2 w-full sm:aspect-video lg:aspect-auto lg:flex-1"
            style={{
              background:
                chapter.photoVariant === "teal"
                  ? "linear-gradient(135deg, #0075a9 0%, #001f34 100%)"
                  : "linear-gradient(135deg, #003e68 0%, #0078ad 100%)",
            }}
          >
            <Image
              src={chapter.photo}
              alt={chapter.photoAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-fill"
            />
          </div>

          <div className="bg-[rgba(0,62,104,0.95)] p-5 lg:absolute lg:inset-x-0 lg:bottom-0 lg:left-61.25 lg:bg-[rgba(0,62,104,0.8)] lg:p-3.75">
            <p className="mb-2 font-roboto text-[10px] font-semibold tracking-[0.22em] text-primary-light uppercase lg:mb-3.5">
              {chapter.captionTag}
            </p>
            <p className="font-roboto text-[15px] leading-normal tracking-[-0.005em] text-[#e0f2f9] italic sm:text-[17px] sm:leading-[1.4]">
              {chapter.captionText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterSection;
