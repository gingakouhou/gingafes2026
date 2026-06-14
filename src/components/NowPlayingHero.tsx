"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Bar = {
  id: number;
  colorClass: string;
};

export default function NowPlayingHero() {
  const bars = useMemo<Bar[]>(
    () => [
      { id: 0, colorClass: "bg-white" },
      { id: 1, colorClass: "bg-blue-500" },
      { id: 2, colorClass: "bg-orange-500" },
      { id: 3, colorClass: "bg-white" },
      { id: 4, colorClass: "bg-blue-500" },
    ],
    [],
  );

  const [levels, setLevels] = useState<number[]>(() => bars.map(() => 0.4));

  useEffect(() => {
    const tick = () => {
      setLevels((prev) =>
        prev.map((_, i) => {
          // 見た目が単調になりにくいよう、バーごとに振れ幅を変える
          const base = 0.18 + (i % 3) * 0.06;
          const spike = 0.35 + (i % 2) * 0.25;
          const r = Math.random();
          const next = base + r * (1 - base);
          // たまに大きく跳ねる
          return Math.min(1, r > 0.78 ? next + spike * Math.random() : next);
        }),
      );
    };

    tick();
    const id = window.setInterval(tick, 180);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="w-[90vw] md:w-[640px] h-[50vw] md:h-[360px] relative overflow-hidden border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-lg mx-auto flex-shrink-0">
      <Image
        src="https://img.youtube.com/vi/jK2aIUmmdP4/maxresdefault.jpg"
        alt="NOW PLAYING"
        fill
        className="object-cover absolute inset-0 z-0"
        sizes="(max-width: 768px) 90vw, 640px"
      />

      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10">
        <div className="px-6">
          <p className="whitespace-nowrap text-3xl md:text-5xl font-black italic tracking-widest text-white drop-shadow-md">
            NOW PLAYING
          </p>
        </div>

        <div className="flex items-end gap-2 h-16 mt-4">
          {bars.map((b, i) => (
            <motion.div
              key={b.id}
              className={`w-3 ${b.colorClass} border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]`}
              style={{ transformOrigin: "bottom" }}
              animate={{ scaleY: levels[i] ?? 0.3 }}
              transition={{
                duration: 0.16 + (i % 3) * 0.04,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            />
          ))}
        </div>

        <div className="mt-3 text-white/80 text-xs md:text-sm font-black tracking-[0.25em] uppercase">
          KIMISHIDAI TRAIN
        </div>
      </div>
    </div>
  );
}

