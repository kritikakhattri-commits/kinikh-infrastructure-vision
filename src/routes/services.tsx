import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Compass,
  Hammer,
  HardHat,
  Home,
  LineChart,
} from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Kinikh Infrastructure" },
      {
        name: "description",
        content:
          "Residential development, commercial projects, land development, infrastructure planning, investment guidance and construction management.",
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Home,
    title: "Residential Development",
    desc: "From boutique apartments to gated villa communities, we design family-first homes that perform as long-term assets.",
    points: ["Master planning & design", "RERA-first compliance", "Owner-friendly handover process"],
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    desc: "Grade A office buildings, retail, and hospitality assets built for tenants who notice every detail.",
    points: ["LEED-certified design", "Tenant fit-out support", "Asset management ready"],
  },
  {
    icon: Compass,
    title: "Land Development",
    desc: "Plotted townships and land parcels with full infrastructure, utilities, and legal due diligence completed up front.",
    points: ["Title and approvals", "Underground utilities", "Community amenities"],
  },
  {
    icon: HardHat,
    title: "Infrastructure Planning",
    desc: "Civic corridors, transit nodes and public-realm infrastructure delivered in partnership with state authorities.",
    points: ["Feasibility & DPR", "Public-private partnerships", "Long-term O&M"],
  },
  {
    icon: LineChart,
    title: "Property Investment Guidance",
    desc: "Curated opportunities for individual and institutional investors, backed by transparent diligence and projections.",
    points: ["Yield modelling", "Exit planning", "Portfolio mix advice"],
  },
  {
    icon: Hammer,
    title: "Construction Management",
    desc: "Independent construction oversight, cost control and quality assurance for owners and partner developers.",
    points: ["Cost & schedule control", "Quality assurance audits", "Vendor management"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="What we do"
        title="A vertically integrated development practice."
        subtitle="Six disciplines, one team — engineered to plan, finance, build and operate landmark projects across India."
      />

      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-2xl bg-card p-10 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mb-7 grid h-14 w-14 place-items-center rounded-xl bg-foreground text-background transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-3xl leading-snug">{s.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 space-y-2 text-sm text-foreground">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {pt}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em]"
              >
                Discuss this service
                <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="rounded-3xl bg-foreground p-10 text-background md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
            <div>
              <span className="eyebrow text-gold">Have a brief?</span>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Bring us your land, your vision, or your investment thesis.
              </h2>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-foreground hover:bg-background hover:text-foreground"
              >
                Schedule a call <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
