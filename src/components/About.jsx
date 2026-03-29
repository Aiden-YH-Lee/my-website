import { motion } from 'framer-motion'
import aboutImg from '../assets/friends.jpg'
import { ABOUT_TEXT, ABOUT_PULLQUOTE } from '../constants'
import SectionHeader from './SectionHeader'
import SectionDivider from './SectionDivider'
import { fadeInUp, viewportOnce } from '../utils/animations'

const About = () => {
  return (
    <section id="about" className="py-24">
      <SectionHeader number="01" title="About" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Image - takes more space */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-7 relative"
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber" />
            <img
              src={aboutImg}
              alt="Aiden with friends"
              className="w-full h-[350px] lg:h-[480px] object-cover ml-4"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          {/* Pull quote */}
          <blockquote className="border-l-2 border-amber pl-6 mb-8">
            <p className="font-display text-xl lg:text-2xl text-cream italic leading-relaxed">
              {ABOUT_PULLQUOTE}
            </p>
          </blockquote>

          {/* Body text */}
          {ABOUT_TEXT.split('\n\n').map((paragraph, i) => (
            <p key={i} className="font-body text-base text-cream-muted leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>

      <SectionDivider />
    </section>
  )
}

export default About
