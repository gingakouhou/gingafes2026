"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EntranceGateProps {
  onComplete: () => void;
}

export default function EntranceGate({ onComplete }: EntranceGateProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsOpen(true);
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
          <>
            {/* 上半分 */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-full h-1/2 bg-black flex items-end justify-center pb-8"
            >
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-widest text-center leading-normal">
                GINGA FESTIVAL &apos;26
              </h1>
            </motion.div>

            {/* 下半分 */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 w-full h-1/2 bg-black"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
