import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { FEATURED, LEADERBOARD, type Featured } from "@/data/site";
import { fmt, type Stats } from "@/lib/stats";
import { Reveal } from "./Reveal";

function Leaderboard() {
  return (
    <div className="reg-frame rounded-plate">
      <div className="sheen relative overflow-hidden rounded-plate border border-rule bg-surface-2 p-5 md:p-7">
        <div className="mb-4 flex items-baseline justify-between gap-4">
          <p className="eyebrow">Field-F1 · 85 image documents</p>
          <p className="font-mono text-[11px] text-faint">Qwen2.5‑VL, inaugural run</p>
        </div>
        <table className="w-full border-collapse font-mono text-data">
          <thead className="sr-only">
            <tr><th>Document type</th><th>Docs</th><th>Field-F1</th><th>Best model</th></tr>
          </thead>
          <tbody>
            {LEADERBOARD.map((r) => (
              <tr key={r.type} className="border-t border-rule">
                <td className="py-2.5 pr-3 text-text">{r.type}</td>
                <td className="py-2.5 pr-3 text-right text-faint tnum">{r.docs}</td>
                <td className="w-[45%] py-2.5 pr-3">
                  <div className="flex items-center gap-3">
                    <span className="h-[3px] flex-1 rounded-full bg-bg">
                      <span className="block h-full rounded-full bg-accent" style={{ width: `${r.f1 * 100}%` }} />
                    </span>
                    <span className="w-12 text-right text-text tnum">{r.f1.toFixed(3)}</span>
                  </div>
                </td>
                <td className="hidden py-2.5 text-right text-faint sm:table-cell">{r.model}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 border-t border-rule pt-3 font-mono text-[11px] text-muted">
          Exactly 1 document in 255 runs was extracted perfectly. Italian document AI is not solved.
        </p>
      </div>
    </div>
  );
}

function Art({ p }: { p: Featured }) {
  if (p.leaderboard || !p.art) return <Leaderboard />;
  const a = p.art;
  return (
    <div className="reg-frame rounded-plate">
      <div className="sheen relative overflow-hidden rounded-plate border border-rule bg-surface-2" style={{ aspectRatio: a.aspect }}>
        <Image
          src={a.src}
          alt={a.alt}
          fill
          sizes="(min-width: 768px) 58vw, 100vw"
          className={`${a.fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
          style={a.position ? { objectPosition: a.position } : undefined}
        />
        {a.hover && (
          <Image
            src={a.hover}
            alt=""
            aria-hidden
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
      </div>
    </div>
  );
}

function Plate({ p, i, stats }: { p: Featured; i: number; stats: Stats }) {
  const flip = i % 2 === 1;
  const hfDownloads = p.hf ? p.hf.reduce((s, id) => s + (stats.downloads[id] ?? 0), 0) : 0;
  const stars = p.github ? stats.stars[p.github] ?? 0 : 0;
  const metricValue =
    p.metric.live === "hf" ? fmt(hfDownloads) : p.metric.live === "stars" ? `${fmt(stars)}★` : p.metric.value;
  const liveChips: string[] = [];
  if (p.hf && hfDownloads > 0 && p.metric.live !== "hf") liveChips.push(`↓ ${fmt(hfDownloads)} downloads`);
  if (stars >= 5) liveChips.push(`★ ${fmt(stars)}`);
  const primary = p.links[0];

  return (
    <article className="group grid grid-cols-1 items-center gap-8 border-t border-rule py-14 md:grid-cols-12 md:gap-12 md:py-20">
      <Reveal className={`md:col-span-7 ${flip ? "md:order-2" : ""}`} amount={0.15}>
        <Art p={p} />
      </Reveal>

      <Reveal className={`md:col-span-5 ${flip ? "md:order-1" : ""}`} amount={0.15} delay={0.1}>
        <p className="eyebrow flex items-center gap-2">
          <span className="text-accent">{p.num}</span>
          <span>/ {p.tag}</span>
          <span className="text-faint">· {p.role}</span>
        </p>
        <p className="font-display font-display-wide mt-5 text-display-2 text-accent">
          {metricValue}
          {p.metric.live === "hf" && <span className="ml-2 inline-block h-2 w-2 rounded-full bg-accent-2 align-middle" aria-label="live" />}
        </p>
        <p className="eyebrow mt-1">{p.metric.label}</p>

        <h3 className="font-display mt-6 text-h3">
          <a href={primary.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
            {p.title}
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={20} aria-hidden />
          </a>
        </h3>
        <p className="mt-2 text-lede text-text">{p.kicker}</p>
        <p className="mt-4 max-w-prose text-small text-muted">{p.body}</p>

        <div className="mt-5 rounded-card border border-dashed border-rule-strong px-4 py-3 font-mono text-data text-muted" aria-label="Key numbers">
          {p.receipt.join("  ·  ")}
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <li key={s} className="chip">{s}</li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          {p.links.map((l) => (
            <a key={l.href} href={l.href} className="arrow-link" target="_blank" rel="noreferrer">
              {l.label} <FiArrowUpRight size={13} aria-hidden />
            </a>
          ))}
          {liveChips.map((c) => (
            <span key={c} className="font-mono text-data text-accent-2 tnum">{c}</span>
          ))}
        </div>
      </Reveal>
    </article>
  );
}

export default function FeaturedWork({ stats }: { stats: Stats }) {
  return (
    <section id="work" aria-labelledby="work-h" className="wrap-wide pt-24 md:pt-36" data-nav-theme="night">
      <Reveal>
        <p className="eyebrow">
          <span className="text-accent">01</span> — Selected work
        </p>
        <h2 id="work-h" className="font-display mt-4 max-w-[18ch] text-h2">
          Things I shipped, with the receipts.
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
