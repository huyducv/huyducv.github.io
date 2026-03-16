import './App.css'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { mockData } from './data/mockData'

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100">      <Nav links={mockData.nav.links} />      <Hero data={mockData.hero} />
      <main className="relative z-10">
        <About data={mockData.about} />
        <Experience data={mockData.experience} />
        <Projects data={mockData.projects} />
        <Contact data={mockData.contact} />
      </main>
      <Footer />
    </div>
  )
}

export default App