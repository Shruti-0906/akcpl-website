import { Plus } from "lucide-react";
import type { ReactNode } from "react";

import { Eyebrow } from "@/components";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

export type FaqItem = {
  question: ReactNode;
  body: ReactNode;
  /** "AKC perspective" — a reassuring, sage-toned callout. */
  note?: ReactNode;
  /** "When to call your care team" — an urgent, rose-toned callout. */
  action?: ReactNode;
};

export type FaqCategoryData = {
  id: string;
  numeral: string;
  /** `d` attributes copied verbatim from the reference page's inline icons. */
  iconPaths: readonly string[];
  navLabel: ReactNode;
  tag: string;
  title: ReactNode;
  subtitle: string;
  items: readonly FaqItem[];
};

export const FAQ_CATEGORIES: readonly FaqCategoryData[] = [
  {
    id: "during",
    numeral: "01",
    iconPaths: [
      "M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm3 5h6M9 12h6M9 16h6",
    ],
    navLabel: (
      <>
        During the
        <br />
        <em>Session</em>
      </>
    ),
    tag: "During the Session",
    title: (
      <>
        What happens <em>in the four hours</em> at the centre.
      </>
    ),
    subtitle:
      "Vascular access, dialyser, water, monitoring — the things that go into every session.",
    items: [
      {
        question: "Why does a dialysis session take four hours?",
        body: (
          <>
            <p>
              The four-hour duration is what allows your machine to remove
              enough waste, toxins, and excess fluid to keep you healthy between
              sessions. A shorter session would leave waste in your bloodstream
              and excess fluid in your body — both of which contribute to
              symptoms during the days off, and to long-term complications.
            </p>
            <p>
              Three sessions a week of about four hours each is the{" "}
              <em>international clinical standard</em> for conventional
              hemodialysis. Some patients may dialyse more frequently for
              shorter periods — your nephrologist will tell you what
              prescription is right for you.
            </p>
          </>
        ),
      },
      {
        question: "What is an AV fistula, and why is it the best access?",
        body: (
          <>
            <p>
              An <span className="term">AV fistula</span> (arteriovenous
              fistula) is a connection a surgeon creates between an artery and a
              vein in your arm. Over a few weeks, the vein becomes larger and
              stronger — allowing the high blood flow needed for dialysis to
              take place safely through two needles.
            </p>
            <p>
              Compared to other access types like temporary catheters or grafts,
              fistulas have the{" "}
              <strong>
                lowest infection risk, fewest complications, and the longest
                functional life.
              </strong>{" "}
              They are the access of choice for almost every patient on
              long-term dialysis.
            </p>
          </>
        ),
        note: (
          <>
            <strong>AKC&rsquo;s vascular access programme</strong> works to plan
            and create fistulas early — ideally before you start dialysis. Speak
            to your nephrologist about access planning at your earliest
            consultation.
          </>
        ),
      },
      {
        question: "What is the dialyser, and is mine reused?",
        body: (
          <>
            <p>
              The <span className="term">dialyser</span> is the small cylinder
              on your dialysis machine that actually filters your blood. It
              contains thousands of tiny hollow fibres —{" "}
              <em>your artificial kidney for the duration of the session.</em>
            </p>
            <p>
              Practice on dialyser reuse varies by centre. Where reuse is
              practised, it is done under strict protocols with documented
              chemical disinfection between sessions, and the dialyser is
              reserved for the same patient throughout. AKC follows national and
              international guidelines on safe reuse practice where applicable.{" "}
              <strong>
                Your nephrologist will tell you whether your dialyser is
                single-use or reused, and the protocol followed at your centre.
              </strong>
            </p>
          </>
        ),
      },
      {
        question: "Is the water used for my dialysis safe?",
        body: (
          <>
            <p>
              Yes — and the standards are stricter than most people realise. You
              are exposed to{" "}
              <strong>
                120–180 litres of water during a single dialysis session
              </strong>
              , which is why dialysis water must meet pharmaceutical-grade
              purity standards.
            </p>
            <p>
              Every AKC centre operates a{" "}
              <em>multi-stage reverse osmosis water treatment plant</em> with
              sand filter, carbon filter, softener, RO membrane, and UV
              sterilisation. Water quality readings (TDS, hardness, chlorine,
              endotoxin, and microbiological tests) are logged daily and audited
              centrally through the Axis QA Dashboard.
            </p>
          </>
        ),
      },
      {
        question: "Why does the technician keep checking the machine?",
        body: (
          <>
            <p>
              Your dialysis machine is constantly measuring multiple parameters
              — blood flow, dialysate composition, temperature, pressure,
              conductivity, ultrafiltration. The technician&rsquo;s job is to{" "}
              <strong>watch these numbers continuously</strong>, respond to any
              alarm, and confirm that the machine is delivering exactly what
              your nephrologist has prescribed.
            </p>
            <p>
              They are also watching <em>you</em> — your vitals, your fluid
              balance, your comfort. The frequent checks are what makes dialysis
              safe.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "symptoms",
    numeral: "02",
    iconPaths: ["M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3"],
    navLabel: (
      <>
        Symptoms
        <br />
        <em>&amp; Side Effects</em>
      </>
    ),
    tag: "Symptoms & Side Effects",
    title: (
      <>
        What you might feel — <em>and what to do about it.</em>
      </>
    ),
    subtitle:
      "Common complications during and between sessions, and when to flag them to your team.",
    items: [
      {
        question: "Why do I get cramps during dialysis?",
        body: (
          <>
            <p>
              Cramps usually happen when fluid is being removed too quickly,
              when you arrive at the session with too much fluid weight gain, or
              when your sodium balance is off. They are{" "}
              <strong>uncomfortable but treatable</strong> — your team can slow
              the ultrafiltration rate, give you a small saline boost, or adjust
              the prescription for next time.
            </p>
            <p>
              <em>
                Cramps are one of the most common reasons patients gain fluid
                weight too quickly between sessions.
              </em>{" "}
              Keeping fluid intake within your daily target is the most
              effective way to reduce them over time.
            </p>
          </>
        ),
        action: (
          <>
            Tell the technician or nurse{" "}
            <strong>as soon as cramps begin</strong> — don&rsquo;t wait. They
            can intervene quickly. Repeated cramping sessions should be reviewed
            by your nephrologist.
          </>
        ),
      },
      {
        question: "Why does my blood pressure drop during dialysis?",
        body: (
          <>
            <p>
              <span className="term">Intra-dialytic hypotension</span> — a drop
              in blood pressure during the session — happens to many dialysis
              patients at some point. It is usually caused by removing too much
              fluid too quickly, by certain medications, by eating during the
              session, or by autonomic changes in your body.
            </p>
            <p>
              You might feel{" "}
              <strong>
                dizzy, nauseous, cold, or as if you are about to faint.
              </strong>{" "}
              The team will lower your bed, give you fluid, and adjust the
              machine immediately. Recurrent hypotension is a signal to{" "}
              <em>review your dry weight and your prescription</em> with your
              nephrologist.
            </p>
          </>
        ),
        action: (
          <>
            Alert the staff <strong>at the first sign of feeling unwell</strong>{" "}
            during the session. Don&rsquo;t try to push through it.
          </>
        ),
      },
      {
        question: "Why am I so tired after a session?",
        body: (
          <>
            <p>
              Post-dialysis fatigue is common and has multiple causes —
              significant fluid shifts during the session, changes in
              electrolytes, and the metabolic effort your body makes to adjust.
              Many patients describe needing{" "}
              <strong>several hours of rest</strong> after a session, especially
              in the first months on dialysis.
            </p>
            <p>
              Fatigue often improves as your body adjusts and as your
              prescription is optimised. If you are consistently exhausted for
              the rest of the day, talk to your nephrologist about{" "}
              <em>
                reviewing your dry weight, your ultrafiltration rate, and your
                haemoglobin level.
              </em>
            </p>
          </>
        ),
      },
      {
        question: "Why am I always feeling cold during dialysis?",
        body: (
          <>
            <p>
              Feeling cold during dialysis is common — your blood is circulating
              through a machine, the dialysate is slightly cooler than body
              temperature, and your overall metabolic rate is often low. A
              blanket and warm clothes during the session help most patients.
            </p>
            <p>
              Some patients feel cold because of <em>anaemia</em> (low
              haemoglobin) — which is very common in dialysis and should be on
              your nephrologist&rsquo;s monitoring list.
            </p>
          </>
        ),
      },
      {
        question: "My access site is red and tender. What should I do?",
        body: (
          <p>
            Redness, swelling, warmth, or tenderness at your vascular access
            site — especially if accompanied by fever — can be a sign of
            infection.{" "}
            <strong>
              Access infection is a serious complication and should not be
              self-managed.
            </strong>
          </p>
        ),
        action: (
          <>
            Contact your dialysis centre <strong>the same day</strong> — do not
            wait until your next scheduled session. If you have fever or chills
            along with access redness, treat it as urgent.
          </>
        ),
      },
      {
        question: "Is itching all over my body related to dialysis?",
        body: (
          <>
            <p>
              <span className="term">Uraemic pruritus</span> — persistent
              itching in dialysis patients — is common and is linked to mineral
              imbalances (especially phosphorus), dry skin, and the build-up of
              substances that dialysis can only partly remove.
            </p>
            <p>
              It is <em>not</em> just a skin problem — it often improves when
              phosphorus is better controlled, when dialysis adequacy is
              optimised, and with topical treatments your team can recommend.{" "}
              <strong>Mention it at every clinic visit.</strong> It tends to be
              undertreated because patients don&rsquo;t always realise it can be
              managed.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "tests",
    numeral: "03",
    iconPaths: [
      "M9 11l3 3 8-8",
      "M21 12c0 5-3.5 8-9 8s-9-3-9-8 3.5-8 9-8c2 0 3.8.5 5.2 1.4",
    ],
    navLabel: (
      <>
        Tests &amp;
        <br />
        <em>Monitoring</em>
      </>
    ),
    tag: "Tests & Monitoring",
    title: (
      <>
        The numbers we follow, <em>and why each one matters.</em>
      </>
    ),
    subtitle:
      "Blood tests, body composition, adequacy, and the regular monitoring that goes into good dialysis care.",
    items: [
      {
        question: "What is BCM, and why do I have it done?",
        body: (
          <>
            <p>
              <span className="term">BCM</span> stands for{" "}
              <strong>Body Composition Monitoring.</strong> It is a painless,
              non-invasive test that uses small electrodes placed on your hand
              and foot to measure how much <em>extra fluid</em> is in your body,
              how much muscle you have, and how much fat. The whole test takes
              only a few minutes.
            </p>
            <p>
              BCM helps your nephrologist set your <strong>dry weight</strong>{" "}
              accurately — the weight your body should be at the end of a
              dialysis session, with no extra fluid. Getting dry weight right is
              one of the most important parts of long-term dialysis care.
            </p>
          </>
        ),
        note: (
          <>
            AKC centres use BCM as a routine monitoring tool.{" "}
            <strong>Ask your nephrologist when your next BCM is due</strong> —
            it is one of the most useful tests you have access to.
          </>
        ),
      },
      {
        question: "What is Kt/V, and why do they keep talking about it?",
        body: (
          <>
            <p>
              <span className="term">Kt/V</span> is the standard measure of{" "}
              <strong>dialysis adequacy</strong> — how much waste your sessions
              are actually removing. A higher Kt/V means more effective
              dialysis. The target for most patients on three-times-weekly
              dialysis is <em>Kt/V above 1.2 to 1.4.</em>
            </p>
            <p>
              Your Kt/V is calculated from blood samples taken before and after
              a session. If it falls below target, your nephrologist may adjust
              your session duration, blood flow rate, or filter type.{" "}
              <strong>
                Kt/V is one of the figures tracked continuously on the Axis QA
                Dashboard at every AKC centre.
              </strong>
            </p>
          </>
        ),
      },
      {
        question: "Why do I need a blood test every month?",
        body: (
          <>
            <p>
              Monthly blood tests track the things that change with dialysis —{" "}
              <strong>
                haemoglobin (for anaemia), urea and creatinine (waste levels),
                potassium, calcium, phosphorus (electrolytes), albumin
                (nutrition), parathyroid hormone (bone health),
              </strong>{" "}
              and others. Each result tells your team whether your prescription,
              your medications, or your diet needs to be adjusted.
            </p>
            <p>
              <em>Dialysis is not a one-time prescription</em> — it is a
              continuously calibrated treatment. Monthly bloods are how that
              calibration happens.
            </p>
          </>
        ),
      },
      {
        question: "My phosphorus is high. Why does it matter?",
        body: (
          <>
            <p>
              Phosphorus builds up in dialysis patients because{" "}
              <strong>dialysis only partly removes it.</strong> Persistently
              high phosphorus contributes to{" "}
              <em>
                itching, bone weakening, blood vessel calcification, and
                increased cardiovascular risk over years.
              </em>
            </p>
            <p>
              Phosphorus is managed through three things working together:{" "}
              <strong>
                dietary phosphorus control, phosphate-binder medications taken
                with meals, and adequate dialysis.
              </strong>{" "}
              Your dietitian and nephrologist will work with you on all three.
            </p>
          </>
        ),
      },
      {
        question: "What is anaemia, and why do most dialysis patients have it?",
        body: (
          <>
            <p>
              Healthy kidneys produce a hormone called <em>erythropoietin</em>{" "}
              that signals your bone marrow to make red blood cells. In kidney
              failure, that signal weakens — and most dialysis patients develop{" "}
              <span className="term">anaemia</span> as a result.
            </p>
            <p>
              Anaemia is treated with{" "}
              <strong>
                erythropoietin injections (EPO), iron supplementation, and
                adequate dialysis.
              </strong>{" "}
              Most patients can reach and maintain a healthy haemoglobin target
              with the right protocol. If you feel persistently tired,
              breathless on exertion, or cold, your haemoglobin level is one of
              the first things to check.
            </p>
          </>
        ),
      },
      {
        question: "Why do they check my access flow regularly?",
        body: (
          <>
            <p>
              Vascular access can develop a <em>narrowing (stenosis)</em> over
              time, which reduces the blood flow available for dialysis and
              increases the risk of access failure. Regular access surveillance
              — clinical examination, flow studies, sometimes ultrasound — lets
              your team detect narrowing{" "}
              <strong>before it becomes a problem</strong> and fix it with a
              minor procedure.
            </p>
            <p>
              <em>
                An access that fails suddenly is much harder to recover than one
                that is monitored and intervened on early.
              </em>
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "therapies",
    numeral: "04",
    iconPaths: [
      "M19 11H5M19 11a2 2 0 0 1 0 4H5a2 2 0 0 1 0-4M19 11V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4M5 15v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4",
    ],
    navLabel: (
      <>
        Filters
        <br />
        <em>&amp; Therapies</em>
      </>
    ),
    tag: "Filters & Therapies",
    title: (
      <>
        The different ways <em>dialysis can be done.</em>
      </>
    ),
    subtitle:
      "Standard, high-flux, HDF, home dialysis — what the choices mean and when they apply.",
    items: [
      {
        question:
          "What is the difference between standard, high-flux, and HDF dialysis?",
        body: (
          <>
            <p>
              These describe{" "}
              <em>
                different types of dialyser membranes and treatment techniques
              </em>
              :
            </p>
            <ol>
              <li>
                <strong>Standard dialysis</strong> uses a low-flux membrane —
                effective at removing small molecules like urea and creatinine.
                The most common type globally.
              </li>
              <li>
                <strong>High-flux dialysis</strong> uses a more permeable
                membrane that removes middle-sized molecules in addition to
                small ones. Generally better outcomes than standard for
                long-term patients.
              </li>
              <li>
                <strong>HDF (Hemodiafiltration)</strong> combines diffusion
                (like standard dialysis) with convection (a different mechanism
                that improves clearance of larger middle molecules).{" "}
                <em>The most advanced modality of conventional dialysis,</em>{" "}
                with growing evidence of improved outcomes.
              </li>
            </ol>
            <p>
              Your nephrologist will recommend the modality that fits your
              clinical profile, your tolerance, and what is available at your
              centre.
            </p>
          </>
        ),
      },
      {
        question: "What is peritoneal dialysis — and is it for me?",
        body: (
          <>
            <p>
              <span className="term">Peritoneal dialysis (PD)</span> uses the
              lining of your own abdomen as the filter, with dialysis fluid
              exchanged through a soft catheter placed in the abdomen.{" "}
              <strong>It is done at home, every day,</strong> usually overnight
              on a machine or in multiple short manual exchanges.
            </p>
            <p>
              PD is a good option for patients who value daily flexibility, have
              stable home circumstances, and a clinical profile that suits the
              modality. Your nephrologist can tell you whether PD is appropriate
              for you.
            </p>
          </>
        ),
      },
      {
        question: "Can I do dialysis at home?",
        body: (
          <>
            <p>
              Yes — for the right patient. <strong>Home hemodialysis</strong>{" "}
              means the dialysis machine, water purification system, and trained
              operator come into your own home. AKC&rsquo;s home hemodialysis
              programme is among India&rsquo;s longest-running structured
              services for this modality.
            </p>
            <p>
              Home dialysis is suitable for stable patients with sufficient home
              space, a willing support person (family or trained operator), and
              the clinical profile to dialyse safely outside an institutional
              setting. It also allows for{" "}
              <em>more frequent shorter sessions</em> when clinically indicated
              — which has better outcomes than 3×/week conventional for some
              patients.
            </p>
          </>
        ),
      },
      {
        question: "Why does my nephrologist sometimes change my prescription?",
        body: (
          <>
            <p>
              Your dialysis <em>prescription</em> — session duration, blood flow
              rate, dialysate composition, ultrafiltration target, dialyser type
              — is the set of instructions telling the machine how to run your
              session.{" "}
              <strong>
                It is calibrated to you personally and reviewed continuously.
              </strong>
            </p>
            <p>
              Changes happen when your blood tests show that adequacy is off,
              when your fluid balance changes, when your dry weight needs
              adjustment, or when complications emerge.{" "}
              <em>
                A changing prescription is a sign that your care is being
                actively managed
              </em>{" "}
              — not a sign that something is wrong.
            </p>
          </>
        ),
      },
      {
        question: "Are there newer dialysis technologies coming?",
        body: (
          <>
            <p>
              Dialysis technology is evolving steadily.{" "}
              <strong>
                HDF is now more widely available than a decade ago. Machine
                ergonomics, alarm systems, and connectivity have all improved.
                Online monitoring through digital records means clinical
                decisions are now made on continuous data rather than periodic
                snapshots.
              </strong>
            </p>
            <p>
              <em>
                Research on wearable artificial kidneys, implantable dialysis
                devices, and bio-artificial kidneys is ongoing
              </em>{" "}
              — though most of these are still in clinical research stages, not
              routine practice. AKC&rsquo;s nephrologists track this field
              closely and will discuss new options with you when they become
              clinically applicable.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "consults",
    numeral: "05",
    iconPaths: [
      "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    ],
    navLabel: (
      <>
        Consultations
        <br />
        <em>&amp; Care</em>
      </>
    ),
    tag: "Consultations & Care",
    title: (
      <>
        Working with your <em>nephrology team.</em>
      </>
    ),
    subtitle:
      "How often you should see your specialist, what to bring, and what to ask.",
    items: [
      {
        question: "How often should I see my nephrologist?",
        body: (
          <>
            <p>
              Most stable maintenance dialysis patients see their nephrologist{" "}
              <strong>at least once a month</strong> — often during a dialysis
              session itself. New patients, patients with recent complications,
              or patients adjusting prescriptions may see them more often.
            </p>
            <p>
              The monthly review is when blood test results are reviewed, dry
              weight is reassessed, medications are adjusted, and any concerns
              you have are addressed.{" "}
              <em>
                If you have a specific question or symptom that can&rsquo;t
                wait, ask for an earlier review
              </em>{" "}
              — that is part of normal care, not a special request.
            </p>
          </>
        ),
      },
      {
        question: "What should I bring to a clinic appointment?",
        body: (
          <>
            <p>A few things help your consultation be more productive:</p>
            <ul>
              <li>
                Recent <strong>blood test results</strong> (your team will have
                them, but a personal copy helps)
              </li>
              <li>
                A list of <strong>current medications</strong> including any
                non-prescription supplements
              </li>
              <li>
                A note of <strong>any symptoms or events</strong> since the last
                visit — even small ones
              </li>
              <li>
                Your <strong>blood pressure readings</strong> from home, if you
                take them
              </li>
              <li>
                Questions written down in advance —{" "}
                <em>it is hard to remember everything in the room</em>
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "Can a family member come with me to my appointments?",
        body: (
          <p>
            Yes — and it is often <em>encouraged.</em> A family member, spouse,
            or adult child can help you remember what was discussed, ask
            questions you might not think of, and stay informed about your care.
            Dialysis is a long-term treatment that affects the whole family;
            involving them early helps everyone.
          </p>
        ),
        note: (
          <>
            AKC&rsquo;s centres actively include family in patient care —{" "}
            <strong>
              education, training on home considerations, and family programmes
              for spouses and adult children
            </strong>{" "}
            are part of the standard care model.
          </>
        ),
      },
      {
        question: "Will I see the same staff every session?",
        body: (
          <p>
            Generally yes — centres are organised so that the same dialysis
            technicians and nurses work the same shifts as much as possible.{" "}
            <strong>This continuity matters.</strong> Over time, your care team
            knows your fistula, your weight history, your patterns, and your
            preferences in detail.{" "}
            <em>That familiarity is part of how safe care happens.</em>
          </p>
        ),
      },
      {
        question:
          "Should I be talking to anyone about how I'm coping emotionally?",
        body: (
          <>
            <p>
              Yes.{" "}
              <strong>
                Depression, anxiety, and sleep disturbance are common in
                dialysis
              </strong>{" "}
              — published research places depression rates in maintenance
              dialysis at 25–45% globally — and they are clinical conditions
              that respond to treatment. There is nothing embarrassing about
              asking for support.
            </p>
            <p>
              AKC centres offer routine emotional wellbeing screening and
              structured access to counselling. Tell your nurse, technician, or
              nephrologist if you feel persistently low, anxious, or
              overwhelmed.{" "}
              <em>
                Treating the mind is as much a part of your dialysis care as
                treating the kidney.
              </em>
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "transplant",
    numeral: "06",
    iconPaths: [
      "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    ],
    navLabel: (
      <>
        Transplant
        <br />
        <em>Pathway</em>
      </>
    ),
    tag: "Transplant Pathway",
    title: (
      <>
        The next chapter — <em>if it&rsquo;s the right one for you.</em>
      </>
    ),
    subtitle:
      "Eligibility, donor pathways, the wait, and what life after transplant actually looks like.",
    items: [
      {
        question: "Am I eligible for a kidney transplant?",
        body: (
          <>
            <p>
              Eligibility is decided through a formal evaluation by a transplant
              team and depends on multiple factors —{" "}
              <strong>
                your overall health, your cardiovascular fitness, any active
                infections or cancers, age and frailty, your willingness to take
                long-term immunosuppression, and your psychosocial readiness.
              </strong>
            </p>
            <p>
              <em>The only way to know is to be assessed.</em> Your nephrologist
              should be having the transplant conversation with you proactively
              — if they haven&rsquo;t, ask. Every transplant-eligible AKC
              patient is offered active counselling about transplantation.
            </p>
          </>
        ),
      },
      {
        question: "What are the different ways to get a kidney?",
        body: (
          <>
            <p>In India, there are four primary pathways:</p>
            <ol>
              <li>
                <strong>Living-related donor</strong> — a family member is
                medically and immunologically suitable. The most direct pathway
                with the best outcomes.
              </li>
              <li>
                <strong>Paired Kidney Exchange (PKE)</strong> — if your family
                donor is not a match, your pair can be matched with another pair
                so that each patient receives a compatible donor. AKC operates
                one of India&rsquo;s most active PKE registries (ASTRA).
              </li>
              <li>
                <strong>Deceased donor waitlist</strong> — for patients without
                a living donor, registration on the national/state waitlist for
                a kidney from a deceased donor.
              </li>
              <li>
                <strong>Fusion pathways</strong> — combining waitlist and PKE
                registries to open additional matching opportunities. A model
                AKC has helped pioneer.
              </li>
            </ol>
          </>
        ),
      },
      {
        question: "My family wants to donate — what happens next?",
        body: (
          <>
            <p>
              The donor undergoes a thorough{" "}
              <em>evaluation by an independent team</em> — this assesses their
              medical fitness (so donation is safe for them), the immunological
              match with you, psychological readiness, and the legal
              documentation required under Indian transplant law.{" "}
              <strong>Donor safety is paramount</strong> at every step.
            </p>
            <p>
              If the donor is found unfit or immunologically incompatible, the
              conversation often moves to the <em>PKE pathway</em> — where your
              pair can be matched with another pair in the registry.
            </p>
          </>
        ),
      },
      {
        question: "What is paired kidney exchange?",
        body: (
          <>
            <p>
              <span className="term">Paired Kidney Exchange (PKE)</span> solves
              the problem of a willing but <em>incompatible</em> family donor.
              Two (or more) patient-donor pairs are matched against each other —{" "}
              <strong>
                your donor gives their kidney to another recipient whose donor
                gives a kidney to you.
              </strong>{" "}
              Both transplants happen simultaneously.
            </p>
            <p>
              AKC operates{" "}
              <strong>
                one of India&rsquo;s most active PKE registries (ASTRA)
              </strong>
              , has published research on PKE optimisation in international
              journals, and has helped hundreds of patients get transplants
              through this pathway. If a family donor exists but isn&rsquo;t a
              match, PKE is your next conversation.
            </p>
          </>
        ),
      },
      {
        question: "How long is the deceased donor waitlist in India?",
        body: (
          <>
            <p>
              Wait times vary significantly by state, blood group, and
              immunological factors. In some states the wait can be{" "}
              <strong>several years</strong>; in others significantly shorter.
              Patients with rare blood groups or high antibody levels generally
              wait longer.
            </p>
            <p>
              This is one reason the{" "}
              <em>living donor pathway is encouraged where possible</em> —
              including paired kidney exchange when a direct family donor
              isn&rsquo;t a match. Your transplant coordinator can give you a
              realistic estimate based on your specific situation.
            </p>
          </>
        ),
      },
      {
        question: "What will my life look like after a transplant?",
        body: (
          <>
            <p>
              For most patients, a successful kidney transplant means{" "}
              <strong>
                no more dialysis sessions, no more fluid restrictions, a much
                more flexible diet, more energy, and a generally higher quality
                of life.
              </strong>{" "}
              Survival outcomes are also significantly better than on long-term
              dialysis.
            </p>
            <p>
              You will need to take{" "}
              <em>
                immunosuppression medications for the rest of the
                transplant&rsquo;s life
              </em>
              , attend regular clinic visits (initially frequent, later less
              so), and remain vigilant about infections and rejection.{" "}
              <strong>
                For the right patient, transplant is by far the best outcome
                available
              </strong>{" "}
              — which is why AKC&rsquo;s centres encourage it actively.
            </p>
          </>
        ),
      },
    ],
  },
] as const;

const NoteCallout = ({ children }: { children: ReactNode }) => (
  <div className="rounded-sm border-l-2 border-[#7A9580] bg-[#EDF2EE] px-4.5 py-3.5 font-roboto text-sm leading-[1.55] text-[#2A2A2A] italic">
    <span className="mr-1 font-roboto text-[10.5px] font-semibold tracking-[0.18em] text-[#7A9580] uppercase not-italic">
      AKC perspective ·
    </span>
    {children}
  </div>
);

const ActionCallout = ({ children }: { children: ReactNode }) => (
  <div className="rounded-sm border-l-2 border-[#B5495B] bg-[#F2D9DE] px-4.5 py-3.5 font-roboto text-sm leading-[1.55] text-[#2A2A2A] italic">
    <span className="mr-1 font-roboto text-[10.5px] font-semibold tracking-[0.18em] text-[#B5495B] uppercase not-italic">
      When to call your care team ·
    </span>
    {children}
  </div>
);

const QaItem = ({
  item,
  highlightOnOpen,
}: {
  item: FaqItem;
  highlightOnOpen: boolean;
}) => (
  <details className="group rounded-sm border border-[#ccc] bg-white open:border-primary-subtle open:shadow-[0_4px_16px_rgba(14,124,123,0.06)]">
    <summary
      className={cn(
        "flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 select-none sm:gap-6 sm:px-7 sm:py-[22px] [&::-webkit-details-marker]:hidden",
        highlightOnOpen && "group-open:bg-[#e0f2f9] hover:bg-[#e0f2f9]",
      )}
    >
      <span className="font-roboto text-[15px] leading-[1.4] font-medium tracking-[-0.005em] text-secondary sm:text-[17px] [&_em]:font-normal [&_em]:text-primary-subtle [&_em]:italic">
        {item.question}
      </span>
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e0f2f9] group-open:bg-primary-subtle">
        <Plus
          className="size-4 text-primary-subtle group-open:text-[#F5F0E8]"
          aria-hidden="true"
        />
      </span>
    </summary>
    <div
      className={cn(
        "space-y-3.5 px-5 pt-5 pb-6 font-roboto text-[14px] leading-[1.75] text-[#393f42] sm:px-7 sm:pt-6 sm:pb-7 sm:text-[15px]",
        "[&_em]:font-normal [&_em]:text-primary-subtle [&_em]:italic",
        "[&_strong]:font-medium [&_strong]:text-secondary [&_strong]:not-italic",
        "[&_.term]:rounded-[3px] [&_.term]:bg-[#e0f2f9] [&_.term]:px-1.5 [&_.term]:py-px [&_.term]:text-[0.92em] [&_.term]:font-normal [&_.term]:text-primary-subtle [&_.term]:not-italic",
        "[&_ol]:mt-1 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-9 [&_ol]:marker:text-[18px] [&_ol]:marker:font-normal [&_ol]:marker:text-primary-subtle [&_ol]:marker:italic",
        "[&_ol>li]:border-b [&_ol>li]:border-black/10 [&_ol>li]:py-2 [&_ol>li:last-child]:border-none",
        "[&_ul]:mt-1 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-[22px] [&_ul]:marker:text-primary-subtle",
      )}
    >
      {item.body}
      {item.note && <NoteCallout>{item.note}</NoteCallout>}
      {item.action && <ActionCallout>{item.action}</ActionCallout>}
    </div>
  </details>
);

const FaqCategorySection = ({
  category,
  index,
}: {
  category: FaqCategoryData;
  index: number;
}) => {
  const isTinted = index % 2 === 0;

  return (
    <section
      id={category.id}
      className={cn(
        "scroll-mt-[180px] pt-14 pb-10 sm:pt-[90px] sm:pb-[50px] lg:scroll-mt-[300px]",
        isTinted ? "bg-[#e0f2f9]" : "bg-white",
      )}
    >
      <div className={GUTTER}>
        <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-[#bcd2db] pb-6 sm:mb-12 sm:gap-8">
          <span className="font-roboto text-[56px] leading-[0.85] font-bold tracking-[-0.02em] text-primary-subtle sm:text-[70px] lg:text-[80px]">
            {category.numeral}
          </span>
          <div className="min-w-0 flex-1 sm:min-w-70">
            <Eyebrow label={category.tag} className="mb-4 text-black sm:mb-5" />
            <h2 className="mb-4 font-cormorant text-[clamp(26px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.015em] text-black [&_em]:text-primary-subtle [&_em]:italic">
              {category.title}
            </h2>
            <p className="font-roboto text-[15px] leading-[1.5] font-light text-[#393f42] sm:text-[17px] sm:leading-[22px]">
              {category.subtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          {category.items.map((item, i) => (
            <QaItem key={i} item={item} highlightOnOpen={!isTinted} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqCategorySection;
