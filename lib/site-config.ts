export const siteConfig = {
  name: "Pearl Rana",
  title: "Pearl Rana: Software Engineering Student & Builder",
  description:
    "Personal journal of Pearl Rana, a Computer Science & Business Systems student at Thapar Institute of Engineering and Technology. Projects, skills, and resume.",
  url: "https://pearlrana.dev", // placeholder production domain — update on deploy
} as const;

export type NavPage = {
  href: string;
  label: string;
  shortLabel: string;
};

export const navPages: NavPage[] = [
  { href: "/", label: "Cover", shortLabel: "Cover" },
  { href: "/about", label: "About Me", shortLabel: "About" },
  { href: "/projects", label: "Projects", shortLabel: "Projects" },
  { href: "/skills", label: "Skills", shortLabel: "Skills" },
  { href: "/resume", label: "Resume", shortLabel: "Resume" },
  { href: "/contact", label: "Contact", shortLabel: "Contact" },
];
