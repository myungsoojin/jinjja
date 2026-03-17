import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "진짜 | 진짜만 알려줌",
  description: "관광 가이드가 안 알려주는 진짜 한국. 상황별 여행/맛집/놀거리 큐레이션.",
  keywords: "한국여행, 맛집, 데이트, 서울, 상황별 추천",
  openGraph: {
    title: "진짜 | 진짜만 알려줌",
    description: "관광 가이드가 안 알려주는 진짜 한국",
    url: "https://jinjja.com",
    siteName: "진짜",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col bg-white text-black">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
