import './FloatingCTA.css'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#billetterie"
          className="floating-cta"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          Prendre ma place
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export default FloatingCTA