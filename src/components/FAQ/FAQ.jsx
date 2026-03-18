import './FAQ.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    category: 'Billetterie & paiement',
    items: [
      {
        q: 'Quels sont les tarifs disponibles ?',
        a: 'Quatre catégories de tickets sont disponibles : 5 000 FCFA, 15 000 FCFA, 50 000 FCFA et 100 000 FCFA. Chaque catégorie offre une expérience différente le soir du 04 Avril.',
      },
      {
        q: 'Comment acheter mon ticket ?',
        a: 'Tu peux réserver ta place directement sur ce site via le sélecteur de tickets. Choisis ta catégorie, indique le nombre de places et confirme ta commande en quelques secondes.',
      },
      {
        q: 'Est-ce que je peux acheter plusieurs places à la fois ?',
        a: 'Oui, tu peux acheter jusqu\'à 10 places par commande. Idéal pour venir avec ta crew.',
      },
      {
        q: 'Les tickets sont-ils remboursables ?',
        a: 'Les tickets ne sont pas remboursables. En cas d\'empêchement, tu peux céder ta place à quelqu\'un d\'autre en lui transmettant ton justificatif d\'achat.',
      },
    ],
  },
  {
    category: 'Programme & artistes',
    items: [
      {
        q: 'À quelle heure commence le concert ?',
        a: 'Les portes ouvrent à partir de 16h. Le show de Vano Baby commence en soirée. Arrive tôt pour profiter de l\'ambiance et ne rien manquer.',
      },
      {
        q: 'Y aura-t-il des artistes invités ?',
        a: 'Le 04 Avril, c\'est 10 ans du Gang. Des surprises sont prévues. Suis Vano Baby sur ses réseaux pour ne rien rater des annonces officielles.',
      },
      {
        q: 'Combien de temps dure le concert ?',
        a: 'Une soirée complète est prévue. Vano Baby a 10 ans de carrière à célébrer — attends-toi à un show XXL.',
      },
    ],
  },
  {
    category: 'Règles & sécurité',
    items: [
      {
        q: 'Le concert est-il accessible aux mineurs ?',
        a: 'Les mineurs accompagnés d\'un adulte responsable sont les bienvenus. Les mineurs non accompagnés devront présenter une autorisation parentale à l\'entrée.',
      },
      {
        q: 'Peut-on apporter des appareils photo ou des caméras ?',
        a: 'Les appareils photo personnels sont autorisés pour usage non commercial. Les équipements professionnels (objectifs détachables, trépieds) sont soumis à accréditation presse.',
      },
      {
        q: 'Quelles sont les règles de sécurité à respecter ?',
        a: 'Tout objet dangereux est strictement interdit. Des fouilles de sécurité seront effectuées à l\'entrée. L\'organisation se réserve le droit de refuser l\'accès à toute personne en état d\'ébriété avancé.',
      },
    ],
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className={`faq__item${open ? ' faq__item--open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button className="faq__question" onClick={() => setOpen(!open)}>
        <span>{item.q}</span>
        <span className="faq__icon">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq__answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <p>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FAQ() {
  return (
    <section className="faq" id="faq">

      <motion.div className="faq__header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
        <span className="faq__label">FAQ</span>
        <h2>Questions fréquentes</h2>
        <p>Tout ce que tu veux savoir avant le 04 Avril.</p>
      </motion.div>

      <div className="faq__content">
        {faqs.map((group, gi) => (
          <div key={gi} className="faq__group">
            <motion.h3 className="faq__category" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: gi * 0.1 }}>
              {group.category}
            </motion.h3>
            <div className="faq__list">
              {group.items.map((item, ii) => (
                <FAQItem key={ii} item={item} index={ii} />
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default FAQ