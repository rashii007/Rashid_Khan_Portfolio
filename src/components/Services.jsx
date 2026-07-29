import { motion } from "framer-motion";
import { services } from "../data/skills";

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Services</span>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          What I can build for you
        </h2>
      </motion.div>

      <div className="divide-y divide-white/8 border-y border-white/8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group grid items-center gap-4 py-7 transition-colors sm:grid-cols-[80px_1fr_auto] sm:gap-8 hover:bg-white/[0.02]"
          >
            <span className="font-mono text-sm text-white/25">0{i + 1}</span>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-secondary sm:text-2xl">
                {s.title}
              </h3>
              <p className="mt-1.5 max-w-lg text-sm text-muted">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
