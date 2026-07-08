import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowDown, Download } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/brand-icons";
import { site } from "@/lib/data";
import { ButtonLink } from "@/components/ui/button";

/** Stagger delay for the on-load rise animation (matches the old 0.1s cadence). */
const rise = (i: number) => ({ "--rise-delay": `${i * 0.1}s` }) as CSSProperties;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="rise mb-8" style={rise(0)}>
            <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full border border-border bg-card shadow-sm">
              <Image
                src="/profile.jpg"
                alt={site.name}
                width={240}
                height={240}
                priority
                className="h-[120px] w-[120px] object-cover"
              />
              <span className="absolute bottom-1 right-1 z-10 h-4 w-4 rounded-full border-2 border-card bg-green-500" />
            </div>
          </div>

          <div
            className="rise mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
            style={rise(1)}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {site.title}
          </div>

          <h1
            className="rise text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
            style={rise(2)}
          >
            Enterprise products by profession.
            <br className="hidden sm:block" />{" "}
            <span className="text-accent">AI products by habit.</span>
          </h1>

          <p
            className="rise mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground"
            style={rise(3)}
          >
            {site.subheadline}
          </p>

          <div
            className="rise mt-9 flex flex-col items-center gap-3 sm:flex-row"
            style={rise(4)}
          >
            <ButtonLink href="/#projects">
              View Projects <ArrowDown className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={site.resumeUrl} external variant="secondary">
              <Download className="h-4 w-4" /> Download Resume
            </ButtonLink>
            <ButtonLink href={site.links.linkedin} external variant="ghost">
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
