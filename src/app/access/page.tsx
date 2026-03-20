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
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1608.967924736025!2d137.96395867129468!3d36.241052283868164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601d0e813c4eb843%3A0x7fd4c64a8d1a0efa!2z44CSMzkwLTA4NjEg6ZW36YeO55yM5p2-5pys5biC6J-744Kx5bSO77yR5LiB55uu77yR4oiS77yV77yUIOifu-OCseW0jumrmOagoeWQjOeqk-S8mumkqA!5e0!3m2!1sja!2sjp!4v1773991075368!5m2!1sja!2sjp" 
              className="w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
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
                JR東日本・アルピコ交通「松本駅」<br />
                東口より徒歩約20分
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
                「蟻ヶ崎高校前」バス停下車すぐ
              </p>
            </div>
          </section>
        </div>

        {/* 注意事項 */}
        <section className="flex items-start sm:items-center gap-4 rounded-2xl border border-rose-500/40 bg-rose-500/10 backdrop-blur-md p-6 shadow-xl animate-fade-in-up [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards]">
          <AlertTriangle className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1 sm:mt-0" />
          <p className="text-rose-200 text-sm md:text-base font-medium">
            <span className="font-bold">※ ご注意</span><br className="sm:hidden" />
            当日は高校周辺の駐車場が混雑することが予想されます。お越しの際は、なるべく公共交通機関をご利用ください。
          </p>
        </section>

      </main>
    </div>
  );
}
