"use client";

import { JOBS } from "../data";
import { useApply } from "./ApplyFlow";
import JobCard from "./JobCard";

const RolesGrid = () => {
  const openApply = useApply();

  return (
    <div className="relative grid gap-4.5 lg:grid-cols-2">
      {JOBS.map((job) => (
        <JobCard key={job.slug} job={job} onApply={openApply} />
      ))}
    </div>
  );
};

export default RolesGrid;
