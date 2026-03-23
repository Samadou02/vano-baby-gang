import './Hero.css'
import { useEffect, useRef, useState } from 'react'
import vanoVideo from '../../assets/videos/Vano_video.mp4'
import hibou2 from '../../assets/images/hibou2.webp'

function Hero() {
  const videoRef = useRef(null)
  const [timeLeft, setTimeLeft] = useState({})
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const concertDate = new Date('2026-04-04T16:00:00')
    const tick = () => {
      const now = new Date()
      const diff = concertDate - now
      if (diff <= 0) {
        setTimeLeft({ jours: 0, heures: 0, minutes: 0, secondes: 0 })
        return
      }
      setTimeLeft({
        jours: Math.floor(diff / (1000 * 60 * 60 * 24)),
        heures: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        secondes: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n) => String(n).padStart(2, '0')

  const handlePlay = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <section className="hero">
      {/* Background hibou */}
      <div className="hero__bg" style={{ backgroundImage: `url(${hibou2})` }} />
      <div className="hero__bg-overlay" />

      <div className="hero__content">

        {/* Countdown */}
        <div className="hero__countdown-wrapper">
          <div className="hero__countdown-left">
            <span className="hero__countdown-label-main">Rendez-vous le</span>
            <span className="hero__countdown-date">04 Avril 2026</span>
          </div>
          <div className="hero__countdown-divider" />
          <div className="hero__countdown-items">
            {[
              { label: 'Jours', value: timeLeft.jours },
              { label: 'Heures', value: timeLeft.heures },
              { label: 'Min', value: timeLeft.minutes },
              { label: 'Sec', value: timeLeft.secondes },
            ].map(({ label, value }, i, arr) => (
              <div key={label} className="hero__countdown-block">
                <span className="hero__countdown-number">{pad(value ?? 0)}</span>
                <span className="hero__countdown-unit">{label}</span>
                {i < arr.length - 1 && <span className="hero__countdown-sep">:</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Texte principal */}
        <div className="hero__text">
          <p className="hero__eyebrow">Vano Baby présente</p>

          <h1 className="hero__title">
            <span className="hero__title--white">Les </span>
            <span className="hero__title--red">10 ans du Gang</span>
          </h1>

          <p className="hero__subtitle">Concert Live</p>

          <p className="hero__meta">
            <span className="hero__meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              Majestic de Wologuèdè
            </span>
            <span className="hero__meta-dot">·</span>
            <span className="hero__meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              À partir de 16h
            </span>
          </p>
        </div>

        {/* Vidéo */}
        <div className="hero__video-wrapper">
          <video
            ref={videoRef}
            className="hero__video"
            playsInline
            preload="metadata"
          >
            <source src={vanoVideo} type="video/webm" />
            <track kind="captions" />
          </video>
          <button
            className={`hero__play-btn ${playing ? 'hero__play-btn--playing' : ''}`}
            onClick={handlePlay}
            aria-label={playing ? 'Mettre en pause' : 'Lancer la vidéo'}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </button>
        </div>

        {/* CTA */}
        <a href="#billetterie" className="hero__cta">
          Prendre ma place
        </a>

      </div>
    </section>
  )
}

export default Hero