import { Link } from "react-router-dom"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="bg-forest-dark text-cream-dark/70 py-10 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">
          <Logo dark className="text-base" />
        </Link>
        <p className="font-script text-xl text-blush/80">too meetha to handle</p>
        <p className="text-xs tracking-wide">
          © {new Date().getFullYear()} Matcha Mithai · pre-incubated at InfoEdge Centre, Ashoka
        </p>
      </div>
    </footer>
  )
}
