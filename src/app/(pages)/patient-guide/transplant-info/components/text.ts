/**
 * `.ci-title` - `clamp(36px, 5vw, 52px)` Cormorant, bold, tight leading.
 *
 * The source's 16px bottom margin is baked in, since it applies to every
 * `.ci-title` on the page. A caller that needs a different gap just passes its
 * own `mb-*` through `cn`, which tailwind-merge resolves in favour of the later
 * value.
 */
export const CI_TITLE =
  "mb-4 font-cormorant text-4xl leading-[1.05] font-bold tracking-[-0.015em] text-black lg:text-[52px] [&_em]:text-primary-subtle [&_em]:italic";

/** `.ci-body` - 17px Roboto at a flat 22px line-height with a 15px gap. */
export const CI_BODY =
  "mb-3.75 font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic";

/**
 * `.area-prose p` - the slightly larger, airier paragraph the phase sections
 * use, with its own strong and em colours.
 */
export const AREA_PROSE =
  "font-roboto text-[16.5px] leading-[1.78] text-[#393f42] [&>p]:mb-[18px] [&>p:last-child]:mb-0 [&_strong]:font-bold [&_strong]:text-secondary [&_em]:italic [&_em]:text-[#00b3ff]";
