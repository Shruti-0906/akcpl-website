"use client";

import { useMemo } from "react";
import type { FormEvent } from "react";

import { searchCentres } from "../data";
import type { Place } from "../data";
import CentreCard from "./CentreCard";
import CentreCombobox from "./CentreCombobox";
import { useCentreSearch } from "./CentreSearchProvider";

const CentreSearch = () => {
  const { draft, setDraft, query, limit, commit, showMore, clear } =
    useCentreSearch();

  const results = useMemo(() => searchCentres(query), [query]);
  const visible = results.slice(0, limit);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    commit(draft);
  };

  const handlePick = (place: Place) => commit(place.value);

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-12 text-center">
        <div className="mb-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
          <h2 className="font-cormorant text-[26px] leading-tight font-semibold text-black sm:text-[32px] lg:text-[38px]">
            Search by{" "}
            <em className="text-primary-subtle italic">Pincode/City</em>
          </h2>

          <CentreCombobox
            value={draft}
            onChange={setDraft}
            onPick={handlePick}
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer rounded-md bg-primary-subtle px-12 py-3 font-roboto text-[15px] font-bold text-white hover:bg-primary-light focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none active:scale-95"
        >
          Search
        </button>
      </form>

      {query && (
        <h2 className="mb-3 text-center font-cormorant text-[24px] leading-tight font-semibold text-black sm:text-[28px] lg:text-[34px]">
          List of <em className="text-primary-subtle italic">Clinics</em>
        </h2>
      )}

      <p
        aria-live="polite"
        className="mb-8 text-center font-roboto text-[14.5px] text-[#5c6b75]"
      >
        {query ? (
          <>
            {results.length}{" "}
            {results.length === 1 ? "centre matches" : "centres match"} &ldquo;
            {query}&rdquo;.{" "}
            <button
              type="button"
              onClick={clear}
              className="cursor-pointer text-primary-subtle underline hover:text-primary"
            >
              Clear search
            </button>
          </>
        ) : (
          <>Search a city, state, or pincode to see the centres near you.</>
        )}
      </p>

      {query &&
        (visible.length > 0 ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((centre) => (
                <CentreCard key={centre.slug} centre={centre} />
              ))}
            </div>

            {results.length > visible.length && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={showMore}
                  className="cursor-pointer rounded-md border border-primary-subtle px-10 py-3 font-roboto text-[15px] font-bold text-primary-subtle hover:bg-primary-subtle hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  Show more ({results.length - visible.length} left)
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center font-roboto text-[15px] text-[#393f42]">
            No centres match that search. Try a city, state, or pincode.
          </p>
        ))}

    </>
  );
};

export default CentreSearch;
