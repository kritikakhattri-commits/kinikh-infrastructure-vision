import { motion } from "framer-motion";

export function ShowcaseSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-10 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-[1700px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[2.62/1] min-h-[360px] overflow-hidden rounded-[34px] bg-[#d8d3cb] shadow-[0_22px_70px_rgba(33,26,22,0.1)] sm:min-h-[430px] sm:rounded-[36px] lg:min-h-0"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/kinikh-showcase.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Kinikh showcase video"
          />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/45 via-black/12 to-transparent md:w-[58%]" />
          <div className="absolute inset-0 z-10 flex items-center px-7 py-12 sm:px-10 md:px-14 lg:px-[60px] xl:px-[68px]">
            <div className="w-full max-w-[35rem] md:w-[35%] md:min-w-[430px]">
              <h2 className="font-serif text-[42px] font-semibold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.2)] sm:text-6xl lg:text-[64px]">
                Experience Kinikh
              </h2>
              <p className="mt-7 max-w-[34rem] text-lg leading-[1.5] text-white/92 drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)] sm:text-xl">
                A glimpse into our vision, craftsmanship, and execution.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
