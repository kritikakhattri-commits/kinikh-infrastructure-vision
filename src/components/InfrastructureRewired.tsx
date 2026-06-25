import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Talk to a Real Human.",
    desc: "We match you with a development expert who actually listens to your goals.",
  },
  {
    num: "02",
    title: "Get Clarity.",
    desc: "We define what you really need — land, capital, or end-to-end execution.",
  },
  {
    num: "03",
    title: "Move Forward.",
    desc: "We find what fits your vision and deliver it with precision.",
  },
];

export default function InfrastructureRewired() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1700px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">

          {/* Left — heading + CTA */}
          <div>
            <h2 className="text-[48px] font-bold leading-[1.0] tracking-[-0.045em] text-[#0B0705] sm:text-[56px] lg:text-[72px]">
              Infrastructure,
              <br />
              <span className="text-[#B7A895]">Rewired.</span>
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#0B0705] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#D9922E]"
            >
              Start a Conversation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Right — steps */}
          <div>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5F5750]">
              Steps:
            </p>
            <div className="divide-y divide-[#0B0705]/10">
              {STEPS.map((step) => (
                <div key={step.num} className="flex gap-6 py-7 first:pt-0 last:pb-0">
                  <span className="mt-0.5 shrink-0 text-[11px] font-medium text-[#B7A895]">
                    {step.num}
                  </span>
                  <p className="text-[17px] font-medium leading-[1.55] text-[#0B0705] lg:text-[18px]">
                    <span className="font-bold">{step.title}</span>{" "}
                    <span className="text-[#5F5750]">{step.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
