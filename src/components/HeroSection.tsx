"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] text-center mb-24 relative px-4 overflow-hidden">
      {/* 巨大な斜めスクロール帯（Marquee）- 最背面 */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] -ml-[20vw] -rotate-6 z-0 pointer-events-none"
      >
        <div className="bg-blue-600 border-y-4 border-black py-4 shadow-[0_8px_0px_rgba(0,0,0,1)] overflow-hidden">
          <div className="animate-marquee flex whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-2xl md:text-4xl font-black text-white tracking-[0.2em] uppercase mx-8 font-[var(--font-oswald)]"
                style={{ textShadow: "3px 3px 0px #000" }}
              >
                MATSUMOTO ARIGASAKI HIGH SCHOOL FESTIVAL 2026 ★ GINGA FES &apos;26 ★
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ステッカー風配置コンテナ */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3,
            },
          },
        }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* 公式ロゴ - バネのようにドカン！と拡大 */}
        <motion.div
          variants={{
            hidden: { scale: 0, opacity: 0, rotate: -10 },
            visible: {
              scale: 1,
              opacity: 1,
              rotate: 2,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
              },
            },
          }}
          className="mb-4 relative w-full max-w-[600px] md:max-w-[700px] aspect-[16/10]"
        >
          <div className="relative w-full h-full drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] border-4 border-black bg-white p-2 -rotate-2">
            <Image
              src="/logo.png"
              alt="星瞬 -永炎の思い出を駆け抜けろ-"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* テーマソング箱 - ペタッと貼られる */}
        <motion.div
          variants={{
            hidden: { y: 50, opacity: 0, rotate: 10, scale: 0.8 },
            visible: {
              y: 0,
              opacity: 1,
              rotate: -3,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
              },
            },
          }}
          className="mt-2 bg-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)]"
        >
          <p className="text-lg md:text-xl font-black text-slate-900 tracking-wider uppercase font-[var(--font-oswald)]">
            テーマソング「キミシダイ列車」
          </p>
        </motion.div>

        {/* YouTube動画 - ステッカー風 */}
        <motion.div
          variants={{
            hidden: { y: 80, opacity: 0, rotate: -5, scale: 0.9 },
            visible: {
              y: 0,
              opacity: 1,
              rotate: 2,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 250,
                damping: 12,
              },
            },
          }}
          className="mt-8 w-[85vw] md:w-[600px] h-[48vw] md:h-[340px] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] overflow-hidden bg-black rotate-1"
        >
          <iframe
            src="https://www.youtube.com/embed/P6aZ4A950z0"
            title="GINGA FESTIVAL '26"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>

        {/* Scroll Down */}
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { delay: 0.5, duration: 0.5 },
            },
          }}
        >
          <a
            href="#news"
            className="mt-12 group flex flex-col items-center text-blue-800 hover:text-orange-600 transition-colors"
          >
            <span className="text-sm font-black tracking-widest uppercase mb-2">Scroll Down</span>
            <div className="p-3 bg-white border-2 border-current rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:translate-y-1 group-hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
