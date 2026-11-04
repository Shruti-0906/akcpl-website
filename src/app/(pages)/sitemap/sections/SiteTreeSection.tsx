import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import SiteTree from "../components/SiteTree";
import { BRANCHES, countDestinations } from "../components/branches";


const SiteTreeSection = () => {
  return (
    <section className={cn("bg-white pb-16 lg:pb-24", GUTTER)}>
      <div className="mx-auto max-w-7xl">
        <SiteTree />

      </div>
    </section>
  );
};

export default SiteTreeSection;
