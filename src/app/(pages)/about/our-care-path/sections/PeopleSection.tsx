import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const TEAM = [
  {
    tag: "// 01 · MEDICAL",
    name: (
      <>
        The <em className="italic">Nephrologist</em>
      </>
    ),
    desc: "Sets the dialysis prescription, reviews adequacy, manages medical complications, leads the transplant conversation, and holds clinical accountability for the patient's long-term outcome.",
  },
  {
    tag: "// 02 · DAILY CARE",
    name: (
      <>
        The <em className="italic">Dialysis Professional</em>
      </>
    ),
    desc: "Connects the patient to the machine, monitors the session, manages cannulation, watches for intra-dialytic events, and is the staff member the patient will see most often, year after year.",
  },
  {
    tag: "// 03 · WHOLE PERSON",
    name: (
      <>
        The <em className="italic">Wider Team</em>
      </>
    ),
    desc: "Dietitian, counsellor, transplant coordinator, transport liaison, family educator, peer-support volunteers. Each is a defined role with a structured contribution to the patient's care.",
  },
] as const;

const PeopleSection = () => {
  return (
    <section className={cn("bg-[#e0f2f9] py-30", GUTTER)}>
      <div className="mb-14">
        <Eyebrow label="The Care Team" className="text-black" />
        <h2 className="mt-5 section-heading text-black">
          With every Dailysis Machine,{" "}
          <em className="text-primary-subtle italic">a team.</em>
        </h2>
        <p className="mt-5 font-roboto text-[17px] leading-5.5 font-light text-[#393f42]">
          The care experience is created by the people who deliver it. Below are
          the roles around the machine &mdash;{" "}
          <em className="text-tertiary italic">
            each one trained, each one accountable, each one responsible for a
            different dimension of the patient&rsquo;s wellbeing.
          </em>
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((member, index) => {
          const isDark = index % 2 === 1;
          return (
            <div
              key={member.tag}
              className={cn(
                "relative flex flex-col rounded-sm border p-[28px_24px_30px] transition-[transform,box-shadow] hover:-translate-y-0.75 hover:shadow-[0_12px_28px_rgba(14,37,64,0.05)]",
                isDark
                  ? "border-[#001726] bg-secondary-light"
                  : "border-primary-subtle bg-white",
              )}
            >
              <span
                className="absolute inset-x-0 top-0 h-0.5"
                style={{ background: isDark ? "#001726" : "#0075a9" }}
                aria-hidden="true"
              />
              <Eyebrow
                label={member.tag}
                className={isDark ? "text-[#d9d9d9]" : "text-black"}
              />
              <h3
                className={cn(
                  "mt-3.5 font-cormorant text-[26px] leading-[1.05] font-bold tracking-[-0.015em]",
                  isDark ? "text-white" : "text-black",
                )}
              >
                {member.name}
              </h3>
              <p
                className={cn(
                  "mt-3 font-roboto text-[17px] leading-5.5 font-light",
                  isDark ? "text-[rgba(251,248,243,0.72)]" : "text-[#393f42]",
                )}
              >
                {member.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PeopleSection;
