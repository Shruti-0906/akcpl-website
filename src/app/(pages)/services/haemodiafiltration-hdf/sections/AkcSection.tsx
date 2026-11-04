import { Button, Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { SOLID_BUTTON } from "../components";

const LINES = [
  { label: "In-centre HDF", value: "Yes" },
  { label: "Home HDF", value: "Yes" },
  { label: "Trained, ACLS-certified team", value: "Yes" },
  { label: "Nephrologist-supervised", value: "Always" },
] as const;

const AkcSection = () => (
  <section id="akc" className={cn("scroll-mt-36 bg-[#e0f2f9] py-22.5", GUTTER)}>
    <div className="grid grid-cols-2 items-center gap-12 max-[820px]:grid-cols-1 max-[820px]:gap-8">
      <div>
        <Eyebrow label="HDF at Apex Kidney Care" className="mb-5 text-black" />
        <h2 className="section-heading leading-[1.05] font-bold tracking-[-0.015em] text-black">
          Available to you —
          <span className="block">
            even at <em className="text-primary-subtle italic">home</em>.
          </span>
        </h2>
        <p className="mt-4.5 font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
          Apex offers hemodiafiltration both in our centres and as part of our
          home dialysis programme, so patients who would benefit from a deeper
          clean can have it in the comfort and safety of their own bedroom —
          supervised by a trained, ACLS-certified team.
        </p>
        <Button
          href="/services/home-haemodialysis"
          className={cn("mt-3.75", SOLID_BUTTON)}
        >
          Explore Home Dialysis <span aria-hidden="true">→</span>
        </Button>
      </div>

      <div className="rounded-[20px] bg-[linear-gradient(160deg,#07213A,#0B2D50)] px-9.5 py-10 text-white">
        <h3 className="mb-4.5 font-roboto text-2xl font-bold">
          Apex HDF, at a glance
        </h3>
        {LINES.map((line) => (
          <div
            key={line.label}
            className="flex items-center justify-between border-b border-white/10 py-4 last:border-b-0"
          >
            <span className="font-roboto text-[15px] text-white/85">
              {line.label}
            </span>
            <span className="font-roboto text-[22px] font-bold text-tertiary">
              {line.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AkcSection;
