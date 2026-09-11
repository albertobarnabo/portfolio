import About from "@/components/About";
import Contact from "@/components/Contact";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import MotionProvider from "@/components/MotionProvider";
import Nav from "@/components/Nav";
import ProofStrip from "@/components/ProofStrip";
import StickyPill from "@/components/StickyPill";
import Tools from "@/components/Tools";
import { getStats } from "@/lib/stats";

// Re-fetch Hugging Face / GitHub numbers at most once a day.
export const revalidate = 86400;

export default async function Home() {
  const stats = await getStats();
  const built = new Date().toISOString().slice(0, 10);
  return (
    <MotionProvider>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-accent-ink"
      >
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <ProofStrip stats={stats} />
        <FeaturedWork stats={stats} />
        <Models stats={stats} />
        <Tools />
        <About />
      </main>
      <Contact />
      <Footer stats={stats} built={built} />
      <StickyPill />
    </MotionProvider>
  );
}
