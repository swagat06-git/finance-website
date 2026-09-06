import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/finverse-logo-transparent.png.asset.json";

const links = [
  ["/about", "About"], ["/events", "Events"], ["/speakers", "Speakers"],
  ["/schedule", "Schedule"], ["/sponsors", "Sponsors"], ["/insights", "Insights"], ["/faq", "FAQ"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname.startsWith("/admin") || pathname === "/auth") return null;
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
    <div className="site-container flex h-20 items-center justify-between">
      <Link to="/" className="flex items-center gap-3" aria-label="FINVERSE home">
        <img src={logo.url} alt="Finance Club" className="h-11 w-11 object-contain" />
        <span className="font-display text-2xl leading-none">FINVERSE <b className="text-lime font-normal">’26</b></span>
      </Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
        {links.map(([to, label]) => <Link key={to} to={to} className="nav-link" activeProps={{ className: "nav-link text-lime" }}>{label}</Link>)}
      </nav>
      <Button asChild className="hidden rounded-full border border-lime bg-transparent px-6 text-lime hover:bg-lime hover:text-primary-foreground lg:inline-flex">
        <Link to="/register" search={{}}>Enter FINVERSE <ArrowUpRight /></Link>
      </Button>
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="fixed inset-0 top-20 z-40 flex min-h-[calc(100svh-5rem)] flex-col bg-background px-5 py-8 lg:hidden" aria-label="Mobile navigation">
      {links.map(([to, label], i) => <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-border py-5 font-display text-4xl"><span className="mr-4 font-mono text-xs text-lime">0{i + 1}</span>{label}</Link>)}
      <Button asChild className="mt-8 h-14 rounded-full"><Link to="/register" search={{}} onClick={() => setOpen(false)}>Enter FINVERSE <ArrowUpRight /></Link></Button>
    </nav>}
  </header>;
}

export function SiteFooter() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname.startsWith("/admin") || pathname === "/auth") return null;
  return <footer className="border-t border-border py-14"><div className="site-container grid gap-8 md:grid-cols-3 md:items-end">
    <div><p className="font-display text-4xl">FINVERSE <span className="text-lime">’26</span></p><p className="mt-2 font-mono text-xs text-muted-foreground">FINANCE CLUB · NIT ROURKELA</p></div>
    <p className="max-w-sm text-sm text-muted-foreground">Where ideas challenge markets, and the next move is yours to make.</p>
    <div className="flex gap-5 md:justify-end"><Link to="/faq" className="nav-link">FAQ</Link><Link to="/admin" className="nav-link">Admin</Link></div>
  </div></footer>;
}

export function PageIntro({ index, title, copy }: { index: string; title: string; copy: string }) {
  return <section className="site-container min-h-[62vh] pt-40 pb-20 flex flex-col justify-end border-b border-border">
    <span className="eyebrow">{index} / FINVERSE ’26</span>
    <h1 className="mt-8 max-w-5xl font-display text-6xl leading-[.9] md:text-8xl lg:text-9xl">{title}</h1>
    <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{copy}</p>
  </section>;
}

export function EmptyEditorial({ title, copy }: { title: string; copy: string }) {
  return <div className="border-y border-border py-16"><p className="eyebrow">AWAITING CONFIRMATION</p><h2 className="mt-5 font-display text-4xl">{title}</h2><p className="mt-3 max-w-xl text-muted-foreground">{copy}</p></div>;
}