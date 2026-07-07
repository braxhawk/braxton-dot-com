export type ProjectStatus = "Active" | "Complete" | "Archived" | "In Progress";

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
    title: "Archival",
    description:
      "A structured music library system for DJs — tracking sets, crates, listening history, and weekly notes in a single local-first database.",
    stack: ["Rust", "SQLite", "Tauri", "React"],
    role: "Sole Engineer",
    status: "In Progress",
    year: "2026",
    repo: "https://github.com",
  },
  {
    id: "BH-002",
    index: "02",
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
    id: "BH-003",
    index: "03",
    title: "Tempo",
    description:
      "A minimal BPM-synced note-taking app for DJs — capture thoughts on tracks mid-session without breaking flow.",
    stack: ["React Native", "TypeScript", "Expo"],
    role: "Sole Engineer",
    status: "In Progress",
    year: "2026",
    repo: "https://github.com",
  }
];
