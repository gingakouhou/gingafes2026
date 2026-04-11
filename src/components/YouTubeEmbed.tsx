"use client";

import YouTube from "react-youtube";
import { useRef, useEffect, useCallback } from "react";
import type { YouTubeEvent, YouTubePlayer } from "react-youtube";

export default function YouTubeEmbed() {
  const playerRef = useRef<YouTubePlayer | null>(null);

  const onReady = useCallback((event: YouTubeEvent) => {
    playerRef.current = event.target;
  }, []);

  useEffect(() => {
    const handler = () => {
      if (playerRef.current) {
        playerRef.current.playVideo();
      }
    };
    window.addEventListener("site-entered", handler);
    return () => window.removeEventListener("site-entered", handler);
  }, []);

  return (
    <div className="mt-10 w-full max-w-2xl mx-auto border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-black -rotate-1 hover:rotate-0 transition-transform overflow-hidden">
      <div className="aspect-video">
        <YouTube
          videoId="P6aZ4A950z0"
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
