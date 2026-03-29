import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram, FaSoundcloud } from 'react-icons/fa'
import { CONTACT, SOCIAL_LINKS } from '../constants'
import SectionHeader from './SectionHeader'
import StaffLines from './StaffLines'
import { fadeInUp, viewportOnce } from '../utils/animations'

const socialLinks = [
  { icon: FaLinkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: FaGithub, href: SOCIAL_LINKS.github, label: 'GitHub' },
  { icon: FaInstagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
  { icon: FaSoundcloud, href: SOCIAL_LINKS.soundcloud, label: 'SoundCloud' },
]

const Contact = () => {
  return (
    <section id="contact" className="py-24 pb-32">
      <SectionHeader number="06" title="Contact" />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-xl"
      >
        <h3 className="font-display text-section text-cream mb-6">
          Let's work together.
        </h3>

        <p className="font-body text-cream-muted mb-8">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and music.
        </p>

        <div className="space-y-3 mb-8">
          <a
            href={`mailto:${CONTACT.email}`}
            className="block font-mono text-lg text-amber hover:underline underline-offset-4 transition-colors duration-300"
          >
            {CONTACT.email}
          </a>
          <p className="font-body text-sm text-cream-muted">{CONTACT.address}</p>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-mono text-sm text-cream-muted hover:text-amber transition-colors duration-300 mb-12"
        >
          Resume (PDF) &rarr;
        </a>

        {/* Social links */}
        <div className="flex items-center gap-5 text-lg mb-16">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-muted hover:text-cream transition-colors duration-300"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        <StaffLines className="max-w-xs mb-8" />

        <p className="font-mono text-xs text-cream-muted/40">
          &copy; {new Date().getFullYear()} Aiden Lee
        </p>
      </motion.div>
    </section>
  )
}

export default Contact
