import { Calendar, MapPin, Image as ImageIcon, ArrowRight, Zap } from "lucide-react";
import { getNewsList, getEventsList } from "@/lib/microcms";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import MotionCard from "@/components/MotionCard";
import HeroSection from "@/components/HeroSection";

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
      {/* 紙のテクスチャ（手作りポスターの質感） */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none opacity-40 mix-blend-multiply"
        style={{ backgroundImage: "url('/paper-texture.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      />

      {/* 背景パターン: ドット */}
      <div className="fixed inset-0 z-0 bg-dot-pattern opacity-[0.05] pointer-events-none mix-blend-multiply" />

      {/* スラッシュ状の背景装飾 */}
      <div className="fixed top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-32 pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-1/3 h-2/3 bg-orange-600/5 skew-x-12 -translate-x-16 pointer-events-none z-0" />

      <main className="relative z-10 w-full max-w-6xl px-4 pt-32 pb-8 mx-auto sm:px-6 lg:px-8">

        {/* --- HERO SECTION --- */}
        <HeroSection />

        {/* --- NEWS SECTION --- */}
        <section id="news" className="py-20">
          <ScrollReveal direction="left">
            <div className="flex items-center gap-4 mb-12">
              <Zap className="h-10 w-10 text-orange-600 fill-orange-600" />
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase italic -skew-x-12">
                News
              </h2>
              <div className="h-2 flex-grow bg-black ml-4" />
            </div>
          </ScrollReveal>

          <div className="grid gap-6">
            {newsList.length > 0 ? (
              newsList.map((news, i) => (
                <ScrollReveal key={news.id} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                  <MotionCard
                    className="group flex flex-col sm:flex-row items-baseline gap-4 sm:gap-8 rounded-none border-4 border-black bg-white p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] text-blue-900 cursor-pointer"
                    hoverColor="rgba(37,99,235,1)"
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
                  </MotionCard>
                </ScrollReveal>
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
          <ScrollReveal direction="right">
            <div className="flex items-center gap-4 mb-12 flex-row-reverse">
              <Zap className="h-10 w-10 text-blue-600 fill-blue-600" />
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase italic -skew-x-12">
                Events
              </h2>
              <div className="h-2 flex-grow bg-black mr-4" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {eventList.length > 0 ? (
              eventList.map((event, i) => (
                <ScrollReveal key={event.id} delay={i * 0.12}>
                  <MotionCard
                    className="group flex flex-col border-4 border-black bg-white p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] cursor-pointer"
                    hoverColor="rgba(234,88,12,1)"
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
              ))
            ) : (
              <div className="bg-white border-4 border-black p-8 text-center shadow-[8px_8px_0px_rgba(0,0,0,1)] font-bold text-lg col-span-3">
                現在、企画情報を準備中です。
              </div>
            )}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 text-center">
              <MotionCard
                className="inline-flex items-center gap-2 border-4 border-black bg-blue-600 px-8 py-4 text-lg font-black tracking-widest text-white uppercase shadow-[6px_6px_0px_rgba(0,0,0,1)] -skew-x-6 cursor-pointer"
                hoverColor="rgba(234,88,12,1)"
              >
                <Link href="/events" className="flex items-center gap-2">
                  <span>すべての企画を見る</span>
                  <ArrowRight className="h-6 w-6" />
                </Link>
              </MotionCard>
            </div>
          </ScrollReveal>
        </section>

      </main>
    </div>
  );
}
