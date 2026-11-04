import type { ReactNode } from "react";

export type Testimonial = {
  name: string;
  /** BCP 47 tag when the quote is not in English, e.g. `mr` for Marathi. */
  lang?: string;
  /** `<strong>` reads as emphasis; `<em>` turns italic. */
  quote: ReactNode;
};

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Sudhir Gawade",
    lang: "mr",
    quote: (
      <>
        &ldquo;मी २००८ मध्ये AKC चा पहिला technician म्हणून रुजू झालो. आज इतक्या
        वर्षांनंतर मागे वळून पाहताना खूप अभिमान वाटतो. सुरुवातीपासूनच कंपनीने
        मला एका कुटुंबासारखी साथ दिली आहे. प्रत्येक चढ-उतारात कंपनी माझ्या
        पाठीशी खंबीरपणे उभी राहिली आणि त्यामुळेच या संस्थेबद्दल माझ्या मनात एक
        अतूट निष्ठा निर्माण झाली आहे. AKC च्या या प्रवासाचा एक भाग असल्याचा मला
        सार्थ अभिमान आहे आणि इथे काम करायला मला खरोखर खूप आवडतं.&rdquo;
      </>
    ),
  },
  {
    name: "Faizan Khan",
    quote: (
      <>
        &ldquo;My journey with Apex started right at the foundation &mdash; as a
        dialysis student at the Apex School of Dialysis Technology. What I
        appreciate most about AKC is how much they invest in your growth. The
        company didn&rsquo;t just train me; they truly trusted my capabilities.
        Giving me the opportunity to be part of the Rapid Response Team to set up
        our new centres and train fellow employees was a huge milestone in my
        career. There is always something new to learn, and knowing the company
        believes in me makes all the difference. I absolutely love the work I do
        and couldn&rsquo;t be prouder to represent AKC.&rdquo;
      </>
    ),
  },
  {
    name: "Shrutika Potale",
    quote: (
      <>
        &ldquo;I began my career at AKC as a technician, focusing on day-to-day
        care. The best part about working here is that leadership actually pays
        attention to your potential, not just the role you are currently in. The
        management constantly supported me, helped me develop my skills, and
        pushed me to step out of my comfort zone. Because they saw that potential
        in me, I was given the incredible opportunity to step up and become a QA
        Manager. It is so rare to find a workplace that genuinely builds its
        people up from within. I am extremely proud to be a part of the AKC
        family and I truly love coming to work every day.&rdquo;
      </>
    ),
  },
  {
    name: "Vikram Patil",
    quote: (
      <>
        <p>
          &ldquo;It gives me great pride to be a part of Apex Kidney Care for
          the last 18 years, and it is special that the company is also
          celebrating its 18th Foundation Day.
        </p>
        <p>
          I joined AKC in 2009 as a Trainee Dialysis Technician. Over the years,
          the company supported my growth by financially supporting my higher
          education. With this support, I completed my Diploma, Post Graduation,
          and MBA in Hospital Administration and Healthcare Management.
        </p>
        <p>
          I started working in the Home Dialysis department in 2010 when we were
          treating only 4 to 5 patients. With the guidance and support of the
          management, our Home Dialysis vertical continued to grow. I was
          promoted as Manager in 2018 and later as Head of the Home Dialysis
          Department in 2023.
        </p>
        <p>
          Today, we are serving more than 130 patients on home dialysis,
          managing a team of over 28 staff members, and have successfully
          introduced HDF dialysis services at home.
        </p>
        <p>
          I sincerely thank Mr. Sudhir Bagarao Sir for believing in me and
          giving me the opportunity to grow from a trainee technician to the
          Head of Department. I am also grateful to our Management and Board of
          Directors for their constant guidance and support throughout my
          journey.
        </p>
        <p>
          A special thank you to Mr. Prakash Shirodkar Sir, who has always been
          a strong pillar of support, mentoring and guiding me through every
          challenge.
        </p>
        <p>
          I am proud to be a part of the AKC family and look forward to
          contributing to its continued success.&rdquo;
        </p>
      </>
    ),
  },
];
