import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { PHOTOS, RESEARCH, TIMELINE } from "@/data/site";
import { Reveal } from "./Reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="theme-paper mt-24 bg-bg text-text md:mt-36" data-nav-theme="paper">
      <div className="wrap py-24 md:py-36">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">About</p>
            <h2 id="about-h" className="font-display mt-4 text-h2">
              Italian, in Frankfurt, building AI that has to work on Monday.
            </h2>
            <div className="mt-7 space-y-4 text-body text-muted">
              <p>
                I studied computer science and engineering at Politecnico di Milano and finished with a double master’s
                degree at Xi’an Jiaotong University, where I spent two years and wrote my thesis on language models.
              </p>
              <p>
                Since 2025 I’ve been on the internal AI team at the European Central Bank. On my own time I train small
                models on a laptop, publish what comes out, and write down what I learned — including the results that
                didn’t work. The projects above are that habit in public.
              </p>
              <p>I speak Italian, English and Spanish fluently, and enough German and Mandarin to get by.</p>
            </div>
          </Reveal>

          <div className="md:col-span-7">
            <Reveal>
              <dl className="border-t border-rule-strong">
                {TIMELINE.map((t) => (
                  <div key={t.period + t.title} className="grid gap-1 border-b border-rule py-5 sm:grid-cols-12 sm:gap-6">
                    <dt className="font-mono text-data text-accent tnum sm:col-span-3 sm:pt-1">{t.period}</dt>
                    <dd className="sm:col-span-9">
                      <p className="font-display text-[1.2rem] font-bold leading-tight">{t.title}</p>
                      <p className="mt-0.5 text-small text-muted">{t.org}</p>
                      {t.note && <p className="mt-1.5 text-small text-muted">{t.note}</p>}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 rounded-card border border-rule bg-surface p-6 md:p-7">
                <p className="eyebrow">Research · {RESEARCH.meta}</p>
                <h3 className="font-display mt-3 text-[1.4rem] font-bold leading-tight">{RESEARCH.title}</h3>
                <p className="mt-3 text-small text-muted">{RESEARCH.body}</p>
                <div className="mt-4 flex flex-wrap gap-5">
                  {RESEARCH.links.map((l) => (
                    <a key={l.href} href={l.href} className="arrow-link" target="_blank" rel="noreferrer">
                      {l.label} <FiArrowUpRight size={13} aria-hidden />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.duo} delay={i * 0.08} amount={0.2}>
              <li>
                <figure className="group">
                  <div className="reg-frame rounded-plate">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-plate border border-rule">
                      <Image src={p.duo} alt={p.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                      <Image
                        src={p.color}
                        alt=""
                        aria-hidden
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{p.caption}</figcaption>
                </figure>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
