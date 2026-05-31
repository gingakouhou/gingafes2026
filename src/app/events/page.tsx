import { getEventsList } from "@/lib/microcms";
import ScrollReveal from "@/components/ScrollReveal";
import EventFilter from "@/components/EventFilter";

// ISR: 60秒ごとにキャッシュを再検証
export const revalidate = 60;



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

        <EventFilter allEvents={allEvents} />

      </main>
    </div>
  );
}
