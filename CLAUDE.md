@AGENTS.md

# Portfolio — project brief

Personal portfolio for **Swapnel Singh**, a Product Manager. Premium, minimal,
Linear/Stripe-inspired. Built with **Next.js 16 (App Router, Turbopack),
TypeScript, Tailwind CSS v4, Framer Motion, next-themes, lucide-react**.

## Run / build
Node was installed via Homebrew and isn't on the default PATH — prefix commands:
```bash
export PATH="/opt/homebrew/bin:$PATH"
npm run dev     # http://localhost:3000
npm run build   # run before declaring done; must pass
```

## Content is the single source of truth
**`lib/data.ts`** holds almost all copy — `site`, `about`, `journey`
(experience timeline), `projects`, `caseStudies`, `productThinking`. Edit copy
there and it propagates to every section and detail page. Prefer editing data
over hardcoding text in components.

## Structure
- `app/page.tsx` — homepage sections in order: Hero, About, Experience,
  Projects, ProductThinking, Contact, Footer. (A "Journey" section was removed.)
- `app/projects/[slug]/page.tsx` — generic project detail (uses `ProjectMock`).
- `app/case-studies/[slug]/page.tsx` — **special-cases four slugs to bespoke
  rich components**; everything else uses the generic template.
- `components/sections/*`, `components/case-studies/*` (bespoke pages),
  `components/ui/*` (primitives).

## The 4 bespoke case studies
`instamart-teardown`, `sunday-basket`, `whatsapp-search`, `voice-adoption` — each
a full component special-cased in the case-studies route, sharing helper patterns
(Section, Callout, Table, StatGrid) and a per-page accent. Voice uses
code-designed phone mockups + a system diagram (`public/voice/`).

### To add a new bespoke case study
1. Add a `caseStudies` entry in `data.ts` (needed for `generateStaticParams` +
   the not-found guard).
2. Add a `projects` entry with `caseStudySlug` pointing to it; pick a
   `ProjectMock` variant.
3. Build `components/case-studies/<name>.tsx`; add `if (slug === …) return <…/>`
   in the route.
4. Add the mock variant to `components/ui/project-mock.tsx` + the `mockBySlug`
   maps in `components/sections/projects.tsx` and `app/projects/[slug]/page.tsx`.

## Projects section
Two groups: **"Problems I built solutions for"** (built products) and
**"Teardowns & 0→1 case studies"** (PM-thinking showcases). Membership/order set
by `builtSlugs` / `caseStudySlugs` in `components/sections/projects.tsx`. Each
card shows Problem / Solution / Impact / "What I learned".

## Resume
Editable source: `resume/resume.html` → rendered to `public/resume.pdf` (the
"Download Resume" button) via headless Chrome (keep it one page, selectable text):
```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --no-pdf-header-footer --print-to-pdf=public/resume.pdf \
  "file:///Users/swapnelsingh/portfolio/resume/resume.html"
```

## Assets
`public/profile.jpg` (hero photo, circular, 120px), `public/og.svg`,
`public/favicon.svg`.

## Conventions & preferences
- **Do not redesign.** Visual design, layout, spacing, typography, animations
  are locked. Most requests are content/copy only.
- Positioning theme to reinforce: *owns enterprise-scale products at ICICI Bank
  AND independently builds AI products/experiments.*
- Writing: confident, product-first, high-signal. Avoid resume-speak, buzzwords,
  filler, and repeating "AI-powered" / "end-to-end".
- Reveal animations use `whileInView` (once) — screenshots right after navigation
  race the animation; verify via DOM or re-screenshot.

## Pending before going live
- Confirm the **GitHub URL** (`site.links.github`, currently a guess).
- Set **`site.url`** to the real domain (used for OG/sitemap).
- Refresh **`public/og.svg`** — still shows old removed stats.
- **AI Job Search** case study still uses the generic template (could go bespoke).
- **Deploy** to Vercel (push to GitHub → import). Not deployed yet.

## Git
Own repo (separate from the unrelated `~/PM-Job-Assistant` project), on `main`,
no remote. Commit only when asked.
