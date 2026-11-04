"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import BranchCard from "./BranchCard";
import { BRANCHES, countDestinations } from "./branches";
import type { Branch, Destination } from "./branches";

const matches = (text: string, query: string) =>
  text.toLowerCase().includes(query);

const filterDestinations = (
  items: readonly Destination[],
  query: string,
): Destination[] =>
  items.flatMap((item) => {
    if (matches(item.label, query)) return [item];

    const children = item.children
      ? filterDestinations(item.children, query)
      : [];

    return children.length ? [{ ...item, children }] : [];
  });

const filterBranches = (query: string): readonly Branch[] => {
  if (!query) return BRANCHES;

  return BRANCHES.flatMap((branch) => {
    const headingHit =
      matches(branch.title, query) ||
      matches(branch.kicker, query) ||
      matches(branch.description, query);

    if (headingHit) return [branch];

    const destinations = filterDestinations(branch.destinations, query);
    return destinations.length ? [{ ...branch, destinations }] : [];
  });
};

const SiteTree = () => {
  const [query, setQuery] = useState("");

  const visible = useMemo(
    () => filterBranches(query.trim().toLowerCase()),
    [query],
  );

  const destinations = visible.reduce(
    (total, branch) => total + countDestinations(branch.destinations),
    0,
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap items-center gap-x-5 gap-y-3">
        <div className="relative w-full max-w-sm">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-secondary/40"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Jump to anything - try "HDF", "diet", "Mumbai"'
            aria-label="Filter the sitemap"
            className="w-full rounded-sm border border-black/15 bg-white py-3 pr-4 pl-11 font-roboto text-sm text-secondary transition-colors placeholder:text-secondary/40 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:outline-none"
          />
        </div>

        <p
          aria-live="polite"
          className="font-roboto text-xs tracking-wide text-secondary/60"
        >
          <strong className="font-bold text-secondary">
            {visible.length}
          </strong>{" "}
          {visible.length === 1 ? "branch" : "branches"}
          <span aria-hidden="true"> · </span>
          <strong className="font-bold text-secondary">
            {destinations}
          </strong>{" "}
          {destinations === 1 ? "destination" : "destinations"}
        </p>
      </div>

      {visible.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((branch) => (
            <BranchCard key={branch.title} branch={branch} />
          ))}
        </div>
      ) : (
        <p className="rounded-sm border border-black/10 bg-white px-6 py-10 text-center font-roboto text-sm text-secondary/60">
          Nothing matches &ldquo;{query.trim()}&rdquo;. Try a centre, a service,
          or a section name.
        </p>
      )}
    </>
  );
};

export default SiteTree;
