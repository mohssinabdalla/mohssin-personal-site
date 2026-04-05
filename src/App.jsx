import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <div className="relative" style={{ background: '#0a0d1a' }}>
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
