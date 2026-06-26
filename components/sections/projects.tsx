import { ArrowUpRight, Lightbulb, Target, Wrench } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ProjectMock } from "@/components/ui/project-mock";
import { cn } from "@/lib/utils";

type MockVariant =
  | "job-search"
  | "automation"
  | "learning"
  | "research"
  | "finance"
  | "commerce";

const mockBySlug: Record<string, MockVariant> = {
  "instamart-variant-selection": "commerce",
  "ai-job-search-engine": "job-search",
  "meal-planning-automation": "automation",
  "pm-revision": "learning",
  "whatsapp-business-search": "research",
  "personal-finance-ai": "finance",
};

// Display order for the homepage (independent of the data array order).
const displayOrder = [
  "meal-planning-automation", // Sunday Basket
  "ai-job-search-engine",
  "personal-finance-ai", // money app
  "pm-revision",
  "whatsapp-business-search",
  "instamart-variant-selection",
];

const orderedProjects = [...projects].sort(
  (a, b) => displayOrder.indexOf(a.slug) - displayOrder.indexOf(b.slug)
);

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects & Case Studies"
          title="Problems I found, then built my way out of."
          description="Each one started as a personal annoyance or a product I couldn't stop analyzing. Hit “View more” on any title for the full case study."
        />

        <RevealGroup className="mt-14 space-y-8" stagger={0.12}>
          {orderedProjects.map((p, i) => {
            const href = p.caseStudySlug
              ? `/case-studies/${p.caseStudySlug}`
              : `/projects/${p.slug}`;
            return (
              <RevealItem key={p.slug}>
                <div className="group rounded-3xl border border-border bg-card p-2 transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
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
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl font-semibold tracking-tight">
                          {p.title}
                        </h3>
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
                    </div>
                  </div>
                </div>
              </RevealItem>
            );
          })}
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
