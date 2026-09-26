import { motion } from "framer-motion"
import { PageWrapper } from "../components/PageWrapper"
import { Placeholder } from "../components/Placeholder"

type Tile = {
  span: string
  scheme: "matcha" | "cream" | "wine" | "blush" | "forest"
  icon: "leaf" | "star" | "flower"
  rotate: number
  label: string
}

const tiles: Tile[] = [
  { span: "col-span-4 row-span-2", scheme: "matcha", icon: "leaf", rotate: -1, label: "Whisking the first batch" },
  { span: "col-span-2 row-span-1", scheme: "blush", icon: "flower", rotate: 2, label: "Gift box, ribbon on" },
  { span: "col-span-2 row-span-1", scheme: "cream", icon: "star", rotate: -2, label: "Cloud Mousse close-up" },
  { span: "col-span-2 row-span-2", scheme: "wine", icon: "leaf", rotate: 1.5, label: "Night drop, packed" },
  { span: "col-span-3 row-span-1", scheme: "forest", icon: "flower", rotate: -1.5, label: "Matcha, sifted" },
  { span: "col-span-3 row-span-1", scheme: "blush", icon: "star", rotate: 2.5, label: "Kaju Katli, plated" },
  { span: "col-span-2 row-span-1", scheme: "cream", icon: "leaf", rotate: -2, label: "Behind the counter" },
  { span: "col-span-2 row-span-1", scheme: "matcha", icon: "flower", rotate: 1, label: "Café partner tasting" },
  { span: "col-span-2 row-span-1", scheme: "wine", icon: "star", rotate: -1, label: "Waitlist, sold out again" },
]

export function Gallery() {
  return (
    <PageWrapper>
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center mb-14">
          <p className="font-script text-2xl text-matcha-deep mb-1">a peek behind the counter</p>
          <h1 className="font-display italic text-4xl sm:text-6xl text-ink text-balance">Gallery</h1>
          <p className="mt-4 text-ink-soft/70">
            Nine moments from the kitchen, the drops, and the boxes — more to come as the photos roll in.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-4 sm:grid-cols-6 auto-rows-[110px] sm:auto-rows-[130px] gap-4 sm:gap-5">
            {tiles.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 24, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: t.rotate }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 5) * 0.08 }}
                whileHover={{ rotate: 0, scale: 1.035, zIndex: 10 }}
                className={`${t.span} relative rounded-2xl overflow-hidden shadow-soft cursor-pointer group`}
              >
                <Placeholder
                  scheme={t.scheme}
                  icon={t.icon}
                  rotateBlob={i * 28}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-400 flex items-end">
                  <p className="p-3 text-cream text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {t.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
