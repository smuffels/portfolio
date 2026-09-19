import type { Project } from "./CarouselLogic";

function ProjectCards({
  project,
  className,
}: {
  project: Project;
  className?: string;
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

      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-highlight text-center px-4">{project.summary}</p>
      </div>
    </div>
  );
}

export default ProjectCards;
