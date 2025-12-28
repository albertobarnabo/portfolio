import ToolCard from "./ToolCard";
import { FaTools } from "react-icons/fa";

export default function Tools() {
    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <FaTools className="text-emerald-400 text-3xl" />
                    <h2 className="text-3xl font-bold text-white">Personal Projects</h2>
                </div>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                    Explore the tools I&apos;ve built to solve real-world problems. Each project represents
                    a unique challenge and innovative solution in the world of technology.
                </p>
            </div>

            {/* Tools Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <ToolCard
                    name="InStockr"
                    image="instockr-logo.png"
                    description="Discover products available in physical stores near you. Find what you need in your local area with real-time availability."
                    link="https://instockr.dev/"
                    technologies={["Web App", "Location Services", "Real-time Data"]}
                    gradient="from-blue-600/20 to-cyan-600/20"
                />
                <ToolCard
                    name="InterVous"
                    image="intervous_logo.png"
                    description="Streamline your job search process with AI-powered assistance. Get personalized recommendations and insights."
                    link="https://albertobarnabo.it/intervous"
                    technologies={["AI/ML", "Job Search", "Web Platform"]}
                    gradient="from-purple-600/20 to-pink-600/20"
                />
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-slate-800/30 to-slate-700/30 border border-slate-600/30 rounded-xl p-6">
                <p className="text-slate-400 mb-4">
                    Interested in collaborating or have questions about these projects?
                </p>
                <p className="text-slate-300">
                    Feel free to reach out - I&apos;m always excited to discuss new ideas and opportunities!
                </p>
            </div>
        </div>
    );
}