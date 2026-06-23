import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Compass,
  HardHat,
  Hammer,
  Home,
  LineChart,
  MapPin,
  Quote,
  Search,
  Star,
  TrendingUp,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PROJECTS } from "@/lib/projects";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";

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
  { icon: Home, title: "Residential Development", desc: "Boutique homes and gated communities crafted for modern families." },
  { icon: Building2, title: "Commercial Projects", desc: "Grade A office, retail and hospitality assets built to perform." },
  { icon: Compass, title: "Land Development", desc: "RERA-approved plotted townships with full underground infrastructure." },
  { icon: HardHat, title: "Infrastructure Planning", desc: "Corridors, transit nodes and civic infrastructure delivered end to end." },
  { icon: LineChart, title: "Property Investment Guidance", desc: "Curated investment opportunities backed by transparent diligence." },
  { icon: Hammer, title: "Construction Management", desc: "Quality-led execution with proven cost, time and safety discipline." },
];

const STATS = [
  { value: "10+", label: "Years of Industry Experience" },
  { value: "25+", label: "Projects Planned & Delivered" },
  { value: "100%", label: "Transparent Process" },
  { value: "360°", label: "End-to-End Development Support" },
];

const PROCESS = [
  { step: "01", title: "Consultation", desc: "We listen to your vision and audit feasibility from day one." },
  { step: "02", title: "Site Planning", desc: "Detailed surveys, master planning and statutory groundwork." },
  { step: "03", title: "Development Strategy", desc: "Financial modelling, phasing and design language for the asset." },
  { step: "04", title: "Construction & Delivery", desc: "On-time, on-budget execution with rigorous quality assurance." },
];

const TESTIMONIALS = [
  {
    name: "Aarav Mehta",
    role: "Investor, Skyline Residences",
    quote:
      "Kinikh delivered six months ahead of schedule with a finish that exceeded the brochure. They are the rare developer who keeps every promise.",
  },
  {
    name: "Priya Iyer",
    role: "Director, Atlas Capital",
    quote:
      "From land acquisition to handover, the transparency and discipline of the Kinikh team set a new benchmark for our portfolio.",
  },
  {
    name: "Rohan Kulkarni",
    role: "Homeowner, Vista Villas",
    quote:
      "Buying from Kinikh felt less like a transaction and more like a partnership. Our family adores the home they built for us.",
  },
];

function Index() {
  const featured = PROJECTS.slice(0, 6);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-foreground text-background">
        <img
          src={hero}
          alt="Modern skyline at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/55 to-foreground/20" />
        <div className="container-px relative z-10 mx-auto w-full max-w-7xl pb-24 pt-40">
          <div className="max-w-3xl animate-fade-up">
            <span className="eyebrow eyebrow-line text-gold">Kinikh Infrastructure</span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-background sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Building Landmarks <em className="not-italic text-gold">for Tomorrow.</em>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-background/80 md:text-lg">
              Kinikh Infrastructure develops trusted residential, commercial, and infrastructure
              projects designed for long-term value.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-foreground transition-all hover:bg-background hover:text-foreground"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-background/30 px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-background backdrop-blur transition-all hover:border-background hover:bg-background hover:text-foreground"
              >
                Contact Us
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-6 z-10 hidden text-[10px] uppercase tracking-[0.3em] text-background/50 md:block">
          Scroll to explore ↓
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="relative -mt-14 z-20">
        <div className="container-px mx-auto max-w-6xl">
          <div className="rounded-2xl bg-card p-6 shadow-elegant ring-1 ring-border md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <Search className="h-4 w-4 text-gold" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Find your next investment
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {[
                { label: "Location", options: ["Pune", "Mumbai", "Lonavala", "Hyderabad"] },
                { label: "Project Type", options: ["Residential", "Commercial", "Land", "Mixed Use"] },
                { label: "Budget Range", options: ["Under ₹50L", "₹50L – ₹1Cr", "₹1Cr – ₹3Cr", "₹3Cr+"] },
                { label: "Status", options: ["Upcoming", "Ongoing", "Completed"] },
              ].map((f) => (
                <label key={f.label} className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                    {f.label}
                  </span>
                  <select className="rounded-lg border border-border bg-background px-3 py-3 text-sm text-foreground focus:border-gold focus:outline-none">
                    <option value="">Any</option>
                    {f.options.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
              ))}
            </div>
            <div className="mt-5 flex justify-end">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-background transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                Search Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-px mx-auto max-w-7xl py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src={about}
              alt="Kinikh leadership on a project site"
              width={1280}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-card"
            />
            <div className="absolute -bottom-8 -right-4 hidden w-64 rounded-2xl bg-foreground p-6 text-background shadow-elegant md:block">
              <div className="font-serif text-4xl text-gold">10+</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-background/70">
                Years of Trust
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow eyebrow-line">About Kinikh</span>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              A decade of building with discipline, design and trust.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Since 2014, Kinikh Infrastructure has shaped neighbourhoods, business districts and
              civic corridors across Western India. We bring together architects, engineers and
              investors to deliver real estate that holds its value for generations.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Vertically integrated development team",
                "Transparent pricing and milestone reporting",
                "On-time delivery across every completed project",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-foreground"
            >
              Read our story
              <ArrowRight className="h-4 w-4 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
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
                  Learn More <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="container-px mx-auto max-w-7xl py-28">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <span className="eyebrow eyebrow-line">Selected work</span>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Featured projects shaping skylines.
            </h2>
          </div>
          <Link to="/projects" className="hidden items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] md:inline-flex">
            View All <ArrowRight className="h-4 w-4 text-gold" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.id}
              to="/projects/$projectId"
              params={{ projectId: p.id }}
              className="group overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${
                    p.status === "Ongoing"
                      ? "bg-gold text-gold-foreground"
                      : p.status === "Upcoming"
                        ? "bg-background/90 text-foreground"
                        : "bg-foreground/90 text-background"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-gold" /> {p.location}
                </div>
                <h3 className="mt-3 font-serif text-2xl tracking-tight">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {p.shortDescription}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span>
                    {p.type} · {p.area}
                  </span>
                  <ChevronRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative overflow-hidden bg-foreground py-28 text-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <span className="eyebrow eyebrow-line">Why Kinikh</span>
              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
                A trusted infrastructure partner, every step of the way.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-background/70">
                We are obsessed with the details that turn a project into a landmark — the land
                diligence, the structural integrity, the finish quality and the resale value years
                from now.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-background/30 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:bg-gold hover:text-gold-foreground hover:border-gold"
              >
                More about us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-background/10">
              {STATS.map((s) => (
                <div key={s.label} className="bg-foreground p-8 md:p-10">
                  <div className="font-serif text-5xl text-gold md:text-6xl">{s.value}</div>
                  <div className="mt-3 text-xs uppercase tracking-[0.2em] text-background/70">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-px mx-auto max-w-7xl py-28">
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

      {/* TESTIMONIALS */}
      <section className="bg-beige py-28">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow">Voices of trust</span>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              What our partners say.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col rounded-2xl bg-card p-8 ring-1 ring-border"
              >
                <Quote className="h-7 w-7 text-gold" />
                <blockquote className="mt-5 flex-1 font-serif text-xl leading-snug text-foreground">
                  “{t.quote}”
                </blockquote>
                <div className="mt-7 flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <figcaption className="mt-4 border-t border-border pt-4">
                  <div className="font-medium text-foreground">{t.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="eyebrow text-gold">Let's build together</span>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
                Looking for a trusted infrastructure partner?
              </h2>
              <p className="mt-4 max-w-xl text-background/70">
                Whether you are a homeowner, investor, or institution — we would love to understand
                your goals and how Kinikh can deliver them.
              </p>
            </div>
            <div className="flex flex-wrap justify-start gap-3 md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-foreground transition-colors hover:bg-background hover:text-foreground"
              >
                Start a conversation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-background/30 px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] hover:bg-background hover:text-foreground"
              >
                See Projects <TrendingUp className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
