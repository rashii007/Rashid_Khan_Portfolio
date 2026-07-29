import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const CONTACT_CARDS = [
  { icon: Mail, label: "Email", value: "rashid.khan1.dev@gmail.com", href: "mailto:rashid.khan1.dev@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92 335 9268647", href: "tel:+923359268647" },
  { icon: MapPin, label: "Location", value: "Rawalpindi, Pakistan", href: null },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "/rashid-khan-8643b3380",
    href: "https://linkedin.com/in/rashid-khan-8643b3380",
  },
  { icon: GithubIcon, label: "GitHub", value: "/rashii007", href: "https://github.com/rashii007" },
];

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">Contact</span>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Let's build something amazing together
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Open to full-time roles, internships, freelance work, and remote opportunities. Reach out — I
          usually reply within a day.
        </p>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          {CONTACT_CARDS.map((c) => {
            const Icon = c.icon;
            const content = (
              <div className="glass flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-white/20">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary">
                  <Icon size={17} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wide text-muted">{c.label}</p>
                  <p className="text-sm text-ink">{c.value}</p>
                </div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {content}
              </a>
            ) : (
              <div key={c.label}>{content}</div>
            );
          })}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="glass border-gradient relative space-y-5 rounded-2xl p-7"
        >
          <div>
            <label className="font-mono text-xs uppercase tracking-wide text-muted" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-white/25 focus:border-secondary/50 focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-wide text-muted" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-white/25 focus:border-secondary/50 focus:outline-none"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-wide text-muted" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={4}
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-white/25 focus:border-secondary/50 focus:outline-none"
              placeholder="Tell me about your project…"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            Send Message
            <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
          </button>

          <AnimatePresence>
            {status === "sent" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-success/30 bg-success/15 px-4 py-2 font-mono text-xs text-success shadow-lg"
              >
                <CheckCircle2 size={14} />
                Message queued — I'll get back to you soon.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
