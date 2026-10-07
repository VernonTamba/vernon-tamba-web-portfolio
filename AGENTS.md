# Agent Guidelines & Project Manual: Vernon Tamba Portfolio

Welcome, AI Agent. This document outlines project architecture, technical specifications, execution constraints, and behavioral rules to maximize your efficiency, accuracy, and performance when working on this codebase.

---

## 1. Project Overview & Context

- **Application**: Personal frontend developer portfolio for Vernon Tamba.
- **Production URL**: `https://vernontamba.com`
- **Primary Goal**: Showcase developer profile, work experience, education, technical skills, projects, and contact avenues with responsive modern UI and interactive 3D/motion animations.
- **Key Routes**:
  - `/` (Home): Hero, About Me, Work Experience, Education, Skills, Projects, Contact Form, Footer, Floating Dock.
  - `/about-me`: Extended narrative, personal background, and hobbies.
  - `/credits`: Acknowledgements, inspirations, and technologies used.
  - `/maintenance`: Maintenance placeholder (controlled conditionally via `proxy.ts` / env).
  - `/api/send-email`: Resend email API route for handling contact form submissions.

---

## 2. Core Tech Stack & Dependencies

| Layer / Concern | Technology & Exact Version | Notes |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.1.4 (App Router) | React Compiler enabled in `next.config.ts` |
| **Runtime / Library** | React 19.2.3, React DOM 19.2.3 | Strict Mode & Server Components |
| **Language** | TypeScript 5 (Strict) | Path aliases configured via `@/*` |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/postcss` ^4) | **No** `tailwind.config.js`. Uses `@theme inline` in `globals.css` |
| **Linter & Formatter** | Biome 2.2.0 (`@biomejs/biome`) | ESLint & Prettier are **not** used |
| **Motion & 3D** | `motion` ^12.34, `@react-three/fiber`, `@react-three/drei`, `three`, `cobe` | Dynamic imports with SSR disabled for 3D/canvas |
| **UI Components** | Radix UI Primitives, Aceternity UI | Configured in `components.json` |
| **Icons** | Lucide React, Tabler Icons (`@tabler/icons-react`), React Icons | Choose consistently based on context |
| **Smooth Scroll** | Lenis (`lenis` ^1.3.17) | Implemented via `components/smooth-scrolling/SmoothScrolling.tsx` |
| **Transitions** | `next-view-transitions` | Handled in `app/layout.tsx` |
| **Observability** | Sentry (`@sentry/nextjs`), Vercel Analytics, Google Analytics | Configured in root layout and instrumentation |
| **Email Service** | Resend (`resend` ^6.9.2) | Handles form delivery in `app/api/send-email/route.ts` |

---

## 3. Environment & Execution Rules (CRITICAL FOR WINDOWS)

> [!IMPORTANT]
> **PowerShell Script Execution Restriction**:
> On this Windows environment, executing bare `npm` or `npx` (which resolves to `npm.ps1`) fails with `PSSecurityException`.
> **ALWAYS use `.cmd` extensions when proposing or running terminal commands:**
> - `npm.cmd` instead of `npm`
> - `npx.cmd` instead of `npx`

### Primary Terminal Commands

```bash
# Development server (runs on http://localhost:3000)
npm.cmd run dev

# Type checking (Always run to verify changes)
npx.cmd tsc --noEmit

# Lint check with Biome
npm.cmd run lint

# Auto-format and organize imports with Biome
npm.cmd run format

# Production build test
npm.cmd run build
```

---

## 4. Architecture & Directory Conventions

```
vernon-tamba-next-portfolio/
├── app/                  # Next.js App Router (pages, layouts, global CSS, API routes)
│   ├── api/send-email/   # Resend email handler
│   ├── globals.css       # Tailwind CSS v4 theme, variables, base animations
│   ├── layout.tsx        # Root layout, analytics, view transitions, fonts
│   ├── page.tsx          # Main landing page assembling sections
│   └── ...
├── components/           # UI Components
│   ├── ui/               # Reusable primitive UI & Aceternity animations
│   ├── layout/           # Shared layout containers (Container.tsx)
│   ├── provider/         # Theme provider (next-themes)
│   ├── smooth-scrolling/ # Lenis wrapper
│   └── [Feature].tsx     # Main section components (Hero, Projects, Skills, etc.)
├── constants/            # SINGLE SOURCE OF TRUTH for all data & content
│   ├── about-me.tsx      # Personal narrative & personality traits
│   ├── education.tsx     # Education timeline data
│   ├── hobbies.tsx       # Hobbies and interests
│   ├── navigations.tsx   # Floating navigation & dock menus
│   ├── projects.tsx      # Portfolio projects, tech stacks, external links
│   ├── skills.tsx        # Skills list categorized by domain
│   ├── social-media.tsx  # Social links & contact channels
│   ├── urls.ts           # Shared external URLs & constants
│   └── work-experience.tsx # Employment history & accomplishments
├── data/                 # Static data assets (e.g. globe.json)
├── lib/                  # Library utilities (cn helper using clsx + twMerge)
├── public/               # Static assets (images, icons, lottie animations)
└── utils/                # Pure helper functions (e.g. getCurrentAge.ts)
```

---

## 5. Coding Standards & Agent Best Practices

### A. Data & Content Separation (Strict Rule)
- **NEVER hardcode text, project lists, education entries, or URLs directly into JSX component bodies.**
- All content and metadata live in `constants/*.tsx` or `constants/*.ts`.
- When updating or adding projects, experiences, or skills, update the corresponding file in `constants/`.
- UI components must remain purely presentational and data-driven.

### B. Tailwind CSS v4 Nuances
- Tailwind v4 is in place. **Do not create or look for `tailwind.config.js` or `tailwind.config.ts`.**
- Custom theme variables, fonts, and colors are defined in `app/globals.css` using `@theme inline { ... }`.
- Class merging must always use the `cn(...)` utility from `@/lib/utils`.

### C. Client vs. Server Components & 3D Performance
- Mark components with `"use client";` whenever they use hooks (`useState`, `useEffect`), interactive event handlers, or motion libraries.
- Heavy 3D or canvas elements (`three`, `cobe`, `@react-three/fiber`) must use dynamic imports with `{ ssr: false }` to prevent SSR hydration mismatches and performance bottlenecks:
  ```tsx
  import dynamic from "next/dynamic";
  const Heavy3DComponent = dynamic(() => import("./Heavy3DComponent"), { ssr: false });
  ```
- Guard any direct browser global accesses (`window`, `document`, `navigator`) with `typeof window !== "undefined"` or inside `useEffect`.

### D. Biome Linter & Formatter Rules
- The repository enforces **Biome** (`biome.json`), not ESLint or Prettier.
- Indentation is **2 spaces**.
- Imports are automatically organized by Biome (`assist.actions.source.organizeImports: "on"`).
- Always verify changes with `npm.cmd run lint` and apply fixes with `npm.cmd run format`.

### E. Environment Variables
- `.env.local` contains private keys:
  - `RESEND_API_KEY`: API key for email delivery.
  - `MAINTENANCE_MODE`: Boolean flag (`"true"` / `"false"`) controlling maintenance routing in `proxy.ts`.
  - `NEXT_PUBLIC_GOOGLE_ANALYTICS`: GA Measurement ID.
- Never commit secret keys or log sensitive credentials to git.

---

## 6. Standard Workflow for Any Task

When executing user requests, follow this disciplined 4-step cycle:

1. **Investigate First**:
   - Inspect existing components and constants before writing new code.
   - Respect existing UI patterns (Aceternity UI, dark theme color palette, Framer Motion/Motion v12 styling).
2. **Make Targeted, Minimal Changes**:
   - Perform surgical edits rather than rewriting large files.
   - Maintain all comments and docstrings unless specifically instructed to remove them.
3. **Verify and Validate**:
   - Run `npx.cmd tsc --noEmit` to confirm zero TypeScript compilation errors.
   - Run `npm.cmd run lint` to ensure code passes Biome lint checks.
   - Run `npm.cmd run build` for any structural or routing changes.
4. **Communicate Clearly**:
   - Provide concise, clickable Markdown links (`file:///...`) to modified files and symbols.
   - Explain the "why" behind significant architectural choices.

---

## 7. Known Issues & Pending Tasks (From Backlog)

- **Email Rate Limiting**: Contact form (`/api/send-email`) currently sends directly via Resend without rate limiting (e.g. Upstash Ratelimit).
- **Link Previews**: Ensure microlink/opengraph image previews handle edge cases and fallbacks gracefully.
- **Biome CSS Warnings**: Certain `::view-transition-*` pseudo-elements in `globals.css` trigger Biome `noUnknownTypeSelector` notices; these are intentional for View Transitions support.

