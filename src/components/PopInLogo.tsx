"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PopInLogo() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 12,
        delay: 0.1,
      }}
      className="mb-6 relative w-full max-w-4xl flex justify-center mx-auto"
    >
      {/* 公式ロゴ画像 */}
      <div className="relative w-full max-w-[800px] aspect-[16/10] drop-shadow-[8px_8px_0px_rgba(30,58,138,1)]">
        <Image 
          src="/logo.png" 
          alt="星瞬 -永炎の思い出を駆け抜けろ-" 
          fill
          className="object-contain"
          priority
        />
      </div>
    </motion.div>
  );
}
