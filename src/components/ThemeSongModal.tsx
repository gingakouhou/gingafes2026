"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ThemeSongModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThemeSongModal({ isOpen, onClose }: ThemeSongModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-4xl aspect-video border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 md:-right-12 text-white hover:text-orange-500 transition-colors bg-black border-2 border-white/20 rounded-full p-1"
              aria-label="Close modal"
            >
              <X className="w-8 h-8 stroke-[3]" />
            </button>

            {/* YouTube Embed */}
            <iframe
              src="https://www.youtube.com/embed/GfvorRUyy_w?autoplay=1"
              title="GINGA FESTIVAL '26 THEME SONG"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
