import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Projects</motion.h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className='group bg-neutral-900/50 rounded-2xl overflow-hidden border border-neutral-800 hover:border-purple-500/30 transition-all duration-300'
                    >
                        <div className='relative overflow-hidden'>
                            <img
                                src={project.image}
                                alt={project.title}
                                className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60' />
                            {/* Overlay with links on hover */}
                            <div className='absolute inset-0 bg-neutral-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                                {project.github && (
                                    <motion.a
                                        href={project.github}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className='p-3 bg-neutral-800 rounded-full text-white hover:bg-purple-600 transition-colors'
                                    >
                                        <FaGithub className='text-xl' />
                                    </motion.a>
                                )}
                                {project.demo && (
                                    <motion.a
                                        href={project.demo}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className='p-3 bg-neutral-800 rounded-full text-white hover:bg-pink-600 transition-colors'
                                    >
                                        <FaExternalLinkAlt className='text-xl' />
                                    </motion.a>
                                )}
                            </div>
                        </div>
                        <div className='p-6'>
                            <div className='flex items-center justify-between mb-3'>
                                <h6 className='text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent'>
                                    {project.title}
                                </h6>
                                <div className='flex gap-2'>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-neutral-400 hover:text-purple-400 transition-colors'
                                        >
                                            <FaGithub />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-neutral-400 hover:text-pink-400 transition-colors'
                                        >
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <p className='text-neutral-400 text-sm leading-relaxed mb-4'>{project.description}</p>
                            <div className='flex flex-wrap gap-2'>
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className='rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projects