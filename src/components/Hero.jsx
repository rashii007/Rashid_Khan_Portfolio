import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import HeroScene from "./HeroScene";
import profilePhoto from "../assets/profile.jpg";

const COMMANDS = [
  {
    cmd: "whoami",
    out: "Muhammad Rashid Khan — Full Stack MERN Developer",
  },
  {
    cmd: "stack",
    out: "React • Node.js • Express • MongoDB • Tailwind",
  },
  {
    cmd: "status",
    out: "✓ Open for internship · freelance · full-time",
  },
];

function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (lineIndex >= COMMANDS.length) return;
    const current = COMMANDS[lineIndex];
    if (charIndex <= current.cmd.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 38);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setHistory((h) => [...h, current]);
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, 420);
    return () => clearTimeout(t);
  }, [charIndex, lineIndex]);

  const typingCmd = COMMANDS[lineIndex]?.cmd.slice(0, charIndex);

  return (
    <div className="glass border-gradient w-full max-w-md rounded-2xl p-5 font-mono text-[13px] shadow-2xl shadow-primary/10">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
      </div>
      <div className="space-y-2.5">
        {history.map((h, i) => (
          <div key={i}>
            <p className="font-mono text-[13px] text-blue-300">
              <span className="mr-1 text-blue-300">➜</span>
              {h.cmd}
            </p>

            <p className="pl-6 font-mono text-[12px] text-slate-400">{h.out}</p>
          </div>
        ))}
        {lineIndex < COMMANDS.length && (
          <p className="text-secondary">
            <span className="text-primary">➜</span> ~ {typingCmd}
            <span className="animate-caret border-r-2 border-secondary">
              &nbsp;
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Aurora mesh background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-bg" />
        <div className="animate-aurora absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/25 blur-[140px]" />
        <div
          className="animate-aurora absolute top-1/3 -right-20 h-[420px] w-[420px] rounded-full bg-secondary/20 blur-[130px]"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="animate-aurora absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-accent/15 blur-[130px]"
          style={{ animationDelay: "8s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 40%, black 40%, transparent 90%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-success/25 bg-success/10 px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="font-mono text-xs tracking-wide text-success">
              Open to full-time · internship · freelance · remote
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Muhammad
            <br />
            <span className="text-gradient">Rashid Khan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            I build modern, scalable web applications using the MERN stack.
            Focused on creating fast, reliable, and user-friendly digital
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-bg shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Hire Me
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="https://drive.google.com/file/d/11IRDM5jrsaKVlCMnhsnA6UfwDql-b9Qe/view?usp=drive_link"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-mono text-sm text-muted underline decoration-white/20 underline-offset-4 transition-colors hover:text-ink"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6"
          >
            {[
              { value: "6+", label: "Shipped Projects" },
              { value: "2", label: "Internships" },
              { value: "MERN", label: "Primary Stack" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-semibold text-ink">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative h-[420px]">
            <HeroScene />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="animate-float absolute left-1/2 top-2 -translate-x-1/2"
            >
              <div className="relative h-[260px] w-[260px]">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary via-secondary to-accent opacity-60 blur-2xl" />
                <div className="border-gradient glass relative h-full w-full overflow-hidden rounded-[2rem] p-1.5">
                  <img
                    src={profilePhoto}
                    alt="Muhammad Rashid Khan"
                    className="h-full w-full scale-135 rounded-[1.6rem] object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="animate-float absolute -bottom-5 left-1/2 z-20 w-[85%] max-w-md -translate-x-1/2"
          >
            <Terminal />
          </motion.div>
        </div>

        <div className="block lg:hidden">
          <div className="mb-6 flex justify-center">
            <div className="relative h-[180px] w-[180px]">
              <div className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-primary via-secondary to-accent opacity-50 blur-xl" />
              <div className="border-gradient glass relative h-full w-full overflow-hidden rounded-[1.75rem] p-1">
                <img
                  src={profilePhoto}
                  alt="Muhammad Rashid Khan"
                  className="h-full w-full rounded-[1.4rem] object-cover object-top"
                />
              </div>
            </div>
          </div>
          <Terminal />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
