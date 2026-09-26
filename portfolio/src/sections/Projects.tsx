import type { Project } from "../CarouselLogic";
import type { Translation } from "../data/translations";
import ProjectCards from "../components/ProjectCards";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

function Projects({ t }: { t: Translation }) {
  const projects: Project[] = [
    {
      id: 1,
      image: "src/assets/images/game_of_life.png",
      progress: 5,
      title: t.project1title,
      summary: t.project1summary,
      github: "https://github.com/smuffels/Game_of_Life",
    },
    {
      id: 2,
      image: "src/assets/images/health_but_better.png",
      progress: 5,
      title: t.project2title,
      summary: t.project2summary,
      github: "https://github.com/smuffels/health_but_better",
    },
  ];

  return (
    <section
      id="projects"
      className="flex-1 flex items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="flex items-center gap-2">
        <ProjectCards
          project={projects[0]}
          className="opacity-50"
        ></ProjectCards>
        <button className="bg-elementbg group hover:bg-default h-60 w-10 flex items-center justify-center rounded-lg">
          <AiFillCaretLeft className="size-6 group-hover:text-elementbg" />
        </button>
        <ProjectCards
          project={projects[0]}
          textCustom="text-highlight"
          className="border-2"
        ></ProjectCards>
        <button className="bg-elementbg group hover:bg-default hover:border-2 h-60 w-10 flex items-center justify-center rounded-lg">
          <AiFillCaretRight className="size-6 group-hover:text-elementbg" />
        </button>
        <ProjectCards
          project={projects[0]}
          className="opacity-50"
        ></ProjectCards>
      </div>
    </section>
  );
}

export default Projects;
