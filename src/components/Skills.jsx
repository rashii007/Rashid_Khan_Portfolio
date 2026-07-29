import { motion } from "framer-motion";
import { skillGroups, currentlyLearning } from "../data/skills";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

export default function Skills() {
  const marqueeItems = skillGroups.flatMap((g) => g.items);

  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="mb-14"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Tech Stack</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Tools I build with
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={i + 1}
              className="glass border-gradient group rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-secondary">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={5}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted">Currently learning</span>
          {currentlyLearning.map((l) => (
            <span
              key={l}
              className="rounded-full border border-warning/25 bg-warning/10 px-3 py-1 font-mono text-xs text-warning"
            >
              {l}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Infinite marquee of the full stack */}
      <div className="mt-16 overflow-hidden border-y border-white/8 bg-white/[0.02] py-5">
        <div className="animate-marquee flex w-max gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="font-display text-2xl font-medium text-white/15 whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
