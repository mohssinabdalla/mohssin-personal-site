import { useEffect, createContext, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import useTheme from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './index.css'

export const ThemeContext = createContext({})
export const useThemeContext = () => useContext(ThemeContext)

function App() {
  const { i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.dir = dir
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="relative bg-white dark:bg-[#0a0d1a] transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
