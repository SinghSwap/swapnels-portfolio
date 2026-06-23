import { timeline } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function Journey() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Journey"
          title="From engineering to startup PM."
        />

        <RevealGroup className="relative mt-14 max-w-3xl" stagger={0.12}>
          {/* vertical rail */}
          <span className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent via-border to-transparent" />
          {timeline.map((node, i) => (
            <RevealItem key={node.title}>
              <div className="relative flex gap-5 pb-8 last:pb-0">
                <span className="relative z-10 mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-card">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                <div className="rounded-xl border border-border bg-card px-5 py-4">
                  <h3 className="font-semibold">{node.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{node.detail}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
