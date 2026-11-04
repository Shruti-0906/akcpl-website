export const ANNOUNCEMENT = {
  /* Bumping this re-shows the popup to everyone, including anyone who already
     dismissed the previous announcement in their current browser session. */
  id: "2026-10-toi-study",
  eyebrow: "Announcement",
  image: {
    src: "https://akcpl-assets.s3.ap-south-1.amazonaws.com/announcement/apex-announcement.jpeg",
    /* The card carries the whole message, so the alt text has to say what it
       announces rather than merely naming it. */
    alt: "Apex Kidney Care featured in The Times of India, Mumbai edition, Sunday 18 October 2026, page 3. The report covers a landmark study finding that nearly 6 in 10 dialysis patients in India survive 5 years.",
    width: 1080,
    height: 1380,
  },
} as const;
