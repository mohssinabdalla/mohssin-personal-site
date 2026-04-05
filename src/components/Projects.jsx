// ─── ADD NEW PROJECTS HERE ────────────────────────────────────────────────────
// To add a new project, copy one object from the array below and fill in:
//   title, description, tags, githubUrl, liveUrl, featured (true/false)
// Set liveUrl to null if there's no live demo.
// ──────────────────────────────────────────────────────────────────────────────
const projects = [
  {
    title: 'PALMS — Personal Automated Life Management System',
    description:
      'A 20-database Notion architecture covering study, business, content, health, and finance — powered by 5 AI agents connected via MCP (Model Context Protocol). Agents read across all databases and return structured audits, priorities, and recommendations. Running live.',
    tags: ['Notion', 'MCP', 'AI Agents', 'Systems Design', 'Claude API'],
    githubUrl: null,
    liveUrl: null,
    featured: true,
  },
  // ADD NEW PROJECT CARD HERE ↓
  // {
  //   title: 'Your Project Title',
  //   description: 'What it does and why it matters.',
  //   tags: ['Tag1', 'Tag2'],
  //   githubUrl: 'https://github.com/mohssinabdalla/your-repo',
  //   liveUrl: 'https://your-live-link.com',   // or null
  //   featured: false,
  // },
]

function ProjectCard({ project }) {
  return (
    <div
      className="card group relative overflow-hidden"
      style={project.featured ? {
        border: '1px solid rgba(59,130,246,0.25)',
        background: 'linear-gradient(135deg, rgba(29,78,216,0.08), rgba(15,20,36,1))',
      } : {}}
    >
      {project.featured && (
        <span
          className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full text-blue-300 font-medium"
          style={{
            background: 'rgba(59,130,246,0.15)',
            border: '1px solid rgba(59,130,246,0.25)',
          }}
        >
          Featured
        </span>
      )}

      <h3 className="text-white font-semibold text-lg mb-3 pr-20 leading-snug">
        {project.title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full text-blue-400"
            style={{
              background: 'rgba(59,130,246,0.08)',
              border: '1px solid rgba(59,130,246,0.15)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-outline text-xs px-4 py-2 flex items-center gap-2"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        ) : (
          <span className="text-xs text-white/20 px-4 py-2">Private system</span>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs px-4 py-2 flex items-center gap-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: 'rgba(15,20,36,0.5)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What I've Built
          </h2>
          <p className="text-white/40 mt-4 text-sm">
            More coming soon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

      </div>
    </section>
  )
}
