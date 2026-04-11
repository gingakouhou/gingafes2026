"use client";

import YouTube from "react-youtube";
import type { YouTubeEvent } from "react-youtube";

interface YouTubeEmbedProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPlayerReady: (player: any) => void;
}

export default function YouTubeEmbed({ onPlayerReady }: YouTubeEmbedProps) {
  const onReady = (event: YouTubeEvent) => {
    onPlayerReady(event.target);
  };

  return (
    <div className="mt-10 w-full max-w-2xl mx-auto border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-black -rotate-1 hover:rotate-0 transition-transform overflow-hidden">
      <div className="aspect-video">
        <YouTube
          videoId="GfvorRUyy_w"
          className="w-full h-full"
          iframeClassName="w-full h-full"
          onReady={onReady}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 0,
              rel: 0,
              modestbranding: 1,
            },
          }}
        />
      </div>
    </div>
  );
}
