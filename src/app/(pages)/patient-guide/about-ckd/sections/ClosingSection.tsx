import { Mail, Phone } from "lucide-react";

import { Eyebrow } from "@/components";
import { organization } from "@/config";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { CI_BODY, CI_TITLE } from "../components/text";

const ClosingSection = () => (
  <section className={cn("relative bg-white py-20 text-center", GUTTER)}>
    <Eyebrow
      label="You’re Not Alone in This"
      className="mb-5 inline-flex text-black"
    />

    <p
      className={cn(
        CI_TITLE,
        "mb-6.25 text-[30px] leading-[46px] lg:text-[30px]",
      )}
    >
      <em>
        One in seven adults in India lives with some stage of chronic kidney
        disease.
      </em>{" "}
      <strong>
        What you learn over the coming months, the changes you make to your
        daily life, and the partnership you build with your nephrologist
      </strong>{" "}
      are what will determine how this story goes.{" "}
      <em>
        And for most people who do this work consistently &mdash; the story goes
        well.
      </em>
    </p>

    <div>
      <p
        className={cn(
          CI_BODY,
          "text-[30px] leading-[46px] font-bold text-black",
        )}
      >
        <strong className="text-[#313131]">We are here to help</strong> :
        <br />
        <Phone className="inline size-6 align-middle" aria-hidden="true" />{" "}
        74000 95950 &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
        <Mail className="inline size-6 align-middle" aria-hidden="true" />{" "}
        {organization.email}
      </p>
    </div>
  </section>
);

export default ClosingSection;
