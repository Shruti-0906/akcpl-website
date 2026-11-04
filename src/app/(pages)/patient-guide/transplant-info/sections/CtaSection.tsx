import { Mail, Phone } from "lucide-react";

import { Eyebrow } from "@/components";
import { organization } from "@/config";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { CI_BODY, CI_TITLE } from "../components/text";

const CtaSection = () => (
  <section className={cn("relative bg-white py-20 text-center", GUTTER)}>
    <div>
      <Eyebrow
        label="A Conversation Worth Having"
        className="mb-5 inline-flex text-black"
      />

      <h2 className={cn(CI_TITLE, "mb-4")}>
        The journey begins with a <em>single question.</em>
      </h2>

      <p className={cn(CI_BODY, "mb-[25px]")}>
        &quot;Am I a candidate?&quot; &mdash; speak to an AKC nephrologist to
        find out. The conversation is free, confidential, and without
        obligation. Bring your family. Bring your questions. We have time.
      </p>
    </div>

    <div>
      <p
        className={cn(
          CI_BODY,
          "text-[30px] leading-[46px] font-bold text-black",
        )}
      >
        <strong className="text-[#313131]">For quick contact</strong> :
        <br />
        <span className="inline-flex items-center gap-2 align-middle">
          <Phone className="inline size-6" aria-hidden="true" />{" "}
          <a href={`tel:${organization.phoneHref}`}>{organization.phone}</a>
        </span>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <span className="inline-flex items-center gap-2 align-middle">
          <Mail className="inline size-6" aria-hidden="true" />{" "}
          <a href={`mailto:${organization.email}`}>{organization.email}</a>
        </span>
      </p>
    </div>
  </section>
);

export default CtaSection;
