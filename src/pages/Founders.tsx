import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { PageWrapper } from "../components/PageWrapper"
import { Placeholder } from "../components/Placeholder"
import { Star, Flower, Heart } from "../components/Doodles"
import { founders } from "../data/founders"

const stickers = [Star, Flower, Heart, Star]
const folderRotations = [-4, 3, -2, 4]
const folderColors = ["bg-[#f2e2c4]", "bg-[#e6ecd2]", "bg-[#f2e2c4]", "bg-[#e6ecd2]"]

export function Founders() {
  const [openId, setOpenId] = useState<string | null>(null)
  const active = founders.find((f) => f.id === openId) ?? null

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <PageWrapper>
      <section className="relative min-h-[80vh] bg-matcha-light/20 py-20 sm:py-28 overflow-hidden grain">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-6">
            <p className="font-script text-2xl text-matcha-deep mb-1">find out who's behind the biz</p>
            <h1 className="font-display italic text-4xl sm:text-6xl text-ink text-balance">
              Meet the Founders
            </h1>
            <p className="mt-4 text-ink-soft/70 max-w-md mx-auto">
              An old archive of a filing cabinet — tap a folder to pull out a profile.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-14">
            {founders.map((f, i) => {
              const Sticker = stickers[i % stickers.length]
              return (
                <motion.button
                  key={f.id}
                  type="button"
                  onClick={() => setOpenId(f.id)}
                  initial={{ opacity: 0, y: 30, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: folderRotations[i] }}
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ rotate: 0, y: -10, scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-wine rounded-2xl"
                  aria-label={`Open ${f.name}'s profile`}
                >
                  {/* folder tab */}
                  <div className={`absolute -top-3 left-5 w-16 h-4 rounded-t-md ${folderColors[i]} border border-black/5`} />
                  <div
                    className={`relative rounded-2xl rounded-tl-none ${folderColors[i]} shadow-soft aspect-[3/4] p-4 flex flex-col justify-between border border-black/5`}
                  >
                    <Sticker className="w-7 h-7 text-wine/70 self-end -mt-1 -mr-1" />
                    <div className="flex-1 flex items-center justify-center">
                      <span className="font-heavy text-3xl sm:text-4xl text-forest/80">
                        {f.name.split(" ")[0][0]}
                        {f.name.split(" ")[1]?.[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-display italic text-lg text-ink leading-tight">
                        {f.name.split(" ")[0]}
                      </p>
                      <p className="text-[11px] uppercase tracking-wider text-ink-soft/50 mt-1">
                        Open file →
                      </p>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenId(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${active.name} profile`}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.85, rotateX: -12, y: 40 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-paper rounded-[2rem] shadow-soft max-w-2xl w-full max-h-[85vh] overflow-y-auto p-7 sm:p-10 grid sm:grid-cols-[220px_1fr] gap-7"
            >
              <button
                type="button"
                onClick={() => setOpenId(null)}
                aria-label="Close profile"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream-dark hover:bg-blush flex items-center justify-center text-ink transition-colors"
              >
                ✕
              </button>

              <Placeholder
                scheme={active.id === "manya" ? "wine" : "matcha"}
                icon="flower"
                label={active.name}
                className="rounded-2xl aspect-square sm:aspect-auto sm:h-full"
              />

              <div>
                <h2 className="font-display italic text-3xl text-forest mb-1">{active.name}</h2>
                <p className="text-sm uppercase tracking-widest text-wine mb-5">{active.role}</p>
                <p className={`leading-relaxed text-ink-soft/85 ${active.placeholder ? "italic opacity-70" : ""}`}>
                  {active.bio}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  )
}
