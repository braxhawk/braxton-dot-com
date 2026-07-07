"use client";

interface SoundCloudPlayerProps {
  url: string;
}

export default function SoundCloudPlayer({ url }: SoundCloudPlayerProps) {
  const embedSrc =
    `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}` +
    `&color=%23657153&auto_play=false&hide_related=true` +
    `&show_comments=false&show_user=false&show_reposts=false` +
    `&show_teaser=false&visual=true`;

  return (
    <iframe
      src={embedSrc}
      width="100%"
      height="166"
      allow="autoplay"
      className="block border-0 mt-5"
      title="SoundCloud Player"
    />
  );
}
