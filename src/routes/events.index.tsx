import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/site-shell";
import { events } from "@/lib/finverse-data";

export const Route = createFileRoute("/events/")({ component: Events });
function Events() { return <main><PageIntro index="02" title="CHOOSE YOUR BATTLEGROUND." copy="Four formats. Four ways to prove how you think when the market starts moving." /><section className="site-container py-24">{events.map(e => <Link key={e.slug} to="/events/$slug" params={{ slug: e.slug }} className="group grid gap-4 border-t border-border py-9 md:grid-cols-[6rem_1fr_1fr_auto] md:items-center"><span className="eyebrow">{e.no}</span><h2 className="font-display text-4xl md:text-6xl group-hover:text-lime">{e.title}</h2><p className="text-muted-foreground">{e.tagline}</p><ArrowUpRight className="text-lime" /></Link>)}</section></main>; }