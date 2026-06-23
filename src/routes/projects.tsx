import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronRight, MapPin } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { PROJECTS, type ProjectStatus } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Kinikh Infrastructure" },
      {
        name: "description",
        content:
          "Browse Kinikh Infrastructure's portfolio of residential, commercial, land, and infrastructure projects across India.",
      },
    ],
  }),
  component: ProjectsPage,
});

const STATUSES: Array<"All" | ProjectStatus> = ["All", "Upcoming", "Ongoing", "Completed"];

function ProjectsPage() {
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("All");
  const list = useMemo(
    () => (status === "All" ? PROJECTS : PROJECTS.filter((p) => p.status === status)),
    [status],
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portfolio"
        title="Projects shaping skylines."
        subtitle="From boutique residences to civic infrastructure — explore the work Kinikh has planned, built, and delivered."
      />

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="mb-10 flex flex-wrap gap-2">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                status === s
                  ? "bg-foreground text-background"
                  : "bg-card text-foreground ring-1 ring-border hover:bg-beige"
              }`}
            >
              {s}
            </button>
          ))}
          <span className="ml-auto self-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {list.length} projects
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
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
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  <div>
                    <div className="text-foreground">{p.type}</div>
                    <div className="mt-1">Type</div>
                  </div>
                  <div>
                    <div className="text-foreground">{p.area}</div>
                    <div className="mt-1">Area</div>
                  </div>
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground">
                  View Details
                  <ChevronRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
