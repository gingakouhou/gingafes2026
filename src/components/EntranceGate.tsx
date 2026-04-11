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
    // ユーザーインタラクションのコンテキスト内で直接 playVideo() を呼ぶ
    // → ブラウザの自動再生ブロックを回避
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
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* 上半分 */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[50.5vh] bg-black"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.28, ease: [0.95, 0, 1, 1] }}
          />

          {/* 下半分 */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[50.5vh] bg-black"
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.28, ease: [0.95, 0, 1, 1] }}
          />

          {/* 中央のコンテンツ */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.3 }}
            transition={{ duration: 0.15 }}
          >
            {/* SEISHUN '26 ロゴ */}
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black text-white tracking-widest text-center">
              SEISHUN &apos;26
            </h1>

            {/* 入場ボタン */}
            <button
              onClick={handleEnter}
              disabled={!isReady}
              className={`border-4 border-white px-10 py-4 text-xl sm:text-2xl font-black tracking-widest uppercase transition-colors focus:outline-none ${
                isReady
                  ? "text-white hover:bg-white hover:text-black animate-pulse cursor-pointer"
                  : "text-gray-600 border-gray-600 cursor-not-allowed"
              }`}
            >
              {isReady ? "TAP TO ENTER" : "LOADING..."}
            </button>

            {/* 注意書き */}
            <p className="text-xs text-gray-500 tracking-wider">
              {isReady ? "※音が出ます" : "準備中..."}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
