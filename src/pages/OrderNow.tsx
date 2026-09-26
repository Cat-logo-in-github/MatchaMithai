import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { PageWrapper } from "../components/PageWrapper"
import { Whisk, Leaf, Star, Flower } from "../components/Doodles"

export function OrderNow() {
  return (
    <PageWrapper>
      <section className="relative min-h-[85vh] flex items-center bg-forest text-cream overflow-hidden grain">
        <div className="pointer-events-none absolute top-16 -left-20 w-80 h-80 rounded-full bg-matcha/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-0 w-96 h-96 rounded-full bg-blush/10 blur-3xl" />

        {/* washi-tape style banner instead of hazard tape */}
        <div className="absolute top-[18%] -left-16 -rotate-6 w-[140%] py-2 bg-[repeating-linear-gradient(135deg,var(--color-gold)_0px,var(--color-gold)_18px,var(--color-wine)_18px,var(--color-wine)_36px)] shadow-lg opacity-90" />

        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-40 h-40 mx-auto mb-8"
          >
            <div className="absolute inset-0 rounded-[46%_54%_50%_50%/54%_46%_54%_46%] bg-gradient-to-br from-matcha to-forest-light shadow-soft" />
            <div className="absolute inset-[14%] rounded-[48%_52%_45%_55%/55%_45%_55%_45%] bg-gradient-to-br from-matcha-light to-matcha animate-wobble" />
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2"
              animate={{ rotate: [0, 22, -18, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Whisk className="w-9 h-20 text-gold" />
            </motion.div>
            <Star className="absolute -right-3 top-2 w-6 h-6 text-blush animate-float" />
            <Flower className="absolute -left-4 bottom-2 w-7 h-7 text-blush/80 animate-float" style={{ animationDelay: "0.8s" }} />
          </motion.div>

          <p className="font-script text-3xl text-blush mb-2">recipe still in the mixing bowl</p>
          <h1 className="font-display italic text-4xl sm:text-6xl mb-5 text-balance">
            Ordering is Coming Soon
          </h1>
          <p className="text-cream/75 max-w-lg mx-auto leading-relaxed mb-4">
            We're whisking together a proper ordering experience — right now
            every drop happens through our Instagram waitlist. Give us a
            little longer to get the recipe just right.
          </p>

          <div className="flex items-center justify-center gap-2 mb-10">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-matcha-light"
                animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }}
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/catalogue"
              className="px-7 py-3.5 rounded-full bg-blush text-wine font-semibold tracking-wide hover:bg-cream transition-colors shadow-soft"
            >
              Browse the Catalogue
            </Link>
            <Link
              to="/pick-your-sweet"
              className="px-7 py-3.5 rounded-full border border-cream/30 text-cream font-medium tracking-wide hover:border-cream hover:bg-cream/10 transition-colors"
            >
              Pick Your Sweet →
            </Link>
          </div>

          <Leaf className="w-10 h-10 text-matcha-light/60 mx-auto mt-14 animate-float" />
        </div>
      </section>
    </PageWrapper>
  )
}
