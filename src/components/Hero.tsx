import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { OPEN_TO_ROLES, OPEN_TO_ROLES_LINE, POSITIONING, SITE } from "@/data/site";
import LocalTime from "./LocalTime";

const stagger = (i: number) => ({ "--stagger": i } as React.CSSProperties);

export default function Hero() {
  const quick = [
    { label: "Hugging Face", href: SITE.hf },
    { label: "GitHub", href: SITE.github },
    { label: "LinkedIn", href: SITE.linkedin },
    { label: "Email", href: `mailto:${SITE.email}` },
  ];
  // "Barnabò" → the ò carries the site's single gradient fill
  const lastStem = SITE.last.slice(0, -1);
  const lastGlyph = SITE.last.slice(-1);

  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden" data-nav-theme="night">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="wrap relative grid min-h-[88svh] grid-cols-1 items-center gap-12 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <p data-animate style={stagger(0)} className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2">
            <span>
              {SITE.role} · {SITE.org} · {SITE.city}
            </span>
            {OPEN_TO_ROLES && (
              <span className="flex items-center gap-2 normal-case tracking-normal text-accent">
                <span className="h-2 w-2 rounded-full bg-accent-2 motion-safe:animate-pulse" aria-hidden />
                {OPEN_TO_ROLES_LINE}
              </span>
            )}
          </p>

          <h1 className="font-display mt-8 text-display-1">
            <span data-animate style={stagger(1)} className="block">
              {SITE.first}
            </span>
            <span data-animate style={stagger(2)} className="block">
              {lastStem}
              <span className="ink-gradient">{lastGlyph}</span>
            </span>
          </h1>

          <p data-animate style={stagger(3)} className="mt-8 max-w-[46ch] font-body text-[1.25rem] italic leading-[1.4] text-text md:text-[1.375rem]">
            {POSITIONING}
          </p>

          <div data-animate style={stagger(4)} className="mt-9 flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">
              See the work
            </a>
            <a href={SITE.hf} className="btn-secondary" target="_blank" rel="noreferrer">
              Hugging Face <FiArrowUpRight className="ml-1.5" size={14} aria-hidden />
            </a>
          </div>

          <ul data-animate style={stagger(5)} className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {quick.map((q) => (
              <li key={q.href}>
                <a
                  href={q.href}
                  target={q.href.startsWith("http") ? "_blank" : undefined}
                  rel={q.href.startsWith("http") ? "noreferrer" : undefined}
                  className="ul-draw font-mono text-data text-muted transition-colors hover:text-accent"
                >
                  {q.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <figure data-animate style={stagger(6)} className="w-full max-w-[420px] md:col-span-5 md:justify-self-end">
          <div className="reg-frame rounded-plate">
            <div className="relative aspect-[4/5] overflow-hidden rounded-plate border border-rule-strong bg-surface-2">
              <Image
                src="/ffm.jpg"
                alt={`Portrait of ${SITE.name}`}
                fill
                priority
                sizes="(min-width: 768px) 420px, 92vw"
                className="object-cover"
                style={{ objectPosition: "50% 18%" }}
              />
            </div>
          </div>
          <figcaption className="mt-4 text-right font-mono text-[11px] text-muted">
            Frankfurt am Main · <LocalTime /> local
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
