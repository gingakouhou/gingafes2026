"use client";

import { useState, useCallback, ReactNode } from "react";
import EntranceGate from "@/components/EntranceGate";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isEntered, setIsEntered] = useState(false);

  const handleComplete = useCallback(() => {
    setIsEntered(true);
  }, []);

  return (
    <>
      {/* 入場ゲート (自動オープニング) */}
      {!isEntered && (
        <EntranceGate onComplete={handleComplete} />
      )}

      {/* ページコンテンツ */}
      {children}
    </>
  );
}
