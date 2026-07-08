"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav-rise fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300",
          scrolled
            ? "glass border-border shadow-sm"
            : "border-transparent bg-transparent"
        )}
      >
        <Link
          href="/"
          className="group flex items-center gap-2 pl-1 font-semibold tracking-tight"
        >
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent text-xs font-bold text-white">
            S
          </span>
          <span className="hidden sm:inline">{site.name.split(" ")[0]}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-background-subtle hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink
            href={site.resumeUrl}
            external
            size="sm"
            variant="secondary"
            className="hidden sm:inline-flex"
          >
            <Download className="h-4 w-4" /> Resume
          </ButtonLink>
          <ButtonLink
            href={site.links.linkedin}
            external
            size="sm"
            className="hidden sm:inline-flex"
          >
            Let&apos;s connect
            <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-20 w-[calc(100%-2rem)] max-w-5xl rounded-2xl border border-border glass p-2 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-foreground/90 hover:bg-background-subtle"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink
              href={site.resumeUrl}
              external
              variant="secondary"
              className="mt-1 w-full"
              size="sm"
            >
              <Download className="h-4 w-4" /> Download Resume
            </ButtonLink>
            <ButtonLink
              href={site.links.linkedin}
              external
              className="mt-1 w-full"
              size="sm"
            >
              Let&apos;s connect <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
