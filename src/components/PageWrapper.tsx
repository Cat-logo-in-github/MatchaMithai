import type { ReactNode } from "react"
import { motion } from "framer-motion"

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="pt-[76px] min-h-[70vh]"
    >
      {children}
    </motion.main>
  )
}
