import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [active, setActive] = useState(null);
  const large = projects.filter((p) => p.size === "large");
  const rest = projects.filter((p) => p.size !== "large");

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">
          Selected Work
        </span>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Featured projects
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Six shipped builds spanning fintech, AI, and booking systems — every
          repository is real and linked below.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {large.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setActive} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {rest.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onOpen={setActive}
            className="col-span-1"
          />
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
