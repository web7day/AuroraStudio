import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import Process from './components/Process'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div id="top">
      <a href="#main-content" className="skip-link">
        Pāriet uz galveno saturu
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Process />
        <Statistics />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App