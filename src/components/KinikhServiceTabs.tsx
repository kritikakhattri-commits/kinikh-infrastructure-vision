import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ROWS = [
  {
    id: "develop",
    number: "01",
    label: "Develop",
    description:
      "From residential communities to commercial environments, Kinikh plans and develops spaces with disciplined execution, transparent coordination, and long-term value at the center.",
    cta: "Start a Development",
    image: project1,
  },
  {
    id: "invest",
    number: "02",
    label: "Invest",
    description:
      "Discover investment-ready opportunities shaped by location insight, infrastructure planning, and future growth potential.",
    cta: "Explore Opportunities",
    image: project2,
  },
  {
    id: "partner",
    number: "03",
    label: "Partner",
    description:
      "Collaborate with Kinikh across land, infrastructure, and development partnerships built on trust, precision, and shared outcomes.",
    cta: "Become a Partner",
    image: project3,
  },
] as const;

export default function KinikhServiceTabs() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="w-full overflow-hidden bg-white pb-24 md:pb-32 lg:pb-40">
      {/* Minimal section header */}
      <div className="bg-white px-8 pb-8 pt-24 md:px-14 md:pt-32 lg:px-20 lg:pt-40">
        <span
          className="text-[11px] font-semibold uppercase tracking-[0.26em]"
          style={{ color: "#D9922E" }}
        >
          How Kinikh Works With You
        </span>
      </div>

      {/* Stacked rows */}
      {ROWS.map((row, index) => {
        const isHovered = hoveredId === row.id;

        return (
          <div
            key={row.id}
            className="group relative flex cursor-pointer items-center overflow-hidden bg-[#0B0705] transition-transform duration-500 ease-out hover:scale-[1.005]"
            style={{ minHeight: "clamp(220px, 28vw, 340px)" }}
            onMouseEnter={() => setHoveredId(row.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Background image */}
            <img
              src={row.image}
              alt={row.label}
              className="absolute inset-0 h-full w-full scale-105 object-cover opacity-35 transition-all duration-700 ease-out group-hover:scale-100 md:opacity-0 md:group-hover:opacity-100"
              style={{
                filter: "sepia(0.18) saturate(0.80) brightness(0.68) contrast(1.06)",
              }}
            />

            {/* Dark reveal overlay */}
            <div className="absolute inset-0 bg-[#0B0705]/70 transition-colors duration-700 group-hover:bg-[#0B0705]/55 md:bg-[#0B0705]/85 md:group-hover:bg-[#0B0705]/55" />

            {/* Thin divider between rows */}
            {index < ROWS.length - 1 && (
              <div className="absolute bottom-0 left-0 right-0 z-10 h-px bg-white/10" />
            )}

            {/* Row content */}
            <div className="relative z-10 grid w-full items-center gap-6 px-8 md:grid-cols-[320px_1fr_72px] md:gap-10 md:px-14 lg:grid-cols-[380px_1fr_88px] lg:gap-16 lg:px-20 xl:grid-cols-[420px_1fr_96px]">
              {/* LEFT — number + description + cta */}
              <div className="hidden flex-col gap-3 md:flex">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold tabular-nums"
                    style={{
                      borderColor: "rgba(255,255,255,0.28)",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {index + 1}
                  </span>
                </div>

                <p
                  className="text-[13.5px] leading-[1.7]"
                  style={{ color: "rgba(255,255,255,0.58)", maxWidth: 300 }}
                >
                  {row.description}
                </p>

                <Link
                  to="/contact"
                  className="group mt-1 inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] transition-colors duration-200"
                  style={{
                    color: isHovered ? "#D9922E" : "rgba(255,255,255,0.45)",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {row.cta}
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* CENTER — huge label */}
              <div className="flex items-center">
                <span
                  className="font-bold leading-none tracking-[-0.045em] text-white"
                  style={{
                    fontSize: "clamp(68px, 9vw, 126px)",
                    transition: "opacity 0.3s ease",
                    opacity: isHovered ? 1 : 0.88,
                  }}
                >
                  {row.label}
                </span>
              </div>

              {/* RIGHT — arrow */}
              <div className="flex items-center justify-end">
                <ArrowRight
                  className="text-white"
                  style={{
                    width: "clamp(28px, 3.5vw, 52px)",
                    height: "clamp(28px, 3.5vw, 52px)",
                    strokeWidth: 1.4,
                    transform: isHovered ? "translateX(8px)" : "translateX(0)",
                    transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
                    opacity: isHovered ? 1 : 0.6,
                  }}
                />
              </div>
            </div>

            {/* Mobile: number badge top-left */}
            <span
              className="absolute left-5 top-5 z-10 flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-semibold tabular-nums md:hidden"
              style={{
                borderColor: "rgba(255,255,255,0.28)",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {index + 1}
            </span>

            {/* Mobile: description visible on hover */}
            <div
              className="absolute bottom-5 left-5 right-16 z-10 md:hidden"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "translateY(0)" : "translateY(6px)",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <p className="text-[12px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.65)" }}>
                {row.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
