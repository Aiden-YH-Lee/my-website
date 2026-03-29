import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Credentials from './components/Credentials'
import Skills from './components/Skills'
import Contact from './components/Contact'
import LPPlayer from './components/LPPlayer'
import CustomCursor from './components/CustomCursor'

const App = () => {
  return (
    <div className="overflow-x-hidden bg-base text-cream font-body antialiased selection:bg-amber-dim selection:text-amber">
      <CustomCursor />
      <LPPlayer />
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Credentials />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}

export default App
