import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden">
      {/* オーロラ・星雲風のエフェクト（背景） */}
      <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 mix-blend-screen blur-[120px] max-md:h-[300px] max-md:w-[300px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] translate-x-1/4 translate-y-1/4 rounded-full bg-purple-600/10 mix-blend-screen blur-[120px] max-md:h-[300px] max-md:w-[300px]" />

      {/* 無数の星（疑似的表現） */}
      <div className="absolute inset-0 z-0">
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

      {/* Hero コンテンツ */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <p className="mb-4 text-sm font-medium tracking-widest text-indigo-300 animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards] md:text-base">
          2026年 開催決定
        </p>

        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-indigo-200 animate-fade-in-up [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] md:text-7xl lg:text-8xl">
          ぎんが祭 <span className="text-indigo-400">2026</span>
        </h1>

        <p className="mt-2 text-lg font-light tracking-wider text-slate-300 animate-fade-in-up [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards] md:text-2xl drop-shadow-md">
          星のように輝く、僕らの青春
        </p>
      </div>

      {/* 下部スクロール案内 */}
      <div className="absolute bottom-12 flex flex-col items-center text-slate-400 animate-fade-in-up [animation-delay:1500ms] opacity-0 [animation-fill-mode:forwards]">
        <span className="mb-2 text-xs font-medium tracking-widest uppercase">Scroll Down</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </div>
    </div>
  );
}
