// src/app/layout.jsx
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "SAPPATH CAFE",
  description:
    "ラオスの香りを日常に。ダイレクトトレードのラオスコーヒーと、学生が集うカフェ。",
  icons: { icon: "/favicon.ico" },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-white text-zinc-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
