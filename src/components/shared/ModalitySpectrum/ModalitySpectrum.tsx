import Image from "next/image";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const SPECTRUM_POINTS = [
  { label: "Standard Flux", left: "8%", border: "border-secondary" },
  { label: "High Flux", left: "38%", border: "border-primary-subtle" },
  { label: "HDF", left: "68%", border: "border-black" },
  {
    label: "CRRT",
    left: "92%",
    border: "border-tertiary bg-tertiary-subtle",
  },
] as const;

/** Respaced so the bar still runs end to end without the fourth point. */
const SPECTRUM_POINTS_WITHOUT_CRRT = [
  { label: "Standard Flux", left: "8%", border: "border-secondary" },
  { label: "High Flux", left: "50%", border: "border-primary-subtle" },
  { label: "HDF", left: "92%", border: "border-black" },
] as const;

/** Section artwork bucket. Keys carry spaces, which S3 serves back through `+`. */
const S3 = "https://akcpl-assets.s3.ap-south-1.amazonaws.com";

const MINI_CARDS = [
  {
    id: "mod-1",
    numeral: "I",
    image: `${S3}/Sections/Dialysis+Options+-+Standard+Flux.jpg`,
    title: "Standard Flux HD",
    body: "The proven, foundational dialysis. Widely accessible, reliably effective for small-solute clearance.",
  },
  {
    id: "mod-2",
    numeral: "II",
    image: `${S3}/Sections/Dialysis+Options+-+High+Flux.jpg`,
    title: "High Flux HD",
    body: "Larger pore membranes clear more of the toxins that smaller pores miss for better long-term outcomes.",
  },
  {
    id: "mod-3",
    numeral: "III",
    image: `${S3}/Sections/Dialysis+Options+-+HDF.jpg`,
    title: "Hemodiafiltration (HDF)",
    body: "The most advanced in-centre modality. Combines diffusion and convection for the deepest clearance.",
  },
  {
    id: "mod-4",
    numeral: "IV",
    /* Bucket key still reads Home HD; the card itself is CRRT. */
    image: `${S3}/Sections/Dialysis+Options+-+Home+HD.jpg`,
    title: "CRRT",
    body: "Continuous kidney support for critically ill patients. Gentle, ongoing therapy designed to manage fluid and waste when conventional dialysis may not be suitable.",
  },
] as const;

export interface ModalitySpectrumProps {
  /**
   * Prefix for the mini-card links. Left empty on the dialysis options page,
   * where the modality chapters share the page; set to that page's path when
   * the block is used elsewhere, so the anchors still resolve.
   */
  hrefBase?: string;
  /**
   * The cards are the entry points into the modality chapters, so they are
   * dropped where those chapters do not follow the block.
   */
  showCards?: boolean;
  /** The `Dialysis Options` page title, carried only on that page. */
  showHeading?: boolean;
  /**
   * CRRT is the fourth modality on the dialysis options page, which carries a
   * chapter for it. Off, the block reads as three modalities throughout.
   */
  showCrrt?: boolean;
  /** Caption under the spectrum bar. Rendered uppercase. */
  caption?: string;
}

const ModalitySpectrum = ({
  hrefBase = "",
  showCards = true,
  showHeading = true,
  showCrrt = true,
  caption = "Foundational care",
}: ModalitySpectrumProps) => {
  const points = showCrrt ? SPECTRUM_POINTS : SPECTRUM_POINTS_WITHOUT_CRRT;
  const cards = showCrrt ? MINI_CARDS : MINI_CARDS.slice(0, 3);
  const count = showCrrt ? "Four" : "Three";

  return (
    <section className={cn("bg-[#e0f2f9] py-16 lg:py-30", GUTTER)}>
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <div className="mb-14 text-center">
            <h2 className="section-heading text-black">
              Incentre{" "}
              <span className="text-primary-subtle italic">Dialysis</span>
            </h2>
          </div>
        )}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Eyebrow
            label={`The ${count} Hemodialysis Modalities`}
            className="mb-5 justify-center text-black/80"
          />
          <h2 className="section-heading text-black">
            {count} ways the same machine can{" "}
            <span className="text-primary-subtle italic">change a life.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-roboto text-[17px] leading-5.5 font-light text-[#393f42]">
            Every modality below filters your blood. What differs is how
            thoroughly, how often, and where and those differences matter.
          </p>
        </div>

        <div className="relative mx-auto mb-14 hidden max-w-270 px-10 lg:block">
          <div className="relative my-8 h-1.5 rounded-full bg-spectrum">
            {points.map((point) => (
              <div
                key={point.label}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ left: point.left }}
              >
                <span className="absolute -top-11 left-1/2 -translate-x-1/2 font-roboto text-[17px] font-bold tracking-[0.16em] whitespace-nowrap text-secondary uppercase">
                  {point.label}
                </span>
                <span
                  className={cn(
                    "block size-4.5 rounded-full border-[3px] border-solid bg-white shadow-[0_2px_12px_rgba(14,37,64,0.18)]",
                    point.border,
                  )}
                />
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between font-roboto text-sm font-bold tracking-[0.16em] text-[#393f42] uppercase italic sm:text-base">
            <span>{caption}</span>
          </div>
        </div>

        {showCards && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <a
                key={card.id}
                href={`${hrefBase}#${card.id}`}
                className="group relative flex flex-col rounded-sm border border-black/10 bg-white p-6 hover:border-primary-subtle"
              >
                <span className="pointer-events-none absolute top-3 right-4 font-cormorant text-3xl font-light text-secondary/10 italic">
                  {card.numeral}
                </span>

                <div className="relative aspect-3/2 w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <h4 className="mt-4 pr-6 font-roboto text-lg leading-tight font-bold text-secondary">
                  {card.title}
                </h4>
                <p className="mt-2 font-roboto text-sm leading-relaxed text-[#393f42]">
                  {card.body}
                </p>
                {/* `mt-auto` pins it to the card floor, so the four read-more
                    lines sit level however long each blurb runs. */}
                <div className="mt-auto pt-3 font-roboto text-[10px] font-bold tracking-[0.18em] text-primary-subtle uppercase">
                  Read more →
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ModalitySpectrum;
