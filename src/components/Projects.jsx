import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'
import SectionHeader from './SectionHeader'
import SectionDivider from './SectionDivider'
import { fadeInUp, viewportOnce } from '../utils/animations'

const ProjectEntry = ({ project, index }) => {
  const isEven = index % 2 === 1

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-center ${isEven ? '' : ''}`}
    >
      {/* Image */}
      <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="overflow-hidden rounded-sm">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[240px] lg:h-[320px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
        </div>
      </div>

      {/* Text */}
      <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <h3 className="font-display text-2xl text-cream mb-3">{project.title}</h3>
        <p className="font-body text-sm text-cream-muted leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-amber bg-amber-dim rounded px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-cream-muted hover:text-amber transition-colors duration-300"
            >
              View Source &rarr;
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-cream-muted hover:text-amber transition-colors duration-300"
            >
              Live Demo &rarr;
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <SectionHeader number="03" title="Projects" />

      {PROJECTS.map((project, index) => (
        <ProjectEntry key={index} project={project} index={index} />
      ))}

      <SectionDivider />
    </section>
  )
}

export default Projects
