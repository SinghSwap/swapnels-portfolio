import { Building2, Check } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-background-subtle py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've driven product."
          description="Delivering enhancements end-to-end inside one of India's largest banks."
        />

        <div className="mt-14">
          {experience.map((job, i) => (
            <Reveal key={i} delay={i}>
              <div className="relative pl-8 sm:pl-12">
                {/* timeline rail */}
                <span className="absolute left-0 top-2 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full border border-border bg-accent text-white sm:left-1.5">
                  <Building2 className="h-3.5 w-3.5" />
                </span>
                <span className="absolute left-0 top-9 h-[calc(100%-1rem)] w-px bg-border sm:left-1.5" />

                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="text-xl font-semibold">{job.company}</h3>
                      <p className="text-accent">{job.role}</p>
                    </div>
                    <span className="inline-flex w-fit items-center rounded-full border border-border bg-background-subtle px-3 py-1 text-sm text-muted-foreground">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-4 text-muted-foreground">{job.summary}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-foreground/90">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
