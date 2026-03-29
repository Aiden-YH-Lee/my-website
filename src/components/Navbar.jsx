import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram, FaSoundcloud } from 'react-icons/fa'
import { SOCIAL_LINKS } from '../constants'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
]

const socialLinks = [
  { icon: FaLinkedin, href: SOCIAL_LINKS.linkedin },
  { icon: FaGithub, href: SOCIAL_LINKS.github },
  { icon: FaInstagram, href: SOCIAL_LINKS.instagram },
  { icon: FaSoundcloud, href: SOCIAL_LINKS.soundcloud },
]

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md"
      style={{ backgroundColor: 'color-mix(in srgb, var(--color-base) 80%, transparent)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between py-4">
        {/* Name */}
        <a href="#home" className="font-mono text-xs tracking-[0.3em] text-cream-muted uppercase hover:text-cream transition-colors duration-300">
          Aiden Lee
        </a>

        {/* Nav links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-cream-muted hover:text-cream transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social icons + theme toggle */}
        <div className="flex items-center gap-4 text-lg">
          {socialLinks.map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-muted hover:text-cream transition-colors duration-300"
            >
              <Icon />
            </a>
          ))}
          <div className="w-px h-4 bg-border mx-1" />
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
