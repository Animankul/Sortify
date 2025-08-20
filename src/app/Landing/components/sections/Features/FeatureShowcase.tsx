'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { features } from './featuresData';

export default function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const feature = features[activeIndex];
  const [firstLine, ...restLines] = feature.description.split('\n');

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 text-center relative overflow-hidden">
      {/* Title */}
      <h2 className="text-5xl font-extrabold text-purple-800 mb-6">Discover Powerful Features</h2>
      <p className="text-lg text-purple-600 mb-14 max-w-3xl mx-auto">
        Explore how Sortify’s smart AI boosts your productivity and transforms file management.
      </p>

      {/* Main Feature Display */}
      <div className="relative max-w-6xl mx-auto mb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 shadow-2xl rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center border min-h-[440px] backdrop-blur-lg"
          >
            {/* Text Content */}
            <div className="text-left flex-1 md:mr-10">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-lg mb-2">{firstLine}</p>
              {restLines.length > 0 && (
                <p className="text-gray-600 text-md leading-relaxed">
                  {restLines.join(' ')}
                </p>
              )}
            </div>

            {/* Feature Icon */}
            <div className="flex-shrink-0 mt-8 md:mt-0">
              <div className="w-[160px] h-[160px] rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-lg">
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Feature Buttons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feat, index) => (
          <button
            key={feat.id}
            onClick={() => setActiveIndex(index)}
            className={`p-5 rounded-2xl text-left transition-all duration-300 h-full shadow-md backdrop-blur-sm border-2 ${
              index === activeIndex
                ? 'bg-purple-100 border-purple-500'
                : 'bg-white border-gray-200 hover:border-purple-300'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src={feat.icon}
                  alt={`${feat.title} icon`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h4 className="text-md font-semibold text-gray-800">
                {feat.title}
              </h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{feat.short}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
