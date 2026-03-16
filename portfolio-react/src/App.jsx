import './App.css'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { TechForge } from './components/TechForge'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FloatingActions } from './components/FloatingActions'
import { mockData } from './data/mockData'

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100">
      <Nav
        name={mockData.nav.name}
        links={mockData.nav.links}
        socials={mockData.nav.socials}
      />
      <Hero data={mockData.hero} />
      <main className="relative z-10">
        <Experience data={mockData.experience} />
        <Projects data={mockData.projects} />
        <TechForge />
        <Contact data={mockData.contact} />
      </main>
      <Footer data={mockData.footer} />
      <FloatingActions />
    </div>
  )
}

export default App
