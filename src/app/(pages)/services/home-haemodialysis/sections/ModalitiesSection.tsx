import { ModalitySpectrum } from "@/components/shared/ModalitySpectrum";

/**
 * The modality overview from the dialysis options page, minus that page's
 * title, its mini cards, and CRRT: the chapters those point at live there.
 */
const ModalitiesSection = () => (
  <ModalitySpectrum
    showCards={false}
    showHeading={false}
    showCrrt={false}
    caption="Frequency & freedom"
  />
);

export default ModalitiesSection;
