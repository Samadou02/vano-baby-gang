import './CtaFinal.css'
import { motion } from 'framer-motion'
import { FaTicketAlt } from 'react-icons/fa'
import hibou2 from '../../assets/images/hibou2.webp'

function CtaFinal() {
  return (
    <section
      className="cta-final"
      style={{ backgroundImage: `url(${hibou2})` }}
    >
      <motion.div
        className="cta-final__inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className="cta-final__label">04 Avril 2026 — Majestic de Wologuèdè</span>

        <h2 className="cta-final__title">
          Dans 10 ans,<br />
          tu raconteras <em>cette nuit.</em>
        </h2>

        <div className="cta-final__divider"></div>

        <p className="cta-final__sub">
          Les places partent.<br />
          <em className="cta-final__sub--red">L'histoire, elle, reste.</em>
        </p>

        <span className="cta-final__urgency">Places limitées</span>

        <a href="#billetterie" className="cta-final__btn">
          <FaTicketAlt />
          Je prends ma place
        </a>

        <p className="cta-final__copy">© 2026 Vano Baby — 10 ans du Gang</p>

      </motion.div>
    </section>
  )
}

export default CtaFinal