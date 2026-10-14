export const translations = {
  de: {
    home: "Home",
    experience: "Erfahrung",
    projects: "Projekte",

    aboutme: {
      aboutmee:
        "Hallo ich bin Céline, 25 Jahre alt und Informatikerin. Ich bin gerade auf der Suche nach einer neuen Herausforderung aka einem Job. Ich bin gut darin Probleme zu lösen und lerne gern Neues. Daher auch mein Interesse an der Informatik. ",
      itIntro:
        "Mein Weg in der IT begann mit der Ausbildung zur Applikationsentwicklerin EFZ in der Informatikmittelschule. Nach einem 1-jährigen Praktikum als Teil der Ausbildung habe ich mich dann dafür entschieden Informatik zu studieren. Nach erfolgreichem Abschluss meines Studiums an der ZHAW bin ich nun auf der Suche für die nächste Herausforderung.",
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

    cybersystems:
      "Die Cybersystems bietet Individualisierung von Microsoft Dynamics 365 an. Meine Aufgabe war es hauptsächlich diese mittels C#, JavaScript oder Low-Code umzusetzen. Als Teil der Individualisierung konnte ich ebenfalls an einigen Plugins arbeiten. Als Abschlussarbeit für meine Ausbildung habe ich einen Batch-Task programmiert, der die Daten eines Aufrufs der Firmenwebseite im CRM als Opportunity angelegt hat.",
    flumerics:
      "Bei Flumerics habe ich hauptsächlich mit C# gearbeitet. Da eine Dienstleistung das Erstellen von Custom Microsoft CRM Plugins war, war es meine Aufgabe Tests für diese Plugins zu schreiben. Eine andere Aufgabe war es das Kontaktformular der Webseite automatisiert zu testen. Für diese Aufgabe konnte ich mit Selenium arbeiten. Für die regelmässige automatisierte Ausführung des Tests habe ich Azure Pipelines benutzt.",

    alias: "alias text",
    zur: "zur text",
    frackwoche: "frackwoche text",
  },
  en: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",

    aboutme: {
      aboutmee:
        "Hi, I’m Céline, 25 years old and a computer scientist. I’m currently looking for a new challenge aka a job. I’m good at solving problems and enjoy learning new things. That’s why I’m interested in computer science.",
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

    cybersystems:
      "Cybersystems offers customisation services for Microsoft Dynamics 365. My main role was to implement these using C#, JavaScript or low-code tools. As part of the customisation work, I was also able to work on a number of plugins. For my final project as part of my apprenticeship, I programmed a batch task that created an opportunity in the CRM based on data from a visit to the company’s website.",
    flumerics:
      "At Flumerics, I mainly worked with C#. As one of the services we provided was the development of custom Microsoft CRM plugins, my role involved writing tests for these plugins. Another task was to carry out automated testing of the website’s contact form. For this task, I was able to use Selenium. I used Azure Pipelines to run the tests automatically on a regular basis.",

    alias: "alias text",
    zur: "zur text",
    frackwoche: "frackwoche text",
  },
};

export type Translation = typeof translations.de;
export type Language = keyof typeof translations;
