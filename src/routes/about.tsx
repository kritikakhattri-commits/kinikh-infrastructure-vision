import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Building2, Eye, Heart, Sparkles, Target } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kinikh Infrastructure" },
      {
        name: "description",
        content:
          "A decade of disciplined real estate development. Learn the Kinikh story, mission, vision and values.",
      },
      { property: "og:title", content: "About Kinikh Infrastructure" },
      {
        property: "og:description",
        content: "A decade of disciplined real estate development.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Award, title: "Excellence", desc: "We measure our work by the standards our families would hold us to." },
  { icon: Heart, title: "Trust", desc: "Transparent pricing, clear contracts, and honest conversations — always." },
  { icon: Sparkles, title: "Craft", desc: "Design and finish quality is non-negotiable on every Kinikh project." },
  { icon: Target, title: "Discipline", desc: "On-time, on-budget delivery is our most important promise." },
];

const TIMELINE = [
  { year: "2014", title: "Kinikh is founded", desc: "A small team of architects and engineers begins planning small-format residential projects in Pune." },
  { year: "2017", title: "First commercial landmark", desc: "Delivery of our first Grade A office building marks a turning point." },
  { year: "2019", title: "Land development arm", desc: "Launch of plotted township practice, scaling to 65+ acre developments." },
  { year: "2022", title: "Infrastructure division", desc: "Kinikh enters elevated corridor and transit-oriented infrastructure work." },
  { year: "2025", title: "25 projects, one promise", desc: "Crossing 25 delivered projects with the same uncompromising standards we started with." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Kinikh"
        title="Trusted builders. Quiet craftsmen. A decade in the making."
        subtitle="We design, develop, and deliver real estate and infrastructure projects that hold their value for generations."
      />

      {/* Story */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <img
            src={about}
            alt="Kinikh on site"
            width={1280}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-card"
          />
          <div>
            <span className="eyebrow eyebrow-line">Our story</span>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
              Founded on the belief that buildings should outlast their builders.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Kinikh Infrastructure was founded in 2014 by a small group of architects, engineers
                and investors who shared a single conviction — that real estate in India deserved a
                more disciplined, more transparent kind of developer.
              </p>
              <p>
                Today we plan, build and deliver residential communities, commercial landmarks,
                plotted townships and civic infrastructure. The team has grown, but the conviction
                hasn't moved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-white py-24">
        <div className="container-px mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {[
            {
              icon: Target,
              tag: "Mission",
              title: "To build assets that compound trust, not just value.",
              desc: "We deliver projects that are honestly priced, beautifully built and rigorously maintained — so the people who live, work and invest in them prosper for decades.",
            },
            {
              icon: Eye,
              tag: "Vision",
              title: "To be India's most trusted infrastructure developer.",
              desc: "We aim to be the partner of choice for families, enterprises and institutions seeking a developer that does what it says and stays long after handover.",
            },
          ].map((b) => (
            <div key={b.tag} className="rounded-2xl bg-card p-10 ring-1 ring-border">
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-foreground text-background">
                <b.icon className="h-5 w-5" />
              </div>
              <span className="eyebrow">{b.tag}</span>
              <h3 className="mt-3 font-serif text-3xl leading-snug">{b.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our values</span>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
            Four principles. Zero exceptions.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl bg-card p-8 ring-1 ring-border">
              <v.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-5 font-serif text-2xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder message */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="rounded-3xl bg-foreground p-10 text-background md:p-16">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_2fr]">
            <div className="flex flex-col items-start">
              <div className="grid h-32 w-32 place-items-center rounded-full bg-gold text-gold-foreground font-serif text-5xl">
                K
              </div>
              <div className="mt-5">
                <div className="font-serif text-2xl">Kunal Nikhare</div>
                <div className="text-xs uppercase tracking-[0.2em] text-background/60">
                  Founder & Managing Director
                </div>
              </div>
            </div>
            <div>
              <span className="eyebrow text-gold">Founder's message</span>
              <p className="mt-5 font-serif text-2xl leading-snug md:text-3xl">
                "We never wanted to be the biggest developer. We wanted to be the one our families
                chose to live with, the one our investors chose to bet on, and the one our
                neighbours were proud to have built next door."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24">
        <div className="container-px mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="eyebrow">A decade in motion</span>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">Our journey.</h2>
          </div>
          <ol className="relative space-y-12 border-l border-border pl-10 md:pl-14">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[2.7rem] grid h-6 w-6 place-items-center rounded-full bg-gold text-gold-foreground md:-left-[3.7rem] md:h-7 md:w-7">
                  <Building2 className="h-3 w-3" />
                </span>
                <div className="font-serif text-3xl text-gold md:text-4xl">{t.year}</div>
                <h3 className="mt-1 font-serif text-2xl">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24 text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
          Want to know if we are the right partner for your project?
        </h2>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-background transition-colors hover:bg-gold hover:text-gold-foreground"
        >
          Schedule a Consultation <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </SiteLayout>
  );
}
