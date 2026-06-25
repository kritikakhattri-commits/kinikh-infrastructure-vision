import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";
import project5 from "@/assets/project-5.jpg";

const CARDS = [
  {
    image: project1,
    service: "DEVELOP",
    description:
      "Plan and develop residential, commercial, and mixed-use spaces with disciplined execution, clear documentation, and long-term value at the center.",
    label: "Develop",
  },
  {
    image: project3,
    service: "INVEST",
    description:
      "Identify investment-ready opportunities across strategic locations, supported by transparent planning, market clarity, and future-growth potential.",
    label: "Invest",
  },
  {
    image: project5,
    service: "PARTNER",
    description:
      "Work with Kinikh across land, infrastructure, and development partnerships built on trust, precision, and shared long-term outcomes.",
    label: "Partner",
  },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function HowKinikhHelps() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease }}
            className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D9922E]"
          >
            <span className="inline-block h-px w-8 bg-[#D9922E]" />
            Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="font-serif text-[44px] leading-[1.0] tracking-[-0.02em] text-[#0B0705] sm:text-[56px] lg:text-[70px] xl:text-[80px]"
          >
            How Kinikh
            <br />
            Can Help You
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
          {CARDS.map((card, i) => (
            <motion.article
              key={card.label}
              initial={{ opacity: 0, y: 48 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.22 + i * 0.13 }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease } }}
              className="group cursor-default rounded-[32px] border border-[#0B0705]/10 bg-white p-3 shadow-[0_18px_52px_rgba(11,7,5,0.06)] backdrop-blur-sm transition-shadow duration-500 hover:shadow-[0_28px_70px_rgba(11,7,5,0.12)]"
            >
              <div className="relative overflow-hidden rounded-[28px] shadow-[0_8px_32px_rgba(11,7,5,0.10)]">
                <img
                  src={card.image}
                  alt={`${card.label} with Kinikh Infrastructure`}
                  width={960}
                  height={720}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0705]/30 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-5 left-5 text-[11px] font-bold uppercase tracking-[0.28em] text-white">
                  {card.service}
                </span>
              </div>

              <div className="px-2 pb-3 pt-7">
                <p className="text-[17px] font-bold leading-[1.52] tracking-[-0.01em] text-[#0B0705] lg:text-[19px]">
                  {card.description}
                </p>

                <div className="mt-6 flex items-center gap-2.5 border-t border-[#0B0705]/10 pt-5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#5F5750]">
                    {card.label}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#D9922E] transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
