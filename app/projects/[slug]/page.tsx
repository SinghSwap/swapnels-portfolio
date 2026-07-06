import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Lightbulb,
  Target,
  TrendingUp,
  User2,
  Wrench,
} from "lucide-react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { ProjectMock } from "@/components/ui/project-mock";
import { Footer } from "@/components/sections/footer";

const mockBySlug: Record<
  string,
  | "job-search"
  | "automation"
  | "learning"
  | "research"
  | "finance"
  | "commerce"
  | "voice"
> = {
  "instamart-variant-selection": "commerce",
  "ai-job-search-engine": "job-search",
  "meal-planning-automation": "automation",
  "pm-revision": "learning",
  "whatsapp-business-search": "research",
  "personal-finance-ai": "finance",
  "chatgpt-voice-adoption": "voice",
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.oneLiner,
    openGraph: { title: project.title, description: project.oneLiner },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <article className="pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> All projects
            </Link>
          </Reveal>

          <header className="mt-8">
            <Reveal>
              <Badge variant="accent">{project.tag}</Badge>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                {project.title}
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-4 text-lg text-muted-foreground">{project.oneLiner}</p>
            </Reveal>
          </header>

          <Reveal delay={2}>
            <div className="mt-10">
              <ProjectMock variant={mockBySlug[project.slug]} accent={project.accent} />
              <p className="mt-3 text-center text-xs text-muted">
                Representative interface mockup
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10">
            <Block icon={Target} title="Problem" body={project.problem} />
            <Block
              icon={Lightbulb}
              title="Why it mattered"
              body={project.whyItMattered}
            />
            <Block icon={Wrench} title="Solution" body={project.solution} />
            <Block icon={User2} title="My role" body={project.role} />

            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
                    Tools used
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-accent/20 bg-accent-soft p-6">
                  <h2 className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-accent">
                    <TrendingUp className="h-4 w-4" /> Impact
                  </h2>
                  <p className="mt-3 text-sm text-foreground/90">{project.impact}</p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-border bg-background-subtle p-6">
                <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
                  Lesson learned
                </h2>
                <p className="mt-2 text-lg font-medium text-balance">
                  &ldquo;{project.lesson}&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          {/* next project */}
          <div className="mt-16 border-t border-border pt-8">
            <span className="text-sm text-muted">Next project</span>
            <Link
              href={`/projects/${next.slug}`}
              className="group mt-2 flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
            >
              <div>
                <Badge variant="outline" className="mb-2">
                  {next.tag}
                </Badge>
                <h3 className="text-xl font-semibold">{next.title}</h3>
              </div>
              <ArrowUpRight className="h-6 w-6 shrink-0 text-muted transition-colors group-hover:text-accent" />
            </Link>
          </div>

          <div className="mt-12 flex justify-center">
            <ButtonLink href="/#contact" variant="secondary">
              Get in touch
            </ButtonLink>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}

function Block({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <Reveal>
      <div className="flex gap-4">
        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card text-accent">
          <Icon className="h-4 w-4" />
        </span>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
        </div>
      </div>
    </Reveal>
  );
}
