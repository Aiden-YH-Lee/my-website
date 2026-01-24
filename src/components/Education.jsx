import { EDUCATION } from '../constants'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
    return (
        <div className="border-b border-neutral-900 pb-12">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                Education
            </motion.h2>
            <div className="flex flex-col items-center gap-8">
                {EDUCATION.map((education, schoolIndex) => (
                    <motion.div
                        key={schoolIndex}
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: schoolIndex * 0.2 }}
                        className="max-w-2xl w-full"
                    >
                        <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 border border-neutral-700 shadow-xl">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3">
                                    <FaGraduationCap className="text-3xl text-white" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-center mt-4 mb-6 bg-gradient-to-r from-pink-300 via-slate-400 to-purple-400 bg-clip-text text-transparent">
                                {education.school}
                            </h3>
                            <div className="space-y-4">
                                {education.degrees.map((degree, index) => (
                                    <motion.div
                                        key={index}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        initial={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50"
                                    >
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-lg text-neutral-100">{degree.title}</h4>
                                            <p className="text-sm text-neutral-400">{degree.expected}</p>
                                        </div>
                                        <div className="mt-2 sm:mt-0 sm:ml-4">
                                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg text-green-400 font-bold">
                                                GPA: {degree.gpa}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Education
