import { SITE } from "@/data/site";
import type { Stats } from "@/lib/stats";

export default function Footer({ stats, built }: { stats: Stats; built: string }) {
  return (
    <div className="theme-night bg-bg text-text" data-nav-theme="night">
      <div className="wrap flex flex-col gap-3 border-t border-rule py-8 font-mono text-[11px] text-faint sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {SITE.name} · Built with Next.js ·{" "}
          <a href={SITE.source} className="ul-draw hover:text-accent" target="_blank" rel="noreferrer">
            Source on GitHub
          </a>
        </span>
        <span>
          {stats.live ? "Stats live from Hugging Face & GitHub" : "Stats from snapshot"} · last build {built}
        </span>
      </div>
    </div>
  );
}
