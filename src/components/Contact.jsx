import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaFileDownload } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-10 text-center text-4xl'>
                Get in Touch
            </motion.h2>
            <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='text-center text-neutral-400 mb-10 max-w-xl mx-auto'>
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and music.
            </motion.p>
            <div className='flex flex-wrap justify-center gap-6'>
                <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className='flex items-center gap-3 bg-neutral-900/50 rounded-xl px-6 py-4 border border-neutral-800'
                >
                    <FaMapMarkerAlt className='text-2xl text-purple-400' />
                    <span className='text-neutral-300'>{CONTACT.address}</span>
                </motion.div>
                <motion.a
                    href={`mailto:${CONTACT.email}`}
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl px-6 py-4 border border-purple-500/30 hover:border-purple-500/50 transition-all cursor-pointer'
                >
                    <FaEnvelope className='text-2xl text-pink-400' />
                    <span className='text-neutral-200'>{CONTACT.email}</span>
                </motion.a>
            </div>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='flex justify-center mt-8'
            >
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25'
                >
                    <FaFileDownload />
                    Download Resume
                </a>
            </motion.div>
        </div>
    )
}

export default Contact