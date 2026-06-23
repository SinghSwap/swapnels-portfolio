import { Download, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/brand-icons";
import { site } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

const channels = [
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: site.links.linkedin, external: true },
  { icon: Mail, label: "Email", value: site.email, href: site.links.email, external: false },
  { icon: Github, label: "GitHub", value: "See the code", href: site.links.github, external: true },
  { icon: Download, label: "Resume", value: "Download PDF", href: site.resumeUrl, external: true },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-background-subtle py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center sm:p-14">
            <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
            <div className="relative">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s build something that ships.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">
                Open to startup PM roles and collaborations. The fastest way to
                reach me is LinkedIn or email.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink href={site.links.linkedin} external>
                  <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                </ButtonLink>
                <ButtonLink href={site.links.email} variant="secondary">
                  <Mail className="h-4 w-4" /> Email me
                </ButtonLink>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-background-subtle p-5 transition-all hover:-translate-y-1 hover:border-accent/40"
                  >
                    <c.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                    <span className="text-sm font-medium">{c.label}</span>
                    <span className="text-xs text-muted">{c.value}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
