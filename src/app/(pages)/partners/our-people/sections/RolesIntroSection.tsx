import { Eyebrow } from "@/components";
import { cn } from "@/lib";

import {
  CI_BODY,
  CI_TITLE,
  HEADING_EM,
  LABEL_DARK,
  PEOPLE_GUTTER,
} from "../constants";

const RolesIntroSection = () => {
  return (
    <section
      id="roles-intro"
      className={cn("bg-[#e0f2f9] pt-16 pb-15 lg:pt-30", PEOPLE_GUTTER)}
    >
      <Eyebrow label="The Roles" className={LABEL_DARK} />

      <h2 className={cn(CI_TITLE, "mb-4")}>
        The people{" "}
        <em className={HEADING_EM}>behind every dialysis session.</em>
      </h2>

      <p className={cn(CI_BODY, "mb-0")}>
        Detailed profiles of the three professional roles that make a dialysis
        centre run &mdash; their qualifications, their training pathways, what
        they do during a session, and the credentials AKC requires of them.
      </p>
    </section>
  );
};

export default RolesIntroSection;
