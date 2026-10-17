import { useTranslation } from 'react-i18next'

export default function Education() {
  const { t } = useTranslation()

  const coursework = t('education.coursework', { returnObjects: true })
  const certifications = t('education.certifications', { returnObjects: true })

  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-3">{t('education.label')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t('education.title')}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Degree */}
          <div className="card md:col-span-2">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="text-slate-900 dark:text-white font-semibold text-lg leading-snug">{t('education.degree')}</h3>
                <p className="text-slate-500 dark:text-white/50 text-sm mt-1">{t('education.university')}</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full text-blue-400 font-medium whitespace-nowrap"
                style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                {t('education.gpa')}
              </span>
            </div>
            <p className="text-slate-500 dark:text-white/50 text-sm mb-5">{t('education.status')}</p>
            <p className="text-slate-900 dark:text-white text-sm font-medium mb-3">{t('education.courseworkTitle')}</p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((c) => (
                <span key={c} className="text-xs px-2.5 py-1 rounded-lg text-slate-600 dark:text-white/60"
                  style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.07)' }}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="card">
            <p className="text-blue-500 text-xs font-medium tracking-wide mb-2">{t('education.leadershipMeta')}</p>
            <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-3">{t('education.leadershipTitle')}</h3>
            <p className="text-slate-500 dark:text-white/50 text-sm leading-relaxed">{t('education.leadershipDesc')}</p>
          </div>

          {/* Certifications */}
          <div className="card md:col-span-3">
            <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-4">{t('education.certificationsTitle')}</h3>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' }} />
                  <span>
                    <span className="text-slate-900 dark:text-white font-medium">{c.name}</span>
                    <span className="text-slate-400 dark:text-white/40"> — {c.issuer}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
