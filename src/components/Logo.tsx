export function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 font-heavy leading-none ${className}`}>
      <span className={dark ? "text-cream" : "text-forest"}>MATCHA</span>
      <span className={dark ? "text-blush" : "text-wine"}>MITHAI</span>
    </span>
  )
}
