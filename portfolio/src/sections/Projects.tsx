import type { Project } from "../CarouselLogic";
import type { Translation } from "../data/translations";
import ProjectCards from "../components/ProjectCards";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { useCarousel } from "../CarouselLogic";

function Projects({ t }: { t: Translation }) {
  const projects: Project[] = [
    {
      id: 1,
      image: "src/assets/images/game_of_life.png",
      progress: 5,
      title: t.project1title,
      summary: t.project1summary,
      github: "https://github.com/smuffels/Game_of_Life",
      techstack: "swift",
    },
    {
      id: 2,
      image: "src/assets/images/health_but_better.png",
      progress: 3,
      title: t.project2title,
      summary: t.project2summary,
      github: "https://github.com/smuffels/health_but_better",
      techstack: "swift",
    },
    {
      id: 3,
      progress: 4,
      title: t.project3title,
      summary: t.project3summary,
      github: "https://github.com/smuffels/portfolio",
      techstack: "react, tailwind css, vite",
    },
  ];

  const { current, prev, next, goNext, goPrev } = useCarousel(projects);

  return (
    <section id="projects" className="px-4 py-20">
      <div className="flex items-center justify-center gap-2">
        {/* Project left */}
        <ProjectCards
          project={prev}
          className="hidden xl:block opacity-50"
          t={t}
        ></ProjectCards>

        {/* button left */}
        <button
          onClick={goPrev}
          className="hidden xl:flex bg-elementbg group border-2 md:hover:bg-default md:border-0 h-60 w-6 md:w-10 flex items-center justify-center rounded-lg"
        >
          <AiFillCaretLeft className="size-6 group-hover:text-elementbg" />
        </button>

        <div className="relative flex-1 max-w-184 xl:flex-none">
          {/* title */}
          <div className="absolute -top-20 xl:-top-16  w-full h-12 rounded-lg bg-elementbg text-highlight flex items-center justify-center font-title border-2 border-default">
            {current.title}
          </div>

          {/* button up */}
          <button
            onClick={goPrev}
            className="xl:hidden mb-2 bg-elementbg group border-2 bg-default h-6 w-full flex items-center justify-center rounded-lg"
          >
            <AiFillCaretUp className="size-6 group-hover:text-elementbg" />
          </button>

          {/* Project middle */}
          <ProjectCards
            project={current}
            className="border-2 "
            isActive
            t={t}
          ></ProjectCards>

          {/* button down */}
          <button
            onClick={goNext}
            className="xl:hidden mt-2 bg-elementbg group border-2 bg-default h-6 w-full flex items-center justify-center rounded-lg"
          >
            <AiFillCaretDown className="size-6 group-hover:text-elementbg" />
          </button>
        </div>

        {/* button right */}
        <button
          onClick={goNext}
          className="hidden xl:flex bg-elementbg group border-2 md:hover:bg-default md:border-0 h-60 w-6 md:w-10 flex items-center justify-center rounded-lg"
        >
          <AiFillCaretRight className="size-6 group-hover:text-elementbg" />
        </button>

        {/* Project right */}
        <ProjectCards
          project={next}
          className="hidden xl:block opacity-50"
          t={t}
        ></ProjectCards>
      </div>
    </section>
  );
}

export default Projects;
