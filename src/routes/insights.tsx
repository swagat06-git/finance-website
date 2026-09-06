import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site-shell";
import { articles } from "@/lib/finverse-data";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Intelligence Room — FINVERSE ’26 | Finance Club, NIT Rourkela" },
      { name: "description", content: "Briefs, provocations and ideas for the financially curious. Read the signal before the noise from FINVERSE ’26." },
      { property: "og:title", content: "Intelligence Room — FINVERSE ’26 | Finance Club, NIT Rourkela" },
      { property: "og:description", content: "Briefs, provocations and ideas for the financially curious. Read the signal before the noise from FINVERSE ’26." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Insights,
});

function Insights() {
  return (
    <main>
      <PageIntro
        index="06"
        title="THE INTELLIGENCE ROOM."
        copy="Briefs, provocations and ideas for the financially curious. Read the signal before the noise."
      />
      <section className="site-container grid gap-0 py-24 md:grid-cols-3">
        {articles.map((a, i) => (
          <article key={a.title} className="border-t border-border py-10 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
            <p className="eyebrow">0{i + 1} / {a.category}</p>
            <h2 className="mt-12 font-display text-5xl">{a.title}</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">{a.excerpt}</p>
            <p className="mt-8 font-mono text-[10px] tracking-widest text-muted-foreground">FIELD NOTE · COMING SOON</p>
          </article>
        ))}
      </section>
      <section className="border-y border-border">
        <div className="site-container flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <p className="text-muted-foreground">Intelligence Room notes are published as part of the FINVERSE ’26 programme.</p>
          <Link to="/" className="nav-link text-lime inline-flex items-center gap-2">
            Back home <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
