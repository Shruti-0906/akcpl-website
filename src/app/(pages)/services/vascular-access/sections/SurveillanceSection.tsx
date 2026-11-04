import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import ChapterHeader from "../components/ChapterHeader";
import SurveillanceCard from "../components/SurveillanceCard";
import { SURVEILLANCE_CHECKS } from "../components/surveillanceChecks";

const SurveillanceSection = () => (
  <section className={cn("relative scroll-mt-36 bg-[#e0f2f9] py-27.5", GUTTER)}>
    <ChapterHeader
      roman="VI"
      label="AKC Surveillance Programme"
      title={
        <>
          Regular checks &mdash;{" "}
          <em className="text-primary-subtle italic">
            before problems show up.
          </em>
        </>
      }
    >
      <p>
        Daily self-monitoring catches most sudden problems. But many access
        problems develop slowly, over weeks &mdash;{" "}
        <strong>
          a gradual narrowing that quietly reduces flow until one day the access
          fails entirely.
        </strong>{" "}
        The AKC <em>quarterly surveillance programme</em> catches these slow
        problems before they cause failure. It is, in our clinical view, the
        single most effective way to extend the life of any access.
      </p>
    </ChapterHeader>

    <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
      {SURVEILLANCE_CHECKS.map((check) => (
        <SurveillanceCard key={check.id} check={check} />
      ))}
    </div>

    <div className="relative mt-9 rounded-[2px] border-l-[3px] border-primary-subtle bg-[rgba(14,124,123,0.06)] px-9 py-8">
      <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
        <strong className="font-bold text-secondary">
          Treat surveillance appointments like dialysis itself.
        </strong>{" "}
        Don&rsquo;t skip them. Don&rsquo;t reschedule them lightly.
        <br />
        <em className="text-primary-subtle italic">
          Every quarterly check is a chance to keep your access alive for
          another year.
        </em>
      </p>
    </div>
  </section>
);

export default SurveillanceSection;
