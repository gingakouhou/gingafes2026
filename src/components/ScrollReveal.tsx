"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const directionMap = {
    up: { y: 60, x: 0, rotate: 0 },
    left: { y: 20, x: -80, rotate: -3 },
    right: { y: 20, x: 80, rotate: 3 },
  };
  const d = directionMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, y: d.y, x: d.x, rotate: d.rotate }}
      whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        type: "spring",
        stiffness: 120,
        damping: 12,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
