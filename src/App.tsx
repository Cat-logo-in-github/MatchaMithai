import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, MotionConfig } from "framer-motion"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ScrollToTop } from "./components/ScrollToTop"
import { Landing } from "./pages/Landing"
import { Founders } from "./pages/Founders"
import { Catalogue } from "./pages/Catalogue"
import { OrderNow } from "./pages/OrderNow"
import { PickYourSweet } from "./pages/PickYourSweet"
import { Testimonials } from "./pages/Testimonials"
import { Gallery } from "./pages/Gallery"

function App() {
  const location = useLocation()

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-cream">
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/order" element={<OrderNow />} />
            <Route path="/pick-your-sweet" element={<PickYourSweet />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
