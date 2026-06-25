import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Compass,
  HardHat,
  Hammer,
  Home,
  LineChart,
  MapPin,
  Star,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { ShowcaseSection } from "@/components/site/ShowcaseSection";
import InfrastructureRewired from "@/components/InfrastructureRewired";
import BottomVideoCTA from "@/components/BottomVideoCTA";
import KinikhServiceTabs from "@/components/KinikhServiceTabs";
import { PROJECTS } from "@/lib/projects";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kinikh Infrastructure — Building Landmarks for Tomorrow" },
      {
        name: "description",
        content:
          "Trusted residential, commercial, and infrastructure projects designed for long-term value by Kinikh Infrastructure.",
      },
      { property: "og:title", content: "Kinikh Infrastructure" },
      {
        property: "og:description",
        content: "Building landmarks for tomorrow.",
      },
      { property: "og:image", content: hero },
    ],
  }),
  component: Index,
});

const SERVICES = [
  {
    icon: Home,
    title: "Residential Development",
    desc: "Boutique homes and gated communities crafted for modern families.",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    desc: "Grade A office, retail and hospitality assets built to perform.",
  },
  {
    icon: Compass,
    title: "Land Development",
    desc: "RERA-approved plotted townships with full underground infrastructure.",
  },
  {
    icon: HardHat,
    title: "Infrastructure Planning",
    desc: "Corridors, transit nodes and civic infrastructure delivered end to end.",
  },
  {
    icon: LineChart,
    title: "Property Investment Guidance",
    desc: "Curated investment opportunities backed by transparent diligence.",
  },
  {
    icon: Hammer,
    title: "Construction Management",
    desc: "Quality-led execution with proven cost, time and safety discipline.",
  },
];

const HERO_STATS = [
  { icon: Building2, value: "25+", label: "Projects Planned" },
  { icon: Star, value: "10+", label: "Years Experience", fill: true },
  { icon: MapPin, value: "15+", label: "Prime Locations" },
];

const PROCESS = [
  {
    step: "01",
    title: "Consultation",
    desc: "We listen to your vision and audit feasibility from day one.",
  },
  {
    step: "02",
    title: "Site Planning",
    desc: "Detailed surveys, master planning and statutory groundwork.",
  },
  {
    step: "03",
    title: "Development Strategy",
    desc: "Financial modelling, phasing and design language for the asset.",
  },
  {
    step: "04",
    title: "Construction & Delivery",
    desc: "On-time, on-budget execution with rigorous quality assurance.",
  },
];

function Index() {
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setShowTagline(true));

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate flex min-h-[700px] items-center overflow-hidden bg-foreground text-background md:min-h-[780px] lg:h-screen lg:min-h-[700px]">
        <video
          src="/15908990_1920_1080_30fps.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full px-6 py-32 md:px-10 md:py-36 lg:px-14 lg:py-44 xl:px-16">
          <div className="max-w-2xl">
            <div className="hero-tagline-wrapper">
              <p
                className={`hero-tagline mb-5 text-[11px] uppercase ${
                  showTagline ? "hero-tagline-visible" : ""
                }`}
              >
                Discover Spaces That Inspire.
              </p>
            </div>
            <h1 className="animate-hero-heading font-serif text-[42px] leading-[1.02] tracking-tight text-white sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px]">
              Building Landmarks <em className="not-italic text-white/80">for Tomorrow.</em>
            </h1>
            <p className="mt-6 max-w-lg animate-hero-content text-[14px] leading-[1.75] text-white/55 md:text-[15px]">
              Kinikh Infrastructure develops trusted residential, commercial, and infrastructure
              projects designed for long-term value.
            </p>
            <div className="mt-8 flex animate-hero-content flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-black transition-all hover:bg-white/90"
              >
                Explore Projects
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/35 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-all hover:border-white/70 hover:bg-white/8"
              >
                Contact Us
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="mt-12 flex animate-hero-content items-stretch divide-x divide-white/15">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="pr-8 first:pl-0 last:pr-0 [&:not(:first-child)]:pl-8"
                >
                  <div className="text-[24px] font-semibold leading-none tracking-tight text-white md:text-[30px]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 z-10 hidden text-[10px] uppercase tracking-[0.3em] text-white/30 md:block">
          Scroll to explore ↓
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-white">
        <div className="container-px mx-auto max-w-[1700px] py-28 md:py-40">
          <div className="grid gap-12 lg:grid-cols-[0.42fr_1fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold !text-[#0B0705]">Why Kinikh</p>
            </div>
            <div>
              <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] !text-[#0B0705] md:text-6xl lg:text-7xl">
                <span className="!text-[#0B0705]">
                  Your life’s changing. Don’t just find a place — find what’s next.
                </span>{" "}
                <span className="!text-[#B8B8B8]">
                  We help you move forward with clarity, confidence, and the right guidance by your
                  side.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <ShowcaseSection />

      {/* BEYOND REAL ESTATE */}
      <section className="bg-white px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="mx-auto max-w-[1700px]">
          <div className="mx-auto text-center">
            <h2 className="text-[32px] font-bold leading-none tracking-[-0.045em] text-[#0B0705] sm:text-[29px] lg:text-[59px]">
              <span>This isn’t just </span>
              <span className="text-[#B7A895]">about real estate.</span>
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-[880px] gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[24px]">
            {PROJECTS.slice(0, 4).map((project) => (
              <div
                key={project.id}
                className="relative h-[260px] overflow-hidden [clip-path:polygon(0_0,70%_0,100%_50%,70%_100%,0_100%,34%_50%)] sm:h-[320px] lg:h-[305px]"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover [filter:sepia(0.25)_saturate(0.85)_brightness(0.9)_contrast(1.08)_hue-rotate(-8deg)]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[#8A4F18]/25 mix-blend-multiply" />
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-[1000px] text-center">
            <p className="text-[22px] font-bold leading-[1.05] tracking-[-0.035em] text-[#0B0705] sm:text-[18px] lg:text-[32px]">
              It’s about identity. Progress. Getting unstuck.
            </p>
            <p className="mt-2 text-[22px] font-bold leading-[1.05] tracking-[-0.035em] text-[#0B0705] sm:text-[18px] lg:text-[32px]">
              <span>You’re not just looking for a place. </span>
              <span className="text-[#B7A895]">
                You’re looking for alignment. That’s what we help you find.
              </span>
            </p>
          </div>
        </div>
      </section>

      <InfrastructureRewired />

      {/* SERVICES — temporarily hidden
      <section className="bg-beige py-28">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <span className="eyebrow eyebrow-line">What we do</span>
              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
                Comprehensive development, end to end.
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] md:inline-flex"
            >
              All Services <ArrowRight className="h-4 w-4 text-gold" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl bg-card p-8 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-foreground text-background transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground">
                  Learn More{" "}
                  <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* PROCESS */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our process</span>
          <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            How we deliver, every time.
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <div key={p.step} className="relative">
              <div className="font-serif text-6xl text-gold/30">{p.step}</div>
              <h3 className="mt-3 font-serif text-2xl tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              {i < PROCESS.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-1/2 bg-border lg:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      <KinikhServiceTabs />
      <BottomVideoCTA />
    </SiteLayout>
  );
}
