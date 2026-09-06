# FINVERSE '26

### Finance Club, NIT Rourkela

> **Same Money. Different Lenses.**

FINVERSE '26 is the official digital experience for the Finance Club at **National Institute of Technology, Rourkela**.

Built around the idea that financial decisions can be viewed from multiple perspectives, FINVERSE brings together markets, strategy, competition, ideas, and people into one immersive experience.

---

## ✦ About FINVERSE

FINVERSE '26 is a finance-focused platform designed to create an engaging environment around financial markets, strategy, decision-making, and innovation.

The platform provides participants with a centralized space to:

- Explore finance-focused competitions
- Discover upcoming events
- Learn from industry perspectives
- Explore speakers and experts
- Read finance-related insights
- Discover sponsors and partners
- Register for FINVERSE events

The website combines a bold editorial aesthetic with interactive elements to create a distinctive digital identity for FINVERSE '26.

---

## 🚀 Features

### 🏠 Immersive Landing Page

A visually-driven homepage introducing the FINVERSE identity through:

- Full-screen hero experience
- FINVERSE '26 branding
- Finance Club, NIT Rourkela identity
- Primary registration CTA
- Scroll-based navigation
- Responsive layouts

### 📈 Market Signal

An interactive section introducing the philosophy behind FINVERSE.

It features an animated market line that responds to page scrolling.

### 📊 Festival Metrics

A dedicated statistics section showcasing key FINVERSE metrics such as:

- Number of events
- Participants
- Competitions
- Other festival statistics

Metrics are designed to be easily updated through the application's data layer.

### ⚔️ Competition Battleground

An interactive competition explorer allowing users to browse different FINVERSE competitions.

Users can:

- Switch between competitions
- View competition descriptions
- Explore tags and categories
- Navigate to individual event pages

### 🧠 The Minds

A dedicated section for speakers and industry professionals participating in FINVERSE.

The section is structured to support future speaker announcements without requiring major UI changes.

### 💬 The Conversation

An expandable section exploring themes and ideas beyond traditional financial markets.

Each topic can be expanded to reveal additional information.

### 🏦 Sponsor Directory

A dedicated space for FINVERSE partners, institutions, and organizations supporting the event.

### 📚 Intelligence Room

A finance-focused editorial section containing:

- Articles
- Insights
- Market perspectives
- Finance-related notes

### ⏱ Countdown

A dedicated countdown section for the FINVERSE opening.

The interface is designed to accommodate the official event date once finalized.

### 📱 Responsive Design

The website is optimized for:

- Desktop
- Laptop
- Tablet
- Mobile devices

Layouts, typography, navigation, and interactions adapt across screen sizes.

---

## 🛠 Tech Stack

### Frontend

- React
- TypeScript
- Vite

### Styling

- Tailwind CSS
- Custom CSS

### UI Components

- Reusable React components
- Lucide Icons

### Animation

- GSAP
- ScrollTrigger

### Routing

- TanStack Router

### Data

The website uses a structured data layer for:

- Events
- Metrics
- Articles
- Themes
- Sponsors
- Speakers

This keeps content separate from the presentation layer and makes future updates easier.

---

## 📁 Project Structure

```text
finance-website/
│
├── public/
│   ├── favicon.png
│   └── robots.txt
│
├── src/
│   │
│   ├── assets/
│   │   ├── hero.jpeg
│   │   └── FC_LOGO-removebg-preview.png
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── home-page.tsx
│   │   └── site-shell.tsx
│   │
│   ├── hooks/
│   │
│   ├── integrations/
│   │
│   ├── lib/
│   │   └── finverse-data.ts
│   │
│   ├── routes/
│   │
│   ├── router.tsx
│   ├── routeTree.gen.ts
│   ├── styles.css
│   └── ...
│
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md