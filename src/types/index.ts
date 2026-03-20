// ─── Shared ────────────────────────────────────────────────────────────────

export interface StoryBeat {
  time: string;
  icon: string;
  desc: string;
}

export interface Highlight {
  label: string;
  icon: string;
}

// ─── Cities ────────────────────────────────────────────────────────────────

export interface City {
  id: string;
  name: string;
  nameDev: string;       // Devanagari
  title: string;
  tagline: string;
  description: string;
  region: string;
  accent: string;        // primary accent color
  accentDark: string;
  heroGradient: string;
  coords: { x: number; y: number };
  emoji: string;
  coverImage: string;    // Unsplash URL placeholder
  highlights: Highlight[];
  story: StoryBeat[];
  food: string[];
  bestTime: string;
  distance: string;      // from Bhopal
}

// ─── Wildlife ──────────────────────────────────────────────────────────────

export type RarityLevel = "Common" | "Uncommon" | "Rare" | "Critically Rare";

export interface WildlifeSpecies {
  id: string;
  name: string;
  scientificName: string;
  park: string;
  icon: string;
  rarity: "Common" | "Uncommon" | "Rare" | "Critically Rare";
  desc: string;
  fact: string;
  color: string;
  // Extended fields (added in enhanced version)
  behaviors?: string[];
  bestSpot?: string;
  threatLevel?: string;
}
 
export interface NationalPark {
  id: string;
  name: string;
  area: string;
  state: string;
  established: number;
  knownFor: string;
  icon: string;
  gradient: string;
  species: string[];
  // Extended fields (added in enhanced version)
  altitude?: string;
  rivers?: string;
  zones?: string[];
  bestTime?: string;
  peakSeason?: string;
  safariTip?: string;
  funFact?: string;
  conservation?: string;
}
 
// ─── Festivals ─────────────────────────────────────────────────────────────

export interface Festival {
  id: string;
  name: string;
  nameDev: string;
  season: string;
  month: string;
  city: string;
  colors: [string, string, string];
  desc: string;
  longDesc: string;
  icon: string;
  mood: string;
}

// ─── Food ──────────────────────────────────────────────────────────────────

export type FoodCategory = "Street" | "Sweet" | "Main Course" | "Snack" | "Beverage";

export interface FoodItem {
  id: string;
  name: string;
  nameDev: string;
  region: string;
  category: FoodCategory;
  desc: string;
  tasteProfile: string;
  icon: string;
  color: string;
  isVeg: boolean;
  mustTry: boolean;
}

// ─── Temples ───────────────────────────────────────────────────────────────

export type TemplePeriod = "Ancient" | "Medieval" | "Mughal Era" | "Modern";

export interface Temple {
  id: string;
  name: string;
  nameDev: string;
  city: string;
  deity: string;
  period: TemplePeriod;
  built: string;
  desc: string;
  significance: string;
  icon: string;
  gradient: string;
  timings: string;
  entryFee: string;
  tag: string;
}

// ─── Art ───────────────────────────────────────────────────────────────────

export type ArtPattern = "dots" | "horses" | "floral" | "bronze" | "geometric";

export interface TribalArt {
  id: string;
  name: string;
  tribe: string;
  region: string;
  colors: [string, string, string];
  desc: string;
  history: string;
  pattern: ArtPattern;
}

// ─── Router / Nav ──────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  path: string;
  icon: string;
  sub?: string;
}