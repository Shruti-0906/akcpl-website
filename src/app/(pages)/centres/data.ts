import centresJson from "./centres.json";

export type Centre = {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  mapUrl: string;
  operational: boolean;
};

export const CENTRES: readonly Centre[] = (centresJson as Centre[]).filter(
  (centre) => centre.operational,
);

const normalise = (value: string) =>
  value.toLowerCase().replace(/\s+/g, " ").trim();

const rank = (centre: Centre, term: string): number | null => {
  const city = normalise(centre.city);
  const state = normalise(centre.state);

  if (city === term || centre.pincode === term) return 0;
  if (city.startsWith(term)) return 1;
  if (centre.pincode.startsWith(term)) return 2;
  if (city.includes(term)) return 3;
  if (state === term || state.startsWith(term)) return 4;
  if (state.includes(term)) return 5;

  return null;
};

export const searchCentres = (query: string): Centre[] => {
  const term = normalise(query);
  if (!term) return [...CENTRES];

  return CENTRES.map((centre) => ({ centre, score: rank(centre, term) }))
    .filter(
      (entry): entry is { centre: Centre; score: number } =>
        entry.score !== null,
    )
    .sort(
      (a, b) => a.score - b.score || a.centre.name.localeCompare(b.centre.name),
    )
    .map((entry) => entry.centre);
};

export const NETWORK_TOTALS = {
  get centres() {
    return CENTRES.length;
  },
  get cities() {
    return new Set(
      CENTRES.map((centre) => centre.city.toLowerCase().trim()).filter(Boolean),
    ).size;
  },
  get states() {
    return new Set(CENTRES.map((centre) => centre.state).filter(Boolean)).size;
  },
};

export type StateTally = {
  state: string;
  count: number;
  tier: "high" | "mid" | "low";
};

export const CENTRES_BY_STATE: readonly StateTally[] = (() => {
  const counts = new Map<string, number>();

  CENTRES.forEach((centre) => {
    if (!centre.state) return;
    counts.set(centre.state, (counts.get(centre.state) ?? 0) + 1);
  });

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([state, count], index) => ({
      state,
      count,
      tier: index < 3 ? "high" : index < 6 ? "mid" : "low",
    }));
})();

const titleCase = (value: string) =>
  value.toLowerCase().replace(/\b[a-z]/g, (char) => char.toUpperCase());

export const centreLocation = (centre: Centre): string =>
  [centre.city, centre.state].filter(Boolean).map(titleCase).join(", ") +
  (centre.pincode ? ` ${centre.pincode}` : "");

export type Place = {
  kind: "city" | "state" | "pincode";
  /** Typed into the search box when this suggestion is picked. */
  value: string;
  label: string;
  detail: string;
  count: number;
};

const centreCount = (count: number) =>
  `${count} ${count === 1 ? "centre" : "centres"}`;

const PLACES: readonly Place[] = (() => {
  type Group = { label: string; detail: string; count: number };

  const cities = new Map<string, Group>();
  const states = new Map<string, Group>();
  const pincodes = new Map<string, Group>();

  const add = (map: Map<string, Group>, key: string, entry: () => Group) => {
    const existing = map.get(key);
    if (existing) existing.count += 1;
    else map.set(key, entry());
  };

  CENTRES.forEach((centre) => {
    const city = titleCase(centre.city);
    const state = titleCase(centre.state);

    if (centre.city) {
      add(cities, normalise(`${centre.city}|${centre.state}`), () => ({
        label: city,
        detail: state,
        count: 1,
      }));
    }

    if (centre.state) {
      add(states, normalise(centre.state), () => ({
        label: state,
        detail: "",
        count: 1,
      }));
    }

    if (centre.pincode) {
      add(pincodes, centre.pincode, () => ({
        label: centre.pincode,
        detail: [city, state].filter(Boolean).join(", "),
        count: 1,
      }));
    }
  });

  const flatten = (map: Map<string, Group>, kind: Place["kind"]): Place[] =>
    [...map.values()].map(({ label, detail, count }) => ({
      kind,
      value: label,
      label,
      detail: [detail, centreCount(count)].filter(Boolean).join(" · "),
      count,
    }));

  const byValue = new Map<string, Place>();

  [
    ...flatten(cities, "city"),
    ...flatten(states, "state"),
    ...flatten(pincodes, "pincode"),
  ].forEach((place) => {
    const key = normalise(place.value);
    const existing = byValue.get(key);
    if (!existing || place.count > existing.count) byValue.set(key, place);
  });

  return [...byValue.values()];
})();

const rankPlace = (place: Place, term: string): number | null => {
  const label = normalise(place.label);

  if (label === term) return 0;
  if (label.startsWith(term)) return 1;
  if (label.includes(term)) return 2;

  return null;
};

/** Matching cities, states and pincodes, densest first, for the dropdown. */
export const suggestPlaces = (query: string, limit: number): Place[] => {
  const term = normalise(query);
  if (!term) return [];

  return PLACES.map((place) => ({ place, score: rankPlace(place, term) }))
    .filter(
      (entry): entry is { place: Place; score: number } => entry.score !== null,
    )
    .sort(
      (a, b) =>
        a.score - b.score ||
        b.place.count - a.place.count ||
        a.place.label.localeCompare(b.place.label),
    )
    .slice(0, limit)
    .map((entry) => entry.place);
};
