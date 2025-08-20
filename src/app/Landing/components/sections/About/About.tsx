'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 uppercase leading-tight">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our scalable platform delivers unmatched flexibility and reliability, 
            ensuring your data remains safe, accessible, and organized — always.
          </p>
          <p className="text-base md:text-lg text-purple-700 leading-relaxed font-medium">
            We’re committed to providing a seamless experience that adapts to your evolving needs. 
            Trust Sortify to secure your data and simplify your workflow.
          </p>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative w-[310px] h-[500px] rounded-2xl overflow-hidden ">
            <Image
              src="/mobile.png" // Make sure this exists
              alt="Sortify Mobile"
              fill
              className="object-cover"
            />
          </div>

          {/* Decorative Gradient Circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
        </motion.div>
      </div>
    </section>
  )
}
