"use client";

import { useState, useCallback, ReactNode } from "react";
import EntranceGate from "@/components/EntranceGate";
import YouTubeEmbed from "@/components/YouTubeEmbed";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [player, setPlayer] = useState<any>(null);
  const [isEntered, setIsEntered] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePlayerReady = useCallback((p: any) => {
    setPlayer(p);
  }, []);

  const handleEnter = useCallback(() => {
    if (player) {
      player.playVideo();
    }
    setIsEntered(true);
  }, [player]);

  return (
    <>
      {/* YouTubeプレイヤー: 常に存在（非表示・最背面） */}
      <YouTubeEmbed
        onPlayerReady={handlePlayerReady}
        className="fixed inset-0 w-full h-full opacity-0 pointer-events-none -z-50"
      />

      {/* 入場ゲート: 未入場時のみ最前面に表示 */}
      {!isEntered && (
        <EntranceGate player={player} onEnter={handleEnter} />
      )}

      {/* ページコンテンツ */}
      {children}
    </>
  );
}
