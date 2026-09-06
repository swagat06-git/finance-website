import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EmptyEditorial, PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Speakers — FINVERSE ’26 | Finance Club, NIT Rourkela" },
      { name: "description", content: "Meet the minds behind the moves at FINVERSE ’26. Confirmed speakers will be announced once participation is finalised." },
      { property: "og:title", content: "Speakers — FINVERSE ’26 | Finance Club, NIT Rourkela" },
      { property: "og:description", content: "Meet the minds behind the moves at FINVERSE ’26. Confirmed speakers will be announced once participation is finalised." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Speakers,
});

function Speakers() {
  return (
    <main>
      <PageIntro
        index="03"
        title="THE MINDS BEHIND THE MOVES."
        copy="Perspectives from people who understand how markets, institutions and decisions are changing."
      />
      <section className="site-container py-24">
        <EmptyEditorial title="THE ROOM IS TAKING SHAPE." copy="Verified speakers will be announced here. We do not publish names until participation is confirmed." />
      </section>
      <section className="border-y border-border bg-surface">
        <div className="site-container flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
          <div>
            <span className="eyebrow">INTERESTED IN SPEAKING?</span>
            <h2 className="mt-4 font-display text-4xl">Share your perspective with FINVERSE.</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">Details for the speaker programme will be shared when applications open.</p>
          </div>
          <Button asChild variant="outline" className="rounded-full border-lime text-lime">
            <Link to="/faq" search={{}}>View FAQ <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
