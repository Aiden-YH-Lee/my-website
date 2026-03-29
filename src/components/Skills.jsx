import { motion } from 'framer-motion'
import { SKILLS } from '../constants'
import SectionHeader from './SectionHeader'
import SectionDivider from './SectionDivider'
import { fadeInUp, staggerContainer, viewportOnce } from '../utils/animations'

const categories = [
  { key: 'languages', label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks & Tools' },
  { key: 'infrastructure', label: 'Infrastructure' },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <SectionHeader number="05" title="Skills" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {categories.map(({ key, label }) => (
          <motion.div key={key} variants={fadeInUp}>
            <h3 className="font-mono text-xs text-amber uppercase tracking-[0.2em] mb-4">
              {label}
            </h3>
            <p className="font-body text-sm text-cream-muted leading-relaxed">
              {SKILLS[key].join(', ')}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <SectionDivider />
    </section>
  )
}

export default Skills
