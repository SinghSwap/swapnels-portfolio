import { Quote } from "lucide-react";
import { about, site } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="About" title="A PM who ships, not just specs." />

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i}>
                <p className="text-lg leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={1} className="lg:col-span-2">
            <figure className="relative h-full rounded-2xl border border-border bg-card p-8">
              <Quote className="h-8 w-8 text-accent/30" />
              <blockquote className="mt-4 text-xl font-medium leading-snug text-balance">
                &ldquo;{site.philosophy}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                — My product philosophy
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
