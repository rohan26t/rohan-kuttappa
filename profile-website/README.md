# T.M. Rohan — Professional profile

A responsive navy-and-coral profile built with the Sites Vinext starter, React, TypeScript, and Tailwind CSS.

## Run locally

Requires Node.js 22.13 or newer.

```powershell
npm install
npm run dev
```

Open the Local URL printed by the server. Build with `npm run build`; check types with `npx tsc --noEmit` and lint with `npm run lint`.

## Content and assets

- `lib/profile.ts` contains career history, expertise, education, tools, and contact details.
- `app/page.tsx` contains the profile sections; `app/globals.css` defines the responsive theme.
- `components/navigation.tsx` provides keyboard-accessible mobile navigation.
- `public/rohan-portrait.png` is the supplied portrait. CSS handles cropping and the navy fade without changing the source image.
- `public/TM_Rohan_Resume.pdf` is the downloadable resume copy. Its phone number was removed from the PDF content stream; the original resume was preserved outside this project.

The website displays only email and city. No analytics, contact submission service, or database is configured.

## Hosting

The Sites project ID is recorded in `.openai/hosting.json`. The initial deployment is owner-only. Keep source credentials out of this repository. The parent repository README is unchanged.

## Validation

Production build, TypeScript, lint, HTTP responses, internal anchor destinations, download bytes, PDF text redaction, and PDF visual review are checked during delivery. The connected browser was unavailable, so interactive mobile and browser visual checks could not be completed in this environment.
