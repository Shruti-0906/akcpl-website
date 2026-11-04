import { GUTTER } from "@/constants";

const OPTIONS = [
  {
    icon: "M3 9l9-6 9 6v9a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10",
    name: (
      <>
        Walk into the <em className="text-primary-subtle italic">lab</em>
      </>
    ),
    text: (
      <>
        Visit our central processing lab in{" "}
        <strong className="font-bold text-secondary">
          Goregaon East, Mumbai
        </strong>{" "}
        or one of the AKCPL collection points. Walk-in, no appointment needed.{" "}
        <em className="text-primary-subtle italic">
          Reports are ready within the published turnaround window for each
          test.
        </em>
      </>
    ),
  },
  {
    icon: "M5 12V5h14v7M3 12h18v8H3z M8 16m-1.5 0a1.5 1.5 0 103 0 1.5 1.5 0 10-3 0 M16 16m-1.5 0a1.5 1.5 0 103 0 1.5 1.5 0 10-3 0",
    name: (
      <>
        Home <em className="text-primary-subtle italic">collection</em>
      </>
    ),
    text: (
      <>
        A trained phlebotomist visits your home at a scheduled time.{" "}
        <strong className="font-bold text-secondary">
          Especially useful for elderly patients, post-transplant patients, and
          routine monitoring.
        </strong>{" "}
        <em className="text-primary-subtle italic">
          Sample collected, logistics handled, result reaches you and your
          nephrologist automatically.
        </em>
      </>
    ),
  },
  {
    icon: "M12 2v6M12 16v6M2 12h6M16 12h6 M12 12m-3 0a3 3 0 106 0 3 3 0 10-6 0",
    name: (
      <>
        During <em className="text-primary-subtle italic">dialysis</em>
      </>
    ),
    text: (
      <>
        If you are an{" "}
        <strong className="font-bold text-secondary">
          AKC dialysis patient
        </strong>
        , your monthly bloodwork is collected during your dialysis session
        itself — no extra visit needed.{" "}
        <em className="text-primary-subtle italic">
          Results flow straight into your Axis EMR record
        </em>{" "}
        for your nephrologist to review at the next visit.
      </>
    ),
  },
] as const;

const PatientsSection = () => (
  <section
    id="book"
    className={`scroll-mt-36 bg-[#e0f2f9] py-16 lg:py-32.5 ${GUTTER}`}
  >
    <div>
      <div className="text-center">
        <div className="mb-5 flex items-center justify-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
          <span className="h-px w-6 bg-black" />
          For Patients
        </div>
        <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
          Three ways to{" "}
          <span className="text-primary-subtle italic">book a test.</span>
        </h2>
        <p className="mt-5 font-roboto text-[17px] text-[#393f42] italic">
          Whether you prefer to walk into the lab, have a phlebotomist visit
          your home, or come in for the test during your dialysis session at an
          AKC centre — we cover all three.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4.5 sm:grid-cols-3">
        {OPTIONS.map((option, index) => (
          <div
            key={index}
            className="relative flex flex-col rounded-sm border border-black/10 bg-white p-9 pt-10"
          >
            <span className="absolute top-0 right-0 left-0 h-0.75 bg-primary-subtle" />

            <div className="mb-5.5 grid size-13.5 place-items-center rounded-full bg-[#e0f2f9]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                className="size-6.5 text-primary-subtle"
              >
                <path d={option.icon} />
              </svg>
            </div>

            <h3 className="mb-3 font-roboto text-[22px] leading-tight font-bold text-secondary">
              {option.name}
            </h3>
            <p className="flex-1 font-roboto text-[18px] leading-[1.75] text-[#404040]">
              {option.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PatientsSection;
