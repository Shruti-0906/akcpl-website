import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import CentreCard from "../components/CentreCard";
import { CENTRE_SERVICES } from "../components/centreServices";

const CentreSection = () => (
  <section
    id="vac-centre"
    className={cn("relative scroll-mt-36 bg-[#e0f2f9] py-30", GUTTER)}
  >
    <div className="mb-12">
      {/* `.centre` has no `.section-label` override, so the base `#000` applies. */}
      <Eyebrow
        label="The AKC Vascular Access Centre"
        className="mb-5 text-black"
      />
      <h2 className="section-heading leading-[1.05] font-bold tracking-[-0.015em] text-black">
        Every access on this page is made{" "}
        <em className="text-primary-subtle italic">here.</em>
      </h2>
      <p className="mt-4 font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic">
        AKC runs a dedicated <strong>Vascular Access Centre</strong> &mdash; a
        clinical service focused entirely on creating, maintaining, monitoring,
        and salvaging dialysis access. From pre-operative vessel mapping through
        fistula creation to lifelong surveillance,{" "}
        <em>
          this is the single team that walks alongside your access through every
          stage of dialysis.
        </em>
      </p>
    </div>

    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {CENTRE_SERVICES.map((service) => (
        <div key={service.id}>
          <CentreCard service={service} />
        </div>
      ))}
    </div>
  </section>
);

export default CentreSection;
