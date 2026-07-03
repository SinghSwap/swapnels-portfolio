import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  BadgeCheck,
  Compass,
  Crosshair,
  Gauge,
  Globe,
  LayoutTemplate,
  Lightbulb,
  ListChecks,
  Quote,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Footer } from "@/components/sections/footer";

const ACCENT = "#128c7e";

// ---- helpers ----------------------------------------------------------------

function Section({
  n,
  icon: Icon,
  title,
  children,
}: {
  n: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <section className="scroll-mt-28">
        <div className="mb-5 flex items-center gap-3">
          <span
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card"
            style={{ color: ACCENT }}
          >
            <Icon className="h-4 w-4" />
          </span>
          <h2 className="text-2xl font-semibold tracking-tight">
            <span className="mr-2 text-muted">{n}</span>
            {title}
          </h2>
        </div>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          {children}
        </div>
      </section>
    </Reveal>
  );
}

function Callout({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "accent" | "thesis";
}) {
  const bg = variant === "default" ? "bg-background-subtle" : "bg-card";
  return (
    <blockquote
      className={`rounded-r-xl border border-l-4 border-border ${bg} p-5`}
      style={{ borderLeftColor: ACCENT }}
    >
      <div className="text-foreground/90">{children}</div>
    </blockquote>
  );
}

function Table({
  headers,
  rows,
  emphasizeFirst = true,
}: {
  headers: string[];
  rows: ReactNode[][];
  emphasizeFirst?: boolean;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-background-subtle">
            {headers.map((h) => (
              <th
                key={h}
                className="whitespace-nowrap border-b border-border px-4 py-3 font-semibold text-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="align-top">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`border-b border-border px-4 py-3 text-muted-foreground ${
                    emphasizeFirst && j === 0
                      ? "font-medium text-foreground"
                      : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const B = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-foreground">{children}</strong>
);

function StatGrid({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-border bg-card p-4 text-center"
        >
          <div
            className="text-2xl font-bold tracking-tight"
            style={{ color: ACCENT }}
          >
            {s.value}
          </div>
          <div className="mt-1 text-xs leading-snug text-muted-foreground">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// ---- page -------------------------------------------------------------------

export function WhatsappSearch() {
  return (
    <>
      {/* hero */}
      <header className="relative overflow-hidden border-b border-border pt-32 pb-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(ellipse 55% 60% at 50% 0%, ${ACCENT}26, transparent 70%)`,
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6">
          <Reveal>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> All projects
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <Badge variant="accent" className="mt-8">
              Product Research · 0 → 1
            </Badge>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              Smart Recall — Making WhatsApp Business a System of Record
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              A 0→1 product case study on fixing information retrieval for India&apos;s
              micro-businesses, who run their entire sales funnel inside WhatsApp
              chats — and lose deals in the scroll.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Format", "Self-directed case study"],
                ["Surface", "WhatsApp Business · Search"],
                ["Method", "User interviews + survey"],
                ["Lens", "0→1 Product Strategy"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-xl border border-border bg-card px-4 py-3"
                >
                  <dt className="text-xs uppercase tracking-wide text-muted">
                    {k}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      <article className="mx-auto max-w-4xl space-y-14 px-6 py-16">
        {/* 1 Market & opportunity */}
        <Section n="01" icon={Globe} title="Market & Opportunity">
          <p>
            WhatsApp is a privacy-first messaging platform for fast, trusted
            communication — and quietly, business infrastructure. The growth
            isn&apos;t in personal chat (already ~83% penetration); it&apos;s in{" "}
            <B>WhatsApp Business</B>, where better workflows drive higher-value
            engagement and monetization.
          </p>
          <StatGrid
            items={[
              { value: "3B+", label: "Users worldwide" },
              { value: "50M+", label: "Businesses worldwide" },
              { value: "#1", label: "Market: India" },
              { value: "25%", label: "CAGR by 2030" },
            ]}
          />
          <p className="text-sm">
            Monetization today is largely B2B: ~90% paid messaging, &lt;5% Meta
            Verified, &lt;5% MDR. Better retrieval makes the platform stickier —
            and accelerates migration to the paid Business API.
          </p>
        </Section>

        {/* 2 Problem / competitive */}
        <Section n="02" icon={Search} title="The Search & Recall Gap">
          <p>
            Micro-businesses use the chat thread as their CRM, invoice book, and
            order log — but nothing on the market actually helps them{" "}
            <B>recall</B> business context from it.
          </p>
          <Table
            headers={["Option", "How it helps", "Why it falls short"]}
            rows={[
              ["WhatsApp native search", "Simple keyword search across chats", "Poor relevance, no business context"],
              ["Telegram / Slack", "Better search & filters", "Not designed for SMB workflows or context recall"],
              ["Manual workarounds", "Screenshots, self-forwarding — no setup", "High cognitive cost; no recall logic"],
            ]}
          />
          <Callout variant="accent">
            <p>
              <B>Desired goal:</B> let users instantly find any important
              information on WhatsApp, regardless of when or where it was shared —
              reducing search friction in chaotic chat histories while unlocking
              monetization through structured, retrievable data.
            </p>
          </Callout>
        </Section>

        {/* 3 Hypothesis */}
        <Section n="03" icon={Lightbulb} title="Hypothesis">
          <Callout>
            <p className="text-sm">
              <B>If</B> WhatsApp improves retrieval clarity and reliability by
              introducing <B>structured, context-aware search</B> across messages,
              media, documents, and transactions, <B>then</B> small and growing
              businesses will find critical information faster — reducing workflow
              friction and increasing reliance on WhatsApp as a{" "}
              <B>system of record</B>. <B>This drives</B> adoption of advanced
              Business features and APIs, an estimated{" "}
              <B>20–30% lift in retention and paid-feature usage within 90 days</B>,
              ultimately unlocking monetization as businesses scale.
            </p>
          </Callout>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Scope", "Search functionality on the WhatsApp Business app."],
              ["Why now", "Microbusiness growth is pushing WhatsApp from chat app to business infrastructure — a time-critical window."],
              ["Constraint", "Treated tech bandwidth as effectively infinite — focus on the right product bet, not feasibility."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 4 Target segment */}
        <Section n="04" icon={Target} title="Target Segment & Sizing">
          <p>
            <B>Micro-business owners in India</B> — sales-led retailers, dealers,
            and service providers running multiple customer conversations at once.
          </p>
          <Table
            headers={["Layer", "Definition", "Size"]}
            rows={[
              [<B key="t">TAM</B>, "Microbusinesses relying on informal, chat-based customer comms", "~63M"],
              [<B key="s">SAM</B>, "Microbusinesses already using WhatsApp Personal", "~48M"],
              [<B key="o">SOM</B>, "Reachable businesses in India", "~15M"],
            ]}
          />
          <p className="text-sm">
            India has ~65M MSMEs today (~85M by 2027), contributing ~30% of GDP.
            Microbusinesses are ~97% of that ecosystem — a large, untapped
            acquisition and monetization runway as they grow on WhatsApp.
          </p>
        </Section>

        {/* 5 Persona */}
        <Section n="05" icon={Users} title="The User">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-center gap-4">
              <div
                className="grid h-14 w-14 place-items-center rounded-full text-lg font-bold text-white"
                style={{ background: ACCENT }}
              >
                RS
              </div>
              <div>
                <h3 className="text-lg font-semibold">Ravi Sharma · 29</h3>
                <p className="text-sm text-muted-foreground">
                  Used-car micro-business owner · Chandigarh
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Runs his entire sales funnel on WhatsApp, confidently using it as a
              CRM to manage leads, documents, payments, and customer communication
              end-to-end.
            </p>
            <Callout variant="accent">
              <p className="italic">
                &ldquo;I quote different prices to different customers, and later I
                struggle to remember who got what deal.&rdquo;
              </p>
            </Callout>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wide text-muted">
                  Goals
                </h4>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  <li>Convert WhatsApp leads into in-person visits & car sales.</li>
                  <li>Never lose chats, documents, or proof of transactions.</li>
                  <li>Keep operations simple — no complex CRM.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wide text-muted">
                  Pain points
                </h4>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  <li>Finding past quotations, photos, or RC documents is slow.</li>
                  <li>Keyword search returns every instance — no context.</li>
                  <li>Deals split across WhatsApp & in-person are messy to sync.</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* 6 Validation */}
        <Section n="06" icon={BadgeCheck} title="Validating the Problem">
          <p>From user interviews and a survey, a consistent behavior emerged: people don&apos;t trust native search, so they invent their own bookmarking.</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              ["81%", "bypass built-in search by forwarding messages to themselves"],
              ["73%", "of searches target specific chat messages & documents"],
              ["65%", "rely on a “rough timeline” mental model to locate info"],
              ["51%", "use “Starred,” yet self-forwarding stays the preferred bookmark"],
              ["40%", "reach “slow success” — find it eventually, lose real time"],
              ["2 in 5", "are unaware advanced search filters even exist"],
            ].map(([v, l]) => (
              <div
                key={l}
                className="rounded-2xl border border-border bg-card p-4"
              >
                <div className="text-xl font-bold" style={{ color: ACCENT }}>
                  {v}
                </div>
                <div className="mt-1 text-xs leading-snug text-muted-foreground">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 7 Framing */}
        <Section n="07" icon={Compass} title="Framing the Problem">
          <Callout variant="accent">
            <p>
              As microbusinesses manage more customers and parallel deals,{" "}
              <B>customer and product context fragments across chats</B> — forcing
              users into manual search and scrolling to run active sales.
            </p>
          </Callout>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Value to customers</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>Faster responses, lower cognitive load.</li>
                <li>Confidence handling many conversations at once.</li>
                <li>More professionalism and customer trust.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Value to the business</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>WhatsApp positioned as a business system of record.</li>
                <li>Faster migration from free app to monetized Business API.</li>
                <li>Higher retention on the highest-growth segment.</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* 8 Solutions + prioritization */}
        <Section n="08" icon={ListChecks} title="Ideation & Prioritization">
          <div className="grid gap-4">
            {[
              ["Customer Profile & Context Panel", "A persistent “Customer Info” tab inside each chat that auto-aggregates customer details, products discussed, prices quoted, and pinned key messages — a lightweight CRM and single source of truth per customer."],
              ["Smart Conversation Prioritization", "Re-ranks home-screen chats by active product interest, recency, and back-and-forth intensity, so chats with live deals surface to the top automatically."],
              ["Product-Based Active Deal Views", "Groups all chats about the same product (e.g. “Mahindra Thar”) and surfaces every interested buyer, last message, and status (active / cold / closed)."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground">{t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm">
            Scored across business impact, UX, technical feasibility, and growth
            potential:
          </p>
          <Table
            emphasizeFirst={false}
            headers={["Solution", "Business", "UX", "Tech", "Growth", "Score"]}
            rows={[
              [<B key="a">Customer Profile & Context Panel</B>, "5", "5", "3", "5", <B key="s">18 — Top</B>],
              ["Smart Conversation Prioritization", "3", "4", "4", "4", "15"],
              ["Product-Based Active Deal Views", "3", "4", "4", "3", "14"],
            ]}
          />
          <Callout>
            <p className="text-sm">
              The <B>Context Panel</B> won — highest impact and growth, and it
              directly attacks the validated behavior (self-forwarding to
              remember a customer&apos;s deal). It became <B>Smart Recall</B>.
            </p>
          </Callout>
        </Section>

        {/* 9 Wireframes */}
        <Section n="09" icon={LayoutTemplate} title="Solution & Wireframes">
          <p>
            Two flows, designed privacy-first: a contextual <B>opt-in</B> surfaced
            only at moments of real friction, and a per-chat{" "}
            <B>Customer Summary</B>.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background-subtle p-5">
              <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: ACCENT }}>
                Wireframe 01 · Opt-in
              </span>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <B>Trigger:</B> after &gt;3 failed global searches in a rolling
                  7-day window, surface a one-time Smart Search opt-in.
                </li>
                <li>
                  <B>User chooses chats:</B> the feature is enabled only for
                  explicitly selected conversations — granular control.
                </li>
                <li>
                  <B>Consent:</B> a clear screen explains how it works, what data
                  it uses, and that it can be disabled anytime.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background-subtle p-5">
              <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: ACCENT }}>
                Wireframe 02 · Customer Summary
              </span>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>A labeled Customer Summary button, only in Smart-Recall chats.</li>
                <li>Queries run across all customer summaries first, then individual messages.</li>
                <li>Auto-aggregates key details and updates as the conversation evolves.</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* 10 Metrics */}
        <Section n="10" icon={Gauge} title="How We Measure Success">
          <Table
            headers={["Type", "Metric", "Why it matters"]}
            rows={[
              [<B key="ns">North Star</B>, "Search Success Rate — % of searches that open a message, doc, or media", "Can users actually find what they need?"],
              ["L1", "Time to Information — median time from search to the right message", "Reduced friction & cognitive load"],
              ["L1", "Search Attempts per Task", "Less dependence on repeated keyword search"],
              ["L2", "Smart Recall Panel Usage", "Perceived value of structured context"],
              ["Activation", "Smart Recall Opt-In Rate (users with ≥3 failed searches)", "Trust & willingness to enable"],
            ]}
          />
        </Section>

        {/* 11 Pitfalls */}
        <Section n="11" icon={ShieldCheck} title="Pitfalls & Mitigation">
          <Table
            headers={["Risk", "Mitigation"]}
            rows={[
              ["Mistrust around AI reading chats", "Introduced only after repeated search failure; explicit per-chat opt-in; private processing explained before activation."],
              ["Incorrect or incomplete extraction", "All surfaced info is read-only, linked back to the original message, and clearable per chat."],
              ["Low adoption despite availability", "Surfaced contextually at moments of demonstrated friction, with a simple “choose chats” onboarding."],
              ["Privacy", "Per-chat scope, a reversible toggle, and Meta's private-processing TEEs."],
            ]}
          />
          <Callout variant="thesis">
            <div className="flex gap-3">
              <Quote className="h-6 w-6 shrink-0" style={{ color: ACCENT }} />
              <p className="text-lg font-medium italic text-foreground">
                The winning move wasn&apos;t better search — it was structured
                recall, opted into at the exact moment of friction, that turns a
                noisy chat thread into a trusted system of record.
              </p>
            </div>
          </Callout>
        </Section>

        <div className="flex flex-col items-center gap-4 border-t border-border pt-10 text-center">
          <p className="text-muted-foreground">
            Want the full research deck or a walkthrough of the thinking?
          </p>
          <div className="flex gap-3">
            <ButtonLink href="/#contact">Get in touch</ButtonLink>
            <ButtonLink href="/#projects" variant="secondary">
              More work
            </ButtonLink>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
