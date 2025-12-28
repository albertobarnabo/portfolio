import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <FaPaperPlane className="text-blue-400 text-3xl" />
                    <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
                </div>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                    I&apos;m always open to discussing new opportunities, interesting projects,
                    or just having a conversation about technology and innovation.
                </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Email Card */}
                <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                            <FaEnvelope className="text-blue-400 text-xl" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                            <p className="text-slate-300 mb-3">Drop me a message anytime</p>
                            <a
                                href="mailto:alberto.barnabo@gmail.com"
                                className="text-blue-400 hover:text-blue-300 transition-colors font-medium inline-flex items-center gap-2"
                            >
                                alberto.barnabo@gmail.com
                                <FaEnvelope className="text-sm" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* LinkedIn Card */}
                <div className="bg-gradient-to-r from-blue-700/10 to-indigo-600/10 border border-blue-600/20 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                            <FaLinkedin className="text-blue-500 text-xl" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                            <p className="text-slate-300 mb-3">Connect with me professionally</p>
                            <a
                                href="https://www.linkedin.com/in/alberto-barnab%C3%B2-9a003817b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-400 transition-colors font-medium inline-flex items-center gap-2"
                            >
                                Alberto Barnabò
                                <FaLinkedin className="text-sm" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Location Card */}
            <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-green-500/20 rounded-lg">
                            <FaMapMarkerAlt className="text-green-400 text-xl" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                            <p className="text-slate-300">
                                Based in Frankfurt, Germany
                            </p>
                            <p className="text-slate-400 text-sm mt-1">
                                Working at the European Central Bank • Open to remote opportunities
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-slate-800/30 to-slate-700/30 border border-slate-600/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Let&apos;s Work Together</h3>
                <p className="text-slate-300 mb-4">
                    Whether you have a project in mind, want to collaborate, or just want to say hello,
                    I&apos;d love to hear from you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="mailto:alberto.barnabo@gmail.com"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 font-medium inline-flex items-center justify-center gap-2"
                    >
                        <FaEnvelope />
                        Send Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/alberto-barnab%C3%B2-9a003817b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 font-medium inline-flex items-center justify-center gap-2"
                    >
                        <FaLinkedin />
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}
