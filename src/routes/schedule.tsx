import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarPlus } from "lucide-react";
import { EmptyEditorial, PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { events } from "@/lib/finverse-data";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — FINVERSE ’26 | Finance Club, NIT Rourkela" },
      { name: "description", content: "The full FINVERSE ’26 programme of competitions, conversations and moments. Timings will be confirmed soon." },
      { property: "og:title", content: "Schedule — FINVERSE ’26 | Finance Club, NIT Rourkela" },
      { property: "og:description", content: "The full FINVERSE ’26 programme of competitions, conversations and moments. Timings will be confirmed soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Schedule,
});

function Schedule() {
  return (
    <main>
      <PageIntro index="04" title="THE OPENING BELL." copy="A clear view of every competition, conversation and moment across FINVERSE ’26." />

      <section className="site-container py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="eyebrow">PROGRAMME</span>
            <h2 className="mt-6 font-display text-5xl">DAY 01</h2>
            <p className="mt-4 text-muted-foreground">Main event schedule.</p>
          </div>
          <div>
            {events.map((e) => (
              <div key={e.slug} className="flex flex-col gap-2 border-t border-border py-7 md:flex-row md:items-center md:gap-8">
                <span className="eyebrow w-24">{e.no}</span>
                <div className="flex-1">
                  <h3 className="font-display text-3xl">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.tagline}</p>
                </div>
                <span className="font-mono text-xs text-lime">TIME TBA</span>
              </div>
            ))}
            <div className="border-t border-border py-7">
              <h3 className="font-display text-3xl">Closing & Awards</h3>
              <p className="mt-1 text-sm text-muted-foreground">Recognition and closing remarks.</p>
              <span className="mt-2 block font-mono text-xs text-lime">TIME TBA</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="site-container py-24">
          <EmptyEditorial title="FULL SCHEDULE TO BE ANNOUNCED." copy="Dates and timings are being finalised. A downloadable calendar and detailed programme will appear here after confirmation." />
          <div className="mt-10 flex flex-wrap gap-4">
            <Button disabled variant="outline" className="rounded-full">
              <CalendarPlus className="mr-2 h-4 w-4" /> Add to calendar
            </Button>
            <Button asChild variant="outline" className="rounded-full border-lime text-lime">
              <Link to="/register" search={{}}>Register now <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
