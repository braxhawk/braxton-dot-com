export type ProjectStatus = "Active" | "Complete" | "Archived" | "In Progress" | "Coming Soon";

export interface Project {
  id: string;
  index: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  role: string;
  status: ProjectStatus;
  year: string;
  url?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    id: "BH-001",
    index: "01",
    title: "Cue Analysis AI",
    description:
      "A minimal app that allows for uploads of tracks, and analyzes them for the best spots for cue points.",
    stack: ["React Native", "TypeScript", "Expo"],
    role: "Sole Engineer",
    status: "In Progress",
    year: "2026",
    repo: "https://github.com",
  },
  {
    id: "BH-002",
    index: "02",
    title: "Tempo",
    description:
      "Upload a screenshot from Rekordbox at the exact moment a mix feels perfect — Tempo reads the waveform positions, BPMs, and cue markers to intelligently extract and log what made it work.",
    stack: ["React Native", "TypeScript", "Expo", "Vision AI"],
    role: "Sole Engineer",
    status: "Coming Soon",
    year: "2026",
  },
];
