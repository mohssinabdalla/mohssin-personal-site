const skillGroups = [
  {
    category: 'Notion & Productivity',
    skills: ['Notion', 'Database Design', 'Template Building', 'Workflow Design', 'Notion API'],
  },
  {
    category: 'AI & Automation',
    skills: ['MCP (Model Context Protocol)', 'Multi-Agent Systems', 'Claude API', 'Prompt Engineering', 'AI Integration'],
  },
  {
    category: 'Programming',
    skills: ['Python', 'JavaScript', 'React', 'HTML/CSS', 'Git'],
  },
  {
    category: 'Languages',
    skills: ['Arabic (Native)', 'English (Professional)', 'Learning: Malay'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Tools & Knowledge
          </h2>
          <p className="text-white/40 mt-4 text-sm">
            The stack behind the systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="card">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' }}
                />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg text-white/70 transition-all duration-200 hover:text-white cursor-default"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
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
