import { ArrowUpRight, GraduationCap, Lightbulb, Sparkles, Target, Wrench } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ProjectMock } from "@/components/ui/project-mock";
import { cn } from "@/lib/utils";

type MockVariant =
  | "job-search"
  | "automation"
  | "learning"
  | "research"
  | "finance"
  | "commerce"
  | "voice";

const mockBySlug: Record<string, MockVariant> = {
  "instamart-variant-selection": "commerce",
  "ai-job-search-engine": "job-search",
  "meal-planning-automation": "automation",
  "pm-revision": "learning",
  "whatsapp-business-search": "research",
  "personal-finance-ai": "finance",
  "chatgpt-voice-adoption": "voice",
};

// Group 1 — products I actually built and shipped.
const builtSlugs = [
  "meal-planning-automation",
  "ai-job-search-engine",
  "personal-finance-ai",
  "pm-revision",
];
// Group 2 — PM-thinking case studies & teardowns (not built).
const caseStudySlugs = [
  "chatgpt-voice-adoption",
  "instamart-variant-selection",
  "whatsapp-business-search",
];

const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
const ordered = (slugs: string[]) =>
  slugs.map((s) => bySlug[s]).filter(Boolean) as Project[];

export function Projects() {
  const built = ordered(builtSlugs);
  const caseStudies = ordered(caseStudySlugs);

  return (
    <section id="projects" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Projects &amp; Case Studies
          </span>
        </Reveal>

        {/* Group 1 — built */}
        <Group
          title="Problems I built solutions for"
          subtitle="Products I designed, built, and shipped end-to-end outside my day job — each one started as a problem I personally had."
          projects={built}
          className="mt-4"
        />

        {/* Group 2 — product thinking */}
        <Group
          eyebrow="Showcasing PM thinking"
          title="Product Strategy & Case Studies"
          subtitle="How I think about products I didn't build — strategy, user research, prioritization, and metrics."
          projects={caseStudies}
          className="mt-24"
        />
      </div>
    </section>
  );
}

function Group({
  eyebrow,
  title,
  subtitle,
  projects,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  projects: Project[];
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal>
        <div className="max-w-2xl">
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-balance text-muted-foreground">{subtitle}</p>
        </div>
      </Reveal>

      <RevealGroup className="mt-12 space-y-8" stagger={0.12}>
        {projects.map((p, i) => (
          <RevealItem key={p.slug}>
            <ProjectCard p={p} i={i} />
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const href = p.caseStudySlug
    ? `/case-studies/${p.caseStudySlug}`
    : `/projects/${p.slug}`;

  return (
    <div
      className={cn(
        "group rounded-3xl border border-border bg-card p-2 transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5",
        p.featured && "shadow-lg"
      )}
    >
      <div
        className={cn(
          "grid items-center gap-6 lg:grid-cols-2",
          i % 2 === 1 && "lg:[direction:rtl]"
        )}
      >
        {/* mock screenshot */}
        <div className="p-4 sm:p-6 lg:[direction:ltr]">
          <ProjectMock variant={mockBySlug[p.slug]} accent={p.accent} />
        </div>

        {/* copy */}
        <div className="p-4 sm:p-6 lg:[direction:ltr]">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="accent">{p.tag}</Badge>
            <StatusBadge status={p.status} />
            {p.featured && (
              <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent-soft/50 px-2.5 py-1 text-xs font-medium text-accent">
                <Sparkles className="h-3 w-3" />
                Featured
              </span>
            )}
            <span className="ml-auto text-xs text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
            <ButtonLink
              href={href}
              size="sm"
              variant="secondary"
              className="shrink-0"
            >
              View more
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </ButtonLink>
          </div>

          <p className="mt-3 leading-relaxed text-muted-foreground">
            {p.oneLiner}
          </p>

          <dl className="mt-6 space-y-3">
            <Row icon={Target} label="Problem" value={p.problem} />
            <Row icon={Wrench} label="Solution" value={p.solution} />
            <Row icon={Lightbulb} label="Impact" value={p.impact} />
          </dl>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {p.tools.slice(0, 4).map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          {/* what I learned */}
          <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-accent/20 bg-accent-soft/50 px-3.5 py-2.5">
            <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <p className="text-sm">
              <span className="font-medium text-foreground">What I learned — </span>
              <span className="text-muted-foreground">{p.lesson}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const statusDot: Record<Project["status"]["color"], string> = {
  green: "bg-emerald-500",
  amber: "bg-amber-500",
  blue: "bg-sky-500",
  purple: "bg-violet-500",
  gray: "bg-zinc-400",
};

function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background-subtle px-2.5 py-1 text-xs font-medium text-muted-foreground">
      <span className={cn("h-1.5 w-1.5 rounded-full", statusDot[status.color])} />
      {status.label}
    </span>
  );
}

function Row({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
      <div className="text-sm">
        <dt className="font-medium text-foreground">{label}</dt>
        <dd className="mt-0.5 line-clamp-2 text-muted-foreground">{value}</dd>
      </div>
    </div>
  );
}
