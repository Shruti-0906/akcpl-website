/**
 * The two typographic workhorses of the source page, `.ci-title` and
 * `.ci-body`, lifted out so every chapter renders them identically.
 *
 * Both carry their light-surface colour. Dark chapters override it by passing
 * a `text-*` class through `cn`, which tailwind-merge resolves in favour of
 * the later value.
 */

/** `.ci-title` - `clamp(36px, 5vw, 52px)` Cormorant, bold, tight leading. */
export const CI_TITLE =
  "font-cormorant text-4xl leading-[1.05] font-bold tracking-[-0.015em] text-black lg:text-[52px] [&_em]:text-primary-subtle [&_em]:italic";

/** `.ci-body` - 17px Roboto at a flat 22px line-height with a 15px gap. */
export const CI_BODY =
  "mb-3.75 font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic";

/** `.chap` - 110px block padding, plus the source's 60px scroll offset. */
export const CHAPTER = "relative scroll-mt-15 py-27.5";
