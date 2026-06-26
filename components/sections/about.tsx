import {
  Boxes,
  Briefcase,
  Compass,
  Crosshair,
  GraduationCap,
  Landmark,
  MapPin,
  RefreshCw,
  Search,
  Sparkles,
  Target,
} from "lucide-react";
import { about } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const factIcons = {
  experience: Briefcase,
  company: Landmark,
  education: GraduationCap,
  goal: Target,
  location: MapPin,
  interests: Sparkles,
} as const;

const principleIcons = {
  problem: Search,
  purpose: Crosshair,
  systems: Boxes,
  iterate: RefreshCw,
} as const;

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* header */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-sm font-medium uppercase tracking-widest text-accent">
              About Me
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {about.subtitle}
            </h2>
          </Reveal>
        </div>

        {/* intro + current focus / quick facts */}
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            <Reveal>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {about.intro}
              </p>
            </Reveal>

            <Reveal delay={1}>
              <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent-soft to-transparent p-6">
                <div className="flex items-center gap-2 text-accent">
                  <Compass className="h-4 w-4" />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    Current focus
                  </span>
                </div>
                <p className="mt-3 leading-relaxed text-foreground/90">
                  {about.currentFocus}
                </p>
              </div>
            </Reveal>
          </div>

          {/* quick facts */}
          <Reveal delay={1} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-border bg-card p-2">
              <ul className="divide-y divide-border">
                {about.quickFacts.map((f) => {
                  const Icon = factIcons[f.icon as keyof typeof factIcons];
                  return (
                    <li
                      key={f.label}
                      className="flex items-center gap-3 px-3 py-3"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs text-muted">{f.label}</div>
                        <div className="truncate text-sm font-medium text-foreground">
                          {f.value}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* principles */}
        <RevealGroup
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {about.principles.map((p) => {
            const Icon = principleIcons[p.icon as keyof typeof principleIcons];
            return (
              <RevealItem key={p.title}>
                <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
