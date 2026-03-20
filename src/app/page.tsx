import { ChevronDown, Calendar, MapPin, Image as ImageIcon, ArrowRight } from "lucide-react";
import { getNewsList, getEventsList } from "@/lib/microcms";
import Link from "next/link";

// ISR: 60秒ごとにキャッシュを再検証し、microCMSの更新を反映
export const revalidate = 60;

// 日付を YYYY.MM.DD 形式にフォーマットするヘルパー
function formatDate(dateString: string): string {
  const d = new Date(dateString);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

export default async function Home() {
  // microCMS からお知らせデータを取得
  const newsData = await getNewsList(3);
  const newsList = newsData.contents;

  // microCMS から企画データを取得（3件）
  const eventsData = await getEventsList(3);
  const eventList = eventsData.contents;

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

      {/* コンテンツ領域 */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Hero セクション */}
        <section className="flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center px-4 text-center">
          <p className="mb-4 text-sm font-medium tracking-widest text-indigo-300 animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards] md:text-base">
            2026年 開催決定
          </p>

          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-indigo-200 animate-fade-in-up [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] md:text-7xl lg:text-8xl">
            ぎんが祭 <span className="text-indigo-400">2026</span>
          </h1>

          <p className="mt-2 text-lg font-light tracking-wider text-slate-300 animate-fade-in-up [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards] md:text-2xl drop-shadow-md">
            星のように輝く、僕らの青春
          </p>

          <div className="absolute bottom-12 flex flex-col items-center text-slate-400 animate-fade-in-up [animation-delay:1500ms] opacity-0 [animation-fill-mode:forwards]">
            <span className="mb-2 text-xs font-medium tracking-widest uppercase">Scroll Down</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </section>

        {/* News セクション */}
        <section id="news" className="w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-wider md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              News
            </h2>
            <p className="mt-2 text-sm text-indigo-300/80 tracking-widest">お知らせ</p>
          </div>
          
          <div className="space-y-4">
            {newsList.length > 0 ? (
              newsList.map((news) => (
                <div 
                  key={news.id} 
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-xl transition-all hover:bg-white/20 hover:border-white/30 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 text-indigo-300 whitespace-nowrap">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium tracking-wider">
                      {formatDate(news.publishedAtDate || news.publishedAt || "")}
                    </span>
                  </div>
                  <p className="text-slate-200">{news.title}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-slate-400">現在、お知らせはありません。</p>
            )}
          </div>
        </section>

        {/* Events セクション */}
        <section id="events" className="w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-wider md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Events
            </h2>
            <p className="mt-2 text-sm text-purple-300/80 tracking-widest">企画一覧</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {eventList.length > 0 ? (
              eventList.map((event) => (
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
                      {event.location || event.category || "場所未定"}
                    </span>
                  </div>
                  
                  <h3 className="mb-3 text-xl font-bold text-slate-100">{event.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {event.description || ""}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-slate-400 col-span-3">現在、企画情報を準備中です。</p>
            )}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/events"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/50 bg-indigo-500/10 px-8 py-4 text-sm font-medium tracking-widest text-indigo-300 transition-all hover:bg-indigo-500/20 hover:text-indigo-200 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:-translate-y-1"
            >
              すべての企画を見る
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
