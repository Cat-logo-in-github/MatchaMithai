import { motion } from "framer-motion"
import { Leaf, Star, Heart } from "../components/Doodles"

const cards = [
  {
    key: "vision",
    title: "Vision",
    icon: Leaf,
    rotate: -3,
    scheme: "bg-forest text-cream",
    accent: "text-matcha-light",
    body: "A world where an old family sweet and a new-world flavour aren't opposites — where mithai gets to be luxurious, and luxury gets to taste like home.",
  },
  {
    key: "mission",
    title: "Mission",
    icon: Star,
    rotate: 2,
    scheme: "bg-cream-dark text-ink",
    accent: "text-wine",
    body: "To whisk Uji first-harvest matcha into twenty heritage recipes, hand-finished in small batches — traceable sourcing, honest ingredients, and a lighter footprint with every drop.",
  },
  {
    key: "motto",
    title: "Motto",
    icon: Heart,
    rotate: -2,
    scheme: "bg-wine text-cream",
    accent: "text-blush",
    body: "“Too meetha to handle.” Said with a wink, meant every time — matchafying traditional desserts, one impossibly sold-out box at a time.",
    script: true,
  },
]

export function VisionMissionMotto() {
  return (
    <section className="relative py-24 sm:py-32 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <p className="font-script text-2xl text-matcha-deep mb-1">what we stand for</p>
          <h2 className="font-display italic text-4xl sm:text-5xl text-ink text-balance">
            Three ideas, one small-batch bakery
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.key}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: c.rotate }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
                className={`rounded-[2rem] p-8 sm:p-9 shadow-soft ${c.scheme} min-h-[300px] flex flex-col`}
              >
                <Icon className={`w-10 h-10 mb-6 ${c.accent}`} />
                <h3 className="font-heavy text-2xl tracking-wide mb-4">{c.title.toUpperCase()}</h3>
                <p className={`leading-relaxed ${c.script ? "font-display italic text-lg" : "text-[15px] opacity-90"}`}>
                  {c.body}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
