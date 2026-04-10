import { Image as ImageIcon, MapPin } from "lucide-react";
import { getEventsList, type Event } from "@/lib/microcms";
import ScrollReveal from "@/components/ScrollReveal";
import MotionCard from "@/components/MotionCard";

// ISR: 60秒ごとにキャッシュを再検証
export const revalidate = 60;

// カテゴリ設定
const categories = [
  { key: "クラス企画", emoji: "🌟", label: "クラス企画", borderColor: "border-black" },
  { key: "部活動・有志", emoji: "🎸", label: "部活動・有志企画", borderColor: "border-black" },
  { key: "ステージ", emoji: "🎤", label: "メインステージ (体育館)", borderColor: "border-black" },
];

function renderEventCard(event: Event) {
  return (
    <ScrollReveal key={event.id}>
      <MotionCard
        className="group flex flex-col h-full border-4 border-black bg-white p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] cursor-pointer"
        hoverColor="rgba(37,99,235,1)"
      >
        {/* プレースホルダー画像部分 */}
        <div className="mb-6 flex aspect-video w-full items-center justify-center border-4 border-black bg-blue-100 text-blue-600 transition-colors group-hover:bg-orange-100 group-hover:text-orange-600">
          <ImageIcon className="h-12 w-12 opacity-80" />
        </div>
        
        <div className="flex items-center gap-2 mb-3 bg-orange-100 border-2 border-black px-3 py-1 -skew-x-6 w-fit">
          <MapPin className="h-4 w-4 text-orange-600 font-black" />
          <span className="text-sm font-black tracking-wider text-orange-900">
            {event.location || event.category || "場所未定"}
          </span>
        </div>
        
        <h3 className="mb-3 text-2xl font-black text-black leading-tight group-hover:text-blue-700 transition-colors">{event.title}</h3>
        <p className="text-sm font-bold leading-relaxed text-slate-700 border-t-2 border-dashed border-black pt-3">
          {event.description || "熱い企画が待っている！"}
        </p>
      </MotionCard>
    </ScrollReveal>
  );
}

export default async function EventsPage() {
  const eventsData = await getEventsList();
  const allEvents = eventsData.contents;

  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-[#f8f9fa] text-slate-900 pb-20 overflow-x-hidden selection:bg-orange-600 selection:text-white">
      {/* 背景パターン: ドット */}
      <div className="fixed inset-0 z-0 bg-dot-pattern opacity-10 pointer-events-none mix-blend-multiply" />

      {/* スラッシュ状の背景装飾 */}
      <div className="fixed top-20 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-32 pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-1/2 h-1/2 bg-orange-600/5 skew-x-12 -translate-x-16 pointer-events-none z-0" />

      <main className="relative z-10 w-full max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8 mt-8">
        
        <ScrollReveal>
          <div className="mb-16 text-center">
            <div className="inline-block bg-blue-600 text-white px-8 py-3 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] -skew-x-6 transform -rotate-2">
              <h1 className="text-4xl font-black tracking-widest md:text-5xl uppercase">
                Events
              </h1>
            </div>
            <p className="mt-6 text-lg font-bold tracking-widest text-slate-800 uppercase bg-white border-2 border-black inline-block px-4 py-1 shadow-[4px_4px_0px_rgba(0,0,0,1)] rotate-1">
              企画・発表一覧
            </p>
          </div>
        </ScrollReveal>

        {allEvents.length > 0 ? (
          <div className="space-y-24">
            {(() => {
              const categorizedSections = categories
                .map((cat) => {
                  const filtered = allEvents.filter((e) => e.category === cat.key);
                  if (filtered.length === 0) return null;
                  return (
                    <section key={cat.key}>
                      <ScrollReveal delay={0.1} direction="left">
                        <div className={`flex items-center gap-4 mb-10 border-b-4 ${cat.borderColor} pb-4`}>
                          <span className="text-4xl bg-white border-4 border-black p-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] -skew-x-6">{cat.emoji}</span>
                          <h2 className="text-3xl font-black tracking-tighter text-black uppercase italic -skew-x-12">{cat.label}</h2>
                        </div>
                      </ScrollReveal>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map((event) => renderEventCard(event))}
                      </div>
                    </section>
                  );
                })
                .filter(Boolean);

              if (categorizedSections.length === 0) {
                return (
                  <section>
                    <ScrollReveal delay={0.1} direction="left">
                      <div className="flex items-center gap-4 mb-10 border-b-4 border-black pb-4">
                        <span className="text-4xl bg-white border-4 border-black p-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] -skew-x-6">🎪</span>
                        <h2 className="text-3xl font-black tracking-tighter text-black uppercase italic -skew-x-12">すべての企画</h2>
                      </div>
                    </ScrollReveal>
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
          <div className="bg-white border-4 border-black p-8 text-center shadow-[8px_8px_0px_rgba(0,0,0,1)] font-bold text-lg max-w-2xl mx-auto">
            現在、企画情報を準備中です。
          </div>
        )}

      </main>
    </div>
  );
}
