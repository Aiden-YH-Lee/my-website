import { AWARDS } from '../constants'
import { motion } from 'framer-motion'
import { FaTrophy } from 'react-icons/fa'

const Awards = () => {
    return (
        <div className="border-b border-neutral-900 pb-12">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                Awards
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-6">
                {AWARDS.map((award, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        className="max-w-xl w-full mx-4"
                    >
                        <div className="relative bg-gradient-to-br from-amber-900/20 to-yellow-900/10 rounded-2xl p-6 border border-amber-500/30 shadow-xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full" />
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full p-3 shadow-lg">
                                    <FaTrophy className="text-2xl text-white" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-amber-300">{award.title}</h3>
                                        <span className="text-sm text-neutral-400">• {award.year}</span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <span className="text-lg font-semibold text-neutral-200">{award.award}</span>
                                        <span className="px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 font-bold text-sm">
                                            {award.prize}
                                        </span>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">{award.description}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Awards
