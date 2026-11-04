"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import { Button } from "@/components";
import { cn } from "@/lib";

const SERVICES = [
  {
    id: "dialysis-options",
    label: "Incentre Dialysis",
    href: "/services/dialysis-options",
    lead: "When Kidneys Need Support:",
    accent: "Understanding Dialysis",
    body: [
      "When chronic kidney disease reaches its most advanced stage - CKD Stage 5, also called End-Stage Renal Disease - the kidneys can no longer filter waste and excess fluid from the blood on their own. Dialysis is your artificial kidney, taking over what nature can no longer do.",
      "There are two broad paths: Hemodialysis, where blood is filtered through a machine, and Peritoneal Dialysis, where filtration happens inside your own abdomen. Within hemodialysis itself, there are four modalities - each suited to different lives, lifestyles, and clinical needs.",
      "The right choice depends on you. This page explains each option, what it offers, and who it suits best - so you and your nephrologist can decide together.",
    ],
    image:
      "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Home-Our+Services-Dialysis.jpg",
    alt: "A patient on a dialysis machine while a nephrologist explains how the kidneys filter blood",
  },
  {
    id: "home-haemodialysis",
    label: "Home Hemodialysis",
    href: "/services/home-haemodialysis",
    lead: "When dialysis comes home,",
    accent: "life opens up.",
    body: [
      "For more than a decade, AKC has brought dialysis into the patient's own home - safely, professionally, and with the same clinical infrastructure that runs the centres. 1,000+ patients. 81,000+ home sessions. Zero medico-legal cases. The AKC Home HD programme is India's longest-running structured home hemodialysis service, and the dataset behind it is the most comprehensive in the country.",
    ],
    image: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Homepage+-+Service+3+(Services+Tabs).png",
    alt: "Two AKC clinicians setting up a home hemodialysis session for a patient",
  },
  {
    id: "vascular-access",
    label: "Vascular Access",
    href: "/services/vascular-access",
    lead: "Your vascular access",
    accent: "is your lifeline.",
    body: [
      "Every hemodialysis session depends on one thing: a working access where the machine can connect to your bloodstream. Without it, dialysis isn't possible. With the right one, well planned and well cared for, dialysis becomes part of life that fades into the background. This page explains every type of access - how it's made, when it's made, what can go wrong, and what you can do daily to protect it.",
    ],
    image: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Homepage+-+Service+4+(Services+Tabs).png",
    alt: "A gloved hand holding a digital illustration of kidneys surrounded by clinical icons",
  },
  {
    id: "pathology-lab",
    label: "Pathology Lab",
    href: "/services/pathology-lab",
    lead: "A lab built around",
    accent: "kidney patients.",
    body: [
      "AKCPL is AKC's NABL-accredited in-house diagnostics lab, integrated directly into the Axis EMR. Results arrive as a trend across your sessions rather than a one-off reading, so your nephrologist sees which direction your numbers are moving in, not only where they landed today.",
    ],
    image:
      "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Home-Our+ServicesPathology+Lab.jpg",
    alt: "A technician running samples at AKCPL",
  },
  {
    id: "diet-guidance",
    label: "Diet Consultation",
    href: "/services/diet-guidance",
    lead: "Eat to protect your kidneys,",
    accent: "eat to enjoy life.",
    body: [
      "AKC's renal nutrition programme builds personalised, culturally familiar Indian diet plans for every stage of CKD - written by renal dietitians and linked to your lab results through Axis, so the plan moves as your numbers do.",
    ],
    image:
      "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Home-our+Services-Diet+Consultation.jpg",
    alt: "A renal dietitian talking a patient through a personalised diet plan",
  },
  {
    id: "platform-services",
    label: "Platform Services",
    href: "/services/platform-services",
    lead: "Platform services",
    // accent: "Hemodialysis.",
    body: [
      "The services AKC runs on behalf of partner institutions are being set out in full. Until the page opens, our team is glad to talk through what an engagement would look like for your institution.",
    ],
    image:
      "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Home-Our+ServicesPlatform+Services.jpg",
    alt: "Apex Kidney Care staff working alongside a partner hospital team",
  },
  {
    id: "pharmacy",
    label: "Pharmacy",
    href: "/services/pharmacy",
    lead: "The pharmacy",
    // accent: "Hemodialysis.",
    body: [
      "Renal medication through AKC centres, how prescriptions and refills are handled across the network, and what patients need to bring with them. Until the page opens, speak to your centre or our team about the medication you need.",
    ],
    image:
      "https://akcpl-assets.s3.ap-south-1.amazonaws.com/Sections/Home-Our+Services-Pharmacy.jpg",
    alt: "Renal medication being dispensed at an Apex Kidney Care centre",
  },
] as const;

const ServicesTabs = () => {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const service = SERVICES[active] ?? SERVICES[0];

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (step === 0) return;

    event.preventDefault();
    const next = (active + step + SERVICES.length) % SERVICES.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="flex flex-col gap-10 lg:gap-14">
      <div
        role="tablist"
        aria-label="Our services"
        onKeyDown={handleKeyDown}
        className="flex flex-wrap justify-center gap-x-12 gap-y-3"
      >
        {SERVICES.map((item, index) => (
          <button
            key={index}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`services-tab-${item.id}`}
            aria-selected={index === active}
            aria-controls={`services-panel-${item.id}`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            className={cn(
              "cursor-pointer font-cormorant text-base font-semibold tracking-[0.12em] uppercase transition sm:text-xl",
              "focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
              index === active
                ? "text-primary"
                : "text-secondary hover:text-primary/70",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`services-panel-${service.id}`}
        aria-labelledby={`services-tab-${service.id}`}
        className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <div className="flex flex-col gap-5">
          <h3 className="font-cormorant text-4xl leading-tight font-semibold text-secondary lg:text-5xl">
            {service.lead}
            {/* Not every tab carries an accent clause. Where it is absent the
                heading is the lead alone, with no trailing space left behind. */}
            {"accent" in service && (
              <>
                {" "}
                <span className="text-primary italic">{service.accent}</span>
              </>
            )}
          </h3>

          {service.body.map((paragraph, index) => (
            <p
              key={index}
              className="font-roboto text-sm leading-relaxed text-secondary/70"
            >
              {paragraph}
            </p>
          ))}

          <Button
            href={service.href}
            variant="outline"
            className="mt-2 self-start rounded-xl px-8 py-4"
          >
            Read More
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        </div>

        <Image
          src={service.image}
          alt={service.alt}
          width={641}
          height={589}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="mx-auto h-auto max-h-147.5 w-full max-w-160 border-[3px] border-primary object-fill lg:mr-0"
          loading="lazy"
          quality={100}
        />
      </div>
    </div>
  );
};

export default ServicesTabs;
