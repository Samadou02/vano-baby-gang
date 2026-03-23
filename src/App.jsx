import './App.css'
import Hero from './components/Hero/Hero'
import FloatingCTA from './components/FloatingCTA/FloatingCTA'
import React, { Suspense, lazy } from 'react'

// lazy pour les sections lourdes
const Hype = lazy(() => import('./components/Hype/Hype'))
const Artist = lazy(() => import('./components/Artist/Artist'))
const Billetterie = lazy(() => import('./components/Billetterie/Billetterie'))
const Acces = lazy(() => import('./components/Acces/Acces'))
const FAQ = lazy(() => import('./components/FAQ/FAQ'))
const CtaFinal = lazy(() => import('./components/CtaFinal/CtaFinal'))

function App() {
  return (
    <main>
      <Hero />

      <Suspense fallback={<div>Loading section...</div>}>
        <Hype />
        <Artist />
        <Billetterie />
        <Acces />
        <FAQ />
        <CtaFinal />
      </Suspense>

      <FloatingCTA />
    </main>
  )
}

export default App