import { motion } from 'framer-motion'
import { viewportOnce } from '../utils/animations'

const SectionHeader = ({ number, title }) => {
  return (
    <div className="flex items-center gap-6 mb-16">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm text-amber tracking-widest"
      >
        {number}
      </motion.span>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-px bg-border flex-1 origin-left"
      />
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="font-display text-section text-cream"
      >
        {title}
      </motion.h2>
    </div>
  )
}

export default SectionHeader
