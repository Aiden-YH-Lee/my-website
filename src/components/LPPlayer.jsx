import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LP_TRACKS } from '../constants'

// Deterministic daily track selection based on date
function getDailyTrack() {
  const today = new Date()
  const dayIndex = Math.floor(today.getTime() / (1000 * 60 * 60 * 24))
  return LP_TRACKS[dayIndex % LP_TRACKS.length]
}

const LPPlayer = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const track = getDailyTrack()
  const playerRef = useRef(null)

  // Listen for Spotify embed events via postMessage
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== 'https://open.spotify.com') return
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data
        if (data.type === 'playback_update') {
          setIsPlaying(!data.payload.isPaused)
        }
      } catch {
        // Ignore non-JSON messages
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div className="fixed bottom-6 left-6 z-30 hidden md:block">
      {/* Expanded player */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-3 rounded-lg overflow-hidden shadow-2xl"
            style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
          >
            {/* Vinyl + Track Info Header */}
            <div className="flex items-center gap-3 p-3 pb-2">
              {/* Mini vinyl record */}
              <div className="relative w-10 h-10 shrink-0">
                {/* Outer ring */}
                <div
                  className={`w-10 h-10 rounded-full ${isPlaying ? 'vinyl-spin' : 'vinyl-spin paused'}`}
                  style={{
                    background: 'conic-gradient(from 0deg, #1a1a1c, #2a2a2e, #1a1a1c, #2a2a2e, #1a1a1c)',
                  }}
                >
                  {/* Grooves */}
                  <div className="absolute inset-1 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.05)' }} />
                  <div className="absolute inset-2 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.03)' }} />
                  <div className="absolute inset-3 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.05)' }} />
                  {/* Label center */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      top: '35%', left: '35%', width: '30%', height: '30%',
                      backgroundColor: 'var(--color-amber)',
                    }}
                  >
                    <div
                      className="absolute rounded-full"
                      style={{
                        top: '35%', left: '35%', width: '30%', height: '30%',
                        backgroundColor: 'var(--color-base)',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Track info */}
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] text-amber uppercase tracking-wider mb-0.5">
                  Today's Pick · {track.genre}
                </p>
                <p className="font-body text-xs text-cream truncate">{track.title}</p>
                <p className="font-body text-[10px] text-cream-muted truncate">{track.artist}</p>
              </div>
            </div>

            {/* Spotify Embed */}
            <div className="px-2 pb-2">
              <iframe
                ref={playerRef}
                src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0`}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: '8px' }}
                title={`${track.title} by ${track.artist}`}
              />
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button — mini equalizer */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 group"
        aria-label={isOpen ? 'Close music player' : 'Open music player'}
      >
        {/* Equalizer bars */}
        <div className="flex items-end gap-[2px] h-4">
          <div
            className="w-[2px] rounded-full transition-colors duration-300"
            style={{
              backgroundColor: isOpen ? 'var(--color-amber)' : 'var(--color-cream-muted)',
              animation: 'eqBar1 1.2s ease-in-out infinite',
            }}
          />
          <div
            className="w-[2px] rounded-full transition-colors duration-300"
            style={{
              backgroundColor: isOpen ? 'var(--color-amber)' : 'var(--color-cream-muted)',
              animation: 'eqBar2 0.8s ease-in-out infinite',
            }}
          />
          <div
            className="w-[2px] rounded-full transition-colors duration-300"
            style={{
              backgroundColor: isOpen ? 'var(--color-amber)' : 'var(--color-cream-muted)',
              animation: 'eqBar3 1.0s ease-in-out infinite',
            }}
          />
        </div>
        <span
          className="font-mono text-[10px] tracking-wider uppercase transition-colors duration-300"
          style={{ color: isOpen ? 'var(--color-amber)' : 'var(--color-cream-muted)' }}
        >
          {isOpen ? 'Now Spinning' : 'Listen'}
        </span>
      </button>
    </div>
  )
}

export default LPPlayer
