import { Button } from "@mui/material";
import { FaUser, FaCode, FaDatabase, FaBookOpen, FaAward, FaMapMarkerAlt } from "react-icons/fa";

export default function AboutMe() {
    return (
        <div className="space-y-8">
            {/* Introduction Card */}
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                        <FaUser className="text-blue-400 text-xl" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
                        <div className="space-y-3 text-slate-300 leading-relaxed">
                            <p>
                                I am a trilingual computer science engineer from Italy, passionate about leveraging technology
                                to solve complex problems and create meaningful impact.
                            </p>
                            <p>
                                I hold a bachelor&apos;s degree in computer science engineering from Politecnico di Milano (2021),
                                and two master&apos;s degrees in computer science engineering - one from Politecnico di Milano
                                and one from Xi&apos;an Jiaotong University through a prestigious double degree program.
                            </p>
                            <p>
                                Currently, I work in the Information Systems division of the European Central Bank in Frankfurt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Stack Section */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <FaCode className="text-green-400 text-2xl" />
                    <h2 className="text-2xl font-bold text-white">Technical Expertise</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Programming Languages */}
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                            <span className="text-lg">💻</span> Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">Python</span>
                            <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">Java</span>
                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30">JavaScript</span>
                            <span className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm border border-gray-500/30">C</span>
                            <span className="px-3 py-1 bg-blue-700/20 text-blue-200 rounded-full text-sm border border-blue-700/30">C++</span>
                            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">Dart</span>
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">R</span>
                        </div>
                    </div>

                    {/* Frameworks & Libraries */}
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                            <span className="text-lg">🏗️</span> Frameworks
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">React</span>
                            <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-600/30">Django</span>
                            <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">TensorFlow</span>
                            <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm border border-red-500/30">PyTorch</span>
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">LlamaIndex</span>
                            <span className="px-3 py-1 bg-green-700/20 text-green-200 rounded-full text-sm border border-green-700/30">LangChain</span>
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
                            <FaDatabase className="text-lg" />
                            Databases
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30">MySQL</span>
                            <span className="px-3 py-1 bg-blue-700/20 text-blue-200 rounded-full text-sm border border-blue-700/30">PostgreSQL</span>
                            <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">MongoDB</span>
                            <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-sm border border-cyan-600/30">Neo4j</span>
                            <span className="px-3 py-1 bg-gray-600/20 text-gray-300 rounded-full text-sm border border-gray-600/30">Elasticsearch</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Section */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <FaBookOpen className="text-purple-400 text-2xl" />
                    <h2 className="text-2xl font-bold text-white">Research</h2>
                </div>

                <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-xl p-6">
                    <div className="flex flex-col lg:flex-row items-start gap-6">
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-purple-400 mb-3">
                                Large Language Models for Fact-checking
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                My research explores how Large Language Models can effectively read, understand,
                                and process tabular data to perform accurate fact verification. This work delves into
                                the intersection of AI, data processing, and information validation.
                            </p>
                            <Button
                                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg px-6 py-2 rounded-lg hover:shadow-purple-500/25 transition-all duration-300"
                                color="inherit"
                                href="https://www.politesi.polimi.it/retrieve/92aa2853-e659-4e34-8806-a59043f2990a/2024_10_Barnabo_Executive_Summary.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read Research Paper
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <FaAward className="text-yellow-400 text-2xl" />
                    <h2 className="text-2xl font-bold text-white">Achievements</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Politecnico Achievement */}
                    <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6 text-center">
                        <div className="mb-4">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8eujRinrg5IH5fEkbJKaaRijJlRcIAQEvQ&s"
                                width="80"
                                alt="Politecnico di Milano"
                                className="mx-auto rounded-lg"
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">Politecnico di Milano</h3>
                        <p className="text-slate-300 mb-3">Bachelor&apos;s & Master&apos;s in Computer Science Engineering</p>
                        <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 font-medium">
                            105/110 GPA
                        </span>
                    </div>

                    {/* Mensa Achievement */}
                    <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 rounded-xl p-6 text-center">
                        <div className="mb-4">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Mensa_logo.svg/120px-Mensa_logo.svg.png"
                                width="80"
                                alt="Mensa Logo"
                                className="mx-auto rounded-lg"
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-green-400 mb-2">Mensa International</h3>
                        <p className="text-slate-300 mb-3">High IQ Society Member</p>
                        <span className="inline-block px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30 font-medium">
                            Member
                        </span>
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <FaMapMarkerAlt className="text-red-400 text-2xl" />
                    <h2 className="text-2xl font-bold text-white">My Journey</h2>
                </div>

                <details className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 group">
                    <summary className="cursor-pointer text-xl font-semibold text-slate-300 hover:text-white transition-colors flex items-center justify-between">
                        <span>Professional & Academic Path</span>
                        <span className="text-slate-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>

                    <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
                        <div className="border-l-4 border-blue-500/50 pl-6">
                            <h4 className="font-semibold text-blue-400 mb-2">2016: First Steps in CS</h4>
                            <p>
                                Started my computer science journey with a pre-college program in Cambridge, learning Python and R.
                                Completed a one-month internship at Wins SRL, gaining hands-on experience with relational databases.
                            </p>
                        </div>

                        <div className="border-l-4 border-green-500/50 pl-6">
                            <h4 className="font-semibold text-green-400 mb-2">Bachelor&apos;s at Politecnico di Milano</h4>
                            <p>
                                Pursued computer science engineering at one of the world&apos;s most demanding universities.
                                Mastered Object-Oriented Programming with Java, C programming, and algorithm complexity theory.
                                Gained strong foundations in calculus, linear algebra, electronics, and automation systems.
                            </p>
                        </div>

                        <div className="border-l-4 border-purple-500/50 pl-6">
                            <h4 className="font-semibold text-purple-400 mb-2">Double Master&apos;s Degree</h4>
                            <p>
                                Completed a unique double degree program: one year at Politecnico di Milano and one year
                                at Xi&apos;an Jiaotong University in China. This international experience enriched my cultural
                                perspective and global approach to engineering challenges.
                            </p>
                        </div>

                        <div className="border-l-4 border-orange-500/50 pl-6">
                            <h4 className="font-semibold text-orange-400 mb-2">Professional Experience</h4>
                            <p>
                                After graduation, worked briefly at Capgemini in Milan before joining the European Central Bank
                                in Frankfurt&apos;s Information Systems division. Currently contributing to critical financial
                                technology infrastructure and innovative solutions.
                            </p>
                        </div>

                        <div className="border-l-4 border-cyan-500/50 pl-6">
                            <h4 className="font-semibold text-cyan-400 mb-2">Continuous Learning</h4>
                            <p>
                                Always eager to explore new technologies, share knowledge, and collaborate on innovative projects.
                                Passionate about the intersection of technology, data, and real-world problem solving.
                            </p>
                        </div>
                    </div>
                </details>
            </section>
        </div>
    );
}