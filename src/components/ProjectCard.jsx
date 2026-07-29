import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProjectCard({ project, onOpen, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className={`group border-gradient glass relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(500px circle at var(--mx,50%) var(--my,50%), rgba(139,92,246,0.12), transparent 60%)",
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
        }}
      />

      <div>
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs text-white/25">{project.index}</span>
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${project.name} on GitHub`}
              className="text-muted transition-colors hover:text-ink"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </div>

        <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{project.name}</h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-wide text-secondary">{project.tag}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4">
        <div className="flex gap-5">
          {project.stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-lg font-semibold text-ink">{s.value}</p>
              <p className="font-mono text-[10px] uppercase tracking-wide text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-1 font-mono text-xs text-ink transition-colors hover:text-secondary"
        >
          Details
          <ArrowUpRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}
