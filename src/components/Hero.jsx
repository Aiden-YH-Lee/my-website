import { motion, useScroll, useTransform } from 'framer-motion'
import { HERO_TAGLINE } from '../constants'
import profilePic from '../assets/IMG_7028.jpg'
import StaffLines from './StaffLines'
import { letterReveal, viewportOnce } from '../utils/animations'

const Hero = () => {
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 500], [0, -60])
  const imageOpacity = useTransform(scrollY, [0, 600], [1, 0.3])

  const firstName = "Aiden"
  const lastName = "Lee"

  return (
    <section className="min-h-screen flex items-center relative pt-24 pb-12" id="home">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text side */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <div className="mb-6">
            <div className="overflow-hidden">
              <h1 className="font-display text-hero text-cream leading-none">
                {firstName.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterReveal}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="font-display text-hero text-cream leading-none">
                {lastName.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i + firstName.length}
                    variants={letterReveal}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-mono text-xs sm:text-sm tracking-[0.15em] text-cream-muted uppercase mb-8"
          >
            {HERO_TAGLINE}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <StaffLines className="max-w-xs" />
          </motion.div>
        </div>

        {/* Image side */}
        <motion.div
          className="relative order-1 lg:order-2"
          style={{ y: imageY, opacity: imageOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative overflow-hidden"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 8% 100%)' }}
          >
            <img
              src={profilePic}
              alt="Aiden Lee"
              className="w-full h-[400px] lg:h-[560px] object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-0 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-cream-muted uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-border"
        />
      </motion.div>
    </section>
  )
}

export default Hero
