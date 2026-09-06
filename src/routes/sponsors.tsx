import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EmptyEditorial, PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors — FINVERSE ’26 | Finance Club, NIT Rourkela" },
      { name: "description", content: "FINVERSE ’26 partners and sponsors. Tier details and confirmed partners will be published as partnerships are finalised." },
      { property: "og:title", content: "Sponsors — FINVERSE ’26 | Finance Club, NIT Rourkela" },
      { property: "og:description", content: "FINVERSE ’26 partners and sponsors. Tier details and confirmed partners will be published as partnerships are finalised." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sponsors,
});

const tiers = [
  { title: "TITLE PARTNER", description: "The headline partner powering the FINVERSE ’26 experience." },
  { title: "POWERED BY", description: "A strategic partner enabling core event infrastructure and competitions." },
  { title: "ASSOCIATE PARTNER", description: "Supporting partners helping us reach more students and institutions." },
  { title: "COMMUNITY PARTNER", description: "Allied communities and organisations amplifying the FINVERSE signal." },
];

function Sponsors() {
  return (
    <main>
      <PageIntro
        index="05"
        title="BACKED BY BELIEF."
        copy="Partners who believe in better questions, sharper decisions and the next generation of financial thinkers."
      />

      <section className="site-container py-24">
        <EmptyEditorial title="PARTNERSHIPS IN PROGRESS." copy="Confirmed partners and sponsor tiers will be published here as they are finalised." />
      </section>

      <section className="border-y border-border bg-surface">
        <div className="site-container py-28">
          <span className="eyebrow">SPONSORSHIP TIERS</span>
          <h2 className="mt-8 section-title max-w-3xl">ROOM FOR THE RIGHT PARTNERS.</h2>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {tiers.map((t) => (
              <article key={t.title} className="bg-background p-8 md:p-10">
                <p className="eyebrow">{t.title}</p>
                <p className="mt-6 text-muted-foreground">{t.description}</p>
                <p className="mt-4 font-mono text-xs text-lime">AVAILABLE</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="max-w-xl text-muted-foreground">Interested in partnering with FINVERSE ’26? Partnership enquiries will open once the sponsor deck is ready.</p>
            <Button asChild variant="outline" className="rounded-full border-lime text-lime">
              <Link to="/faq" search={{}}>Get in touch <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
