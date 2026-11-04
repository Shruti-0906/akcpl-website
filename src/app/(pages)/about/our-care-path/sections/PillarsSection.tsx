import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const PILLARS = [
  {
    num: "// 01",
    name: (
      <>
        Scientific <em className="italic">Protocols</em>
      </>
    ),
    desc: (
      <>
        Every clinical decision is anchored to{" "}
        <strong className="font-bold">evidence-based protocols</strong> &mdash;
        dialysis prescription, adequacy targets, anaemia management, vascular
        access surveillance, infection control. AKC&rsquo;s protocols are
        reviewed continuously, updated against international standards, and
        applied uniformly across all centres.
      </>
    ),
    foot: "Same network · Same standard",
  },
  {
    num: "// 02",
    name: (
      <>
        Uncompromising <em className="italic">Safety</em>
      </>
    ),
    desc: (
      <>
        <strong className="font-bold">NABH-grade water purity.</strong>{" "}
        Continuous monitoring of every machine parameter during every session.
        Audited service logs on every dialysis machine. Documented checks of
        every RO water plant, every day. Real-time event reporting.{" "}
        <em className="italic">Safety is the architecture, not a feature.</em>
      </>
    ),
    foot: "Architecture · Not afterthought",
  },
  {
    num: "// 03",
    name: (
      <>
        <em className="italic">Empathy</em> by Default
      </>
    ),
    desc: (
      <>
        Knowing the patient by name. Listening before speaking. Explaining in
        plain language. Acknowledging that this is hard.{" "}
        <em className="italic">Empathy is what AKC trains for explicitly</em> in
        its School of Dialysis Technology curriculum &mdash; treated as a
        clinical skill, not a personality trait.
      </>
    ),
    foot: "A trained skill · Not a hope",
  },
  {
    num: "// 04",
    name: (
      <>
        Positive <em className="italic">Daily Tone</em>
      </>
    ),
    desc: (
      <>
        The tone of a dialysis centre matters more than most clinicians admit. A
        patient who dreads their session does worse, clinically and
        psychologically, than one who arrives at ease. AKC&rsquo;s centres are
        deliberately designed for a{" "}
        <strong className="font-bold">
          calm, dignified, unintimidating atmosphere
        </strong>{" "}
        &mdash; not a sterile or transactional one.
      </>
    ),
    foot: "Dignity · Always the default",
  },
  {
    num: "// 05",
    name: (
      <>
        Active <em className="italic">Encouragement</em>
      </>
    ),
    desc: (
      <>
        The transplant conversation. The peer-support introduction. The reminder
        that this patient ran a marathon last year.{" "}
        <em className="italic">
          The structured belief that this person&rsquo;s life is bigger than
          their treatment schedule.
        </em>{" "}
        Encouragement is offered actively, not waited for &mdash; and it is
        offered consistently.
      </>
    ),
    foot: "Hope · Is a clinical act",
  },
  {
    num: "// 06",
    name: (
      <>
        Continuous <em className="italic">Support</em>
      </>
    ),
    desc: (
      <>
        Outside the four hours in the chair.{" "}
        <strong className="font-bold">
          Mental health screening and counselling.
        </strong>{" "}
        Nutritional support. Family education. Navigation of insurance,
        transport, schedules, and the small administrative miseries of chronic
        illness. AKC&rsquo;s care does not end when the machine is turned off.
      </>
    ),
    foot: "Beyond the chair · Always",
  },
] as const;

const PillarsSection = () => {
  return (
    <section
      className={cn("relative overflow-hidden bg-secondary py-32.5", GUTTER)}
    >
      <div className="relative z-[2]">
        <div className="mb-16">
          <Eyebrow label="The Six Promises" className="text-white" />
          <h2 className="mt-5 section-heading text-white">
            Made explicit.{" "}
            <em className="text-primary-subtle italic">
              To every patient, on every visit.
            </em>
          </h2>
          <p className="mt-5 font-roboto text-[17px] leading-5.5 font-light text-[rgba(251,248,243,0.72)]">
            The six principles that organise AKC&rsquo;s care are not
            aspirational. They are{" "}
            <strong className="font-bold text-white">
              commitments we make to every patient on every visit
            </strong>
            , in every model and every centre. Below is what each one means in
            practice &mdash; the lived version, not the marketing version.
          </p>
        </div>

        <div className="grid gap-px border border-[#002944] bg-[#002944] sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <div
              key={pillar.num}
              className={
                index % 2 === 1
                  ? "flex flex-col bg-[#e9f7fd] p-[32px_28px]"
                  : "flex flex-col bg-white p-[32px_28px]"
              }
            >
              <p className="mb-3.5 font-cormorant text-2xl font-light text-black italic">
                {pillar.num}
              </p>
              <h3 className="mb-2.5 font-roboto text-[20px] leading-[1.2] font-bold tracking-[-0.005em] text-black">
                {pillar.name}
              </h3>
              <p className="flex-1 font-roboto text-[14.5px] leading-[1.65] text-[#393f42]">
                {pillar.desc}
              </p>
              <p className="mt-3.75 border-t border-[#00b3ff] pt-4 font-roboto text-[10px] font-semibold tracking-[0.18em] text-[#00b3ff] uppercase">
                {pillar.foot}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
