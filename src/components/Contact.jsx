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

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 relative">
          <a href="mailto:placeholder@email.com" className="btn-primary flex items-center gap-2 justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t('contact.email')}
          </a>
          <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noreferrer"
            className="btn-outline flex items-center gap-2 justify-center">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            {t('contact.linkedin')}
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
