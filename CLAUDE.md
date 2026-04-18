# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Resume generator that produces multiple HTML and PDF resume variants from a unified JSONC data model. Hosted at https://synle.github.io. Also hosts mini-apps (e.g., `app/cal/`).

## Commands

```bash
make build       # Full build: clean HTML/CSS, compile SCSS, generate all resume HTML + PDFs + list.html
make test        # Run tests: node --test test/*.spec.js
make format      # Format all source files with Prettier
make start       # Local dev server with file watching
```

Always run `make test` and `make format` after making changes.

## Architecture

### Generation Pipeline

Two Node.js scripts run during build (both use shared helpers from `src/build-utils.js`):

- **`generate-index-html.js`** — Generates `list.html` index page from `src/resumes.jsonc` + `src/list.mustache`
- **`generate-resume.js`** — For each resume variant: loads `src/profile.jsonc` (shared base) + variant-specific `src/data/{name}.jsonc`, merges them via spread, renders `src/index.mustache` → `{name}.html`. Also generates `list.html`.

PDF generation is a separate step in `generate-resume.js` using Puppeteer: single-page resumes auto-scale to fit letter size; multi-page resumes (name contains "full" or `allowMultiplePages: true`) render at full scale.

### Data Model (all JSONC — JSON with `//` comments and trailing commas)

- **`src/resumes.jsonc`** — Array of resume variant configs (`name`, `description`, optional `dataFile` override, optional `allowMultiplePages`).
- **`src/profile.jsonc`** — Shared base profile: contact info, summary, education, side projects, skills.
- **`src/data/*.jsonc`** — Variant-specific overrides (work experience, updated skills/summary). Fields spread over the base profile.
- **`src/build-utils.js`** — Shared build utilities: `parseJsonc()` for JSONC parsing, `autoFormat()` (recursively trims strings and adds trailing periods to `items` arrays and `description` fields), `loadResumes()` (auto-discovers `.jsonc` files in `src/data/` and merges with explicit `resumes.jsonc` entries).

### Auto-Discovery

`loadResumes()` automatically picks up any `.jsonc` file in `src/data/` as a resume variant. Explicit entries in `src/resumes.jsonc` override auto-discovered defaults (description, dataFile, etc.).

### Templates & Styling

- **`src/index.mustache`** — Main resume HTML template (Mustache). Uses triple-brace `{{{...}}}` for pre-formatted HTML.
- **`src/list.mustache`** — Index page listing all resume variants with HTML/PDF links.
- **`src/common.scss`** — CSS variables for dark/light themes, typography (SF Pro Display stack).
- **`src/index.scss`** — Resume layout: flexbox grid, responsive breakpoints (<800px), print styles. Compiled to `index.css` via `npx sass`.

### Output

Generated files go to the repo root: `{name}.html`, `{name}.pdf`, `list.html`, `index.css`. These are committed for GitHub Pages hosting.

## Adding a New Resume Variant

1. Create `src/data/{name}.jsonc` with override fields (Experience, Summary, Skills, etc.)
2. Optionally add an entry to `src/resumes.jsonc` for custom description or settings (auto-discovered otherwise)
3. Run `make build`

## Resume Writing Rules (1-Pager, Staff+ ATS-Optimized)

### General Principles
- **Less is more.** Fewer, sharper bullets beat a dense wall of text. Aim for 6–8 bullets max for the primary role.
- **Lead with impact, not tasks.** Every bullet should answer "so what?" — frame outcomes, not activities.
- **No small numbers.** Avoid citing specific user counts or team sizes that could sound underwhelming (e.g., "5,000 engineers", "700 DAU", "6 engineers"). Use relative framing instead ("org-wide", "cross-org", "company-wide").
- **Consistent punctuation.** All bullets end with periods. All descriptions are capitalized.
- **Company names are clean.** Use "LinkedIn" (not "Linkedin"), "Yahoo" (not "Yahoo Inc."), "eBay" (not "eBay Inc."), "Etrigue" (not "Etrigue Inc.").

### Summary Section
- Keep it crisp and executive-level — 3–4 sentences max.
- Structure: years + companies → specialization → track record → education.
- Should read as a positioning statement, not a bio.

### LinkedIn / Primary Role (Staff-Level Signals)
- Lead verbs: "Owned", "Defined", "Drove", "Led", "Delivered", "Built" — signals ownership and strategy.
- Emphasize: technical vision, cross-org influence, platform thinking, multiplier effects.
- Frame AI work as strategy + platformization, not just implementation.
- Consolidate related bullets rather than listing every project separately.

### Earlier Roles (Senior-Level Tone)
- Keep 1–2 bullets per role. These are supporting context, not the main story.
- Use straightforward senior verbs: "Built", "Shipped", "Redesigned", "Prototyped".
- Don't inflate earlier roles with staff-level language.

### Skills Section
- Group by signal: Languages / AI / Frontend / Backend / Infrastructure / Tools.
- Keep it tight — drop older or niche tools (Grunt, Gulp, Vagrant, etc.) unless specifically relevant.
- No redundancy across categories.

### Side Projects
- Order strongest projects first (sqlui-native, display-dj).
- Keep descriptions to one sentence focused on what it does and why it's useful.
- Don't oversell with GitHub stats or release counts unless they're genuinely impressive.

## GitHub Raw File URLs

When fetching raw file content from GitHub repos, always use `raw.githubusercontent.com` (CORS-friendly):

https://raw.githubusercontent.com/{owner}/{repo}/HEAD/{path}

This format works for all use cases (browser fetch with CORS, curl/shell scripts, direct browser links).

Do NOT use:

- `https://github.com/{owner}/{repo}/blob/HEAD/{path}?raw=1` (no CORS headers, breaks browser fetch)
- `https://api.github.com/repos/{owner}/{repo}/contents/{path}` (returns JSON, not raw content)


## Git / PR Merge Policy

- Always use **squash and merge** when merging PRs. Never use merge commits or rebase merges. This keeps the git history clean with one commit per PR.
- You may `git merge origin/main` or `git merge origin/master` locally to sync branches, but PR merges must always be squash merges.
