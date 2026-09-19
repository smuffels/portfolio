import { useState } from "react";

export interface Project {
  id: number;
  image: string;
  progress: 1 | 2 | 3 | 4 | 5;
  title: string;
  summary: string;
}
