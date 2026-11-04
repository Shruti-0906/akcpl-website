import { Button, Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import {
  CI_BODY,
  CI_TITLE,
  HEADING_EM,
  LABEL_DARK,
  LABEL_INLINE,
  LABEL_LIGHT,
  SECTION_BASE,
} from "../constants";

const DOCUMENTS = [
  { label: "Document i.", title: "Impact Metrics" },
  { label: "Document ii.", title: "Full Investor Deck" },
] as const;

const InvestorsCtaSection = () => (
  <section id="rd" className={cn(SECTION_BASE, "bg-white py-20")}>
    <div className={cn("text-center", GUTTER)}>
      <div className="mb-6 inline-flex items-center gap-3.5 font-roboto text-[11px] font-bold tracking-[0.28em] text-primary-subtle uppercase">
        <span
          aria-hidden="true"
          className="h-px w-8 bg-primary-subtle opacity-50"
        />
        The Conversation
        <span
          aria-hidden="true"
          className="h-px w-8 bg-primary-subtle opacity-50"
        />
      </div>

      <h2 className={CI_TITLE}>
        If this thesis is yours, <em className={HEADING_EM}>we should talk.</em>
      </h2>

      <p className={cn(CI_BODY, "mb-[30px]")}>
        AKC engages with capital partners on a selective and confidential basis.
        The materials below provide a starting view; the deeper conversation
        happens privately, with the founders and the CEO, after a mutual fit
        check.
      </p>

      <div className="mb-12 grid gap-5 sm:grid-cols-2">
        {DOCUMENTS.map((document) => (
          <a
            key={document.label}
            href="#"
            className="rounded-[2px] border border-[#002238] bg-card-deep px-[22px] py-7 text-left hover:border-primary-subtle"
          >
            <Eyebrow label={document.label} className={LABEL_LIGHT} />
            <h3 className={cn(CI_TITLE, "text-[26px] text-white")}>
              {document.title}
            </h3>
          </a>
        ))}
      </div>

      <Eyebrow
        label="The First Conversation"
        className={cn(LABEL_DARK, LABEL_INLINE, "mt-[35px]")}
      />

      <h2 className={CI_TITLE}>
        The right partnership begins with{" "}
        <em className={HEADING_EM}>the right conversation.</em>
      </h2>

      <Button href="/contact" className="mt-4">
        Get in Touch with us
      </Button>
    </div>
  </section>
);

export default InvestorsCtaSection;
