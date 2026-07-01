import type { Metadata } from "next";
import ResumeSection from "@/components/sections/ResumeSection";

export const metadata: Metadata = {
  title: "Resume",
  description: "Pearl Rana's resume: education, projects, skills, and leadership experience.",
};

export default function ResumePage() {
  return <ResumeSection />;
}
