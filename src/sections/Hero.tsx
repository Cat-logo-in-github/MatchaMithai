import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Whisk, Star, Leaf } from "../components/Doodles"

// Reveal timing constants for the pour → sweet cycle (see the animation
// below): the cup fades in over the same 6s loop the CSS pour/sparkle
// keyframes are tuned to, so the drips and sparkle line up with the reveal.

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream grain">
      {/* ambient background texture */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-matcha-light/30 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-32 w-[380px] h-[380px] rounded-full bg-blush/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-16 sm:pt-36 sm:pb-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div className="relative z-10 order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="uppercase tracking-[0.25em] text-xs sm:text-sm text-matcha-deep font-semibold mb-5"
          >
            Pre-incubated at InfoEdge Centre for Entrepreneurship
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heavy text-[15vw] leading-[0.92] sm:text-7xl lg:text-[5.5rem] text-balance"
          >
            <span className="block text-forest">MATCHA</span>
            <span className="block text-wine -mt-1 sm:-mt-3">MITHAI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-script text-3xl sm:text-4xl text-wine mt-4"
          >
            too meetha to handle.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 text-ink-soft/80 text-base sm:text-lg max-w-md leading-relaxed"
          >
            Luxury fusion mithai — Uji first-harvest matcha, whisked into the
            sweets your dadi already loves. Small batches. Gift-ready boxes.
            Sold out, every single drop.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/catalogue"
              className="px-7 py-3.5 rounded-full bg-forest text-cream font-medium tracking-wide hover:bg-forest-light transition-all duration-300 shadow-soft hover:-translate-y-0.5"
            >
              Explore the Catalogue
            </Link>
            <Link
              to="/pick-your-sweet"
              className="px-7 py-3.5 rounded-full border border-ink/20 text-ink-soft font-medium tracking-wide hover:border-wine hover:text-wine transition-all duration-300 hover:-translate-y-0.5"
            >
              Pick Your Sweet →
            </Link>
          </motion.div>
        </div>

        {/* Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative order-1 lg:order-2 h-[380px] sm:h-[460px] lg:h-[520px] flex items-center justify-center"
        >
          <Star className="absolute top-2 left-6 w-7 h-7 text-blush-deep/70 animate-float" style={{ animationDelay: "0.4s" }} />
          <Leaf className="absolute bottom-10 right-2 w-9 h-9 text-matcha-deep/60 animate-float" style={{ animationDelay: "1.2s" }} />

          {/* Bowl */}
          <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px]">
            <div className="absolute inset-0 rounded-[46%_54%_50%_50%/54%_46%_54%_46%] bg-gradient-to-br from-matcha to-forest-light shadow-[inset_0_-14px_28px_rgba(0,0,0,0.25),0_20px_50px_-15px_rgba(34,54,22,0.5)]" />

            {/* liquid surface — swirling matcha being blended */}
            <div className="absolute inset-[10%] rounded-[48%_52%_45%_55%/55%_45%_55%_45%] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-matcha-light via-matcha to-matcha-deep animate-wobble" />
              <div className="absolute inset-[-40%] opacity-40 animate-swirl bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.5)_30deg,transparent_70deg,transparent_180deg,rgba(255,255,255,0.3)_210deg,transparent_260deg)]" />
              {/* darker whirlpool vortex at the centre, deepens the swirl */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(22,34,14,0.35)_0%,transparent_45%)] animate-swirl" style={{ animationDuration: "6s", animationDirection: "reverse" }} />
            </div>

            {/* whisk */}
            <motion.div
              className="absolute -top-10 left-1/2 -translate-x-1/2 origin-bottom"
              animate={{ rotate: [0, 22, -16, 12, 0], y: [0, 5, -3, 4, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Whisk className="w-10 h-24 sm:w-12 sm:h-28 text-gold drop-shadow-md" />
            </motion.div>

            {/* drizzle droplets falling from the whisk into the bowl */}
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="absolute top-6 left-1/2 -translate-x-1/2 w-1.5 h-4 rounded-full bg-matcha-light animate-drip"
                style={{ animationDelay: `${i * 0.8}s` }}
              />
            ))}

            {/* the pour: a little stream of matcha travelling from the bowl
                toward the sweet, timed to arrive just as it's revealed */}
            {[0, 1, 2].map((i) => (
              <span
                key={`pour-${i}`}
                className="absolute bottom-[18%] right-[14%] w-2 h-2 rounded-full bg-matcha-light shadow-sm animate-pour"
                style={{ animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>

          {/* the finished sweet — Cloud Mousse — appearing on a cyclical delay */}
          <motion.div
            className="absolute -right-1 sm:right-4 bottom-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 14, scale: 0.7 }}
            animate={{ opacity: [0, 0, 1, 1, 0], y: [14, 14, 0, 0, 14], scale: [0.7, 0.7, 1, 1, 0.7] }}
            transition={{ duration: 6, repeat: Infinity, times: [0, 0.55, 0.7, 0.92, 1], ease: "easeInOut" }}
          >
            <div className="relative">
              <Star className="animate-sparkle absolute -top-3 -left-4 w-4 h-4 text-gold" />
              <Star className="animate-sparkle absolute -top-1 -right-3 w-3 h-3 text-blush-deep" style={{ animationDelay: "0.15s" }} />
              <div className="w-20 h-16 sm:w-24 sm:h-20 rounded-t-[50%] rounded-b-lg bg-gradient-to-b from-matcha-light to-matcha shadow-soft relative overflow-hidden">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-white/40 rounded-full blur-[2px]" />
              </div>
              <div className="w-24 sm:w-28 h-4 bg-gold-light rounded-b-xl -mt-1 shadow-inner" />
            </div>
            <span className="mt-2 font-script text-lg text-forest">Cloud Mousse!</span>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        className="flex justify-center pb-8"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-ink-soft/40 text-xs tracking-[0.3em] uppercase">scroll</span>
      </motion.div>
    </section>
  )
}
