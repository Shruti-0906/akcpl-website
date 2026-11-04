import { Button, Eyebrow } from "@/components";
import { organization } from "@/config";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { NETWORK_TOTALS } from "../data";

const FindCentreSection = () => (
  <section
    id="find"
    className={cn(
      "relative bg-white pt-10 pb-20 text-center lg:pt-12 lg:pb-24",
      GUTTER,
    )}
  >
    <Eyebrow
      label="Find your AKC centre"
      className="mb-6 inline-flex text-[13px] font-normal text-secondary lg:text-[15px]"
    />

    <p className="mx-auto mb-10 max-w-350 font-cormorant text-[clamp(21px,2.1vw,30px)] leading-normal font-semibold text-black">
      <em className="text-primary-subtle italic">
        {NETWORK_TOTALS.centres} centres. {NETWORK_TOTALS.cities} cities and
        towns. {NETWORK_TOTALS.states} states.
      </em>{" "}
      From metropolitan hospital partnerships to district-level public health
      centres &mdash; the AKC network is built to be reachable. If you need
      dialysis in India, there is a strong chance an AKC centre is closer than
      you think.
    </p>

    <p className="mb-2 font-roboto text-[19px] font-bold text-[#333333] lg:text-[22px]">
      We are here to help :
    </p>

    <p className="mb-9 font-roboto text-[19px] font-bold text-[#333333] lg:text-[22px]">
      <a
        href={`tel:${organization.phoneHref}`}
        className="hover:text-primary-subtle"
      >
        {organization.phone}
      </a>
      <span aria-hidden="true"> | </span>
      <a
        href={`mailto:${organization.email}`}
        className="hover:text-primary-subtle"
      >
        {organization.email}
      </a>
    </p>

    <Button
      href="#network"
      className="rounded-md bg-primary-subtle px-10 py-4 font-bold tracking-[0.02em] hover:bg-primary-light"
    >
      Search centres by city <span aria-hidden="true">&rarr;</span>
    </Button>
  </section>
);

export default FindCentreSection;
