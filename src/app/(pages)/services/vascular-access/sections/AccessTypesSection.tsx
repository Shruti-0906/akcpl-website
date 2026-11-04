import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import AccessCard from "../components/AccessCard";
import { ACCESS_TYPES } from "../components/accessTypes";

const AccessTypesSection = () => (
  <section
    id="access-types"
    className={cn("relative scroll-mt-36 bg-[#e0f2f9] py-20", GUTTER)}
  >
    <div className="mb-14 text-center">
      <Eyebrow
        label="The Four Access Types"
        className="mb-5 inline-flex text-black"
      />
      <h2 className="mb-4 section-heading leading-[1.05] font-bold tracking-[-0.015em] text-black">
        Four ways to <em className="text-primary-subtle italic">connect</em> to
        dialysis.
      </h2>
      <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
        Each access type is suitable for different patients in different
        situations.{" "}
        <strong className="font-bold text-secondary">
          Your nephrologist, in conversation with the AKC vascular access team,
          will recommend the one that fits your anatomy, your timeline, and your
          dialysis plan.
        </strong>{" "}
        Here&rsquo;s what each one is, and what it&rsquo;s for.
      </p>
    </div>

    <div className="flex flex-col gap-6">
      {ACCESS_TYPES.map((access) => (
        <div key={access.id}>
          <AccessCard access={access} />
        </div>
      ))}
    </div>
  </section>
);

export default AccessTypesSection;
