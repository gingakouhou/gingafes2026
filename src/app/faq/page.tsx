"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion, HelpCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import MotionCard from "@/components/MotionCard";

const faqData = [
  {
    category: "アクセス・入場について",
    items: [
      {
        q: "一般公開日は誰でも入場できますか？チケットや事前予約は必要ですか？",
        a: "一般公開日はどなたでもご自由に入場いただけます。チケットや事前の申し込みは不要です。ぜひお気軽にお越しください。",
      },
      {
        q: "車で行きたいのですが、駐車場はありますか？",
        a: "学校内に一般来場者向けの駐車場はございません。近隣の商業施設への無断駐車は絶対におやめください。必ず公共交通機関をご利用いただきますようお願いいたします。",
      },
      {
        q: "自転車で行く場合、駐輪場はありますか？",
        a: "はい、校内の指定された場所に駐輪スペースを設けております。当日は案内係の生徒の指示に従って駐輪してください。",
      },
      {
        q: "上履きやスリッパ、下足を入れる袋は持参したほうがいいですか？",
        a: "校舎内（教室棟・体育館）に入る際は上履きが必要です。ご自身のスリッパ等の上履きと、脱いだ下足を入れる袋を必ずご持参ください。",
      }
    ]
  },
  {
    category: "企画・スケジュールについて",
    items: [
      {
        q: "パンフレットはどこでもらえますか？",
        a: "当日、入場時などに案内係の生徒からお渡しいたします。",
      },
      {
        q: "体育館でのステージ企画を見るのに、整理券などは必要ですか？",
        a: "必要ありません。どなたでもご自由に入場いただけます。ぜひお気軽にご覧ください。",
      }
    ]
  },
  {
    category: "飲食・お金・ルールについて",
    items: [
      {
        q: "模擬店での支払いは、PayPayなどのスマホ決済や電子マネーは使えますか？",
        a: "申し訳ありませんが、模擬店での決済は原則【現金のみ】となります。スムーズな会計のため、100円玉などの小銭を多めにご用意いただけますと幸いです。",
      },
      {
        q: "校内で写真や動画を撮影してもいいですか？SNSに載せてもいいですか？",
        a: "撮影自体は可能ですが、他のご来場者様や本校生徒の顔がはっきりと映っている写真・動画を、無断でSNS（Instagram、TikTok、X等）へアップロードする行為は固く禁じております。プライバシー保護へのご協力をお願いいたします。",
      },
      {
        q: "買った食べ物はどこで食べられますか？食べ歩きは可能ですか？",
        a: "基本的に校内のどこでもお召し上がりいただけますが、ゴミのポイ捨て等はおやめください。",
      },
      {
        q: "ゴミ箱は設置されていますか？",
        a: "ゴミの出る商品を販売している各模擬店にてゴミ袋を設置しておりますので、出たゴミはそちらに捨てていただきますようお願いいたします。",
      }
    ]
  }
];

function AccordionItem({ faq, index }: { faq: { q: string, a: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
      <MotionCard
        className={`border-2 border-black bg-white transition-colors duration-300 ${isOpen ? "shadow-[4px_4px_0px_rgba(234,88,12,1)]" : "shadow-[4px_4px_0px_rgba(0,0,0,1)]"}`}
        hoverColor={isOpen ? "rgba(234,88,12,1)" : "rgba(37,99,235,1)"}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus:ring-4 focus:ring-blue-600/50"
          aria-expanded={isOpen}
        >
          <div className="flex items-start gap-4">
            <span className="font-black text-red-600 text-3xl -skew-x-12 leading-none mt-1 shrink-0">
              Q.
            </span>
            <span className={`text-lg sm:text-xl font-black transition-colors ${isOpen ? "text-orange-600" : "text-black"} mt-1`}>
              {faq.q}
            </span>
          </div>
          <div className={`flex-shrink-0 p-1 border-2 border-black transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "rotate-180 bg-black text-white" : "rotate-0 bg-white text-black"} ml-4`}>
            <ChevronDown className="w-6 h-6" />
          </div>
        </button>
        
        {/* スムーズな開閉アニメーション */}
        <div 
          className={`grid transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-top ${isOpen ? "grid-rows-[1fr] opacity-100 scale-y-100" : "grid-rows-[0fr] opacity-0 scale-y-95 pointer-events-none"}`}
        >
          <div className="overflow-hidden">
            <div className="p-6 pt-0 bg-white border-t-2 border-dashed border-black mt-2">
              <div className="flex items-start gap-4 py-4">
                <span className="font-black text-blue-600 text-3xl -skew-x-12 leading-none mt-1 shrink-0">
                  A.
                </span>
                <p className="font-bold text-slate-800 leading-relaxed text-lg mt-1">
                  {faq.a}
                </p>
              </div>
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

        <div className="space-y-16">
          {faqData.map((categoryData, catIndex) => (
            <div key={catIndex}>
              <ScrollReveal direction="left">
                <h2 className="text-2xl md:text-3xl font-black mb-8 border-b-4 border-black pb-2 inline-block -skew-x-6">
                  {categoryData.category}
                </h2>
              </ScrollReveal>
              <div className="space-y-6">
                {categoryData.items.map((faq, index) => (
                  <AccordionItem key={index} faq={faq} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
