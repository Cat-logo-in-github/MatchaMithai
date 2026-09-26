import { motion } from "framer-motion"
import { Swirl } from "../components/Doodles"

const stats = [
  { n: "20", l: "recipes in the book" },
  { n: "8", l: "sold-out drops" },
  { n: "4,500+", l: "customers, and counting" },
  { n: "4", l: "partner cafés" },
]

export function BrandStory() {
  return (
    <section className="relative bg-forest text-cream py-24 sm:py-32 overflow-hidden grain">
      <div className="pointer-events-none absolute top-10 right-10 w-72 h-72 rounded-full bg-matcha/20 blur-3xl" />
      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        <p className="font-script text-2xl text-blush text-center mb-2">the origin story</p>
        <h2 className="font-display italic text-3xl sm:text-5xl text-center text-balance mb-10 leading-tight">
          It started in a dorm kitchen, one whisked bowl of matcha at a time.
        </h2>

        <div className="max-w-2xl mx-auto space-y-5 text-cream/85 text-center leading-relaxed text-[15px] sm:text-base">
          <p>
            Matcha Mithai began as a question: why should "premium dessert"
            always mean French pastry? We started folding Uji first-harvest
            matcha into the mithai we grew up on — kaju katli, peda, rasgulla
            — and into a few new inventions of our own, like the Cloud
            Mousse that sold out before we'd finished photographing it.
          </p>
          <p>
            Every drop is made in small batches, sourced directly, and
            packed into gold-accented boxes designed for gifting. We're
            pre-incubated at the InfoEdge Centre for Entrepreneurship at
            Ashoka University, and we're just getting started.
          </p>
        </div>

        <Swirl className="w-40 mx-auto my-10 text-blush/60" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="font-heavy text-3xl sm:text-4xl text-matcha-light">{s.n}</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-cream/60 mt-1">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
