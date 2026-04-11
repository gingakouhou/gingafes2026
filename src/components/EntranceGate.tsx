"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface EntranceGateProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  player: any | null;
  onEnter: () => void;
}

export default function EntranceGate({ player, onEnter }: EntranceGateProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const isReady = player !== null;

  const handleEnter = () => {
    onEnter();
    document.body.style.overflow = "";
  };

  return (
    <div className="fixed inset-0 z-[100]">
      {/* 背景: 上半分 */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-black" />

      {/* 背景: 下半分 */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black" />

      {/* コンテンツ: Flexbox配置 */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 px-8 min-h-[100dvh]">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-widest text-center leading-normal">
          GINGA FESTIVAL &apos;26
        </h1>

        <button
          onClick={handleEnter}
          disabled={!isReady}
          className={`border-4 px-10 py-4 text-xl sm:text-2xl font-black tracking-widest uppercase transition-colors focus:outline-none ${
            isReady
              ? "border-white text-white hover:bg-white hover:text-black animate-pulse cursor-pointer"
              : "border-gray-600 text-gray-600 cursor-not-allowed"
          }`}
        >
          {isReady ? "TAP TO ENTER" : "LOADING..."}
        </button>

        <p className="text-sm text-gray-500 tracking-wider text-center">
          ※このサイトは音がなります
        </p>
      </div>
    </div>
  );
}
