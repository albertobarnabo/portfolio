import { Button } from "@mui/material";
import Image from 'next/image';
import { FaExternalLinkAlt } from "react-icons/fa";

type ToolCardProps = {
    name: string;
    image: string;
    description: string;
    link: string;
    technologies?: string[];
    gradient?: string;
};

export default function ToolCard({ name, image, description, link, technologies = [], gradient = "from-slate-800/50 to-slate-700/50" }: ToolCardProps) {
    return (
        <div className={`bg-gradient-to-br ${gradient} border border-slate-600/30 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group`}>
            <div className="flex flex-col h-full">
                {/* Header with Logo and Title */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-800/50 rounded-xl group-hover:bg-slate-700/50 transition-colors">
                        <Image
                            width={48}
                            height={48}
                            src={`/${image}`}
                            alt={name}
                            className="w-12 h-12 object-contain"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {name}
                        </h3>
                    </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-4 flex-grow">
                    {description}
                </p>

                {/* Technologies */}
                {technologies.length > 0 && (
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/30"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Action Button */}
                <div className="mt-auto">
                    <Button
                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg px-6 py-3 rounded-lg hover:shadow-emerald-500/25 hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                        color="inherit"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Try It Out
                        <FaExternalLinkAlt className="text-sm" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

