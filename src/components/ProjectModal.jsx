import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 240, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="glass border-gradient max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-8"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wide text-secondary">{project.tag}</span>
                <h3 className="mt-2 font-display text-3xl font-semibold text-ink">{project.name}</h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="rounded-full border border-white/10 p-2 text-muted transition-colors hover:text-ink"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {project.stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                  <p className="font-display text-xl font-semibold text-ink">{s.value}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-muted">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 space-y-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted">The challenge</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink/90">{project.challenge}</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted">The solution</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink/90">{project.solution}</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted">Key features</h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted">Stack</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3 border-t border-white/8 pt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.02]"
              >
                <GithubIcon size={16} />
                View Repository
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
