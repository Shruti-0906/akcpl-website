import { Eyebrow, KidneyIcon } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const HeroSection = () => (
  <section
    id="home"
    /*
     * No top margin: the source's `.hero` carries `margin-top: 40px`, but its
     * nav and breadcrumb are `position: fixed` and overlay that space, so no
     * gap ever shows. Ours are sticky and sit in flow, which would turn the
     * same margin into a real 40px gap under the breadcrumb.
     */
    className={cn(
      /*
       * 60svh rather than the source's 70vh. With the surplus top padding gone
       * the copy no longer fills 70, which left a dead band under the
       * paragraph. `min-h` still lets a short viewport grow the section.
       */
      "relative flex min-h-[60svh] items-center overflow-hidden bg-hero-depth",
      GUTTER,
    )}
  >
    <div aria-hidden="true" className="absolute inset-0 bg-hero-grid" />

    <KidneyIcon />

    {/*
     * No top padding either: the source's `.hero-content` carries an inline
     * `padding-top: 140px` to clear its fixed nav and breadcrumb. Ours already
     * take up real space, so that padding is surplus, and because the section
     * flex-centres its content it would push the copy well below centre.
     */}
    <div className="relative z-2 w-full max-w-[90%]">
      <Eyebrow
        label="For Patients & Caregivers : Reading time · 9 minutes"
        className="mb-5 text-white"
      />

      <h1 className="mb-7 font-cormorant text-5xl leading-[1.05] font-light tracking-[-0.01em] text-white lg:text-[62px]">
        You&rsquo;ve heard the words{" "}
        <em className="text-primary italic">chronic kidney disease.</em>
        <span className="block">Here&rsquo;s what they actually mean.</span>
      </h1>

      <p className="mb-12 font-roboto text-[17px] leading-[1.7] font-light text-white">
        If your doctor has told you that you have CKD &mdash;{" "}
        <em className="italic">or that someone you love does</em> &mdash; this
        page is written for you.{" "}
        <strong>
          Not in medical jargon. Not in fear. Just clearly, step by step,
        </strong>{" "}
        with the things you need to know now, the things you can do, and the
        things you can stop worrying about. Take it slowly. There&rsquo;s no
        rush.
      </p>
    </div>
  </section>
);

export default HeroSection;
