export const site = {
  name: "APEXNET",
  descriptor: "Software Development & Digital Infrastructure",
  parent: "Hinata Concepts",
  title: "Apexnet | Software Development & Digital Infrastructure",
  description:
    "Apexnet, powered by Hinata Concepts, builds, modernizes and manages websites, institutional portals and custom software solutions.",
  // Set NEXT_PUBLIC_SITE_URL in Vercel once the production domain is known (optional).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://apexnet.vercel.app",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Apex", href: "#apex" },
  { label: "Contact", href: "#contact" },
];

export type IconName = "publishing" | "web" | "software" | "infra";

export const services: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "publishing",
    title: "Academic Publishing Infrastructure",
    text: "Journal website development, modernization, technical audits, metadata and DOI integrations, discoverability improvements, and payment integrations.",
  },
  {
    icon: "web",
    title: "Institutional & Educational Websites",
    text: "Websites for schools, universities, research institutions, professional associations and organizations.",
  },
  {
    icon: "software",
    title: "Custom Software & Management Systems",
    text: "Web applications, administrative dashboards, institutional portals, workflow automation and software integrations.",
  },
  {
    icon: "infra",
    title: "Digital Infrastructure Management",
    text: "Website maintenance, technical support, migrations, recovery, hosting coordination and ongoing system improvements.",
  },
];

// To add a project: append an entry here and drop a screenshot in /public/projects.
// Omit `image` to show a neutral placeholder.
export const projects: {
  name: string;
  text: string;
  url: string;
  image?: string;
  alt?: string;
}[] = [
  {
    name: "IMSUFOSS",
    text: "Academic website and digital publishing project for the Faculty of Social Sciences, Imo State University.",
    url: "https://imsufoss.com",
    image: "/projects/imsufoss.png",
    alt: "Screenshot of the IMSUFOSS journals website home page",
  },
  {
    name: "CAS Journals",
    text: "Academic journal website project supporting scholarly publishing and journal presentation.",
    url: "https://casjournals.org",
    image: "/projects/casjournals.jpg",
    alt: "Screenshot of the CAS Journals website home page",
  },
];

export const contact = {
  whatsappDisplay: "09133848512",
  whatsappHref: "https://wa.me/2349133848512",
  other: "08033689174",
  otherHref: "tel:+2348033689174",
};
