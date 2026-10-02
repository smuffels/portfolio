import type { Project } from "../CarouselLogic";
import HeartProgress from "./HeartProgress";
import { DiGithubBadge } from "react-icons/di";

function ProjectCards({
  project,
  className,
  isActive,
}: {
  project: Project;
  className?: string;
  isActive?: boolean;
}) {
  const textColor = isActive ? "text-highlight" : "text-default";
  return (
    <div
      className={`relative w-92 h-92 md:h-128 md:w-128 overflow-hidden rounded-lg ${className}`}
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
