import './App.css'
import Hero from './components/Hero/Hero'
import Hype from './components/Hype/Hype'
import Artist from './components/Artist/Artist'
import Billetterie from './components/Billetterie/Billetterie'
import Acces from './components/Acces/Acces'
import FAQ from './components/FAQ/FAQ'
import CtaFinal from './components/CtaFinal/CtaFinal'

function App() {
  return (
    <main>
      <Hero />
      <Hype />
      <Artist />
      <Billetterie />
      <Acces />
      <FAQ />
      <CtaFinal />
    </main>
  )
}

export default App