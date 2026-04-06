import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <div className="absolute left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3 relative">{t('contact.label')}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 relative">{t('contact.title')}</h2>
        <p className="text-white/50 leading-relaxed mb-10 relative">{t('contact.subtitle')}</p>

        <div className="flex justify-center mb-16 relative">
          <a href="mailto:mohssinabadalla1@gmail.com" className="btn-primary flex items-center gap-2 justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t('contact.email')}
          </a>
        </div>

        <div className="w-full h-px mb-10 relative"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent)' }} />

        <p className="text-white/20 text-sm relative">
          {t('contact.footer')} · {new Date().getFullYear()}
        </p>

      </div>
    </section>
  )
}
