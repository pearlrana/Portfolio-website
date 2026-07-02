import type { Metadata } from "next";
import CoverSection from "@/components/sections/CoverSection";

export const metadata: Metadata = {
  title: "Pearl Rana: Software Engineering Student & Builder",
  description:
    "Personal journal of Pearl Rana, a CS & Business Systems student at Thapar Institute. Projects, skills, and resume.",
};

export default function CoverPage() {
  return <CoverSection />;
}