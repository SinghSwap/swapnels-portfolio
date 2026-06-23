import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function CaseStudies() {
  return (
    <section id="case-studies" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Case Studies"
          title="Deep dives, end to end."
          description="Problem to impact — user, journey, insights, tradeoffs, and what I'd do next."
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.1}>
          {caseStudies.map((cs, i) => (
            <RevealItem key={cs.slug}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
              >
                <div
                  className="relative h-32 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${cs.accent}22, ${cs.accent}05)`,
                  }}
                >
                  <span
                    className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-30 blur-xl"
                    style={{ background: cs.accent }}
                  />
                  <span className="absolute bottom-4 left-5 text-5xl font-bold text-foreground/10">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Badge variant="outline" className="w-fit">
                    {cs.tag}
                  </Badge>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">
                    {cs.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {cs.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Read case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
