"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import { GUTTER } from "@/constants";
import { cn } from "@/lib";

const S3 = "https://akcpl-assets.s3.ap-south-1.amazonaws.com";

type Member = {
  name: string;
  /** Portrait in the assets bucket. Omitted until the photograph is supplied,
   *  which renders an initials tile in its place. */
  image?: string;
  /** Omitted until the title is confirmed - the card then shows name only. */
  role?: string;
  email?: string;
  /** Paragraphs for the profile dialog. Members without one stay static. */
  bio?: readonly string[];
  /** Rendered alone on a centred row above the grid. */
  lead?: boolean;
  /** Rendered alone on a centred row below the grid. */
  tail?: boolean;
};

const MANAGEMENT_TEAM: readonly Member[] = [
  {
    name: "Mr. Indranil Roy Choudhury",
    image: `${S3}/Mr.+Indranil+Roy+Choudhury.jpg`,
    role: "Director & Chief Executive Officer",
    lead: true,
  },
  { 
    name: "Mr. Sudhir Bagarao", 
    image: `${S3}/Mr.+Sudhir+Bagarao.png`,
    role: "Principal Faculty - ASDT", 
  },
  {
    name: "Mr. Prakash Shyam Shirodkar",
    image: `${S3}/Mr.+Prakash+Shirodkar.jpg`,
    role: "Sr. VP BD and Marketing",
  },
  {
    name: "Mr. Vikas Mandora",
    image: `${S3}/Mr.+Vikas+Mandora.jpg`,
    role: "Chief Finance Officer",
  },
  {
    name: "Mr. Jatin Desai",
    image: `${S3}/Mr.+Jatin+Desai.jpg`,
    role: "Chief Technology Officer",
  },
  {
    name: "Mr. Ramesh Gajulwar",
    image: `${S3}/Mr.+Ramesh+Gajulwar.jpg`,
    role: "VP - Human Resource",
  },
  {
    name: "Dr. Deepa Usulumarty",
    image: `${S3}/Dr.+Deepa+Usulumarty.jpg`,
    role: "VP - Head of Clinical Operations",
  },
  /* Designation still to come. */
  {
    name: "Mr. Paresh Shah",
    image: `${S3}/Dr.+Paresh+Shah.jpg`,
    role: "General Manager - Maintenance",
  },

  {
    name: "Dr. Deepa Pahade",
    /* The only key in the bucket without a full stop after the honorific. */
    image: `${S3}/Dr+Deepa+Pahade.jpg`,
    role: "General Manager - Kidney care lab",
  },
  {
    name: "Mr. Abhay Sadawarte",
    image: `${S3}/Mr.+Abhay+Sadawarte.jpg`,
    role: "General Manager - Engineering",
  },
  {
    name: "Ms. Ketki Lobo",
    image: `${S3}/Ms.+Ketki+Lobo.png`,
    role: "Deputy General Manager - Marketing",
  },
  {
    name: "Mr. Rahul Nandre",
    image: `${S3}/Mr.+Rahul+Nandre.jpg`,
    role: "General Manager - Procurement & Supply chain",
  },
] as const;

const BOARD_OF_DIRECTORS: readonly Member[] = [
  {
    name: "Dr. Viswanath Billa",
    image: `${S3}/Dr.+Viswanath+Billa.jpg`,
    role: "Director & Co-Founder",
    bio: [
      "Dr. Viswanath Billa is a practicing Nephrologist and Renal Transplant Physician in Mumbai, widely recognized for performing the first cadaver kidney transplantation in the State of Maharashtra. A distinguished alumnus of Seth G.S. Medical College and KEM Hospital, he earned his MD in Internal Medicine from LTMG Hospital and completed his DM in Nephrology as a University of Bombay Gold Medalist, followed by an advanced fellowship at the University of Toronto, Canada. Over his extensive career, Dr. Billa has served as a Consultant Nephrologist and Transplant Physician at Bombay Hospital Institute of Medical Sciences, an Associate Professor at Maharashtra University of Health Sciences, and an examiner for DM Nephrology board examinations. Currently the Director of Apex Kidney Care, one of India’s largest chains of dialysis centers, he is also a passionate researcher with numerous publications in indexed national and international journals. In addition to his research and clinical focus on renal transplantation, dialysis, glomerulonephritis, and hypertension, he actively mentors the next generation of specialists as the Course Director of Apex Paathshala.",
    ],
  },
  {
    name: "Dr. Shrirang Bichu",
    image: `${S3}/Dr.+Shrirang+Bichu.jpg`,
    role: "Advisor to Board & Co-Founder",
    bio: [
      "Co-Founder · Professor & Head, Nephrology, Bombay Hospital · Chairman, Board of Studies, MUHS",
      "Initiated AKC’s PPP and trust centres, the Apex School of Dialysis Technology, and fellowship programmes. Steered AKC through COVID-19 and other major challenges, bringing clinical leadership together with a strong understanding of legal and financial matters. His academic work spans transplant outcomes and infection patterns and Project Victory. Author of 25+ publications with over 25 years of teaching experience.",
    ],
  },
  {
    name: "Dr. Vaishali Bichu",
    image: `${S3}/Dr.+Vaishali+Bichu.jpg`,
    role: "Director & Co-Founder",
    bio: [
      "Dr Vaishali Bichu has been associated with Apex Kidney Care since its inception and, over the past 18 years, has played an integral role in its growth and evolution.",
      "Born and brought up in Jalochi, Baramati, in Pune district, Dr Bichu trained as a homoeopathic physician. She began her professional career at Surya Hospital, Pune, where she worked for two years, and subsequently served for three years on the faculty of Bhartesh Homoeopathic Medical College, Belgaum. She later joined her family’s jewellery business, where she developed a keen interest in business, management and organisational dynamics. This distinctive combination of medicine, business experience and an intuitive understanding of people has shaped her contribution to Apex Kidney Care.",
      "As a member of the Board, Dr Bichu has remained closely involved with the organisation and its leadership team. Her contribution extends well beyond strategic oversight. She works closely with the management, interacts with employees across levels, brings together diverse perspectives and provides guidance in resolving complex and sensitive organisational issues. Her ability to understand people, listen objectively and remain firm when difficult decisions need to be made has made her a trusted advisor to the leadership team.",
      "Her strength and resilience were particularly evident during the COVID-19 pandemic and the challenging years that followed. At a time of extraordinary uncertainty and operational complexity, she stood steadfastly by the organisation, supporting its people and leadership and helping Apex navigate some of the most difficult periods in its journey. Her ability to remain calm, resolute and deeply engaged during times of adversity has been of exceptional value to the organisation.",
      "Beyond her professional life, Dr Bichu has always had varied interests and a strong spirit of challenge and service. She was a state-level athlete, kho-kho player and swimmer, and secured first place in a mountain-climbing competition at Nainital. During two years spent in Australia, she devoted considerable time to volunteering in nursing homes caring for the elderly and individuals with mental illness.",
      "Over 18 years, Dr Vaishali Bichu has become one of the enduring pillars of Apex Kidney Care. Her combination of compassion and firmness, her understanding of people, and her unwavering commitment through both periods of growth and adversity have contributed significantly to the organisation that Apex is today.",
    ],
  },
  {
    name: "Dr. Jatin Kothari",
    image: `${S3}/Dr.+Jatin+Kothari.jpg`,
    role: "Director & Co-Founder",
    bio: [
      "MD, DM, FRCP (UK), FISOT, FISN, FICN (Canada), FASN (USA)",
      "Principal Director – Nephrology & Chief Consultant, Renal Transplant Medicine, Nanavati Max Super Speciality Hospital, Mumbai",
      "Visiting Consultant & Section Coordinator - Nephrology,  Hinduja Hospital - Khar, Mumbai",
      "Director & Co-founder, Apex Kidney Care",
      "Dr. Jatin Kothari stands among the most respected figures in Indian nephrology and renal transplant medicine—a clinician, researcher, educator, teacher, social entrepreneur and visionary whose work over the past three decades has transformed lives and systems across the country.",
      "His career is defined by clinical excellence & deep commitment to transforming kidney care systems & playing a multifaceted role in nephrology and renal transplantation in India",
      "A Journey Rooted in Compassion and Purpose:",
      "Dr. Kothari’s medical journey began at the prestigious GS Medical College & KEM Hospital in Mumbai, where he completed his MBBS, MD (Medicine), and DM (Nephrology)  with distinctions & honors .",
      "Driven by an early desire to not just treat but deeply understand and advocate for patients with kidney disease, he pursued advanced training in nephrology at the University of Missouri,Columbia USA, and the University Health Network, Toronto, Canada for three and a half years .",
      "Upon his return to India in 2003, he embarked on a mission that went far beyond clinical care—aiming to reform how kidney diseases are managed and how dialysis and transplant services are delivered, especially for underserved populations.",
      "A Legacy in Renal Transplantation in India:",
      "Over the course of his career, Dr. Kothari has conducted more than 2000 kidney transplants—including living donor, deceased donor, swap, and domino procedures.",
      "Each transplant, he believes, is more than a mere surgical event ; it’s a second chance at life, a new beginning for a patient and their family.",
      "His patient-first philosophy is rooted in empathy, ethics, and unwavering dedication. Every consultation, every decision he makes is guided by one principle:",
      "“Do what is best for the patient—nothing else matters.”",
      "Revolutionizing Kidney Care in India:",
      "In 2007, Dr. Kothari along with his colleagues which include Dr Vish Billa , Dr Shrirang Bichu & Dr Rajesh Kumar co-founded Apex Kidney Care (AKC), a first-of-its-kind, nephrologist-led social enterprise , that has since grown into one of India’s largest networks of dialysis centers, operating 250+ centers  across 14 states and conducting over 1 lakh + dialysis sessions each month.",
      "It is perhaps the world’s largest nephrologist-owned dialysis chain—built on the foundation of impeccable ethics , widespread access, uniform affordability, and the highest dignity for every patient.",
      "Through partnerships with global investors like Tata Capital Healthcare Fund and Blue Earth Capital in the last 3 years , AKC continues to grow, expanding access to high-quality dialysis care across the country.",
      "To further address the dire need for transplant accessibility in India, Dr Vish Billa , Dr. Kothari  and Apex kidney foundation along with IIT Mumbai faculty & scientists created the Apex Swap Transplant Registry ( ASTRA) in 2010, under the aegis of Apex Kidney Foundation. This was India’s first such registry run thru an ever evolving software program , which has enabled hundreds of complex swap and domino kidney transplants to be performed legally and ethically over the last 16 years across India .",
      "Empowering Through Education:",
      "Dr. Kothari & his group has always believed that quality care begins with quality training. In 2011, they co-established the Apex School of Dialysis Technology (ASDT)—a pioneering educational platform offering vocational courses in dialysis technology, in partnership with premier academic institutions like Tata Institute of Social Sciences (TISS) , Symbiosis University , and Maharashtra Paramedical Council(MHPC).",
      "To date, over 2,000 dialysis professionals have been trained, creating a skilled workforce and opening doors of opportunity to countless young healthcare aspirants across India.",
      "A Voice for the Voiceless:",
      "His impact also extends to rural and marginalized communities through his roles as co-founder of Medipolis Life Care in Palanpur (Gujarat), and as a trustee of Zeen-Zar Charitable Foundation Trust and Noon Hospital & Research Centre in Bhawanimandi (Rajasthan). These centers are lifelines in underserved regions, offering high-quality renal care at subsidized rates.",
      "Mentor, Educator, and Global Thought Leader:",
      "A passionate academic, Dr. Kothari has served as a mentor to numerous nephrology fellows and postgraduate students, many of whom now hold prominent positions in India and abroad. His teaching legacy was honored with the Best Teacher Award at the World Congress of Nephrology (2025), presented by the KEM-Hinduja Nephrology Alumni.",
      "He has contributed to over 50 research publications, led major clinical trials, and been a Visiting Faculty /Observer/Professor/Speaker at leading global institutions which include Johns Hopkins University, Massachusetts General Hospital & University of North Carolina @Chapel Hill ( USA) , University of Toulouse- France, University of Sydney-Australia and Burjeel Medical City, Abu Dhabi.",
      "Global Recognition:",
      "In 2023, Dr. Kothari became the youngest-ever Indian recipient till date , of the American Nephrologists of Indian Origin (ANIO) Community Service Award, presented at the American Society of Nephrology’s annual meeting in Philadelphia, recognizing his exemplary service to patients and the nephrology community.",
      "He is a Fellow of the American Society of Nephrology, Royal College of Physicians (Edinburgh), and other national & international nephrology societies, and regularly serves as an advisor and reviewer for clinical journals and pharmaceutical boards.",
      "Vision & Values:",
      "At the heart of Dr. Kothari’s work is a belief that kidney care must go beyond hospitals—it must involve community, education, access, and advocacy. His work seamlessly integrates frontline clinical practice with system-level innovations, ensuring better care not just for individuals, but for communities and future generations.",
      "“Kidney disease is silent—but our response must be loud, inclusive, and innovative. Every life saved, every barrier removed, every student trained—it all adds up to a healthier society.”",
      "The Heart of a Healer:",
      "What truly sets Dr. Kothari apart is not just his accomplishments, but his ability to touch lives—with his skill, with his words, and with his heart. Patients trust him, families rely on him, and students are inspired by him. Behind every statistic is a story, and behind every milestone is his quiet, relentless commitment to healing and hope.",
      "“In every transplant, I don’t just see a medical outcome—I see a mother going home to her child, a father returning to work, a student reclaiming their dreams.",
      "That is the true reward.”",
      "Finally , he embarked on an extraordinary project  of writing a memoir on his journey of life -called ",
      "“Kidney Spine Cricket -Tag along “ with his co- author -Geetika Saigal , which was released on March 21,2026",
      "It has already become an Amazon best seller and has been widely acclaimed across the world …"

    ],
  },
  {
    name: "Ms. Sheetal Kothari",
    /* Stored without an honorific, unlike the rest of the bucket. */
    image: `${S3}/Sheetal+Kothari.png`,
    role: "Director",
    bio: [
      "Sheetal Kothari is one of the non Medical Directors Of Apex Kidney Care. She used to Oversees the Accounts and HR @ AKC in the past , along with being a fulltime Mom For Jash And Natasha.",
      "She is a Nature Lover and has keen Interest in Cooking, Gardening and Reading. She loves to Travel to New Places all over the World and believes in living life to the fullest. Easy going and fun loving, She is an asset to AKC and strongly believes in the Core Values, Vision and Mission Of AKC.",
      "She continues to be a huge support to her husband, Dr Jatin Kothari for all activities.",
      "Humility and Sincerity are her Attributes which makes her the most approachable Director in the Organisation. She believes that if you do good to everyone, You will always be Happy and Successful In Life.",
    ],
  },
  /* Photographs still to come. */
  {
    name: "Dr. Vikram Popli",
    /* Key really does carry both extensions. */
    image: `${S3}/Dr.+Vikram+Popli.png`,
    role: "Investor Director",
    bio: [
      "Vikram is an Investor Director from the Tata Capital Healthcare Fund. He has over 17 years of experience in healthcare investing, with a strong track record of building and scaling healthcare-focused private equity platforms across Asia and executing full-cycle investments.",
      "Prior to Tata Capital, Vikram spent over a decade at OrbiMed, one of the world’s leading healthcare-focused private equity firms, where he was part of the Asia investment team. During his tenure, he led and managed several marquee investments across healthcare delivery, pharmaceuticals, diagnostics, and life sciences, including KIMS India and GCC, Surya Children’s Hospitals, Shasun Pharmaceuticals, Laxmi Dental, Entero Healthcare, and Advanced Enzymes.",
      "Vikram subsequently served as a Director at LeapFrog Investments, a global impact-focused investment firm, where he led healthcare investments across Asia. In this role, he was closely involved in scaling healthcare platforms while also driving impact measurement initiatives, including the adoption of Disability-Adjusted Life Years (DALYs) as a core metric to track and report health outcomes across portfolio companies.",
      "Most recently, Vikram was a Partner at Famy Aspire Capital, where he set up and led the healthcare investing platform and contributed to building the firm’s healthcare and consumer investment strategy.",
      "Vikram holds an MBA from the Indian School of Business, Hyderabad, an MS in Orthopedics from VMMC & Safdarjung Hospital, and an MBBS from Maulana Azad Medical College, Delhi University. A trained orthopedic surgeon by background, he brings a differentiated, clinician-led perspective to healthcare investing, combining clinical insight with deep investment and operational experience."

    ]
  },
  {
    name: "Mr. Vamesh Chovatia",
    image: `${S3}/Mr.+Vamesh+Chovatia.png`,
    role: "Investor Director",
    bio: [
      "Vamesh is an Investor Director from Nutmeg Blue Earth Private Limited. He is also a former Partner of the Tata Capital Healthcare Fund where he has spent 10 years. He has over 25+ years of experience in investment banking and private equity advisory. His experience spans managing investments and advising businesses across multiple industries.",
      "Prior to joining Tata Capital, Vamesh was the Managing Director of New Enterprise Associates (India) Pvt. Ltd.(NEA), an affiliate of the US based venture capital firm and he was focused on investing in Pharma and Lifesciences sectors, where he led investments in a company engaged in manufacturing of radiation therapy equipment and a company developing digital medical education courseware.",
      "Prior to joining NEA, he served as a Director, Kotak Private Equity Group, where he was responsible for originating transactions and investing in several companies across a wide variety of sectors viz. Logistics, Retail, Infrastructure, Financial Services apart from Life Sciences and Pharmaceuticals. During his stint with Kotak, he has experienced a full life cycle of successful fund raising, investing and exiting businesses.",
      "Prior to his stint with Kotak, Vamesh worked with leading investment banks such as Enam Financial, ICICI Securities, Prime Securities, Standard Chartered Bank and Canbank. For a large part of his career, he has focused on private equity advisory and has successfully structured transactions across multiple sectors including IT and ITES, media and entertainment, healthcare, retailing, logistics, telecom, textiles, and oil and gas related services.",
      "Vamesh holds a Post Graduate degree in Business Management from Symbiosis Institute of Business Management and is a Commerce graduate from Mumbai University."
    ]
  },
  {
    name: "Mr. Indranil Roy Choudhury",
    image: `${S3}/Mr.+Indranil+Roy+Choudhury.jpg`,
    role: "Director & Chief Executive Officer",
    bio: [
      "As a seasoned healthcare executive with over 30 years of experience, Mr. Indranil Roy Choudhury specializes in steering organizations through operational excellence, P&L management, and strategic growth. At Apex Kidney Care, He Leeds the team as Director and CEO, driving innovation across the organization to improve efficiency & corporate governance while delivering the desired growth and margins to maximize shareholder's returns. His focus is on delivering high-quality kidney care solutions for patients, while aligning organizational goals with sustainable practices.",
      "With a proven ability to manage complex mergers, fund-raising initiatives, and policy advocacy, He has contributed to the advancement of healthcare services across B2B, B2C, and B2G landscapes. He is passionate about creating collaborative ecosystems that engage stakeholders from both government & industry while fostering impactful outcomes, which ensures patient, organizational & industry benefits.",
    ],
  },
] as const;

const TABS = [
  { key: "mt", label: "Management Team", members: MANAGEMENT_TEAM },
  { key: "bod", label: "Board of Directors", members: BOARD_OF_DIRECTORS },
] as const;

/** `Mr. Sudhir Bagarao` -> `SB`, for the stand-in tile. */
const initials = (name: string) =>
  name
    .replace(/^(Mr|Mrs|Ms|Dr)\.?\s+/, "")
    .split(/\s+/)
    .map((word) => word[0] ?? "")
    .slice(0, 2)
    .join("");

const MemberCard = ({
  name,
  image,
  role,
  email,
  bio,
  onOpen,
}: Member & { onOpen?: () => void }) => (
  <div className="min-w-0 text-center">
    {/* A 260x325 frame - 4:5, matching the ratio the portraits are supplied
        in, so nothing is cropped away. The crop stays anchored to the top so
        that any photo delivered taller than 4:5 loses its feet, not its head. */}
    <div className="mx-auto w-full max-w-65">
      {image ? (
        <Image
          src={image}
          alt={`Portrait of ${name}`}
          width={1000}
          height={1250}
          loading="lazy"
          quality={100}
          sizes="16.25rem"
          className="aspect-4/5 w-full object-cover object-top"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex aspect-4/5 w-full items-center justify-center border border-black/5 bg-[#e0f2f9] font-cormorant text-5xl font-light text-secondary/35 select-none"
        >
          {initials(name)}
        </div>
      )}
    </div>

    <h4 className="mt-4 font-cormorant text-lg font-bold text-black">
      {bio && onOpen ? (
        <button
          type="button"
          onClick={onOpen}
          className={cn(
            "cursor-pointer underline decoration-primary-subtle/40 underline-offset-4 transition-colors",
            "hover:text-primary-subtle focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
          )}
        >
          {name}
        </button>
      ) : (
        name
      )}
    </h4>

    {(role || email) && (
      <p className="mt-1 font-roboto text-sm text-[#393f42]">
        {role}
        {role && email && <br />}
        {email && (
          <a
            href={`mailto:${email}`}
            className="wrap-anywhere text-primary-subtle transition-colors hover:underline"
          >
            {email}
          </a>
        )}
      </p>
    )}
  </div>
);

/** Profile dialog for the members who have a description. */
const ProfileDialog = ({
  member,
  onClose,
}: {
  member: Member;
  onClose: () => void;
}) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();

    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    /** Stops the page scrolling behind the dialog. */
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="leadership-profile-name"
        /* The backdrop closes on click, so clicks inside must not bubble. */
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto bg-white px-6 py-8 shadow-2xl sm:px-10 sm:py-10"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="absolute top-4 right-4 cursor-pointer rounded-full p-2 text-secondary/60 transition-colors hover:bg-black/5 hover:text-secondary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
        >
          <X aria-hidden="true" className="size-5" />
        </button>

        <div className="grid gap-6 sm:grid-cols-[160px_1fr] sm:gap-8">
          {member.image && (
            <Image
              src={member.image}
              alt={`Portrait of ${member.name}`}
              width={1000}
              height={1250}
              quality={100}
              sizes="10rem"
              className="aspect-4/5 w-40 max-w-full object-cover object-top"
            />
          )}

          <div>
            <h3
              id="leadership-profile-name"
              className="pr-10 font-cormorant text-2xl font-bold text-black"
            >
              {member.name}
            </h3>
            {member.role && (
              <p className="mt-1 font-roboto text-sm text-primary-subtle">
                {member.role}
              </p>
            )}

            {member.bio?.map((paragraph, index) => (
              <p
                key={index}
                className="mt-4 font-roboto text-[15px] leading-relaxed text-[#393f42]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const LeadershipTeamSection = () => {
  const [active, setActive] = useState(0);
  const [profile, setProfile] = useState<Member | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tab = TABS[active] ?? TABS[0];
  const lead = tab.members.find((member) => member.lead);
  const tail = tab.members.find((member) => member.tail);
  const rest = tab.members.filter((member) => !member.lead && !member.tail);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (step === 0) return;

    event.preventDefault();
    const next = (active + step + TABS.length) % TABS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className={cn("bg-white pt-4 pb-16 lg:pt-6 lg:pb-20", GUTTER)}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[7fr_4fr] lg:gap-25">
          <h2 className="section-heading text-black">
            Happy to connect with{" "}
            <span className="text-primary italic">you</span>
          </h2>

          <div
            role="tablist"
            aria-label="Leadership groups"
            onKeyDown={handleKeyDown}
            className="flex"
          >
            {TABS.map((item, index) => (
              <button
                key={item.key}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`leadership-tab-${item.key}`}
                aria-selected={index === active}
                aria-controls={`leadership-panel-${item.key}`}
                tabIndex={index === active ? 0 : -1}
                onClick={() => setActive(index)}
                className={cn(
                  "flex-1 cursor-pointer border px-8 py-4 font-roboto text-sm font-bold tracking-wide transition-colors",
                  "focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
                  index === active
                    ? "border-primary-subtle bg-primary-subtle text-white"
                    : "border-[#f1f8f8] bg-[#f1f8f8] text-black/80",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`leadership-panel-${tab.key}`}
          aria-labelledby={`leadership-tab-${tab.key}`}
          className="mt-10"
        >
          {lead && (
            <div className="mx-auto mb-6 w-1/2 lg:w-1/4">
              <MemberCard
                {...lead}
                onOpen={lead.bio ? () => setProfile(lead) : undefined}
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {rest.map((member, index) => (
              <MemberCard
                key={`${tab.key}-${member.name}-${index}`}
                {...member}
                onOpen={member.bio ? () => setProfile(member) : undefined}
              />
            ))}
          </div>

          {tail && (
            <div className="mx-auto mt-6 w-1/2 lg:w-1/4">
              <MemberCard
                {...tail}
                onOpen={tail.bio ? () => setProfile(tail) : undefined}
              />
            </div>
          )}
        </div>
      </div>

      {profile && (
        <ProfileDialog member={profile} onClose={() => setProfile(null)} />
      )}
    </section>
  );
};

export default LeadershipTeamSection;
