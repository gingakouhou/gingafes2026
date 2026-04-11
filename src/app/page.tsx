import { getNewsList, getEventsList } from "@/lib/microcms";
import HomeClient from "@/components/HomeClient";

// ISR: 60秒ごとにキャッシュを再検証し、microCMSの更新を反映
export const revalidate = 60;

export default async function Home() {
  // microCMS からお知らせデータを取得
  const newsData = await getNewsList(3);
  const newsList = newsData.contents;

  // microCMS から企画データを取得（3件）
  const eventsData = await getEventsList(3);
  const eventList = eventsData.contents;

  return <HomeClient newsList={newsList} eventList={eventList} />;
}
