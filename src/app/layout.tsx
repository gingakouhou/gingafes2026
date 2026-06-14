import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";
import { GoogleAnalytics } from "@next/third-parties/google";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gingafes.vercel.app"),
  title: {
    default: "松本蟻ヶ崎高校 第78回ぎんが祭 | 星瞬 -永炎の思い出を駆け抜けろ-",
    template: "%s | 第78回ぎんが祭",
  },
  description: "長野県松本蟻ヶ崎高校の第78回文化祭「ぎんが祭」の公式特設サイトです。スローガンは「星瞬 -永炎の思い出を駆け抜けろ-」。日程、タイムテーブル、企画一覧、アクセス情報などを掲載しています。",
  keywords: ["松本蟻ヶ崎高校", "ぎんが祭", "文化祭", "長野県", "高校", "2026", "第78回"],
  openGraph: {
    title: "松本蟻ヶ崎高校 第78回ぎんが祭 | 星瞬 -永炎の思い出を駆け抜けろ-",
    description: "長野県松本蟻ヶ崎高校の第78回文化祭「ぎんが祭」の公式特設サイトです。スローガンは「星瞬 -永炎の思い出を駆け抜けろ-」。日程、タイムテーブル、企画一覧、アクセス情報などを掲載しています。",
    url: "https://gingafes.vercel.app",
    siteName: "第78回ぎんが祭 特設サイト",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "松本蟻ヶ崎高校 第78回ぎんが祭 | 星瞬 -永炎の思い出を駆け抜けろ-",
    description: "長野県松本蟻ヶ崎高校の第78回文化祭「ぎんが祭」の公式特設サイトです。スローガンは「星瞬 -永炎の思い出を駆け抜けろ-」。日程、タイムテーブル、企画一覧、アクセス情報などを掲載しています。",
  },
  verification: {
    google: "ey1ZNwTmTnt2Lct6QATXeaBt11aDR4bz0k1L3cd7WvE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} flex min-h-screen flex-col bg-[#f8f9fa] text-slate-900 antialiased selection:bg-blue-600 selection:text-white`}
      >
        <ClientLayout>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientLayout>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
