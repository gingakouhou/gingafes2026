import { Clock, MapPin, Sparkles } from "lucide-react";

export default function SchedulePage() {
  const scheduleData = [
    { time: "09:00", title: "開会式", location: "体育館", type: "event" },
    { time: "10:00", title: "クラス企画・模擬店 オープン", location: "各教室・中庭", type: "class" },
    { time: "12:00", title: "軽音部 ギャラクシーライブ", location: "体育館", type: "stage" },
    { time: "14:30", title: "有志ダンス発表", location: "中庭特設ステージ", type: "stage" },
    { time: "16:00", title: "閉会式・フィナーレ", location: "グラウンド", type: "event" },
  ];

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
          <h1 className="text-4xl font-extrabold tracking-wider md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-indigo-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            Schedule
          </h1>
          <p className="mt-4 text-sm tracking-widest text-indigo-200/80 uppercase">
            タイムテーブル
          </p>
        </div>

        {/* タイムラインコンテナ */}
        <div className="relative wrap overflow-hidden p-4 h-full">
          {/* 中央（または左寄り）の縦線 */}
          <div className="absolute border-opacity-20 border-white h-full border-l-2 left-6 md:left-1/2 md:-ml-[1px]"></div>

          {scheduleData.map((item, index) => {
            // PC版では左右交互に配置するためのフラグ
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`mb-12 flex justify-between items-center w-full animate-fade-in-up opacity-0 [animation-fill-mode:forwards]
                  ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}
                  flex-row-reverse
                `}
                style={{ animationDelay: `${200 + index * 150}ms` }}
              >
                {/* PC時の余白調整（スマホ時は非表示） */}
                <div className="hidden md:block w-5/12"></div>

                {/* タイムライン上のポイント（星アイコン） */}
                <div className="z-20 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-indigo-900 rounded-full shadow-[0_0_15px_rgba(129,140,248,0.6)] border-2 border-indigo-400">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-indigo-200" />
                </div>

                {/* スケジュールカード (グラスモーフィズム) */}
                <div className="w-[calc(100%-3rem)] md:w-5/12 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-xl transition-all hover:bg-white/20 hover:border-white/30 hover:-translate-y-1">
                  
                  {/* 時間 */}
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-indigo-300" />
                    <span className="text-2xl font-black tracking-widest text-indigo-100 drop-shadow-[0_0_8px_rgba(165,180,252,0.5)]">
                      {item.time}
                    </span>
                  </div>
                  
                  {/* アロー付きのタイトル */}
                  <h3 className="text-xl font-bold text-slate-100 mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* 場所 */}
                  <div className="flex items-center gap-2 text-slate-300 bg-black/20 rounded-full px-3 py-1.5 w-fit border border-white/5">
                    <MapPin className="w-4 h-4 text-purple-300" />
                    <span className="text-sm tracking-wider font-medium">{item.location}</span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </main>
    </div>
  );
}
