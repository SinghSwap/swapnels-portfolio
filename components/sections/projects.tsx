import Link from "next/link";
import { ArrowUpRight, Lightbulb, Target, Wrench } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ProjectMock } from "@/components/ui/project-mock";
import { cn } from "@/lib/utils";

const mockBySlug: Record<
  string,
  "job-search" | "automation" | "learning" | "research" | "finance"
> = {
  "ai-job-search-engine": "job-search",
  "meal-planning-automation": "automation",
  "pm-revision": "learning",
  "whatsapp-business-search": "research",
  "personal-finance-ai": "finance",
};

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Problems I found, then built my way out of."
          description="Each project started as a personal annoyance. Every card is a case study — click through for the full story."
        />

        <RevealGroup className="mt-14 space-y-8" stagger={0.12}>
          {projects.map((p, i) => (
            <RevealItem key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="group block rounded-3xl border border-border bg-card p-2 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
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
                    <div className="mb-4 flex items-center gap-3">
                      <Badge variant="accent">{p.tag}</Badge>
                      <span className="text-xs text-muted">
                        Project {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
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

                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
                      Read case study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
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
