import { Button, Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { OUTLINE_BUTTON, SOLID_BUTTON } from "../components/buttons";

const HeroSection = () => (
  <section
    id="home"
    className={cn(
      /*
       * 80svh rather than the source's 90vh. With the surplus top padding gone
       * the copy no longer fills 90, which left a dead band under the buttons.
       * `min-h` still lets a short viewport grow the section.
       */
      "relative flex min-h-[80svh] items-center overflow-hidden bg-hero-depth",
      GUTTER,
    )}
  >
    <div aria-hidden="true" className="absolute inset-0 bg-hero-grid" />

    {/*
     * No top padding: the source's `.hero-content` carries an inline
     * `padding-top: 80px` to clear its fixed nav and breadcrumb. Ours are
     * sticky and already take up real space, so that padding is surplus, and
     * because the section flex-centres its content it pushed the copy below
     * centre.
     */}
    <div className="relative z-2 w-full max-w-[90%]">
      <div className="flex flex-col">
        <Eyebrow
          label="For Patients & Caregivers : Reading time · 12 minutes"
          className="mb-5 text-white"
        />

        <h1 className="mb-7 font-cormorant text-5xl leading-[1.05] font-light tracking-[-0.01em] text-white lg:text-[62px]">
          Your vascular access
          <span className="block">
            is your <em className="text-primary italic">lifeline.</em>
          </span>
        </h1>

        <p className="mb-12 font-roboto text-[17px] leading-[1.7] font-light text-white">
          Every hemodialysis session depends on one thing:{" "}
          <strong className="font-bold">
            a working access where the machine can connect to your bloodstream.
          </strong>{" "}
          Without it, dialysis isn&rsquo;t possible. With the right one, well
          planned and well cared for, dialysis becomes part of life that fades
          into the background.{" "}
          <em className="italic">
            This page explains every type of access &mdash; how it&rsquo;s made,
            when it&rsquo;s made, what can go wrong, and what you can do daily
            to protect it.
          </em>
        </p>

        <div className="flex flex-wrap gap-4">
          <Button href="#access-types" className={SOLID_BUTTON}>
            See the four access types <span aria-hidden="true">→</span>
          </Button>
          <Button
            href="#safety"
            variant="outline"
            className={cn(
              OUTLINE_BUTTON,
              "border-white text-white hover:border-white hover:bg-white/10",
            )}
          >
            How to protect your arm <span aria-hidden="true">↓</span>
          </Button>
        </div>
      </div>
    </div>

    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 right-[-40px] block h-[450px] w-[680px] -translate-y-1/2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="size-full opacity-[0.12]"
      >
        <defs>
          <linearGradient id="armGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="arteryGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="veinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>

        {/* Decorative circles */}
        <circle
          cx="250"
          cy="250"
          r="220"
          fill="none"
          stroke="rgba(14,124,123,0.12)"
          strokeWidth="0.5"
          strokeDasharray="4 6"
        />
        <circle
          cx="250"
          cy="250"
          r="180"
          fill="none"
          stroke="rgba(14,124,123,0.08)"
          strokeWidth="0.5"
        />

        {/* Arm shape (stylised forearm vertical) */}
        <path
          d="M 200 80 Q 200 70 220 70 L 280 70 Q 300 70 300 80 L 305 380 Q 308 420 290 440 L 260 460 Q 250 470 240 460 L 210 440 Q 192 420 195 380 Z"
          fill="url(#armGrad)"
          stroke="#C9A98C"
          strokeWidth="1.2"
          opacity="0.85"
        />

        {/* Artery */}
        <path
          d="M 235 80 Q 232 200 235 320 Q 238 380 245 410"
          stroke="url(#arteryGrad)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <text
          x="200"
          y="115"
          fontFamily="'Roboto', sans-serif"
          fontSize="9"
          fontWeight="600"
          fill="#fff"
          letterSpacing="2"
          textAnchor="end"
        >
          ARTERY
        </text>
        <line
          x1="205"
          y1="115"
          x2="225"
          y2="115"
          stroke="#fff"
          strokeWidth="1"
        />

        {/* Vein */}
        <path
          d="M 270 80 Q 273 180 268 280 Q 263 350 258 410"
          stroke="url(#veinGrad)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
        <text
          x="305"
          y="115"
          fontFamily="'Roboto', sans-serif"
          fontSize="9"
          fontWeight="600"
          fill="#fff"
          letterSpacing="2"
        >
          VEIN
        </text>
        <line
          x1="275"
          y1="115"
          x2="295"
          y2="115"
          stroke="#fff"
          strokeWidth="1"
        />

        {/* AVF anastomosis (connection) at mid-forearm */}
        <g transform="translate(250, 250)">
          {/* The AVF connection point */}
          <ellipse cx="-10" cy="0" rx="22" ry="10" fill="#fff" opacity="0.4" />
          <path
            d="M -15 -6 Q 0 -10 13 -2 Q 18 6 0 10 Q -18 8 -15 -6 Z"
            fill="url(#veinGrad)"
            stroke="#fff"
            strokeWidth="1"
          />

          {/* Pulsing thrill circles */}
          <circle
            r="32"
            fill="none"
            stroke="#fff"
            strokeWidth="0.8"
            opacity="0.5"
          />
          <circle
            r="48"
            fill="none"
            stroke="#fff"
            strokeWidth="0.5"
            opacity="0.3"
          />
          <circle
            r="64"
            fill="none"
            stroke="#fff"
            strokeWidth="0.4"
            opacity="0.18"
          />

          {/* Label */}
          <line x1="35" y1="0" x2="80" y2="0" stroke="#fff" strokeWidth="1" />
          <text
            x="85"
            y="-2"
            fontFamily="'Roboto', sans-serif"
            fontSize="11"
            fontWeight="600"
            fill="#fff"
            letterSpacing="1.5"
          >
            AVF
          </text>
          <text
            x="85"
            y="12"
            fontFamily="'Roboto', sans-serif"
            fontStyle="italic"
            fontSize="10"
            fill="#fff"
          >
            arteriovenous
          </text>
          <text
            x="85"
            y="24"
            fontFamily="'Roboto', sans-serif"
            fontStyle="italic"
            fontSize="10"
            fill="#fff"
          >
            fistula
          </text>
        </g>

        {/* Wrist/fingers indication */}
        <path
          d="M 230 460 Q 240 470 250 470 Q 260 470 270 460"
          stroke="#C9A98C"
          strokeWidth="1"
          fill="none"
        />

        {/* Caption at bottom */}
        <text
          x="250"
          y="500"
          fontFamily="'Roboto', sans-serif"
          fontStyle="italic"
          fontSize="12"
          fill="#fff"
          textAnchor="middle"
        >
          A surgeon connects your vein to your artery &mdash; creating the
          lifeline.
        </text>
      </svg>
    </div>
  </section>
);

export default HeroSection;
