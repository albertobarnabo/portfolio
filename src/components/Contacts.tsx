import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="photo-bg noise-bg relative min-h-[80vh] flex items-center py-32"
    >
      {/* Background: Frankfurt photo */}
      <Image
        src="/archery.jpeg"
        alt="Archery"
        fill
        className="object-cover object-top"
        style={{ position: "absolute" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#060810]/90 via-[#060810]/75 to-[#060810]/95" />
      <div className="absolute inset-0 z-[3] bg-gradient-to-r from-[#060810]/80 via-transparent to-[#060810]/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 w-full">
        <div className="flex flex-col items-end text-right">
          {/* Label */}
          <div className="label-mono text-[#5b8ef0] mb-6 flex items-center gap-3 animate-fade-up">
            Contact
            <span className="w-8 h-px bg-[#5b8ef0]/60" />
          </div>

          {/* Headline */}
          <h2 className="text-section-head text-[clamp(2.5rem,6vw,4rem)] text-white mb-4 animate-fade-up delay-100">
            Get In Touch
          </h2>
          <p className="text-[#8a94b0] text-[1.05rem] leading-relaxed max-w-xl mb-12 animate-fade-up delay-200">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a conversation about technology and
            innovation.
          </p>
        </div>
        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10 animate-fade-up delay-300">
          {/* Email */}
          <a
            href="mailto:alberto.barnabo@gmail.com"
            className="glass glass-hover rounded-2xl p-6 group flex items-start gap-4 no-underline"
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/08 group-hover:bg-[#5b8ef0]/15 transition-colors">
              <FaEnvelope className="text-[#5b8ef0] text-lg" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <p className="text-[#8a94b0] text-sm mb-2">
                Drop me a message anytime
              </p>
              <span className="text-[#5b8ef0] text-sm font-medium">
                alberto.barnabo@gmail.com
              </span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/alberto-barnab%C3%B2-9a003817b/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover rounded-2xl p-6 group flex items-start gap-4 no-underline"
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/08 group-hover:bg-[#9b6ff0]/15 transition-colors">
              <FaLinkedin className="text-[#9b6ff0] text-lg" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">LinkedIn</h3>
              <p className="text-[#8a94b0] text-sm mb-2">
                Connect with me professionally
              </p>
              <span className="text-[#9b6ff0] text-sm font-medium">
                Alberto Barnabò
              </span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/albertobarnabo"
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover rounded-2xl p-6 group flex items-start gap-4 no-underline"
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/08 group-hover:bg-white/15 transition-colors">
              <FaGithub className="text-white text-lg" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">GitHub</h3>
              <p className="text-[#8a94b0] text-sm mb-2">
                Check out my projects and code
              </p>
              <span className="text-white text-sm font-medium">
                albertobarnabo
              </span>
            </div>
          </a>

          {/* Location */}
          <div className="glass rounded-2xl p-6 group flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/08 group-hover:bg-[#3ecfa4]/15 transition-colors">
              <FaMapMarkerAlt className="text-[#3ecfa4] text-lg" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Location</h3>
              <p className="text-[#8a94b0] text-sm mb-2">
                Based in Frankfurt, Germany
              </p>
              <p className="text-[#3ecfa4] text-sm font-medium">
                European Central Bank
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
