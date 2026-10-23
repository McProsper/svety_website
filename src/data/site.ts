export const site = {
  name: "Svetlana",
  tagline:
    "Décrypter l'humain pour mieux communiquer : l'alliance du Neuromarketing, de la Sociologie et des Mots",
  description:
    "Licenciée en Marketing et Communication, Master en Ingénierie des Affaires, étudiante en Sociologie. Chercheuse en neuromarketing et autrice.",
  url: "https://svetlana.vercel.app",
  author: "Svetlana",
  locale: "fr-FR",
  mediumUsername: import.meta.env.MEDIUM_USERNAME ?? "",
  calEmbedUrl: import.meta.env.PUBLIC_CAL_EMBED_URL ?? "",
  calUrl: import.meta.env.PUBLIC_CAL_URL ?? "",
  cvUrl: "/cv.pdf",
  availability: {
    days: "Mardi — Jeudi",
    hours: "14h00 — 18h00",
    format: "Visio ou appel téléphonique",
    duration: "30 minutes",
  },
};

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/neuromarketing", label: "Le Lab" },
  { href: "/services", label: "Services" },
  { href: "/plume", label: "Plume" },
  { href: "/a-propos", label: "À propos" },
];
