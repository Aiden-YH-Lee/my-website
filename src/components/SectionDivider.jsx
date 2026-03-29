import { motion } from 'framer-motion'
import { drawLine, viewportOnce } from '../utils/animations'

const SectionDivider = () => {
  // Generate a gentle sine wave path across full width
  const points = []
  const width = 1200
  const amplitude = 6
  const frequency = 3
  for (let x = 0; x <= width; x += 2) {
    const y = 20 + amplitude * Math.sin((x / width) * frequency * Math.PI * 2)
    points.push(`${x === 0 ? 'M' : 'L'} ${x} ${y}`)
  }
  const pathData = points.join(' ')

  return (
    <div className="my-16 w-full overflow-hidden">
      <svg
        viewBox={`0 0 ${width} 40`}
        className="w-full h-10"
        preserveAspectRatio="none"
      >
        <motion.path
          d={pathData}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="1"
          variants={drawLine}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        />
      </svg>
    </div>
  )
}

export default SectionDivider
