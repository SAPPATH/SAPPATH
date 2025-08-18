export const metadata = {
  title: "SAPPATH CAFE",
  description: "フェアトレードのラオスコーヒーと、やさしいおやつのカフェ。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head />
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
