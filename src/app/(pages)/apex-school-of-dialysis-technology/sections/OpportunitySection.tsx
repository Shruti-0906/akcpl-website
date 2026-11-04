import Image from "next/image";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { Photo, PhotoCaption } from "../components";

const OpportunitySection = () => (
  <section className={cn("relative overflow-hidden bg-white py-32.5", GUTTER)}>
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_92%_12%,rgba(184,134,11,0.2)_0%,transparent_60%),radial-gradient(ellipse_45%_40%_at_8%_88%,rgba(14,124,123,0.1)_0%,transparent_60%)]"
    />

    <div className="relative z-[2] grid items-start gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
      <div>
        <Eyebrow
          label="The Opportunity"
          className="mb-5 text-[14px] font-normal text-black"
        />

        <h2 className="mb-[35px] font-cormorant text-[clamp(30px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
          India needs{" "}
          <em className="text-primary-subtle italic">thousands more</em>{" "}
          dialysis professionals.{" "}
          <em className="text-primary-subtle italic">
            Where will they come from?
          </em>
        </h2>

        <Photo className="h-full">
          <Image
            src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Banner/Dialysis+Professional+Banner.jpg"
            alt="Dialysis Professionals"
            width={800}
            height={534}
            className="h-auto w-full"
          />
          <PhotoCaption>
            <em className="font-normal text-primary-light italic">
              Students at the Apex School
            </em>{" "}
            &mdash; classroom, clinical practicum, the next generation of
            dialysis professionals.
          </PhotoCaption>
        </Photo>
      </div>

      <div>
        <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
          India has approximately{" "}
          <strong className="font-normal">
            10 million people with end-stage kidney disease
          </strong>{" "}
          &mdash; and the population on dialysis is growing rapidly as the
          burden of diabetes and hypertension matures. Every new dialysis centre
          that opens needs trained technicians, trained nurses, and trained
          biomedical engineers to staff it.
        </p>

        <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
          <strong className="font-normal">
            The workforce does not exist in sufficient numbers.
          </strong>{" "}
          Most general nursing and biomedical programmes do not include
          specialised dialysis training. Most dialysis technicians in India
          learn on the job &mdash; with all the variability that brings.{" "}
          <em className="italic">
            The country needs a structured pipeline of professionally
            credentialed dialysis workers, and that pipeline does not build
            itself.
          </em>
        </p>

        <p className="mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
          In 2011, three years after AKC began operations, this gap had become
          impossible to ignore. Centres were being opened faster than they could
          be staffed with people trained to the standards AKC was insisting on.
          Rather than wait, AKC built the institution that the country needed.
        </p>

        <div className="my-9 rounded-[0_2px_2px_0] border-l-2 border-primary-subtle bg-[rgba(14,124,123,0.06)] px-[30px] py-[26px]">
          <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
            <strong className="font-normal">
              For a young person willing to do the work,
            </strong>{" "}
            a dialysis technology qualification is one of the most{" "}
            <em className="italic">
              stable, deployable, and respectable healthcare careers available
              in India today
            </em>{" "}
            &mdash; with demand growing every year and employers actively
            looking for credentialed graduates.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OpportunitySection;
