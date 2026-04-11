"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Splash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // 演出中はスクロールを防止
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 1800); // 1.8秒後にスライドアウト開始

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-blue-600 overflow-hidden"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } // スパーン！と抜けるイージング
          }}
        >
          {/* 背景の装飾ライン */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500 skew-x-12 translate-x-32 mix-blend-multiply opacity-50" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-black skew-x-12 -translate-x-16 mix-blend-multiply opacity-20" />

          {/* フラッシュするテキスト */}
          <motion.div
            className="relative z-10"
            animate={{ opacity: [1, 0, 1, 0, 1, 1] }}
            transition={{ duration: 1.2, times: [0, 0.1, 0.2, 0.3, 0.5, 1], ease: "linear" }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white italic tracking-tighter uppercase -skew-x-12 drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] flex flex-col items-center">
              <span>Are you</span>
              <span className="text-orange-500 ml-8 sm:ml-16">READY?</span>
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
