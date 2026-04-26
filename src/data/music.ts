export type MusicPlatform = {
  label: string;
  href: string;
};

export type Track = {
  id: string;
  title: string;
  releaseDate: string;
  coverUrl: string;
  kind: "Single" | "EP" | "Album";
  platforms: MusicPlatform[];
};

export const music: Track[] = [
  {
    id: "etoile-du-matin",
    title: "ÉTOILE DU MATIN",
    releaseDate: "2025",
    coverUrl: "/press/cover/IMG_0760.JPG.jpeg",
    kind: "Album",
    platforms: [
      {
        label: "Spotify",
        href: "https://open.spotify.com/intl-fr/album/67r9CK3p0IdobCW0aRmcnR?si=J9py9GU5QHalYkmdU053-w",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/bj/album/etoile-du-matin/1840207511",
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/watch?v=bXJcS0dkycc&list=OLAK5uy_ktzUPzG5PPqrxH_L4DfqQbFwHmB688_Jw",
      },
    ],
  },
];
