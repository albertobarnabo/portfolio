import Image from "next/image";
import { FEATURED, LEADERBOARD, type Featured } from "@/data/site";
import { fmt, type Stats } from "@/lib/stats";
import { Reveal } from "./Reveal";

function Leaderboard() {
  return (
    <div className="frame p-6 md:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <p className="eyebrow">Field-F1 · 85 image documents</p>
        <p className="text-[0.8125rem] text-faint">Qwen2.5‑VL, inaugural run</p>
      </div>
      <table className="mt-5 w-full border-collapse text-[0.9375rem]">
        <thead className="sr-only">
          <tr><th>Document type</th><th>Docs</th><th>Field-F1</th><th>Best model</th></tr>
        </thead>
        <tbody>
          {LEADERBOARD.map((r) => (
            <tr key={r.type} className="border-t border-rule">
              <td className="py-3 pr-4">{r.type}</td>
              <td className="tnum py-3 pr-4 text-right text-faint">{r.docs}</td>
              <td className="w-[44%] py-3 pr-4">
                <div className="flex items-center gap-4">
                  <span className="h-px flex-1 bg-rule">
                    <span className="block h-px bg-bar" style={{ width: `${r.f1 * 100}%` }} />
                  </span>
                  <span className="tnum w-12 text-right">{r.f1.toFixed(3)}</span>
                </div>
              </td>
              <td className="hidden py-3 text-right text-faint sm:table-cell">{r.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-5 border-t border-rule pt-4 text-[0.8125rem] text-muted">
        Exactly one document in 255 runs was extracted perfectly. Italian document AI is not solved.
      </p>
    </div>
  );
}

function Art({ p }: { p: Featured }) {
  if (p.leaderboard || !p.art) return <Leaderboard />;
  const a = p.art;
  return (
    <div className="frame relative" style={{ aspectRatio: a.aspect }}>
      <Image
        src={a.src}
        alt={a.alt}
        fill
        sizes="(min-width: 768px) 58vw, 100vw"
        className={`${a.fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]`}
        style={a.position ? { objectPosition: a.position } : undefined}
      />
      {a.hover && (
        <Image
          src={a.hover}
          alt=""
          aria-hidden
          fill
          sizes="(min-width: 768px) 58vw, 100vw"
          className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
      )}
    </div>
  );
}

function Plate({ p, i, stats }: { p: Featured; i: number; stats: Stats }) {
  const flip = i % 2 === 1;
  const hfDownloads = p.hf ? p.hf.reduce((s, id) => s + (stats.downloads[id] ?? 0), 0) : 0;
  const stars = p.github ? stats.stars[p.github] ?? 0 : 0;
  const metricValue =
    p.metric.live === "hf" ? fmt(hfDownloads) : p.metric.live === "stars" ? `${fmt(stars)}★` : p.metric.value;
  const extras: string[] = [];
  if (p.hf && hfDownloads > 0 && p.metric.live !== "hf") extras.push(`${fmt(hfDownloads)} downloads`);
  if (stars >= 5) extras.push(`${fmt(stars)} stars`);
  const primary = p.links[0];

  return (
    <article className="group grid grid-cols-1 items-center gap-8 border-t border-rule py-14 md:grid-cols-12 md:gap-12 md:py-20">
      <Reveal className={`md:col-span-7 ${flip ? "md:order-2" : ""}`} amount={0.15}>
        <Art p={p} />
      </Reveal>

      <Reveal className={`md:col-span-5 ${flip ? "md:order-1" : ""}`} amount={0.15} delay={0.08}>
        <p className="eyebrow">
          <span className="text-accent">{p.num}</span> — {p.tag}
        </p>
        <p className="font-display tnum mt-5 text-[clamp(2.25rem,4vw,3.5rem)] font-medium leading-none tracking-[-0.03em]">
          {metricValue}
          {p.metric.live === "hf" && <span className="ml-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" aria-label="live" />}
        </p>
        <p className="mt-2 text-[0.875rem] text-muted">{p.metric.label}</p>

        <h3 className="font-display mt-6 text-[clamp(1.5rem,2.2vw,1.9rem)] font-medium leading-tight tracking-[-0.02em]">
          <a href={primary.href} target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-70">
            {p.title}
          </a>
        </h3>
        <p className="mt-2 text-lede">{p.kicker}</p>
        <p className="mt-4 max-w-prose text-small text-muted">{p.body}</p>

        <p className="tnum mt-5 border-y border-rule py-3 font-mono text-[0.8125rem] leading-relaxed text-muted" aria-label="Key numbers">
          {p.receipt.join("  ·  ")}
        </p>

        <p className="mt-4 text-small text-muted">{p.stack.join(" · ")}</p>

        <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-small">
          {p.links.map((l) => (
            <a key={l.href} href={l.href} className="link" target="_blank" rel="noreferrer">
              {l.label} ↗
            </a>
          ))}
          {extras.map((e) => (
            <span key={e} className="tnum text-faint">{e}</span>
          ))}
        </p>
      </Reveal>
    </article>
  );
}

export default function FeaturedWork({ stats }: { stats: Stats }) {
  return (
    <section id="work" aria-labelledby="work-h" className="wrap-wide pt-24 md:pt-32" data-nav-theme="night">
      <Reveal>
        <p className="eyebrow">
          <span className="text-accent">01</span> — Selected work
        </p>
        <h2 id="work-h" className="font-display mt-4 max-w-[20ch] text-h2">
          Five things I built, and the numbers behind them.
        </h2>
      </Reveal>
      <div className="mt-10">
        {FEATURED.map((p, i) => (
          <Plate key={p.slug} p={p} i={i} stats={stats} />
        ))}
      </div>
    </section>
  );
}
