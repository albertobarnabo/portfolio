import { FiArrowUpRight } from "react-icons/fi";
import { ARTIFACTS, SITE, SNAPSHOT } from "@/data/site";
import { fmt, type Stats } from "@/lib/stats";
import { InView, Reveal } from "./Reveal";

export default function Models({ stats }: { stats: Stats }) {
  const rows = ARTIFACTS.map((a) => ({ ...a, downloads: stats.downloads[a.id] ?? a.downloads })).sort(
    (a, b) => b.downloads - a.downloads,
  );
  const max = Math.max(...rows.map((r) => r.downloads), 1);
  const href = (a: (typeof rows)[number]) =>
    a.kind === "model" ? `https://huggingface.co/${a.id.replace("models/", "")}` : `https://huggingface.co/${a.id}`;

  return (
    <section id="models" aria-labelledby="models-h" className="wrap pt-24 md:pt-36" data-nav-theme="night">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">
              <span className="text-accent">02</span> — Open on Hugging Face
            </p>
            <h2 id="models-h" className="font-display mt-4 max-w-[16ch] text-h2">
              Every model and dataset, with live downloads.
            </h2>
          </div>
          <a href={SITE.hf} className="arrow-link" target="_blank" rel="noreferrer">
            huggingface.co/albertobarnabo <FiArrowUpRight size={13} aria-hidden />
          </a>
        </div>
      </Reveal>

      <InView className="mt-10 overflow-x-auto rounded-card border border-rule bg-surface">
        <table className="w-full min-w-[560px] border-collapse text-data">
          <thead>
            <tr className="text-left">
              <th scope="col" className="eyebrow px-5 py-4 font-medium">Name</th>
              <th scope="col" className="eyebrow px-3 py-4 font-medium">Kind</th>
              <th scope="col" className="eyebrow hidden px-3 py-4 font-medium lg:table-cell">Task</th>
              <th scope="col" className="eyebrow hidden px-3 py-4 font-medium md:table-cell">Base</th>
              <th scope="col" className="eyebrow px-5 py-4 text-right font-medium">Downloads</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((a, i) => (
              <tr key={a.id} className="border-t border-rule transition-colors duration-150 hover:bg-surface-2">
                <td className="px-5 py-3 font-mono [overflow-wrap:anywhere]">
                  <a href={href(a)} className="ul-draw text-text hover:text-accent" target="_blank" rel="noreferrer">
                    {a.name}
                  </a>
                </td>
                <td className="px-3 py-3">
                  <span className="chip">{a.kind}</span>
                </td>
                <td className="hidden px-3 py-3 text-muted lg:table-cell">{a.task}</td>
                <td className="hidden px-3 py-3 font-mono text-muted md:table-cell">{a.base}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end gap-3">
                    <span className="hidden h-[2px] w-24 rounded-full bg-bg sm:block">
                      <span
                        className="bar block h-full rounded-full bg-accent"
                        style={{ width: `${Math.max(2, Math.sqrt(a.downloads / max) * 100)}%`, transitionDelay: `${i * 40}ms` }}
                      />
                    </span>
                    <span className="font-mono text-text tnum">{fmt(a.downloads)}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-rule-strong">
              <td colSpan={4} className="px-5 py-4 font-mono text-[11px] text-muted">
                {stats.live ? "Live · all-time downloads · revalidated daily" : `Snapshot · ${SNAPSHOT.date}`}
              </td>
              <td className="px-5 py-4 text-right font-mono text-text tnum">{fmt(stats.modelDownloads + stats.datasetDownloads)}</td>
            </tr>
          </tfoot>
        </table>
      </InView>
    </section>
  );
}
