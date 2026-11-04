import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { FAQ_CATEGORIES } from "../components";

const CategoryNavSection = () => (
  <>
    <div className="bg-secondary pt-[30px]">
      <p
        className={cn(
          "text-center font-roboto text-[10.5px] font-semibold tracking-[0.22em] text-primary-subtle uppercase",
          GUTTER,
        )}
      >
        Jump to a Topic
      </p>
    </div>
    <section className="z-30 bg-secondary pt-4.5 pb-[30px] lg:sticky lg:top-[124px]">
      <div className={GUTTER}>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {FAQ_CATEGORIES.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className={cn(
                "group grid grid-cols-[0.5fr_2fr] items-center rounded-[2px] bg-white px-3.5 py-[18px] text-center hover:bg-[#e0f2f9]",
              )}
            >
              <span className="flex size-8 shrink-0 items-center justify-center justify-self-center rounded-full bg-[#e0f2f9] group-hover:bg-primary-light">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  className="size-4 text-primary-subtle"
                >
                  {category.iconPaths.map((d) => (
                    <path key={d} d={d} />
                  ))}
                </svg>
              </span>
              <span className="font-roboto text-sm leading-[1.3] font-semibold tracking-[0.06em] text-secondary [&_em]:font-medium [&_em]:text-primary-subtle [&_em]:italic">
                {category.navLabel}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default CategoryNavSection;
