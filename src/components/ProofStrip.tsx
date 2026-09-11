import { SNAPSHOT } from "@/data/site";
import { fmt, type Stats } from "@/lib/stats";

export default function ProofStrip({ stats }: { stats: Stats }) {
  const facts = [
    { n: fmt(stats.modelDownloads), l: "model downloads on Hugging Face", lead: true },
    { n: `${stats.modelCount} / ${stats.datasetCount}`, l: "open models / datasets" },
    { n: `${fmt(stats.stars["albertobarnabo/lazy-cat"] ?? 0)}★`, l: "stars on lazy-cat" },
    { n: fmt(stats.repos), l: "public repositories on GitHub" },
  ];
  return (
    <div className="wrap" data-nav-theme="night">
      <dl className="grid grid-cols-2 gap-y-8 border-y border-rule py-10 md:grid-cols-4 md:gap-x-8">
        {facts.map((f) => (
          <div key={f.l}>
            <dd className={`font-display tnum text-[clamp(1.75rem,2.6vw,2.5rem)] font-medium leading-none tracking-[-0.02em] ${"lead" in f && f.lead ? "text-accent" : ""}`}>{f.n}</dd>
            <dt className="mt-3 text-[0.875rem] text-muted">{f.l}</dt>
          </div>
        ))}
      </dl>
      <p className="mt-3 flex items-center gap-2 text-[0.8125rem] text-faint">
        <span className={`h-1.5 w-1.5 rounded-full ${stats.live ? "bg-accent" : "bg-faint"}`} aria-hidden />
        {stats.live ? "Live from the Hugging Face and GitHub APIs, updated daily" : `Snapshot, ${SNAPSHOT.date}`}
      </p>
    </div>
  );
}
