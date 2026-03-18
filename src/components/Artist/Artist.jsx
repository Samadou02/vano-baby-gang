import './Artist.css'
import { memo, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import vano2 from '../../assets/images/vano2.webp'
import { FaTicketAlt } from 'react-icons/fa'

const TIMELINE = [
  { year: '2013', event: 'Premier single. Une voix naît.' },
  { year: '2014', event: "MTN Découverte Talents — il s'impose." },
  { year: '2016', event: '"Adigoue Gboun Gboun" — le pays valide.' },
  { year: '2019', event: '"Madame" — transformation totale.' },
  { year: '2021', event: "Artiste de l'année." },
  { year: '2022', event: 'Il confirme.' },
  { year: '2023', event: 'Il domine.' },
  { year: '2024', event: "Il marque l'histoire." },
  { year: '2026', event: '10 ans du Gang. Le moment.' },
]

const stats = [
  { number: '4×', label: "Artiste de l'année" },
  { number: '10', label: 'ans de carrière' },
  { number: '1', label: 'seule nuit' },
]

function Artist() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  return (
    <section className="artist" ref={ref}>

      <div className="artist__hero">
        <div className="artist__hero-text">
          <span className="artist__eyebrow">L'ARTISTE & L'HISTOIRE</span>
          <h2 className="artist__name">
            Vano<br />Baby
          </h2>
          <p className="artist__tagline">
            10 ans à transformer la rue en scène.
          </p>
          <p className="artist__bio">
            De Sainte-Rita au sommet.<br />
            De "Drague Azonto" à "Madame".<br />
            Il n'a jamais suivi les règles.<br />
            Il les a redéfinies.
          </p>
        </div>

        <motion.div className="artist__hero-image" style={{ y: imageY }}>
          <img src={vano2} alt="Vano Baby en concert" loading="lazy" decoding="async" width="650" height="900" />
        </motion.div>
      </div>

      <div className="artist__story">
        <motion.div className="artist__story-text" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p>En 2019, tout bascule.</p>
          <p>Avec "Madame", Vano Baby change de dimension. Moins de bruit. Plus d'émotion.</p>
          <p className="artist__closing">Ce n'est plus juste un artiste. C'est une trajectoire.</p>
        </motion.div>

        <div className="artist__stats horizontal-center">
          {stats.map((stat, i) => (
            <motion.div key={i} className="artist__card" initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2, duration: 0.6, type: 'spring', stiffness: 100 }}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="artist__cta" initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: stats.length * 0.2 + 0.2, duration: 0.6, type: 'spring', stiffness: 100 }}>
          <a href="#billetterie" className="artist__cta-btn">
            <FaTicketAlt />
            Prendre ma place
          </a>
        </motion.div>
      </div>

      <div className="artist__timeline">
        {TIMELINE.map((item, i) => (
          <motion.div key={i} className="timeline__card" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}>
            <span className="year">{item.year}</span>
            <p>{item.event}</p>
          </motion.div>
        ))}
      </div>

      <div className="artist__final-cta">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="artist__final-label">10 ans. Une seule nuit.</p>
          <h3 className="artist__final-title">Le 04 Avril, tu es là.</h3>
          <a href="#billetterie" className="artist__cta-btn">
            <FaTicketAlt />
            Prendre ma place
          </a>
        </motion.div>
      </div>

    </section>
  )
}

export default memo(Artist)