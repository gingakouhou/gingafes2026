"use client";

import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ThemeSongModal from "./ThemeSongModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center mb-16 pt-20 pb-8 px-4 overflow-hidden">
      {/* === 背景の巨大タイポグラフィ（ポップなスタンプ・マスキングテープ風） === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-hidden -rotate-2 -skew-y-2 scale-110 origin-center"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.p
            key={i}
            animate={{ x: i % 2 === 0 ? [0, -100] : [-100, 0] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className={`text-[20vw] md:text-[200px] font-black uppercase leading-none font-[var(--font-oswald)] whitespace-nowrap opacity-20 mix-blend-multiply ${
              i % 3 === 0 ? "text-red-500" : i % 3 === 1 ? "text-blue-500" : "text-orange-500"
            }`}
          >
            GINGAFES 2026 GINGAFES 2026 GINGAFES 2026
          </motion.p>
        ))}
      </motion.div>

      {/* === 中央：公式ロゴ === */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 0.2,
        }}
        className="relative z-20 w-full max-w-[500px] md:max-w-[700px] aspect-[16/10] mb-8"
      >
        <Image
          src="/images/logo.png"
          alt="GINGAFES '26 -永炎の思い出を駆け抜けろ-"
          fill
          className="object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          priority
        />
      </motion.div>

      {/* === 下部コンテンツ（整然と縦並び） === */}
      <div className="relative z-20 flex flex-col items-center gap-8 w-full max-w-2xl mt-4">
        {/* サブタイトルボックス */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-blue-600 px-8 py-3 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] text-white -rotate-1 transform-gpu"
        >
          <p className="text-base md:text-2xl font-black tracking-widest uppercase font-[var(--font-oswald)]">
            MATSUMOTO ARIGASAKI HIGH SCHOOL FESTIVAL
          </p>
        </motion.div>

        {/* THEME SONG モーダルボタン */}
        <motion.button
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setIsModalOpen(true)}
          className="group flex items-center justify-center gap-3 bg-white hover:bg-orange-600 hover:text-white text-slate-900 px-8 py-4 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-all active:shadow-none active:translate-y-2 w-full max-w-md rotate-1 transform-gpu mt-2"
        >
          <span className="text-lg md:text-xl font-black tracking-widest uppercase font-[var(--font-oswald)] mt-1">
            ▶ テーマソング「キミシダイ列車」
          </span>
        </motion.button>

        {/* Scroll Down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="#news"
            className="mt-4 group flex flex-col items-center text-blue-800 hover:text-orange-600 transition-colors"
          >
            <span className="text-sm font-black tracking-widest uppercase mb-2">Scroll Down</span>
            <div className="p-3 bg-white border-2 border-current rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:translate-y-1 group-hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </div>
          </a>
        </motion.div>
      </div>

      {/* モーダルコンポーネント */}
      <ThemeSongModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
