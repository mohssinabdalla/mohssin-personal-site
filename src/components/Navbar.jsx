import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useThemeContext } from '../App'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useThemeContext()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isRTL = i18n.language === 'ar'

  const links = [
    { key: 'nav.about', id: 'about' },
    { key: 'nav.whatIDo', id: 'what-i-do' },
    { key: 'nav.skills', id: 'skills' },
    { key: 'nav.projects', id: 'projects' },
    { key: 'nav.contact', id: 'contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? theme === 'dark' ? 'rgba(10,13,26,0.92)' : 'rgba(255,255,255,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled
          ? theme === 'dark' ? '1px solid rgba(255,255,255,0.04)' : '1px solid rgba(0,0,0,0.06)'
          : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo — small, subtle */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white/70 hover:text-white transition-colors"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          M
        </a>

        {/* Desktop — pill nav container */}
        <div
          className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full"
          style={{
            background: theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
            border: theme === 'dark' ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.07)',
          }}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNav(e, link.id)}
              className="px-4 py-1.5 rounded-full text-sm text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* Right — lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 dark:text-white/40 hover:text-white/70 transition-all duration-200"
            style={{
              background: 'rgba(128,128,128,0.08)',
              border: '1px solid rgba(128,128,128,0.12)',
            }}
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M18.364 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="text-xs font-medium px-3 py-1.5 rounded-full text-slate-400 dark:text-white/40 hover:text-slate-700 dark:hover:text-white/70 transition-all duration-200"
            style={{
              background: theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
              border: theme === 'dark' ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.07)',
            }}
          >
            {isRTL ? 'EN' : 'ع'}
          </button>

          {/* CTA — small outlined */}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, 'contact')}
            className="text-sm px-4 py-1.5 rounded-full text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
            style={{
              border: theme === 'dark' ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.12)',
            }}
          >
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile right — theme + lang + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white/70 transition-all"
            style={{ background: 'rgba(128,128,128,0.08)', border: '1px solid rgba(128,128,128,0.12)' }}
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M18.364 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <button
            onClick={toggleLang}
            className="text-xs font-medium px-3 py-1.5 rounded-full text-white/40 hover:text-white/70 transition-all"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {isRTL ? 'EN' : 'ع'}
          </button>
          <button
            className="text-white/60 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-1"
          style={{ background: 'rgba(10, 13, 26, 0.98)', borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNav(e, link.id)}
              className="py-3 text-sm text-white/50 hover:text-white transition-colors border-b border-white/4"
            >
              {t(link.key)}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, 'contact')}
            className="mt-3 text-center text-sm py-2.5 rounded-full text-white/60 hover:text-white transition-all"
            style={{ border: '1px solid rgba(255,255,255,0.12)' }}
          >
            {t('nav.cta')}
          </a>
        </div>
      )}
    </nav>
  )
}
