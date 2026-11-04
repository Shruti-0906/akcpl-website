import type { ReactNode } from "react";

export type Pill = {
  tag: string;
  name: ReactNode;
  sub: string;
  flagship?: boolean;
  href?: string;
};

export type PackageGroup = {
  numeral: string;
  title: ReactNode;
  count: string;
  pills: readonly Pill[];
};

export const PACKAGE_GROUPS: readonly PackageGroup[] = [
  {
    numeral: "I",
    title: (
      <>
        Core Renal &amp; <em>Dialysis Panels</em>
      </>
    ),
    count: "4 packages",
    pills: [
      {
        tag: "Flagship",
        name: (
          <>
            Apex Kidney Panel <em>(AKP)</em>
          </>
        ),
        sub: "The signature comprehensive kidney panel",
        flagship: true,
        href: "#book",
      },
      {
        tag: "Dialysis",
        name: (
          <>
            Apex <em>Dialysis Profile</em>
          </>
        ),
        sub: "Monthly monitoring for HD patients",
      },
      {
        tag: "Anaemia",
        name: (
          <>
            Apex <em>Anaemia Profile</em>
          </>
        ),
        sub: "Evolution of Anaemia status",
      },
      {
        tag: "Bone",
        name: (
          <>
            Apex <em>Bone Profile</em>
          </>
        ),
        sub: "Assessment of calcium–phosphate balance, parathyroid function and bone-mineral metabolism.",
      },
    ],
  },
  {
    numeral: "II",
    title: (
      <>
        Kidney <em>Transplant Panels</em>
      </>
    ),
    count: "4 packages",
    pills: [
      {
        tag: "Pre-Transplant",
        name: (
          <>
            Apex <em>Transplant Profile</em>
          </>
        ),
        sub: "Comprehensive work-up",
      },
      {
        tag: "Recipient",
        name: (
          <>
            Apex <em>Recipient Profile</em>
          </>
        ),
        sub: "Pre-op recipient screening",
      },
      {
        tag: "Donor",
        name: (
          <>
            Apex <em>Donor Profile</em>
          </>
        ),
        sub: "Living donor evaluation",
      },
      {
        tag: "Post-Tx",
        name: (
          <>
            Immediate Post <em>Transplant</em>
          </>
        ),
        sub: "First-year intensive monitoring",
      },
    ],
  },
  {
    numeral: "III",
    title: (
      <>
        Comorbidity <em>&amp; Risk Profiles</em>
      </>
    ),
    count: "6 packages",
    pills: [
      {
        tag: "Diabetes",
        name: (
          <>
            Apex <em>Diabetes Profile</em>
          </>
        ),
        sub: "Comprehensive assessment in Diabetes",
      },
      {
        tag: "Diabetes",
        name: (
          <>
            Apex <em>Diabetes Screen</em>
          </>
        ),
        sub: "Early-stage screening panel",
      },
      {
        tag: "Lipid",
        name: (
          <>
            Apex <em>Lipid Profile</em>
          </>
        ),
        sub: "Cardiovascular risk evaluation",
      },
      {
        tag: "Cardiac",
        name: (
          <>
            Cardiac <em>Profile</em>
          </>
        ),
        sub: "Cardiac injury and cardiac stress markers for clinical evaluation.",
      },
      {
        tag: "Liver",
        name: (
          <>
            Apex <em>Liver Profile</em>
          </>
        ),
        sub: "LFT panel for hepatic monitoring",
      },
      {
        tag: "Triple H",
        name: (
          <>
            Apex <em>Triple H Profile</em>
          </>
        ),
        sub: "Integrated assessment for Hypertension, Hyperglycaemia & Hyperlipidaemia",
      },
    ],
  },
  {
    numeral: "IV",
    title: (
      <>
        Specialised <em>&amp; General Health</em>
      </>
    ),
    count: "7 packages",
    pills: [
      {
        tag: "Iron",
        name: (
          <>
            Iron <em>Study</em>
          </>
        ),
        sub: "Evaluation of iron deficiency and anaemia.",
      },
      {
        tag: "Fever",
        name: (
          <>
            Apex <em>Fever Profile</em>
          </>
        ),
        sub: "Workup for unexplained fever",
      },
      {
        tag: "Antenatal",
        name: (
          <>
            Antenatal <em>Profile</em>
          </>
        ),
        sub: "Pregnancy monitoring panel",
      },
      {
        tag: "Pre-Op",
        name: (
          <>
            Pre-Operative <em>Profile</em>
          </>
        ),
        sub: "Pre-surgery work-up",
      },
      {
        tag: "Health",
        name: (
          <>
            Basic <em>Health</em>
          </>
        ),
        sub: "Annual general check-up",
      },
      {
        tag: "Health",
        name: (
          <>
            Standard <em>Health</em>
          </>
        ),
        sub: "Mid-range comprehensive panel",
      },
      {
        tag: "Health",
        name: (
          <>
            Premium <em>Health</em>
          </>
        ),
        sub: "Full executive screening",
      },
    ],
  },
] as const;
