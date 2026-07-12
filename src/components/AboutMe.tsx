import Image from "next/image";
import { FaBookOpen } from "react-icons/fa";

// ─── Shared chip component ─────────────────────────────
function Chip({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="glass-tag label-mono rounded-full px-3 md:px-4 py-1.5 md:py-2 text-[0.8rem] md:text-[0.95rem]"
      style={{ color }}
    >
      {label}
    </span>
  );
}

// ─── Timeline entry ────────────────────────────────────
function TimelineEntry({
  year,
  title,
  body,
  color,
}: {
  year: string;
  title: string;
  body: string;
  color: string;
}) {
  return (
    <div className="flex gap-5 md:gap-6">
      <div className="flex flex-col items-center">
        <div
          className="timeline-dot border-2 shrink-0 w-4 h-4 md:w-[18px] md:h-[18px]"
          style={{ borderColor: color, background: `${color}30` }}
        />
        <div className="flex-1 w-px bg-white/10 mt-2" />
      </div>
      <div className="pb-10 md:pb-14">
        <span
          className="label-mono text-sm md:text-base font-semibold"
          style={{ color }}
        >
          {year}
        </span>
        <h4
          className="text-white font-bold text-xl md:text-2xl mt-2 mb-3"
          style={{ letterSpacing: "-0.01em" }}
        >
          {title}
        </h4>
        <p className="text-[#c2c9dd] text-base md:text-lg leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  );
}

// ─── ABOUT ME ──────────────────────────────────────────
export default function AboutMe() {
  return (
    <>
      {/* ───────────────────────────────────────────────────
          ABOUT SECTION
      ─────────────────────────────────────────────────── */}
      <section
        id="about"
        className="relative py-32 md:py-40 noise-bg bg-[#0a0e1a] overflow-hidden"
      >
        {/* Glow blobs */}
        <div className="glow-blob w-[600px] h-[600px] bg-[#5b8ef0]/8 -top-40 -right-40 animate-pulse-glow" />
        <div className="glow-blob w-[400px] h-[400px] bg-[#3ecfa4]/8 bottom-0 -left-32 animate-pulse-glow delay-300" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          {/* Label */}
          <div className="label-mono text-[#5b8ef0] mb-6 flex items-center gap-3 animate-fade-up">
            <span className="w-8 h-px bg-[#5b8ef0]/60" />
            About
          </div>

          {/* Two-col layout: text + photo-inset */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: bio */}
            <div className="animate-fade-up delay-100">
              <h2 className="text-section-head text-[clamp(2.2rem,5vw,3.5rem)] text-white mb-8">
                About Me
              </h2>
              <div className="space-y-4 text-[#8a94b0] text-xl leading-relaxed">
                <p>
                  I am a trilingual computer science engineer from Italy,
                  passionate about leveraging technology to solve complex
                  problems and create meaningful impact.
                </p>
                <p>
                  I hold a bachelor&apos;s degree in computer science
                  engineering from Politecnico di Milano (2021), and two
                  master&apos;s degrees in computer science engineering — one
                  from Politecnico di Milano and one from Xi&apos;an Jiaotong
                  University through a prestigious double degree program.
                </p>
                <p>
                  Currently, I work as an AI engineer for the European Central
                  Bank in Frankfurt.
                </p>
              </div>
            </div>

            {/* Right: photo inset */}
            <div className="animate-fade-up delay-200 block lg:mt-0 mt-8">
              <div
                className="relative h-[450px] md:h-[520px] rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "var(--shadow-high)",
                }}
              >
                <Image
                  src="/ffm.jpg"
                  alt="ffm"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center top" }}
                />
                {/* Radial fade mask */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 70%, #0a0e1a 100%), linear-gradient(to right, transparent 70%, #0a0e1a 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────
          TECH STACK SECTION
      ─────────────────────────────────────────────────── */}
      <section
        id="stack"
        className="photo-bg noise-bg relative py-32 md:py-40 overflow-hidden"
      >
        {/* Background: Hua Shan mountain */}
        <Image
          src="/hua_shan.jpg"
          alt="Hua Shan"
          fill
          className="object-cover object-center"
          style={{
            position: "absolute",
            filter: "saturate(0.5) brightness(0.35)",
          }}
        />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#060810]/70 via-[#060810]/50 to-[#060810]/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          {/* Label */}
          <div className="label-mono text-[#9b6ff0] mb-6 flex items-center gap-3 animate-fade-up">
            <span className="w-8 h-px bg-[#9b6ff0]/60" />
            Technical Expertise
          </div>

          <h2 className="text-section-head text-[clamp(2.2rem,5vw,3.5rem)] text-white mb-16 animate-fade-up delay-100">
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 animate-fade-up delay-200">
            {/* Languages */}
            <div className="glass glass-hover rounded-2xl p-8 md:p-10">
              <h3 className="text-white font-semibold text-base md:text-lg mb-6 md:mb-8 flex items-center gap-3">
                <span className="text-xl md:text-2xl">💻</span>
                <span style={{ letterSpacing: "-0.01em" }}>Languages</span>
              </h3>
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                {[
                  { l: "Python", c: "#60a5fa" },
                  { l: "TypeScript", c: "#67e8f9" },
                  { l: "Rust", c: "#fb923c" },
                  { l: "Java", c: "#fca5a5" },
                  { l: "C", c: "#94a3b8" },
                ].map(({ l, c }) => (
                  <Chip key={l} label={l} color={c} />
                ))}
              </div>
            </div>

            {/* AI & LLM Engineering */}
            <div className="glass glass-hover rounded-2xl p-8 md:p-10">
              <h3 className="text-white font-semibold text-base md:text-lg mb-6 md:mb-8 flex items-center gap-3">
                <span className="text-xl md:text-2xl">🧠</span>
                <span style={{ letterSpacing: "-0.01em" }}>
                  AI &amp; LLM Engineering
                </span>
              </h3>
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                {[
                  { l: "RAG Pipelines", c: "#86efac" },
                  { l: "LLM Fine-tuning (LoRA/SFT)", c: "#c084fc" },
                  { l: "Prompt Engineering", c: "#fbbf24" },
                  { l: "LangChain", c: "#86efac" },
                  { l: "HuggingFace", c: "#fbbf24" },
                  { l: "OpenAI API", c: "#93c5fd" },
                  { l: "PyTorch", c: "#fca5a5" },
                ].map(({ l, c }) => (
                  <Chip key={l} label={l} color={c} />
                ))}
              </div>
            </div>

            {/* Infra & MLOps */}
            <div className="glass glass-hover rounded-2xl p-8 md:p-10">
              <h3 className="text-white font-semibold text-base md:text-lg mb-6 md:mb-8 flex items-center gap-3">
                <span className="text-xl md:text-2xl">⚙️</span>
                <span style={{ letterSpacing: "-0.01em" }}>
                  Infra &amp; MLOps
                </span>
              </h3>
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                {[
                  { l: "Docker", c: "#60a5fa" },
                  { l: "AWS (EC2/S3/Lambda)", c: "#fb923c" },
                  { l: "GitLab", c: "#fca5a5" },
                  { l: "DataDog", c: "#c084fc" },
                  { l: "SQL", c: "#93c5fd" },
                  { l: "Vector Storage", c: "#67e8f9" },
                ].map(({ l, c }) => (
                  <Chip key={l} label={l} color={c} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────
          RESEARCH SECTION
      ─────────────────────────────────────────────────── */}
      <section
        id="research"
        className="relative py-32 md:py-40 noise-bg bg-[#060810] overflow-hidden"
      >
        <div className="glow-blob w-[500px] h-[500px] bg-[#9b6ff0]/10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 animate-pulse-glow" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="label-mono text-[#9b6ff0] mb-6 flex items-center gap-3 animate-fade-up">
            <span className="w-8 h-px bg-[#9b6ff0]/60" />
            Research
          </div>

          <div className="glass-heavy rounded-3xl p-10 md:p-14 animate-fade-up delay-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#9b6ff0]/15 border border-[#9b6ff0]/20">
                <FaBookOpen className="text-[#9b6ff0] text-base" />
              </div>
              <span className="label-mono text-[#9b6ff0] mt-2.5">
                Master&apos;s Thesis · 2024
              </span>
            </div>

            <h2 className="text-section-head text-[clamp(1.8rem,4vw,3rem)] text-white mb-6">
              Large Language Models
              <br />
              <span className="text-gradient-soft">for Fact-checking</span>
            </h2>

            <p className="text-[#8a94b0] text-[1.05rem] leading-relaxed max-w-2xl mb-10">
              My research explores how Large Language Models can effectively
              read, understand, and process tabular data to perform accurate
              fact verification. This work delves into the intersection of AI,
              data processing, and information validation.
            </p>

            <a
              href="https://www.politesi.polimi.it/retrieve/92aa2853-e659-4e34-8806-a59043f2990a/2024_10_Barnabo_Executive_Summary.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Read Research Paper
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────
          JOURNEY / TIMELINE SECTION
      ─────────────────────────────────────────────────── */}
      <section
        id="journey"
        className="photo-bg noise-bg relative py-32 md:py-40 overflow-hidden"
      >
        {/* Background: BCE photo */}
        <Image
          src="/bce.jpg"
          alt="European Central Bank"
          fill
          className="object-cover object-center"
          style={{
            position: "absolute",
            filter: "saturate(0.8) brightness(0.5)",
          }}
        />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#060810]/90 via-[#060810]/70 to-[#060810]/50" />
        <div className="absolute inset-0 z-[3] bg-gradient-to-b from-[#060810]/60 via-transparent to-[#060810]/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="label-mono text-[#fb923c] mb-6 flex items-center gap-3 animate-fade-up">
            <span className="w-8 h-px bg-[#fb923c]/60" />
            My Journey
          </div>

          <h2 className="text-section-head text-[clamp(2.2rem,5vw,3.5rem)] text-white mb-16 animate-fade-up delay-100">
            From Milan to Frankfurt
          </h2>

          <div className="max-w-3xl animate-fade-up delay-200">
            <TimelineEntry
              year="2016 — First Steps in CS"
              title="First Steps in CS"
              body="Started my computer science journey with a pre-college program in Cambridge, learning Python and R. Completed a one-month internship at Wins SRL, gaining hands-on experience with relational databases."
              color="#60a5fa"
            />
            <TimelineEntry
              year="2017–2021"
              title="Bachelor's at Politecnico di Milano"
              body="Pursued computer science engineering at one of the world's most demanding universities. Mastered Object-Oriented Programming with Java, C programming, and algorithm complexity theory. Gained strong foundations in calculus, linear algebra, electronics, and automation systems."
              color="#6ee7b7"
            />
            <TimelineEntry
              year="2021–2024"
              title="Double Master's Degree"
              body="Completed a unique double degree program: one year at Politecnico di Milano and two years at Xi'an Jiaotong University in China. This international experience enriched my cultural perspective and global approach to engineering challenges. During this period I worked as an AI researcher on NLP and Large Language Models, whose results are presented in my Master's Thesis."
              color="#c084fc"
            />
            <TimelineEntry
              year="2024 — present"
              title="Professional Experience"
              body="After graduation, worked briefly at Capgemini in Milan before joining the European Central Bank in Frankfurt's Information Systems division. Currently working in the internal AI team, where we develop and maintain AI tools to be used internally in the bank."
              color="#fb923c"
            />
          </div>
        </div>
      </section>
    </>
  );
}
