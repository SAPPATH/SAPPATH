export const metadata = {
  title: "SAPPATH CAFE",
  description: "ラオスの香りを日常に。フェアトレードコーヒーを、手軽におしゃれに。",
  openGraph: { title: "SAPPATH", type: "website" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <header className="fixed inset-x-0 top-0 z-50 bg-white/60 backdrop-blur border-b">
          <div className="container flex h-14 items-center justify-between">
            <div className="font-semibold tracking-wide">EFLAO CAFE</div>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#about">About</a>
              <a href="#menu">Menu</a>
              <a href="#gallery">Gallery</a>
              <a href="#access">Access</a>
              <a href="#reserve" className="rounded-full bg-coffee-900 text-white px-3 py-1">Reserve</a>
            </nav>
          </div>
        </header>
        <main className="pt-14">{children}</main>
        <footer className="border-t mt-24">
          <div className="container py-10 text-sm flex flex-col md:flex-row gap-3 md:items-center justify-between">
            <p>© {new Date().getFullYear()} EFLAO CAFE</p>
            <p className="text-coffee-500">Fair trade coffee & sweets / Tokyo</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
