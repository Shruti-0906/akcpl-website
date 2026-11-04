import Image from "next/image";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

/** Portrait bucket. Keys carry spaces, which S3 serves back through `+`. */
const S3 = "https://akcpl-assets.s3.ap-south-1.amazonaws.com";

const FOUNDERS = [
  {
    name: "Dr. Shrirang",
    surname: "Bichu",
    credentials:
      "Advisor to Board & Co-Founder · Professor & Head, Nephrology, Bombay Hospital · Chairman, Board of Studies, MUHS",
    bio: "Initiated AKC’s PPP and trust centres, the Apex School of Dialysis Technology, and fellowship programmes. Steered AKC through COVID-19 and other major challenges, bringing clinical leadership together with a strong understanding of legal and financial matters. His academic work spans transplant outcomes and infection patterns and Project Victory. Author of 25+ publications with over 25 years of teaching experience.",
    image: `${S3}/Dr.+Shrirang+Bichu+Our+Story.jpg`,
    alt: "Portrait of Dr. Shrirang Bichu",
  },
  {
    name: "Dr. Jatin",
    surname: "Kothari",
    credentials:
      "Co-Founder · Director of Nephrology, Nanavati Max · FRCP (Edinburgh) · ISN Education Ambassador",
    bio: "The clinical educator of the group. FRCP (Edinburgh) elected fellow, International Society of Nephrology Education Ambassador, and a forty-plus publication record. Connected AKC's clinical practice to international academic networks from the early years.",
    image: `${S3}/Dr.+Jatin+Kothari+Our+Story.jpg`,
    alt: "Portrait of Dr. Jatin Kothari",
  },
  {
    name: "Dr. Rajesh",
    surname: "Kumar",
    credentials:
      "Co-Founder · Nephrologist, L.H. Hiranandani Hospital · Infection control & dialysis quality research",
    bio: "Clinical lead on infection control protocols and dialysis quality research - a domain that has become central to AKC's operating model across more than 200 centres. Co-author on the Project Victory consortium's pandemic-era work.",
    /* Stored without an honorific, unlike its three siblings. */
    image: `${S3}/Rajesh+Kumar+Our+Story.jpg`,
    alt: "Portrait of Dr. Rajesh Kumar",
  },
  {
    name: "Dr. Viswanath",
    surname: "Billa",
    credentials:
      "Co-Founder & Director, Apex Kidney Care · Associate Professor of Nephrology, Bombay Hospital",
    bio: "The clinical-academic spine of the founding group. Principal author across ASTRA's mathematical optimisation, the Project Victory citywide dashboard, and the AKC × IIT Bombay operations-research programme. Twenty-plus indexed publications.",
    image: `${S3}/Dr.+Viswanath+Billa+Our+Story.jpg`,
    alt: "Portrait of Dr. Viswanath Billa",
  },
] as const;

const PATRONS = [
  {
    name: "Mr. Rupen",
    surname: "Kothari",
    credentials: "Philanthropist · Founding patron of Apex Kidney Care",
    bio: "At the most crucial juncture - when the founders had a plan, a clinical model, and aligned principles but no path to capital - Mr. Rupen Kothari, a true philanthropist, stepped forward. His sole interest was helping dialysis patients. He believed in the founders' clinical capability, and offered all possible financial assistance to bring the institution to life. Apex Kidney Care, in the words of its own founders, owes everything to this gentleman.",
    image: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Our+Story+-+Mr.+Rupen+Kothari.jpg",
    alt: "Portrait of Mr. Rupen Kothari",
  },
  {
    name: "Mr. Hitesh",
    surname: "Mehta",
    credentials: "Director of Apex Kidney Care",
    bio: "Mr. Hitesh Mehta is a visionary early investor who provided pivotal capital and strategic guidance to AKC's directors during its formative years, offering foundational support that successfully championed the organization's journey toward success.",
    image: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Our+Story+-+Mr.+Hitesh+Mehta.jpg",
    alt: "Portrait of Mr. Hitesh Mehta",
  },
] as const;

const NAME_CLASSES =
  "font-roboto text-base font-semibold text-secondary sm:text-lg";
const CREDENTIAL_CLASSES =
  "font-roboto text-xs leading-snug text-secondary/70 italic sm:text-sm";
const BIO_CLASSES = "font-roboto text-sm leading-relaxed text-black/80";
const FRAME_CLASSES = "border border-primary bg-[#D6ECF8]";

const FoundingGroupSection = () => {
  return (
    <section
      id="founding-group"
      className={cn("bg-secondary-light py-12 lg:py-16", GUTTER)}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
        <Eyebrow
          label="The Founding Group"
          className="justify-center text-white/70"
        />
        <h2 className="section-heading text-white">
          The nephrologists who{" "}
          <span className="text-primary italic">built it together.</span>
        </h2>
        <p className="font-roboto text-sm leading-relaxed text-white/70 sm:text-base">
          The clinical founders of Apex Kidney Care - the practising
          nephrologists who shaped the institution&apos;s clinical, academic,
          and operational character through its first eighteen years.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
        {FOUNDERS.map((founder) => (
          <article
            key={founder.surname + founder.name}
            className="flex flex-col gap-3 border-t-4 border-tertiary bg-white p-4 lg:p-5"
          >
            <div className={cn("mx-auto w-full max-w-65", FRAME_CLASSES)}>
              {/* Most founder portraits are 2:3 in a square frame, so the crop
                  is anchored to the top - centred, it would take the heads. */}
              <Image
                src={founder.image}
                alt={founder.alt}
                width={1000}
                height={1000}
                loading="lazy"
                quality={100}
                sizes="16.25rem"
                className="aspect-square w-full object-cover object-top"
              />
            </div>

            <div>
              <h3 className={NAME_CLASSES}>
                {founder.name}{" "}
                <span className="font-normal text-tertiary italic">
                  {founder.surname}
                </span>
              </h3>
              <p className={cn("mt-1", CREDENTIAL_CLASSES)}>
                {founder.credentials}
              </p>
            </div>

            <p className={BIO_CLASSES}>{founder.bio}</p>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-6 grid max-w-7xl gap-6 lg:grid-cols-2">
        {PATRONS.map((patron) => (
          <article
            key={patron.surname}
            className="flex flex-col gap-5 bg-white p-5 sm:flex-row lg:p-6"
          >
            <div
              className={cn(
                "mx-auto w-full max-w-65 shrink-0 sm:w-65 sm:self-center",
                FRAME_CLASSES,
              )}
            >
              <Image
                src={patron.image}
                alt={patron.alt}
                width={216}
                height={215}
                sizes="(min-width: 640px) 16.25rem, 90vw"
                className="aspect-square w-full object-cover"
                loading="lazy"
                quality={100}
              />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className={NAME_CLASSES}>
                {patron.name}{" "}
                <span className="font-normal text-tertiary italic">
                  {patron.surname}
                </span>
              </h3>
              <p className={CREDENTIAL_CLASSES}>{patron.credentials}</p>
              <p className={cn("mt-3", BIO_CLASSES)}>{patron.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FoundingGroupSection;
