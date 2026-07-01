import type { Metadata } from "next";
import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Pearl Rana: forecasting platforms, data analytics dashboards, and full-stack builds.",
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}
