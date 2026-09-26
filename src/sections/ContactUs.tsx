import { motion } from "framer-motion"
import { phoneNumbers, contactEmails, address } from "../data/contact"
import { Leaf, Star } from "../components/Doodles"

export function ContactUs() {
  return (
    <section className="relative py-24 sm:py-32 bg-forest-dark text-cream overflow-hidden grain">
      <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 rounded-full bg-matcha/10 blur-3xl" />
      <Leaf className="absolute top-10 right-8 w-16 h-16 text-matcha/20 rotate-12" />
      <Star className="absolute bottom-16 left-10 w-10 h-10 text-blush/20 -rotate-6" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="font-script text-2xl text-blush mb-2">say hello</p>
          <h2 className="font-display italic text-4xl sm:text-5xl text-balance">Contact Us</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-10 sm:gap-8">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heavy text-sm tracking-[0.2em] text-matcha-light mb-5 uppercase">
              Phone
            </h3>
            <ul className="space-y-3">
              {phoneNumbers.map((n) => (
                <li key={n}>
                  <a
                    href={`tel:${n.replace(/\s+/g, "")}`}
                    className="text-cream/85 hover:text-blush transition-colors underline decoration-cream/20 underline-offset-4 hover:decoration-blush"
                  >
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heavy text-sm tracking-[0.2em] text-matcha-light mb-5 uppercase">
              Email
            </h3>
            <ul className="space-y-4">
              {contactEmails.map((c) => (
                <li key={c.email}>
                  <p className="text-cream text-sm font-medium">{c.name}</p>
                  {c.role && <p className="text-cream/50 text-xs mb-0.5">{c.role}</p>}
                  <a
                    href={`mailto:${c.email}`}
                    className="text-cream/80 hover:text-blush transition-colors text-sm underline decoration-cream/20 underline-offset-4 hover:decoration-blush break-all"
                  >
                    {c.email}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heavy text-sm tracking-[0.2em] text-matcha-light mb-5 uppercase">
              Find Us
            </h3>
            <address className="not-italic text-cream/85 leading-relaxed text-sm">
              {address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
