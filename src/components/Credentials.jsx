import { motion } from 'framer-motion'
import { EDUCATION, AWARDS } from '../constants'
import SectionHeader from './SectionHeader'
import SectionDivider from './SectionDivider'
import { fadeInUp, staggerContainer, viewportOnce } from '../utils/animations'

const Credentials = () => {
  return (
    <section id="credentials" className="py-24">
      <SectionHeader number="04" title="Credentials" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h3 className="font-mono text-xs text-amber uppercase tracking-[0.2em] mb-8">Education</h3>

          {EDUCATION.map((school, schoolIndex) => (
            <motion.div key={schoolIndex} variants={fadeInUp} className="mb-8">
              <h4 className="font-display text-xl text-cream mb-4">{school.school}</h4>
              {school.degrees.map((degree, i) => (
                <div key={i} className="mb-3 pl-4 border-l border-border">
                  <p className="font-body text-sm text-cream">{degree.title}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-mono text-xs text-amber">{degree.gpa}</span>
                    <span className="font-mono text-xs text-cream-muted">{degree.expected}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Divider - visible on lg only */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

        {/* Recognition */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h3 className="font-mono text-xs text-amber uppercase tracking-[0.2em] mb-8">Recognition</h3>

          {AWARDS.map((award, index) => (
            <motion.div key={index} variants={fadeInUp} className="mb-6">
              <h4 className="font-display text-xl text-cream mb-1">{award.title}</h4>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="font-body text-sm text-cream-muted">{award.award}</span>
                <span className="font-mono text-sm text-amber font-medium">{award.prize}</span>
              </div>
              <p className="font-mono text-xs text-cream-muted mb-2">{award.year}</p>
              <p className="font-body text-sm text-cream-muted leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <SectionDivider />
    </section>
  )
}

export default Credentials
