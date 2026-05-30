import { createClient } from "microcms-js-sdk";
import type { MicroCMSListContent, MicroCMSListResponse } from "microcms-js-sdk";

// microCMS クライアント初期化
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

// お知らせの型定義
export type News = {
  title: string;
  content?: string;
  publishedAtDate?: string;
} & MicroCMSListContent;

// お知らせ一覧を取得する関数
export async function getNewsList(limit: number = 3): Promise<MicroCMSListResponse<News>> {
  try {
    const data = await client.getList<News>({
      endpoint: "news",
      queries: {
        limit,
        orders: "-publishedAt",
      },
    });
    return data;
  } catch (error) {
    console.error("microCMS からのデータ取得に失敗しました:", error);
    // エラー時は空の結果を返してサイトが落ちないようにする
    return {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit,
    };
  }
}

export type Event = {
  title: string;
  category?: string;
  location?: string;
  description?: string;
  image?: { url: string; width: number; height: number; };
} & MicroCMSListContent;

// 企画一覧を取得する関数
export async function getEventsList(limit: number = 50): Promise<MicroCMSListResponse<Event>> {
  try {
    const data = await client.getList<Event>({
      endpoint: "events",
      queries: {
        limit,
      },
    });
    return data;
  } catch (error) {
    console.error("microCMS からの企画データ取得に失敗しました:", error);
    return {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit,
    };
  }
}
