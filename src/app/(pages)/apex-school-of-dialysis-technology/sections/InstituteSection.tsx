import Image from "next/image";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { PhotoCaption } from "../components";

const META = [
  {
    label: "Founded",
    value: (
      <>
        2011 · <em className="font-normal italic">Mumbai</em>
      </>
    ),
  },
  {
    label: "Faculty",
    value: (
      <>
        Practising <em className="font-normal italic">clinicians</em>
      </>
    ),
  },
  {
    label: "Clinical Practicum",
    value: (
      <>
        250 <em className="font-normal italic">AKC centres</em>
      </>
    ),
  },
] as const;

const InstituteSection = () => (
  <section className={cn("relative bg-[#e0f2f9] py-32.5", GUTTER)}>
    <div className="mb-16">
      <Eyebrow
        label="The Institute"
        className="mb-5 text-[14px] font-normal text-black"
      />

      <h2 className="mb-4 font-cormorant text-[clamp(30px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        Built by clinicians.{" "}
        <em className="text-primary-subtle italic">For the dialysis floor.</em>
      </h2>

      <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
        The Apex School of Dialysis Technology was founded in 2011 under the{" "}
        <strong className="font-normal">Apex Academia umbrella</strong> &mdash;
        AKC&rsquo;s institutional framework for clinical education. Unlike
        generic vocational training programmes, the School was designed and
        continues to be run by{" "}
        <em className="italic">
          practising nephrologists, senior dialysis nurses, and biomedical
          engineers
        </em>{" "}
        who manage AKC&rsquo;s centres every day. The curriculum reflects what
        dialysis actually requires.
      </p>
    </div>

    <div className="grid min-h-[480px] overflow-hidden rounded-[2px] bg-white lg:grid-cols-[1fr_1.1fr]">
      <div className="relative min-h-[380px] overflow-hidden">
        <Image
          src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/ASDT+-+Institute+Section.jpg"
          alt="Dialysis Professionals"
          width={403}
          height={390}
          className="h-auto w-full"
        />
        <PhotoCaption className="lg:ml-[215px]">
          <em className="font-normal text-primary-light italic">
            The Apex School campus
          </em>{" "}
          &mdash; classrooms, simulation lab, clinical practicum environment.
        </PhotoCaption>
      </div>

      <div className="flex flex-col justify-center px-8 py-12 lg:px-13 lg:py-14">
        <Eyebrow
          label="Founded 2011 · Apex Academia"
          className="mb-5 text-[14px] font-normal text-black"
        />

        <h3 className="mb-4 font-cormorant text-[28px] leading-[1.05] font-bold tracking-[-0.015em] text-black sm:text-[36px]">
          Apex School of{" "}
          <em className="text-primary-subtle italic">Dialysis Technology</em>
        </h3>

        <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
          A{" "}
          <strong className="font-normal">
            structured, accredited curriculum in dialysis technology and
            dialysis nursing
          </strong>
          , integrating classroom instruction with extensive hands-on training
          at active AKC centres. Two parallel learning tracks &mdash;{" "}
          <em className="italic">dialysis technician</em> and{" "}
          <em className="italic">dialysis nursing specialisation</em> &mdash;
          both leading to formal credentials accepted across the healthcare
          industry.
        </p>

        <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
          Faculty includes{" "}
          <strong className="font-normal">
            AKC&rsquo;s senior nephrologists, in-charge nurses, biomedical
            engineers, and infection control specialists
          </strong>
          . Students learn what they will actually do at work &mdash; on the
          same equipment, in the same protocols, with the same quality standards
          they will encounter on their first day as a credentialed professional.
        </p>

        <div className="grid gap-[18px] pt-5 sm:grid-cols-3">
          {META.map((cell) => (
            <div key={cell.label}>
              <p className="mb-1.5 font-roboto text-[9px] font-bold tracking-[0.22em] text-primary-light uppercase">
                {cell.label}
              </p>
              <p className="font-roboto text-[17px] leading-[1.25] font-bold tracking-[-0.005em] text-secondary">
                {cell.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default InstituteSection;
