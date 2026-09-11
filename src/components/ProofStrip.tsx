import { SNAPSHOT } from "@/data/site";
import type { Stats } from "@/lib/stats";
import CountUp from "./CountUp";

export default function ProofStrip({ stats }: { stats: Stats }) {
  const facts = [
    { n: <CountUp value={stats.modelDownloads} className="text-accent-2" />, l: "model downloads on Hugging Face" },
    { n: <span className="tnum">{stats.modelCount} / {stats.datasetCount}</span>, l: "open models / datasets" },
    { n: <CountUp value={stats.stars["albertobarnabo/lazy-cat"] ?? 0} suffix="★" />, l: "stars on lazy-cat" },
    { n: <CountUp value={427655} />, l: "human judgments in the search stack" },
  ];
  return (
    <div className="wrap" data-nav-theme="night">
      <dl className="grid grid-cols-2 gap-y-8 border-y border-rule py-10 md:grid-cols-4 md:gap-x-8">
        {facts.map((f) => (
          <div key={f.l}>
            <dd className="font-display font-display-wide text-display-2">{f.n}</dd>
            <dt className="eyebrow mt-3">{f.l}</dt>
          </div>
        ))}
      </dl>
      <p className="mt-3 flex items-center gap-2 font-mono text-[11px] text-faint">
        <span className={`h-1.5 w-1.5 rounded-full ${stats.live ? "bg-accent-2" : "bg-faint"}`} aria-hidden />
        {stats.live ? "Live from the Hugging Face and GitHub APIs · revalidated daily" : `Snapshot · ${SNAPSHOT.date}`}
      </p>
    </div>
  );
}
