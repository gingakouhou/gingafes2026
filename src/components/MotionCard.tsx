"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  hoverColor?: string;
}

export default function MotionCard({ children, className = "", hoverColor = "rgba(0,0,0,1)" }: MotionCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -6,
        x: -4,
        rotate: -0.5,
        boxShadow: `12px 12px 0px ${hoverColor}`,
        transition: { type: "spring", stiffness: 400, damping: 15 },
      }}
      whileTap={{
        y: 4,
        x: 4,
        rotate: 0,
        boxShadow: "0px 0px 0px rgba(0,0,0,1)",
        scale: 0.98,
        transition: { type: "spring", stiffness: 500, damping: 20 },
      }}
    >
      {children}
    </motion.div>
  );
}
