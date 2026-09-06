import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "FINVERSE ’26 | Finance Club, NIT Rourkela" },
    { name: "description", content: "FINVERSE ’26 is the flagship finance event of Finance Club, NIT Rourkela." },
    { property: "og:title", content: "FINVERSE ’26 | Finance Club, NIT Rourkela" },
    { property: "og:description", content: "Same money. Different lenses. Enter the flagship finance event at NIT Rourkela." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});
