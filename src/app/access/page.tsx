import { Train, Bus, AlertTriangle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import MotionCard from "@/components/MotionCard";

export default function AccessPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-[#f8f9fa] text-slate-900 pb-20 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* 背景パターン: ドット */}
      <div className="fixed inset-0 z-0 bg-dot-pattern opacity-10 pointer-events-none mix-blend-multiply" />

      {/* スラッシュ状の背景装飾 */}
      <div className="fixed top-20 left-0 w-1/3 h-full bg-orange-600/5 skew-x-12 -translate-x-32 pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-1/2 h-1/2 bg-blue-600/5 -skew-x-12 translate-x-16 pointer-events-none z-0" />

      <main className="relative z-10 w-full max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8 mt-8">
        
        <ScrollReveal>
          <div className="mb-10 text-center">
            <div className="inline-block bg-blue-600 text-white px-6 py-2 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] skew-x-6 transform -rotate-1">
              <h1 className="text-3xl font-black tracking-widest md:text-4xl uppercase">
                Access
              </h1>
            </div>
            <p className="mt-4 text-base font-bold tracking-widest text-slate-800 uppercase bg-white border-2 border-black inline-block px-4 py-1 shadow-[4px_4px_0px_rgba(0,0,0,1)] rotate-2">
              会場へのアクセス
            </p>
          </div>
        </ScrollReveal>

        {/* Googleマップ */}
        <ScrollReveal delay={0.2}>
          <div className="mb-10 relative flex w-full aspect-video items-center justify-center border-4 border-black bg-blue-100 shadow-[12px_12px_0px_rgba(0,0,0,1)] overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1608.967924736025!2d137.96395867129468!3d36.241052283868164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601d0e813c4eb843%3A0x7fd4c64a8d1a0efa!2z44CSMzkwLTA4NjEg6ZW36YeO55yM5p2-5pys5biC6J-744Kx5bSO77yR5LiB55uu77yR4oiS77yV77yUIOifu-OCseW0jumrmOagoeWQjOeqk-S8mumkqA!5e0!3m2!1sja!2sjp!4v1773991075368!5m2!1sja!2sjp" 
              className="w-full h-full border-0 filter contrast-125 saturate-150 relative z-10" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* 装飾用テープ */}
            <div className="absolute -top-4 -left-12 w-32 h-8 bg-orange-600 opacity-80 -rotate-45 z-20"></div>
            <div className="absolute -bottom-4 -right-12 w-32 h-8 bg-blue-600 opacity-80 -rotate-45 z-20"></div>
          </div>
        </ScrollReveal>

        {/* 交通機関案内 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* 電車 */}
          <ScrollReveal delay={0.3} direction="left">
            <MotionCard
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-4 border-black bg-white p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] cursor-pointer h-full"
              hoverColor="rgba(37,99,235,1)"
            >
              <div className="flex-shrink-0 bg-blue-100 border-4 border-black p-4 -skew-x-6 rotate-3">
                <Train className="w-8 h-8 text-blue-700" />
              </div>
              <div className="text-center sm:text-left mt-4 sm:mt-0">
                <h3 className="text-xl sm:text-2xl font-black text-black mb-2 uppercase">電車をご利用の場合</h3>
                <p className="text-slate-800 font-bold leading-relaxed">
                  JR東日本・アルピコ交通「松本駅」<br />
                  東口より徒歩約<span className="text-blue-600 text-xl font-black">20</span>分
                </p>
              </div>
            </MotionCard>
          </ScrollReveal>

          {/* バス */}
          <ScrollReveal delay={0.4} direction="right">
            <MotionCard
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-4 border-black bg-white p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] cursor-pointer h-full"
              hoverColor="rgba(234,88,12,1)"
            >
              <div className="flex-shrink-0 bg-orange-100 border-4 border-black p-4 -skew-x-6 -rotate-3">
                <Bus className="w-8 h-8 text-orange-700" />
              </div>
              <div className="text-center sm:text-left mt-4 sm:mt-0">
                <h3 className="text-xl sm:text-2xl font-black text-black mb-2 uppercase">バスをご利用の場合</h3>
                <p className="text-slate-800 font-bold leading-relaxed">
                  「蟻ヶ崎高校前」バス停 下車すぐ
                </p>
              </div>
            </MotionCard>
          </ScrollReveal>
        </div>

        {/* 注意事項 */}
        <ScrollReveal delay={0.5}>
          <section className="relative flex flex-col sm:flex-row items-center gap-6 border-4 border-black bg-orange-500 p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] overflow-hidden">
            {/* しましま背景装飾 */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}></div>
            
            <div className="relative z-10 bg-white border-4 border-black p-3 -rotate-6">
              <AlertTriangle className="w-10 h-10 text-orange-600" />
            </div>
            <div className="relative z-10 text-center sm:text-left">
              <h4 className="text-2xl font-black text-white tracking-widest mb-2 shadow-black drop-shadow-md">
                駐車場に関するご注意
              </h4>
              <p className="text-white font-bold text-lg drop-shadow-md">
                当日は高校周辺の駐車場が混雑することが予想されます。お越しの際は、なるべく<u className="decoration-black decoration-4 underline-offset-4">公共交通機関をご利用ください</u>。
              </p>
            </div>
          </section>
        </ScrollReveal>

      </main>
    </div>
  );
}
