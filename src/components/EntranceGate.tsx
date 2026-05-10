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
            className="fixed inset-0 overflow-hidden bg-black"
          >
            {/* 漆黒の背景 - ベタ塗りのみ */}
            <div className="absolute inset-0 bg-black" />

            {/* 上半分ゲート - ソリッドな漆黒 */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-full h-1/2 bg-black"
            />

            {/* 下半分ゲート - ソリッドな漆黒 */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 w-full h-1/2 bg-black"
            />

            {/* 中央コンテンツ */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
              {/* ロゴテキスト: グリッチ + ネオブルータリズム装飾 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={glitchFlicker}
                className="relative"
              >
                {/* ズレた赤い影（左下） */}
                <span
                  className="absolute top-1 left-1 text-5xl md:text-7xl font-black tracking-wider text-center leading-none text-red-600 italic -skew-x-6 select-none font-[var(--font-oswald)]"
                  aria-hidden="true"
                >
                  GINGA FESTIVAL &apos;26
                </span>
                {/* ズレた青い影（右下） */}
                <span
                  className="absolute -top-1 -left-1 text-5xl md:text-7xl font-black tracking-wider text-center leading-none text-blue-600 italic -skew-x-6 select-none font-[var(--font-oswald)]"
                  aria-hidden="true"
                >
                  GINGA FESTIVAL &apos;26
                </span>
                {/* メインテキスト（白） */}
                <h1 className="relative text-5xl md:text-7xl font-black tracking-wider text-center leading-none text-white italic -skew-x-6 font-[var(--font-oswald)]">
                  GINGA FESTIVAL &apos;26
                </h1>
              </motion.div>

              {/* プログレスバー演出 - ソリッドなネオブルータリズム */}
              <div className="mt-14 w-[300px] md:w-[420px]">
                {/* LOADING テキスト - 極太フォント + 影 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex justify-between items-center mb-3"
                >
                  <span className="text-sm font-black text-white tracking-[0.3em] uppercase italic font-[var(--font-oswald)]"
                    style={{ textShadow: "3px 3px 0px #dc2626" }}
                  >
                    LOADING
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-xl font-black text-white font-[var(--font-oswald)]"
                    style={{ textShadow: "2px 2px 0px #2563eb" }}
                  >
                    ▼
                  </motion.span>
                </motion.div>

                {/* プログレスバー外枠 - 太い白枠 */}
                <div className="border-4 border-white p-2 bg-black">
                  {/* プログレスバー本体 - ソリッドな赤からオレンジ */}
                  <div className="h-4 bg-black overflow-hidden">
                    <motion.div
                      initial={{ width: "0%", x: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full bg-red-600"
                      style={{
                        boxShadow: "4px 0 0 #ea580c, 8px 0 0 #f97316",
                      }}
                    />
                  </div>
                </div>

                {/* パーセンテージ表示 - 極太フォント */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="mt-3 text-right"
                >
                  <motion.span
                    className="text-lg font-black text-white italic font-[var(--font-oswald)]"
                    style={{ textShadow: "2px 2px 0px #dc2626" }}
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

            {/* クロスライン装飾（単色） */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-white" />
              <div className="absolute top-0 left-1/2 w-1 h-full bg-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
