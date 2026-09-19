export const translations = {
  de: {
    home: "Home",
    experience: "Erfahrung",
    projects: "Projekte",

    aboutme: "Hallo ich bins. Das ist ein kurzes aboutme",
    aboutmeIt: "Das ist spezifischer über meine it skills und so",
    aboutmeHobbys: "Hier geht es um meien Hobby und nicht it stuff",

    project1title: "Game of life",
    project1summary: "das ist das spiel game of life",
    project2title: "Health but better",
    project2summary: "wow so gesund",
  },
  en: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",

    aboutme: "Hi, it's me. This is a short aboutme",
    aboutmeIt: "This is more about me in It. Skills and maybe why i like it",
    aboutmeHobbys: "This is about my hobbys and not it related stuff",

    project1title: "Game of life",
    project1summary: "this is the game game of life",
    project2title: "Health but better",
    project2summary: "wow so health so good",
  },
};

export type Translation = typeof translations.de;
export type Language = keyof typeof translations;
