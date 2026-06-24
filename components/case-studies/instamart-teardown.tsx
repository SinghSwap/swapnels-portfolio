import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ClipboardList,
  Compass,
  Crosshair,
  FlaskConical,
  Gauge,
  Layers,
  Lightbulb,
  ListChecks,
  Quote,
  Route,
  Target,
  TrendingDown,
  Trophy,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Footer } from "@/components/sections/footer";

const ACCENT = "#fc8019";

// ---- small presentational helpers -------------------------------------------

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
            <span className="text-muted" style={{ marginRight: 8 }}>
              {n}
            </span>
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
  const styles =
    variant === "thesis"
      ? "border-l-4 bg-card"
      : variant === "accent"
        ? "border-l-4 bg-card"
        : "border-l-4 bg-background-subtle";
  return (
    <blockquote
      className={`rounded-r-xl border border-border ${styles} p-5`}
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

function SolutionCard({
  letter,
  title,
  addresses,
  rows,
}: {
  letter: string;
  title: string;
  addresses: string;
  rows: { label: string; value: ReactNode }[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        <span
          className="grid h-9 w-9 place-items-center rounded-lg text-sm font-bold text-white"
          style={{ background: ACCENT }}
        >
          {letter}
        </span>
        <div>
          <h3 className="font-semibold leading-tight text-foreground">{title}</h3>
          <span className="text-xs text-muted">{addresses}</span>
        </div>
      </div>
      <dl className="mt-4 space-y-2 text-sm">
        {rows.map((r) => (
          <div key={r.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
            <dt className="shrink-0 font-medium text-foreground sm:w-32">
              {r.label}
            </dt>
            <dd className="text-muted-foreground">{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// ---- page -------------------------------------------------------------------

export function InstamartTeardown() {
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
              href="/#case-studies"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> All case studies
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <Badge variant="accent" className="mt-8">
              Product Teardown
            </Badge>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              Reducing Purchase Friction in Swiggy Instamart&apos;s Variant
              Selection Experience
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              A teardown of the grocery add-to-cart funnel — where a
              discount-optimized variant picker quietly leaks conversion, trust,
              and repeat demand.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Format", "Independent teardown"],
                ["Surface", "Search → Variant → Cart"],
                ["Method", "1 recorded session + screenshots"],
                ["Lens", "Growth / Funnel PM"],
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
        {/* honesty note */}
        <Reveal>
          <Callout>
            <p className="text-sm">
              <B>Honesty note (kept deliberately, because it&apos;s how I&apos;d
              brief a leadership team):</B>{" "}
              This analysis is built from a single qualitative session and two
              screenshots. Every number below is a{" "}
              <B>directional estimate built on stated assumptions</B>, not
              measured truth. I separate <B>Observation</B> (what I saw),{" "}
              <B>Hypothesis</B> (what I believe it causes), and{" "}
              <B>Recommendation</B> (what I&apos;d do). The first deliverable
              would be <B>instrumentation to replace assumptions with funnel
              data.</B>
            </p>
          </Callout>
        </Reveal>

        {/* 1 Executive Summary */}
        <Section n="01" icon={ClipboardList} title="Executive Summary">
          <p>
            Instamart&apos;s variant-selection modal — the step between &ldquo;I
            found potatoes&rdquo; and &ldquo;potatoes are in my cart&rdquo; — is{" "}
            <B>optimized for discount visibility and AOV, not purchase
            completion.</B>{" "}
            On the highest-frequency category in grocery (staples like
            potato/onion/tomato), three compounding design decisions turn a
            one-tap intent into a multi-step, doubt-inducing detour:
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              "The currently-selected option renders last (rightmost) because chips sort alphabetically — so a correct default reads as not selected.",
              "On variant switch, the system auto-selects the highest-discount pack regardless of stock, landing users on sold-out inventory.",
              "When that pack is sold out, the only clear signal lives in a bottom-corner button a one-handed grip physically covers — while the tile still looks available.",
            ].map((t, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-4 text-sm"
              >
                <span
                  className="text-lg font-bold"
                  style={{ color: ACCENT }}
                >
                  {i + 1}
                </span>
                <p className="mt-1 text-muted-foreground">{t}</p>
              </div>
            ))}
          </div>
          <p>
            Individually these range from recoverable friction to high-impact.{" "}
            <B>In sequence they form a high-severity failure: a user is steered
            onto out-of-stock inventory, isn&apos;t told clearly, and abandons a
            basket that was actually fillable.</B>
          </p>
          <Callout variant="accent">
            <p>
              The strategic frame is not &ldquo;fix the UI.&rdquo; It&apos;s:{" "}
              <B>the variant picker is solving the wrong objective function —
              discount exposure — at the exact moment the user&apos;s job is
              &ldquo;complete my purchase.&rdquo;</B>{" "}
              <span className="mt-2 block text-sm">
                <B>What I&apos;d ship first:</B> an availability-first default +
                an unmissable sold-out state (paired — they&apos;re the same
                revenue-protecting chain), with a near-zero-effort chip-reorder
                riding in the same release.
              </span>
            </p>
          </Callout>
        </Section>

        {/* 2 Problem Statement */}
        <Section n="02" icon={Target} title="Problem Statement">
          <Callout variant="accent">
            <p>
              Instamart&apos;s variant modal optimizes for discount/AOV signaling
              at the moment of purchase intent, introducing friction that{" "}
              <B>suppresses add-to-cart conversion and erodes inventory trust</B>{" "}
              — disproportionately on the highest-frequency, highest-retention
              category in the basket.
            </p>
          </Callout>
          <p>
            This matters because in quick-commerce,{" "}
            <B>the staple search (&ldquo;aloo,&rdquo; &ldquo;doodh,&rdquo;
            &ldquo;pyaaz&rdquo;) is the habit loop.</B>{" "}
            It&apos;s the query that brings users back weekly. Friction there
            doesn&apos;t just cost one line item — it taxes the behavior that
            drives frequency, and frequency is the entire q-commerce business
            model.
          </p>
        </Section>

        {/* 3 User Journey */}
        <Section n="03" icon={Route} title="User Journey Analysis">
          <p>
            <B>Scenario:</B> A returning user (3 items already in cart, mid-way
            to a &ldquo;Maxxsaver&rdquo; threshold) searches <B>&ldquo;Aloo&rdquo;</B>{" "}
            to restock potatoes.
          </p>
          <Table
            headers={["Stage", "What the user did", "What the system did", "Friction"]}
            rows={[
              ["Search", "Typed “Aloo”", "Returned a dense staple grid", "—"],
              ["Intent", "Tapped + on the default potato", "Opened a variant modal (not a direct add)", "Tap promised “add,” delivered “configure”"],
              ["Orientation", "Looked for the selected type", "Showed “Potato” selected — but as the rightmost chip", "Couldn’t trust selection → explored other chips"],
              ["Exploration", "Tapped a different type to check", "Auto-selected the highest-discount pack — sold out", "Landed on a dead end"],
              ["Confusion", "Saw a highlighted tile with a live price", "Sold-out state only in the bottom button (hand-occluded)", "Item looked buyable; it wasn’t"],
              ["Recovery", "Backtracked to the original type", "Restored an addable state", "Wasted taps + lost confidence"],
              ["Add", "Tapped ADD", "Item added; cart 3 → 4", "After ~10 interactions for one ₹29 staple"],
            ]}
          />
          <p>
            <B>The shape of the journey:</B> intent → doubt → dead-end →
            backtrack → recover → add. Every arrow before the last is avoidable.
          </p>
        </Section>

        {/* 4 JTBD */}
        <Section n="04" icon={Crosshair} title="Jobs To Be Done">
          <Callout variant="accent">
            <p>
              <B>Primary JTBD:</B>{" "}
              <em>
                &ldquo;When I run low on a staple, help me restock it in seconds
                so I can get on with my day.&rdquo;
              </em>
            </p>
          </Callout>
          <Table
            headers={["Job type", "The user’s actual job", "What the modal assumed"]}
            rows={[
              ["Functional", "Add the default potato, fast", "Make a type + pack + discount decision"],
              ["Emotional", "Feel in control and certain", "Created doubt about what was selected"],
              ["Social / Practical", "Hit the savings threshold, finish the run", "Optimized the platform’s discount surfacing"],
            ]}
          />
          <p>
            <B>The core misalignment:</B> the user hired Instamart for{" "}
            <B>speed and certainty.</B> The variant modal is built to do{" "}
            <B>merchandising.</B> At the moment of intent, merchandising should
            yield.
          </p>
        </Section>

        {/* 5 Expectations vs Experience */}
        <Section n="05" icon={Layers} title="Expectations vs. Actual Experience">
          <Table
            headers={["User expectation", "Actual experience", "Gap"]}
            rows={[
              ["“Tap + = it’s in my cart”", "+ opened a configurator", "Affordance broke its promise"],
              ["“The selected option is shown first”", "Selected option was last/rightmost", "Position contradicted state"],
              ["“Defaults are things I can buy”", "Default landed on sold-out inventory", "Optimized for discount, not availability"],
              ["“If unavailable, I’ll be told clearly”", "Sold-out signal hidden under my hand", "Critical status in the least-visible spot"],
              ["“This should take one tap”", "~10 interactions, one backtrack", "Friction tax on a habitual action"],
            ]}
          />
        </Section>

        {/* 6 Insights */}
        <Section n="06" icon={Lightbulb} title="Key Product Insights">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["A correct default that looks wrong is as costly as a wrong default.", "The right potato type sat where users don’t look for a default. Selection state must be reinforced by position, not just color — users trust layout over highlight."],
              ["Optimizing the default for discount is negative-EV when stock is ignored.", "A “best deal” the user can’t buy is a dead end. Availability is a precondition for a default to have any value at all."],
              ["Inventory accuracy and inventory communication are different products.", "The data was correct (genuinely sold out); the communication failed. In q-commerce, perceived availability drives behavior more than actual availability."],
              ["This is the habit category, so the blast radius is retention.", "Friction on “aloo” isn’t friction on a long-tail SKU — it’s friction on the query that creates weekly frequency. The cost compounds through repeat behavior."],
            ].map(([t, d], i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex items-start gap-2">
                  <span
                    className="mt-0.5 text-xs font-bold"
                    style={{ color: ACCENT }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-foreground">{t}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 7 Root Cause */}
        <Section n="07" icon={Compass} title="Root Cause Analysis">
          <Table
            headers={["Symptom", "Proximate cause", "Root cause (organizational)"]}
            rows={[
              ["Selected chip rendered last", "Chips sort alphabetically; selection isn’t an input to ordering", "No product rule that the active/default option leads. Ordering was a non-decision."],
              ["Default lands on sold-out pack", "Default-selection logic ranks by discount %", "Merchandising/growth incentives own the default; inventory is decoupled from it."],
              ["Sold-out poorly communicated", "OOS bound only to the bottom button; “selected” styling overrides “sold-out”", "No single source of truth for availability; critical status in the reachability dead-zone."],
            ]}
          />
          <Callout>
            <p>
              <B>The unifying root cause:</B> the variant modal&apos;s objective
              function is &ldquo;expose discounts / lift AOV,&rdquo; inherited
              from merchandising — when at this funnel step the objective should
              be &ldquo;complete the purchase.&rdquo; Every symptom is a
              downstream expression of that one misaligned goal.
            </p>
          </Callout>
        </Section>

        {/* 8 Business Impact */}
        <Section n="08" icon={TrendingDown} title="Business Impact">
          <p className="text-sm italic">
            All figures are directional, per-unit, and assumption-based —
            designed to be multiplied by real funnel volume once instrumented.
            Unit: <B>per 1,000 staple variant-modal opens.</B>
          </p>
          <div className="rounded-2xl border border-border bg-card p-5 text-sm">
            <p className="font-medium text-foreground">
              Illustrative funnel (assumptions in italics)
            </p>
            <ul className="mt-3 space-y-2">
              <li className="italic text-muted-foreground">
                ~15% of staple modal opens hit a default that&apos;s out of stock.
              </li>
              <li className="italic text-muted-foreground">
                ~35% of those abandon the line rather than discovering an
                in-stock pack.
              </li>
              <li className="text-foreground">
                → <B>~50 recoverable abandoned add-to-carts per 1,000 opens.</B>
              </li>
              <li className="italic text-muted-foreground">
                ~₹40 avg staple line value, 0.6 basket-attach knock-on.
              </li>
              <li className="text-foreground">
                → <B>~₹2,000–3,200 recoverable GMV at risk per 1,000 opens</B>,
                before trust/retention effects.
              </li>
            </ul>
          </div>
          <Table
            headers={["Metric", "Impact", "Why"]}
            rows={[
              ["Search-to-cart conversion", "↓", "Backtracking + dead-ends on the highest-volume query class."],
              ["Add-to-cart rate", "↓↓", "Users land on unbuyable defaults and abandon the line."],
              ["Checkout completion", "↓ indirect", "Smaller/incomplete carts and lost momentum."],
              ["Revenue / GMV", "↓↓", "Loses sellable lines — an in-stock alternative existed."],
              ["Basket size / AOV", "↘ paradox", "The discount-max default shrinks baskets when it lands on OOS."],
              ["CSAT", "↓", "“Looks available, won’t add” reads as a broken app."],
              ["Retention / frequency", "↓↓ highest-stakes", "Erodes the weekly restock loop that powers q-commerce LTV."],
            ]}
          />
          <Callout variant="accent">
            <p>
              <B>The headline:</B> the feature built to <B>increase</B> basket
              value (discount-max defaulting) is, in the OOS case,{" "}
              <B>decreasing</B> it — a self-defeating optimization.
            </p>
          </Callout>
        </Section>

        {/* 9 RICE */}
        <Section n="09" icon={ListChecks} title="Prioritization — RICE">
          <p className="text-sm">
            RICE = (Reach × Impact × Confidence) ÷ Effort. Reach = affected
            events/quarter (illustrative); Impact 0.25–3; Confidence 0–100%;
            Effort in person-months.
          </p>
          <Table
            emphasizeFirst={false}
            headers={["#", "Opportunity", "Reach", "Impact", "Conf.", "Effort", "RICE"]}
            rows={[
              [<B key="c">C</B>, "Left-anchor selected chip + relevance ordering", "20M", "0.5", "70%", "0.5", <B key="cr">14.0M</B>],
              [<B key="b">B</B>, "Redundant, unmissable sold-out state", "8M", "1.5", "80%", "1.0", <B key="br">9.6M</B>],
              [<B key="d">D</B>, "One-tap add with a smart default", "40M", "1.5", "50%", "4.0", <B key="dr">7.5M</B>],
              [<B key="a">A</B>, "Availability-aware default selection", "8M", "2.0", "80%", "2.0", <B key="ar">6.4M</B>],
              [<B key="e">E</B>, "OOS → Notify me + substitute rail", "8M", "1.0", "60%", "1.5", <B key="er">3.2M</B>],
            ]}
          />
          <Callout>
            <p>
              <B>Reading the table like a PM, not a calculator:</B> RICE ranks{" "}
              <B>C</B> highest because it&apos;s nearly free and broad — but its
              absolute business value is low (recoverable friction, no lost
              sale). <B>A + B</B> are the only items that protect sellable GMV
              and trust. RICE measures efficiency; it doesn&apos;t measure
              strategic value — so a cheap top-RICE item ships{" "}
              <em>alongside</em> the strategic bet, not instead of it.
            </p>
          </Callout>
        </Section>

        {/* 10 Recommended Solutions */}
        <Section n="10" icon={ClipboardList} title="Recommended Solutions">
          <div className="grid gap-4">
            <SolutionCard
              letter="A"
              title="Availability-First Variant Defaulting"
              addresses="addresses Obs. 2"
              rows={[
                { label: "Design", value: "Make live inventory a hard gate before the discount sort. Default = cheapest/most-relevant in-stock pack; never auto-select OOS. Prefer last-purchased for returning users." },
                { label: "Benefit", value: "The default is always buyable; converts the AOV optimization from negative- to positive-EV." },
                { label: "Metrics", value: "% of opens defaulting to OOS (→0); modal→ADD rate; AOV (guardrail)." },
              ]}
            />
            <SolutionCard
              letter="B"
              title="Single-Source-of-Truth Availability Display"
              addresses="addresses Obs. 3"
              rows={[
                { label: "Design", value: "One availability state per variant drives every signal in unison — tile border, price, an on-tile “Sold out” label, and the button. OOS survives selection; surface status inline near the quantity." },
                { label: "Benefit", value: "Instantly knows what’s buyable; rebuilds inventory trust." },
                { label: "Metrics", value: "Time-to-comprehension; abandonment-after-OOS; CSAT on availability." },
              ]}
            />
            <SolutionCard
              letter="C"
              title="Intent-Ordered Variant Chips"
              addresses="addresses Obs. 1"
              rows={[
                { label: "Design", value: "Selected/default chip leads (leftmost). Order the rest by query relevance (“Aloo” → “Potato” first), not alphabet. Push disabled/OOS chips to the end." },
                { label: "Benefit", value: "Zero doubt about what’s selected → no backtrack." },
                { label: "Metrics", value: "Chip-backtrack rate; time-to-ADD; tap count per add." },
              ]}
            />
            <SolutionCard
              letter="D"
              title="One-Tap Add with a Smart Default"
              addresses="structural — collapses C + much of A"
              rows={[
                { label: "Design", value: "+ adds the smart (in-stock, relevant, last-bought) default in one tap; the modal surfaces only for genuine multi-option choices, opening with the default first." },
                { label: "Benefit", value: "Restores the “tap = added” mental model; largest lift to add-to-cart on the habit category." },
                { label: "Metrics", value: "Add-to-cart rate; taps-to-add; AOV (guardrail); units/order." },
              ]}
            />
            <SolutionCard
              letter="E"
              title="Graceful OOS Recovery"
              addresses="addresses the dead-end"
              rows={[
                { label: "Design", value: "Replace the dead button with “Notify me” + a substitute rail (“In stock now: …”)." },
                { label: "Benefit", value: "A path forward instead of a wall; recaptures demand via substitution." },
                { label: "Metrics", value: "Substitute add-rate; notify-me opt-ins; recovered sessions." },
              ]}
            />
          </div>
        </Section>

        {/* 11 Experimentation */}
        <Section n="11" icon={FlaskConical} title="Experimentation Plan">
          <Table
            headers={["#", "Hypothesis", "Treatment", "Primary metric", "Guardrails"]}
            rows={[
              [<B key="t1">T1</B>, "In-stock default lifts modal→ADD without hurting AOV", "In-stock-first default", "Modal→ADD conversion", "AOV, units/order"],
              [<B key="t2">T2</B>, "Left-anchor + relevance ordering removes the detour", "Selected-first + relevance order", "Time-to-ADD / tap count", "Add-to-cart, reversals"],
              [<B key="t3">T3</B>, "Unmissable OOS comms cut false-abandonment", "Tile + inline + button; OOS survives selection", "Abandonment-after-OOS", "CSAT, accidental adds"],
              [<B key="t4">T4</B>, "One-tap add raises add-to-cart on staples", "+ adds smart default; modal only for real choices", "Add-to-cart rate", "AOV, complaints"],
              [<B key="t5">T5</B>, "OOS recovery recaptures lost demand", "“Notify me” + substitute rail", "Recovered add-rate", "Substitute return rate"],
              [<B key="t6">T6</B>, "Last-purchased beats cheapest-in-stock for returnees", "Last-purchased default", "Repeat add-to-cart", "AOV, time-to-cart"],
            ]}
          />
          <p className="text-sm">
            <B>Design notes:</B> randomize at user level; staple-category segment
            first (cleanest signal, highest volume); AOV is the standing
            guardrail on every default test; ship behind a flag with
            auto-rollback on guardrail breach.
          </p>
        </Section>

        {/* 12 Success Metrics */}
        <Section n="12" icon={Gauge} title="Success Metrics">
          <Callout variant="accent">
            <p>
              <B>North Star for this surface:</B> Successful staple purchases per
              session (completion-weighted, not discount-weighted).
            </p>
          </Callout>
          <Table
            headers={["Layer", "Metric", "Target"]}
            rows={[
              ["Funnel top", "Search-to-cart conversion", "↑"],
              ["Modal", "Variant-selection completion (modal→ADD)", "↑"],
              ["Modal", "Chip-backtrack rate / OOS-default rate", "↓"],
              ["Cart", "Add-to-cart rate", "↑"],
              ["Speed", "Time-to-cart", "↓"],
              ["Value", "Revenue per session", "↑"],
              ["Guardrail", "AOV / units per order", "flat-or-↑"],
              ["Loyalty", "Repeat purchase rate on staples", "↑"],
              ["Trust", "CSAT on availability accuracy", "↑"],
            ]}
          />
          <p className="text-sm">
            <B>Counter-metric discipline:</B> any default change is judged on{" "}
            <B>revenue per session</B>, not AOV in isolation — precisely to avoid
            re-creating the &ldquo;optimize AOV, lose the sale&rdquo; failure.
          </p>
        </Section>

        {/* 13 Strategy */}
        <Section n="13" icon={Compass} title="Product Strategy Perspective">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground">
                AOV optimization vs. purchase completion
              </h3>
              <p className="mt-1">
                AOV is a <em>conditional</em> metric — it only exists if the
                purchase completes. Optimizing the default for discount while
                ignoring stock multiplies basket value by a probability of zero.{" "}
                <B>Gate on completion first (availability, clarity), then
                optimize value within the buyable set.</B> Completion is the
                multiplier; AOV is the multiplicand.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Merchandising goals vs. customer intent
              </h3>
              <p className="mt-1">
                The user at the <B>+</B> tap wants to <em>finish</em>;
                merchandising wants to <em>show</em>. They coexist —{" "}
                <B>intent owns the moment of action; merchandising owns
                discovery.</B> A sold-out default at the point of intent is
                merchandising trespassing on the user&apos;s job.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Why completion beats discount visibility in q-commerce
              </h3>
              <p className="mt-1">
                Q-commerce monetizes <B>frequency</B>, not margin-per-order. A
                recovered staple purchase isn&apos;t worth ₹40 — it&apos;s worth
                ₹40 × the retention it protects on a weekly-habit category.{" "}
                <B>Optimizing for the successful purchase is optimizing for the
                business model.</B>
              </p>
            </div>
          </div>
        </Section>

        {/* 14 Final Recommendation */}
        <Section n="14" icon={Trophy} title="Final Recommendation">
          <Callout>
            <p className="italic">
              &ldquo;If I owned Instamart&apos;s grocery purchase funnel, what
              would I ship first — and why?&rdquo;
            </p>
          </Callout>
          <p>
            <B>Ship the variant modal&apos;s objective change: availability-first
            defaulting (A) + an unmissable, single-source-of-truth sold-out state
            (B), as one release — with the chip reorder (C) riding along.</B>
          </p>
          <ol className="list-decimal space-y-2 pl-5 text-sm marker:font-semibold marker:text-foreground">
            <li>
              The only intervention that recovers <em>sellable</em> revenue and
              trust — the two things that compound in q-commerce.
            </li>
            <li>
              It corrects the root cause (discount-objective at the intent step),
              not a symptom. Every other fix is downstream.
            </li>
            <li>
              Cheap for its leverage: B is mostly front-end, C near-zero effort, A
              a contained logic change — small relative to GMV-at-risk.
            </li>
            <li>
              On RICE, C scores highest — so it ships in the same release. RICE
              prioritizes; strategy decides. A quick win rides the strategic ship,
              it doesn&apos;t delay it.
            </li>
            <li>
              Gate everything on <B>revenue per session</B>, not AOV — the
              institutional fix for the exact mistake that created the problem.
            </li>
          </ol>
          <p className="text-sm">
            <B>Deliberately not first:</B> the full one-tap-add restructure (D).
            Highest ceiling, but real AOV risk and 4× the effort — run as the next
            experiment (T4) <em>after</em> the availability foundation, so results
            aren&apos;t confounded by users still hitting sold-out dead-ends.
          </p>
          <Callout variant="thesis">
            <div className="flex gap-3">
              <Quote className="h-6 w-6 shrink-0" style={{ color: ACCENT }} />
              <p className="text-lg font-medium italic text-foreground">
                Instamart&apos;s variant picker is optimizing for the discount it
                can show instead of the purchase it can complete. Flip that
                objective on the highest-frequency category, and we protect the
                exact behavior — fast, certain, repeat staple buying — that the
                entire quick-commerce model is built on.
              </p>
            </div>
          </Callout>
        </Section>

        <Reveal>
          <p className="border-t border-border pt-8 text-sm italic text-muted">
            Prepared as an independent product teardown. Quantitative figures are
            directional and assumption-based; the first build step would be the
            instrumentation (OOS-default rate, modal→ADD conversion,
            chip-backtrack rate) needed to convert these hypotheses into measured
            truth.
          </p>
        </Reveal>

        <div className="flex flex-col items-center gap-4 border-t border-border pt-10 text-center">
          <p className="text-muted-foreground">
            Want to talk through the thinking, or see more teardowns?
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
