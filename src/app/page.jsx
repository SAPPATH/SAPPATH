import { data } from "../data/cafe";

function Hero() {
  const { hero } = data;
  return (
    <section className="relative">
      <picture>
        <img
          src={hero.image}
          alt={hero.alt}
          className="h-[70svh] w-full object-cover select-none"
          loading="eager"
        />
      </picture>
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 flex items-center">
        <div className="container text-white">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">{hero.title}</h1>
          <p className="mt-4 max-w-xl text-white/90">{hero.subtitle}</p>
          <a href="#reserve" className="mt-8 inline-block rounded-full bg-white/90 text-coffee-900 px-5 py-2 hover:bg-white">
            ご予約はこちら
          </a>
        </div>
      </div>
    </section>
  );
}

function Section({ id, title, children, wide }) {
  return (
    <section id={id} className={`${wide ? "" : "container"} py-16 md:py-24`}>
      {title && <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">{title}</h2>}
      {children}
    </section>
  );
}

function About() {
  const { about, hours, bullets } = data;
  return (
    <Section id="about" title="About">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img src={about.image} alt={about.alt} className="rounded-2xl w-full object-cover aspect-[4/3]" loading="lazy" />
        <div>
          <p className="leading-8">{about.text}</p>
          <ul className="mt-6 space-y-2 text-sm text-coffee-600 list-disc pl-5">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <div className="mt-6 text-sm">
            <p className="font-medium">営業時間</p>
            <ul className="text-coffee-600">
              {hours.map((h, i) => <li key={i}>{h.label}：{h.value}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function MenuTeaser() {
  const { menu } = data;
  return (
    <Section id="menu" title="Menu">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu.map((m, i) => (
          <article key={i} className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
            <img src={m.image} alt={m.name} className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <div className="p-4">
              <h3 className="font-medium">{m.name}</h3>
              <p className="text-sm text-coffee-600 mt-1">{m.desc}</p>
              <p className="mt-2 text-sm font-semibold">¥{m.price.toLocaleString()}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Gallery() {
  const { gallery } = data;
  return (
    <Section id="gallery" title="Gallery" wide>
      <div className="container">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {gallery.map((src, i) => (
            <img key={i} src={src} alt={`gallery-${i}`} loading="lazy"
                 className="mb-4 w-full rounded-xl object-cover hover:opacity-90 transition" />
          ))}
        </div>
      </div>
    </Section>
  );
}

function Access() {
  const { address, map } = data;
  return (
    <Section id="access" title="Access" wide>
      <div className="container grid md:grid-cols-2 gap-8 items-start">
        <div className="rounded-xl overflow-hidden aspect-[4/3] bg-white shadow">
          {/* Google Map 埋め込みURLに差し替え可 */}
          <iframe
            src={map}
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div>
          <h3 className="font-medium">所在地</h3>
          <p className="text-coffee-600 mt-2">{address}</p>
          <a href="#reserve" className="mt-6 inline-block rounded-full bg-coffee-900 text-white px-5 py-2">予約する</a>
        </div>
      </div>
    </Section>
  );
}

function Reserve() {
  const { reserve } = data;
  return (
    <Section id="reserve">
      <div className="rounded-2xl bg-white shadow-sm p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">{reserve.title}</h2>
        <p className="text-coffee-600 mt-3">{reserve.lead}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a className="rounded-full bg-coffee-900 text-white px-5 py-2" href={reserve.link}>Web予約</a>
          <a className="rounded-full border px-5 py-2" href={`tel:${reserve.tel}`}>{reserve.tel}</a>
        </div>
      </div>
    </Section>
  );
}

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <MenuTeaser />
      <Gallery />
      <Access />
      <Reserve />
    </>
  );
}
