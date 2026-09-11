import Image from "next/image";
import { POSITIONING, SITE } from "@/data/site";

const stagger = (i: number) => ({ "--stagger": i } as React.CSSProperties);

export default function Hero() {
  const quick = [
    { label: "Hugging Face", href: SITE.hf },
    { label: "GitHub", href: SITE.github },
    { label: "LinkedIn", href: SITE.linkedin },
    { label: "Email", href: `mailto:${SITE.email}` },
  ];

  return (
    <section id="top" aria-label="Introduction" data-nav-theme="night">
      <div className="wrap grid min-h-[80svh] grid-cols-1 items-center gap-12 py-14 md:grid-cols-12 md:py-16">
        <div className="md:col-span-7">
          <p data-animate style={stagger(0)} className="eyebrow">
            {SITE.role} — {SITE.org}, {SITE.city}
          </p>

          <h1 className="font-display mt-8 text-display-1">
            <span data-animate style={stagger(1)} className="block">
              {SITE.first}
            </span>
            <span data-animate style={stagger(2)} className="block">
              {SITE.last}
            </span>
          </h1>

          <p data-animate style={stagger(3)} className="mt-8 max-w-[48ch] text-[1.2rem] leading-[1.45] text-muted md:text-[1.3rem]">
            {POSITIONING}
          </p>

          <div data-animate style={stagger(4)} className="mt-9 flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">
              Selected work
            </a>
            <a href="#models" className="btn-secondary">
              Open models
            </a>
          </div>

          <ul data-animate style={stagger(5)} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.875rem]">
            {quick.map((q) => (
              <li key={q.href}>
                <a
                  href={q.href}
                  target={q.href.startsWith("http") ? "_blank" : undefined}
                  rel={q.href.startsWith("http") ? "noreferrer" : undefined}
                  className="ul-draw text-muted transition-colors hover:text-text"
                >
                  {q.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <figure data-animate style={stagger(6)} className="w-full max-w-[420px] md:col-span-5 md:justify-self-end">
          <div className="frame relative aspect-[4/5]">
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
          <figcaption className="mt-3 text-right text-[0.8125rem] text-faint">Frankfurt am Main</figcaption>
        </figure>
      </div>
    </section>
  );
}
