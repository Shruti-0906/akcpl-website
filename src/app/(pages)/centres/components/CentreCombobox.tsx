"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import { cn } from "@/lib";

import { suggestPlaces } from "../data";
import type { Place } from "../data";

/** Below this, a query matches so much that the list is noise. */
const MIN_CHARS = 2;

const MAX_SUGGESTIONS = 8;

type CentreComboboxProps = {
  value: string;
  onChange: (value: string) => void;
  /** Fired when a suggestion is chosen by click or Enter. */
  onPick: (place: Place) => void;
};

const CentreCombobox = ({ value, onChange, onPick }: CentreComboboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();

  const suggestions = useMemo(
    () =>
      value.trim().length >= MIN_CHARS
        ? suggestPlaces(value, MAX_SUGGESTIONS)
        : [],
    [value],
  );

  const isExpanded = isOpen && suggestions.length > 0;

  /** A click anywhere else dismisses the list. */
  useEffect(() => {
    if (!isExpanded) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isExpanded]);

  /** Keeps the keyboard-highlighted option inside the scrolled list. */
  useEffect(() => {
    if (activeIndex < 0) return;
    listRef.current?.children[activeIndex]?.scrollIntoView({
      block: "nearest",
    });
  }, [activeIndex]);

  const pick = (place: Place) => {
    onChange(place.value);
    setIsOpen(false);
    setActiveIndex(-1);
    onPick(place);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((index) =>
        index >= suggestions.length - 1 ? 0 : index + 1,
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((index) =>
        index <= 0 ? suggestions.length - 1 : index - 1,
      );
      return;
    }

    // Enter only intercepts a highlighted option; otherwise the form submits.
    if (event.key === "Enter" && isExpanded && activeIndex >= 0) {
      const active = suggestions[activeIndex];
      if (active) {
        event.preventDefault();
        pick(active);
      }
      return;
    }

    if (event.key === "Escape") {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  };

  return (
    <div ref={rootRef} className="relative w-full max-w-105">
      <input
        id="centre-search"
        type="text"
        role="combobox"
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
          setIsOpen(true);
          setActiveIndex(-1);
        }}
        onKeyDown={handleKeyDown}
        // Opening on click rather than focus keeps the list shut when the page
        // moves focus here itself, as it does after a state is picked from the
        // map. Typing and ArrowDown still open it.
        onClick={() => setIsOpen(true)}
        placeholder="Enter Pincode/City here..."
        autoComplete="off"
        aria-label="Search centres by city, state or pincode"
        aria-expanded={isExpanded}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={
          activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined
        }
        className="w-full rounded-md border border-[#b9c4cc] bg-white px-4 py-3 font-roboto text-[16px] text-black outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/40"
      />

      <ul
        ref={listRef}
        id={listId}
        role="listbox"
        aria-label="Matching cities, states and pincodes"
        className={cn(
          "absolute top-full left-0 z-20 mt-1.5 max-h-80 w-full overflow-y-auto rounded-md border border-[#b9c4cc] bg-white py-1 text-left shadow-[0_12px_28px_rgba(14,37,64,0.14)]",
          !isExpanded && "hidden",
        )}
      >
        {suggestions.map((place, index) => (
          <li
            key={`${place.kind}-${place.label}-${place.detail}`}
            id={`${listId}-${index}`}
            role="option"
            aria-selected={index === activeIndex}
            onMouseDown={(event) => {
              // Runs before the input blurs, so the click is not lost.
              event.preventDefault();
              pick(place);
            }}
            onMouseEnter={() => setActiveIndex(index)}
            className={cn(
              "cursor-pointer px-4 py-2.5",
              index === activeIndex && "bg-[#e0f2f9]",
            )}
          >
            <span className="block font-roboto text-[14.5px] font-medium text-black">
              {place.label}
            </span>
            <span className="block font-roboto text-[13px] text-[#5c6b75]">
              {place.detail}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CentreCombobox;
