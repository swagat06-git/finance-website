import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Users, Lightbulb, Trophy } from "lucide-react";
import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — FINVERSE ’26 | Finance Club, NIT Rourkela" },
      { name: "description", content: "FINVERSE ’26 is the flagship finance event of Finance Club, NIT Rourkela — built around competition, conversation and sharper financial thinking." },
      { property: "og:title", content: "About — FINVERSE ’26 | Finance Club, NIT Rourkela" },
      { property: "og:description", content: "FINVERSE ’26 is the flagship finance event of Finance Club, NIT Rourkela — built around competition, conversation and sharper financial thinking." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const pillars = [
  { icon: Target, title: "Compete", body: "Four distinct formats test trading instinct, research conviction, negotiation skill and financial knowledge." },
  { icon: Lightbulb, title: "Learn", body: "Conversations and field notes explore the ideas shaping markets, risk and capital." },
  { icon: Users, title: "Connect", body: "A shared space for ambitious students, practitioners and institutions to exchange perspective." },
  { icon: Trophy, title: "Prove", body: "Real challenges, real decisions — and recognition for those who move with clarity." },
];

function About() {
  return (
    <main>
      <PageIntro
        index="01"
        title="FINANCE. THROUGH A DIFFERENT LENS."
        copy="FINVERSE is the flagship finance event of Finance Club, NIT Rourkela — a space for competition, conversation and sharper financial thinking."
      />

      <section className="site-container grid gap-12 py-28 md:grid-cols-2 md:items-start">
        <h2 className="section-title">WHY<br />FINVERSE?</h2>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>Finance is never only about numbers. It is about the choices behind them: how we interpret risk, discover value and act when the answer is not obvious.</p>
          <p>FINVERSE is built around those choices. It brings together ambitious students and distinct formats designed to test research, speed, strategy and judgement.</p>
          <Button asChild className="rounded-full">
            <Link to="/events">Explore the battleground <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="site-container py-28">
          <span className="eyebrow">THE EXPERIENCE</span>
          <h2 className="mt-8 section-title max-w-3xl">FOUR PILLARS. ONE EVENT.</h2>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <article key={p.title} className="bg-background p-8">
                <p.icon className="h-8 w-8 text-lime" />
                <h3 className="mt-8 font-display text-3xl">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-28 text-center">
        <span className="eyebrow">READY TO ENTER?</span>
        <h2 className="mt-8 section-title">YOUR MOVE STARTS HERE.</h2>
        <Button asChild size="lg" className="mt-10 h-14 rounded-full px-8">
          <Link to="/register" search={{}}>Register for FINVERSE <ArrowRight /></Link>
        </Button>
      </section>
    </main>
  );
}
