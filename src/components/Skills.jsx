import { useTranslation } from 'react-i18next'

export default function Skills() {
  const { t } = useTranslation()

  const skillGroups = [
    { groupKey: 'skills.group1', skillsKey: 'skills.skills1' },
    { groupKey: 'skills.group2', skillsKey: 'skills.skills2' },
    { groupKey: 'skills.group3', skillsKey: 'skills.skills3' },
    { groupKey: 'skills.group4', skillsKey: 'skills.skills4' },
  ]

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-3">{t('skills.label')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t('skills.title')}</h2>
          <p className="text-slate-400 dark:text-white/40 mt-4 text-sm">{t('skills.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.groupKey} className="card">
              <h3 className="text-slate-900 dark:text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' }} />
                {t(group.groupKey)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t(group.skillsKey, { returnObjects: true }).map((skill) => (
                  <span key={skill} className="text-sm px-3 py-1.5 rounded-lg text-slate-600 dark:text-white/70 transition-all duration-200 hover:text-slate-900 dark:hover:text-white cursor-default"
                    style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.07)' }}>
                    {skill}
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
