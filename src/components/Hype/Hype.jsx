import './Hype.css'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import vanoVd from '../../assets/videos/vano-vd.mp4'
import vano4 from '../../assets/images/vano4.jpg'
import vano5 from '../../assets/images/vano5.jpg'

function Hype() {
  const ref = useRef(null)
  const videoRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // 4 phases : 0–0.25 / 0.25–0.5 / 0.5–0.75 / 0.75–1
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      if (v < 0.25) setPhase(0)
      else if (v < 0.5) setPhase(1)
      else if (v < 0.75) setPhase(2)
      else setPhase(3)
    })
  }, [scrollYProgress])

  // Forcer la lecture de la vidéo
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  const blocks = [
    // Phase 0 — Intro
    <motion.div
      key="intro"
      className="hype__content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Ils savent.</h2>
    </motion.div>,

    // Phase 1 — Texte
    <motion.div
      key="text"
      className="hype__content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <p>Ce genre de moment…</p>
      <p>ça ne se rate pas.</p>
      <p className="gold">Le 04 Avril.</p>
    </motion.div>,

    // Phase 2 — Vidéo
    <motion.div
      key="video"
      className="hype__content"
      initial={{ opacity: 0, scale: 0.93 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hype__video-container">
        <video
          ref={videoRef}
          src={vanoVd}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </motion.div>,

    // Phase 3 — Preuve sociale
    <motion.div
      key="proof"
      className="hype__content hype__proof"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <img src={vano4} alt="" />
        <p>Ils étaient là.</p>
      </div>
      <div>
        <img src={vano5} alt="" />
        <p>Ils s'en souviennent encore.</p>
      </div>
    </motion.div>,
  ]

  return (
    <section className="hype" ref={ref}>

      {/* ZONE STICKY — un seul bloc qui change de contenu */}
      <div className="hype__sticky">
        <AnimatePresence mode="wait">
          {blocks[phase]}
        </AnimatePresence>
      </div>

      {/* FINAL — hors sticky */}
      <div className="hype__final">
        <h3>Et toi ?</h3>
        <p>
          Tu regardes l'histoire…
          <br />
          ou tu fais partie du moment ?
        </p>
      </div>

    </section>
  )
}

export default Hype