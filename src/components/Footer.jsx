import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row">
        <div>
          <div className="text-sm font-medium">Dreamwave</div>
          <p className="text-xs text-white/60">Wavy animated background • Digital, dreamy, modern</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#get-started"
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Get Started
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15 transition hover:bg-white/15"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15 transition hover:bg-white/15"
          >
            <Twitter className="h-4 w-4" />
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
