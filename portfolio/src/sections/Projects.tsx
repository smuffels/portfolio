import type { Project } from "../CarouselLogic";
import type { Translation } from "../data/translations";
import ProjectCards from "../ProjectCards";

function Projects({ t }: { t: Translation }) {
  const projects: Project[] = [
    {
      id: 1,
      image: "src/assets/images/game_of_life.png",
      progress: 5,
      title: t.project1title,
      summary: t.project1summary,
    },
    {
      id: 2,
      image: "src/assets/images/health_but_better.png",
      progress: 5,
      title: t.project2title,
      summary: t.project2summary,
    },
  ];

  return (
    <section
      id="projects"
      className="flex-1 flex items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <ProjectCards project={projects[0]}></ProjectCards>
    </section>
  );
}

export default Projects;
