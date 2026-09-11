import { SITE } from "@/data/site";
import { Reveal } from "./Reveal";

export default function Contact() {
  const links = [
    { label: "LinkedIn", href: SITE.linkedin },
    { label: "Hugging Face", href: SITE.hf },
    { label: "GitHub", href: SITE.github },
  ];
  return (
    <footer id="contact" aria-labelledby="contact-h" className="theme-champagne bg-bg text-text" data-nav-theme="champagne">
      <div className="wrap py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-h" className="font-display mt-4 max-w-[14ch] text-display-1 font-medium">
            Let’s talk.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-block text-[clamp(1.375rem,2.8vw,2.25rem)] tracking-[-0.02em] underline decoration-rule-strong decoration-1 underline-offset-[10px] transition-colors duration-300 hover:decoration-text"
              >
                {SITE.email}
              </a>
              <p className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-small text-muted">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="transition-colors hover:text-text" target="_blank" rel="noreferrer">
                    {l.label} ↗
                  </a>
                ))}
              </p>
            </div>
            <p className="text-small text-muted md:col-span-4 md:text-right">Frankfurt am Main</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
