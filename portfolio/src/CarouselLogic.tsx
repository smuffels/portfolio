import { useState } from "react";

export interface Project {
  id: number;
  image?: string;
  progress: 1 | 2 | 3 | 4 | 5;
  title: string;
  summary: string;
  github: string;
  techstack: string;
}

export function useCarousel(projects: Project[]) {
  const [currentId, setCurrentId] = useState(0);

  const getId = (offset: number) =>
    (currentId + offset + projects.length) % projects.length;

  const goNext = () => {
    setCurrentId((i) => (i + 1) % projects.length);
  };

  const goPrev = () => {
    setCurrentId((i) => (i - 1 + projects.length) % projects.length);
  };

  return {
    prev: projects[getId(-1)],
    current: projects[getId(0)],
    next: projects[getId(1)],
    goNext,
    goPrev,
  };
}
