import { motion } from "framer-motion";
import { timeline } from "../data/skills";

export default function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Journey</span>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Education & experience
        </h2>
      </motion.div>

      <div className="relative pl-8">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
        <div className="space-y-12">
          {timeline.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[38px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-gradient-to-br from-primary to-secondary shadow-[0_0_0_4px_rgba(139,92,246,0.15)]" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted">{t.year}</span>
              <h3 className="mt-1 font-display text-xl font-semibold text-ink">{t.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{t.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
