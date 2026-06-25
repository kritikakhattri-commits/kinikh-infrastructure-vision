import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Download, MapPin, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { findProject, type Project } from "@/lib/projects";


export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = findProject(params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.name} — Kinikh Infrastructure` },
          { name: "description", content: loaderData.project.shortDescription },
          { property: "og:title", content: loaderData.project.name },
          { property: "og:description", content: loaderData.project.shortDescription },
          { property: "og:image", content: loaderData.project.image },
        ]
      : [{ title: "Project — Kinikh Infrastructure" }],
  }),
  component: ProjectDetails,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-px mx-auto max-w-3xl py-40 text-center">
        <h1 className="font-serif text-5xl">Project not found</h1>
        <Link to="/projects" className="mt-6 inline-block text-gold underline">
          Back to all projects
        </Link>
      </div>
    </SiteLayout>
  ),
});

function ProjectDetails() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate flex min-h-[80svh] items-end overflow-hidden bg-foreground text-background">
        <img
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-foreground/10" />
        <div className="container-px relative z-10 mx-auto w-full max-w-7xl pb-20 pt-40">
          <Link
            to="/projects"
            className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-background/80 hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" /> All Projects
          </Link>
          <span
            className={`inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${
              project.status === "Ongoing"
                ? "bg-gold text-gold-foreground"
                : project.status === "Upcoming"
                  ? "bg-background text-foreground"
                  : "bg-background/20 text-background"
            }`}
          >
            {project.status}
          </span>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
            {project.name}
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-background/80">
            <MapPin className="h-4 w-4 text-gold" /> {project.location}
          </div>
        </div>
      </section>

      {/* Meta strip */}
      <section className="border-b border-border bg-card">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            { label: "Type", value: project.type },
            { label: "Area", value: project.area },
            { label: "Status", value: project.status },
            { label: "Location", value: project.location },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {m.label}
              </div>
              <div className="mt-1 font-serif text-xl">{m.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview + Highlights */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="eyebrow eyebrow-line">Overview</span>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
              A landmark crafted with intent.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {project.overview}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every Kinikh project begins with deep diligence — on land, on materials, on
              partners. {project.name} is no exception.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8">
            <span className="eyebrow">Project Highlights</span>
            <ul className="mt-6 space-y-4">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-white py-20">
        <div className="container-px mx-auto max-w-7xl">
          <span className="eyebrow">Amenities & Features</span>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
            Built around the way you live.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.amenities.map((a) => (
              <div
                key={a}
                className="flex items-center gap-3 rounded-xl bg-card p-5 ring-1 ring-border"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold/15 text-gold">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Gallery</span>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              A closer look.
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {project.gallery.map((src, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <img
                src={src}
                alt={`${project.name} gallery ${i + 1}`}
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Brochure + Enquiry */}
      <section className="bg-white py-20">
        <div className="container-px mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-foreground p-10 text-background">
            <span className="eyebrow text-gold">Project Brochure</span>
            <h3 className="mt-4 font-serif text-3xl leading-snug">
              Download the {project.name} project pack.
            </h3>
            <p className="mt-4 text-background/70">
              Full project specifications, floor plates, master plan, and pricing — delivered to
              your inbox.
            </p>
            <button className="mt-7 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-gold-foreground transition-colors hover:bg-background hover:text-foreground">
              <Download className="h-4 w-4" /> Download Brochure
            </button>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl bg-card p-8 ring-1 ring-border"
          >
            <span className="eyebrow">Enquire</span>
            <h3 className="mt-3 font-serif text-2xl">Get in touch about {project.name}</h3>
            <div className="mt-6 grid gap-4">
              <input
                placeholder="Your name"
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
              />
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                />
                <input
                  placeholder="Phone"
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Tell us what you'd like to know"
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
              />
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-background hover:bg-gold hover:text-gold-foreground">
                <Send className="h-4 w-4" /> Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
