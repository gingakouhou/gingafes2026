"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion, HelpCircle } from "lucide-react";

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
    <div 
      className={`animate-fade-in-up opacity-0 [animation-fill-mode:forwards] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-white/20 border-indigo-400/50" : "hover:bg-white/15 hover:border-white/30"}`}
      style={{ animationDelay: `${200 + index * 150}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-indigo-400/50 rounded-2xl"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-full transition-colors flex-shrink-0 ${isOpen ? "bg-indigo-500/20 text-indigo-300" : "bg-white/10 text-slate-300"}`}>
            <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? "text-indigo-100" : "text-slate-100"}`}>
            {faq.q}
          </span>
        </div>
        <ChevronDown 
          className={`w-5 h-5 flex-shrink-0 text-indigo-300 transition-transform duration-500 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`} 
        />
      </button>
      
      {/* 
        Tailwindのgridを用いたスムーズな開閉アニメーション 
        grid-template-rows: 0fr -> 1fr のトランジション
      */}
      <div 
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="p-6 pt-0 text-slate-300 leading-relaxed border-t border-white/10 mt-2">
            <p className="flex gap-3">
              <span className="font-bold text-indigo-300 text-lg">A.</span>
              <span>{faq.a}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      {/* 常に背面にある星空・オーロラエフェクト (fixed) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 mix-blend-screen blur-[120px] max-md:h-[300px] max-md:w-[300px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] translate-x-1/4 translate-y-1/4 rounded-full bg-purple-600/10 mix-blend-screen blur-[120px] max-md:h-[300px] max-md:w-[300px]" />
        
        {/* 無数の星 */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>

      <main className="relative z-10 w-full max-w-4xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center animate-fade-in-up">
          <div className="inline-flex items-center justify-center p-4 mb-4 rounded-full bg-indigo-500/10 border border-indigo-400/30">
            <MessageCircleQuestion className="w-8 h-8 md:w-10 md:h-10 text-indigo-300" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-wider md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            Q&A
          </h1>
          <p className="mt-4 text-sm tracking-widest text-indigo-200/80 uppercase">
            よくある質問
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} faq={faq} index={index} />
          ))}
        </div>

      </main>
    </div>
  );
}
