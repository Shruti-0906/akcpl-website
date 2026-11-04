import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import ChapterHeader from "../components/ChapterHeader";
import CheckCard from "../components/CheckCard";
import { CHECKS } from "../components/checks";

const MonitoringSection = () => (
  <section
    id="monitoring"
    className={cn("scroll-mt-36 bg-[#e0f2f9] py-27.5", GUTTER)}
  >
    <ChapterHeader
      roman="III"
      label="Patient-driven monitoring"
      title={
        <>
          <em className="text-primary-subtle italic">Look. Listen. Feel.</em>{" "}
          Every day.
        </>
      }
    >
      <p>
        Your dialysis team checks your access at every session. But{" "}
        <strong>
          you have your access with you every minute of every day &mdash; and
          you are the first person who will notice when something changes.
        </strong>{" "}
        That is why every dialysis patient is taught the simple three-part daily
        check: <em>look, listen, feel.</em> It takes thirty seconds. It can save
        your access.
      </p>
    </ChapterHeader>

    <div className="mt-10 grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
      {CHECKS.map((check) => (
        <CheckCard key={check.title} check={check} />
      ))}
    </div>

    <div className="mt-9 rounded-[2px] border-l-[3px] border-primary-subtle bg-[rgba(14,124,123,0.06)] px-9 py-8">
      <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42]">
        <strong className="font-bold text-secondary">
          If the thrill stops, treat it as an emergency.
        </strong>{" "}
        A clotted fistula can often be re-opened &mdash; but{" "}
        <em className="text-primary-subtle italic">
          only if you reach the access centre within hours.
        </em>{" "}
        After 24 hours, the chance of saving it drops dramatically.
      </p>
    </div>
  </section>
);

export default MonitoringSection;
