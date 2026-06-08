import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

type ToolCardProps = {
  name: string;
  image: string;
  description: string;
  link: string;
  technologies?: string[];
  accentColor?: string;
  ctaLabel?: string;
};

export default function ToolCard({
  name,
  image,
  description,
  link,
  technologies = [],
  accentColor = "rgba(91,142,240,0.35)",
  ctaLabel = "Try It Out",
}: ToolCardProps) {
  return (
    <div className="glass glass-hover rounded-2xl p-6 md:p-8 flex flex-col h-full transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
        <div
          className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.09)",
          }}
        >
          <Image
            width={40}
            height={40}
            src={`/${image}`}
            alt={name}
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
        </div>
        <h3
          className="text-lg md:text-xl font-bold text-white"
          style={{ letterSpacing: "-0.02em" }}
        >
          {name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#8a94b0] leading-relaxed mb-6 flex-grow text-[0.9rem] md:text-[0.95rem]">
        {description}
      </p>

      {/* Tags */}
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="glass-tag label-mono text-[#8a94b0] rounded-full px-2 md:px-3 py-1 text-[0.65rem] md:text-[0.7rem]"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost w-full justify-center mt-auto py-3 md:py-4"
        style={{ borderColor: accentColor, color: "#eef2ff" }}
      >
        {ctaLabel}
        <FaExternalLinkAlt className="text-xs opacity-60 ml-2" />
      </a>
    </div>
  );
}
