import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "../data/portfolio";
import { useTextScramble } from "../hooks/useTextScramble";
import { MapPin, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const identity = useTextScramble(`${profile.name}`);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative scroll-mt-28"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="mx-auto flex max-w-5xl flex-col items-center lg:flex-row lg:items-start lg:gap-12"
      >
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="shrink-0"
        >
          <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-neon/30 shadow-[0_0_30px_rgba(255,0,60,0.15)] sm:h-52 sm:w-52 lg:h-60 lg:w-60">
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="mt-8 flex flex-col items-center text-center lg:mt-0 lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.08, duration: 0.55, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-neon"
          >
            <span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_18px_rgba(255,0,60,0.8)]" />
            Portfolio — Academy 2026
          </motion.div>

          <h1 className="mt-6 max-w-4xl font-display text-4xl font-medium tracking-tight text-mist sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-mist via-white to-silver bg-[length:200%_200%] bg-clip-text text-transparent animate-shimmer">
              {identity}
            </span>
            <span className="ml-3 inline-block animate-pulse text-neon">|</span>
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-7 text-neon/80 sm:text-lg">
            {profile.title}
          </p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" }}
            className="mt-5 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <span className="inline-flex items-center gap-1.5 text-sm text-silver">
              <Mail className="h-3.5 w-3.5 text-neon/60" />
              {profile.email}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-silver">
              <Linkedin className="h-3.5 w-3.5 text-neon/60" />
              {profile.linkedin}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-silver">
              <MapPin className="h-3.5 w-3.5 text-neon/60" />
              {profile.location}
            </span>
          </motion.div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <motion.button
              type="button"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
              className="inline-flex items-center gap-2 rounded-full border border-neon/50 bg-neon/10 px-6 py-3 font-medium text-mist shadow-neon transition animate-breathe hover:border-neon hover:bg-neon/15"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/6 bg-white/0 px-6 py-3 font-medium text-silver transition hover:border-white/10 hover:bg-white/5 hover:text-mist"
            >
              About / Skills
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.22, duration: 0.55, ease: "easeOut" }}
            className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            {profile.pillars.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full border border-white/5 bg-[#111111] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-silver shadow-[0_0_18px_rgba(255,255,255,0.02)]"
              >
                {pillar}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
