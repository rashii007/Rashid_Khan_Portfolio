import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mb-14 flex items-end justify-between gap-6"
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">
            About
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Engineering with intent
          </h2>
        </div>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="space-y-5 text-lg leading-relaxed text-muted"
        >
          <p>
            I'm a passionate{" "}
            <span className="text-ink">Full Stack MERN Developer</span>{" "}
            specializing in building responsive, scalable, and user-friendly web
            applications. I enjoy solving real-world problems through clean
            architecture, modern technologies, and exceptional user experiences.
          </p>
          <p>
            I continuously learn new technologies and focus on writing{" "}
            <span className="text-ink">production-ready code</span> — the kind
            that holds up past the demo, handles edge cases, and reads clearly
            to the next developer who touches it.
          </p>
          <p>
            Exploring{" "}
            <span className="text-secondary">
              Java, Spring Boot, and System Design
            </span>{" "}
            to design scalable backend systems and improve my understanding of
            modern software architecture.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="space-y-4"
        >
          <div className="glass border-gradient rounded-2xl p-6">
            <MapPin size={18} className="text-primary" />
            <p className="mt-3 text-sm text-muted">Based in</p>
            <p className="font-display text-xl font-medium">
              Rawalpindi, Pakistan
            </p>
          </div>
          <div className="glass border-gradient rounded-2xl p-6">
            <GraduationCap size={18} className="text-secondary" />
            <p className="mt-3 text-sm text-muted">Education</p>
            <p className="font-display text-xl font-medium">
              BSCS, University of Mianwali
            </p>
          </div>
          <div className="glass border-gradient rounded-2xl p-6">
            <Sparkles size={18} className="text-accent" />
            <p className="mt-3 text-sm text-muted">Development philosophy</p>
            <p className="font-display text-xl font-medium">
              Clean architecture, shipped often
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
