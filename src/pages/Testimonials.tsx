import { motion } from "framer-motion"
import { PageWrapper } from "../components/PageWrapper"
import { Leaf, Star, Heart, Flower } from "../components/Doodles"

const cafes = ["Lea Izakaya", "Oichii", "Cultured"]

const testimonials = [
  {
    id: "t1",
    video: "media/testimonial-1.mp4",
    poster: "media/testimonial-1-poster.jpg",
    quote:
      "“We ordered the Cloud Mousse for a dinner party and it disappeared before dessert was even announced. This doesn't taste like a student side-project — it tastes like it belongs in a gift box.”",
    attribution: "— a regular from our Instagram drops",
  },
  {
    id: "t2",
    video: "media/testimonial-2.mp4",
    poster: "media/testimonial-2-poster.jpg",
    quote:
      "“The Kaju Katli box was gone within the hour at our office Diwali party — people kept asking where we'd ‘really’ bought it from. Matcha and mithai should not work this well together, but it does.”",
    attribution: "— a corporate gifting order, repeat customer",
  },
]

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

        <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <p className="font-script text-2xl text-blush mb-2">from our nighttime regulars</p>
          <h1 className="font-display italic text-4xl sm:text-6xl mb-14 text-balance">Testimonials</h1>

          <div className="grid sm:grid-cols-2 gap-14 sm:gap-10 items-start">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative mx-auto max-w-sm"
              >
                {/* ornate frame */}
                <div className="relative rounded-[2rem] p-2.5 bg-gradient-to-br from-gold/50 via-wine-light/40 to-gold/30 shadow-[0_25px_70px_-20px_rgba(0,0,0,0.6)]">
                  <div className="rounded-[1.6rem] overflow-hidden bg-black relative">
                    <video
                      className="w-full aspect-[9/16] object-cover opacity-95"
                      src={`${import.meta.env.BASE_URL}${t.video}`}
                      poster={`${import.meta.env.BASE_URL}${t.poster}`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      aria-label="Customer testimonial video"
                    />
                    <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_25px_rgba(0,0,0,0.5)]" />
                  </div>
                  {i === 0 ? (
                    <Heart className="absolute -top-4 -right-4 w-9 h-9 text-blush drop-shadow-lg" />
                  ) : (
                    <Flower className="absolute -top-4 -right-4 w-9 h-9 text-blush drop-shadow-lg" />
                  )}
                </div>

                <blockquote className="mt-8 font-display italic text-lg sm:text-xl leading-relaxed text-cream/90 text-balance">
                  {t.quote}
                </blockquote>
                <p className="mt-4 text-xs sm:text-sm tracking-wide text-blush/70 uppercase">
                  {t.attribution}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
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
