"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ChevronDown,
  Rocket,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
  Layers,
} from "lucide-react";
import { journey, type JourneyEntry } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const icons = {
  platform: Smartphone,
  scale: TrendingUp,
  launch: Rocket,
  transform: ShieldCheck,
} as const;

export function Experience() {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const lineHeight = useTransform(progress, [0, 1], ["0%", "100%"]);
  const dotTop = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="border-t border-border bg-background-subtle py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Professional Journey"
          title="One bank. Four years. Compounding scope."
          description="Four years at ICICI Bank — growing from a critical business problem to owning enterprise-scale platforms."
        />

        <div ref={railRef} className="relative mt-16">
          {/* timeline rail */}
          <div className="absolute bottom-2 left-5 top-2 w-px -translate-x-1/2 bg-border" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-5 top-2 w-px -translate-x-1/2 bg-gradient-to-b from-accent to-accent/30"
          />
          {/* moving indicator */}
          <motion.div
            style={{ top: dotTop }}
            className="absolute left-5 z-10 hidden -translate-x-1/2 sm:block"
          >
            <span className="block h-3 w-3 rounded-full bg-accent ring-4 ring-accent/15" />
          </motion.div>

          <div className="space-y-8">
            {/* data is authored oldest→newest; display newest-first */}
            {[...journey].reverse().map((entry, i) => (
              <Reveal key={entry.year} delay={i}>
                <TimelineNode entry={entry} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineNode({ entry }: { entry: JourneyEntry }) {
  const Icon = icons[entry.icon];
  return (
    <div className="relative pl-14 sm:pl-20">
      {/* node */}
      <span
        className={cn(
          "absolute left-5 top-1 grid -translate-x-1/2 place-items-center rounded-full border bg-card transition-colors",
          entry.hero
            ? "h-11 w-11 border-accent text-accent shadow-sm shadow-accent/20"
            : "h-9 w-9 border-border text-muted-foreground"
        )}
      >
        <Icon className={entry.hero ? "h-5 w-5" : "h-4 w-4"} />
      </span>

      {entry.hero ? (
        <ActiveCard entry={entry} />
      ) : (
        <MilestoneCard entry={entry} />
      )}
    </div>
  );
}

function YearBadge({ entry }: { entry: JourneyEntry }) {
  return (
    <div>
      {entry.stage && (
        <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent">
          {entry.stage}
        </div>
      )}
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "font-bold tracking-tight",
            entry.hero ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
          )}
        >
          {entry.year}
        </span>
        {entry.current && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Current
          </span>
        )}
      </div>
    </div>
  );
}

function ScopeScale({ entry }: { entry: JourneyEntry }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2 text-xs">
      {entry.scope && (
        <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background-subtle px-2.5 py-1 text-muted-foreground">
          <Layers className="h-3.5 w-3.5" /> {entry.scope}
        </span>
      )}
      {entry.scale && (
        <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background-subtle px-2.5 py-1 text-muted-foreground">
          <Users className="h-3.5 w-3.5" /> {entry.scale}
        </span>
      )}
    </div>
  );
}

function HighlightStrip({ text }: { text: string }) {
  return (
    <div className="mt-5 rounded-xl border-l-2 border-accent bg-accent-soft/60 px-4 py-3 text-sm font-medium text-foreground/90">
      {text}
    </div>
  );
}

function ActiveCard({ entry }: { entry: JourneyEntry }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-card p-6 shadow-xl shadow-accent/5 transition-all duration-300 hover:-translate-y-0.5 sm:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative">
        <YearBadge entry={entry} />
        <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
          {entry.title}
        </h3>
        <ScopeScale entry={entry} />

        <div className="mt-5 space-y-3 leading-relaxed text-muted-foreground">
          {entry.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {entry.metrics && (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {entry.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-border bg-background-subtle p-4 transition-colors hover:border-accent/40"
              >
                <div className="text-lg font-semibold tracking-tight text-foreground">
                  {m.label}
                </div>
                <div className="mt-1 text-xs leading-snug text-muted-foreground">
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        )}

        <HighlightStrip text={entry.highlight} />
      </div>
    </div>
  );
}

function MilestoneCard({ entry }: { entry: JourneyEntry }) {
  const [open, setOpen] = useState(false);
  const [first, ...rest] = entry.paragraphs;

  return (
    <div className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 sm:p-6">
      <YearBadge entry={entry} />
      <h3 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
        {entry.title}
      </h3>
      <ScopeScale entry={entry} />

      <p className="mt-4 leading-relaxed text-muted-foreground">{first}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] as const }}
            className="overflow-hidden"
          >
            {rest.map((p, i) => (
              <p key={i} className="mt-3 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            {entry.details && (
              <div className="mt-4">
                {entry.detailsLabel && (
                  <span className="text-xs font-medium uppercase tracking-wide text-muted">
                    {entry.detailsLabel}
                  </span>
                )}
                <div className="mt-2 flex flex-wrap gap-2">
                  {entry.details.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-border bg-background-subtle px-3 py-1 text-xs text-foreground/80"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <HighlightStrip text={entry.highlight} />

      {(rest.length > 0 || entry.details) && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:opacity-80"
        >
          {open ? "Show less" : "View details"}
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              open && "rotate-180"
            )}
          />
        </button>
      )}
    </div>
  );
}
