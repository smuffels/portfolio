export const translations = {
  de: {
    home: "Home",
    experience: "Erfahrung",
    projects: "Projekte",

    aboutme: "Hallo ich bins. Das ist ein kurzes aboutme",
    aboutmeIt: "Das ist spezifischer über meine it skills und so",
    aboutmeHobbys: "Hier geht es um meien Hobby und nicht it stuff",
  },
  en: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",

    aboutme: "Hi, it's me. This is a short aboutme",
    aboutmeIt: "This is more about me in It. Skills and maybe why i like it",
    aboutmeHobbys: "This is about my hobbys and not it related stuff",
  },
};

export type Translation = typeof translations.de;
export type Language = keyof typeof translations;
