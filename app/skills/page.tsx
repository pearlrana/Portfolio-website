import type { Metadata } from "next";
import SkillsSection from "@/components/sections/SkillsSection";

export const metadata: Metadata = {
  title: "Skills",
  description: "Languages, frameworks, and tools Pearl Rana works with.",
};

export default function SkillsPage() {
  return <SkillsSection />;
}
