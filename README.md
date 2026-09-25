# Professor Portfolio

A responsive academic portfolio built with TanStack Start, React, TypeScript, and Tailwind CSS.

## Run locally

```sh
bun install
bun run dev
```

Open `http://localhost:8080`.

## Edit content

All demonstration biography, research, publication, teaching, student, award, service, and news records live in `src/content/portfolio.ts`. Replace them with verified details before publishing.

- Replace `src/assets/professor-portrait.jpg` with the professor's headshot, keeping the filename.
- Replace `public/cv.pdf` with the current CV.
- Update profile and contact links in `src/content/portfolio.ts`.
- Add or edit records in the exported arrays; pages update automatically.

## Pages

- `/` — full portfolio
- `/publications` — filterable publication archive
- `/students` — current students and alumni

## Deploy

Publish directly from Lovable, or connect the repository to a compatible static/serverless hosting provider. Run `bun run build` in external deployment pipelines.
