// Single source of truth for everything on the page.
// Numbers marked "snapshot" are fallbacks; the live values come from lib/stats.ts.

export const SITE = {
  name: "Alberto Barnabò",
  first: "Alberto",
  last: "Barnabò",
  role: "Applied AI Engineer",
  org: "European Central Bank",
  city: "Frankfurt",
  email: "alberto.barnabo@gmail.com",
  url: "https://albertobarnabo.com",
  github: "https://github.com/albertobarnabo",
  hf: "https://huggingface.co/albertobarnabo",
  linkedin: "https://www.linkedin.com/in/alberto-barnab%C3%B2-9a003817b/",
  source: "https://github.com/albertobarnabo/portfolio",
};

/** Shown in the hero eyebrow and the contact block. Flip to false to hide the job-seeking line. */
export const OPEN_TO_ROLES = false;
export const OPEN_TO_ROLES_LINE = "Open to Applied AI / Forward-Deployed Engineer roles";

export const POSITIONING =
  "I take LLM pipelines and agentic applications to production at the European Central Bank — and, on my own time, train small models and publish the evidence.";

export type LinkKind = "GitHub" | "Hugging Face" | "Dataset" | "Demo" | "Site" | "Paper" | "Live";
export type Link = { label: LinkKind; href: string };

export type Metric = { value?: string; live?: "hf" | "stars"; label: string };
export type Art = { src: string; alt: string; aspect: string; position?: string; hover?: string; fit?: "cover" | "contain" };

export type Featured = {
  slug: string;
  num: string;
  tag: string;
  role: string;
  title: string;
  kicker: string;
  body: string;
  metric: Metric;
  receipt: string[];
  stack: string[];
  links: Link[];
  art?: Art;
  /** Render the BurocrazIA leaderboard instead of an image. */
  leaderboard?: boolean;
  /** Hugging Face ids whose all-time downloads are summed into the live chip / metric. */
  hf?: string[];
  /** GitHub owner/repo whose stars become the live chip. */
  github?: string;
};

export const FEATURED: Featured[] = [
  {
    slug: "product-search",
    num: "01",
    tag: "Retrieval",
    role: "Author",
    title: "E-commerce product search",
    kicker: "Self-hosted semantic search, trained on 427k human relevance judgments.",
    body:
      "A retriever and a cross-encoder reranker fine-tuned on Amazon’s ESCI data, so that a query like “pan that doesnt stick eggs” finds the right product. Both run on CPU with no per-query fees; the repository is the whole factory — every training script, eval and chart. Five open artifacts, including a 31 MB static model for edge deployment.",
    metric: { value: "427,655", label: "human relevance judgments" },
    receipt: ["nDCG@10 0.748", "2,100 q/s retrieval on CPU", "45 ms rerank", "$2.20 total GPU spend"],
    stack: ["sentence-transformers", "cross-encoder", "ONNX", "model2vec"],
    links: [
      { label: "GitHub", href: "https://github.com/albertobarnabo/product-search-embeddings" },
      { label: "Hugging Face", href: "https://huggingface.co/albertobarnabo/ecommerce-product-search-embeddings" },
      { label: "Demo", href: "https://huggingface.co/spaces/albertobarnabo/ecommerce-product-search-demo" },
    ],
    art: { src: "/work/product-search.jpg", alt: "Illustration: a laptop searching a product catalogue with no cloud in the loop", aspect: "16/9" },
    hf: [
      "models/albertobarnabo/ecommerce-product-search-embeddings",
      "models/albertobarnabo/ecommerce-product-search-reranker",
      "models/albertobarnabo/ecommerce-product-search-embeddings-base",
      "models/albertobarnabo/ecommerce-product-search-embeddings-static",
    ],
    github: "albertobarnabo/product-search-embeddings",
  },
  {
    slug: "fiduciary",
    num: "02",
    tag: "Fine-tuning",
    role: "Author",
    title: "Fiduciary",
    kicker: "A local-first financial advisor: Qwen3-4B, LoRA, and tool use on Apple Silicon.",
    body:
      "A LoRA fine-tune of Qwen3-4B-Instruct on MLX that speaks like a senior personal-finance advisor, wrapped in a small agent loop that reads a portfolio file from disk and calls live price and news tools. Nothing leaves the machine. Published as fused 4-bit weights, a 56 MB adapter, and GGUF for Ollama and LM Studio.",
    metric: { live: "hf", label: "downloads on Hugging Face" },
    receipt: ["Qwen3-4B · LoRA on MLX", "4-bit", "~45 min training on a 16 GB M-series", "3 published formats"],
    stack: ["MLX", "LoRA", "Qwen3", "function calling", "GGUF"],
    links: [
      { label: "GitHub", href: "https://github.com/albertobarnabo/fiduciary" },
      { label: "Hugging Face", href: "https://huggingface.co/albertobarnabo/fiduciary-qwen3-4b" },
    ],
    art: { src: "/work/fiduciary.png", alt: "Fiduciary’s mascot: an owl in a suit at a laptop", aspect: "4/3", position: "50% 30%" },
    hf: [
      "models/albertobarnabo/fiduciary-qwen3-4b",
      "models/albertobarnabo/fiduciary-qwen3-4b-GGUF",
      "models/albertobarnabo/fiduciary-qwen3-4b-lora",
    ],
    github: "albertobarnabo/fiduciary",
  },
  {
    slug: "burocrazia",
    num: "03",
    tag: "Document AI",
    role: "Author",
    title: "BurocrazIA",
    kicker: "The first benchmark for Italian document AI.",
    body:
      "Invoices, payslips, F24 tax forms, utility bills, receipts, CU and 730 — a domain with no public dataset, benchmark or eval until now. A 104-field typed schema curated from 467 fields observed on real documents; 204 gold-annotated documents (119 derived by construction from FatturaPA XML, 85 annotated and independently re-verified); a hallucination-counting scorer; and an inaugural leaderboard with Qwen2.5-VL. Italian document AI is not solved.",
    metric: { value: "104", label: "typed fields, from 467 observed" },
    receipt: ["204 gold documents", "3,805 fields re-verified", "1 perfect run in 255", "best payslip F1 0.517"],
    stack: ["document AI", "VLM evaluation", "KIE", "Qwen2.5‑VL"],
    links: [
      { label: "GitHub", href: "https://github.com/albertobarnabo/burocrazIA" },
      { label: "Dataset", href: "https://huggingface.co/datasets/albertobarnabo/burocrazia" },
      { label: "Demo", href: "https://huggingface.co/spaces/albertobarnabo/burocrazia-esame" },
    ],
    leaderboard: true,
    hf: ["datasets/albertobarnabo/burocrazia"],
    github: "albertobarnabo/burocrazIA",
  },
  {
    slug: "receipts",
    num: "04",
    tag: "Synthetic data",
    role: "Author",
    title: "Synthetic receipts for OCR",
    kicker: "32,000 receipts whose ground truth is exact by construction.",
    body:
      "Public receipt datasets are small, single-locale and labelled by humans who make mistakes. This generator renders thermal receipts across five locales, then produces a photo-degraded twin of each — homography, uneven lighting, thermal fade, JPEG grunge — with every word box mapped through the same transform. Arithmetic is re-checked per receipt and anything that does not add up is rejected.",
    metric: { value: "32,000", label: "receipts, five locales" },
    receipt: ["US · UK · DE · IT · FR", "4.3 GB on the Hub", "pixel-exact word boxes", "structured KIE fields"],
    stack: ["OCR", "synthetic data", "Pillow", "PyArrow"],
    links: [
      { label: "GitHub", href: "https://github.com/albertobarnabo/synthetic-receipts-ocr" },
      { label: "Dataset", href: "https://huggingface.co/datasets/albertobarnabo/synthetic-receipts-ocr" },
    ],
    art: { src: "/work/receipts.png", alt: "Five synthetic thermal receipts from the US, UK, Germany, Italy and France", aspect: "2/1", hover: "/work/receipts-pair.png" },
    hf: ["datasets/albertobarnabo/synthetic-receipts-ocr"],
    github: "albertobarnabo/synthetic-receipts-ocr",
  },
  {
    slug: "lazy-cat",
    num: "05",
    tag: "Agent tooling",
    role: "Author",
    title: "lazy-cat",
    kicker: "Claude Code skills that stop the agent from over-working.",
    body:
      "Two skills that fire at the only two moments that matter: before choosing an approach (is there an API, a package, a one-liner?) and before writing each block (did anyone ask for this?). Measured across 17 benchmark tasks under three conditions each, the same outcomes cost 4,762 tokens instead of 88,655.",
    metric: { value: "18.6×", label: "fewer tokens across 17 tasks" },
    receipt: ["88,655 → 4,762 tokens", "17 benchmark tasks", "3 conditions each", "2 skills"],
    stack: ["Claude Code", "agent tooling"],
    links: [{ label: "GitHub", href: "https://github.com/albertobarnabo/lazy-cat" }],
    art: { src: "/work/lazy-cat.png", alt: "lazy-cat: a sleeping orange cat", aspect: "2/1" },
    github: "albertobarnabo/lazy-cat",
  },
];

/** BurocrazIA inaugural leaderboard — field-F1 on the 85 image documents. */
export const LEADERBOARD = [
  { type: "scontrino", docs: 6, f1: 0.881, model: "Qwen2.5‑VL‑7B" },
  { type: "modello 730", docs: 1, f1: 0.8, model: "Qwen2.5‑VL‑7B" },
  { type: "fattura (PDF)", docs: 9, f1: 0.698, model: "Qwen2.5‑VL‑7B" },
  { type: "bolletta", docs: 20, f1: 0.56, model: "Qwen2.5‑VL‑7B" },
  { type: "busta paga", docs: 38, f1: 0.517, model: "Qwen2.5‑VL‑7B" },
  { type: "CU", docs: 2, f1: 0.444, model: "Qwen2.5‑VL‑3B" },
  { type: "F24", docs: 9, f1: 0.343, model: "Qwen2.5‑VL‑7B" },
];

export type Minor = { title: string; body: string; tag: string; links: Link[]; thumb?: string; thumbAlt?: string };

export const MORE: Minor[] = [
  { title: "OpalZero", tag: "Rust", body: "A multi-agent engine in Rust: one plain-English intent in, a typed MissionState out over SSE.", links: [{ label: "GitHub", href: "https://github.com/albertobarnabo/opal-zero" }, { label: "Site", href: "https://albertobarnabo.com/opal-zero/" }], thumb: "/work/opal-zero.svg", thumbAlt: "OpalZero logo" },
  { title: "Italian Bankruptcy Forecast", tag: "Simulation", body: "Italy from 2025 to 2050, one dot per thousand people — workers, pensioners and everyone else — animated from Eurostat, Istat and INPS data. The watchable face of a larger agent-based simulation.", links: [{ label: "Demo", href: "https://huggingface.co/spaces/albertobarnabo/italian-bankruptcy-forecast" }], thumb: "/work/bankruptcy.jpg", thumbAlt: "Italy in 2025 as three columns of dots: workers, pensioners, everyone else" },
  { title: "tokentropy", tag: "Uncertainty", body: "Claim-level uncertainty scores for streaming LLM output, from top-k log-probabilities alone — no second model.", links: [{ label: "GitHub", href: "https://github.com/albertobarnabo/tokentropy" }], thumb: "/work/tokentropy-dark.svg", thumbAlt: "Distribution chart of per-claim uncertainty scores" },
  { title: "professor", tag: "Claude skill", body: "Designs an explanation before anything is produced — base → vary → name — with eleven evidence-tagged gates.", links: [{ label: "GitHub", href: "https://github.com/albertobarnabo/professor" }], thumb: "/work/professor.jpg", thumbAlt: "An old professor in a study full of books" },
  { title: "manim-craft", tag: "Claude skill", body: "Manim craft for LLM-generated animations, plus a blind A/B that showed craft alone doesn’t improve teaching.", links: [{ label: "GitHub", href: "https://github.com/albertobarnabo/manim-craft" }], thumb: "/work/manim-craft.png", thumbAlt: "A Manim keyframe: a 3D surface under a moving camera" },
  { title: "limn", tag: "Python", body: "Zero-dependency charting that accepts the CSV finance actually exported and returns publication-grade SVG.", links: [{ label: "GitHub", href: "https://github.com/albertobarnabo/limn" }], thumb: "/work/limn.svg", thumbAlt: "A stacked area chart rendered by limn, dark theme" },
  { title: "bibliotech", tag: "Agent memory", body: "Dated decision records for an agent, so decisions survive across sessions instead of being re-derived.", links: [{ label: "GitHub", href: "https://github.com/albertobarnabo/bibliotech" }], thumb: "/work/bibliotech.jpg", thumbAlt: "A grand library hall" },
  { title: "ocr-sota", tag: "OCR", body: "An automatically ranked index of open-source OCR engines, document parsers and vision-language models.", links: [{ label: "GitHub", href: "https://github.com/albertobarnabo/ocr-sota" }], thumb: "/work/ocr-sota.jpg", thumbAlt: "A desk with books, a manuscript and a magnifying glass" },
  { title: "MenuGen", tag: "Next.js", body: "A menu spreadsheet in, batch AI food photography out — with the cost shown before you generate.", links: [{ label: "GitHub", href: "https://github.com/albertobarnabo/MenuGen" }], thumb: "/work/menugen.png", thumbAlt: "MenuGen’s compose screen" },
  { title: "plasmodio", tag: "Simulation", body: "A slime mould redraws Italy. Agent-based simulation in the browser.", links: [{ label: "GitHub", href: "https://github.com/albertobarnabo/plasmodio" }, { label: "Demo", href: "https://huggingface.co/spaces/albertobarnabo/plasmodio" }], thumb: "/work/plasmodio.png", thumbAlt: "plasmodio: a slime-mould simulation redrawing the map of Italy" },
  { title: "orbis", tag: "Swift", body: "A native globe for the countries you’ve lived in, visited, passed through.", links: [{ label: "GitHub", href: "https://github.com/albertobarnabo/orbis" }], thumb: "/work/orbis.jpg", thumbAlt: "orbis: a globe showing visited countries" },
  { title: "InterVous", tag: "LLM", body: "Parses a job application out of a posting URL.", links: [{ label: "Live", href: "https://albertobarnabo.com/intervous" }], thumb: "/intervous_logo.png", thumbAlt: "InterVous logo" },
];

export type Artifact = {
  id: string; // "models/albertobarnabo/x" or "datasets/albertobarnabo/x"
  name: string;
  kind: "model" | "dataset";
  task: string;
  base: string;
  downloads: number; // snapshot, 2026-09-10
};

export const ARTIFACTS: Artifact[] = [
  { id: "models/albertobarnabo/fiduciary-qwen3-4b", name: "fiduciary-qwen3-4b", kind: "model", task: "financial advisor · text generation", base: "Qwen3-4B, 4-bit MLX", downloads: 8697 },
  { id: "models/albertobarnabo/ecommerce-product-search-embeddings", name: "ecommerce-product-search-embeddings", kind: "model", task: "product retrieval · embeddings", base: "bge-small, 33M", downloads: 650 },
  { id: "models/albertobarnabo/ecommerce-product-search-reranker", name: "ecommerce-product-search-reranker", kind: "model", task: "product reranking · cross-encoder", base: "MiniLM, 33M", downloads: 381 },
  { id: "models/albertobarnabo/fiduciary-qwen3-4b-GGUF", name: "fiduciary-qwen3-4b-GGUF", kind: "model", task: "financial advisor · llama.cpp / Ollama", base: "Qwen3-4B, GGUF", downloads: 353 },
  { id: "models/albertobarnabo/ecommerce-product-search-embeddings-static", name: "ecommerce-product-search-embeddings-static", kind: "model", task: "product retrieval · static embeddings", base: "model2vec, 31 MB", downloads: 203 },
  { id: "models/albertobarnabo/ecommerce-product-search-embeddings-base", name: "ecommerce-product-search-embeddings-base", kind: "model", task: "product retrieval · embeddings", base: "bge-base, 109M", downloads: 196 },
  { id: "models/albertobarnabo/fiduciary-qwen3-4b-lora", name: "fiduciary-qwen3-4b-lora", kind: "model", task: "financial advisor · adapter", base: "LoRA, 56 MB", downloads: 0 },
  { id: "models/albertobarnabo/scenesmith-qwen3-4b", name: "scenesmith-qwen3-4b", kind: "model", task: "Manim code generation · adapter", base: "Qwen3-4B, LoRA", downloads: 0 },
  { id: "datasets/albertobarnabo/synthetic-receipts-ocr", name: "synthetic-receipts-ocr", kind: "dataset", task: "OCR / KIE · 32k receipts", base: "generated, 4.3 GB", downloads: 969 },
  { id: "datasets/albertobarnabo/prompted_tabfact", name: "prompted_tabfact", kind: "dataset", task: "table fact-checking · prompts", base: "TabFact", downloads: 906 },
  { id: "datasets/albertobarnabo/esci-product-search-pairs", name: "esci-product-search-pairs", kind: "dataset", task: "retrieval training pairs", base: "Amazon ESCI", downloads: 137 },
  { id: "datasets/albertobarnabo/burocrazia", name: "burocrazia", kind: "dataset", task: "Italian document-AI benchmark", base: "204 gold docs", downloads: 69 },
];

export const SNAPSHOT = {
  date: "2026-09-10",
  stars: {
    "albertobarnabo/lazy-cat": 50,
    "albertobarnabo/opal-zero": 7,
    "albertobarnabo/product-search-embeddings": 2,
    "albertobarnabo/fiduciary": 1,
    "albertobarnabo/burocrazIA": 0,
    "albertobarnabo/synthetic-receipts-ocr": 0,
  } as Record<string, number>,
};

export type TimelineItem = { period: string; title: string; org: string; note?: string };

export const TIMELINE: TimelineItem[] = [
  { period: "2025 —", title: "Applied AI Engineer", org: "European Central Bank, Frankfurt", note: "Internal AI team. I take LLM pipelines and agentic applications from proof of concept to production — document understanding, retrieval and search over large internal collections — and build the evaluation sets and benchmarks that decide what ships. Day to day: containerised services on cloud infrastructure, cost and latency, error handling and retries, and explaining and defending technical choices to the business teams that use them." },
  { period: "2022 – 2024", title: "AI Researcher", org: "Xi’an Jiaotong University", note: "NLP and large language models for fact verification over tables — the master’s thesis." },
  { period: "2021 – 2024", title: "M.Sc. Computer Science & Engineering", org: "Politecnico di Milano · Xi’an Jiaotong University", note: "Double-degree programme: one year in Milan, two in Xi’an." },
  { period: "2017 – 2021", title: "B.Sc. Computer Science & Engineering", org: "Politecnico di Milano" },
];

export const RESEARCH = {
  title: "Large language models for fact-checking over tabular data",
  meta: "Master’s thesis · Xi’an Jiaotong University & Politecnico di Milano · 2024",
  body:
    "How well can a language model read a table and decide whether a claim about it is true? The thesis studies LLM behaviour on TabFact and FEVEROUS and how prompting strategy changes accuracy. The prompted TabFact variants are published as a dataset.",
  links: [
    { label: "Paper", href: "https://www.politesi.polimi.it/retrieve/92aa2853-e659-4e34-8806-a59043f2990a/2024_10_Barnabo_Executive_Summary.pdf" },
    { label: "Dataset", href: "https://huggingface.co/datasets/albertobarnabo/prompted_tabfact" },
    { label: "GitHub", href: "https://github.com/albertobarnabo/Fact-Checking-Pipeline" },
  ] as Link[],
};

export type Photo = { color: string; duo: string; alt: string; caption: string };

export const PHOTOS: Photo[] = [
  { color: "/about/ecb.jpg", duo: "/about/ecb-duo.jpg", alt: "Alberto outside the European Central Bank tower in Frankfurt", caption: "Frankfurt — outside the ECB" },
  { color: "/about/huashan.jpg", duo: "/about/huashan-duo.jpg", alt: "Alberto at Hua Shan, Shaanxi, among red prayer ribbons", caption: "Shaanxi — Hua Shan, during the Xi’an years" },
  { color: "/about/graduation.jpg", duo: "/about/graduation-duo.jpg", alt: "Alberto at his master’s graduation at Xi’an Jiaotong University", caption: "Xi’an — master’s graduation, 2024" },
];
