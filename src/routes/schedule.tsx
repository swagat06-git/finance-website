import { createFileRoute } from "@tanstack/react-router";
import { EmptyEditorial, PageIntro } from "@/components/site-shell";
export const Route = createFileRoute("/schedule")({ component: Schedule });
function Schedule() { return <main><PageIntro index="04" title="THE OPENING BELL." copy="A clear view of every competition, conversation and moment across FINVERSE ’26." /><section className="site-container py-24"><EmptyEditorial title="SCHEDULE TO BE ANNOUNCED." copy="Dates and timings are being finalised. The full programme will appear here after confirmation." /></section></main>; }