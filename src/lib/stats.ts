import { ARTIFACTS, SNAPSHOT } from "@/data/site";

export type Stats = {
  /** all-time downloads keyed by "models/<id>" or "datasets/<id>" */
  downloads: Record<string, number>;
  modelDownloads: number;
  datasetDownloads: number;
  modelCount: number;
  datasetCount: number;
  stars: Record<string, number>;
  /** true when at least the Hugging Face numbers came from the API */
  live: boolean;
};

const HF = "https://huggingface.co/api";
const REVALIDATE = { next: { revalidate: 60 * 60 * 24 } } as const;

type HfRow = { id: string; downloadsAllTime?: number };

async function hfList(kind: "models" | "datasets"): Promise<HfRow[]> {
  const r = await fetch(`${HF}/${kind}?author=albertobarnabo&expand[]=downloadsAllTime`, REVALIDATE);
  if (!r.ok) throw new Error(`HF ${kind} ${r.status}`);
  return (await r.json()) as HfRow[];
}

async function ghStars(repo: string): Promise<number> {
  const r = await fetch(`https://api.github.com/repos/${repo}`, {
    ...REVALIDATE,
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!r.ok) throw new Error(`GH ${repo} ${r.status}`);
  return ((await r.json()) as { stargazers_count: number }).stargazers_count;
}

function fromSnapshot(): Stats {
  const downloads: Record<string, number> = {};
  for (const a of ARTIFACTS) downloads[a.id] = a.downloads;
  return finish(downloads, { ...SNAPSHOT.stars }, false);
}

function finish(downloads: Record<string, number>, stars: Record<string, number>, live: boolean): Stats {
  let modelDownloads = 0, datasetDownloads = 0, modelCount = 0, datasetCount = 0;
  for (const [id, n] of Object.entries(downloads)) {
    if (id.startsWith("models/")) { modelDownloads += n; modelCount++; }
    else { datasetDownloads += n; datasetCount++; }
  }
  return { downloads, modelDownloads, datasetDownloads, modelCount, datasetCount, stars, live };
}

/** Live numbers from Hugging Face + GitHub, with per-source fallback to the snapshot in data/site.ts. */
export async function getStats(): Promise<Stats> {
  const [models, datasets, ...starResults] = await Promise.allSettled([
    hfList("models"),
    hfList("datasets"),
    ...Object.keys(SNAPSHOT.stars).map((repo) => ghStars(repo).then((n) => [repo, n] as const)),
  ]);

  if (models.status !== "fulfilled" || datasets.status !== "fulfilled") return fromSnapshot();

  const downloads: Record<string, number> = {};
  for (const m of models.value) downloads[`models/${m.id}`] = m.downloadsAllTime ?? 0;
  for (const d of datasets.value) downloads[`datasets/${d.id}`] = d.downloadsAllTime ?? 0;

  const stars: Record<string, number> = { ...SNAPSHOT.stars };
  for (const s of starResults) if (s.status === "fulfilled") stars[s.value[0]] = s.value[1];

  return finish(downloads, stars, true);
}

export const fmt = (n: number) => new Intl.NumberFormat("en-US").format(n);
