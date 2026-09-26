export type Trait = "cloud" | "classic" | "chaotic" | "sweetheart"

export type QuizOption = {
  text: string
  trait: Trait
}

export type QuizQuestion = {
  id: string
  prompt: string
  sub?: string
  options: QuizOption[]
}

export const traitCopy: Record<
  Trait,
  { label: string; description: string }
> = {
  cloud: {
    label: "The Cloud",
    description:
      "Soft-spoken, plant-mom energy, three tabs open and all of them are calming. You dissolve tension the way you dissolve into a nap.",
  },
  classic: {
    label: "The Classic",
    description:
      "You rewatch the same comfort show for the eleventh time and mean it. Heritage over hype, always — but you'll never say no to a twist.",
  },
  chaotic: {
    label: "The Main Character",
    description:
      "Soundtrack playing only in your head, main-character walk fully engaged. You showed up two hours late and somehow it worked out fine.",
  },
  sweetheart: {
    label: "The Sweetheart",
    description:
      "Soft launch of a soft heart. You send 'thinking of you' texts unprompted and cry at the good kind of movies.",
  },
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    prompt: "It's 11pm on a Tuesday. Where are we finding you?",
    sub: "be honest",
    options: [
      { text: "Repotting a plant I definitely didn't need", trait: "cloud" },
      { text: "Rewatching the same comfort movie, again", trait: "classic" },
      { text: "Convincing three friends to get midnight maggi", trait: "chaotic" },
      { text: "On a call that turned into a two-hour heart-to-heart", trait: "sweetheart" },
    ],
  },
  {
    id: "q2",
    prompt: "Pick a fictional energy to walk into a room with.",
    options: [
      { text: "Kiki (Kiki's Delivery Service) — quiet, a little wistful, deeply capable", trait: "cloud" },
      { text: "Ted Lasso — corny, warm, been doing this a while", trait: "classic" },
      { text: "Euphoria's hallway entrance, slow-mo and all", trait: "chaotic" },
      { text: "Anne of Green Gables — talks too much, means every word", trait: "sweetheart" },
    ],
  },
  {
    id: "q3",
    prompt: "Your comfort food order, no thinking required:",
    options: [
      { text: "Something milky, something soft, minimal chewing required", trait: "cloud" },
      { text: "Whatever your dadi/nani used to make, exactly like that", trait: "classic" },
      { text: "Whatever's most photogenic, obviously", trait: "chaotic" },
      { text: "Anything shaped like a heart or shared off one plate", trait: "sweetheart" },
    ],
  },
  {
    id: "q4",
    prompt: "The aux is yours. What's playing?",
    options: [
      { text: "Lo-fi, rain sounds, something you can't quite name", trait: "cloud" },
      { text: "The song your parents played on every road trip", trait: "classic" },
      { text: "A pop girl's most unhinged bridge, at full volume", trait: "chaotic" },
      { text: "A love song you're definitely dedicating to someone", trait: "sweetheart" },
    ],
  },
  {
    id: "q5",
    prompt: "A weekend with zero plans. Your move?",
    options: [
      { text: "Do genuinely nothing and feel great about it", trait: "cloud" },
      { text: "Do the one tradition you do every single weekend", trait: "classic" },
      { text: "Spontaneously end up in a different city by 6pm", trait: "chaotic" },
      { text: "Plan a whole surprise for someone you love", trait: "sweetheart" },
    ],
  },
  {
    id: "q6",
    prompt: "Last one — pick an aesthetic to live inside forever.",
    options: [
      { text: "Foggy window, oversized hoodie, houseplants everywhere", trait: "cloud" },
      { text: "Sepia-toned family photo, gold jewellery, old songs", trait: "classic" },
      { text: "Confetti, sequins, a slightly too-loud entrance", trait: "chaotic" },
      { text: "Fairy lights, handwritten notes, a shared dessert", trait: "sweetheart" },
    ],
  },
]

// Curated pools: every trait maps to a small set of catalogue sweets
// (by id, matching src/data/recipes.ts) so the reveal can pick one at random
// within the right personality — rewarding, not deterministic.
export const traitToSweetIds: Record<Trait, number[]> = {
  cloud: [1, 3, 20], // Cloud Mousse, Fruit Pudding, White Choc Truffle
  classic: [8, 10, 12, 17], // Kaju Katli, Nankhatai, Peda, Kheer
  chaotic: [5, 15, 18], // Choco Bark, Mini Ghewar, Jalebi
  sweetheart: [4, 19, 2], // White Choc Strawberry, Strawberry Cream Bite, Misu
}
