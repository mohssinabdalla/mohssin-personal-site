import { useTranslation, Trans } from 'react-i18next'

const pillars = [
  { icon: '🧠', titleKey: 'about.pillar1Title', descKey: 'about.pillar1Desc' },
  { icon: '⚡', titleKey: 'about.pillar2Title', descKey: 'about.pillar2Desc' },
  { icon: '🔗', titleKey: 'about.pillar3Title', descKey: 'about.pillar3Desc' },
]

export default function About() {
  const { t } = useTranslation()

  const stats = [
    { valueKey: 'about.stat1Value', labelKey: 'about.stat1Label' },
    { valueKey: 'about.stat2Value', labelKey: 'about.stat2Label' },
    { valueKey: 'about.stat3Value', labelKey: 'about.stat3Label' },
  ]

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-3">{t('about.label')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t('about.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-5 text-slate-500 dark:text-white/60 leading-relaxed">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
            <p>
              <Trans
                i18nKey="about.p4"
                components={{ strong: <span className="text-white font-semibold" /> }}
              />
            </p>
            <p>{t('about.p5')}</p>
          </div>

          <div className="space-y-4">
            {pillars.map((p) => (
              <div key={p.titleKey} className="card flex gap-4 items-start">
                <span className="text-2xl mt-0.5">{p.icon}</span>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-semibold mb-1">{t(p.titleKey)}</h3>
                  <p className="text-slate-500 dark:text-white/50 text-sm leading-relaxed">{t(p.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 rounded-2xl p-8"
          style={{
            background: 'linear-gradient(135deg, rgba(29,78,216,0.1), rgba(96,165,250,0.05))',
            border: '1px solid rgba(59,130,246,0.15)',
          }}>
          {stats.map((s) => (
            <div key={s.labelKey} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">{t(s.valueKey)}</p>
              <p className="text-slate-500 dark:text-white/50 text-sm">{t(s.labelKey)}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
