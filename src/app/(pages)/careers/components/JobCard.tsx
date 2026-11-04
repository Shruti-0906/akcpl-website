import { cn } from "@/lib";

import { jobTitle } from "../data";
import type { Job } from "../data";

const BADGE_BASE =
  "inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 font-roboto text-[10px] font-bold tracking-[0.16em] uppercase";

const META_LABEL =
  "flex items-center gap-2.5 font-roboto text-[11px] font-medium tracking-[0.18em] text-tertiary uppercase";

type JobCardProps = {
  job: Job;
  onApply: (job: Job) => void;
};

const JobCard = ({ job, onApply }: JobCardProps) => {
  const meta = [
    { label: "Location", value: job.locations.join(", "), strong: true },
    { label: "Qualification", value: job.qualification, strong: false },
    { label: "Experience", value: job.experience, strong: true },
    {
      label: "Type",
      value: `${job.employment}, ${job.setting}`,
      strong: false,
    },
  ];

  return (
    <article className="flex flex-col border-t-[3px] border-primary bg-white px-6 py-7 even:bg-[#e0f2f9] sm:px-9 sm:py-8">
      <div className="mb-3.5 flex items-start justify-between gap-4">
        <h3 className="font-cormorant text-[22px] leading-tight font-bold text-black sm:text-[26px]">
          {job.title}
          {job.titleAccent ? (
            <>
              {job.title ? " " : null}
              <em className="text-primary-subtle italic">{job.titleAccent}</em>
            </>
          ) : null}
          {job.speciality ? (
            <>
              {" · "}
              <em className="text-primary-subtle italic">{job.speciality}</em>
            </>
          ) : null}
        </h3>

        <p
          className={cn(
            BADGE_BASE,
            job.urgent
              ? "bg-tertiary-subtle text-[#8a6a1f]"
              : "bg-[#cfe8f5] text-primary-subtle",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "size-1.5 rounded-full",
              job.urgent ? "bg-tertiary" : "bg-primary",
            )}
          />
          {job.urgent ? "Urgent" : "Standard"}
        </p>
      </div>

      <p className="mb-9 font-roboto text-[13px] text-[#5c6b75] italic">
        {job.department} · {job.employment}
      </p>

      <dl className="mb-9 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 sm:gap-y-3">
        {meta.map((entry) => (
          <div key={entry.label}>
            <dt className={META_LABEL}>
              <span
                aria-hidden="true"
                className="h-px w-6 bg-current opacity-70"
              />
              {`// ${entry.label}`}
            </dt>
            <dd
              className={cn(
                "mt-6 font-roboto text-[15px] text-black",
                entry.strong ? "font-bold" : "font-normal",
              )}
            >
              {entry.value}
            </dd>
          </div>
        ))}
      </dl>

      <button
        type="button"
        onClick={() => onApply(job)}
        aria-label={`Apply now: ${jobTitle(job)}`}
        className="mt-auto inline-flex w-fit cursor-pointer items-center gap-2.5 font-roboto text-[13px] font-bold tracking-[0.14em] text-primary-subtle uppercase underline decoration-1 underline-offset-[6px] hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
      >
        Apply now <span aria-hidden="true">&rarr;</span>
      </button>
    </article>
  );
};

export default JobCard;
