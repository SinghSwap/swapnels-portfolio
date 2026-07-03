import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  AudioLines,
  BadgeCheck,
  Compass,
  Crosshair,
  Database,
  Gauge,
  Globe,
  Lightbulb,
  ListChecks,
  Lock,
  Menu,
  Mic,
  MoreHorizontal,
  Plus,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TriangleAlert,
  Users,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Footer } from "@/components/sections/footer";

const ACCENT = "#6366f1";

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

function StatGrid({ items }: { items: { value: string; label: string }[] }) {
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

function CardGrid({ items }: { items: [string, string][] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map(([t, d]) => (
        <div key={t} className="rounded-2xl border border-border bg-card p-5">
          <h3 className="font-semibold text-foreground">{t}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
        </div>
      ))}
    </div>
  );
}

// ---- code-designed phone mockups (cleaner than raw screenshots) -------------

function Phone({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[248px]">
      <div className="rounded-[2.2rem] border border-border bg-card p-1.5 shadow-xl shadow-black/[0.06]">
        <div className="overflow-hidden rounded-[1.7rem] border border-border bg-background">
          {/* status bar */}
          <div className="flex items-center justify-between px-4 pb-1 pt-2.5 text-[9px] font-semibold text-foreground/70">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="flex items-end gap-[1.5px]">
                {[3, 5, 7, 9].map((h) => (
                  <span
                    key={h}
                    className="w-[2px] rounded-sm bg-foreground/60"
                    style={{ height: h }}
                  />
                ))}
              </span>
              <span className="ml-0.5 h-2 w-3.5 rounded-[2px] border border-foreground/50">
                <span className="block h-full w-2/3 rounded-[1px] bg-foreground/50" />
              </span>
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

function AppBar() {
  return (
    <div className="flex items-center justify-between px-3.5 py-2">
      <Menu className="h-3.5 w-3.5 text-foreground/70" />
      <span
        className="rounded-full px-2 py-0.5 text-[8px] font-semibold"
        style={{
          color: ACCENT,
          background: `color-mix(in srgb, ${ACCENT} 12%, transparent)`,
        }}
      >
        ✦ Upgrade
      </span>
      <MoreHorizontal className="h-3.5 w-3.5 text-foreground/70" />
    </div>
  );
}

function InputBar({ active = false }: { active?: boolean }) {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-border bg-background-subtle px-2 py-1.5">
      <Plus className="h-3 w-3 text-foreground/50" />
      <span className="flex-1 text-[9px] text-muted">Ask anything</span>
      <Mic className="h-3 w-3 text-foreground/50" />
      <span
        className="grid h-5 w-5 place-items-center rounded-full"
        style={{
          background: active ? ACCENT : "color-mix(in srgb, var(--foreground) 8%, transparent)",
        }}
      >
        <AudioLines
          className="h-3 w-3"
          style={{ color: active ? "#fff" : "var(--muted)" }}
        />
      </span>
    </div>
  );
}

function ModeSelectScreen() {
  return (
    <div className="flex h-[330px] flex-col">
      <AppBar />
      <div className="flex flex-1 items-center justify-center">
        <span className="text-[10px] text-muted">What can I help with?</span>
      </div>
      {/* mode popover anchored above input */}
      <div className="px-3">
        <div className="ml-auto w-[60%] rounded-xl border border-border bg-card p-1 shadow-lg shadow-black/10">
          <div className="px-2 py-1 text-[7px] font-semibold uppercase tracking-wide text-muted">
            Select mode
          </div>
          <div
            className="flex items-center justify-between rounded-lg px-2 py-1.5"
            style={{ background: `color-mix(in srgb, ${ACCENT} 12%, transparent)` }}
          >
            <span className="flex items-center gap-1 text-[9px] font-medium text-foreground">
              <Lock className="h-2.5 w-2.5" style={{ color: ACCENT }} />
              Privacy Mode
            </span>
            <span
              className="rounded-full px-1.5 py-[1px] text-[6px] font-bold text-white"
              style={{ background: ACCENT }}
            >
              NEW
            </span>
          </div>
          <div className="px-2 py-1.5 text-[9px] text-muted-foreground">
            Standard Mode
          </div>
        </div>
      </div>
      <div className="px-3 pb-3 pt-2">
        <InputBar active />
      </div>
    </div>
  );
}

function PrivacyIntroScreen() {
  const rows = [
    [Database, "On-device transcription", "Your audio isn't sent to OpenAI"],
    [Sparkles, "No memories", "ChatGPT saves nothing from the chat"],
    [ShieldCheck, "Private", "Chats aren't used to train ChatGPT"],
  ] as const;
  return (
    <div className="flex h-[330px] flex-col">
      <AppBar />
      <div className="flex flex-1 flex-col justify-center px-3">
        <div className="rounded-2xl border border-border bg-card p-3 shadow-sm">
          <div className="text-[7px] font-semibold uppercase tracking-wide text-muted">
            Privacy Mode
          </div>
          <div className="text-[12px] font-semibold text-foreground">
            Here&apos;s what&apos;s new
          </div>
          <div className="mt-2.5 space-y-2">
            {rows.map(([Icon, t, d]) => (
              <div key={t} className="flex items-start gap-2">
                <span
                  className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-md"
                  style={{
                    color: ACCENT,
                    background: `color-mix(in srgb, ${ACCENT} 12%, transparent)`,
                  }}
                >
                  <Icon className="h-2.5 w-2.5" />
                </span>
                <div>
                  <div className="text-[9px] font-medium text-foreground">{t}</div>
                  <div className="text-[8px] leading-tight text-muted-foreground">
                    {d}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="mt-3 flex w-full items-center justify-center gap-1 rounded-full py-1.5 text-[9px] font-semibold text-white"
            style={{ background: ACCENT }}
          >
            <Star className="h-2.5 w-2.5" /> Start Privacy Mode
          </button>
        </div>
      </div>
      <div className="px-3 pb-3">
        <InputBar />
      </div>
    </div>
  );
}

// ---- page -------------------------------------------------------------------

export function VoiceAdoption() {
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
              Product Case Study · 0 → 1
            </Badge>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              Getting India to Talk to ChatGPT
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              How would you increase voice-input adoption on the ChatGPT mobile
              app? A self-directed product case study — from market opportunity
              to a shippable, privacy-first solution.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Format", "Self-directed case study"],
                ["Surface", "ChatGPT mobile · Voice input"],
                ["Method", "Market research + 75-user survey"],
                ["Lens", "Growth / 0→1 · India"],
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
        {/* 1 Opportunity */}
        <Section n="01" icon={Globe} title="The Opportunity">
          <p>
            India just overtook the US as ChatGPT&apos;s largest monthly-active
            market — and its growth is overwhelmingly <B>vernacular</B>. Typing in
            regional languages is slow and unnatural; <B>voice is the obvious
            unlock</B>, but adoption inside ChatGPT lags.
          </p>
          <StatGrid
            items={[
              { value: "$89B", label: "India voice-assistant market by 2032 (from $44B)" },
              { value: "1 in 5", label: "Internet users use voice commands" },
              { value: "870M", label: "Indians access content in Indic languages" },
              { value: "~350M", label: "Low-literacy users voice can include" },
            ]}
          />
          <p className="text-sm">
            Hindi is already the 2nd most-used language on Google Assistant, and
            voice-search adoption is <B>higher in Tier-2/3 cities than metros</B> —
            speaking beats typing when the keyboard isn&apos;t in your language.
          </p>
        </Section>

        {/* 2 Adoption challenges */}
        <Section n="02" icon={TriangleAlert} title="Why Adoption Is Hard">
          <CardGrid
            items={[
              ["Linguistic diversity", "22 official languages and 1,600+ dialects — the hardest constraint for any voice model."],
              ["Code-switching (Hinglish)", "~400M Indians mix Hindi & English daily; models still parse mixed inputs poorly."],
              ["Digital literacy", "Only ~25% of rural India is digitally literate — availability ≠ usability."],
              ["Eavesdropping fears", "Users worry mics are “always listening” (~1.4 mis-activations / 10k words)."],
            ]}
          />
        </Section>

        {/* 3 UX teardown */}
        <Section n="03" icon={Crosshair} title="UX Teardown — ChatGPT vs. Voice-First Apps">
          <p>
            ChatGPT&apos;s speech-to-text is actually <B>more capable</B> than
            Alexa or Google Assistant — it handles Hindi, Telugu, Tulu and more.
            The problem is positioning: it doesn&apos;t feel voice-first, and users
            don&apos;t know what it can do.
          </p>
          <Table
            headers={["", "Google Assistant", "Alexa", "ChatGPT"]}
            rows={[
              ["Wake word", "“Ok Google”", "“Hey Alexa”", "None"],
              ["Voice-led in-app flow", "Yes", "Yes (voice-only)", "No — feels text-first"],
              ["Multilingual dictation", "Strong", "Limited", "Strong, but hidden from users"],
              ["Input clarity", "Clear", "Voice only", "Two mic buttons (dictation vs voice mode) confuse users"],
            ]}
          />
          <Callout variant="accent">
            <p>
              <B>Insight:</B> the capability exists; the <B>perception and
              discoverability</B> don&apos;t. ChatGPT lacks the voice-led cues that
              make Alexa and Assistant feel like you should just talk.
            </p>
          </Callout>
        </Section>

        {/* 4 Segment + TAM */}
        <Section n="04" icon={Target} title="User Segment & Sizing">
          <p>
            I narrowed from &ldquo;all of India&rdquo; to a sharp, reachable
            wedge: <B>urban prime-working-age professionals (25–54)</B> who use
            ChatGPT for work, speak Hindi/regional languages, but default to typing.
          </p>
          <Table
            headers={["Funnel", "Definition", "Size"]}
            rows={[
              [<B key="a">Active internet users</B>, "India, 2025", "886M"],
              [<B key="u">Urban users</B>, "Tier 1–3 urban (45%)", "398.7M"],
              [<B key="p">Prime working age</B>, "Ages 25–54 (41.6%)", "165.69M"],
              [<B key="s">Serviceable segment</B>, "Privacy-hesitant urban pros", "~60M"],
            ]}
          />
          <p className="text-sm">
            ~95% of this cohort are Hindi/regional speakers — and{" "}
            <B>every user who reported transcription errors was a regional-language
            speaker.</B>
          </p>
        </Section>

        {/* 5 Research */}
        <Section n="05" icon={BadgeCheck} title="User Research — Why They Don't">
          <p>
            A 75-person survey plus interviews. Voice is{" "}
            <B>3–4× faster than typing</B>, yet four barriers keep this cohort on
            the keyboard. Asked why they don&apos;t use voice as their primary
            input, the 25–34 segment answered:
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["39.4%", "Privacy concerns", "Fear that voice data is stored, used for training, or misused."],
              ["21.2%", "Accuracy issues", "Transcription errors — concentrated among regional/accented speakers."],
              ["21.2%", "Public discomfort", "Feels awkward speaking to an AI in public."],
              ["12.1%", "Unaware", "Don't know voice input exists, or that it's multilingual."],
            ].map(([pct, t, d]) => (
              <div
                key={t}
                className="rounded-2xl border border-border bg-card p-4"
              >
                <div className="text-2xl font-bold tracking-tight" style={{ color: ACCENT }}>
                  {pct}
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">{t}</div>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted">
            Source: survey of the 25–34 cohort (plus 6.1% other). Privacy is the
            clear lead barrier — and the one I scoped the solution around.
          </p>
        </Section>

        {/* 6 Problem statement */}
        <Section n="06" icon={Compass} title="Problem & Framing">
          <Callout variant="accent">
            <p>
              <B>Working professionals (25–34) in urban India</B> use ChatGPT
              frequently but <B>prefer typing over voice</B> — driven by privacy
              concerns, transcription issues, social discomfort, and an awareness
              gap.
            </p>
          </Callout>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Value to users</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>Convenience & speed — capture thoughts hands-free.</li>
                <li>Less typing fatigue while multitasking or commuting.</li>
                <li>Accessibility for mobility/visual challenges.</li>
                <li>Confidence that voice data is private.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Value to business</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>Higher engagement, in-app time, session frequency.</li>
                <li>Positions ChatGPT as an assistant, not just a chatbot.</li>
                <li>More conversion to premium; richer training data.</li>
              </ul>
            </div>
          </div>
          <p className="text-sm">
            <B>Why now:</B> the assistant market is shifting voice-first (~70% of
            Google Assistant queries are natural language). If ChatGPT doesn&apos;t
            act, it cedes the habit to competitors.
          </p>
        </Section>

        {/* 7 Goals / non-goals */}
        <Section n="07" icon={ListChecks} title="Goals & Non-Goals">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Goals</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>Shift existing users&apos; queries from typing to voice.</li>
                <li>Build comfort & trust via control over voice data.</li>
                <li>Acquire new users through a voice-first experience.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background-subtle p-5">
              <h3 className="font-semibold text-foreground">Non-goals (this round)</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Accuracy improvements",
                  "Activation phrase",
                  "Offline mode",
                  "Hands-free mode",
                  "New-user onboarding",
                  "Data control panel",
                ].map((g) => (
                  <span
                    key={g}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground/80"
                  >
                    {g}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted">
                Scoping ruthlessly to the one barrier with the highest leverage:
                privacy.
              </p>
            </div>
          </div>
          <Callout>
            <p className="text-sm">
              <B>Validation:</B> ~40% of this segment avoid ChatGPT voice over
              privacy; they&apos;re tech-savvy, English-comfortable, and ~60M
              strong — a focused, winnable beachhead.
            </p>
          </Callout>
        </Section>

        {/* 8 Solution + wireframes */}
        <Section n="08" icon={ShieldCheck} title="The Solution — Privacy Mode">
          <p>
            A dedicated <B>Privacy Mode</B>: speech-to-text runs{" "}
            <B>on-device</B>. These sessions don&apos;t contribute to model
            training and store no memories — directly dissolving the #1 barrier.
            It&apos;s surfaced from the home screen to also close the awareness gap.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="rounded-2xl border border-border bg-background-subtle p-5">
              <Phone>
                <ModeSelectScreen />
              </Phone>
              <figcaption className="mt-3 text-center text-xs text-muted">
                Privacy Mode surfaced right at the input — closing the awareness gap
              </figcaption>
            </figure>
            <figure className="rounded-2xl border border-border bg-background-subtle p-5">
              <Phone>
                <PrivacyIntroScreen />
              </Phone>
              <figcaption className="mt-3 text-center text-xs text-muted">
                The intro card — on-device, no memories, no training
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "On-device transcription",
              "No model training",
              "No memories created",
              "User-controlled toggle",
              "No data retention",
            ].map((f) => (
              <span
                key={f}
                className="rounded-full border px-3 py-1 text-xs font-medium"
                style={{
                  borderColor: `color-mix(in srgb, ${ACCENT} 35%, transparent)`,
                  color: ACCENT,
                  background: `color-mix(in srgb, ${ACCENT} 8%, transparent)`,
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </Section>

        {/* 9 How it works */}
        <Section n="09" icon={Workflow} title="How It Works">
          <p>
            A single toggle forks the audio path — on-device for Privacy Mode,
            cloud otherwise — with a graceful fallback when a device can&apos;t
            support native speech-to-text.
          </p>
          <figure className="rounded-2xl border border-border bg-background-subtle p-4">
            <Image
              src="/voice/system-diagram.jpg"
              alt="Privacy Mode system diagram: privacy toggle routes audio to native on-device STT or OpenAI cloud"
              width={1100}
              height={995}
              className="h-auto w-full rounded-xl"
            />
            <figcaption className="mt-3 text-center text-xs text-muted">
              System diagram — the privacy toggle routes audio to native STT or cloud
            </figcaption>
          </figure>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Algorithmic", "If privacy mode is on, route audio to native STT (on-device); else cloud. Fallback to cloud with a clear notice if unsupported. Isolate privacy sessions from memory & training."],
              ["Backend", "Integration layer to invoke the native STT framework; a privacy flag in the API payload; a new Voice_Privacy_Session_Start event for analytics."],
              ["Schema", "New session attribute for privacy state; voice metadata (STT source, accuracy, device-support flag); exclude privacy sessions from training tables."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="text-sm font-semibold text-foreground">{t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 10 Metrics */}
        <Section n="10" icon={Gauge} title="How We Measure Success">
          <Table
            headers={["Type", "Metric", "Why it matters"]}
            rows={[
              [<B key="n">North Star</B>, "% sessions with voice input", "The core adoption rate this whole effort moves"],
              ["KPI", "% Privacy Mode transcriptions", "Whether the new feature is actually used"],
              ["Non-functional", "Error rate — % successful voice sessions", "Reliability of the voice path"],
              ["Non-functional", "Accuracy — cloud transcriptions with no manual edits", "Quality without correction friction"],
              ["Launch readiness", "Fallback to cloud STT on unsupported devices", "No user is left without voice"],
            ]}
          />
          <Callout variant="thesis">
            <div className="flex gap-3">
              <Quote className="h-6 w-6 shrink-0" style={{ color: ACCENT }} />
              <p className="text-lg font-medium italic text-foreground">
                The fastest way to get India talking to ChatGPT wasn&apos;t better
                transcription — it was removing the fear behind the mic. Make
                privacy the default promise, and voice becomes the natural input.
              </p>
            </div>
          </Callout>
        </Section>

        <div className="flex flex-col items-center gap-4 border-t border-border pt-10 text-center">
          <p className="text-muted-foreground">
            Want the full case study or a walkthrough of the thinking?
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
