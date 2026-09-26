import { Blob, Leaf, Star, Flower } from "./Doodles"

type Scheme = "matcha" | "cream" | "wine" | "blush" | "forest"

const schemes: Record<Scheme, { bg: string; blob: string; fg: string }> = {
  matcha: { bg: "bg-matcha-light/40", blob: "text-matcha-deep/70", fg: "text-forest" },
  cream: { bg: "bg-cream-dark", blob: "text-matcha/50", fg: "text-ink-soft" },
  wine: { bg: "bg-wine/90", blob: "text-wine-light/70", fg: "text-cream" },
  blush: { bg: "bg-blush", blob: "text-blush-deep/60", fg: "text-wine" },
  forest: { bg: "bg-forest", blob: "text-forest-light/70", fg: "text-cream" },
}

const icons = { leaf: Leaf, star: Star, flower: Flower }

export function Placeholder({
  scheme = "cream",
  label,
  icon = "leaf",
  className = "",
  rotateBlob = 0,
}: {
  scheme?: Scheme
  label?: string
  icon?: keyof typeof icons
  className?: string
  rotateBlob?: number
}) {
  const s = schemes[scheme]
  const Icon = icons[icon]
  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${s.bg} ${className}`}
    >
      <Blob
        className={`absolute w-[140%] h-[140%] ${s.blob}`}
        style={{ transform: `rotate(${rotateBlob}deg)` }}
      />
      <div className={`relative z-10 flex flex-col items-center gap-2 ${s.fg}`}>
        <Icon className="w-9 h-9 opacity-80" />
        {label && (
          <span className="font-display italic text-sm text-center px-3 opacity-80">
            {label}
          </span>
        )}
      </div>
    </div>
  )
}
