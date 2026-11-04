import { JsonLd } from "@/components/seo";
import { pageSeo } from "@/lib";

import IrdsHeroSection from "./sections/IrdsHeroSection";

const seo = pageSeo({
  title: "Indian Renal Data System",
  description:
    "The Indian Renal Data System is coming soon - the nation's first validated, research-grade renal data registry, powering population health analytics, clinical research, and evidence-based policy recommendations for India's kidney health crisis.",
  path: "/initiatives/indian-renal-data-system",
  trail: [{ name: "Initiatives", path: "/initiatives" }],
});

export const metadata = seo.metadata;

const IndianRenalDataSystemPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <IrdsHeroSection />
    </>
  );
};

export default IndianRenalDataSystemPage;
