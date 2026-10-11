import { useState } from "react";

export interface ExperienceItem {
  id: string;
  label: string;
  text?: string;
  items?: ExperienceItem[];
}

export function useConsole(experience: ExperienceItem) {
  const [path, setPath] = useState<(string | number)[]>([]);
  const [cursor, setCursor] = useState(0);

  
}
