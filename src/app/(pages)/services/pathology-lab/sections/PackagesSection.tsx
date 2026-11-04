import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { PACKAGE_GROUPS } from "../components";

const PackagesSection = () => (
  <section className={`bg-white py-16 lg:py-32.5 ${GUTTER}`}>
    <div>
      <div className="mb-12">
        <div className="mb-5 flex items-center gap-3 font-roboto text-sm tracking-[0.22em] text-black uppercase">
          <span className="h-px w-6 bg-black" />
          Test Packages
        </div>
        <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
          Every panel a nephrology patient{" "}
          <span className="text-primary-subtle italic">actually needs.</span>
        </h2>
        <p className="mt-5 font-roboto text-[17px] leading-relaxed text-[#393f42]">
          AKCPL&apos;s panels are designed by AKC nephrologists for the
          realities of Indian renal care.{" "}
          <strong className="font-bold">
            Apex-branded packages cover every stage of the patient journey
          </strong>{" "}
          — from early CKD screening through dialysis monitoring, transplant
          work-up, and post-transplant follow-up. The full list, organised
          below.
        </p>
      </div>

      <div className="space-y-12">
        {PACKAGE_GROUPS.map((group) => (
          <div key={group.count + group.numeral}>
            <div className="mb-5 flex items-baseline gap-4.5 pb-3.5">
              <span className="shrink-0 font-roboto text-2xl font-light text-primary-subtle italic">
                {group.numeral}
              </span>
              <h3 className="font-cormorant text-2xl font-bold text-black [&_em]:text-primary-subtle [&_em]:italic">
                {group.title}
              </h3>
              <span className="rounded-full bg-white px-3 py-1 font-roboto text-[11px] font-bold tracking-[0.02em] text-[#393f42]">
                {group.count}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {group.pills.map((pill, index) => {
                const content = (
                  <>
                    <div className="font-roboto text-[9px] font-bold tracking-[0.18em] text-primary-light uppercase">
                      {pill.tag}
                    </div>
                    <div className="mt-1.5 font-roboto text-lg leading-tight font-bold text-secondary [&_em]:font-normal [&_em]:text-primary-subtle [&_em]:italic">
                      {pill.name}
                    </div>
                    <div className="mt-1 font-roboto text-[17px] leading-snug text-[#393f42] italic">
                      {pill.sub}
                    </div>
                  </>
                );

                const className = cn(
                  "rounded-sm border p-5",
                  pill.flagship
                    ? "border-[#fdebc4] bg-[linear-gradient(135deg,#fdebc4_0%,#fff_100%)]"
                    : "border-primary-subtle bg-[#e0f2f9]",
                );

                return pill.href ? (
                  <a key={index} href={pill.href} className={className}>
                    {content}
                  </a>
                ) : (
                  <div key={index} className={className}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PackagesSection;
