"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface EntranceGateProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  player: any | null;
  onEnter: () => void;
}

export default function EntranceGate({ player, onEnter }: EntranceGateProps) {
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    if (!isEntered) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isEntered]);

  const handleEnter = () => {
    onEnter();
    setIsEntered(true);
    document.body.style.overflow = "";
  };

  const isReady = player !== null;

  return (
    <AnimatePresence>
      {!isEntered && (
        <motion.div
          key="entrance-gate"
          className="fixed inset-0 z-[100]"
        >
          {/* 背景: 上半分 */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-black"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.28, ease: [0.95, 0, 1, 1] }}
          />

          {/* 背景: 下半分 */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-black"
            exit={{ y: "100%" }}
            transition={{ duration: 0.28, ease: [0.95, 0, 1, 1] }}
          />

          {/* コンテンツ: 純粋なFlexbox配置（absoluteなし） */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 min-h-[100dvh]"
            exit={{ opacity: 0, scale: 1.3 }}
            transition={{ duration: 0.15 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-widest text-center break-words leading-tight">
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
