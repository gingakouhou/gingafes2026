import { ChevronDown, Calendar, MapPin, Image as ImageIcon, ArrowRight, Zap } from "lucide-react";
import { getNewsList, getEventsList } from "@/lib/microcms";
import Link from "next/link";
import Image from "next/image";

// ISR: 60秒ごとにキャッシュを再検証し、microCMSの更新を反映
export const revalidate = 60;

export default async function Home() {
  // microCMS からお知らせデータを取得
  const newsData = await getNewsList(3);
  const newsList = newsData.contents;

  // microCMS から企画データを取得（3件）
  const eventsData = await getEventsList(3);
  const eventList = eventsData.contents;

  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-[#f8f9fa] text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* 背景パターン: ドット */}
      <div className="fixed inset-0 z-0 bg-dot-pattern opacity-10 pointer-events-none mix-blend-multiply" />

      {/* スラッシュ状の背景装飾 */}
      <div className="fixed top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-32 pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-1/3 h-2/3 bg-orange-600/5 skew-x-12 -translate-x-16 pointer-events-none z-0" />

      <main className="relative z-10 w-full max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        
        {/* --- HERO SECTION --- */}
        <section className="flex flex-col items-center justify-center min-h-[80vh] text-center mb-24 relative px-4">
          <div className="animate-brutal-slide mb-6 relative w-full max-w-4xl flex justify-center">
            {/* 公式ロゴ画像 */}
            <div className="relative w-full max-w-[800px] aspect-[16/10] drop-shadow-[8px_8px_0px_rgba(30,58,138,1)]">
              <Image 
                src="/logo.png" 
                alt="星瞬 -永炎の思い出を駆け抜けろ-" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          <div className="animate-brutal-slide [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards] mt-8 bg-blue-600 text-white px-8 py-3 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] -skew-x-6 transform rotate-2">
            <p className="text-xl md:text-3xl font-black tracking-widest uppercase">
              Matsumoto Arigasaki High School Festival 2026
            </p>
          </div>

          <p className="animate-fade-in-up mt-8 text-lg font-bold text-slate-700 bg-white px-6 py-2 border-2 border-black inline-block -rotate-1 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            テーマソング：「キミシダイ列車」
          </p>

          <a 
            href="#news"
            className="mt-16 animate-fade-in-up group flex flex-col items-center text-blue-800 hover:text-orange-600 transition-colors"
          >
            <span className="text-sm font-black tracking-widest uppercase mb-2">Scroll Down</span>
            <div className="p-3 bg-white border-2 border-current rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:translate-y-1 group-hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </div>
          </a>
        </section>

        {/* --- NEWS SECTION --- */}
        <section id="news" className="py-20">
          <div className="flex items-center gap-4 mb-12 animate-brutal-slide [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
            <Zap className="h-10 w-10 text-orange-600 fill-orange-600" />
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase italic -skew-x-12">
              News
            </h2>
            <div className="h-2 flex-grow bg-black ml-4" />
          </div>

          <div className="grid gap-6">
            {newsList.length > 0 ? (
              newsList.map((news, i) => (
                <div 
                  key={news.id} 
                  className="animate-brutal-slide opacity-0 [animation-fill-mode:forwards] group flex flex-col sm:flex-row items-baseline gap-4 sm:gap-8 rounded-none border-4 border-black bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_currentColor] text-blue-900"
                  style={{ animationDelay: `${200 + i * 100}ms` }}
                >
                  <div className="flex items-center gap-2 sm:w-48 shrink-0 border-b-2 sm:border-b-0 sm:border-r-4 border-black pb-2 sm:pb-0 sm:pr-6 whitespace-nowrap">
                    <Calendar className="h-5 w-5 text-orange-600" />
                    <span className="font-bold text-lg tracking-wider">
                      {new Date(news.publishedAtDate || news.publishedAt!).toLocaleDateString('ja-JP')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-orange-600 transition-colors break-words">
                    {news.title}
                  </h3>
                </div>
              ))
            ) : (
              <div className="bg-white border-4 border-black p-8 text-center shadow-[8px_8px_0px_rgba(0,0,0,1)] font-bold text-lg">
                現在お知らせはありません。
              </div>
            )}
          </div>
        </section>

        {/* --- EVENTS PREVIEW SECTION --- */}
        <section className="py-20 mt-12">
          <div className="flex items-center gap-4 mb-12 animate-brutal-slide [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards] flex-row-reverse">
            <Zap className="h-10 w-10 text-blue-600 fill-blue-600" />
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase italic -skew-x-12">
              Events
            </h2>
            <div className="h-2 flex-grow bg-black mr-4" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {eventList.length > 0 ? (
              eventList.map((event, i) => (
                <div 
                  key={event.id} 
                  className="animate-brutal-slide opacity-0 [animation-fill-mode:forwards] group flex flex-col border-4 border-black bg-white p-6 transition-all hover:-translate-y-2 hover:-rotate-1 hover:shadow-[12px_12px_0px_rgba(234,88,12,1)]"
                  style={{ animationDelay: `${300 + i * 150}ms` }}
                >
                  {/* プレースホルダー画像部分 */}
                  <div className="mb-6 flex aspect-video w-full items-center justify-center border-4 border-black bg-blue-100 text-blue-600">
                    <ImageIcon className="h-12 w-12 opacity-80" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3 bg-orange-100 border-2 border-black inline-flex px-3 py-1 -skew-x-6">
                    <MapPin className="h-4 w-4 text-orange-600 font-black" />
                    <span className="text-sm font-black tracking-wider text-orange-900">
                      {event.location || event.category || "場所未定"}
                    </span>
                  </div>
                  
                  <h3 className="mb-3 text-2xl font-black text-black leading-tight">{event.title}</h3>
                  <p className="text-sm font-bold leading-relaxed text-slate-700 border-t-2 border-dashed border-black pt-3">
                    {event.description || "熱い企画が待っている！"}
                  </p>
                </div>
              ))
            ) : (
              <div className="bg-white border-4 border-black p-8 text-center shadow-[8px_8px_0px_rgba(0,0,0,1)] font-bold text-lg col-span-3">
                現在、企画情報を準備中です。
              </div>
            )}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/events"
              className="inline-flex items-center gap-2 border-4 border-black bg-blue-600 px-8 py-4 text-lg font-black tracking-widest text-white uppercase transition-all hover:bg-orange-600 hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] -skew-x-6"
            >
              <span>すべての企画を見る</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
