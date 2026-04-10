import { Clock, MapPin, Sparkles, Zap } from "lucide-react";

export default function SchedulePage() {
  const scheduleData = [
    { time: "09:00", title: "開会式", location: "体育館", type: "event" },
    { time: "10:00", title: "クラス企画・模擬店 オープン", location: "各教室・中庭", type: "class" },
    { time: "12:00", title: "軽音部 ギャラクシーライブ", location: "体育館", type: "stage" },
    { time: "14:30", title: "有志ダンス発表", location: "中庭特設ステージ", type: "stage" },
    { time: "16:00", title: "閉会式・フィナーレ", location: "グラウンド", type: "event" },
  ];

  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-[#f8f9fa] text-slate-900 pb-20 overflow-x-hidden selection:bg-orange-600 selection:text-white">
      {/* 背景パターン: ドット */}
      <div className="fixed inset-0 z-0 bg-dot-pattern opacity-10 pointer-events-none mix-blend-multiply" />

      {/* スラッシュ状の背景装飾 */}
      <div className="fixed top-20 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-32 pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-1/2 h-1/2 bg-orange-600/5 skew-x-12 -translate-x-16 pointer-events-none z-0" />

      <main className="relative z-10 w-full max-w-4xl px-4 py-16 mx-auto sm:px-6 lg:px-8 mt-8">
        
        <div className="mb-16 text-center animate-brutal-slide">
           <div className="inline-block bg-orange-600 text-white px-8 py-3 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] -skew-x-6 transform 2">
            <h1 className="text-4xl font-black tracking-widest md:text-5xl uppercase">
              Schedule
            </h1>
          </div>
          <p className="mt-6 text-lg font-bold tracking-widest text-slate-800 uppercase bg-white border-2 border-black inline-block px-4 py-1 shadow-[4px_4px_0px_rgba(0,0,0,1)] -rotate-2">
            タイムテーブル
          </p>
        </div>

        {/* タイムラインコンテナ */}
        <div className="relative wrap overflow-hidden p-4 h-full">
          {/* 中央（または左寄り）の太い縦線 */}
          <div className="absolute border-opacity-100 border-black h-full border-l-8 left-6 md:left-1/2 md:-ml-[4px] z-0"></div>

          {scheduleData.map((item, index) => {
            // PC版では左右交互に配置するためのフラグ
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`mb-16 flex justify-between items-center w-full animate-brutal-slide opacity-0 [animation-fill-mode:forwards]
                  ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}
                  flex-row-reverse relative z-10
                `}
                style={{ animationDelay: `${200 + index * 150}ms` }}
              >
                {/* PC時の余白調整（スマホ時は非表示） */}
                <div className="hidden md:block w-5/12"></div>

                {/* タイムライン上のポイント */}
                <div className="z-20 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-blue-600 shadow-[4px_4px_0px_rgba(0,0,0,1)] border-4 border-black -skew-x-12 rotate-3">
                  <Zap className="w-5 h-5 md:w-8 md:h-8 text-white fill-white" />
                </div>

                {/* スケジュールカード (ネオブルータリズム) */}
                <div className="w-[calc(100%-4rem)] md:w-5/12 border-4 border-black bg-white p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all hover:border-orange-600 hover:shadow-[12px_12px_0px_rgba(234,88,12,1)] hover:-translate-y-2 hover:-rotate-1 relative">
                  
                  {/* アメコミ風の時間バッジ */}
                  <div className="absolute -top-5 -left-2 bg-black text-white px-3 py-1 font-black text-xl md:text-2xl -skew-x-12 transform -rotate-3 border-4 border-white shadow-[4px_4px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{item.time}</span>
                  </div>
                  
                  {/* アロー付きのタイトル */}
                  <h3 className="text-xl md:text-2xl font-black text-black mb-3 leading-snug mt-6 hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>

                  {/* 場所 */}
                  <div className="flex items-center gap-2 text-blue-900 bg-blue-100 border-2 border-black px-3 py-1.5 w-fit -skew-x-6">
                    <MapPin className="w-4 h-4 font-black" />
                    <span className="text-sm tracking-wider font-black">{item.location}</span>
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
