import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export function QuizTeaser() {
  return (
    <section className="py-4 sm:py-6 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2.5rem] bg-wine text-cream px-8 py-14 sm:px-16 sm:py-20 grid sm:grid-cols-[1.3fr_1fr] gap-8 items-center relative overflow-hidden grain"
        >
          <div className="pointer-events-none absolute -bottom-20 -right-16 w-64 h-64 rounded-full bg-blush/10 blur-3xl" />
          <div className="relative z-10">
            <p className="font-script text-2xl text-blush mb-2">a very scientific quiz</p>
            <h2 className="font-display italic text-3xl sm:text-4xl text-balance mb-4">
              Which sweet matches your whole personality?
            </h2>
            <p className="text-cream/75 max-w-md leading-relaxed">
              Six questions. Zero clinical energy. One dramatically-revealed
              mithai at the end, chosen just for you.
            </p>
          </div>
          <div className="relative z-10 flex sm:justify-end">
            <Link
              to="/pick-your-sweet"
              className="px-8 py-4 rounded-full bg-blush text-wine font-semibold tracking-wide hover:bg-cream transition-colors shadow-soft inline-block text-center"
            >
              Take the quiz →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
