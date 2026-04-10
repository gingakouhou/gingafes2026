"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion, HelpCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import MotionCard from "@/components/MotionCard";

const faqs = [
  {
    q: "自転車での来校は可能ですか？",
    a: "駐輪場に限りがあるため、なるべく公共交通機関でのご来校をお願いいたします。",
  },
  {
    q: "上履き・スリッパは必要ですか？",
    a: "校舎内は土足厳禁となっております。各自で上履きと靴袋をご持参ください。",
  },
  {
    q: "飲食の持ち込みは可能ですか？",
    a: "可能ですが、ゴミは各自でお持ち帰りいただくようご協力をお願いします。模擬店での販売もございます。",
  },
  {
    q: "写真や動画の撮影は可能ですか？",
    a: "ステージ発表や展示の撮影は可能ですが、他のお客様の迷惑にならないようご配慮ください。また、SNSへの無断投稿はお控えください。",
  },
];

function AccordionItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
      <MotionCard
        className={`border-4 border-black bg-white transition-colors duration-300 ${isOpen ? "shadow-[8px_8px_0px_rgba(234,88,12,1)]" : "shadow-[6px_6px_0px_rgba(0,0,0,1)]"}`}
        hoverColor={isOpen ? "rgba(234,88,12,1)" : "rgba(37,99,235,1)"}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus:ring-4 focus:ring-blue-600/50"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-4">
            <div className={`p-2 border-4 border-black transition-colors flex-shrink-0 -skew-x-6 ${isOpen ? "bg-orange-500 text-white" : "bg-blue-200 text-blue-900"}`}>
              <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span className={`text-lg sm:text-xl font-black transition-colors ${isOpen ? "text-orange-600" : "text-black"}`}>
              {faq.q}
            </span>
          </div>
          <div className={`flex-shrink-0 p-1 border-2 border-black transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "rotate-180 bg-black text-white" : "rotate-0 bg-white text-black"}`}>
            <ChevronDown className="w-6 h-6" />
          </div>
        </button>
        
        {/* スムーズな開閉アニメーション */}
        <div 
          className={`grid transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-top ${isOpen ? "grid-rows-[1fr] opacity-100 scale-y-100" : "grid-rows-[0fr] opacity-0 scale-y-95 pointer-events-none"}`}
        >
          <div className="overflow-hidden">
            <div className="p-6 pt-0 bg-orange-50 border-t-4 border-black mt-2">
              <p className="flex gap-4 font-bold text-slate-800 leading-loose py-4">
                <span className="font-black text-orange-600 text-2xl -skew-x-12">A.</span>
                <span>{faq.a}</span>
              </p>
            </div>
          </div>
        </div>
      </MotionCard>
    </ScrollReveal>
  );
}

export default function FAQPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-[#f8f9fa] text-slate-900 pb-20 overflow-x-hidden selection:bg-orange-600 selection:text-white">
      {/* 背景パターン: ドット */}
      <div className="fixed inset-0 z-0 bg-dot-pattern opacity-10 pointer-events-none mix-blend-multiply" />

      {/* スラッシュ状の背景装飾 */}
      <div className="fixed top-1/4 right-0 w-1/4 h-2/3 bg-orange-600/5 skew-x-12 translate-x-16 pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-1/2 h-1/3 bg-blue-600/5 -skew-x-12 -translate-x-32 pointer-events-none z-0" />

      <main className="relative z-10 w-full max-w-4xl px-4 py-16 mx-auto sm:px-6 lg:px-8 mt-8">
        
        <ScrollReveal>
          <div className="mb-16 text-center">
            <div className="inline-block bg-orange-600 text-white px-8 py-3 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] -skew-x-6">
              <div className="flex items-center justify-center gap-4">
                <MessageCircleQuestion className="w-10 h-10 border-2 border-white p-1" />
                <h1 className="text-4xl font-black tracking-widest md:text-5xl uppercase">
                  Q&A
                </h1>
              </div>
            </div>
            <p className="mt-8 text-lg font-bold tracking-widest text-slate-800 uppercase bg-white border-2 border-black inline-block px-4 py-1 shadow-[4px_4px_0px_rgba(0,0,0,1)] -rotate-1">
              よくある質問
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} faq={faq} index={index} />
          ))}
        </div>

      </main>
    </div>
  );
}
