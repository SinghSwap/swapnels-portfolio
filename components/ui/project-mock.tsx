import { cn } from "@/lib/utils";

/**
 * Generated "screenshot" placeholder. Renders fake-but-believable product UI
 * inside browser chrome, themed by the project's accent color. Each `variant`
 * draws a different layout so projects feel distinct without real screenshots.
 */
export function ProjectMock({
  variant,
  accent,
  className,
}: {
  variant:
    | "job-search"
    | "automation"
    | "learning"
    | "research"
    | "finance"
    | "commerce"
    | "voice";
  accent: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-card-border bg-background-subtle",
        className
      )}
    >
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <div className="ml-3 hidden h-5 flex-1 items-center rounded-md bg-background-subtle px-3 text-[10px] text-muted sm:flex">
          {hostFor(variant)}
        </div>
      </div>
      <div className="p-4 sm:p-5" style={{ ["--mock" as string]: accent }}>
        {variant === "job-search" && <JobSearchMock />}
        {variant === "automation" && <AutomationMock />}
        {variant === "learning" && <LearningMock />}
        {variant === "research" && <ResearchMock />}
        {variant === "finance" && <FinanceMock />}
        {variant === "commerce" && <CommerceMock />}
        {variant === "voice" && <VoiceMock />}
      </div>
    </div>
  );
}

function hostFor(v: string) {
  return (
    {
      "job-search": "jobs.local / matched-roles",
      automation: "make.com / weekly-flow",
      learning: "pm-revision.local / frameworks",
      research: "research / whatsapp-search.pdf",
      finance: "finance.app / insights",
      commerce: "instamart / variant-picker",
      voice: "chatgpt / voice-input",
    } as Record<string, string>
  )[v];
}

const bar = "rounded bg-foreground/10";
const accentBar = "rounded";

function JobSearchMock() {
  const rows = [92, 88, 81, 74, 69];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className={cn(bar, "h-3 w-28")} />
        <div
          className="h-5 w-16 rounded-full text-[9px] font-semibold leading-5 text-white text-center"
          style={{ background: "var(--mock)" }}
        >
          Export
        </div>
      </div>
      {rows.map((score, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-lg border border-border bg-card p-2.5"
        >
          <div className="h-8 w-8 rounded-md bg-foreground/5" />
          <div className="flex-1 space-y-1.5">
            <div className={cn(bar, "h-2.5 w-2/3")} />
            <div className={cn(bar, "h-2 w-1/3 opacity-60")} />
          </div>
          <div
            className="grid h-9 w-9 place-items-center rounded-full text-[10px] font-bold text-white"
            style={{ background: "var(--mock)", opacity: 0.4 + score / 200 }}
          >
            {score}
          </div>
        </div>
      ))}
    </div>
  );
}

function AutomationMock() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        {["Trigger", "AI Menu", "List", "Email"].map((label, i) => (
          <div key={i} className="flex flex-1 items-center gap-2">
            <div
              className="grid h-10 flex-1 place-items-center rounded-lg border text-[9px] font-medium"
              style={{
                borderColor: "color-mix(in srgb, var(--mock) 35%, transparent)",
                background: "color-mix(in srgb, var(--mock) 8%, transparent)",
                color: "var(--mock)",
              }}
            >
              {label}
            </div>
            {i < 3 && <div className="h-px w-3 bg-foreground/20" />}
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-border bg-card p-3">
        <div className={cn(bar, "mb-2 h-2.5 w-24")} />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="mb-2 flex items-center gap-2 last:mb-0">
            <div
              className="h-3 w-3 rounded-sm"
              style={{ background: "var(--mock)", opacity: 0.5 }}
            />
            <div className={cn(bar, "h-2", i % 2 ? "w-3/5" : "w-2/5")} />
          </div>
        ))}
      </div>
    </div>
  );
}

function LearningMock() {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="space-y-2 rounded-lg border border-border bg-card p-2.5"
        >
          <div
            className="h-6 w-6 rounded-md"
            style={{
              background: "color-mix(in srgb, var(--mock) 18%, transparent)",
            }}
          />
          <div className={cn(bar, "h-2 w-full")} />
          <div className={cn(bar, "h-2 w-2/3 opacity-60")} />
        </div>
      ))}
    </div>
  );
}

function ResearchMock() {
  return (
    <div className="grid grid-cols-5 gap-3">
      <div className="col-span-2 space-y-2">
        <div className={cn(bar, "h-2.5 w-full")} />
        <div className={cn(bar, "h-2 w-5/6 opacity-70")} />
        <div className={cn(bar, "h-2 w-4/6 opacity-70")} />
        <div className={cn(bar, "h-2 w-5/6 opacity-70")} />
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {["TAM", "SAM", "SOM"].map((t) => (
            <div
              key={t}
              className="grid h-10 place-items-center rounded-md text-[9px] font-semibold text-white"
              style={{
                background: "var(--mock)",
                opacity: t === "TAM" ? 0.9 : t === "SAM" ? 0.6 : 0.4,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-3 space-y-2 rounded-lg border border-border bg-card p-3">
        <div className={cn(bar, "h-2.5 w-1/3")} />
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="h-4 w-4 rounded-full"
              style={{ background: "var(--mock)", opacity: 0.25 }}
            />
            <div className={cn(bar, "h-2 flex-1", i % 2 ? "opacity-80" : "opacity-50")} />
          </div>
        ))}
      </div>
    </div>
  );
}

function FinanceMock() {
  const bars = [40, 65, 50, 80, 60, 90, 70];
  return (
    <div className="space-y-3">
      <div className="flex items-end justify-between gap-1.5 rounded-lg border border-border bg-card p-3">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{
              height: `${h}px`,
              background: "var(--mock)",
              opacity: 0.35 + (h / 100) * 0.5,
            }}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {["Needs 62%", "Wants 38%"].map((t, i) => (
          <div
            key={t}
            className="rounded-lg border border-border bg-card p-2.5"
          >
            <div
              className="mb-2 h-2 w-10 rounded-full"
              style={{ background: "var(--mock)", opacity: i ? 0.4 : 0.8 }}
            />
            <div className="text-[10px] font-semibold text-muted-foreground">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommerceMock() {
  // a variant-picker: type chips (selected wrongly last) + pack tiles (one sold out)
  return (
    <div className="space-y-3">
      {/* product header */}
      <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-2.5">
        <div className="h-9 w-9 rounded-md bg-foreground/5" />
        <div className="flex-1 space-y-1.5">
          <div className={cn(bar, "h-2.5 w-1/2")} />
          <div className={cn(bar, "h-2 w-1/4 opacity-60")} />
        </div>
      </div>
      {/* variant type chips */}
      <div className="flex flex-wrap gap-1.5">
        {["Onion", "Tomato", "Potato"].map((t, i) => (
          <span
            key={t}
            className="rounded-full border px-2.5 py-1 text-[9px] font-medium"
            style={
              i === 2
                ? { borderColor: "var(--mock)", color: "var(--mock)", background: "color-mix(in srgb, var(--mock) 10%, transparent)" }
                : { borderColor: "var(--border, #e5e7eb)", color: "inherit" }
            }
          >
            {t}
          </span>
        ))}
      </div>
      {/* pack tiles */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { w: "1 kg", sold: false },
          { w: "2 kg", sold: true },
          { w: "5 kg", sold: false },
        ].map((p, i) => (
          <div
            key={i}
            className="relative rounded-lg border bg-card p-2.5"
            style={{
              borderColor: i === 1 ? "var(--mock)" : "var(--border, #e5e7eb)",
            }}
          >
            <div className={cn(bar, "h-2 w-2/3")} />
            <div className={cn(bar, "mt-1.5 h-2 w-1/2 opacity-60")} />
            {p.sold && (
              <span className="mt-1.5 inline-block rounded bg-foreground/10 px-1 py-0.5 text-[8px] font-semibold text-muted">
                Sold out
              </span>
            )}
          </div>
        ))}
      </div>
      {/* add button */}
      <div
        className="flex h-7 items-center justify-center rounded-md text-[10px] font-semibold text-white"
        style={{ background: "var(--mock)" }}
      >
        ADD
      </div>
    </div>
  );
}

function VoiceMock() {
  // a voice-input bar: privacy toggle + animated-looking waveform + mic
  const bars = [10, 22, 14, 30, 18, 34, 24, 38, 20, 30, 16, 26, 12, 22, 14];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2">
        <div className={cn(bar, "h-2.5 w-20")} />
        <div className="flex items-center gap-1.5">
          <span className="text-[8px] font-semibold text-muted">Privacy</span>
          <div
            className="flex h-3.5 w-6 items-center rounded-full px-0.5"
            style={{ background: "var(--mock)" }}
          >
            <span className="ml-auto h-2.5 w-2.5 rounded-full bg-white" />
          </div>
        </div>
      </div>
      {/* waveform */}
      <div className="flex items-center justify-center gap-[3px] rounded-lg border border-border bg-card py-5">
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-[3px] rounded-full"
            style={{
              height: `${h}px`,
              background: "var(--mock)",
              opacity: 0.4 + (h / 40) * 0.6,
            }}
          />
        ))}
      </div>
      {/* input bar with mic */}
      <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2">
        <div className={cn(bar, "h-2 flex-1")} />
        <span
          className="grid h-7 w-7 place-items-center rounded-full text-white"
          style={{ background: "var(--mock)" }}
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
            <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3z" />
            <path d="M5 11a7 7 0 0 0 14 0h-2a5 5 0 0 1-10 0H5z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
