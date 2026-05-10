"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EntranceGateProps {
  onComplete: () => void;
}

// グリッチ点滅のアニメーション定義
const glitchFlicker = {
  opacity: [0, 1, 0.3, 1, 0.2, 1, 0.8, 1],
  transition: {
    duration: 0.8,
    ease: "linear" as const,
    times: [0, 0.1, 0.15, 0.2, 0.25, 0.3, 0.5, 1],
  },
};

export default function EntranceGate({ onComplete }: EntranceGateProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsExiting(true);
      // ズームアニメーション開始後にゲートを開放
      setTimeout(() => {
        setIsOpen(true);
      }, 300);
    }, 1500);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(timer);
    };
  }, []);

  const handleAnimationComplete = () => {
    document.body.style.overflow = "";
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <AnimatePresence onExitComplete={handleAnimationComplete}>
        {!isOpen && (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isExiting ? 1.1 : 1 }}
            exit={{ opacity: 0 }}
            transition={{
              scale: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.2 },
            }}
            className="fixed inset-0 overflow-hidden"
          >
            {/* 背景: 放射状グラデーション（ステージ奥行き表現） */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black" />

            {/* スポットライト効果 */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(59,130,246,0.15)_0%,_transparent_50%)]" />

            {/* 上半分ゲート */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-full h-1/2 bg-black/40 backdrop-blur-sm"
              style={{
                background: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%)",
              }}
            />

            {/* 下半分ゲート */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 w-full h-1/2 bg-black/40 backdrop-blur-sm"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%)",
              }}
            />

            {/* 中央コンテンツ */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
              {/* ロゴテキスト: グリッチエフェクト */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={glitchFlicker}
                className="text-4xl md:text-6xl font-black text-white tracking-widest text-center leading-normal drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                GINGA FESTIVAL &apos;26
              </motion.h1>

              {/* プログレスバー演出 */}
              <div className="mt-12 w-[280px] md:w-[400px]">
                {/* サイバーテキスト */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex justify-between items-center mb-2"
                >
                  <span className="text-xs font-mono font-bold text-blue-400 tracking-[0.2em] uppercase">
                    SYSTEM STARTING
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-xs font-mono font-bold text-blue-400"
                  >
                    ...
                  </motion.span>
                </motion.div>

                {/* プログレスバー外枠 */}
                <div className="border-2 border-white p-1">
                  {/* プログレスバー本体 */}
                  <div className="h-3 bg-black/50 overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-white shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                    />
                  </div>
                </div>

                {/* パーセンテージ表示 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="mt-2 text-right"
                >
                  <motion.span
                    className="text-sm font-mono font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.span
                      animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
                      transition={{ duration: 1.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
                    >
                      100%
                    </motion.span>
                  </motion.span>
                </motion.div>
              </div>
            </div>

            {/* グリッドライン演出 */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
