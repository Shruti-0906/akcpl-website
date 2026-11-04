import type { Mechanism } from "./MechanismCard";

export const MECHANISMS: readonly Mechanism[] = [
  {
    id: "hd",
    title: "Standard dialysis (HD)",
    mechanism: "Diffusion only — the wastes drift out",
    smallWastes: "Small wastes — removed",
    biggerWastes: (
      <>
        Bigger wastes — <u>mostly left behind</u>
      </>
    ),
    body: (
      <>
        Small waste molecules slowly <b>drift</b> across the filter on their
        own. It works — but the larger, stickier molecules move too slowly to
        clear well, so many stay in the blood.
      </>
    ),
  },
  {
    id: "hdf",
    title: "Hemodiafiltration (HDF)",
    mechanism: (
      <>
        Diffusion <em>+</em> convection — the wastes get flushed
      </>
    ),
    smallWastes: "Small wastes — removed",
    biggerWastes: "Bigger wastes — removed too",
    body: (
      <>
        HDF adds a strong <b>current of clean fluid</b> that washes through the
        filter and drags the bigger molecules out with it. So both small{" "}
        <em>and</em> middle-sized wastes leave the body — much closer to what a
        real kidney does.
      </>
    ),
    convective: true,
  },
] as const;
