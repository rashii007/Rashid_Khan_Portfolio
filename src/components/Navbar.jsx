import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Menu, Search, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
      if (e.key === "Escape") setPaletteOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = LINKS.filter((l) => l.label.toLowerCase().includes(query.toLowerCase()));

  const goTo = (href) => {
    setOpen(false);
    setPaletteOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-500 ${
            scrolled ? "glass mx-4 rounded-2xl py-2.5 md:mx-auto" : ""
          }`}
        >
          <a href="#home" className="font-display text-lg font-semibold tracking-tight text-ink">
            RK<span className="text-primary">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => goTo(l.href)}
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => setPaletteOpen(true)}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted transition-colors hover:border-white/20 hover:text-ink"
            >
              <Search size={13} />
              <span className="font-mono">Search</span>
              <span className="ml-1 flex items-center gap-0.5 rounded border border-white/10 px-1 font-mono text-[10px]">
                <Command size={10} /> K
              </span>
            </button>
            <a
              href="https://github.com/rashii007"
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-ink"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/rashid-khan-8643b3380"
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-ink"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>

          <button
            className="text-ink md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-ink">
                <X size={26} />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 pt-10">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => goTo(l.href)}
                  className="font-display text-3xl font-medium text-ink"
                >
                  {l.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command palette */}
      <AnimatePresence>
        {paletteOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-start justify-center bg-black/70 pt-32 backdrop-blur-sm"
            onClick={() => setPaletteOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="glass w-[92%] max-w-lg overflow-hidden rounded-2xl"
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
                <Search size={16} className="text-muted" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Jump to a section…"
                  className="w-full bg-transparent font-mono text-sm text-ink placeholder:text-muted focus:outline-none"
                />
                <kbd className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-muted">
                  ESC
                </kbd>
              </div>
              <ul className="max-h-72 overflow-y-auto py-2">
                {filtered.length === 0 && (
                  <li className="px-4 py-3 font-mono text-xs text-muted">No matching sections.</li>
                )}
                {filtered.map((l) => (
                  <li key={l.href}>
                    <button
                      onClick={() => goTo(l.href)}
                      className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-ink/90 transition-colors hover:bg-white/5"
                    >
                      {l.label}
                      <span className="font-mono text-[10px] text-muted">{l.href}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
