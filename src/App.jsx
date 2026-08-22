import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
      </main>
    </>
  )
}

export default App