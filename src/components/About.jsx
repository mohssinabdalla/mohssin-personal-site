const stats = [
  { value: '20+', label: 'Notion Databases' },
  { value: '5+', label: 'AI Agents Built' },
  { value: '3+', label: 'Years with Notion' },
]

const pillars = [
  {
    icon: '🧠',
    title: 'Systems Thinking',
    desc: 'I don\'t just use tools — I design the structure that makes them work together.',
  },
  {
    icon: '⚡',
    title: 'AI-First Approach',
    desc: 'Every system I build is designed for AI to operate within it, not just alongside it.',
  },
  {
    icon: '🔗',
    title: 'Integration Mindset',
    desc: 'The real power isn\'t in any single tool. It\'s in how they connect.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The Story Behind the Systems
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* Story */}
          <div className="space-y-5 text-white/60 leading-relaxed">
            <p>
              In 2023, a war started in Sudan. I lost almost everything — but I didn't lose my direction.
              That moment made one thing clear: I needed to build something that could move with me,
              no matter where I ended up.
            </p>
            <p>
              I ended up in Malaysia, studying Computer Science & AI at Asia Pacific University.
              And I started building.
            </p>
            <p>
              Every system I wanted to create, I found it was possible in Notion. So I started
              reverse-engineering templates — understanding how they were structured, why they
              worked, what made them break. Days became hours. Then, once I combined that
              knowledge with AI? Hours became minutes.
            </p>
            <p>
              That process led me to{' '}
              <span className="text-white font-semibold">PALMS</span> — my Personal Automated
              Life Management System. Twenty interconnected databases, five AI agents, and a
              direct communication channel between AI and Notion via MCP. It's not a project.
              It's running right now.
            </p>
            <p>
              I'm a CS & AI student who builds real systems. And I want to help others build theirs.
            </p>
          </div>

          {/* Pillars */}
          <div className="space-y-4">
            {pillars.map((p) => (
              <div key={p.title} className="card flex gap-4 items-start">
                <span className="text-2xl mt-0.5">{p.icon}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-6 rounded-2xl p-8"
          style={{
            background: 'linear-gradient(135deg, rgba(29,78,216,0.1), rgba(96,165,250,0.05))',
            border: '1px solid rgba(59,130,246,0.15)',
          }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">{s.value}</p>
              <p className="text-white/50 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
