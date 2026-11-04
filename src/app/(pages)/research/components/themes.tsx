import type { Theme } from "./ThemeSection";

const T = "text-tertiary italic";
const A = "font-normal text-primary-subtle";
const H = "text-primary-subtle italic";

export const THEMES: readonly Theme[] = [
  {
    id: "kidney-exchange",
    numeral: "I",
    eyebrow: "Theme 01 · The Largest Body of Work",
    title: (
      <>
        Kidney Exchange <em className={H}>&amp; Transplant Optimisation</em>
      </>
    ),
    intro: [
      <>
        Mathematical models, registry design, and algorithmic optimisation of
        the paired kidney exchange &mdash; the research domain that anchored
        ASTRA&apos;s growth into one of India&apos;s largest swap transplant
        registries.
      </>,
      <>
        The largest research theme in the AKC portfolio &mdash; spanning nine
        publications across journal papers, international conference
        proceedings, and preprints. The work builds on the operational ASTRA
        registry to address the central problem of paired kidney exchange:{" "}
        <em className="italic">
          how to maximise both quantity (number of transplants) and quality
          (graft survival, fairness) simultaneously,
        </em>{" "}
        through max-cardinality, max-weight matching on compatibility graphs.
      </>,
      <>
        This theme is the academic foundation underneath the 5-way domino
        chains, multi-registry coordination, and ABO-incompatible-via-swap
        pathways that have made ASTRA distinctive. It also anchors{" "}
        <em className="italic">
          Utkarsh Verma&apos;s doctoral thesis at IIT Bombay IEOR.
        </em>
      </>,
    ],
    publications: [
      {
        year: "2015",
        venue: "Domino_Tx",
        kind: "Proceedings Poster",
        title: (
          <>
            Domino Kidney Transplant &mdash;{" "}
            <em className={T}>The ASTRA Experience</em>
          </>
        ),
        authors: (
          <>
            <strong>
              Billa V, Sanap G, Kothari J, Shete M, Bichu S, Kumar R
            </strong>{" "}
            <span className={A}>(Apex Kidney Foundation, Mumbai)</span>
          </>
        ),
        tags: [
          { label: "First documented multi-hospital domino transplant" },
          { label: "4 hospitals · 2 cities · 5-pair chain", accent: true },
        ],
      },
      {
        year: "2015",
        venue: "ISN WZ",
        kind: "Presentation",
        title: (
          <>
            <em className={T}>Transplants, Mathematics &amp; Exchanges</em>{" "}
            &mdash; ASTRA&apos;s mathematical framework
          </>
        ),
        authors: (
          <>
            <strong>Apex Kidney Foundation, Mumbai</strong> · presented at ISN
            West Zone Nephrology Conference, Nasik (October 2015)
          </>
        ),
        tags: [
          { label: "ISN West Zone" },
          { label: "India national audience" },
          { label: "Algorithm exposition", accent: true },
        ],
      },
      {
        year: "2017",
        venue: "IFORS Quebec",
        kind: "Conference",
        title: (
          <>
            <em className={T}>Cadaver-driven chains</em> in kidney exchange
            program
          </>
        ),
        authors: (
          <>
            <strong>Verma U, Billa V, Rangaraj N, Usulumarty D</strong>{" "}
            <span className={A}>(IIT Bombay × Apex Kidney Foundation)</span>
          </>
        ),
        tags: [
          { label: "IFORS Quebec 2017" },
          { label: "International Federation of OR Societies" },
        ],
      },
      {
        year: "2018",
        venue: "EURO Valencia",
        kind: "Conference",
        title: (
          <>
            Heuristic solution and analysis of{" "}
            <em className={T}>Kidney Exchange Program</em>
          </>
        ),
        authors: (
          <>
            <strong>Verma U, Rangaraj N</strong>{" "}
            <span className={A}>(IIT Bombay IEOR)</span>
          </>
        ),
        tags: [
          { label: "EURO Conference Valencia 2018" },
          { label: "European OR Society" },
        ],
      },
      {
        year: "2018",
        venue: "VOCAL Hungary",
        kind: "Conference",
        title: (
          <>
            A heuristic approach for{" "}
            <em className={T}>Kidney Exchange Program</em>
          </>
        ),
        authors: (
          <>
            <strong>Verma U, Rangaraj N</strong>{" "}
            <span className={A}>(IIT Bombay IEOR)</span>
          </>
        ),
        tags: [
          { label: "VOCAL 2018 Hungary" },
          { label: "Veszprém Optimization Conference" },
        ],
      },
      {
        year: "2018",
        venue: "Indian J Transplant",
        kind: "Journal",
        title: (
          <>
            A novel method to{" "}
            <em className={T}>increase the kidney donor-pool</em>: A fusion
            model linking the deceased donor wait-list to a paired kidney
            exchange program
          </>
        ),
        authors: (
          <>
            <strong>Billa V</strong>{" "}
            <span className={A}>(Apex Kidney Foundation, Bombay Hospital)</span>{" "}
            · <strong>Verma U, Rangaraj N</strong>{" "}
            <span className={A}>(IIT Bombay IEOR)</span> ·{" "}
            <strong>Usulumarty D, Kumar R, Sanap G, Kothari J, Bichu S</strong>{" "}
            <span className={A}>(AKC)</span>
          </>
        ),
        tags: [
          { label: "Peer-reviewed" },
          { label: "Indian Society of Organ Transplantation journal" },
          { label: "First fusion-model paper", accent: true },
        ],
      },
      {
        year: "2021",
        venue: "INFORMS Healthcare",
        kind: "Conference",
        title: (
          <>
            Analysis of{" "}
            <em className={T}>Multi-registry Kidney Exchange Programs</em> with
            Individual Rationality Constraints
          </>
        ),
        authors: (
          <>
            <strong>Verma U, Rangaraj N</strong>{" "}
            <span className={A}>(IIT Bombay IEOR)</span>
          </>
        ),
        tags: [
          { label: "INFORMS Healthcare Conference" },
          { label: "International proceedings" },
        ],
      },
      {
        year: "2023",
        venue: "Health Systems",
        kind: "Journal",
        title: (
          <>
            Long-term simulation analysis of{" "}
            <em className={T}>deceased donor initiated chains</em> in kidney
            exchange programs
          </>
        ),
        authors: (
          <>
            <strong>Verma U, Rangaraj N</strong>{" "}
            <span className={A}>(IIT Bombay IEOR)</span> ·{" "}
            <strong>Billa V, Usulumarty D</strong>{" "}
            <span className={A}>(Apex Kidney Foundation &amp; AKC)</span>
          </>
        ),
        tags: [
          { label: "Peer-reviewed" },
          { label: "Operations research journal" },
          { label: "Simulation study", accent: true },
        ],
      },
      {
        year: "2025",
        venue: "Kidney Int Rep",
        kind: "Journal",
        title: (
          <>
            Recent <em className={T}>kidney exchange &amp; transplant</em>{" "}
            abstracts &mdash; ISN World Congress 2025
          </>
        ),
        authors: (
          <>
            <strong>AKC × Apex Kidney Foundation × IIT Bombay</strong> ·
            multiple abstracts · published February 2025
          </>
        ),
        tags: [
          { label: "ISN World Congress proceedings" },
          { label: "Kidney International Reports" },
          { label: "Most recent body of work", accent: true },
        ],
      },
    ],
  },
  {
    id: "pandemic-response",
    numeral: "II",
    eyebrow: "Theme 02 · The Pandemic-Era Public Health Work",
    title: (
      <>
        Pandemic Response <em className={H}>&amp; Citywide Coordination</em>
      </>
    ),
    intro: [
      <>
        The Project Victory body of work &mdash; how a coalition of
        nephrologists, engineers, and municipal authorities built a real-time
        dialysis-allocation dashboard during the COVID-19 pandemic, and the
        published evidence of what worked.
      </>,
      <>
        The pandemic response research theme captures the academic record of{" "}
        <strong className="font-semibold">Project Victory</strong> &mdash; the
        joint initiative of Apex Kidney Foundation, IIT Bombay, the Mumbai
        Nephrology Group, and the Municipal Corporation of Greater Mumbai (MCGM)
        that delivered uninterrupted dialysis to COVID-positive patients in
        Mumbai through 2020 and beyond.
      </>,
      <>
        The work resulted in{" "}
        <em className="italic">
          a peer-reviewed paper in the Indian Journal of Nephrology
        </em>{" "}
        &mdash; an institutional account of how a citywide coalition was built,
        what data infrastructure made it possible, and the patient outcomes that
        resulted. The paper has been cited in public health and
        pandemic-response literature internationally.
      </>,
    ],
    publications: [
      {
        year: "2020",
        venue: "Project Victory",
        kind: "Public Report",
        title: (
          <>
            Citywide dialysis-allocation portal &mdash;{" "}
            <em className={T}>operational launch and protocol</em>
          </>
        ),
        authors: (
          <>
            <strong>
              Apex Kidney Foundation, IIT Bombay (CSE), Mumbai Nephrology Group,
              MCGM
            </strong>{" "}
            · portal operational from May 2020
          </>
        ),
        tags: [
          { label: "23 COVID-positive centres designated" },
          { label: "97% of patients secured slot within 48 hours" },
          {
            label: "India's largest dialysis pandemic-coordination initiative",
            accent: true,
          },
        ],
      },
      {
        year: "2022",
        venue: "Indian J Nephrol",
        kind: "Journal",
        title: (
          <>
            A Unified Citywide Dashboard for{" "}
            <em className={T}>Allocation and Scheduling Dialysis</em> for
            COVID-19 Patients on Maintenance Hemodialysis
          </>
        ),
        authors: (
          <>
            <strong>Billa V, Noronha S, Bichu S, Kothari J, Kumar R</strong>, et
            al. ·{" "}
            <em className="font-normal text-primary italic">
              Project Victory Consortium
            </em>{" "}
            <span className={A}>
              (Apex Kidney Foundation, IIT Bombay, Mumbai Nephrology Group,
              MCGM)
            </span>
          </>
        ),
        tags: [
          { label: "Manuscript ID · IJN_48_21R6" },
          { label: "Original Article" },
          {
            label: "1,418 COVID-positive ESKD patients enrolled",
            accent: true,
          },
        ],
      },
    ],
  },
  {
    id: "vascular-access",
    numeral: "III",
    eyebrow: "Theme 03 · The Vascular Access Policy Work",
    title: (
      <>
        Vascular Access <em className={H}>Planning &amp; Patency</em>
      </>
    ),
    intro: [
      <>
        Research on optimal sequencing of arteriovenous fistula creation,
        patency outcomes, and quality-of-life-adjusted access policy &mdash;
        anchored by Manoj Kumar&apos;s doctoral thesis and the AKC vascular
        access programme.
      </>,
      <>
        The vascular access theme connects clinical practice with quantitative
        decision science. Vascular access &mdash; the route through which blood
        flows to and from the dialysis machine &mdash; is the single largest
        determinant of dialysis quality and patient comfort over years on the
        modality.
      </>,
      <>
        AKC&apos;s research on vascular access asks:{" "}
        <em className="italic">
          given that a patient on long-term dialysis may need multiple access
          surgeries over a lifetime, how do we sequence those interventions
          optimally?
        </em>{" "}
        The work uses quality-of-life-adjusted patency as the objective and
        earned the 3rd Prize at the ISN Conference 2021 for its analytical
        depth.
      </>,
    ],
    publications: [
      {
        year: "2021",
        venue: "ISN Chennai",
        kind: "Conference",
        title: (
          <>
            <em className={T}>Vascular access outcomes</em> in a large cohort of
            hemodialysis patients &mdash; Can we do better?
          </>
        ),
        authors: (
          <>
            <strong>Kumar M, Rangaraj N</strong>{" "}
            <span className={A}>(IIT Bombay)</span> ·{" "}
            <strong>Brahmbhatt R, Billa V, Usulumarty D</strong>{" "}
            <span className={A}>(AKC)</span>
          </>
        ),
        tags: [
          { label: "ISN Conference Chennai 2021" },
          { label: "Awarded 3rd Prize", accent: true },
        ],
      },
      {
        year: "2021",
        venue: "AKC internal",
        kind: "Working Paper",
        title: (
          <>
            Large-cohort{" "}
            <em className={T}>vascular access outcomes analysis</em> &mdash; AKC
            network data
          </>
        ),
        authors: (
          <>
            <strong>AKC Clinical Research Group with IIT Bombay IEOR</strong> ·
            underlying dataset for the 2021 ISN paper
          </>
        ),
        tags: [
          { label: "AKC network cohort" },
          { label: "Multi-centre dataset" },
        ],
      },
      {
        year: "2023",
        venue: "medRxiv",
        kind: "Preprint",
        title: (
          <>
            Planning optimal sequence for{" "}
            <em className={T}>arteriovenous fistula creation</em> in
            hemodialysis patients, using quality-of-life adjusted access patency
          </>
        ),
        authors: (
          <>
            <strong>Kumar M, Rangaraj N, Noronha S</strong>{" "}
            <span className={A}>
              (IIT Bombay IEOR &amp; Chemical Engineering)
            </span>{" "}
            · <strong>Usulumarty D, Brahmbhatt R, Billa V</strong>{" "}
            <span className={A}>(Apex Kidney Care)</span>
          </>
        ),
        tags: [
          { label: "medRxiv preprint server" },
          { label: "Awaiting peer review" },
          { label: "Decision-science framework", accent: true },
        ],
      },
    ],
  },
  {
    id: "home-hemodialysis",
    numeral: "IV",
    eyebrow: "Theme 04 · The Home Hemodialysis Evidence",
    title: (
      <>
        Home Hemodialysis <em className={H}>Safety &amp; Outcomes</em>
      </>
    ),
    intro: [
      <>
        India&apos;s largest dataset on home hemodialysis &mdash; safety
        outcomes, nephrologist attitudes, worry-score transformations, and the
        7-element medico-legal risk-mitigation framework that has resulted in
        zero medico-legal cases across 80,000+ sessions.
      </>,
      <>
        The home hemodialysis research theme aggregates more than a decade of
        AKC operational data on home HD &mdash; the cumulative experience of
        over 1,000 patients and 81,000+ home dialysis sessions since 2012. The
        published work makes the case that home HD can be delivered safely at
        scale in the Indian context, with the right operational framework.
      </>,
      <>
        Beyond the safety data, the work documents a 184-nephrologist survey
        across 20 Indian states on attitudes toward home HD, and the{" "}
        <em className="italic">before/after worry-score transformation</em>{" "}
        observed in patients after they start the modality. The dataset is the
        most comprehensive home HD evidence base in India.
      </>,
    ],
    publications: [
      {
        year: "2024",
        venue: "AKC Clinical",
        kind: "Clinical Evidence Paper",
        title: (
          <>
            Home Hemodialysis in India &mdash;{" "}
            <em className={T}>
              13 years, 81,000 sessions, zero medico-legal cases
            </em>
          </>
        ),
        authors: (
          <>
            <strong>Apex Kidney Foundation Home HD Programme</strong> ·
            comprehensive cohort analysis · cumulative n &gt; 1,000 patients,
            analytical cohort n = 741
          </>
        ),
        tags: [
          { label: "Kaplan-Meier survival by reason for home HD" },
          { label: "7-element risk-mitigation framework" },
          {
            label: "India's longest-running structured HHD programme",
            accent: true,
          },
        ],
      },
      {
        year: "2024",
        venue: "AKC Survey",
        kind: "Survey Study",
        title: (
          <>
            Indian nephrologist{" "}
            <em className={T}>attitudes toward home hemodialysis</em> &mdash; a
            20-state survey
          </>
        ),
        authors: (
          <>
            <strong>Apex Kidney Foundation</strong> · 184 nephrologists surveyed
            across 20 Indian states
          </>
        ),
        tags: [
          { label: "Multi-state survey design" },
          { label: "88% belief vs 38% practising" },
          {
            label: "100% believe medico-legal risk can be mitigated",
            accent: true,
          },
        ],
      },
    ],
  },
  {
    id: "treatment-policy",
    numeral: "V",
    eyebrow: "Theme 05 · The Treatment-Policy & Data Work",
    title: (
      <>
        Data-Driven <em className={H}>Treatment Policies</em>
      </>
    ),
    intro: [
      <>
        The use of network-level operational data to make better individual
        treatment decisions &mdash; adequacy, prescription, modality choice. The
        research stream that translates AKC&apos;s Axis EMR dataset into
        prescriptive analytics.
      </>,
      <>
        The treatment-policy research theme is the operational counterpart to
        the kidney exchange algorithm theme &mdash; using AKC&apos;s
        longitudinal patient data to ask which prescribing patterns produce
        which outcomes, and what a data-driven dialysis prescription protocol
        would look like.
      </>,
      <>
        The work draws on the{" "}
        <em className="italic">continuous dataset captured by Axis EMR</em>{" "}
        across more than 220 centres and millions of dialysis sessions, applying
        operations-research methods to identify treatment trajectories that
        maximise long-term outcomes.
      </>,
    ],
    publications: [
      {
        year: "2022",
        venue: "OR 2022 Karlsruhe",
        kind: "Conference",
        title: (
          <>
            <em className={T}>Data-driven treatment policies</em> for dialysis
            patients
          </>
        ),
        authors: (
          <>
            <strong>
              Kumar M, Usulumarty D, Brahmbhatt R, Rangaraj N, Noronha S, Billa
              V
            </strong>{" "}
            <span className={A}>(AKC × IIT Bombay)</span>
          </>
        ),
        tags: [
          { label: "OR 2022 Karlsruhe" },
          { label: "German OR Society Annual Conference" },
          { label: "International methodology audience", accent: true },
        ],
      },
      {
        year: "2023",
        venue: "AKC × IIT-B",
        kind: "Working Paper Series",
        title: (
          <>
            Network-scale <em className={T}>analytics on Axis EMR data</em>{" "}
            &mdash; protocol identification and benchmarking
          </>
        ),
        authors: (
          <>
            <strong>AKC Clinical Research Group with IIT Bombay IEOR</strong> ·
            ongoing working paper series
          </>
        ),
        tags: [
          { label: "220+ centre network dataset" },
          { label: "Continuous EMR data" },
          { label: "Prescriptive analytics framework", accent: true },
        ],
      },
    ],
  },
];
