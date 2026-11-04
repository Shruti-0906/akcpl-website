import { Eyebrow } from "@/components";
import { cn } from "@/lib";

const GOV_GUTTER = "px-6 sm:px-10 lg:px-15";

const CI_TITLE =
  "font-cormorant text-[clamp(36px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black";

const CI_BODY =
  "mb-[15px] font-roboto text-[17px] leading-[22px] font-light text-[#393f42]";

const LABEL =
  "mb-5 text-sm leading-[normal] text-black [&>span]:w-6 [&>span]:opacity-100";

const TITLE_EM_DARK = "text-[#00b3ff] italic";

const PPP_REGIONS = [
  "Madhya Pradesh",
  "Telangana",
  "Goa",
  "Maharashtra",
  "Delhi",
  "Rajasthan",
] as const;

const PppTrackRecordSection = () => (
  <section
    id="ppp-track-record"
    className={cn(
      "relative scroll-mt-20 overflow-hidden bg-secondary pt-[130px] pb-[129px]",
      GOV_GUTTER,
    )}
  >
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply",
        "bg-noise",
      )}
    />

    <div className="relative z-[2]">
      <header>
        <Eyebrow
          label="From Promise to Practice"
          className={cn(LABEL, "text-white")}
        />
        <h2 className={cn(CI_TITLE, "mb-4 text-white")}>
          Where AKC <em className={TITLE_EM_DARK}>already runs </em>
          {""}
          public-private partnerships.
        </h2>
        <p className={cn(CI_BODY, "text-white")}>
          Our public partnership work is not theoretical. It is {""}
          <strong className="font-bold">
            operational, across six Indian geographies today
          </strong>
          {""}
          &mdash; with active programmes serving scheme-eligible patients to the
          {""}
          <em className="italic">same clinical standard</em> as every other AKC
          patient on every other dialysis chair in the network.
        </p>
      </header>

      <div className="mb-6.25 flex items-center gap-3.5 border-b border-white/10 pb-6 font-roboto text-[11px] leading-[normal] font-bold tracking-[0.18em] text-tertiary uppercase">
        <span className="relative size-2 rounded-full bg-primary-subtle before:absolute before:inset-0 before:rounded-full before:bg-primary-subtle/55 before:content-['']" />
        <span>
          <span className="text-primary-subtle">Six</span>&nbsp; Active PPP
          Geographies &nbsp;·&nbsp; Pan-India Footprint &nbsp;·&nbsp; State
          &amp; Central Scheme Coverage
        </span>
      </div>

      <div className="grid gap-px bg-[#002238] sm:grid-cols-2 lg:grid-cols-3">
        {PPP_REGIONS.map((region) => (
          <article
            key={region}
            className="group relative flex items-center justify-center overflow-hidden rounded-[2px] border border-[#002238] bg-card-deep px-6.5 py-9 text-center before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-primary-subtle before:content-[''] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.24)] hover:before:scale-x-100"
          >
            <h3 className="font-cormorant text-[26px] leading-[1.05] font-bold text-white">
              {region}
            </h3>
          </article>
        ))}
      </div>

      <p className={cn(CI_BODY, "mt-7.5 text-white")}>
        Across these six geographies, AKC&apos;s PPP work spans{" "}
        <strong className="font-bold">
          state government partnerships, central scheme delivery, and
          district-level public health frameworks.
        </strong>
        {""}
        The partnership pipeline extends to further states under the National
        Dialysis Programme and various state-level scheme structures &mdash;
        each engagement structured around the partner&apos;s mandate, not ours.
      </p>
    </div>
  </section>
);

export default PppTrackRecordSection;
