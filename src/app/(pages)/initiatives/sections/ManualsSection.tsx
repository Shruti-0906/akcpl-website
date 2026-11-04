import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { BTN_PRIMARY, MANUALS } from "../constants";

const ManualsSection = () => (
  <section
    id="open-roles"
    className="bg-secondary py-7.5 leading-[normal] text-white"
  >
    <div className={cn("mx-auto", GUTTER)}>
      <div className="flex flex-wrap justify-center gap-4.5">
        {MANUALS.map((manual) => (
          <a
            key={manual.label}
            href={manual.href}
            target="_blank"
            rel="noopener noreferrer"
            className={BTN_PRIMARY}
          >
            {manual.label} <span aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ManualsSection;
