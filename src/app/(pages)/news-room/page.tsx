import { JsonLd } from "@/components/seo";
import { pageSeo } from "@/lib";

import NewsRoomHeroSection from "./sections/NewsRoomHeroSection";

const seo = pageSeo({
  title: "News Room",
  description:
    "The Apex Kidney Care news room is coming soon - press releases, media coverage of the AKC network, centre openings, and network milestones. For press or media enquiries in the meantime, contact the team directly.",
  path: "/news-room",
});

export const metadata = seo.metadata;

const NewsRoomPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <NewsRoomHeroSection />
    </>
  );
};

export default NewsRoomPage;
