import { Image as ImageIcon, MapPin } from "lucide-react";
import { getEventsList, type Event } from "@/lib/microcms";

// ISR: 60秒ごとにキャッシュを再検証
export const revalidate = 60;

// カテゴリ設定
const categories = [
  { key: "クラス企画", emoji: "🌟", label: "クラス企画", borderColor: "border-indigo-500/30" },
  { key: "部活動・有志", emoji: "🎸", label: "部活動・有志企画", borderColor: "border-indigo-500/30" },
  { key: "ステージ", emoji: "🎤", label: "メインステージ (体育館)", borderColor: "border-purple-500/30" },
];

function renderEventCard(event: Event) {
  return (
    <div 
      key={event.id} 
      className="group flex flex-col rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-2xl transition-all hover:-translate-y-2 hover:bg-white/20 hover:border-white/30"
    >
      {/* プレースホルダー画像部分（美しいグラデーション） */}
      <div className="mb-6 flex aspect-video w-full items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30 text-white transition-opacity group-hover:opacity-80">
        <ImageIcon className="h-12 w-12 opacity-50 drop-shadow-md" />
      </div>
      
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="h-4 w-4 text-indigo-300" />
        <span className="text-xs font-semibold tracking-wider text-indigo-300">
          {event.location || "場所未定"}
        </span>
      </div>
      
      <h3 className="mb-3 text-xl font-bold text-slate-100">{event.title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">
        {event.description || ""}
      </p>
    </div>
  );
}

export default async function EventsPage() {
  const eventsData = await getEventsList();
  const allEvents = eventsData.contents;

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

        {allEvents.length > 0 ? (
          <div className="space-y-24">
            {(() => {
              // カテゴリ別にフィルタし、該当があるカテゴリのみ表示
              const categorizedSections = categories
                .map((cat, catIdx) => {
                  const filtered = allEvents.filter((e) => e.category === cat.key);
                  if (filtered.length === 0) return null;
                  return (
                    <section 
                      key={cat.key} 
                      className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
                      style={{ animationDelay: `${200 + catIdx * 200}ms` }}
                    >
                      <div className={`flex items-center gap-3 mb-8 border-b ${cat.borderColor} pb-4`}>
                        <span className="text-3xl">{cat.emoji}</span>
                        <h2 className="text-2xl font-bold tracking-wider text-slate-100">{cat.label}</h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map((event) => renderEventCard(event))}
                      </div>
                    </section>
                  );
                })
                .filter(Boolean);

              // カテゴリ別の表示が1つもない場合は、全件を「すべての企画」として表示
              if (categorizedSections.length === 0) {
                return (
                  <section className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "200ms" }}>
                    <div className="flex items-center gap-3 mb-8 border-b border-indigo-500/30 pb-4">
                      <span className="text-3xl">🎪</span>
                      <h2 className="text-2xl font-bold tracking-wider text-slate-100">すべての企画</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {allEvents.map((event) => renderEventCard(event))}
                    </div>
                  </section>
                );
              }

              return categorizedSections;
            })()}
          </div>
        ) : (
          <p className="text-center text-slate-400 text-lg py-12">現在、企画情報を準備中です。</p>
        )}

      </main>
    </div>
  );
}
