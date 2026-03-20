import { MapPin, Train, Bus, AlertTriangle } from "lucide-react";

export default function AccessPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      {/* 常に背面にある星空・オーロラエフェクト (fixed) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 mix-blend-screen blur-[120px] max-md:h-[300px] max-md:w-[300px]" />
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

      {/* コンテンツ領域 */}
      <main className="relative z-10 w-full max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center animate-fade-in-up">
          <h1 className="text-4xl font-extrabold tracking-wider md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            Access
          </h1>
          <p className="mt-4 text-sm tracking-widest text-indigo-200/80 uppercase">
            会場へのアクセス
          </p>
        </div>

        {/* マッププレースホルダー */}
        <section className="mb-12 animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          <div className="relative flex w-full aspect-video items-center justify-center rounded-3xl border border-white/20 bg-gradient-to-br from-indigo-900/50 to-slate-900/50 backdrop-blur-md shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-white/5 mix-blend-overlay"></div>
            <div className="flex flex-col items-center gap-4 text-indigo-300">
              <MapPin className="w-12 h-12 opacity-80 animate-bounce" />
              <span className="text-lg font-medium tracking-widest drop-shadow-md">
                Google Map 準備中
              </span>
            </div>
          </div>
        </section>

        {/* 交通機関案内 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* 電車 */}
          <section className="flex items-start gap-4 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-8 shadow-xl transition-all hover:bg-white/20 hover:border-white/30 hover:-translate-y-1 animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
            <div className="rounded-full flex-shrink-0 bg-white/10 p-4 shadow-inner">
              <Train className="w-8 h-8 text-indigo-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">電車をご利用の場合</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                JR銀河線「スターライト駅」下車<br />
                東口より徒歩約15分
              </p>
            </div>
          </section>

          {/* バス */}
          <section className="flex items-start gap-4 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-8 shadow-xl transition-all hover:bg-white/20 hover:border-white/30 hover:-translate-y-1 animate-fade-in-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
            <div className="rounded-full flex-shrink-0 bg-white/10 p-4 shadow-inner">
              <Bus className="w-8 h-8 text-purple-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">バスをご利用の場合</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                市営バス 宇宙循環線<br />
                「〇〇高校前」バス停下車すぐ
              </p>
            </div>
          </section>
        </div>

        {/* 注意事項 */}
        <section className="flex items-start sm:items-center gap-4 rounded-2xl border border-rose-500/40 bg-rose-500/10 backdrop-blur-md p-6 shadow-xl animate-fade-in-up [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards]">
          <AlertTriangle className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1 sm:mt-0" />
          <p className="text-rose-200 text-sm md:text-base font-medium">
            <span className="font-bold">※ ご注意</span><br className="sm:hidden" />
            当日は学校の駐車場をご利用いただけません。お越しの際は、公共交通機関をご利用ください。
          </p>
        </section>

      </main>
    </div>
  );
}
