import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const INITIAL = { name: '', email: '', message: '' }

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-2xl mx-auto px-6">

        {/* Glow */}
        <div className="absolute left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="text-center mb-12 relative">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">{t('contact.label')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">{t('contact.title')}</h2>
          <p className="text-white/50 leading-relaxed">{t('contact.subtitle')}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative space-y-4">

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t('contact.namePlaceholder')}
                required
                className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all duration-200 placeholder-white/30"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(59,130,246,0.5)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t('contact.emailPlaceholder')}
                required
                className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all duration-200 placeholder-white/30"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(59,130,246,0.5)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t('contact.messagePlaceholder')}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all duration-200 placeholder-white/30 resize-none"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            onFocus={(e) => e.target.style.borderColor = 'rgba(59,130,246,0.5)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full btn-primary py-3 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                {t('contact.sending')}
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                {t('contact.send')}
              </>
            )}
          </button>

          {/* Feedback */}
          {status === 'success' && (
            <div className="text-center py-3 px-4 rounded-xl text-sm text-green-400"
              style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}>
              {t('contact.successMsg')}
            </div>
          )}
          {status === 'error' && (
            <div className="text-center py-3 px-4 rounded-xl text-sm text-red-400"
              style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
              {t('contact.errorMsg')}
            </div>
          )}

        </form>

        {/* Footer */}
        <div className="mt-16 relative">
          <div className="w-full h-px mb-8"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent)' }} />
          <p className="text-center text-white/20 text-sm">
            {t('contact.footer')} · {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </section>
  )
}
