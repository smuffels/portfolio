import type { Project } from "../CarouselLogic";
import HeartProgress from "./HeartProgress";

function ProjectCards({
  project,
  className,
  textCustom,
}: {
  project: Project;
  className?: string;
  textCustom?: string;
}) {
  return (
    <div
      className={`relative w-92 h-92 overflow-hidden rounded-lg ${className}`}
    >
      <img
        src={project.image}
        className="absolute inset-0 w-full h-full object-cover"
      ></img>

      <div className="absolute inset-0 bg-background/50" />

      <div className="absolute top-3 left-3">
        <HeartProgress progress={project.progress} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <p className={`text-center px-4 ${textCustom}`}>{project.summary}</p>
      </div>
    </div>
  );
}

export default ProjectCards;
