import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Pearl Rana, a CS & Business Systems student at Thapar Institute of Engineering and Technology.",
};

export default function AboutPage() {
  return <AboutSection />;
}
