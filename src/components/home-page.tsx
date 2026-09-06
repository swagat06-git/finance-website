import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

import hero from "@/assets/hero.jpeg";
import logo from "@/assets/FC_LOGO-removebg-preview.png";

import {
  articles,
  events,
  metrics,
  themes,
} from "@/lib/finverse-data";

export function HomePage() {
  const market = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (
      !market.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let tween: any = null;
    let scrollTrigger: any = null;

    const loadAnimation = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      if (!market.current) return;

      scrollTrigger = ScrollTrigger.create({
        trigger: ".market-section",
        start: "top 75%",
        end: "bottom 55%",
        scrub: 1,
        animation: gsap.fromTo(
          market.current,
          {
            strokeDashoffset: 1600,
          },
          {
            strokeDashoffset: 0,
            ease: "none",
          }
        ),
      });

      tween = scrollTrigger.animation;
    };

    void loadAnimation();

    return () => {
      scrollTrigger?.kill();
      tween?.kill();
    };
  }, []);

  return (
    <main className="overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[100svh] overflow-hidden border-b border-border bg-background pt-20">

        {/* Background image */}
        <img
          src={hero}
          alt="FINVERSE 26 — a figure viewing finance through different lenses"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-background/10 to-background" />

        {/* Additional bottom gradient for readability */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-background via-background/50 to-transparent" />

        {/* Subtle image tint */}
        <div className="absolute inset-0 z-10 bg-black/10" />

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="site-container relative z-20 flex min-h-[calc(100svh-5rem)] flex-col justify-end pb-8">

          {/* Finance Club logo */}
          <div className="absolute left-6 top-8 md:left-10 md:top-10">
            <img
              src={logo}
              alt="Finance Club NIT Rourkela"
              className="h-14 w-auto object-contain md:h-20"
            />
          </div>

          {/* Bottom information */}
          <div className="flex items-end justify-between">

            <span className="hidden font-mono text-[10px] uppercase tracking-[.24em] text-muted-foreground md:block">
              NIT Rourkela · Finance Club
            </span>

            <a
              href="#market"
              className="mx-auto flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[.24em] text-cream transition-colors hover:text-lime"
            >
              Scroll to explore

              <ArrowDown className="h-5 w-5 text-lime" />
            </a>

            <span className="hidden font-mono text-[10px] text-muted-foreground md:block">
              EST. 2026
            </span>

          </div>
        </div>

        {/* =====================================================
            HERO CTA
        ===================================================== */}

        <Button
          asChild
          size="lg"
          className="
            absolute
            bottom-[18%]
            left-6
            z-30
            h-14
            rounded-full
            bg-lime
            px-8
            text-primary-foreground
            shadow-lg
            transition-all
            hover:scale-105
            hover:bg-lime/90
            md:bottom-[16%]
            md:left-[5%]
            md:h-16
            md:px-10
          "
        >
          <Link to="/register" search={{}}>
            Enter FINVERSE
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>

      </section>


      {/* =========================================================
          MARKET SIGNAL
      ========================================================= */}

      <section
        id="market"
        className="market-section site-container flex min-h-[110vh] flex-col justify-center py-24"
      >
        <span className="eyebrow">
          01 / MARKET SIGNAL
        </span>

        <h2 className="section-title max-w-5xl">
          THE MARKET
          <br />
          IS{" "}
          <em className="text-lime not-italic">
            MOVING.
          </em>
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-[1fr_2fr] md:items-end">

          <p className="max-w-md text-lg text-muted-foreground">
            Every decision creates a consequence. Every perspective creates an
            opportunity. FINVERSE brings markets, strategy, competition and
            ideas into one shared experience.
          </p>

          <svg
            viewBox="0 0 900 260"
            className="w-full"
            aria-label="Rising market line"
            role="img"
          >
            <path
              ref={market}
              d="M0 220 C90 210 105 150 180 175 S280 230 340 120 S440 70 500 135 S610 180 675 72 S790 130 900 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-lime [stroke-dasharray:1600]"
            />
          </svg>

        </div>
      </section>


      {/* =========================================================
          METRICS
      ========================================================= */}

      <section className="border-y border-border bg-surface">
        <div className="site-container grid grid-cols-2 md:grid-cols-4">

          {metrics.map((item, i) => (
            <div
              key={item.label}
              className="
                border-border
                px-3
                py-12
                md:border-r
                md:px-8
                md:py-20
                first:pl-0
                last:border-0
              "
            >
              <span className="font-display text-5xl text-lime md:text-7xl">
                {item.value}
              </span>

              <p className="mt-3 font-mono text-[10px] tracking-[.18em] text-muted-foreground">
                0{i + 1} / {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* =========================================================
          COMPETITIONS
      ========================================================= */}

      <Battleground />


      {/* =========================================================
          MINDS / SPEAKERS
      ========================================================= */}

      <section className="site-container py-28 md:py-40">

        <span className="eyebrow">
          04 / THE MINDS
        </span>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-end">

          <h2 className="section-title">
            THE MINDS
            <br />
            BEHIND THE
            <br />
            <em className="text-purple not-italic">
              MOVES.
            </em>
          </h2>

          <div className="border-l border-lime pl-7">

            <p className="text-xl">
              Meet the people bringing experience, perspective and conviction
              to the room.
            </p>

            <p className="mt-5 text-sm text-muted-foreground">
              Speaker announcements are being prepared. Only confirmed voices
              will appear here.
            </p>

            <Link
              to="/speakers"
              className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-lime transition-opacity hover:opacity-70"
            >
              VIEW THE MINDS
              <ArrowRight />
            </Link>

          </div>

        </div>
      </section>


      {/* =========================================================
          CONVERSATION
      ========================================================= */}

      <section className="border-y border-border">

        <div className="site-container py-28">

          <span className="eyebrow">
            05 / THE CONVERSATION
          </span>

          <h2 className="section-title mt-8">
            MORE THAN MARKETS.
          </h2>

          <div className="mt-14">

            {themes.map((theme) => (
              <details
                key={theme.no}
                className="group border-t border-border py-7 last:border-b"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5">

                  <span className="font-mono text-xs text-lime">
                    {theme.no}
                  </span>

                  <span className="flex-1 font-display text-3xl md:text-5xl">
                    {theme.title}
                  </span>

                  <span className="text-2xl transition-transform group-open:rotate-45">
                    +
                  </span>

                </summary>

                <p className="ml-auto mt-5 max-w-2xl text-muted-foreground">
                  {theme.body}
                </p>

              </details>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          SPONSORS
      ========================================================= */}

      <section className="site-container py-28">

        <span className="eyebrow">
          06 / BACKED BY THE MARKET
        </span>

        <h2 className="section-title mt-8">
          BUILT WITH
          <br />
          BELIEF.
        </h2>

        <p className="mt-8 max-w-xl text-muted-foreground">
          Institutions and organisations shaping tomorrow will appear here as
          partnerships are confirmed.
        </p>

        <Link
          to="/sponsors"
          className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-lime transition-opacity hover:opacity-70"
        >
          SPONSOR DIRECTORY
          <ArrowRight />
        </Link>

      </section>


      {/* =========================================================
          INTELLIGENCE ROOM
      ========================================================= */}

      <section className="border-y border-border bg-surface">

        <div className="site-container py-28">

          <span className="eyebrow">
            07 / INTELLIGENCE ROOM
          </span>

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

            <h2 className="section-title">
              IDEAS BEFORE
              <br />
              THE OPEN.
            </h2>

            <Link
              to="/insights"
              className="nav-link text-lime"
            >
              VIEW ALL NOTES →
            </Link>

          </div>

          <div className="mt-16 grid md:grid-cols-3">

            {articles.map((article, i) => (
              <article
                key={article.title}
                className="
                  border-t
                  border-border
                  py-8
                  md:border-r
                  md:px-8
                  md:first:pl-0
                  md:last:border-r-0
                "
              >

                <p className="eyebrow">
                  0{i + 1} / {article.category}
                </p>

                <h3 className="mt-10 font-display text-4xl">
                  {article.title}
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          COUNTDOWN
      ========================================================= */}

      <Countdown />


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="site-container flex min-h-[90vh] flex-col items-center justify-center py-28 text-center">

        <p className="font-display text-5xl text-muted-foreground md:text-7xl">
          Markets move.
        </p>

        <p className="font-display text-6xl md:text-8xl">
          MINDS MOVE THEM.
        </p>

        <h2 className="mt-8 font-display text-6xl text-lime md:text-9xl">
          WHAT WILL YOU MOVE?
        </h2>

        <Button
          asChild
          size="lg"
          className="mt-12 h-14 rounded-full px-8 transition-transform hover:scale-105"
        >
          <Link to="/register" search={{}}>
            Enter FINVERSE
            <ArrowRight />
          </Link>
        </Button>

      </section>

    </main>
  );
}


/* =============================================================
   BATTLEGROUND
============================================================= */

function Battleground() {
  const [active, setActive] = useState(0);

  return (
    <section className="site-container py-28 md:py-40">

      <span className="eyebrow">
        03 / COMPETITIONS
      </span>

      <h2 className="section-title mt-8">
        THE
        <br />
        <em className="text-lime not-italic">
          BATTLEGROUND.
        </em>
      </h2>

      <p className="mt-6 text-muted-foreground">
        Four ways to test how you think about money.
      </p>

      <div className="mt-16 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">

        {/* Event list */}
        <div className="space-y-1">

          {events.map((event, i) => (
            <button
              key={event.slug}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`
                group
                flex
                w-full
                items-center
                gap-5
                border-t
                border-border
                py-6
                text-left
                transition-all
                ${
                  active === i
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-70"
                }
              `}
            >

              <span className="font-mono text-xs text-lime">
                {event.no}
              </span>

              <span className="font-display text-3xl md:text-5xl">
                {event.title}
              </span>

            </button>
          ))}

        </div>


        {/* Active event */}
        <div className="sticky top-28 border-l border-lime p-8 md:p-12">

          <span className="font-display text-8xl text-purple/40">
            {events[active]?.no}
          </span>

          <h3 className="mt-12 font-display text-5xl">
            {events[active]?.title}
          </h3>

          <p className="mt-3 text-xl text-cream">
            {events[active]?.tagline}
          </p>

          <p className="mt-10 font-mono text-xs tracking-[.14em] text-muted-foreground">
            {events[active]?.tags}
          </p>

          <Button
            asChild
            variant="outline"
            className="mt-10 rounded-full border-lime text-lime hover:bg-lime hover:text-primary-foreground"
          >
            <Link
              to="/events/$slug"
              params={{
                slug: events[active]?.slug ?? "market-mayhem",
              }}
            >
              Explore event
              <ArrowRight />
            </Link>
          </Button>

        </div>

      </div>

    </section>
  );
}


/* =============================================================
   COUNTDOWN
============================================================= */

function Countdown() {
  return (
    <section className="site-container py-28 md:py-40">

      <div className="border-y border-border py-20 text-center">

        <span className="eyebrow">
          08 / COUNTDOWN
        </span>

        <h2 className="mt-8 font-display text-6xl md:text-8xl">
          THE MARKET
          <br />
          OPENS{" "}
          <span className="text-lime">
            SOON.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-lg text-muted-foreground">
          The official date and countdown will appear as soon as the opening
          bell is confirmed.
        </p>

      </div>

    </section>
  );
}