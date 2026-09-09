export const translations = {
  de: {
    home: "Home",
    experience: "Erfahrung",
    projects: "Projekte",
  },
  en: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
  },
};

export type Translation = typeof translations.de;
export type Language = keyof typeof translations;
