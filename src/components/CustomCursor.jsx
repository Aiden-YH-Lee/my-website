import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'

// Pool of music symbols to randomly pick from on click
const NOTES = ['♪', '♫', '♩', '♬']

let noteId = 0

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [clickNotes, setClickNotes] = useState([])
  const hasHover = useRef(
    typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches
  )

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const spawnNote = useCallback((clientX, clientY) => {
    const id = ++noteId
    const note = NOTES[Math.floor(Math.random() * NOTES.length)]
    // Random horizontal drift between -20 and +20
    const drift = (Math.random() - 0.5) * 40
    setClickNotes((prev) => [...prev, { id, note, x: clientX, y: clientY, drift }])
    // Remove after animation completes
    setTimeout(() => {
      setClickNotes((prev) => prev.filter((n) => n.id !== id))
    }, 800)
  }, [])

  useEffect(() => {
    if (!hasHover.current) return

    const moveCursor = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, iframe')) setIsHovering(true)
    }

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, iframe')) setIsHovering(false)
    }

    const handleClick = (e) => {
      spawnNote(e.clientX, e.clientY)
    }

    const onLeave = () => setIsVisible(false)
    const onEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('click', handleClick)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('click', handleClick)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [x, y, spawnNote])

  if (!hasHover.current) return null

  const size = isHovering ? 40 : 28

  return (
    <>
      {/* Vinyl disc cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        style={{ x, y }}
      >
        <motion.div
          animate={{
            width: size,
            height: size,
            opacity: isVisible ? 1 : 0,
            rotate: isHovering ? 90 : 0,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="-translate-x-1/2 -translate-y-1/2"
          style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))' }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Vinyl disc */}
            <circle cx="50" cy="50" r="48" style={{ fill: 'var(--color-cream)' }} />
            {/* Grooves */}
            <circle cx="50" cy="50" r="40" fill="none" style={{ stroke: 'var(--color-base)' }} strokeOpacity="0.1" strokeWidth="1" />
            <circle cx="50" cy="50" r="33" fill="none" style={{ stroke: 'var(--color-base)' }} strokeOpacity="0.07" strokeWidth="0.8" />
            {/* Center label */}
            <circle cx="50" cy="50" r="18" style={{ fill: 'var(--color-amber)' }} />
            {/* Spindle hole */}
            <circle cx="50" cy="50" r="4.5" style={{ fill: 'var(--color-base)' }} />
          </svg>
        </motion.div>
      </motion.div>

      {/* Click-spawned music notes */}
      <AnimatePresence>
        {clickNotes.map(({ id, note, x: nx, y: ny, drift }) => (
          <motion.span
            key={id}
            initial={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            animate={{ opacity: 0, y: -60, x: drift, scale: 1.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="fixed pointer-events-none z-[10001] font-serif select-none"
            style={{
              left: nx,
              top: ny,
              fontSize: '20px',
              color: 'var(--color-amber)',
              textShadow: '0 1px 4px rgba(0,0,0,0.3)',
            }}
          >
            {note}
          </motion.span>
        ))}
      </AnimatePresence>
    </>
  )
}

export default CustomCursor
