import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const TOTALS = [
  {
    value: "15",
    suffix: "+",
    label: "Total Publications",
    note: "Peer-reviewed journals, conference proceedings, and working papers.",
  },
  {
    value: "5",
    label: "Distinct Research Themes",
    note: "Each anchored by multiple papers and at least one doctoral scholar.",
  },
  {
    value: "2",
    label: "Doctoral Theses",
    note: "Built on AKC operational data, at IIT Bombay IEOR.",
  },
  {
    value: "7",
    suffix: "+",
    label: "International Venues",
    note: "INFORMS, EURO, IFORS, VOCAL, OR Karlsruhe, ISN, and more.",
  },
] as const;

const VENUES = [
  {
    lead: "Indian Journal of",
    rest: "Nephrology",
    note: "Peer-reviewed journal · India",
  },
  {
    lead: "Indian Journal of",
    rest: "Transplantation",
    note: "Peer-reviewed journal · India",
  },
  {
    lead: "Health",
    rest: "Systems",
    note: "Peer-reviewed journal · International",
  },
  {
    lead: "Kidney International",
    rest: "Reports",
    note: "Peer-reviewed journal · International",
  },
  {
    lead: "INFORMS",
    rest: "Healthcare",
    note: "International conference · OR",
  },
  { lead: "EURO", rest: "Valencia", note: "European OR Society" },
  {
    lead: "IFORS",
    rest: "Quebec",
    note: "International Federation of OR Societies",
  },
  { lead: "OR 2022", rest: "Karlsruhe", note: "German OR Society Annual" },
  { lead: "VOCAL", rest: "Hungary", note: "Veszprém Optimization Conf." },
  {
    lead: "ISN",
    rest: "World Congress",
    note: "International Society of Nephrology",
  },
  {
    lead: "ISN",
    rest: "Chennai & West Zone",
    note: "India national & regional",
  },
  { lead: "medRxiv", rest: "Preprint Server", note: "Open-access preprint" },
] as const;

const PortfolioSummarySection = () => {
  return (
    <section className={cn("bg-[#e0f2f9] py-20 lg:py-27.5", GUTTER)}>
      <div className="text-center">
        <Eyebrow
          label="The Portfolio · By the Numbers"
          className="justify-center text-secondary"
        />

        <h2 className="mt-4 mb-4 font-cormorant text-3xl leading-[1.05] font-bold text-black sm:text-4xl lg:text-[52px]">
          Fifteen years of research output,{" "}
          <em className="text-primary-subtle italic">summarised.</em>
        </h2>

        <p className="mx-auto max-w-4xl font-roboto text-[15px] leading-[1.7] text-[#393f42] sm:text-[17px]">
          A snapshot of the AKC + Apex Kidney Foundation research portfolio
          &mdash; aggregated across all five themes, all publication venues, all
          formats.
        </p>
      </div>

      {/* Both panels are white with a gold rule along the top edge. */}
      <div className="mt-12 border-t-2 border-tertiary bg-white">
        <div className="grid divide-y divide-black/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {TOTALS.map((total) => (
            <div key={total.label} className="p-8">
              <p className="font-roboto text-3xl leading-none font-bold text-[#00b3ff] sm:text-5xl">
                {total.value}
                {"suffix" in total && (
                  <span className="align-super text-2xl text-tertiary">
                    {total.suffix}
                  </span>
                )}
              </p>

              <p className="mt-5 font-roboto text-[15px] font-bold text-black">
                {total.label}
              </p>

              <p className="mt-2 font-roboto text-[14px] leading-[1.6] text-[#393f42] italic">
                {total.note}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t-2 border-tertiary bg-white p-8 lg:p-10">
        <p className="font-roboto text-[10px] font-bold tracking-[0.18em] text-tertiary uppercase">
          Published in · Indexed journals &amp; conference proceedings
        </p>

        <ul className="mt-7 grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8">
          {VENUES.map((venue) => (
            <li key={`${venue.lead} ${venue.rest}`}>
              <p className="font-roboto text-[15px] leading-[1.35] font-bold text-black">
                <em className="font-normal text-tertiary italic">
                  {venue.lead}
                </em>{" "}
                {venue.rest}
              </p>
              <p className="mt-1.5 font-roboto text-[10px] leading-[1.5] tracking-[0.08em] text-secondary/70 uppercase">
                {venue.note}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PortfolioSummarySection;
