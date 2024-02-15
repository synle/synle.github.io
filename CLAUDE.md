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
