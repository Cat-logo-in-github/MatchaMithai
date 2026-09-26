import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"
import { PageWrapper } from "../components/PageWrapper"
import { Placeholder } from "../components/Placeholder"
import { Star, Flower, Heart, Whisk } from "../components/Doodles"
import { quizQuestions, traitCopy, traitToSweetIds, type Trait } from "../data/quiz"
import { sweets } from "../data/recipes"

type Stage = "intro" | "quiz" | "result"

function pickWinningTrait(answers: Trait[]): Trait {
  const counts: Record<Trait, number> = { cloud: 0, classic: 0, chaotic: 0, sweetheart: 0 }
  answers.forEach((t) => (counts[t] += 1))
  const max = Math.max(...Object.values(counts))
  const winners = (Object.keys(counts) as Trait[]).filter((t) => counts[t] === max)
  return winners[Math.floor(Math.random() * winners.length)]
}

export function PickYourSweet() {
  const [stage, setStage] = useState<Stage>("intro")
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Trait[]>([])
  const [resultKey, setResultKey] = useState(0)

  const result = useMemo(() => {
    if (stage !== "result") return null
    const trait = pickWinningTrait(answers)
    const pool = traitToSweetIds[trait]
    const sweetId = pool[Math.floor(Math.random() * pool.length)]
    const sweet = sweets.find((s) => s.id === sweetId)!
    return { trait, sweet }
    // resultKey forces a fresh random pick each time we enter the result stage
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, resultKey])

  function selectOption(trait: Trait) {
    const next = [...answers, trait]
    setAnswers(next)
    if (step + 1 < quizQuestions.length) {
      setStep(step + 1)
    } else {
      setResultKey((k) => k + 1)
      setStage("result")
    }
  }

  function restart() {
    setAnswers([])
    setStep(0)
    setStage("intro")
  }

  return (
    <PageWrapper>
      <section className="relative min-h-[85vh] bg-blush/30 overflow-hidden grain flex items-center py-16">
        <Star className="absolute top-14 left-8 w-8 h-8 text-wine/30 animate-float" />
        <Heart className="absolute bottom-16 right-12 w-9 h-9 text-wine/30 animate-float" style={{ animationDelay: "1s" }} />
        <Flower className="absolute top-1/2 right-6 w-10 h-10 text-matcha-deep/20 animate-float" style={{ animationDelay: "0.5s" }} />

        <div className="max-w-2xl mx-auto px-5 sm:px-8 w-full relative z-10">
          <AnimatePresence mode="wait">
            {stage === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="font-script text-3xl text-wine mb-2">a very scientific quiz</p>
                <h1 className="font-display italic text-4xl sm:text-6xl text-ink mb-5 text-balance">
                  Pick Your Sweet
                </h1>
                <p className="text-ink-soft/75 max-w-md mx-auto mb-10 leading-relaxed">
                  Six questions about your comfort food, your aesthetic, and
                  your 11pm energy. At the end, we'll dramatically reveal the
                  mithai that matches your whole personality.
                </p>
                <motion.button
                  whileHover={{ scale: 1.04, rotate: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setStage("quiz")}
                  className="px-9 py-4 rounded-full bg-wine text-cream font-semibold tracking-wide shadow-soft"
                >
                  Start the Quiz →
                </motion.button>
              </motion.div>
            )}

            {stage === "quiz" && (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center justify-center gap-2 mb-8">
                  {quizQuestions.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === step ? "w-8 bg-wine" : i < step ? "w-4 bg-wine/50" : "w-4 bg-wine/15"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-center text-xs uppercase tracking-widest text-wine/60 mb-2">
                  Question {step + 1} of {quizQuestions.length}
                  {quizQuestions[step].sub ? ` · ${quizQuestions[step].sub}` : ""}
                </p>
                <h2 className="font-display italic text-2xl sm:text-3xl text-ink text-center mb-9 text-balance">
                  {quizQuestions[step].prompt}
                </h2>

                <div className="grid gap-3.5">
                  {quizQuestions[step].options.map((opt, i) => (
                    <motion.button
                      key={opt.text}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      whileHover={{ scale: 1.015, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => selectOption(opt.trait)}
                      className="text-left px-6 py-4 rounded-2xl bg-paper hover:bg-cream-dark border border-ink/10 hover:border-wine/40 transition-colors shadow-sm"
                    >
                      {opt.text}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {stage === "result" && result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <motion.div
                  initial={{ rotate: -8 }}
                  animate={{ rotate: [0, 6, -4, 0] }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-block mb-4"
                >
                  <Whisk className="w-8 h-16 text-wine mx-auto" />
                </motion.div>
                <p className="font-script text-2xl text-wine mb-1">the results are in —</p>
                <h2 className="font-heavy text-sm uppercase tracking-[0.3em] text-ink-soft/60 mb-3">
                  You are {traitCopy[result.trait].label}
                </h2>
                <p className="max-w-md mx-auto text-ink-soft/70 text-sm mb-8 leading-relaxed">
                  {traitCopy[result.trait].description}
                </p>

                <div className="bg-paper rounded-[2rem] shadow-soft p-7 sm:p-9 max-w-md mx-auto">
                  <Placeholder
                    scheme="matcha"
                    icon="flower"
                    className="h-48 rounded-2xl mb-5"
                  />
                  <p className="text-xs uppercase tracking-widest text-wine mb-1">Your sweet is</p>
                  <h3 className="font-display italic text-3xl text-forest mb-2">{result.sweet.name}</h3>
                  <p className="text-xs uppercase tracking-wide text-ink-soft/50 mb-4">{result.sweet.serving}</p>
                  <p className="text-sm text-ink-soft/75 italic leading-relaxed mb-5">{result.sweet.blurb}</p>
                  <ul className="text-xs text-left grid grid-cols-2 gap-x-3 gap-y-1 text-ink-soft/70 border-t border-ink/10 pt-4">
                    {result.sweet.ingredients.map((ing) => (
                      <li key={ing.name} className="flex justify-between gap-2">
                        <span className="truncate">{ing.name}</span>
                        <span className="opacity-60 shrink-0">{ing.amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
                  <button
                    onClick={restart}
                    className="px-7 py-3.5 rounded-full border border-wine/30 text-wine font-medium hover:bg-wine hover:text-cream transition-colors"
                  >
                    Retake the Quiz
                  </button>
                  <Link
                    to="/catalogue"
                    className="px-7 py-3.5 rounded-full bg-forest text-cream font-medium hover:bg-forest-light transition-colors shadow-soft"
                  >
                    See the Full Catalogue
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageWrapper>
  )
}
