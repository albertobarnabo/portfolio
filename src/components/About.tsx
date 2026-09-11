import Image from "next/image";
import { PHOTOS, RESEARCH, TIMELINE } from "@/data/site";
import { Reveal } from "./Reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="theme-paper mt-24 bg-bg text-text md:mt-32" data-nav-theme="paper">
      <div className="wrap py-24 md:py-32">
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
                Since 2025 I’ve been an applied AI engineer on the European Central Bank’s internal AI team, where I take
                LLM pipelines and agentic applications from proof of concept to production: document understanding,
                retrieval and search over large collections, and the unglamorous parts that make a pipeline hold up —
                evaluation sets before implementation, cost and latency, error handling and retries. I also present and
                defend those choices to the business teams that use them.
              </p>
              <p>
                On my own time I train small models on a laptop, publish what comes out, and write down what I learned —
                including the results that didn’t work. The projects above are that habit in public.
              </p>
              <p>I speak Italian, English and Spanish fluently, and enough German and Mandarin to get by.</p>
            </div>
          </Reveal>

          <div className="md:col-span-7">
            <Reveal>
              <dl className="border-t border-rule-strong">
                {TIMELINE.map((t) => (
                  <div key={t.period + t.title} className="grid gap-1 border-b border-rule py-5 sm:grid-cols-12 sm:gap-6">
                    <dt className="tnum text-small text-faint sm:col-span-3 sm:pt-0.5">{t.period}</dt>
                    <dd className="sm:col-span-9">
                      <p className="font-display text-[1.15rem] font-medium leading-tight">{t.title}</p>
                      <p className="mt-0.5 text-small text-muted">{t.org}</p>
                      {t.note && <p className="mt-1.5 text-small text-muted">{t.note}</p>}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 rounded-xl border border-rule bg-surface p-6 md:p-7">
                <p className="eyebrow">Research · {RESEARCH.meta}</p>
                <h3 className="font-display mt-3 text-[1.3rem] font-medium leading-snug tracking-[-0.015em]">{RESEARCH.title}</h3>
                <p className="mt-3 text-small text-muted">{RESEARCH.body}</p>
                <p className="mt-4 flex flex-wrap gap-5 text-small">
                  {RESEARCH.links.map((l) => (
                    <a key={l.href} href={l.href} className="link" target="_blank" rel="noreferrer">
                      {l.label} ↗
                    </a>
                  ))}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.duo} delay={i * 0.06} amount={0.2}>
              <li>
                <figure className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-rule">
                    <Image src={p.duo} alt={p.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                    <Image
                      src={p.color}
                      alt=""
                      aria-hidden
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-within:opacity-100"
                    />
                  </div>
                  <figcaption className="mt-3 text-[0.8125rem] text-faint">{p.caption}</figcaption>
                </figure>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
