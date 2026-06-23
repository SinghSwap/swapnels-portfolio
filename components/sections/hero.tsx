"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, User } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/brand-icons";
import { site, stats } from "@/lib/data";
import { ButtonLink } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div initial="hidden" animate="visible" className="flex flex-col items-center text-center">
          <motion.div custom={0} variants={fade} className="mb-8">
            <div className="relative grid h-24 w-24 place-items-center overflow-hidden rounded-full border border-border bg-card shadow-sm">
              {/* profile picture placeholder — drop /profile.jpg in public to replace */}
              <User className="h-10 w-10 text-muted" />
              <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-card bg-green-500" />
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={fade}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {site.title}
          </motion.div>

          <motion.h1
            custom={2}
            variants={fade}
            className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
          >
            I build products that
            <br className="hidden sm:block" /> solve{" "}
            <span className="text-accent">real problems.</span>
          </motion.h1>

          <motion.p
            custom={3}
            variants={fade}
            className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground"
          >
            {site.subheadline}
          </motion.p>

          <motion.div
            custom={4}
            variants={fade}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
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
          </motion.div>

          <motion.dl
            custom={5}
            variants={fade}
            className="mt-16 grid w-full max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-card px-6 py-7 text-center">
                <dt className="text-4xl font-semibold tracking-tight text-foreground">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-2 text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
