import { centreLocation } from "../data";
import type { Centre } from "../data";

const CentreCard = ({ centre }: { centre: Centre }) => (
  <article className="flex h-full flex-col rounded-[10px] border border-[#7fc3e8] bg-white px-8 py-7">
    <h3 className="mb-1 font-cormorant text-[21px] leading-snug font-semibold text-black lg:text-[25px]">
      {centre.name}
    </h3>

    <p className="mb-4 font-cormorant text-[17px] leading-snug text-primary-subtle italic lg:text-[19px]">
      {centreLocation(centre)}
    </p>

    <p className="mb-4 font-roboto text-[15px] leading-[1.6] text-[#333333] lg:text-[16.5px]">
      {centre.address}
    </p>

    {centre.phone && (
      <a
        href={`tel:${centre.phone}`}
        className="font-roboto text-[15px] leading-[1.7] text-[#9a7420] hover:underline lg:text-[16.5px]"
      >
        {centre.phone}
      </a>
    )}

    {centre.email && (
      <a
        href={`mailto:${centre.email}`}
        className="font-roboto text-[15px] leading-[1.7] break-all text-[#9a7420] hover:underline lg:text-[16.5px]"
      >
        {centre.email}
      </a>
    )}

    {centre.mapUrl && (
      <a
        href={centre.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 w-fit font-roboto text-[13.5px] text-primary-subtle hover:text-primary lg:text-[15px]"
      >
        Get directions <span aria-hidden="true">&rarr;</span>
      </a>
    )}
  </article>
);

export default CentreCard;
