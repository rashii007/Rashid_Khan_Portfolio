import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Muhammad Rashid Khan. Built with React &amp; care.
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/rashii007" target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-ink" aria-label="GitHub">
            <GithubIcon size={17} />
          </a>
          <a href="https://linkedin.com/in/rashid-khan-8643b3380" target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-ink" aria-label="LinkedIn">
            <LinkedinIcon size={17} />
          </a>
          <a href="mailto:rashid.khan1.dev@gmail.com" className="text-muted transition-colors hover:text-ink" aria-label="Email">
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
