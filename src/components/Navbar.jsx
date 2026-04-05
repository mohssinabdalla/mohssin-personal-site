import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
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
        background: scrolled ? 'rgba(10, 13, 26, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : 'none',
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
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNav(e, link.id)}
              className="px-4 py-1.5 rounded-full text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* Right — lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="text-xs font-medium px-3 py-1.5 rounded-full text-white/40 hover:text-white/70 transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {isRTL ? 'EN' : 'ع'}
          </button>

          {/* CTA — small outlined */}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, 'contact')}
            className="text-sm px-4 py-1.5 rounded-full text-white/60 hover:text-white transition-all duration-200"
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile right — lang + hamburger */}
        <div className="md:hidden flex items-center gap-3">
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
