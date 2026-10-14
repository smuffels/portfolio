export const translations = {
  de: {
    home: "Home",
    experience: "Erfahrung",
    projects: "Projekte",

    aboutme: {
      aboutmee:
        "Hallo ich bin Céline, 25ig und gerade...... Was mich an der It besondbers anspricht ",
      itIntro:
        "Mein Weg in der IT begann mit der Ausbildung zur Applikationsentwicklerin EFZ in der Informatikmittelschule. Nach einem 1-jährigen Praktikum als Teil der Ausbildung habe ich mich dann dafür entschieden Informatik noch zu studieren. Nach erfolgreichem Beenden meines Studiums an der ZHAW bin ich nun auf der Suche für die nächste Herausforderung.",
      itTitle: "Skills:",
      itSkills: [
        "C#",
        "Java",
        "JavaScript",
        "React",
        "Python",
        "MySQL",
        "Swift",
      ],
      itOutro:
        "Dies ist ein kleiner Einblick in die Technologien mit denen ich bereits Erfahrungen sammeln konnte. Eine kleine Übersicht der IT-Projekte die ich nach dem Studium umgesetzt habe ist ganz unten ersichtlich.",
      hobbysIntro: "Hobbys: ",
      hobbys: ["Geige spielen", "Lesen", "Sport", "Kreative Projekte"],
      hobbysOutro:
        "Kreative Projekte umfasst einiges. Ob etwas basteln, programmieren, schneiden oder Visuals in Blender zu erstellen, so lange ich mich kreativ ausleben kann, mach ich es gern. Pluspunkt, wenn ich dabei einen neuen Skill lernen kann. Mit einigen Freunden konnte ich dieses Jahr ein eigenes Event organisieren. Einblicke darin sind hier ersichtlich:",
    },

    projectProgress: "Fortschritt: ",
    project1title: "Game of life",
    project1summary:
      "Dieses Projekt ist eine Umsetzung von Conways „Game of Life“, die ich während meines Studiums als ersten Einstieg in Swift erstellt habe. Ich habe es ein wenig überarbeitet und einige Funktionen sowie ein neues Design hinzugefügt.",
    project2title: "Health but better",
    project2summary:
      "Ich habe dieses Projekt begonnen, weil ich mit der Apple Health App nicht ganz zufrieden war. Ich wollte alle meine Herzfrequenzdaten des Tages nach Typ sortieren können. Ausserdem wollte ich alle Werte sehen können, die über, gleich oder unter einem bestimmten Wert lagen. Genau das habe ich dann umgesetzt.",
    project3title: "Portfolio",
    project3summary:
      "Dies ist meine Portfolio-Website, auf der Sie, lieber Nutzer, sich gerade befinden.",

    workExperience: "Arbeitserfahrung",
    clubExperience: "Vereinserfahrung",

    cybersystems: "cybersstems text",
    flumerics: "flumerics text",

    alias: "alias text",
    zur: "zur text",
    frackwoche: "frackwoche text",
  },
  en: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",

    aboutme: {
      aboutmee: "Hi, it's me. This is a short aboutme",
      itIntro:
        "My career in IT began with an EFZ apprenticeship as an applications developer at a secondary school specialising in computer science. Following a one-year work placement as part of the apprenticeship, I decided to go on to study computer science at university. Having successfully completed my degree at the ZHAW, I am now looking for my next challenge.",
      itTitle: "Skills:",
      itSkills: [
        "C#",
        "Java",
        "JavaScript",
        "React",
        "Python",
        "MySQL",
        "Swift",
      ],
      itOutro:
        "This is a brief insight into the technologies I have already gained experience with. A brief overview of the IT projects I have carried out since completing my degree can be found at the very bottom.",
      hobbysIntro: "hobbys: ",
      hobbys: ["playing the violin", "reading", "sports", "creative projects"],
      hobbysOutro:
        "Creative projects cover a wide range of activities. Whether it’s making something, programming, editing or creating visuals in Blender, as long as I can express myself creatively, I’m happy to do it. It’s a bonus if I can learn a new skill in the process. Together with some friends, I was able to organise an event this year. You can see some highlights here:",
    },

    projectProgress: "progress: ",
    project1title: "Game of life",
    project1summary:
      "This project is an implementation of Conway's Game of Life that i did during my studies as a first introduction to Swift. I have reworked it a bit and added some features as well as a new design",
    project2title: "Health but better",
    project2summary:
      "I started this project because I wasn't entirely happy with Apple's Healh App. I wanted to be able to sort all of my Heart Rate data from the day according to their types. I also wanted to be able to see all values that were above, equal to or under a certain value. So that's what I implemented.",
    project3title: "Portfolio",
    project3summary:
      "This is the my portfolio website that you, dear user, are currently on.",

    workExperience: "work experience",
    clubExperience: "club experience",

    cybersystems: "cybersstems text",
    flumerics: "flumerics text",

    alias: "alias text",
    zur: "zur text",
    frackwoche: "frackwoche text",
  },
};

export type Translation = typeof translations.de;
export type Language = keyof typeof translations;
