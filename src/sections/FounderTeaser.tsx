import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Star, Heart, Flower } from "../components/Doodles"

export function FounderTeaser() {
  return (
    <section className="py-24 sm:py-28 bg-matcha-light/25">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="rounded-[2.5rem] bg-cream shadow-soft px-8 py-14 sm:px-16 sm:py-16 relative overflow-hidden text-center">
          <Star className="absolute top-6 left-8 w-8 h-8 text-blush-deep/70 -rotate-12" />
          <Heart className="absolute top-10 right-10 w-7 h-7 text-wine/60 rotate-12" />
          <Flower className="absolute bottom-6 left-14 w-9 h-9 text-matcha-deep/50" />

          <p className="font-script text-2xl text-matcha-deep mb-2">find out who's behind the biz</p>
          <h2 className="font-display italic text-4xl sm:text-5xl text-ink mb-5 text-balance">
            Meet the Founders
          </h2>
          <p className="max-w-md mx-auto text-ink-soft/75 mb-8 leading-relaxed">
            Four students, one shared sweet tooth, and a filing cabinet of
            spreadsheets that somehow turned into a bakery brand. Open the
            folder to meet them.
          </p>
          <motion.div whileHover={{ rotate: -2, y: -4 }} className="inline-block">
            <Link
              to="/founders"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-wine text-cream font-medium tracking-wide hover:bg-wine-light transition-colors shadow-soft"
            >
              Open the folder →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
