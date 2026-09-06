import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { events } from "@/lib/finverse-data";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = events.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return event;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — FINVERSE ’26 | Finance Club, NIT Rourkela` },
          { name: "description", content: `${loaderData.tagline} Register your interest for ${loaderData.title} at FINVERSE ’26.` },
          { property: "og:title", content: `${loaderData.title} — FINVERSE ’26` },
          { property: "og:description", content: loaderData.tagline },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [
          { title: "Event — FINVERSE ’26" },
          { name: "robots", content: "noindex" },
        ],
  }),
  component: EventDetail,
});

function EventDetail() {
  const event = Route.useLoaderData();
  return (
    <main className="site-container pt-36 pb-28">
      <Link to="/events" className="nav-link inline-flex items-center gap-2">
        <ArrowLeft className="h-4 w-4" /> All events
      </Link>
      <section className="flex min-h-[60vh] flex-col justify-end border-b border-border pb-16">
        <span className="eyebrow">EVENT {event.no} / FINVERSE ’26</span>
        <h1 className="mt-8 font-display text-6xl md:text-9xl">{event.title}</h1>
        <p className="mt-6 text-2xl text-lime">{event.tagline}</p>
      </section>
      <section className="grid gap-12 py-16 md:grid-cols-2">
        <div>
          <p className="eyebrow">THE CHALLENGE</p>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            A competition designed to test {event.tags.toLowerCase().replaceAll(" • ", ", ")}.
          </p>
        </div>
        <div className="border-l border-border pl-8">
          <p className="eyebrow">DETAILS</p>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="text-muted-foreground">Date & time</dt>
              <dd>To be announced</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Venue</dt>
              <dd>To be announced</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Rules & eligibility</dt>
              <dd>Updates will appear after confirmation.</dd>
            </div>
          </dl>
          <Button asChild className="mt-8 rounded-full">
            <Link to="/register" search={{ event: event.slug }}>Register interest <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
