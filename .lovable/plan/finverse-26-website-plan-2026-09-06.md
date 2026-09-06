# FINVERSE ’26 Website Plan

## Goal
Build the complete responsive FINVERSE ’26 event platform from the supplied PDF, following its dark editorial finance direction and content requirements. Use the PDF’s original hero artwork and official Finance Club logo; remove the logo’s white background cleanly while preserving the mark itself. Exclude the individual article page entirely.

## Public experience
- Create the shared navigation, mobile full-screen menu, footer, and reusable editorial design system using the specified charcoal, cream, lime, purple, and gray palette with Instrument Serif, Inter, and IBM Plex Mono.
- Build the homepage as a scroll-led narrative: approved hero, Market Is Moving chart interaction, configurable metrics, Battleground event sequence, speakers, conversation themes, sponsor tiers, Intelligence Room listing, countdown, and final statement.
- Add separate pages for About, Events, individual event details, Speakers, Schedule, Sponsors, Intelligence Room listing, FAQ, Registration, and Registration Success.
- Keep Intelligence Room articles as listing content only: no article-detail route, no article-title links to detail pages, and no individual article screen.
- Use intentional desktop, tablet, and mobile compositions, including reduced-motion alternatives and touch-friendly interactions.

## Content and administration
- Enable Lovable Cloud for persistent content, registration records, secure administrator access, image storage, and server-side operations.
- Create structured records for events, registrations, speakers, sessions, sponsors, articles, and site settings, including editable homepage metrics and countdown details.
- Seed only the event names, themes, metrics, and copy explicitly supplied in the PDF. Unknown speakers, sponsors, dates, venues, and other facts will use polished empty states rather than invented data.
- Build protected administration screens for dashboard statistics, events, registrations, speakers, schedule, sponsors, Intelligence Room articles, and site settings.
- Support create/edit/delete workflows, registration filtering and CSV export, publishing controls, media uploads, and configurable registration/event status.

## Registration and server behavior
- Build the validated registration form with conditional team fields, event availability and team-size checks, consent, duplicate prevention, and a generated registration ID.
- Show the branded success screen with the submitted participant and event details.
- Add secure server-side data operations and confirmation-email structure; email delivery will be activated when a sending domain/API credential is available.
- Restrict all administration operations using authenticated server-side role checks and row-level access policies.

## Visual assets and motion
- Extract and use the original embedded hero artwork from the PDF without recreating or substituting it.
- Edit the embedded logo only to remove the white background and soften edge artifacts, retaining its exact proportions, colors, and geometry; store both optimized assets through the project asset flow.
- Implement restrained scroll interactions for the hero reveal, market-line drawing, counters, Battleground transitions, speaker presentation, countdown, and final statement. Respect reduced-motion preferences and avoid decorative motion that does not support the narrative.

## Quality and launch readiness
- Add route-specific titles, descriptions, social metadata, semantic structure, accessible labels/focus states, sitemap/robots handling, loading/error/empty states, and calendar links or downloadable calendar files for schedule entries.
- Optimize media loading and keep public and administration code separated for performance.
- Verify the completed experience in the browser at desktop and mobile sizes, including navigation, forms, interactions, empty states, image rendering, and protected screens; resolve build/runtime errors before completion.

## Technical details
- Implement the brief’s intent in the existing TanStack Start + React + TypeScript application rather than replacing its framework.
- Use Tailwind design tokens, existing shared controls, Lucide icons, React Hook Form + Zod, and a browser-safe animation library compatible with the current runtime.
- Create all requested routes except `/insights/$slug`; retain article records and article administration because they power the Intelligence Room listing.
