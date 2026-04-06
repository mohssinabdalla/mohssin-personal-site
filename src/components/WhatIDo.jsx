import { useTranslation } from 'react-i18next'

const services = [
  {
    titleKey: 'whatIDo.service1Title',
    descKey: 'whatIDo.service1Desc',
    tags: ['Databases', 'Relations', 'Templates'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    titleKey: 'whatIDo.service2Title',
    descKey: 'whatIDo.service2Desc',
    tags: ['MCP', 'API', 'Automation'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
  },
  {
    titleKey: 'whatIDo.service3Title',
    descKey: 'whatIDo.service3Desc',
    tags: ['Triggers', 'Pipelines', 'Sync'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    titleKey: 'whatIDo.service4Title',
    descKey: 'whatIDo.service4Desc',
    tags: ['PALMS', 'Life Design', 'Multi-domain'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
]

export default function WhatIDo() {
  const { t } = useTranslation()

  return (
    <section id="what-i-do" className="py-24 bg-slate-50 dark:bg-[rgba(15,20,36,0.5)]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-3">{t('whatIDo.label')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t('whatIDo.title')}</h2>
          <p className="text-slate-400 dark:text-white/40 mt-4 max-w-xl mx-auto text-sm leading-relaxed">{t('whatIDo.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.titleKey} className="card group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-blue-400 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                {s.icon}
              </div>
              <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-2">{t(s.titleKey)}</h3>
              <p className="text-slate-500 dark:text-white/50 text-sm leading-relaxed mb-4">{t(s.descKey)}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full text-blue-400"
                    style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
