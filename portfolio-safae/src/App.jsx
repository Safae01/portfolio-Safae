import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { ParticleBackground } from "./components/ParticleBackground"
import { ScrollProgress } from "./components/ScrollProgress"

function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <ParticleBackground />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
