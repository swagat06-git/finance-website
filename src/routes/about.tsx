import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({ component: About });
function About() { return <main><PageIntro index="01" title="FINANCE. THROUGH A DIFFERENT LENS." copy="FINVERSE is the flagship finance event of Finance Club, NIT Rourkela — a space for competition, conversation and sharper financial thinking." /><section className="site-container grid gap-12 py-28 md:grid-cols-2"><h2 className="section-title">WHY<br />FINVERSE?</h2><div className="space-y-6 text-lg leading-relaxed text-muted-foreground"><p>Finance is never only about numbers. It is about the choices behind them: how we interpret risk, discover value and act when the answer is not obvious.</p><p>FINVERSE is built around those choices. It brings together ambitious students and distinct formats designed to test research, speed, strategy and judgement.</p><Button asChild className="rounded-full"><Link to="/events">Explore the battleground <ArrowRight /></Link></Button></div></section></main>; }