import './Acces.css'
import { motion } from 'framer-motion'
import { MapPin, Clock, Calendar, Music, Instagram, Facebook, Youtube, ExternalLink, Ticket } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
}

const vp = { once: true, amount: 0.2 }

function Acces() {
  const hLines = Array.from({ length: 8 }).map((_, i) => (
    <div key={`h-${i}`} className="acces__grid-line acces__grid-line--h" style={{ top: `${(i + 1) * 11}%` }}></div>
  ))

  const vLines = Array.from({ length: 8 }).map((_, i) => (
    <div key={`v-${i}`} className="acces__grid-line acces__grid-line--v" style={{ left: `${(i + 1) * 11}%` }}></div>
  ))

  return (
    <section className="acces" id="acces">

      <motion.div className="acces__header" initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp}>
        <span className="acces__label">Infos pratiques</span>
        <h2>Comment nous rejoindre</h2>
        <p>Que tu sois à Cotonou, à Paris ou à Montréal — voici tout ce qu'il faut savoir pour être là le 04 Avril.</p>
      </motion.div>

      <div className="acces__grid">

        {/* VISUEL MAP */}
        <motion.div className="acces__map" initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp} custom={0}>
          <div className="acces__map-visual">
            <div className="acces__map-bg">
              <div className="acces__grid-lines" aria-hidden="true">
                {hLines}
                {vLines}
              </div>
              <div className="acces__pin">
                <div className="acces__pin-dot"></div>
                <div className="acces__pin-ring acces__pin-ring--1"></div>
                <div className="acces__pin-ring acces__pin-ring--2"></div>
                <div className="acces__pin-ring acces__pin-ring--3"></div>
                <span className="acces__pin-label">Majestic de Wologuèdè</span>
              </div>
            </div>
            <a href="https://maps.google.com/?q=Canal+Olympia+Wologuede+Cotonou" target="_blank" rel="noopener noreferrer" className="acces__map-cta">
              <MapPin size={16} />
              Ouvrir dans Google Maps
              <ExternalLink size={14} />
            </a>
          </div>

          {/* HEURE BADGE */}
          <div className="acces__time-badge">
            <Clock size={16} />
            <span>Portes ouvertes à partir de <strong>16h</strong></span>
          </div>
        </motion.div>

        {/* INFOS */}
        <div className="acces__infos">

          {/* Fiche événement */}
          <motion.div className="acces__card" initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp} custom={1}>
            <h3 className="acces__card-title">L'événement</h3>
            <ul className="acces__list">
              <li>
                <Music size={18} className="acces__icon" />
                <div>
                  <span className="acces__list-label">Artiste</span>
                  <span className="acces__list-value">Vano Baby</span>
                </div>
              </li>
              <li>
                <Calendar size={18} className="acces__icon" />
                <div>
                  <span className="acces__list-label">Date</span>
                  <span className="acces__list-value">04 Avril 2026</span>
                </div>
              </li>
              <li>
                <Clock size={18} className="acces__icon" />
                <div>
                  <span className="acces__list-label">Heure</span>
                  <span className="acces__list-value">À partir de 16h</span>
                </div>
              </li>
              <li>
                <MapPin size={18} className="acces__icon" />
                <div>
                  <span className="acces__list-label">Lieu</span>
                  <span className="acces__list-value">
                    Majestic de Wologuèdè
                    <em>(ex Canal Olympia Wologuèdè)</em>
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Rappel ticket */}
          <motion.div className="acces__card acces__card--ticket" initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp} custom={2}>
            <h3 className="acces__card-title">Places disponibles</h3>
            <p className="acces__ticket-text">Les places sont limitées. Ne laisse pas quelqu'un d'autre prendre la tienne.</p>
            <div className="acces__ticket-prices">
              <span>5 000</span>
              <span>15 000</span>
              <span>50 000</span>
              <span>100 000 FCFA</span>
            </div>
            <a href="#billetterie" className="acces__ticket-cta">
              <Ticket size={16} />
              Réserver ma place
            </a>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div className="acces__card" initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp} custom={3}>
            <h3 className="acces__card-title">Suivre Vano Baby</h3>
            <div className="acces__socials">
              <a href="https://instagram.com/vanobaby" target="_blank" rel="noopener noreferrer" className="acces__social">
                <Instagram size={18} />
                <span>Instagram</span>
              </a>
              <a href="https://facebook.com/vanobaby" target="_blank" rel="noopener noreferrer" className="acces__social">
                <Facebook size={18} />
                <span>Facebook</span>
              </a>
              <a href="https://youtube.com/@vanobaby" target="_blank" rel="noopener noreferrer" className="acces__social">
                <Youtube size={18} />
                <span>YouTube</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}

export default Acces