import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — FINVERSE ’26 | Finance Club, NIT Rourkela" },
      { name: "description", content: "Answers to common questions about FINVERSE ’26 registration, eligibility, events and venue." },
      { property: "og:title", content: "FAQ — FINVERSE ’26 | Finance Club, NIT Rourkela" },
      { property: "og:description", content: "Answers to common questions about FINVERSE ’26 registration, eligibility, events and venue." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FAQ,
});

const faqs = [
  ["Who can participate?", "Eligibility details will be published for each event once registrations open."],
  ["Can I enter more than one event?", "Final participation rules will be stated during registration."],
  ["Where will FINVERSE ’26 take place?", "The official venue is yet to be announced."],
  ["When does registration open?", "Registration dates will appear across the website after confirmation."],
  ["Where can I get help?", "Official contact information will be published here when available."],
];

function FAQ() {
  return (
    <main>
      <PageIntro index="07" title="QUESTIONS, ANSWERED." copy="Everything you need before entering FINVERSE ’26." />
      <section className="site-container max-w-4xl py-24">
        {faqs.map(([q, a], i) => (
          <details key={q} className="group border-t border-border py-7 last:border-b">
            <summary className="flex cursor-pointer list-none gap-5 font-display text-3xl">
              <span className="font-mono text-xs text-lime">0{i + 1}</span>
              <span className="flex-1">{q}</span>
              <span className="group-open:rotate-45">+</span>
            </summary>
            <p className="ml-10 mt-5 max-w-2xl text-muted-foreground">{a}</p>
          </details>
        ))}
      </section>
      <section className="border-y border-border bg-surface">
        <div className="site-container flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
          <div>
            <span className="eyebrow">STILL CURIOUS?</span>
            <h2 className="mt-4 font-display text-4xl">Join the market.</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">Register your interest and be the first to know when details are confirmed.</p>
          </div>
          <Button asChild className="rounded-full">
            <Link to="/register" search={{}}>Register now <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
