import { GUTTER } from "@/constants";

/** Medical disclaimer strip that closes every service page and the homepage. */
const Disclaimer = () => (
  <section className={`border-t border-black/8 bg-[#f7f8f8] py-8 ${GUTTER}`}>
    <p className="mx-auto max-w-4xl text-center font-roboto text-[13px] leading-[20px] font-light text-[#5c5c5c]">
      <span className="font-medium text-[#393f42]">Disclaimer:</span> The
      information provided is for general awareness only and should not replace
      professional medical advice. Always consult your nephrologist for guidance
      specific to your condition.
    </p>
  </section>
);

export default Disclaimer;
