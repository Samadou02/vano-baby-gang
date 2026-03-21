import './Hype.css'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import vanoVd from '../../assets/videos/vano-vd.mp4'
import crowd from '../../assets/images/crowd.webp'
import lights from '../../assets/images/lights.webp'
import hype1 from '../../assets/images/hype1.webp'
import hype2 from '../../assets/images/hype2.webp'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const PROOF_ITEMS = [
  { src: crowd, alt: 'Le Gang en concert', big: 'Le Gang a toujours répondu présent.', sub: 'Des milliers de voix. Une seule scène.' },
  { src: hype1, alt: 'Vano Baby sur scène', big: 'Une présence qui commande.', sub: 'Dès qu\'il entre, tout s\'arrête.' },
  { src: hype2, alt: 'Vano Baby en performance', big: 'Chaque show, une promesse.', sub: 'Tenue. Sans exception.' },
  { src: lights, alt: 'Concert de Vano Baby', big: 'Les derniers shows sont partis vite.', sub: 'Ne rate pas celui-là.' },
]

function Hype() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  const targetDate = new Date('2026-04-04T16:00:00')
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n) => String(Math.max(0, n)).padStart(2, '0')
  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)))
  const hours = Math.max(0, Math.floor((timeLeft / (1000 * 60 * 60)) % 24))
  const minutes = Math.max(0, Math.floor((timeLeft / (1000 * 60)) % 60))
  const seconds = Math.max(0, Math.floor((timeLeft / 1000) % 60))

  return (
    <div className="hype">

      {/* ── PHASE 1 — HOOK ── */}
      <div className="hype__phase">
        <motion.div
          className="hype__phase-inner"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p className="hype__overline" variants={fadeUp}>
            Vano Baby · 04 Avril 2026
          </motion.p>
          <motion.h2 className="hype__headline" variants={fadeUp}>
            Une nuit.<br />Dix ans.
          </motion.h2>
          <motion.p className="hype__sub" variants={fadeUp}>
            Pas un concert de plus.<br />
            Un moment qui ne se répète pas.
          </motion.p>
        </motion.div>
      </div>

      {/* ── PHASE 2 — TENSION ── */}
      <div className="hype__phase hype__phase--dark">
        <motion.div
          className="hype__phase-inner"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p className="hype__overline" variants={fadeUp}>
            Majestic de Wologuèdè
          </motion.p>
          <motion.h2 className="hype__headline" variants={fadeUp}>
            Vano Baby<br />ne fête pas<br />deux fois.
          </motion.h2>
          <motion.p className="hype__sub hype__sub--gold" variants={fadeUp}>
            Le Gang a une seule chance d'être là.
          </motion.p>
          <motion.p className="hype__sub" variants={fadeUp}>
            10 ans de carrière.<br />
            10 ans de singles qui ont fait le tour du Bénin.<br />
            10 ans à résister, transformer, dominer.<br />
            Une seule nuit pour tout célébrer.
          </motion.p>
        </motion.div>
      </div>

      {/* ── PHASE 3 — VIDÉO ── */}
      <div className="hype__phase hype__phase--video">
        <motion.div
          className="hype__phase-inner"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p className="hype__overline" variants={fadeUp}>
            Sur scène, il est chez lui
          </motion.p>
          <motion.h2 className="hype__headline hype__headline--sm" variants={fadeUp}>
            Avant le 04 Avril,<br />il y avait déjà ça.
          </motion.h2>
          <motion.div className="hype__video-container" variants={fadeUp}>
            <video ref={videoRef} src={vanoVd} autoPlay muted loop playsInline />
            <div className="hype__video-overlay" />
          </motion.div>
          <motion.p className="hype__sub" variants={fadeUp}>
            Chaque concert, une communion.<br />
            Le 04 Avril sera différent. Ce sera le dernier de cette décennie.
          </motion.p>
        </motion.div>
      </div>

      {/* ── PHASE 4 — PREUVE SOCIALE ── */}
      <div className="hype__phase hype__phase--dark">
        <motion.div
          className="hype__phase-inner hype__phase-inner--wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <motion.p className="hype__overline" variants={fadeUp}>
            Le Gang ne ment pas
          </motion.p>
          <motion.h2 className="hype__headline hype__headline--sm" variants={fadeUp}>
            Ils étaient là.<br />Toi aussi, sois là.
          </motion.h2>
          <div className="hype__proof">
            {PROOF_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                className="hype__proof-card"
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
              >
                <div className="hype__proof-img-wrapper">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div className="hype__proof-img-overlay" />
                </div>
                <div className="hype__proof-text">
                  <p className="hype__proof-big">{item.big}</p>
                  <p className="hype__proof-sub">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── PHASE 5 — COUNTDOWN ── */}
      <div className="hype__phase">
        <motion.div
          className="hype__phase-inner"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p className="hype__overline" variants={fadeUp}>
            Il reste peu de temps pour être là
          </motion.p>
          <motion.h2 className="hype__headline hype__headline--sm" variants={fadeUp}>
            Le temps tourne.<br />Les places aussi.
          </motion.h2>
          <motion.div className="hype__countdown" variants={fadeUp}>
            {[
              { value: pad(days), label: 'Jours' },
              { value: pad(hours), label: 'Heures' },
              { value: pad(minutes), label: 'Min' },
              { value: pad(seconds), label: 'Sec' },
            ].map(({ value, label }, i, arr) => (
              <div key={label} className="hype__countdown-block">
                <div className="hype__countdown-card">
                  <span className="hype__countdown-number">{value}</span>
                </div>
                <span className="hype__countdown-label">{label}</span>
                {i < arr.length - 1 && (
                  <span className="hype__countdown-sep">:</span>
                )}
              </div>
            ))}
          </motion.div>
          <motion.p className="hype__sub" variants={fadeUp}>
            Chaque heure qui passe,<br />
            c'est une place de moins pour le Gang.
          </motion.p>
        </motion.div>
      </div>

      {/* ── FINAL — CTA ── */}
      <div className="hype__final">
        <motion.div
          className="hype__final-inner"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p className="hype__final-overline" variants={fadeUp}>
            Majestic de Wologuèdè · 04 Avril 2026 · 16h
          </motion.p>
          <motion.h3 className="hype__final-title" variants={fadeUp}>
            Le 04 Avril,<br />le Majestic<br />n'attendra personne.
          </motion.h3>
          <motion.p className="hype__final-sub" variants={fadeUp}>
            Les places partent.<br />Le Gang, lui, sera là.
          </motion.p>
          <motion.a
            href="#billetterie"
            className="hype__cta"
            variants={fadeUp}
          >
            Prendre ma place
          </motion.a>
        </motion.div>
      </div>

    </div>
  )
}

export default Hype