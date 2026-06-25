import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-foreground text-background">
            <span className="font-serif text-xl leading-none">K</span>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg font-medium tracking-tight">Kinikh</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Infrastructure
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-foreground px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-background transition-all hover:bg-gold hover:text-gold-foreground sm:inline-flex"
          >
            Enquire Now
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border bg-background/70 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-background p-6 shadow-elegant transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-10 flex items-center justify-between">
            <span className="font-serif text-lg">Menu</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-md border border-border"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-serif text-2xl"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3 text-xs font-medium uppercase tracking-widest text-background"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}
