import { JsonLd } from "@/components/seo";
import { pageSeo } from "@/lib";

import BmwSection from "./sections/BmwSection";

const seo = pageSeo({
  title: "BMW Data",
  description:
    "Apex Kidney Care's Bio-Medical Waste (BMW) generation data across its dialysis network centres.",
  path: "/resources/bio-medical-waste-data",
});

export const metadata = seo.metadata;

const BmwDataPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <BmwSection />
    </>
  );
};

export default BmwDataPage;
