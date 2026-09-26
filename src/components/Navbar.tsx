import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Logo } from "./Logo"

const links = [
  { to: "/", label: "Home" },
  { to: "/founders", label: "Meet the Founders" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/pick-your-sweet", label: "Pick Your Sweet" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/gallery", label: "Gallery" },
  { to: "/order", label: "Order Now" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_2px_20px_-4px_rgba(33,28,20,0.15)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <NavLink to="/" className="text-lg sm:text-xl tracking-tight" onClick={() => setOpen(false)}>
          <Logo />
        </NavLink>

        <ul className="hidden lg:flex items-center gap-1 font-sans text-[13px] tracking-wide uppercase">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `relative px-3 py-2 transition-colors duration-300 ${
                    isActive ? "text-wine" : "text-ink-soft hover:text-forest"
                  } group`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={`absolute left-3 right-3 -bottom-0.5 h-[1.5px] bg-current origin-left transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden relative z-50 w-9 h-9 flex flex-col justify-center items-center gap-[5px]"
        >
          <span
            className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 bg-forest text-cream lg:hidden"
          >
            <ul className="h-full flex flex-col items-center justify-center gap-7 font-display italic text-3xl">
              {links.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <NavLink to={l.to} onClick={() => setOpen(false)} className="hover:text-blush transition-colors">
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
