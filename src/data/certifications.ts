export type Certification = {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  verifyUrl?: string;
  badge?: string;
};

/**
 * Grille modifiable : remplacez ces cartes par vos certifications réelles
 * (logo, organisme, date, compétences, lien de vérification).
 */
export const certifications: Certification[] = [
  {
    title: "Stratégie de marque & positionnement",
    issuer: "À renseigner — organisme",
    date: "2024",
    skills: ["Brand strategy", "Audience", "Positionnement"],
    verifyUrl: "",
    badge: "/badges/brand.svg",
  },
  {
    title: "Introduction aux sciences cognitives appliquées",
    issuer: "À renseigner — organisme",
    date: "2025",
    skills: ["Attention", "Biais cognitifs", "Perception"],
    verifyUrl: "",
    badge: "/badges/neuro.svg",
  },
  {
    title: "Storytelling & rédaction stratégique",
    issuer: "À renseigner — organisme",
    date: "2025",
    skills: ["Narration", "Copywriting", "Émotion"],
    verifyUrl: "",
    badge: "/badges/story.svg",
  },
];
