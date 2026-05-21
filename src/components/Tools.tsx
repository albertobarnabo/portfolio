import ToolCard from "./ToolCard";

export default function Tools() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-40 noise-bg bg-[#060810] overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="glow-blob w-[500px] h-[500px] bg-accent-blue/10 top-1/4 -left-40 animate-pulse-glow" />
      <div
        className="glow-blob w-[400px] h-[400px] bg-accent-violet/10 bottom-1/4 -right-32 animate-pulse-glow"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <div className="label-mono text-[#3ecfa4] mb-6 flex items-center gap-3 animate-fade-up">
          <span className="w-8 h-px bg-[#3ecfa4]/60" />
          Personal Projects
        </div>

        {/* Headline */}
        <h2 className="text-section-head text-[clamp(1.8rem,5vw,3.5rem)] text-white mb-4 animate-fade-up delay-100">
          Things I&apos;ve built
        </h2>
        <p className="text-[#8a94b0] text-[1rem] md:text-[1.05rem] max-w-xl leading-relaxed mb-12 md:mb-16 animate-fade-up delay-200">
          Explore the tools I&apos;ve built to solve real-world problems. Each
          project represents a unique challenge and innovative solution in the
          world of technology.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up delay-300">
          <ToolCard
            name="Axion: The Headless Intelligence Kernel"
            image="axion-logo.png"
            description="A governance layer that orchestrates autonomous agents via strict tool-calling security directives. Built on Rust and Serde, it synthesizes raw intent into verified, structured state—zero hallucinations, 100% integrity."
            link="https://albertobarnabo.com/axion/"
            technologies={["Rust", "LLM", "Agentic Workflows", "Governance"]}
            accentColor="rgba(91,142,240,0.35)"
          />
          <ToolCard
            name="InStockr"
            image="instockr-logo.png"
            description="Discover products available in physical stores near you. Find what you need in your local area with real-time availability."
            link="https://instockr.dev/"
            technologies={["Web App", "Location Services", "Real-time Data"]}
            accentColor="rgba(62,207,164,0.4)"
          />
          <ToolCard
            name="InterVous"
            image="intervous_logo.png"
            description="Streamline your job search process with AI-powered assistance. Get personalized recommendations and insights."
            link="https://albertobarnabo.com/intervous"
            technologies={["AI/ML", "Job Search", "Web Platform"]}
            accentColor="rgba(155,111,240,0.4)"
          />
          
        </div>

        {/* CTA strip */}
        <div className="mt-12 glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-4 animate-fade-up delay-400">
          <p className="text-[#8a94b0] text-[0.9rem] md:text-[0.95rem] leading-relaxed max-w-lg text-center md:text-left">
            Interested in collaborating or have questions about these projects?{" "}
            <span className="text-[#eef2ff]">
              I&apos;m always excited to discuss new ideas and opportunities!
            </span>
          </p>
          <a
            href="#contact"
            className="btn-primary flex-shrink-0 w-full md:w-auto text-center justify-center"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </section>
  );
}
