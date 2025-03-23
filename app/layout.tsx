import type { Metadata } from "next";
import { pretendard } from './fonts';
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export const metadata: Metadata = {
  title: "Lettube - 저렴하게 즐기는 유튜브 프리미엄",
  description: "안전하고 합리적인 가격으로 유튜브 프리미엄을 이용하세요. 최대 70% 할인된 가격으로 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
