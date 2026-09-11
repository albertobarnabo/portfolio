import { FiArrowUpRight } from "react-icons/fi";
import { OPEN_TO_ROLES, OPEN_TO_ROLES_LINE, SITE } from "@/data/site";
import LocalTime from "./LocalTime";
import { Reveal } from "./Reveal";

export default function Contact() {
  const links = [
    { label: "LinkedIn", href: SITE.linkedin },
    { label: "Hugging Face", href: SITE.hf },
    { label: "GitHub", href: SITE.github },
  ];
  return (
    <footer id="contact" aria-labelledby="contact-h" className="theme-flare bg-bg text-text" data-nav-theme="flare">
      <div className="wrap py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-h" className="font-display mt-4 max-w-[12ch] text-display-1">
            Let’s build something that ships.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <a
                href={`mailto:${SITE.email}`}
                className="font-body inline-block border-b-2 border-text text-[clamp(1.5rem,3.2vw,2.5rem)] font-medium leading-tight transition-opacity hover:opacity-70"
              >
                {SITE.email}
              </a>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="arrow-link text-[14px]" target="_blank" rel="noreferrer">
                      {l.label} <FiArrowUpRight size={13} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
              {OPEN_TO_ROLES && (
                <p className="mt-8 max-w-prose text-body text-muted">{OPEN_TO_ROLES_LINE} — Frankfurt, remote, or relocation within the EU.</p>
              )}
            </div>
            <p className="font-mono text-data text-muted md:col-span-4 md:text-right">
              Frankfurt · <LocalTime /> local
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
