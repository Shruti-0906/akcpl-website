import { Activity, House, ShieldCheck } from "lucide-react";

const NODES = [
  {
    label: "Hemodiafiltration",
    sub: "A deeper, more thorough clean",
    Icon: Activity,
  },
  { label: "Home dialysis", sub: "Comfort, dignity, freedom", Icon: House },
] as const;

const FusionNode = ({ label, sub, Icon }: (typeof NODES)[number]) => (
  <div className="flex w-42.5 flex-col justify-center rounded-2xl border border-white/10 bg-[#03162a] p-[22px_14px] text-center">
    <span
      aria-hidden="true"
      className="mx-auto mb-3 flex size-[42px] items-center justify-center rounded-[11px] bg-[#38bdf8]/12 text-[#38bdf8]"
    >
      <Icon className="size-5" />
    </span>
    <p className="font-roboto text-sm font-semibold text-white">{label}</p>
    <p className="mt-1.5 font-roboto text-[11.5px] leading-[1.4] text-white/60">
      {sub}
    </p>
  </div>
);

const HdfFusion = () => {
  return (
    /* Stretch keeps both nodes the same height when one subtitle wraps. */
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-center lg:justify-end">
      <FusionNode {...NODES[0]} />

      <span
        aria-hidden="true"
        className="self-center font-roboto text-2xl font-light text-black/40"
      >
        +
      </span>

      <FusionNode {...NODES[1]} />

      <div className="flex size-37 shrink-0 flex-col items-center justify-center self-center rounded-full border border-tertiary/50 bg-[radial-gradient(circle_at_35%_30%,#03162a,#010b16)] p-3.5 text-center shadow-[0_0_50px_rgba(184,134,11,0.3)]">
        <span
          aria-hidden="true"
          className="mb-2 flex size-[34px] items-center justify-center rounded-[9px] bg-tertiary"
        >
          <ShieldCheck className="size-4 text-white" />
        </span>
        <p className="font-cormorant text-[17px] leading-none font-bold text-white">
          Home HDF
        </p>
        <p className="mt-1 font-roboto text-[10px] font-semibold tracking-[0.05em] text-white uppercase">
          Best of both
        </p>
      </div>
    </div>
  );
};

export default HdfFusion;
