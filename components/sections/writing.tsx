import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function Writing() {
  return (
    <section
      id="writing"
      className="border-t border-border bg-background-subtle py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Writing"
          title="Notes on building & product."
          description="Lessons from shipping inside a bank and building tools on the side."
        />

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2" stagger={0.08}>
          {articles.map((a) => (
            <RevealItem key={a.title}>
              <article className="group flex h-full cursor-default flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{a.tag}</Badge>
                  <span className="text-xs text-muted">{a.readTime}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
                  {a.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-accent">
                  Coming soon
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
