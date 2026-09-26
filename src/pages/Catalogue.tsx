import { motion } from "framer-motion"
import { useState } from "react"
import { sweets, categoryOrder, categoryTagline, type Sweet } from "../data/recipes"
import { Placeholder } from "../components/Placeholder"
import { Leaf, Star, Cookie, Cup } from "../components/Doodles"
import { PageWrapper } from "../components/PageWrapper"

const categorySchemes: Record<Sweet["category"], { bg: string; card: string; accent: string; ph: "matcha" | "wine" | "forest" | "cream" }> = {
  "Signature Line": { bg: "bg-forest text-cream", card: "bg-forest-light/40", accent: "text-matcha-light", ph: "matcha" },
  "Bites & Bakes": { bg: "bg-cream-dark text-ink", card: "bg-paper", accent: "text-wine", ph: "cream" },
  "Mithai Remix": { bg: "bg-wine text-cream", card: "bg-wine-light/30", accent: "text-blush", ph: "wine" },
  "Next Drops": { bg: "bg-matcha-deep text-cream", card: "bg-forest-light/30", accent: "text-cream", ph: "forest" },
}

function SweetCard({ sweet, scheme, index }: { sweet: Sweet; scheme: (typeof categorySchemes)[Sweet["category"]]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.06 }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-[1.5rem] p-5 sm:p-6 ${scheme.card} border border-current/10 flex flex-col`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className={`font-heavy text-3xl opacity-30 ${scheme.accent}`}>
          {String(sweet.id).padStart(2, "0")}
        </span>
        <span
          className={`text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border ${
            sweet.status === "sold"
              ? "border-current/30 opacity-70"
              : `${scheme.accent} border-current/40`
          }`}
        >
          {sweet.status === "sold" ? "Already Sold" : "Coming Soon"}
        </span>
      </div>

      <Placeholder
        scheme={scheme.ph}
        icon={index % 2 === 0 ? "leaf" : "flower"}
        rotateBlob={index * 22}
        className="h-32 rounded-xl mb-4 group-hover:scale-[1.03] transition-transform duration-500"
      />

      <h3 className="font-display italic text-2xl leading-tight mb-1">{sweet.name}</h3>
      <p className={`text-xs uppercase tracking-wide opacity-60 mb-4`}>{sweet.serving}</p>

      <p className="text-sm opacity-80 leading-relaxed mb-4 italic">{sweet.blurb}</p>

      <div className="mt-auto pt-4 border-t border-current/10">
        <p className={`text-[10px] uppercase tracking-widest mb-2 ${scheme.accent}`}>Ingredients</p>
        <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs opacity-75">
          {sweet.ingredients.map((ing) => (
            <li key={ing.name} className="flex justify-between gap-2">
              <span className="truncate">{ing.name}</span>
              <span className="shrink-0 opacity-60">{ing.amount}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between text-xs font-semibold mt-3 pt-2 border-t border-current/10">
          <span>Total</span>
          <span>{sweet.total}</span>
        </div>
      </div>
    </motion.article>
  )
}

export function Catalogue() {
  const [active, setActive] = useState<Sweet["category"] | "All">("All")

  const visibleCategories = active === "All" ? categoryOrder : [active]

  return (
    <PageWrapper>
      <section className="relative bg-cream pt-6 pb-14 sm:pt-10 overflow-hidden">
        <Cookie className="absolute top-10 left-[6%] w-9 h-9 text-ink-soft/20 -rotate-6 animate-float hidden sm:block" />
        <Cup className="absolute bottom-6 right-[8%] w-10 h-10 text-forest/20 rotate-3 animate-float hidden sm:block" style={{ animationDelay: "0.7s" }} />
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <p className="font-script text-2xl text-matcha-deep mb-1">the recipe book, digitised</p>
          <h1 className="font-display italic text-4xl sm:text-6xl text-ink mb-4 text-balance">
            Catalogue
          </h1>
          <p className="text-ink-soft/70 leading-relaxed">
            Twenty sweets, every ingredient in grams — straight from our
            recipe book. Signature line, small indulgences, heritage
            remixes, and what's coming next.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {(["All", ...categoryOrder] as const).map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm uppercase tracking-wide transition-colors border ${
                  active === c
                    ? "bg-wine text-cream border-wine"
                    : "bg-transparent text-ink-soft border-ink/15 hover:border-wine hover:text-wine"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {visibleCategories.map((cat) => {
        const scheme = categorySchemes[cat]
        const items = sweets.filter((s) => s.category === cat)
        return (
          <section key={cat} className={`${scheme.bg} py-16 sm:py-20 relative overflow-hidden grain`}>
            <Leaf className="absolute top-8 right-10 w-16 h-16 opacity-10" />
            <Star className="absolute bottom-10 left-8 w-10 h-10 opacity-10" />
            <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
              <div className="mb-10 text-center">
                <h2 className="font-heavy text-3xl sm:text-4xl tracking-wide mb-1">{cat}</h2>
                <p className={`text-xs sm:text-sm uppercase tracking-[0.25em] ${scheme.accent} opacity-80`}>
                  {categoryTagline[cat]}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((s, i) => (
                  <SweetCard key={s.id} sweet={s} scheme={scheme} index={i} />
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </PageWrapper>
  )
}
