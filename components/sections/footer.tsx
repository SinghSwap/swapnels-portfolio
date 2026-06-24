import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/brand-icons";
import { navLinks, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent text-xs font-bold text-white">
                S
              </span>
              {site.name}
            </Link>
            <p className="mt-4 text-lg font-medium text-balance">
              &ldquo;Build things. Learn continuously. Compound relentlessly.&rdquo;
            </p>
          </div>

          <div className="flex gap-16">
            <nav className="flex flex-col gap-2.5 text-sm">
              <span className="mb-1 text-xs font-medium uppercase tracking-wider text-muted">
                Navigate
              </span>
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2.5 text-sm">
              <span className="mb-1 text-xs font-medium uppercase tracking-wider text-muted">
                Connect
              </span>
              <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href={site.links.email} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.name}. Built with Next.js & Tailwind.
          </span>
        </div>
      </div>
    </footer>
  );
}
