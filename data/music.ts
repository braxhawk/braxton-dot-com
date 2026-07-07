export interface Mix {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  date: string;
  duration: string;
  genre: string;
  bpm?: string;
  tracklist?: string[];
  url?: string;
  notes?: string;
}

export interface WeeklyTrack {
  title: string;
  artist: string;
  album?: string;
  year?: string;
  note?: string;
}

export interface WeeklyNote {
  id: string;
  volume: string;
  date: string;
  tracks: WeeklyTrack[];
  note: string;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  trackCount: number;
  url?: string;
  platform: "Spotify" | "Apple Music" | "SoundCloud" | "Mixcloud";
}

export const mixes: Mix[] = [
  {
    id: "MX-001",
    index: "01",
    title: "Braxamine Time 01",
    subtitle: "Hype festival energy into an intense club set — with emotional spots",
    date: "2026",
    duration: "2h 28min",
    genre: "Festival / Club",
    url: "https://soundcloud.com/braxamine/braxamine-time-01",
    notes:
      "A full-length set that starts at peak energy and only gets more intense — with room for feeling in between.",
  },
  {
    id: "MX-002",
    index: "02",
    title: "Winning a Losing Game",
    subtitle: "House, tech house, groovy house",
    date: "2026",
    duration: "1h 51min",
    genre: "House / Tech House",
    url: "https://soundcloud.com/braxamine/winning-a-losing-game",
    notes: "A groovy, rolling set — the kind that locks in and doesn't let go.",
  },
];

export const playlists: Playlist[] = [
  {
    id: "PL-001",
    title: "The Loop",
    description: "When time becomes a construct.",
    trackCount: 52,
    platform: "Spotify",
    url: "https://open.spotify.com/playlist/6MxyFfxIEysRZT6eZWb3wG?si=Z_Pp7OYSTjmW11XXE03AjA",
  },
  {
    id: "PL-002",
    title: "Club Ready: 001",
    description: "A space where the bass and groove take over.",
    trackCount: 40,
    platform: "Spotify",
    url: "https://open.spotify.com/playlist/68nzRCAdj67vBXxz43MrZr?si=sOm-RlkqSOK4oMNUbeucww",
  },
  {
    id: "PL-003",
    title: "For Fun: 001",
    description: "The first Spotify mix I completed.",
    trackCount: 36,
    platform: "Spotify",
    url: "https://open.spotify.com/playlist/2pCRWnNvmpL3cwcN5CULy7?si=_21Zf4K7TCeDXztpIFnN0A",
  },
];

export const weeklyNotes: WeeklyNote[] = [
  {
    id: "WN-008",
    volume: "Vol. 08",
    date: "March 2026",
    note:
      "A week where the music had to carry more weight than usual. Four tracks that earned it.",
    tracks: [
      {
        title: "Burning",
        artist: "Mk.gee",
        album: "Two Star & The Dream Police",
        year: "2024",
        note: "Still returning to this one.",
      },
      {
        title: "Mood Valiant",
        artist: "Hiatus Kaiyote",
        album: "Mood Valiant",
        year: "2021",
        note: "Nai Palm's voice as structural element.",
      },
      {
        title: "Nkosi Sikelel' iAfrika",
        artist: "Abdullah Ibrahim",
        year: "1976",
        note: "Something about the restraint here.",
      },
      {
        title: "Lavender",
        artist: "BadBadNotGood",
        album: "IV",
        year: "2016",
        note: "Late-night version of clarity.",
      },
    ],
  },
  {
    id: "WN-007",
    volume: "Vol. 07",
    date: "February 2026",
    note:
      "Processing. Four tracks that gave shape to something wordless.",
    tracks: [
      {
        title: "Movement",
        artist: "Hozier",
        year: "2018",
      },
      {
        title: "Virgo's Maze",
        artist: "Masego",
        year: "2018",
      },
      {
        title: "Pyramids",
        artist: "Frank Ocean",
        album: "Channel ORANGE",
        year: "2012",
      },
      {
        title: "Oshun",
        artist: "Adekunle Gold",
        year: "2021",
      },
    ],
  },
];
