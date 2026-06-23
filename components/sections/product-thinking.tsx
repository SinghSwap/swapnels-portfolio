import { productThinking } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function ProductThinking() {
  return (
    <section className="border-t border-border bg-background-subtle py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Product Thinking"
          title="The toolkit behind the work."
          description="Frameworks and skills I apply across discovery, delivery, and analysis."
        />

        <RevealGroup
          className="mt-12 flex flex-wrap gap-3"
          stagger={0.04}
        >
          {productThinking.map((skill) => (
            <RevealItem key={skill}>
              <span className="inline-flex cursor-default items-center rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground/90 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent">
                {skill}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
