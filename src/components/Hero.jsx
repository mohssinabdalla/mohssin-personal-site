import { useTranslation, Trans } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(29,78,216,0.08) 0%, transparent 70%)', filter: 'blur(30px)' }} />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Text */}
          <div className="flex-1">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-6">
              {t('hero.greeting')}
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <Trans i18nKey="hero.name">
                My name is <span className="text-gradient">Mohssin.</span>
              </Trans>
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-4">
              <Trans
                i18nKey="hero.tagline"
                components={{
                  strong: <span className="text-white font-semibold" />,
                  blue: <span className="text-blue-400" />,
                }}
              />
            </p>

            <p className="text-white/50 text-base leading-relaxed mb-10">
              {t('hero.sub')}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="/cv-placeholder.pdf" className="btn-primary">
                {t('hero.downloadCV')}
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-outline"
              >
                {t('hero.getInTouch')}
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://github.com/mohssinabdalla" target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden relative"
              style={{
                border: '1px solid rgba(59,130,246,0.2)',
                boxShadow: '0 0 60px rgba(59,130,246,0.15)',
              }}>
              <img
                src="/mohssin.jpg"
                alt="Mohssin"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full"
              style={{ background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' }} />
            <div className="absolute -bottom-2 -left-2 w-5 h-5 rounded-full"
              style={{ background: 'rgba(96,165,250,0.4)' }} />
          </div>

        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center gap-2 text-white/20 animate-bounce">
            <span className="text-xs tracking-widest">{t('hero.scrollHint')}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
