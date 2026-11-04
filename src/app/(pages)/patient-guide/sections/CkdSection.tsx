import Image from "next/image";

import { Button, Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { SOLID_BUTTON } from "../components/buttons";

const CkdSection = () => (
  <section className="relative scroll-mt-15 bg-white py-27.5">
    <div className={cn("relative z-2", GUTTER)}>
      <div>
        {/*
         * No bottom rule: the source's `.chap-header` asks for
         * `border-bottom: 1px solid var(--rule)`, but `--rule` is never defined, so
         * the shorthand is invalid and the border resolves to `none`.
         */}
        <div className="flex items-start gap-6">
          <span
            aria-hidden="true"
            className="shrink-0 font-roboto text-[64px] leading-[0.85] font-bold tracking-[-0.02em] text-black italic"
          >
            I
          </span>

          <div className="flex-1">
            <Eyebrow
              label="Chapter One · The basics"
              className="mb-5 text-black"
            />

            <h2 className="font-cormorant text-4xl leading-[1.05] font-bold tracking-[-0.015em] text-black lg:text-[52px]">
              What CKD{" "}
              <em className="text-primary-subtle italic">actually is.</em>
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
        <div>
          <Image
            src="https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Patient+Guide+-+CKD+Image.jpg"
            alt="A nurse pointing to an anatomical model of a kidney on a consulting-room desk"
            width={4240}
            height={2824}
            quality={100}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full"
          />
        </div>

        <div>
          <div className="font-roboto text-[17px] leading-[22px] font-light text-[#393f42] [&_em]:italic [&_p]:mb-3.75">
            <p>
              Chronic kidney disease &mdash; CKD &mdash; means that your kidneys
              are not working at their full capacity, and that this has been
              true for at least three months.
            </p>
            <p>
              Your kidneys are <strong>two bean-shaped organs</strong>, each
              about the size of your fist, sitting at the back of your abdomen
              on either side of your spine. They are not glamorous organs. They
              do not feature in poetry.{" "}
              <em>
                But they do an extraordinary amount of work every single day
                &mdash; quietly, in the background, while you go about your
                life.
              </em>
            </p>
            <p>
              Every minute,{" "}
              <strong>
                about a litre of your blood passes through your kidneys.
              </strong>{" "}
              They filter it, take out what your body doesn&rsquo;t need, return
              what it does, and pass the waste out as urine. Over twenty-four
              hours, that&rsquo;s nearly 1,500 litres of blood filtered. It is
              one of the most important and one of the most invisible jobs in
              your body.
            </p>
            <p>
              <strong>&ldquo;Chronic kidney disease&rdquo;</strong> simply means
              that this filtering machinery is no longer working at full
              capacity.{" "}
              <em>
                That can range from very mild &mdash; almost no symptoms, almost
                no impact on daily life &mdash; to severe enough that the
                kidneys need help to do their job.
              </em>{" "}
              Where you sit on that range matters enormously. We&rsquo;ll come
              to that.
            </p>
          </div>

          <Button
            href="/patient-guide/about-ckd"
            className={cn(SOLID_BUTTON, "mt-7.5 mb-3.75")}
          >
            Read more about CKD <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CkdSection;
