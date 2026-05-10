"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Star, Zap } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center mb-16 pt-20 pb-8 px-4 overflow-hidden">
      {/* === 背景の装飾アセット（ロゴ周囲に散りばめ） === */}

      {/* ロゴ背後の巨大タイポグラフィ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] pointer-events-none select-none z-0"
      >
        <p className="text-xl md:text-3xl font-black text-blue-900 tracking-[0.3em] uppercase leading-loose font-[var(--font-oswald)] whitespace-nowrap">
          MATSUMOTO ARIGASAKI HIGH SCHOOL FESTIVAL 2026 ★ GINGA FES &apos;26 ★ MATSUMOTO ARIGASAKI HIGH SCHOOL FESTIVAL 2026 ★
        </p>
      </motion.div>

      {/* 左上：ゆっくり回転する星 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] left-[8%] md:left-[15%] z-10"
      >
        <Sparkles className="w-12 h-12 md:w-20 md:h-20 text-red-600 fill-red-600" />
      </motion.div>

      {/* 右上：フワフワ浮遊する星 */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[8%] md:right-[15%] z-10"
      >
        <Star className="w-10 h-10 md:w-16 md:h-16 text-blue-600 fill-blue-600" />
      </motion.div>

      {/* 左下：チカチカ点滅する稲妻 */}
      <motion.div
        animate={{ opacity: [1, 0.3, 1, 0.5, 1], scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[35%] left-[5%] md:left-[12%] z-10"
      >
        <Zap className="w-8 h-8 md:w-14 md:h-14 text-orange-500 fill-orange-500" />
      </motion.div>

      {/* 右下：回転する小さな星（遅延） */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[30%] right-[6%] md:right-[10%] z-10"
      >
        <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-yellow-500 fill-yellow-500" />
      </motion.div>

      {/* 波線装飾（SVG）- 左上 */}
      <motion.svg
        viewBox="0 0 100 20"
        className="absolute top-[10%] left-[20%] w-24 md:w-32 h-auto z-10"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M0,10 Q25,0 50,10 T100,10"
          stroke="#dc2626"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* 波線装飾（SVG）- 右下 */}
      <motion.svg
        viewBox="0 0 100 20"
        className="absolute bottom-[25%] right-[20%] w-20 md:w-28 h-auto z-10"
        animate={{ x: [0, -5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M0,10 Q25,20 50,10 T100,10"
          stroke="#2563eb"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* 小さな装飾点 */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[25%] left-[25%] w-3 h-3 bg-red-600 rounded-full z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[40%] right-[25%] w-4 h-4 bg-blue-600 rounded-full z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[18%] w-2 h-2 bg-orange-500 rounded-full z-10"
      />

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
        className="relative z-20 w-full max-w-[500px] md:max-w-[600px] aspect-[16/10] mb-12"
      >
        <Image
          src="/logo.png"
          alt="星瞬 -永炎の思い出を駆け抜けろ-"
          fill
          className="object-contain drop-shadow-[4px_4px_8px_rgba(0,0,0,0.3)]"
          priority
        />
      </motion.div>

      {/* === 下部コンテンツ（整然と縦並び） === */}
      <div className="relative z-20 flex flex-col items-center gap-6 w-full max-w-2xl">
        {/* テーマソング */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white px-8 py-4 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]"
        >
          <p className="text-base md:text-xl font-black text-slate-900 tracking-wider uppercase font-[var(--font-oswald)]">
            テーマソング「キミシダイ列車」
          </p>
        </motion.div>

        {/* YouTube動画 */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[560px] aspect-video border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] overflow-hidden bg-black"
        >
          <iframe
            src="https://www.youtube.com/embed/jK2aIUmmdP4"
            title="GINGA FESTIVAL '26"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>

        {/* Scroll Down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="#news"
            className="mt-8 group flex flex-col items-center text-blue-800 hover:text-orange-600 transition-colors"
          >
            <span className="text-sm font-black tracking-widest uppercase mb-2">Scroll Down</span>
            <div className="p-3 bg-white border-2 border-current rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:translate-y-1 group-hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
