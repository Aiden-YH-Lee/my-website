import { motion } from 'framer-motion'
import { EXPERIENCES, LEADERSHIP } from '../constants'
import SectionHeader from './SectionHeader'
import SectionDivider from './SectionDivider'
import { fadeInUp, staggerContainer, viewportOnce } from '../utils/animations'

const TrackEntry = ({ index, role, company, year, location, description, technologies }) => {
  const trackNum = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      variants={fadeInUp}
      className="group"
    >
      <div className="track-hover flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8 py-6 px-4 -mx-4 rounded-lg transition-colors duration-300">
        {/* Track number */}
        <span className="track-num font-mono text-3xl lg:text-4xl font-light transition-colors duration-300 lg:w-16 shrink-0">
          {trackNum}
        </span>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-3">
            <div>
              <h3 className="font-display text-xl text-cream">{role}</h3>
              <p className="font-body text-sm text-cream-muted">{company}{location && ` — ${location}`}</p>
            </div>
            <span className="font-mono text-xs text-cream-muted tracking-wider shrink-0">
              {year}
            </span>
          </div>

          <p className="font-body text-sm text-cream-muted leading-relaxed mb-3">
            {description}
          </p>

          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-amber bg-amber-dim rounded px-2 py-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Separator line */}
      <div className="h-px bg-border" />
    </motion.div>
  )
}

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <SectionHeader number="02" title="Experience" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {EXPERIENCES.map((exp, index) => (
          <TrackEntry
            key={index}
            index={index}
            role={exp.role}
            company={exp.company}
            year={exp.year}
            location={exp.location}
            description={exp.description}
            technologies={exp.technologies}
          />
        ))}
      </motion.div>

      {/* Leadership sub-section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <h3 className="font-mono text-xs text-amber uppercase tracking-[0.2em] mb-8">Leadership</h3>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {LEADERSHIP.map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className="py-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                <div>
                  <h4 className="font-display text-lg text-cream">{item.role}</h4>
                  <p className="font-body text-sm text-cream-muted">{item.organization}</p>
                </div>
                <span className="font-mono text-xs text-cream-muted tracking-wider shrink-0">
                  {item.year}
                </span>
              </div>
              <p className="font-body text-sm text-cream-muted leading-relaxed">{item.description}</p>
              {index < LEADERSHIP.length - 1 && <div className="h-px bg-border mt-4" />}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <SectionDivider />
    </section>
  )
}

export default Experience
