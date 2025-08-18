// src/app/page.jsx
import Link from "next/link";
import { copy, links } from "../content/cafe";

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
);

const Section = ({ id, title, desc, children }) => (
  <section id={id} className="py-16">
    <Container>
      <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
      {desc && <p className="mt-2 text-zinc-600">{desc}</p>}
      <div className="mt-8">{children}</div>
    </Container>
  </section>
);

export default function Page() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <Container className="h-14 flex items-center justify-between">
          <Link href="/" className="font-bold tracking-wide">
            {copy.name}
          </Link>
          <nav className="text-sm hidden sm:flex gap-6">
            <a href="#menu" className="hover:underline">メニュー</a>
            <a href="#hours" className="hover:underline">営業時間</a>
            <a href="#access" className="hover:underline">アクセス</a>
            <a
              href="#reserve"
              className="inline-flex items-center rounded-full bg-zinc-900 text-white px-3 py-1.5"
            >
              予約・お問い合わせ
            </a>
          </nav>
        </Container>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-white to-emerald-100" />
        <Container className="relative py-20 sm:py-28">
          <h1 className="text-4xl sm:text-5xl font-extrabold">{copy.heroTitle}</h1>
          <p className="mt-4 text-lg text-zinc-700">{copy.heroLead}</p>
          <div className="mt-8 flex gap-3">
            <a href="#menu" className="rounded-md bg-zinc-900 text-white px-5 py-2">
              メニューを見る
            </a>
            <a href="#reserve" className="rounded-md border px-5 py-2">
              予約する
            </a>
          </div>
        </Container>
      </section>

      {/* About / Bullets */}
      <Section title="EFLAO CAFE について">
        <ul className="grid sm:grid-cols-3 gap-4">
          {copy.introBullets.map((t, i) => (
            <li key={i} className="rounded-xl border p-4 bg-white">
              {t}
            </li>
          ))}
        </ul>
      </Section>

      {/* Menu */}
      <Section id="menu" title="おすすめメニュー">
        <ul className="grid sm:grid-cols-3 gap-5">
          {copy.menuHighlights.map((m, i) => (
            <li key={i} className="rounded-2xl border bg-white p-5">
              <div className="text-base font-semibold">{m.name}</div>
              <div className="text-sm text-zinc-500 mt-1">{m.desc}</div>
              <div className="mt-3 font-mono">{m.price}</div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Hours */}
      <Section id="hours" title="営業時間">
        <dl className="grid sm:grid-cols-3 gap-4">
          {copy.hours.map((h, i) => (
            <div key={i} className="rounded-xl border bg-white p-4">
              <dt className="text-sm text-zinc-500">{h.label}</dt>
              <dd className="font-medium mt-1">{h.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Access */}
      <Section id="access" title="アクセス" desc={copy.address}>
        <div className="rounded-2xl overflow-hidden border bg-zinc-100 aspect-[16/9] flex items-center justify-center text-zinc-500">
          地図は後で埋め込み
        </div>
      </Section>

      {/* Reserve */}
      <Section id="reserve" title="予約・お問い合わせ">
        <div className="rounded-2xl border bg-white p-6">
          <p className="text-zinc-700">
            お席のご予約や貸切のご相談は、SNSのDMまたはメールで承ります。
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a href={links.instagram} className="rounded-md border px-4 py-2">Instagram</a>
            <a href={links.x} className="rounded-md border px-4 py-2">X（旧Twitter）</a>
            <a href={links.email} className="rounded-md border px-4 py-2">メール</a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <Container className="py-10 text-sm text-zinc-500">
          <div>{copy.name} — {copy.tel}</div>
          <div className="mt-2">© {new Date().getFullYear()} EFLAO CAFE</div>
        </Container>
      </footer>
    </>
  );
}
