import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Compass,
  LayoutTemplate,
  Lightbulb,
  Target,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { caseStudies } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { ButtonLink } from "@/components/ui/button";
import { Footer } from "@/components/sections/footer";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Case Study`,
    description: cs.summary,
    openGraph: { title: `${cs.title} — Case Study`, description: cs.summary },
  };
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((it) => (
        <li key={it} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <>
      {/* gradient hero */}
      <header className="relative overflow-hidden border-b border-border pt-32 pb-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(ellipse 50% 60% at 50% 0%, ${cs.accent}26, transparent 70%)`,
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6">
          <Reveal>
            <Link
              href="/#case-studies"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> All case studies
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <Badge variant="accent" className="mt-8">
              {cs.tag}
            </Badge>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {cs.title}
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {cs.summary}
            </p>
          </Reveal>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-12">
          <Prose icon={Target} title="The Problem" body={cs.problem} />

          {/* user + pain points */}
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm font-medium uppercase tracking-wide text-muted">
                  The User
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{cs.user}</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm font-medium uppercase tracking-wide text-muted">
                  Pain Points
                </h3>
                <div className="mt-3 text-sm text-muted-foreground">
                  <List items={cs.painPoints} />
                </div>
              </div>
            </div>
          </Reveal>

          {/* expandable discovery sections */}
          <Reveal>
            <div>
              <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold">
                <Compass className="h-5 w-5 text-accent" /> Discovery
              </h2>
              <Accordion
                items={[
                  { title: "User Journey", content: <List items={cs.userJourney} /> },
                  { title: "Key Insights", content: <List items={cs.insights} /> },
                  {
                    title: "Metrics That Matter",
                    content: <List items={cs.metrics} />,
                  },
                  { title: "Tradeoffs", content: <List items={cs.tradeoffs} /> },
                ]}
              />
            </div>
          </Reveal>

          <Prose icon={Lightbulb} title="The Opportunity" body={cs.opportunity} />
          <Prose icon={Wrench} title="The Solution" body={cs.solution} />

          {/* wireframe placeholder */}
          <Reveal>
            <div>
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <LayoutTemplate className="h-5 w-5 text-accent" /> Wireframes
              </h2>
              <div className="rounded-2xl border border-dashed border-border bg-background-subtle p-8">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="space-y-2 rounded-xl border border-border bg-card p-4"
                    >
                      <div className="h-3 w-1/2 rounded bg-foreground/10" />
                      <div className="h-20 rounded-lg bg-foreground/5" />
                      <div className="h-2 w-full rounded bg-foreground/10" />
                      <div className="h-2 w-2/3 rounded bg-foreground/10" />
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-center text-sm text-muted">{cs.wireframes}</p>
              </div>
            </div>
          </Reveal>

          {/* impact */}
          <Reveal>
            <div className="rounded-2xl border border-accent/20 bg-accent-soft p-7">
              <h2 className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-accent">
                <TrendingUp className="h-4 w-4" /> Impact
              </h2>
              <p className="mt-3 text-lg font-medium text-balance">{cs.impact}</p>
            </div>
          </Reveal>

          {/* future */}
          <Reveal>
            <div>
              <h2 className="mb-4 text-xl font-semibold">Future Improvements</h2>
              <div className="grid gap-3 sm:grid-cols-3">
                {cs.futureImprovements.map((f, i) => (
                  <div
                    key={f}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <span className="text-sm font-semibold text-accent">
                      0{i + 1}
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-border pt-10 text-center">
          <p className="text-muted-foreground">
            Want the full walkthrough or the thinking behind it?
          </p>
          <div className="flex gap-3">
            <ButtonLink href="/#contact">Get in touch</ButtonLink>
            <ButtonLink href="/#case-studies" variant="secondary">
              More case studies
            </ButtonLink>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}

function Prose({
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
          <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{body}</p>
        </div>
      </div>
    </Reveal>
  );
}
