const FLAVOURS = [
  "Dialysis Diet",
  "CKD Stage 3 & 4 Nutrition",
  "Post-Transplant Eating",
  "Diabetic Kidney Disease Diet",
  "Indian Renal Recipes",
  "Fluid Management",
  "Potassium Control",
  "Phosphorus Management",
  "Protein Balance",
] as const;

const FlavourStripSection = () => (
  <div className="bg-secondary py-4">
    <div className="group flex overflow-x-clip mask-[linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] select-none">
      {[0, 1].map((track) => (
        <ul
          key={track}
          aria-hidden={track === 1}
          className="flex min-w-full shrink-0 animate-marquee items-center gap-x-[52px] pr-[52px] group-hover:[animation-play-state:paused]"
        >
          {FLAVOURS.map((flavour) => (
            <li
              key={flavour}
              className="font-roboto text-[11px] font-bold tracking-[2px] whitespace-nowrap text-white/85 uppercase"
            >
              <span aria-hidden="true">🍽️</span> {flavour}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default FlavourStripSection;
