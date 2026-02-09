export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  url: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "mulsons",
    name: "Mulsons",
    subtitle: "Spice Manufacturing",
    description:
      "A complete digital presence for East Africa's leading spice manufacturer, built for performance and brand storytelling.",
    url: "https://mulsons.co.ke",
    image: "/clients/mulsons.webp",
    featured: true,
  },
  {
    id: "skl",
    name: "SKL",
    subtitle: "Packaging Solutions",
    description:
      "A modern web platform for an industrial packaging leader, showcasing capabilities and streamlining client engagement.",
    url: "https://skl.co.ke",
    image: "/clients/skl.webp",
    featured: true,
  },
  {
    id: "kova",
    name: "Kova Collective",
    subtitle: "Social Commerce Agency",
    description:
      "Brand identity and digital experience for a social commerce agency connecting creators with commerce.",
    url: "https://mykova.co",
    image: "/clients/kova.webp",
    featured: false,
  },
  {
    id: "mandela-barbery",
    name: "Mandela Barbery",
    subtitle: "Barbershop",
    description:
      "A polished online presence for a premium barbershop, designed to reflect their craft and attention to detail.",
    url: "https://mandelabarbery.co.ke",
    image: "/clients/mandela-barbery.webp",
    featured: false,
  },
  {
    id: "criss-cross",
    name: "Criss Cross",
    subtitle: "FMCG",
    description:
      "Digital brand platform for a fast-moving consumer goods company, built for reach and engagement.",
    url: "https://crisscross.co.ke",
    image: "/clients/criss-cross.webp",
    featured: false,
  },
  {
    id: "ufs",
    name: "UFS",
    subtitle: "Freight & Logistics",
    description:
      "Corporate web presence for a logistics company, communicating reliability and professional excellence.",
    url: "https://www.linkedin.com/company/ufsltd",
    image: "/clients/ufs.webp",
    featured: false,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllProjects(): Project[] {
  return projects;
}
