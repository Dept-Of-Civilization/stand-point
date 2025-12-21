import './App.css'
import About from './components/About'
import ByLaws from './components/Bylaws'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Prizes from './components/Prizes'
import Rounds from './components/Rounds'

function App() {
  return (
    <main>
          <Hero />
          <About />
          <Rounds />
          <Prizes />
          <ByLaws />
          <Footer />
    </main>

  )
}

export default App
