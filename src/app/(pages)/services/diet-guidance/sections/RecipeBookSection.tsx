import Image from "next/image";

import { GUTTER } from "@/constants";

const BOOKS = [
  {
    label: "English",
    href: "https://www.apexkidneycare.com/akc_new/Reanal-Diet/index-eng.html",
  },
  {
    label: "Hindi",
    href: "https://www.apexkidneycare.com/akc_new/Reanal-Diet/index-hindi.html",
  },
  {
    label: "Marathi",
    href: "https://www.apexkidneycare.com/akc_new/Reanal-Diet/index-marathi.html",
  },
] as const;

const RecipeBookSection = () => (
  <section id="recipes" className={`bg-secondary py-16 lg:py-30 ${GUTTER}`}>
    <div className="grid grid-cols-1 items-center gap-[50px] lg:grid-cols-[1.5fr_2fr]">
      <div className="text-center">
        <div className="mb-5 flex items-center justify-center gap-3 font-roboto text-sm tracking-[0.22em] text-white uppercase">
          <span className="h-px w-6 bg-white" />
          AKC Recipe Book
        </div>
        <h2 className="mb-4 font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-white">
          Recipes for Better Kidney Health
        </h2>
        <p className="mb-4 font-roboto text-[17px] leading-[22px] font-light text-[#FBF8F3]/72">
          Explore tasty, nutritious, and dialysis-friendly recipes specially
          <br />
          curated to support kidney health while maintaining the right balance
          of nutrition, flavor, and wellness.
        </p>
        <p className="font-roboto text-[17px] leading-[22px] font-light text-[#FBF8F3]/72">
          Available in English, Hindi &amp; Marathi for easy understanding
          <br />
          and better accessibility.
        </p>
      </div>

      {/* Reference .photo — the download panel sits over the notepad in the photo. */}
      <div className="relative flex items-center justify-center overflow-hidden rounded-sm border border-white bg-[linear-gradient(135deg,#003e68_0%,#0078ad_100%)] shadow-[rgba(0,0,0,0.30)_0px_20px_35px]">
        <Image
          src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Diet+Guidance+-+Recipe+Book+Section.jpg"
          alt="AKC renal diet recipe book"
          width={800}
          height={534}
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="h-auto w-full"
        />

        <div className="absolute top-1/2 left-[55%] w-[150px] -translate-x-1/2 -translate-y-1/2 text-center sm:w-[195px]">
          <div className="font-cormorant text-2xl leading-[1.05] font-bold text-black sm:text-4xl">
            Download
          </div>
          <p className="mb-2 font-roboto text-[13px] leading-tight font-light text-[#393f42] sm:mb-4 sm:text-[17px] sm:leading-[22px]">
            free recipe books
          </p>
          <div className="flex flex-col items-center gap-2 sm:gap-[15px]">
            {BOOKS.map((book) => (
              <a
                key={book.label}
                href={book.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-[110px] rounded-[35px] bg-[#3B82F6] px-4 py-1.5 text-center font-roboto text-sm text-white hover:opacity-90 sm:w-[120px] sm:px-6 sm:py-2 sm:text-base"
              >
                {book.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RecipeBookSection;
