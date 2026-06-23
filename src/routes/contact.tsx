import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kinikh Infrastructure" },
      {
        name: "description",
        content:
          "Get in touch with Kinikh Infrastructure for residential, commercial and infrastructure development enquiries.",
      },
    ],
  }),
  component: ContactPage,
});

const DETAILS = [
  {
    icon: MapPin,
    title: "Office",
    lines: ["Tower One, Business Park", "Pune, Maharashtra 411014"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 20 1234 5678", "+91 98765 43210"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["hello@kinikh.com", "enquiry@kinikh.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["Mon – Sat · 10:00 AM – 7:00 PM", "Sunday by appointment"],
  },
];

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Let's talk"
        title="Start a conversation with Kinikh."
        subtitle="Whether you are a homeowner, investor, landowner, or institution — our team is here to help."
      />

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl bg-card p-8 ring-1 ring-border md:p-10"
          >
            <span className="eyebrow">Send a message</span>
            <h2 className="mt-3 font-serif text-3xl leading-snug md:text-4xl">
              Tell us about your project.
            </h2>
            <div className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full Name" placeholder="Jane Doe" />
                <Field label="Phone" placeholder="+91 98765 43210" />
              </div>
              <Field label="Email" type="email" placeholder="you@email.com" />
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Interested In" as="select" options={["Residential", "Commercial", "Land", "Infrastructure", "Investment", "Other"]} />
                <Field label="Budget Range" as="select" options={["Under ₹50L", "₹50L – ₹1Cr", "₹1Cr – ₹3Cr", "₹3Cr+"]} />
              </div>
              <Field label="Message" as="textarea" placeholder="Share a few details about your enquiry" />
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-background hover:bg-gold hover:text-gold-foreground">
                <Send className="h-4 w-4" /> Send Message
              </button>
            </div>
          </form>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {DETAILS.map((d) => (
                <div key={d.title} className="rounded-2xl bg-card p-6 ring-1 ring-border">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-foreground text-background">
                    <d.icon className="h-4 w-4" />
                  </span>
                  <div className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {d.title}
                  </div>
                  {d.lines.map((l) => (
                    <div key={l} className="mt-1 text-sm text-foreground">
                      {l}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl ring-1 ring-border">
              <iframe
                title="Kinikh location"
                src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="rounded-3xl bg-foreground p-10 text-background md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <span className="grid h-14 w-14 place-items-center rounded-xl bg-gold text-gold-foreground">
              <Briefcase className="h-6 w-6" />
            </span>
            <div>
              <span className="eyebrow text-gold">Business Enquiry</span>
              <h2 className="mt-3 font-serif text-3xl leading-snug md:text-4xl">
                Land, joint development, or institutional partnerships.
              </h2>
              <p className="mt-3 max-w-2xl text-background/70">
                We work with landowners, family offices and institutions on JD, JV and bulk
                acquisition opportunities across the Western India corridor.
              </p>
            </div>
            <a
              href="mailto:business@kinikh.com"
              className="inline-flex items-center gap-3 rounded-full bg-background px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground hover:bg-gold hover:text-gold-foreground"
            >
              business@kinikh.com
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  as,
  options,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea" | "select";
  options?: string[];
}) {
  const base =
    "rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none";
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea rows={5} placeholder={placeholder} className={base} />
      ) : as === "select" ? (
        <select className={base}>
          <option value="">Select</option>
          {options?.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input type={type} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}
