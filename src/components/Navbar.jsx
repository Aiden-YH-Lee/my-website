import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaSoundcloud } from "react-icons/fa"
import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-shrink-0 items-center"
            >
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Aiden Lee
                </span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className='m-8 flex items-center justify-center gap-4 text-2xl'
            >
                <motion.a
                    href='https://www.linkedin.com/in/yeongheon-lee'
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.2, color: '#0A66C2' }}
                    transition={{ duration: 0.2 }}
                    className='text-neutral-300 hover:text-[#0A66C2] transition-colors'
                >
                    <FaLinkedin />
                </motion.a>
                <motion.a
                    href='https://github.com/Aiden-YH-Lee'
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                    className='text-neutral-300 hover:text-white transition-colors'
                >
                    <FaGithub />
                </motion.a>
                <motion.a
                    href='https://www.instagram.com/__aiden.lee__/'
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.2, color: '#E4405F' }}
                    transition={{ duration: 0.2 }}
                    className='text-neutral-300 hover:text-[#E4405F] transition-colors'
                >
                    <FaInstagram />
                </motion.a>
                <motion.a
                    href='https://on.soundcloud.com/tmBEGQ4nPyNKmNzd6'
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.2, color: '#FF5500' }}
                    transition={{ duration: 0.2 }}
                    className='text-neutral-300 hover:text-[#FF5500] transition-colors'
                >
                    <FaSoundcloud />
                </motion.a>
            </motion.div>
        </nav>
    )
}

export default Navbar