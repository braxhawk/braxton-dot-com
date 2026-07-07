export type PostCategory = "Engineering" | "Music" | "Process" | "Culture";

export interface Post {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  category: PostCategory;
  readTime: string;
  excerpt: string;
  published: boolean;
}

export const posts: Post[] = [
  {
    id: "P-001",
    slug: "on-constraints-as-creative-tools",
    title: "On Constraints as Creative Tools",
    subtitle: "What software architecture and DJing share",
    date: "March 12, 2026",
    category: "Process",
    readTime: "6 min",
    excerpt:
      "Both disciplines reward working within limits. The 4/4 grid forces decisions. A type system forces decisions. The question is whether constraints become cages or catapults.",
    published: true,
  },
  {
    id: "P-002",
    slug: "building-for-yourself",
    title: "Building for Yourself",
    subtitle: "The case for personal tools that no one else will use",
    date: "February 28, 2026",
    category: "Engineering",
    readTime: "8 min",
    excerpt:
      "There's a category of software that doesn't need users, funding, or product-market fit. It just needs to work well for the one person who built it. I've been building more of this lately.",
    published: true,
  },
  {
    id: "P-003",
    slug: "the-archive-instinct",
    title: "The Archive Instinct",
    subtitle: "Why I catalog everything, and what it costs",
    date: "February 10, 2026",
    category: "Culture",
    readTime: "5 min",
    excerpt:
      "I have playlists sorted by decade, crates sorted by mood, notes sorted by session. At some point the catalog becomes the thing itself. A reflection on collection as identity.",
    published: true,
  },
  {
    id: "P-004",
    slug: "systems-thinking-in-a-set",
    title: "Systems Thinking in a Set",
    subtitle: "Reading a dancefloor as an engineering problem",
    date: "January 22, 2026",
    category: "Music",
    readTime: "7 min",
    excerpt:
      "A DJ set is a real-time feedback system. You have inputs (the room, the time, the energy), processing (your crate, your ear, your decisions), and outputs (movement, temperature, time). What changes when you think about it this way.",
    published: true,
  },
  {
    id: "P-005",
    slug: "notes-on-type-systems",
    title: "Notes on Type Systems",
    subtitle: "What I wish I'd understood earlier about TypeScript",
    date: "January 8, 2026",
    category: "Engineering",
    readTime: "10 min",
    excerpt:
      "Not a tutorial. More like a collection of mental models that clicked for me after years of fighting the compiler. The type system as collaborator, not adversary.",
    published: true,
  },
];
