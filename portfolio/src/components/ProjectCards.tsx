import type { Project } from "../CarouselLogic";
import type { Translation } from "../data/translations";
import HeartProgress from "./HeartProgress";
import { DiGithubBadge } from "react-icons/di";

function ProjectCards({
  project,
  className,
  isActive,
  t,
}: {
  project: Project;
  className?: string;
  isActive?: boolean;
  t: Translation;
}) {
  const textColor = isActive ? "text-highlight" : "text-default";
  return (
    <div
      className={`relative w-full h-92 xl:h-128 xl:w-128 overflow-hidden rounded-lg ${className}`}
    >
      {project.image ? (
        <img
          src={project.image}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        ></img>
      ) : (
        <div className="absolute inset-0 bg-elementbg" />
      )}

      <div className="absolute top-3 left-3">
        <p className={textColor}>{t.projectProgress}</p>
        <HeartProgress heartColor={textColor} progress={project.progress} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <p className={`text-center px-4 ${textColor}`}>{project.summary}</p>
      </div>

      <div className={`absolute bottom-3 left-3 ${textColor}`}>
        {project.techstack}
      </div>

      <div className="absolute top-3 right-3">
        <a href={project.github} target="_blank">
          <DiGithubBadge
            className={`size-6 ${textColor}
            `}
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectCards;
