import './Billetterie.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlus, FaMinus, FaTicketAlt } from 'react-icons/fa'

const initialTickets = [
  { type: 'STANDARD', price: 5000, total: 500, remaining: 120 },
  { type: 'PREMIUM', price: 15000, total: 200, remaining: 80 },
  { type: 'VIP', price: 50000, total: 75, remaining: 40 },
  { type: 'VVIP', price: 100000, total: 20, remaining: 15 },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function Billetterie() {
  const [selected, setSelected] = useState(0)
  const [qty, setQty] = useState(1)

  const ticket = initialTickets[selected]
  const total = ticket.price * qty
  const pct = Math.round((ticket.remaining / ticket.total) * 100)
  const isLow = ticket.remaining <= ticket.total * 0.25

  const handleQty = (type) => {
    if (type === 'inc' && qty < ticket.remaining) setQty(qty + 1)
    if (type === 'dec' && qty > 1) setQty(qty - 1)
  }

  return (
    <section className="billetterie" id="billetterie">

      <motion.div
        className="billetterie__inner"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        {/* Header */}
        <motion.div className="billetterie__header" variants={fadeUp}>
          <span className="billetterie__eyebrow">04 Avril 2026 · Majestic de Wologuèdè</span>
          <h2 className="billetterie__title">Réserve ta place</h2>
          <p className="billetterie__subtitle">Une seule nuit. Choisis où tu veux vivre ça.</p>
        </motion.div>

        {/* Sélecteur */}
        <motion.div className="billetterie__types" variants={fadeUp}>
          {initialTickets.map((t, i) => (
            <button
              key={i}
              className={`billetterie__type-btn ${selected === i ? 'active' : ''}`}
              onClick={() => { setSelected(i); setQty(1) }}
              aria-label={`Sélectionner la catégorie ${t.type}`}
            >
              {t.type}
            </button>
          ))}
        </motion.div>

        {/* Card */}
        <motion.div
          className={`billetterie__card ${isLow ? 'billetterie__card--low' : ''}`}
          variants={fadeUp}
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <div className="billetterie__card-top">
            <h3 className="billetterie__card-name">{ticket.type}</h3>
            <p className="billetterie__card-price">
              {ticket.price.toLocaleString()}
              <span className="billetterie__card-currency"> FCFA</span>
            </p>
          </div>

          {/* Jauge */}
          <div className="billetterie__gauge-wrapper">
            <div className="billetterie__gauge">
              <motion.div
                className="billetterie__gauge-fill"
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
            <p className={`billetterie__remaining ${isLow ? 'billetterie__remaining--low' : ''}`}>
              {isLow ? '⚠ ' : ''}{ticket.remaining} places restantes
            </p>
          </div>

          {/* Quantité */}
          <div className="billetterie__qty">
            <button
              className="billetterie__qty-btn"
              onClick={() => handleQty('dec')}
              disabled={qty === 1}
              aria-label="Diminuer la quantité"
            >
              <FaMinus />
            </button>
            <motion.span
              key={qty}
              className="billetterie__qty-value"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
            >
              {qty}
            </motion.span>
            <button
              className="billetterie__qty-btn"
              onClick={() => handleQty('inc')}
              disabled={qty >= ticket.remaining}
              aria-label="Augmenter la quantité"
            >
              <FaPlus />
            </button>
          </div>

          {/* Total */}
          <p className="billetterie__total">
            Total : <span>{total.toLocaleString()} FCFA</span>
          </p>

          {/* CTA */}
          <button className="billetterie__cta">
            <FaTicketAlt />
            Réserver {qty} place{qty > 1 ? 's' : ''} — {total.toLocaleString()} FCFA
          </button>

        </motion.div>

      </motion.div>
    </section>
  )
}

export default Billetterie