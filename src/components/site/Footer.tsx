import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-gold text-gold-foreground">
                <span className="font-serif text-xl leading-none">K</span>
              </div>
              <div>
                <div className="font-serif text-lg">Kinikh</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-background/60">
                  Infrastructure
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-background/70">
              Building landmarks for tomorrow. Trusted residential, commercial, and infrastructure
              projects designed for long-term value.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-9 w-9 place-items-center rounded-full border border-background/20 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-background/70">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/projects", label: "Projects" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-background/70">
              {[
                "Residential Development",
                "Commercial Projects",
                "Land Development",
                "Infrastructure Planning",
                "Property Investment",
                "Construction Management",
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  Tower One, Business Park,
                  <br /> Pune, Maharashtra 411014
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+912012345678" className="hover:text-gold">
                  +91 20 1234 5678
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="mailto:hello@kinikh.com" className="hover:text-gold">
                  hello@kinikh.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-6 text-xs text-background/50 md:flex-row">
          <p>© {new Date().getFullYear()} Kinikh Infrastructure. All rights reserved.</p>
          <p>Crafted with care · Designed for trust</p>
        </div>
      </div>
    </footer>
  );
}
