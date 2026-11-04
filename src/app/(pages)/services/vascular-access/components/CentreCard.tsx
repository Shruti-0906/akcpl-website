import type { ReactNode } from "react";

export type CentreService = {
  id: string;
  /** Line icon shown in the tinted circle above the title. */
  icon: ReactNode;
  title: ReactNode;
  body: ReactNode;
};

const CentreCard = ({ service }: { service: CentreService }) => (
  <div className="relative rounded-[2px] border border-primary-subtle bg-white px-7.5 py-8 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-primary-subtle before:content-[''] even:bg-[#e9f7fd] hover:shadow-[0_12px_28px_rgba(14,37,64,0.06)]">
    <div
      aria-hidden="true"
      className="mb-5 flex size-12 items-center justify-center rounded-full bg-[#e0f2f9] text-primary-subtle [&>svg]:size-6"
    >
      {service.icon}
    </div>

    <h3 className="mb-4 font-cormorant text-[24px] leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:italic">
      {service.title}
    </h3>

    <p className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic">
      {service.body}
    </p>
  </div>
);

export default CentreCard;
