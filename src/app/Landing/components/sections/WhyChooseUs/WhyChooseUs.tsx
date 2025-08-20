'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    title: 'Secure & Private',
    description:
      'We prioritize your data privacy with enterprise-grade encryption and robust security protocols.',
    icon: '/icons/search.png',
  },
  {
    title: 'Accessible Anywhere',
    description:
      'Access your files anytime, anywhere — Sortify ensures your documents are always a click away.',
    icon: '/icons/search.png',
  },
  {
    title: 'Smart Organization',
    description:
      'AI-powered search and tagging automatically organize your files for quick access.',
    icon: '/icons/search.png',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-purple-100 via-indigo-100 to-purple-200">
      <h2 className="text-4xl font-extrabold text-center text-purple-800 uppercase mb-16">
        Why Choose Us?
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md border border-purple-300 rounded-3xl p-8 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <div className="w-24 h-24 rounded-full bg-purple-100 border-2 border-purple-500 flex items-center justify-center mb-6 shadow-md">
              <Image src={feature.icon} alt="icon" width={40} height={40} />
            </div>
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
