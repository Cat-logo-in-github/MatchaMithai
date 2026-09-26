import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { sweets } from "../data/recipes"
import { Placeholder } from "../components/Placeholder"

const featuredIds = [1, 5, 4, 8]
const schemes = ["matcha", "blush", "cream", "wine"] as const

export function FeaturedSweets() {
  const items = featuredIds
    .map((id) => sweets.find((s) => s.id === id)!)

  return (
    <section className="py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="font-script text-2xl text-matcha-deep mb-1">already sold out (worth the wait)</p>
            <h2 className="font-display italic text-4xl sm:text-5xl text-ink">Fan favourites</h2>
          </div>
          <Link
            to="/catalogue"
            className="text-sm uppercase tracking-widest text-wine border-b border-wine/40 pb-1 hover:border-wine w-max"
          >
            View full catalogue →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {items.map((sweet, i) => (
            <motion.div
              key={sweet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="rounded-[1.75rem] overflow-hidden shadow-soft">
                <Placeholder
                  scheme={schemes[i % schemes.length]}
                  icon={i % 2 === 0 ? "leaf" : "flower"}
                  label={sweet.name}
                  rotateBlob={i * 35}
                  className="h-56 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="pt-4">
                <h3 className="font-display italic text-xl text-forest">{sweet.name}</h3>
                <p className="text-xs uppercase tracking-wide text-ink-soft/50 mt-1">{sweet.serving}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
