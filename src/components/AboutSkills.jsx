import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { aboutPoints, skillCategories, education, awards, experience, certificates } from "../data/portfolio";
import { Lightbox } from "./Lightbox";

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function AboutSkills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveCategoryIndex((currentIndex) => (currentIndex + 1) % skillCategories.length);
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeCategory = skillCategories[activeCategoryIndex];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="relative scroll-mt-28 pb-24"
    >
      {/* About + Skills Grid */}
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-neon">About</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight text-mist md:text-4xl">
            Computer Engineering student focused on ML, CV, and embedded systems.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-silver md:text-base">
            {education.school} — {education.degree}
          </p>

          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 space-y-4"
          >
            {aboutPoints.map((point) => (
              <motion.li
                key={point}
                variants={listItemVariants}
                className="flex items-start gap-3 text-sm leading-7 text-mist/90"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-neon shadow-[0_0_16px_rgba(255,0,60,0.75)]" />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="glass-panel rounded-[1.75rem] p-6 shadow-neonSoft"
        >
          <p className="text-xs uppercase tracking-[0.45em] text-silver">Technical Skills</p>

          <div className="mt-8 flex min-h-[5rem] items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.label}
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="w-full"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-neon drop-shadow-[0_0_18px_rgba(255,0,60,0.45)]">
                  {activeCategory.label}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeCategory.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-neon/20 bg-neon/5 px-3 py-1 text-xs text-mist"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-3 text-sm leading-7 text-silver">
            {skillCategories.length} categories cycling through the full technical stack.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {skillCategories.map((cat) => {
              const isActive = cat.label === activeCategory.label;

              return (
                <div
                  key={cat.label}
                  className={`rounded-2xl border px-4 py-3 text-sm transition ${
                    isActive
                      ? "border-neon/40 bg-neon/10 text-mist shadow-[0_0_24px_rgba(255,0,60,0.12)]"
                      : "border-white/5 bg-[#0A0A0A] text-silver"
                  }`}
                >
                  {cat.label}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Certificates Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mt-12"
      >
        <p className="text-xs uppercase tracking-[0.45em] text-neon">Certificates</p>
        <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-mist md:text-3xl">
          Education & Awards
        </h3>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {certificates.map((cert, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setLightboxImage(cert)}
              className="group aspect-[4/3] overflow-hidden rounded-xl border border-white/5 bg-[#0A0A0A] transition hover:border-neon/40 hover:shadow-[0_0_20px_rgba(255,0,60,0.1)]"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="h-full w-full object-contain p-2"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      </motion.div>

      {/* Education & Experience & Awards — text only */}
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="glass-panel rounded-[1.75rem] p-6 shadow-neonSoft"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <p className="text-xs uppercase tracking-[0.45em] text-neon">Education</p>
          </div>
          <h3 className="mt-4 font-display text-lg font-medium text-mist">
            {education.school}
          </h3>
          <p className="mt-2 text-sm leading-6 text-silver">
            {education.degree}
          </p>
          <p className="mt-1 text-sm text-silver/70">{education.gpa}</p>
          <p className="mt-1 text-sm text-silver/70">{education.period}</p>
          <p className="mt-1 text-sm text-silver/70">{education.location}</p>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="glass-panel rounded-[1.75rem] p-6 shadow-neonSoft"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">💼</span>
            <p className="text-xs uppercase tracking-[0.45em] text-neon">Experience</p>
          </div>
          <h3 className="mt-4 font-display text-lg font-medium text-mist">
            {experience.projects}
          </h3>
          <p className="mt-2 text-sm leading-6 text-silver">
            {experience.company}
          </p>
          <p className="mt-1 text-sm text-silver/70">{experience.period}</p>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-silver/80">Key areas:</p>
            <ul className="space-y-1">
              {["Machine Learning Engineering", "Computer Vision (Production)", "Industry 4.0 Digitalization"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs leading-5 text-silver/70">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neon/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          className="glass-panel rounded-[1.75rem] p-6 shadow-neonSoft"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏆</span>
            <p className="text-xs uppercase tracking-[0.45em] text-neon">Award</p>
          </div>
          {awards.map((award) => (
            <div key={award.title}>
              <h3 className="mt-4 font-display text-lg font-medium text-mist">
                {award.title}
              </h3>
              <p className="mt-1 text-sm text-silver/70">{award.event}</p>
              <p className="mt-2 text-sm leading-6 text-silver">
                {award.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </motion.section>
  );
}
