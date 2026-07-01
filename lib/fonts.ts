import {
  Instrument_Serif,
  Cormorant_Garamond,
  Newsreader,
  Manrope,
  Caveat,
} from "next/font/google";

// Oversized background editorial word ("PROJECTS", "SKILLS"…)
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

// Page titles / journal headers
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// Body / editorial paragraphs
export const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

// UI / nav / buttons
export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

// Handwritten annotations
export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const fontVariables = [
  instrumentSerif.variable,
  cormorant.variable,
  newsreader.variable,
  manrope.variable,
  caveat.variable,
].join(" ");
