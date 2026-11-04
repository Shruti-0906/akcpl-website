import ThemeSection from "../components/ThemeSection";
import { THEMES } from "../components/themes";

const ResearchThemesSection = () => (
  <>
    {THEMES.map((theme, index) => (
      <ThemeSection key={theme.id} theme={theme} tinted={index % 2 === 0} />
    ))}
  </>
);

export default ResearchThemesSection;
