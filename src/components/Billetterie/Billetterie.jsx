import './Billetterie.css'
import { useState } from 'react'
import { FaPlus, FaMinus, FaTicketAlt } from 'react-icons/fa'

const initialTickets = [
  {
    type: 'STANDARD',
    price: 5000,
    remaining: 120,
  },
  {
    type: 'PREMIUM',
    price: 15000,
    remaining: 80,
  },
  {
    type: 'VIP',
    price: 50000,
    remaining: 40,
  },
  {
    type: 'VVIP',
    price: 100000,
    remaining: 15,
  },
]

function Billetterie() {
  const [tickets, setTickets] = useState(initialTickets)
  const [selected, setSelected] = useState(0)
  const [qty, setQty] = useState(1)

  const ticket = tickets[selected]
  const total = ticket.price * qty

  const handleQty = (type) => {
    if (type === 'inc' && qty < ticket.remaining) {
      setQty(qty + 1)
    }
    if (type === 'dec' && qty > 1) {
      setQty(qty - 1)
    }
  }

  return (
    <section className="billetterie" id="billetterie">

      <h2>Réserve ta place maintenant</h2>

      {/* SELECTEUR */}
      <div className="billetterie__types">
        {tickets.map((t, i) => (
          <button
            key={i}
            className={selected === i ? 'active' : ''}
            onClick={() => {
              setSelected(i)
              setQty(1)
            }}
          >
            {t.type}
          </button>
        ))}
      </div>

      {/* CARD */}
      <div className="billetterie__card">

        <h3>{ticket.type}</h3>
        <p className="price">{ticket.price.toLocaleString()} FCFA</p>

        {/* JAUGE */}
        <div className="billetterie__stock">
          <div
            className="bar"
            style={{
              width: `${(ticket.remaining / 120) * 100}%`,
            }}
          ></div>
        </div>
        <p className="remaining">{ticket.remaining} places restantes</p>

        {/* QUANTITÉ */}
        <div className="billetterie__qty">
          <button onClick={() => handleQty('dec')}>
            <FaMinus />
          </button>

          <span>{qty}</span>

          <button onClick={() => handleQty('inc')}>
            <FaPlus />
          </button>
        </div>

        {/* TOTAL */}
        <p className="total">
          Total : {total.toLocaleString()} FCFA
        </p>

        {/* CTA DYNAMIQUE */}
        <button className="cta">
          <FaTicketAlt />
          Réserver {qty} place{qty > 1 && 's'} — {total.toLocaleString()} FCFA
        </button>

      </div>

    </section>
  )
}

export default Billetterie