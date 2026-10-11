import { useState } from "react";

export interface ExperienceItem {
  id: string;
  label: string;
  text?: string;
  items?: ExperienceItem[];
}

export function useConsole(experience: ExperienceItem[]) {
  const [path, setPath] = useState<string[]>([]);
  const [cursor, setCursor] = useState(0);

  const findItem = (
    items: ExperienceItem[],
    ids: string[],
  ): ExperienceItem | null => {
    if (ids.length === 0) return null;
    const found = items.find((item) => item.id === ids[0])!;
    return ids.length === 1 ? found : findItem(found.items ?? [], ids.slice(1));
  };

  const currentItem = findItem(experience, path);
  const currentOptions = currentItem ? (currentItem.items ?? []) : experience;

  const goUp = () => setCursor((c) => Math.max(0, c - 1));
  const goDown = () =>
    setCursor((c) => Math.min(currentOptions.length - 1, c + 1));

  const select = () => {
    const chosen = currentOptions[cursor];
    if (chosen?.items || chosen?.text) {
      setPath((p) => [...p, chosen.id]);
      setCursor(0);
    }
  };

  const goBack = () => {
    setPath((p) => p.slice(0, -1));
    setCursor(0);
  };

  const selectedLeaf = currentItem && currentItem.text ? currentItem : null;

  return { currentOptions, cursor, selectedLeaf, goUp, goDown, select, goBack };
}
