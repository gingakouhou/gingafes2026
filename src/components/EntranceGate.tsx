"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function EntranceGate() {
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
    setIsEntered(true);
    document.body.style.overflow = "";
    // YouTubeEmbed に再生開始を通知
    window.dispatchEvent(new CustomEvent("site-entered"));
  };

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
              className="animate-pulse border-4 border-white px-10 py-4 text-xl sm:text-2xl font-black text-white tracking-widest uppercase hover:bg-white hover:text-black transition-colors focus:outline-none"
            >
              TAP TO ENTER
            </button>

            {/* 注意書き */}
            <p className="text-xs text-gray-500 tracking-wider">
              ※音が出ます
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
