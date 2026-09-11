import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { MORE, type Minor } from "@/data/site";
import { Reveal } from "./Reveal";

function Thumb({ m }: { m: Minor }) {
  if (!m.thumb) {
    return (
      <div className="font-display flex h-full w-full items-end p-5 text-[2.2rem] font-extrabold leading-none text-text/90">
        {m.title}
      </div>
    );
  }
  if (m.thumb.endsWith(".svg")) {
    const logo = m.thumb.includes("opal-zero");
    return (
      <div className={`flex h-full w-full items-center justify-center ${logo ? "p-10" : ""}`}>
        {/* SVG assets are served as-is; next/image would refuse to optimise them */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={m.thumb}
          alt={m.thumbAlt ?? ""}
          className={logo ? "max-h-full max-w-full object-contain" : "h-full w-full object-cover"}
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <Image
      src={m.thumb}
      alt={m.thumbAlt ?? ""}
      fill
      sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    />
  );
}

export default function Tools() {
  return (
    <section id="tools" aria-labelledby="tools-h" className="wrap pt-24 md:pt-36" data-nav-theme="night">
      <Reveal>
        <p className="eyebrow">
          <span className="text-accent">03</span> — Tools & experiments
        </p>
        <h2 id="tools-h" className="font-display mt-4 text-h2">The long tail.</h2>
      </Reveal>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MORE.map((m, i) => (
          <Reveal key={m.title} delay={(i % 3) * 0.06} amount={0.1}>
            <li className="group flex h-full flex-col overflow-hidden rounded-card border border-rule bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-rule-strong hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <div className="sheen relative aspect-[16/9] overflow-hidden border-b border-rule bg-surface-2">
                <Thumb m={m} />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-[1.15rem] font-bold leading-tight">{m.title}</h3>
                  <span className="chip shrink-0">{m.tag}</span>
                </div>
                <p className="mt-2 flex-1 text-small text-muted">{m.body}</p>
                <div className="mt-4 flex gap-4">
                  {m.links.map((l) => (
                    <a key={l.href} href={l.href} className="arrow-link text-[12px]" target="_blank" rel="noreferrer">
                      {l.label} <FiArrowUpRight size={12} aria-hidden />
                    </a>
                  ))}
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
