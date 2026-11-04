import type { ReactNode } from "react";

export type HdfBenefit = {
  title: string;
  text: ReactNode;
  icon: ReactNode;
};

const HdfBenefitCard = ({ title, text, icon }: HdfBenefit) => {
  return (
    <article className="rounded-[15px] border border-white/10 bg-[#03162a] p-[26px_22px]">
      <span
        aria-hidden="true"
        className="mb-4 flex size-11 items-center justify-center rounded-xl bg-[#fdf8ee] text-tertiary"
      >
        {icon}
      </span>

      <h3 className="mb-2 font-roboto text-base leading-[1.4] font-light text-white">
        {title}
      </h3>

      <p className="font-roboto text-[15px] leading-[1.55] text-white/70">
        {text}
      </p>
    </article>
  );
};

export default HdfBenefitCard;
