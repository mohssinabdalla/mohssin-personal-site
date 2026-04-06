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
            <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-6">
              {t('hero.greeting')}
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-slate-900 dark:text-white">
              <Trans i18nKey="hero.name">
                My name is <span className="text-gradient">Mohssin.</span>
              </Trans>
            </h1>

            <p className="text-slate-600 dark:text-white/70 text-lg md:text-xl leading-relaxed mb-4">
              <Trans
                i18nKey="hero.tagline"
                components={{
                  strong: <span className="text-white font-semibold" />,
                  blue: <span className="text-blue-400" />,
                }}
              />
            </p>

            <p className="text-slate-500 dark:text-white/50 text-base leading-relaxed mb-10">
              {t('hero.sub')}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary"
              >
                {t('hero.getInTouch')}
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
          <div className="flex flex-col items-center gap-2 text-slate-300 dark:text-white/20 animate-bounce">
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
