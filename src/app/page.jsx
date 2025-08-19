// src/app/page.jsx
export default function Home() {
  const gallery = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="relative h-[72vh] w-full">
        <img
          src="/images/hero.jpg"
          alt="EFLAO CAFE"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide">EFLAO CAFE</h1>
            <p className="mt-4 text-sm md:text-base opacity-90">
              ラオスの香りを日常に。フェアトレードの豆と、やさしいおやつ。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
        <p className="mt-4 leading-7 text-zinc-600">
          エフラオは、ラオスの小規模農家さんとつながるフェアトレード・カフェです。
          季節のコーヒーと手づくりのスイーツを、やさしい価格で。
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`gallery ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} EFLAO CAFE
      </footer>
    </main>
  );
}
