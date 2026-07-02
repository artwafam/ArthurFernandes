import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { LOCALES, type Locale } from '../types'
import { asset } from '../utils/asset'
import { NavLink } from './NavLink'
import { scrollToTop } from '../hooks/useScrollRestoration'

const NAV = [
  { pathname: '/', labelKey: 'nav.home' },
  { pathname: '/', hash: 'modeling', labelKey: 'nav.modeling' },
  { pathname: '/', hash: 'stack', labelKey: 'nav.stack' },
  { pathname: '/games', labelKey: 'nav.games' },
  { pathname: '/', hash: 'web', labelKey: 'nav.web' },
  { pathname: '/', hash: 'contact', labelKey: 'nav.contact' },
]

export function Navbar() {
  const { i18n } = useTranslation()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const setLocale = (code: Locale) => {
    i18n.changeLanguage(code)
    localStorage.setItem('locale', code)
    setLangOpen(false)
  }

  const currentLocale = LOCALES.find((l) => l.code === i18n.language) ?? LOCALES[0]

  const goHome = () => {
    setOpen(false)
    if (location.pathname === '/') {
      scrollToTop()
    }
  }

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 px-4 pt-4"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-xl px-4 py-3 md:px-6">
        <Link
          to={{ pathname: '/' }}
          onClick={goHome}
          className="font-display text-lg font-bold tracking-wider text-accent neon-text"
        >
          ARTHUR<span className="text-warm">.</span>F
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.labelKey}
              pathname={item.pathname}
              hash={item.hash}
              labelKey={item.labelKey}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className="glass-hover flex items-center gap-2 rounded-lg px-3 py-2 font-mono text-sm text-text-muted"
              aria-label="Change language"
            >
              <img src={asset(currentLocale.flag)} alt="" className="h-4 w-4 rounded-sm object-cover" />
              {currentLocale.label}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="glass absolute top-full right-0 mt-2 min-w-[120px] overflow-hidden rounded-lg"
                >
                  {LOCALES.map((locale) => (
                    <button
                      key={locale.code}
                      type="button"
                      onClick={() => setLocale(locale.code)}
                      className={`flex w-full items-center gap-2 px-4 py-2 font-mono text-sm transition-colors hover:bg-accent/10 hover:text-accent ${
                        i18n.language === locale.code ? 'text-accent' : 'text-text-muted'
                      }`}
                    >
                      <img src={asset(locale.flag)} alt="" className="h-4 w-4 rounded-sm" />
                      {locale.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-text-muted md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass mx-auto mt-2 max-w-6xl overflow-hidden rounded-xl md:hidden"
          >
            {NAV.map((item) => (
              <NavLink
                key={item.labelKey}
                pathname={item.pathname}
                hash={item.hash}
                labelKey={item.labelKey}
                className="block px-4 py-3"
                onNavigate={() => setOpen(false)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
