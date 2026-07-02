import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CyberBackground } from './components/CyberBackground'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { GamesPage } from './pages/GamesPage'
import { CrocotilePage } from './pages/CrocotilePage'
import { useScrollRestoration } from './hooks/useScrollRestoration'
import { GitHubProvider } from './context/GitHubContext'

function AnimatedRoutes() {
  const location = useLocation()
  useScrollRestoration()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/crocotile" element={<CrocotilePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/ArthurFernandes">
      <GitHubProvider>
        <div className="scanlines relative min-h-screen">
          <CyberBackground />
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </GitHubProvider>
    </BrowserRouter>
  )
}
