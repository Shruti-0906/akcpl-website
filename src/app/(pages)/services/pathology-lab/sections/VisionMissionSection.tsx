import { GUTTER } from "@/constants";

const STATEMENTS = [
  {
    title: "Vision",
    text: "To provide an efficient, precise and innovative laboratory service based on Quality Management System to achieve total customer satisfaction.",
  },
  {
    title: "Mission",
    text: "In the spirit of teamwork and backed by trained, dedicated and knowledgeable laboratory staff, together with adhering to current technology, we shall provide an efficient, reliable service towards achieving excellence in patient care and to pursue professional and technological advancement through continuous training, research and development.",
  },
] as const;

const VisionMissionSection = () => (
  <section className={`bg-white py-16 lg:py-32.5 ${GUTTER}`}>
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {STATEMENTS.map((statement) => (
        <div
          key={statement.title}
          className="rounded-[8px] border-t-4 border-primary-subtle bg-[#e0f2f9] px-8 py-10"
        >
          <h2 className="mb-4 font-cormorant text-[clamp(2rem,4vw,2.75rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
            {statement.title}
          </h2>
          <p className="font-roboto text-[17px] leading-[1.78] text-[#393f42]">
            {statement.text}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default VisionMissionSection;
