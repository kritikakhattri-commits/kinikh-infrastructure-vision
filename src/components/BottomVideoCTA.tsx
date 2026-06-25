import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function BottomVideoCTA() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden md:h-[560px]">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/9243208-uhd_4096_2160_25fps.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0B0705]/60" />

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 px-5 text-center">
        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl">
          Find You. We'll Help You Get There.
        </h2>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#0B0705] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
        >
          Let's Get Started
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
