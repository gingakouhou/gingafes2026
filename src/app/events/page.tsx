import { Image as ImageIcon, MapPin, Sparkles } from "lucide-react";

export default function EventsPage() {
  const classEvents = [
    { title: "2-A お化け屋敷 〜星屑の迷宮〜", location: "南棟2階 2A教室", desc: "教室全体を使った本格お化け屋敷。無事に脱出できるか！？" },
    { title: "1-C コスモスカフェ", location: "北棟1階 1C教室", desc: "宇宙をモチーフにしたオリジナルドリンクを提供します。" },
    { title: "3-B 縁日プラネット", location: "中庭", desc: "射的やヨーヨー釣りなど、昔ながらの遊びを宇宙テーマで！" },
  ];

  const clubEvents = [
    { title: "天文部 プラネタリウム喫茶", location: "特別棟3階 物理室", desc: "手作りプラネタリウムと美味しいドリンクで究極の癒やしを。" },
    { title: "美術部 ギャラクシー・アート展", location: "特別棟2階 美術室", desc: "部員たちの渾身の作品を展示。ライブペイントも開催！" },
    { title: "写真部 星空写真展", location: "南棟1階 廊下ギャラリー", desc: "校内外で撮影した美しい星空や風景写真を展示します。" },
  ];

  const stageEvents = [
    { title: "軽音部 ギャラクシーライブ", location: "体育館メインステージ", desc: "最高のバンド演奏をお送りします！一緒に盛り上がろう！" },
    { title: "ダンス部 スターライト・ショー", location: "体育館メインステージ", desc: "息の合った迫力のダンスパフォーマンス！" },
    { title: "生徒会 オープニング＆クロージング", location: "体育館メインステージ", desc: "映像とライブ演出が融合した圧巻のステージ。" },
  ];

  const renderEventCard = (event: typeof classEvents[0], i: number) => (
    <div 
      key={i} 
      className="group flex flex-col rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-2xl transition-all hover:-translate-y-2 hover:bg-white/20 hover:border-white/30"
    >
      {/* プレースホルダー画像部分（美しいグラデーション） */}
      <div className="mb-6 flex aspect-video w-full items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30 text-white transition-opacity group-hover:opacity-80">
        <ImageIcon className="h-12 w-12 opacity-50 drop-shadow-md" />
      </div>
      
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="h-4 w-4 text-indigo-300" />
        <span className="text-xs font-semibold tracking-wider text-indigo-300">
          {event.location}
        </span>
      </div>
      
      <h3 className="mb-3 text-xl font-bold text-slate-100">{event.title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">
        {event.desc}
      </p>
    </div>
  );

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

      <main className="relative z-10 w-full max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center animate-fade-in-up">
          <h1 className="text-4xl font-extrabold tracking-wider md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            Events
          </h1>
          <p className="mt-4 text-sm tracking-widest text-purple-200/80 uppercase">
            企画・発表一覧
          </p>
        </div>

        <div className="space-y-24">
          {/* クラス企画 */}
          <section className="animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            <div className="flex items-center gap-3 mb-8 border-b border-indigo-500/30 pb-4">
              <span className="text-3xl">🌟</span>
              <h2 className="text-2xl font-bold tracking-wider text-slate-100">クラス企画</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classEvents.map((event, i) => renderEventCard(event, i))}
            </div>
          </section>

          {/* 部活動・有志 */}
          <section className="animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
            <div className="flex items-center gap-3 mb-8 border-b border-indigo-500/30 pb-4">
              <span className="text-3xl">🎸</span>
              <h2 className="text-2xl font-bold tracking-wider text-slate-100">部活動・有志企画</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clubEvents.map((event, i) => renderEventCard(event, i))}
            </div>
          </section>

          {/* ステージ */}
          <section className="animate-fade-in-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
            <div className="flex items-center gap-3 mb-8 border-b border-purple-500/30 pb-4">
              <span className="text-3xl">🎤</span>
              <h2 className="text-2xl font-bold tracking-wider text-slate-100">メインステージ (体育館)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stageEvents.map((event, i) => renderEventCard(event, i))}
            </div>
          </section>
        </div>

      </main>
    </div>
  );
}
