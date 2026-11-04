import QuickNavPillCard from "../components/QuickNavPillCard";
import { QUICK_NAV_PILLS } from "../components/quickNavPills";

const LABEL_ID = "quick-nav-label";

const QuickNavSection = () => (
  <section className="border-t border-[#013b58] bg-secondary py-13.5">
    <div className="mx-auto max-w-[1280px] px-8">
      <p
        id={LABEL_ID}
        className="mb-4.5 text-center font-roboto text-[10.5px] font-semibold tracking-[0.22em] text-primary-subtle uppercase"
      >
        Jump to a section
      </p>

      <nav
        aria-labelledby={LABEL_ID}
        className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-5"
      >
        {QUICK_NAV_PILLS.map((pill) => (
          <QuickNavPillCard key={pill.href} pill={pill} />
        ))}
      </nav>
    </div>
  </section>
);

export default QuickNavSection;
