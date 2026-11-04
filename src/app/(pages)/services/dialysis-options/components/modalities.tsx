import type { Modality } from "./ModalityChapter";

export const MODALITIES: readonly Modality[] = [
  {
    id: "mod-1",
    numeral: "I",
    label: "Modality One",
    eyebrow: "The Proven Foundation",
    title: "Standard Flux Hemodialysis",
    subtitle:
      "The most widely practised form of dialysis worldwide effective, accessible, and the bedrock of life-saving renal care.",
    stats: [
      { label: "Frequency", value: "3x per week" },
      { label: "Session", value: "~4 hours" },
      { label: "Setting", value: "In-centre" },
      { label: "Membrane", value: "Low flux" },
    ],
    prose: [
      <>
        Standard flux hemodialysis uses a dialyser with smaller pore-size
        membranes. Through <strong>diffusion</strong>, small waste molecules
        urea, creatinine, potassium, phosphate pass from your blood into the
        dialysate fluid, where they are carried away. Excess fluid is removed
        by ultrafiltration.
      </>,
      <>
        It is the modality that built modern nephrology.{" "}
        <strong>Decades of evidence</strong> show that, when delivered to high
        standards of adequacy, water purity, and vascular access care,
        standard flux HD reliably extends and improves life for the great
        majority of patients who depend on it.
      </>,
    ],
    calloutText: (
      <>
        Every standard flux session is delivered to{" "}
        <strong>validated Kt/V and URR adequacy targets</strong>, using
        ultra-pure water and rigorously trained technicians. The basics are
        non-negotiable.
      </>
    ),
    bestFor: [
      "Patients newly starting dialysis",
      "Stable, well-tolerated long-term care",
      "Settings prioritising accessibility",
      "Initial therapy before modality optimisation",
    ],
  },
  {
    id: "mod-2",
    numeral: "II",
    label: "Modality Two",
    eyebrow: "A Wider Window of Clearance",
    title: "High Flux Hemodialysis",
    subtitle:
      "A meaningful step forward. Larger-pore membranes clear toxins that standard flux cannot reach with measurable benefits over the long term.",
    stats: [
      { label: "Frequency", value: "3x per week" },
      { label: "Session", value: "~4 hours" },
      { label: "Setting", value: "In-centre" },
      { label: "Membrane", value: "High flux" },
    ],
    prose: [
      <>
        High flux hemodialysis uses dialysers with{" "}
        <strong>larger membrane pores</strong>, allowing the clearance of{" "}
        <em>middle molecules</em> toxins like beta-2 microglobulin that
        build up over years of dialysis and contribute to long-term
        complications such as dialysis-related amyloidosis, cardiovascular
        disease, and bone problems.
      </>,
      <>
        For patients on dialysis for many years, the cumulative benefit of
        clearing these middle molecules can be significant. International
        guidelines increasingly favour high flux membranes wherever water
        purity and adequacy can be assured.
      </>,
    ],
    calloutText: (
      <>
        We routinely use <strong>high flux dialysers with ultra-pure
        dialysate</strong> across our network the conditions that make high
        flux meaningfully better, rather than just nominally so.
      </>
    ),
    bestFor: [
      "Long-term dialysis patients (years on therapy)",
      "Patients with cardiovascular comorbidities",
      "Patients with bone-mineral concerns",
      "Standard practice when conditions allow",
    ],
    alt: true,
  },
  {
    id: "mod-3",
    numeral: "III",
    label: "Modality Three",
    eyebrow: "The Deepest Clearance Available In-Centre",
    title: (
      <>
        Hemodia<em className="text-primary-subtle">filtration</em> HDF
      </>
    ),
    subtitle:
      "The most advanced in-centre modality. Two filtration mechanisms working together with growing evidence of improved survival and quality of life.",
    stats: [
      { label: "Frequency", value: "3x per week" },
      { label: "Session", value: "~4 hours" },
      { label: "Setting", value: "In-centre" },
      { label: "Mechanism", value: "Diffusion + Convection" },
    ],
    prose: [
      <>
        HDF combines two filtration mechanisms in a single session.{" "}
        <strong>Diffusion</strong> (as in conventional HD) removes small
        molecules. <strong>Convection</strong> achieved by pushing large
        volumes of ultra-pure substitution fluid through the dialyser
        sweeps out a much broader range of{" "}
        <em>middle and larger molecules</em>.
      </>,
      <>
        Landmark European trials (CONTRAST, ESHOL, Turkish OL-HDF) have
        demonstrated that high-volume online HDF can improve survival, blood
        pressure stability, intra-dialytic tolerability, and patient-reported
        quality of life compared with conventional HD.
      </>,
      <>
        HDF requires an HDF-capable machine, ultra-pure water, and trained
        staff. It is, in many parts of Europe, the standard of care. It is
        increasingly available in India and we believe it should be more
        widely so.
      </>,
    ],
    calloutText: (
      <>
        HDF is offered at our advanced centres, with{" "}
        <strong>high-volume online HDF</strong> delivered to international
        protocol standards. Where suitable, we actively recommend this
        modality for its outcome benefits.
      </>
    ),
    bestFor: [
      "Patients seeking the best in-centre outcomes",
      "Younger patients with long anticipated dialysis vintage",
      "Patients with intra-dialytic hypotension",
      "Patients with cardiovascular risk burden",
    ],
  },
  {
    id: "mod-4",
    numeral: "IV",
    label: "Modality Four",
    eyebrow: "Continuous Renal Replacement Therapy",
    title: "CRRT Procedure",
    subtitle:
      "A continuous, gentle form of renal replacement therapy designed for critically ill patients who need ongoing support when conventional dialysis may not be well tolerated.",
    stats: [
      { label: "Frequency", value: "Continuous / 24 hours" },
      { label: "Session", value: "Typically 24 hours or as clinically indicated" },
      { label: "Setting", value: "ICU / Critical Care" },
      {
        label: "Training",
        value: "Specialised critical care & nephrology team",
      },
    ],
    prose: [
      <>
        CRRT provides continuous removal of excess fluid, waste products and
        electrolytes from the blood. Unlike conventional hemodialysis, it works
        gradually over an extended period, making it particularly suitable for
        critically ill patients who may not tolerate rapid fluid or solute
        shifts.
      </>,
      <>
        The therapy can help maintain fluid balance and support kidney function
        in patients with acute kidney injury, severe fluid overload or
        haemodynamic instability. Treatment parameters are carefully adjusted
        according to the patient&apos;s condition, fluid requirements and
        clinical needs.
      </>,
      <>
        CRRT requires close monitoring throughout the treatment. A specialised
        multidisciplinary team manages the therapy, monitors vital parameters and
        makes necessary adjustments to ensure safe and effective renal support.
      </>,
    ],
    calloutText: (
      <>
        We provide specialised renal replacement support for critically ill
        patients, with a focus on personalised treatment, continuous monitoring
        and coordinated care between nephrology and critical care teams.
      </>
    ),
    bestFor: [
      "Critically ill patients with acute kidney injury",
      "Patients with haemodynamic instability",
      "Patients with severe fluid overload",
      "Patients requiring gradual and continuous fluid removal",
    ],
    alt: true,
  },
] as const;
