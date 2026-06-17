import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "../data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const hasDetails = project.details && project.details.length > 0;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className={`group relative overflow-hidden rounded-[1.75rem] border border-transparent bg-[#111111] p-6 transition duration-300 hover:border-neon/50 hover:shadow-[0_0_30px_rgba(255,0,60,0.12)] ${project.span}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/70 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-silver/70">
            {project.subtitle || "Project"}
          </p>
          <h3 className="mt-3 font-display text-2xl font-medium text-mist">
            {project.title}
          </h3>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-silver transition group-hover:-translate-y-1 group-hover:text-neon" />
      </div>

      {/* Project Images */}
      {project.images && project.images.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {project.images.map((img, idx) => (
            <div
              key={idx}
              className="aspect-[16/9] overflow-hidden rounded-lg border border-white/5"
            >
              <img
                src={img}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      )}

      {/* Description — always visible */}
      <p className="mt-4 max-w-xl text-sm leading-7 text-silver">
        {project.description}
      </p>

      {/* Expand toggle for details */}
      {hasDetails && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-neon/70 transition hover:text-neon"
          >
            {expanded ? (
              <>
                Hide Details <ChevronUp className="h-3.5 w-3.5" />
              </>
            ) : (
              <>
                Details <ChevronDown className="h-3.5 w-3.5" />
              </>
            )}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="mt-3 space-y-1.5 overflow-hidden"
              >
                {project.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs leading-5 text-silver/70">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neon/50" />
                    {detail}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/5 bg-[#0A0A0A] px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-silver"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="relative scroll-mt-28"
    >
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-neon">Projects</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-mist md:text-4xl">
            Real-world projects from internship & coursework.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-silver">
          A selection of projects spanning computer vision, AI workflows, embedded systems, and networking.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 lg:grid-cols-12"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </motion.section>
  );
}
