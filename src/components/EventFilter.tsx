"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, MapPin } from "lucide-react";
import Image from "next/image";
import type { Event } from "@/lib/microcms";
import MotionCard from "@/components/MotionCard";

const tabs = ["すべて", "模擬店", "室内イベント", "その他"];

export default function EventFilter({ allEvents }: { allEvents: Event[] }) {
  const [activeTab, setActiveTab] = useState("すべて");

  const filteredEvents = allEvents.filter((event) => {
    if (activeTab === "すべて") return true;
    if (!event.category) return false;
    if (Array.isArray(event.category)) {
      return event.category.includes(activeTab);
    }
    return event.category === activeTab;
  });

  return (
    <div className="space-y-8">
      {/* タブUI */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-bold text-sm sm:text-base border-2 border-black transition-all ${
                isActive
                  ? "bg-blue-600 text-white translate-y-[4px] translate-x-[4px] shadow-none"
                  : "bg-white text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-orange-100 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none"
              } -skew-x-6`}
            >
              <div className="skew-x-6">{tab}</div>
            </button>
          );
        })}
      </div>

      {/* 企画グリッド */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <MotionCard
                className="group flex flex-col h-full border-4 border-black bg-white p-4 shadow-[6px_6px_0px_rgba(0,0,0,1)] cursor-pointer"
                hoverColor="rgba(37,99,235,1)"
              >
                {/* 画像またはプレースホルダー部分 */}
                <div className="mb-4 relative flex h-32 w-full items-center justify-center border-4 border-black bg-slate-100 text-slate-400 overflow-hidden group-hover:border-blue-600 transition-colors duration-300">
                  {event.image ? (
                    <Image
                      src={event.image.url}
                      width={event.image.width}
                      height={event.image.height}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#e2e8f0_10px,#e2e8f0_20px)] w-full h-full flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-50">
                      <ImageIcon className="h-12 w-12 opacity-50" />
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mb-2 bg-orange-100 border-2 border-black px-3 py-1 -skew-x-6 w-fit">
                  <MapPin className="h-4 w-4 text-orange-600 font-black" />
                  <span className="text-xs sm:text-sm font-black tracking-wider text-orange-900">
                    {event.location || (Array.isArray(event.category) ? event.category.join(", ") : event.category) || "場所未定"}
                  </span>
                </div>
                
                <h3 className="mb-2 text-lg sm:text-xl font-black text-black leading-tight group-hover:text-blue-700 transition-colors">{event.title}</h3>
                <p className="text-xs sm:text-sm font-bold leading-relaxed text-slate-700 border-t-2 border-dashed border-black pt-2">
                  {event.description || "熱い企画が待っている！"}
                </p>
              </MotionCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredEvents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white border-4 border-black p-8 text-center shadow-[8px_8px_0px_rgba(0,0,0,1)] font-bold text-lg max-w-2xl mx-auto"
        >
          該当する企画が現在ありません。
        </motion.div>
      )}
    </div>
  );
}
