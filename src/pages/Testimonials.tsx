import { motion } from "framer-motion"
import { PageWrapper } from "../components/PageWrapper"
import { Leaf, Star, Heart } from "../components/Doodles"

const cafes = ["Lea Izakaya", "Oichii", "Cultured"]

export function Testimonials() {
  return (
    <PageWrapper>
      <section className="relative min-h-[90vh] bg-wine-deep text-cream py-24 sm:py-28 overflow-hidden grain">
        {/* warm ambient glows, night-bakery lighting */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-matcha/10 blur-3xl" />
        <div className="pointer-events-none absolute top-20 right-0 w-64 h-64 rounded-full bg-wine-light/20 blur-3xl" />

        <Leaf className="absolute top-14 left-10 w-10 h-10 text-matcha-light/20 animate-float" />
        <Star className="absolute bottom-24 right-16 w-8 h-8 text-blush/25 animate-float" style={{ animationDelay: "0.6s" }} />

        <div className="max-w-3xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <p className="font-script text-2xl text-blush mb-2">from our nighttime regulars</p>
          <h1 className="font-display italic text-4xl sm:text-6xl mb-14 text-balance">Testimonials</h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-xl"
          >
            {/* ornate frame */}
            <div className="relative rounded-[2rem] p-2.5 bg-gradient-to-br from-gold/50 via-wine-light/40 to-gold/30 shadow-[0_25px_70px_-20px_rgba(0,0,0,0.6)]">
              <div className="rounded-[1.6rem] overflow-hidden bg-black relative">
                <video
                  className="w-full aspect-[9/16] object-cover opacity-95"
                  src={`${import.meta.env.BASE_URL}media/testimonial.mp4`}
                  poster={`${import.meta.env.BASE_URL}media/testimonial-real-poster.jpg`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  aria-label="Customer testimonial video"
                />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_25px_rgba(0,0,0,0.5)]" />
              </div>
              <Heart className="absolute -top-4 -right-4 w-9 h-9 text-blush drop-shadow-lg" />
            </div>

            <blockquote className="mt-9 font-display italic text-xl sm:text-2xl leading-relaxed text-cream/90 text-balance">
              "We ordered the Cloud Mousse for a dinner party and it
              disappeared before dessert was even announced. This doesn't
              taste like a student side-project — it tastes like it belongs
              in a gift box."
            </blockquote>
            <p className="mt-4 text-sm tracking-wide text-blush/70 uppercase">
              — a regular from our Instagram drops
            </p>
          </motion.div>

          <div className="mt-16">
            <p className="text-xs uppercase tracking-[0.3em] text-cream/40 mb-4">
              As tasted at our partner cafés
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {cafes.map((c) => (
                <span key={c} className="font-display italic text-lg text-cream/60">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
