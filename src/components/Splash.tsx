"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Splash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // 演出中はスクロールを防止
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    // 1.5秒（タメ）後に非表示ステートへ移行
    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash-container"
          className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center"
        >
          {/* 上半分の黒背景 */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[50vh] bg-black origin-top"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "circIn" }}
          />

          {/* 下半分の黒背景 */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[50vh] bg-black origin-bottom"
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "circIn" }}
          />

          {/* テキスト（GINGA FESTIVAL '26） */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.2, ease: "circIn" }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-widest text-center whitespace-nowrap px-4">
              GINGA FESTIVAL '26
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
