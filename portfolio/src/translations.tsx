export const translations = {
  de: {
    home: "Home",
    experience: "Erfahrung",
    projects: "Projekte",
  },
  en: {
    home: "Home",
    experience: "Experience",
    projects: "Projekts",
  },
};

export type Translation = typeof translations.de;
export type Language = keyof typeof translations;
