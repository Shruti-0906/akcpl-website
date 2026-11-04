import Image from "next/image";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { Photo, PhotoCaption } from "../components";

const ASDT_COURSES = [
  "Bachelor of Science in Dialysis Technology",
  "Diploma Course in Dialysis Technology",
  "Advance Diploma in Dialysis Technology",
  "PG Diploma in Dialysis Technology",
  "Certificate Course in Dialysis Technician",
] as const;

const CURRICULUM = [
  {
    eyebrow: "/01 · FOUNDATIONS",
    name: (
      <>
        Kidney &amp; <em className="text-primary-subtle italic">Nephrology</em>
      </>
    ),
    text: "Renal anatomy and physiology, chronic kidney disease, electrolyte balance, acid-base, the science of why dialysis works.",
  },
  {
    eyebrow: "/02 · TECHNOLOGY",
    name: (
      <>
        Dialysis{" "}
        <em className="text-primary-subtle italic">Machines &amp; Water</em>
      </>
    ),
    text: "Machine architecture, dialyser types, dialysate composition, RO water treatment plant operation, QA standards.",
  },
  {
    eyebrow: "/03 · CLINICAL",
    name: (
      <>
        Patient <em className="text-primary-subtle italic">Management</em>
      </>
    ),
    text: "Cannulation technique, vascular access care, monitoring vitals, recognising and managing intra-dialytic events.",
  },
  {
    eyebrow: "/04 · SAFETY",
    name: (
      <>
        Infection <em className="text-primary-subtle italic">Control</em>
      </>
    ),
    text: "Aseptic technique, biomedical waste management, dialyser handling, viral status protocols, hand hygiene.",
  },
] as const;

const ProgrammeSection = () => (
  <section
    id="programme"
    className={cn("relative bg-[#e0f2f9] py-32.5", GUTTER)}
  >
    <div className="mb-16">
      <Eyebrow
        label="The Programme"
        className="mb-5 text-[14px] font-normal text-black"
      />

      <h2 className="mb-4 font-cormorant text-[clamp(30px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        Two tracks.{" "}
        <em className="text-primary-subtle italic">One discipline.</em>
      </h2>

      <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
        The Apex School trains across two parallel professional tracks &mdash;
        the <strong className="font-normal">dialysis technician</strong> who
        runs the machine and works with the patient at the chair, and the{" "}
        <strong className="font-normal">dialysis nurse</strong> who provides
        clinical leadership on the floor.{" "}
        <em className="italic">
          Each track has its own curriculum, qualification, and career arc
        </em>{" "}
        &mdash; though students share core foundational training in nephrology,
        dialysis principles, and patient care.
      </p>
    </div>

    <div className="mb-12 grid gap-6 lg:grid-cols-2">
      <div className="flex w-full flex-col overflow-hidden rounded-[2px] bg-white">
        <Photo className="aspect-5/3 w-full">
          <Image
            src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/ASDT+-+Programme+Section+1.jpg"
            alt="Dialysis technician trainees"
            width={800}
            height={534}
            className="h-full w-full object-cover"
          />
          <PhotoCaption>
            <em className="font-normal text-primary-light italic">
              Dialysis technician trainees
            </em>{" "}
            &mdash; in classroom and clinical setting.
          </PhotoCaption>
        </Photo>

        <div className="flex flex-1 flex-col p-9">
          {/* `.track .section-label` is white on the white card in the
                reference, so the label reads as blank while still holding its
                line. Kept rather than dropped so the heading sits where it does
                on the original. */}
          <Eyebrow
            label="Track 01"
            className="mb-5 text-[14px] font-normal text-white"
          />

          <h3 className="mb-4 font-cormorant text-[28px] leading-[1.05] font-bold tracking-[-0.015em] text-black sm:text-[36px]">
            Diploma in{" "}
            <em className="text-primary-subtle italic">Dialysis Technology</em>
          </h3>

          <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
            For aspiring dialysis technicians
          </p>

          <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
            A structured programme covering{" "}
            <strong className="font-normal">
              kidney anatomy and physiology, principles of dialysis, machine
              operation, water treatment, vascular access management, infection
              control, and patient handling.
            </strong>{" "}
            Includes extensive supervised practicum at AKC centres before
            independent practice.
          </p>

          <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
            <strong className="font-bold text-black">ASDT Courses</strong>
          </p>

          <ul className="mb-[15px] ml-5 flex list-disc flex-col gap-3.5">
            {ASDT_COURSES.map((course) => (
              <li
                key={course}
                className="relative pl-[5px] font-roboto text-[17px] leading-[1.6] text-[#393f42] before:absolute before:top-2 before:-left-[18px] before:size-2 before:rotate-45 before:bg-primary-subtle"
              >
                {course}
              </li>
            ))}
          </ul>

          <div className="mt-auto grid grid-cols-2 gap-[18px] border-t border-[#ccc] pt-[18px]">
            <div>
              <p className="mb-1.5 font-roboto text-[9px] font-bold tracking-[0.18em] text-[#00b3ff] uppercase">
                Duration
              </p>
              <p className="font-roboto text-[16px] leading-[1.25] font-bold tracking-[-0.005em] text-secondary">
                Approx <em className="font-normal italic">2 years</em>
              </p>
            </div>
            <div>
              <p className="mb-1.5 font-roboto text-[9px] font-bold tracking-[0.18em] text-[#00b3ff] uppercase">
                Eligibility
              </p>
              <p className="font-roboto text-[16px] leading-[1.25] font-bold tracking-[-0.005em] text-secondary">
                12<sup>th</sup> Pass{" "}
                <em className="font-normal italic">(Science)</em>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col overflow-hidden rounded-[2px] bg-white">
        <Photo className="aspect-5/3 w-full">
          <Image
            src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/ASDT+-+Programme+Section+2.jpg"
            alt="Dialysis technician trainees"
            width={800}
            height={534}
            className="h-full w-full object-cover"
          />
          <PhotoCaption>
            <em className="font-normal text-primary-light italic">
              Dialysis nursing specialisation
            </em>{" "}
            &mdash; advanced clinical learning for nurses.
          </PhotoCaption>
        </Photo>

        <div className="flex flex-1 flex-col p-9">
          <Eyebrow
            label="Track 02"
            className="mb-5 text-[14px] font-normal text-white"
          />

          <h3 className="mb-4 font-cormorant text-[28px] leading-[1.05] font-bold tracking-[-0.015em] text-black sm:text-[36px]">
            Dialysis Nursing{" "}
            <em className="text-primary-subtle italic">Specialisation</em>
          </h3>

          <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
            For registered nurses entering nephrology
          </p>

          <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
            A post-qualification programme for{" "}
            <strong className="font-normal">
              GNM and B.Sc. Nursing graduates
            </strong>{" "}
            who want to specialise in dialysis nursing &mdash; covering advanced
            clinical management of dialysis patients, intra-dialytic
            complications, medication administration, transplant nursing
            fundamentals, and clinical leadership on the dialysis floor.
          </p>

          <div className="mt-auto grid grid-cols-2 gap-[18px] border-t border-[#ccc] pt-[18px]">
            <div>
              <p className="mb-1.5 font-roboto text-[9px] font-bold tracking-[0.18em] text-[#00b3ff] uppercase">
                Duration
              </p>
              <p className="font-roboto text-[16px] leading-[1.25] font-bold tracking-[-0.005em] text-secondary">
                Structured <em className="font-normal italic">certification</em>
              </p>
            </div>
            <div>
              <p className="mb-1.5 font-roboto text-[9px] font-bold tracking-[0.18em] text-[#00b3ff] uppercase">
                Eligibility
              </p>
              <p className="font-roboto text-[16px] leading-[1.25] font-bold tracking-[-0.005em] text-secondary">
                GNM <em className="font-normal italic">B.Sc. Nursing</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="grid gap-px overflow-hidden rounded-[2px] sm:grid-cols-2 lg:grid-cols-4">
      {CURRICULUM.map((cell) => (
        <div
          key={cell.eyebrow}
          className="flex w-full flex-col bg-white px-6.5 py-7.5"
        >
          <Eyebrow
            label={cell.eyebrow}
            className="mb-5 text-[14px] font-normal text-black"
          />
          <h4 className="mb-4 font-cormorant text-[22px] leading-[1.05] font-bold tracking-[-0.015em] text-black">
            {cell.name}
          </h4>
          <p className="flex-1 font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
            {cell.text}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default ProgrammeSection;
