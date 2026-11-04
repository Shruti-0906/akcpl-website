"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

/** Cards shown before "Show more" is needed. */
const PAGE_SIZE = 9;

const SECTION_ID = "network";

const INPUT_ID = "centre-search";

type CentreSearchValue = {
  /** What is currently typed, before Search is pressed. */
  draft: string;
  setDraft: (value: string) => void;
  /** The committed term the results are for. */
  query: string;
  limit: number;
  commit: (term: string) => void;
  showMore: () => void;
  clear: () => void;
  /** Search from elsewhere on the page and bring the box into view. */
  jumpToSearch: (term: string) => void;
};

const CentreSearchContext = createContext<CentreSearchValue | null>(null);

export const useCentreSearch = (): CentreSearchValue => {
  const value = useContext(CentreSearchContext);

  if (!value) {
    throw new Error(
      "useCentreSearch must be used inside <CentreSearchProvider>",
    );
  }

  return value;
};

/**
 * Owns the search the page shares. The box and the state legend sit in
 * different sections, so the term cannot live inside either one.
 */
const CentreSearchProvider = ({ children }: { children: ReactNode }) => {
  const [draft, setDraft] = useState("");
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(PAGE_SIZE);

  const commit = useCallback((term: string) => {
    setQuery(term);
    setLimit(PAGE_SIZE);
  }, []);

  const showMore = useCallback(
    () => setLimit((current) => current + PAGE_SIZE),
    [],
  );

  const clear = useCallback(() => {
    setDraft("");
    commit("");
  }, [commit]);

  const jumpToSearch = useCallback(
    (term: string) => {
      setDraft(term);
      commit(term);

      document
        .getElementById(SECTION_ID)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });

      // `preventScroll` leaves the smooth scroll above to do the travelling;
      // focusing normally would snap the box into view instead.
      document.getElementById(INPUT_ID)?.focus({ preventScroll: true });
    },
    [commit],
  );

  const value = useMemo(
    () => ({
      draft,
      setDraft,
      query,
      limit,
      commit,
      showMore,
      clear,
      jumpToSearch,
    }),
    [draft, query, limit, commit, showMore, clear, jumpToSearch],
  );

  return (
    <CentreSearchContext.Provider value={value}>
      {children}
    </CentreSearchContext.Provider>
  );
};

export default CentreSearchProvider;
