'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TransformCTA() {
  return (
    <section className="bg-gradient-to-r from-[#4B6CB7] to-[#182848] py-16 px-6 text-center text-white">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Ready to Transform <br /> Your File Experience?
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="text-sm md:text-base max-w-md mx-auto text-gray-200 font-medium mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Join the future of file management. Download Sortify now and experience the power of AI-driven organization.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Link href="/signup">
          <button className="bg-white text-[#4B6CB7] font-semibold px-6 py-2 rounded-md shadow hover:scale-105 transition">
            Join now →
          </button>
        </Link>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
        {[
          { title: '100%', desc: 'Free & Open Source' },
          { title: '100%', desc: 'Privacy' },
          { title: 'AI', desc: 'Powered' }
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-black/80 text-white rounded-md px-5 py-3 shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + idx * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold">{feature.title}</h3>
            <p className="text-xs mt-1 text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
