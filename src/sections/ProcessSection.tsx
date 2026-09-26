import { motion } from "framer-motion"

const steps = [
  {
    n: "01",
    title: "Sourced",
    body: "Uji first-harvest matcha, direct from our Noida supplier — lot-checked, batch by batch.",
  },
  {
    n: "02",
    title: "Whisked",
    body: "Hand-blended into cream, khoya, chhena and ghee — the fusion happens right here.",
  },
  {
    n: "03",
    title: "Shaped",
    body: "Rolled, set, or piped by hand in small batches — never a factory line in sight.",
  },
  {
    n: "04",
    title: "Boxed",
    body: "Gold-accented, gift-ready packaging — designed for weddings, festivals, and everyday indulgence.",
  },
  {
    n: "05",
    title: "Sold Out",
    body: "Every single drop, so far. Waitlist for the next one — it moves fast.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 bg-cream-dark/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <p className="font-script text-2xl text-matcha-deep mb-1">from leaf to box</p>
          <h2 className="font-display italic text-4xl sm:text-5xl text-ink text-balance">
            How a drop comes together
          </h2>
        </div>

        <div className="relative grid sm:grid-cols-5 gap-10 sm:gap-4">
          <div className="hidden sm:block absolute top-[38px] left-[10%] right-[10%] h-px bg-ink/15" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="w-[76px] h-[76px] rounded-full bg-paper border border-ink/10 shadow-soft flex items-center justify-center font-heavy text-xl text-wine mb-5 relative z-10">
                {s.n}
              </div>
              <h3 className="font-display italic text-xl text-forest mb-2">{s.title}</h3>
              <p className="text-sm text-ink-soft/75 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
