import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  Brain,
  CalendarClock,
  CheckCircle2,
  Compass,
  Crosshair,
  FlaskConical,
  Gauge,
  Heart,
  Lightbulb,
  Mail,
  Map,
  Quote,
  Recycle,
  Rocket,
  Route,
  Sparkles,
  Target,
  Wrench,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Footer } from "@/components/sections/footer";

const ACCENT = "#16a34a";

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

function Diagram({
  steps,
  icons,
}: {
  steps: string[];
  icons: React.ComponentType<{ className?: string; style?: React.CSSProperties }>[];
}) {
  return (
    <div className="flex flex-wrap items-stretch gap-2">
      {steps.map((s, i) => {
        const Icon = icons[i];
        return (
          <div key={s} className="flex items-stretch gap-2">
            <div
              className="flex w-32 flex-col gap-2 rounded-xl border p-3 text-sm sm:w-36"
              style={{
                borderColor: `color-mix(in srgb, ${ACCENT} 35%, transparent)`,
                background: `color-mix(in srgb, ${ACCENT} 7%, transparent)`,
              }}
            >
              <Icon className="h-4 w-4" style={{ color: ACCENT }} />
              <span className="font-medium text-foreground">{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center">
                <ArrowRight className="h-4 w-4 text-muted" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ---- page -------------------------------------------------------------------

export function SundayBasket() {
  return (
    <>
      {/* hero */}
      <header className="relative overflow-hidden border-b border-border pt-32 pb-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(ellipse 55% 60% at 50% 0%, ${ACCENT}24, transparent 70%)`,
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
              Personal Product
            </Badge>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              Sunday Basket
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              A weekly meal-planning assistant that helps me reduce grocery
              costs and eliminate the mental effort of deciding what to cook.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                ["Role", "Product Manager + Builder"],
                ["Timeline", "Weekend build, iterated over weeks"],
                ["Status", "Live, running for myself weekly"],
                ["North Star", "Successful weekly plans I act on"],
                ["Technology", "AI + Make.com automation"],
                ["Impact", "~1 hr → under 5 min of planning"],
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
        {/* Why I built this */}
        <Section n="01" icon={Sparkles} title="Why I Built This">
          <p>
            This started from a problem I kept hitting myself. I noticed that
            ordering groceries <B>once a week</B> was meaningfully cheaper than
            placing several smaller orders across the week, bulk shopping just
            won on price. I wanted to take advantage of that.
          </p>
          <p>
            But every Sunday I&apos;d lose nearly an hour to the same questions:{" "}
            <span className="italic">
              What should I cook this week? What groceries do I need? Which
              ingredients overlap? How much should I buy? Will anything go to
              waste? Am I forgetting something?
            </span>
          </p>
          <p>
            After a busy work week I&apos;d often postpone it, and then defaulted
            to <B>multiple grocery orders, more spend, ordering food online,
            impulse purchases, and wasted ingredients.</B> Existing meal-planning
            apps didn&apos;t fix this for me: they still expected me to sit down
            and do the deciding.
          </p>
          <Callout variant="accent">
            <p>
              I realized the biggest problem wasn&apos;t grocery shopping. It was{" "}
              <B>the planning effort required before shopping.</B> So I decided
              to build something to remove that effort, for myself.
            </p>
          </Callout>
        </Section>

        {/* Problem discovery */}
        <Section n="02" icon={Compass} title="Problem Discovery">
          <p>
            Breaking the &ldquo;planning is annoying&rdquo; feeling into smaller,
            addressable problems made it tractable:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Decision fatigue", "Deciding 21 meals from a blank slate, every week, on top of a full work week."],
              ["Planning overhead", "Translating vague meal ideas into an actual, complete shopping list by hand."],
              ["Cost optimization", "Bulk weekly orders are cheaper, but only if the plan exists to support them."],
              ["Food waste", "Buying ingredients that don't overlap across meals, then watching them spoil."],
              ["Repeated grocery orders", "Skipping planning → multiple mid-week orders, delivery fees, and impulse buys."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <h3 className="font-semibold text-foreground">{t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Assumptions & validation */}
        <Section n="03" icon={FlaskConical} title="Assumptions & Validation">
          <p>
            I didn&apos;t run formal research, this was a problem I lived. But I
            was deliberate about separating <B>what I observed</B> from{" "}
            <B>what I&apos;m assuming</B> is true more broadly.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="flex items-center gap-2 font-semibold text-foreground">
                <CheckCircle2 className="h-4 w-4" style={{ color: ACCENT }} />
                Personal observation (validated for me)
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>The planning hour was the real blocker, not shopping itself.</li>
                <li>
                  When I skipped it, I reliably spent more and wasted more.
                </li>
                <li>
                  Friends, roommates and colleagues described the same Sunday
                  friction in conversation.
                </li>
                <li>
                  Similar complaints recur in Reddit / online communities about
                  meal planning.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dashed border-border bg-background-subtle p-5">
              <h3 className="flex items-center gap-2 font-semibold text-foreground">
                <Crosshair className="h-4 w-4 text-muted" />
                Broader assumption (needs validation)
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  That enough people feel this strongly enough to adopt a tool.
                </li>
                <li>
                  That AI-generated plans are good enough that people actually
                  cook them.
                </li>
                <li>That the savings hold across cuisines, cities, and diets.</li>
                <li>
                  That people will trust an automated list enough to buy from it.
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm">
            Before building this into a commercial product, those right-hand
            assumptions are exactly what I&apos;d test first, with real users,
            not just my own experience.
          </p>
        </Section>

        {/* Problem statement */}
        <Section n="04" icon={Target} title="Problem Statement">
          <Callout variant="accent">
            <p>
              The effort of planning a week of meals and the matching grocery
              list, roughly an hour of decision-making, is high enough that I
              postpone it, which pushes me into{" "}
              <B>frequent, more expensive mid-week orders, impulse spending, and
              food waste</B>, and erases the savings that once-a-week bulk
              shopping should deliver.
            </p>
          </Callout>
          <Callout>
            <p className="text-sm">
              <B>Hypothesis:</B> if I can cut weekly meal planning from ~1 hour to{" "}
              under 5 minutes through automation and AI, I&apos;ll shop once a
              week far more consistently, spend less, and remove the daily mental
              load of deciding what to cook.
            </p>
          </Callout>
        </Section>

        {/* JTBD */}
        <Section n="05" icon={Heart} title="Jobs To Be Done">
          <Table
            headers={["Job type", "When I…", "I want to…", "So that…"]}
            rows={[
              ["Functional", "run low on food for the week", "get a complete plan + buyable list in minutes", "I can shop once and be set for 7 days"],
              ["Emotional", "feel decision-fatigued after work", "not have to decide 21 meals from scratch", "Sunday feels restful, not like another task"],
              ["Social", "host or eat with others", "have enough variety and quantity planned", "I look organized and never run short"],
            ]}
          />
        </Section>

        {/* Design principles */}
        <Section n="06" icon={Lightbulb} title="Design Principles">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Reduce cognitive load", "The output is a decision, not a dashboard to operate."],
              ["Automate repetitive work", "If it happens every week, it shouldn't need me to trigger it."],
              ["Reuse ingredients", "Plan meals that share ingredients to cut cost and waste."],
              ["Minimize waste", "Buy what the plan actually uses, nothing speculative."],
              ["Keep setup simple", "No app to install, no new habit, it comes to my inbox."],
              ["Deliver before shopping", "Value must land Sunday morning, before I order."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-xl border border-border bg-card p-4"
              >
                <h3 className="text-sm font-semibold text-foreground">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Solution exploration */}
        <Section n="07" icon={Wrench} title="Solution Exploration">
          <p>
            I considered a few ways to solve this before committing. The deciding
            factor wasn&apos;t capability, it was <B>time-to-value vs. ongoing
            effort</B> for a tool of one.
          </p>
          <Table
            emphasizeFirst={false}
            headers={["Option", "Effort to build", "Ongoing effort", "Why not / why"]}
            rows={[
              ["Spreadsheet template", "Low", "High, I still do the deciding", "Keeps the exact work I wanted to remove."],
              ["Existing meal-planning app", "None", "Medium, manual, generic", "Still expects me to plan; ignores my reuse/cost goals."],
              ["Custom-coded app", "High", "Medium", "Overkill for one user; slow to first value."],
              [<B key="c">AI + no-code automation</B>, <B key="e">Low</B>, <B key="o">Near-zero</B>, <B key="w">Chosen, fastest path to a hands-off result.</B>],
            ]}
          />
          <Callout variant="accent">
            <p className="text-sm">
              The MVP I chose does the <B>deciding and the assembling</B> for me
              and delivers a finished plan, which is the part I actually wanted
              gone.
            </p>
          </Callout>
        </Section>

        {/* MVP scope */}
        <Section n="08" icon={Boxes} title="MVP Scope">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="flex items-center gap-2 font-semibold text-foreground">
                <CheckCircle2 className="h-4 w-4" style={{ color: ACCENT }} />
                Intentionally included
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>7-day plan: breakfast, lunch, dinner.</li>
                <li>Ingredient-reuse optimization across meals.</li>
                <li>One consolidated, de-duplicated grocery list.</li>
                <li>Grouping into shopping categories + rough quantities.</li>
                <li>Automatic Sunday email, zero manual trigger.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="flex items-center gap-2 font-semibold text-foreground">
                <XCircle className="h-4 w-4 text-muted" />
                Intentionally excluded
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Pantry tracking / inventory sync, too much upkeep.</li>
                <li>Nutrition/macro optimization, not my core job here.</li>
                <li>A UI or app, the email is the product.</li>
                <li>Direct ordering integration, out of MVP scope.</li>
                <li>Multi-user accounts, it&apos;s a tool of one.</li>
              </ul>
            </div>
          </div>
          <p className="text-sm">
            <B>Why:</B> the MVP only needs to remove the planning hour and put a
            buyable list in my hands before I shop. Everything that didn&apos;t
            serve that was deferred.
          </p>
        </Section>

        {/* User flow */}
        <Section n="09" icon={Route} title="User Flow">
          <p className="text-sm">From a scheduled trigger to a plan in my inbox, no input from me:</p>
          <Diagram
            steps={[
              "Sunday 8am trigger",
              "AI drafts 7-day plan",
              "Optimize ingredient reuse",
              "Consolidate & de-dupe list",
              "Group + estimate quantities",
              "Email the plan to me",
            ]}
            icons={[CalendarClock, Brain, Recycle, Boxes, Gauge, Mail]}
          />
        </Section>

        {/* Information architecture */}
        <Section n="10" icon={Map} title="Information Architecture">
          <p>
            The deliverable is a single email, structured so I can act on it
            top-to-bottom without scrolling back and forth:
          </p>
          <div className="rounded-2xl border border-border bg-card p-5 text-sm">
            <ol className="space-y-2 text-muted-foreground">
              <li>
                <B>1. Weekly menu</B>, the 7 days × 3 meals, scannable at a
                glance.
              </li>
              <li>
                <B>2. Consolidated grocery list</B>, grouped by shopping
                category (produce, dairy, staples…).
              </li>
              <li>
                <B>3. Quantities</B>, rough amounts inline beside each item.
              </li>
            </ol>
          </div>
        </Section>

        {/* Feature deep dive */}
        <Section n="11" icon={Boxes} title="Feature Deep Dive">
          <div className="grid gap-4">
            {[
              ["Ingredient-reuse optimization", "Plans meals that share ingredients across the week.", "Directly attacks both cost and waste, the same purchase serves multiple meals.", "Can nudge variety down; I cap repetition in the prompt to keep meals interesting."],
              ["Consolidated, de-duplicated list", "Merges every meal's needs into one clean list, removing duplicates.", "This is the manual step I hated most, it's now free and error-resistant.", "Merging hides which meal an item is for; acceptable for a shopping list."],
              ["Category grouping + quantities", "Sorts items into shopping sections with rough amounts.", "Makes the actual ordering fast and reduces forgotten items.", "Quantity estimates are approximate; I treat them as a sensible default, not gospel."],
              ["Scheduled email delivery", "Sends the finished plan every Sunday morning, automatically.", "Value arrives before I shop, with zero effort to trigger, the habit runs itself.", "Fixed timing trades off on-demand flexibility; fine for a weekly rhythm."],
            ].map(([t, problem, why, tradeoff]) => (
              <div
                key={t}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <h3 className="font-semibold text-foreground">{t}</h3>
                <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-3">
                  <div>
                    <dt className="font-medium text-foreground">Solves</dt>
                    <dd className="mt-0.5 text-muted-foreground">{problem}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-foreground">Why it matters</dt>
                    <dd className="mt-0.5 text-muted-foreground">{why}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-foreground">Trade-off</dt>
                    <dd className="mt-0.5 text-muted-foreground">{tradeoff}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </Section>

        {/* System architecture */}
        <Section n="12" icon={Boxes} title="System Architecture">
          <p className="text-sm">A small, hands-off pipeline, scheduler in, email out:</p>
          <Diagram
            steps={[
              "Scheduler (weekly cron)",
              "AI model (plan + list prompt)",
              "Transform: de-dupe, categorize, quantities",
              "Email module",
              "My inbox",
            ]}
            icons={[CalendarClock, Brain, Recycle, Mail, CheckCircle2]}
          />
          <p className="text-sm text-muted-foreground">
            The schedule guarantees timing, the AI handles the open-ended
            planning, a transform step turns prose into a clean structured list,
            and email is the zero-friction delivery surface.
          </p>
        </Section>

        {/* Technical stack */}
        <Section n="13" icon={Wrench} title="Technical Stack">
          <Table
            headers={["Layer", "Tool", "Role"]}
            rows={[
              ["Orchestration", "Make.com", "No-code workflow that wires the steps together."],
              ["Intelligence", "AI / LLM", "Generates the meal plan and the raw ingredient list."],
              ["Scheduling", "Make.com scheduler", "Fires the workflow every Sunday morning, unattended."],
              ["Delivery", "Email automation", "Sends the finished, formatted plan to my inbox."],
              ["Prompt design", "Structured prompt", "Encodes the rules: reuse ingredients, 3 meals/day, de-dupe, categorize, estimate quantities, cap repetition."],
            ]}
          />
          <p className="text-sm">
            The interesting engineering is the <B>prompt</B>: it&apos;s where the
            product rules live, ingredient reuse, variety limits, and the
            output shape that makes the list buyable.
          </p>
        </Section>

        {/* Measuring success */}
        <Section n="14" icon={Gauge} title="Measuring Success">
          <Callout variant="accent">
            <p>
              <B>North Star (personal):</B> the number of weekly plans I actually
              act on, generated <em>and</em> shopped from.
            </p>
          </Callout>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Leading indicators", ["Weekly planning time (target: < 5 min)", "% of weeks the plan is generated on time", "% of generated plans I actually follow"]],
              ["Lagging indicators", ["Consistency of once-a-week shopping", "Number of mid-week grocery orders", "Estimated grocery cost savings"]],
              ["Guardrail metrics", ["Meal variety (not too repetitive)", "Food waste doesn't rise", "Time-to-setup stays near zero"]],
            ].map(([t, items]) => (
              <div
                key={t as string}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <h3 className="text-sm font-semibold text-foreground">{t}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {(items as string[]).map((it) => (
                    <li key={it} className="flex gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: ACCENT }}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm">
            Reduction in <B>decision fatigue</B> is the qualitative outcome I
            care about most, harder to measure, but the reason I built this.
          </p>
        </Section>

        {/* Reflection */}
        <Section n="15" icon={Lightbulb} title="Reflection">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["What worked well", "Putting the output in email, no new app, no new habit. The plan just shows up and I act on it."],
              ["What surprised me", "How much of the value was emotional, not financial. Removing the decision mattered more than the savings."],
              ["What didn't work", "Early plans were repetitive and occasionally impractical; the prompt needed real iteration to feel usable."],
              ["What assumptions changed", "I assumed I needed an app. I didn't, the smallest possible surface (a scheduled email) was enough."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <h3 className="font-semibold text-foreground">{t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* If I continued, clearly separated hypothetical */}
        <Reveal>
          <section className="scroll-mt-28">
            <div
              className="rounded-3xl border border-dashed p-6 sm:p-8"
              style={{
                borderColor: `color-mix(in srgb, ${ACCENT} 45%, transparent)`,
                background: `color-mix(in srgb, ${ACCENT} 5%, transparent)`,
              }}
            >
              <div className="mb-2 flex items-center gap-3">
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card"
                  style={{ color: ACCENT }}
                >
                  <Rocket className="h-4 w-4" />
                </span>
                <h2 className="text-2xl font-semibold tracking-tight">
                  <span className="mr-2 text-muted">16</span>
                  If I Evolved This Into a Product
                </h2>
              </div>
              <p className="text-sm italic text-muted">
                Hypothetical, clearly separate from the personal project above.
                This is how I&apos;d think about it as a PM, not a claim of what
                it is today.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["Target audience", "Busy dual-income households and young professionals who want the savings of weekly bulk shopping without the planning tax."],
                  ["Market opportunity", "Sits between recipe apps and grocery delivery, the under-served 'decide + assemble' step rather than browse or deliver."],
                  ["Competitive landscape", "Meal-planning apps (Mealime, Whisk), grocery platforms' own lists, and generic AI chat. None auto-deliver a reuse-optimized, buyable plan unprompted."],
                  ["Monetization", "Freemium weekly plan; paid tier for grocery-cart hand-off, pantry awareness, and dietary profiles; potential retailer affiliate on the list."],
                  ["Future roadmap", "Pantry-aware lists → dietary/diet profiles → one-tap order hand-off → budget targets → feedback loop that learns the meals I keep."],
                  ["Risks", "AI plan quality and trust; thin willingness-to-pay; reliance on grocery platforms; retention once novelty fades."],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <h3 className="font-semibold text-foreground">{t}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                <B>Product strategy:</B> win the narrow, painful job, &ldquo;give
                me a plan I&apos;ll actually cook and a list I&apos;ll actually
                buy&rdquo;, before expanding. Trust in the plan is the wedge;
                grocery-cart hand-off is where it becomes sticky.
              </p>
            </div>
          </section>
        </Reveal>

        {/* What I learned */}
        <Section n="17" icon={Sparkles} title="What I Learned as a Product Manager">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Problem framing", "The obvious problem (shopping) wasn't the real one (planning). Reframing unlocked a far cheaper solution."],
              ["MVP thinking", "The smallest viable surface, a scheduled email, beat the app I assumed I needed."],
              ["Prioritization & trade-offs", "Cutting pantry sync, nutrition, and a UI kept the build focused on the one job that mattered."],
              ["Systems thinking", "Designing the pipeline (schedule → AI → transform → email) mattered more than any single feature."],
              ["Customer empathy", "Being my own user collapsed the feedback loop, I felt every rough edge immediately."],
              ["Iteration & metrics", "Defining success as 'plans I act on' (not 'plans generated') kept me honest about real value."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <h3 className="font-semibold text-foreground">{t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <Callout variant="thesis">
            <div className="flex gap-3">
              <Quote className="h-6 w-6 shrink-0" style={{ color: ACCENT }} />
              <p className="text-lg font-medium italic text-foreground">
                The win wasn&apos;t automating grocery shopping, it was noticing
                that the real product was removing a decision. Build for the job,
                not the obvious task.
              </p>
            </div>
          </Callout>
        </Section>

        <div className="flex flex-col items-center gap-4 border-t border-border pt-10 text-center">
          <p className="text-muted-foreground">
            Want to talk through the thinking, or see more case studies?
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
