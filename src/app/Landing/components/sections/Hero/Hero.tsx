'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Hero() {
   const router = useRouter();

  const handleLogout = () => {
    router.push('/dashboard');
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center bg-white">
      {/* Left Content */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 px-6 lg:px-16 z-10"
      >
        <h1 className="text-6xl font-black text-gray-900 mb-6 leading-tight">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-purple-600 to-fuchsia-500 text-transparent bg-clip-text">
            Sortify
          </span>
        </h1>
        <p className="text-xl text-gray-700 mb-10 leading-relaxed">
          Smart file storage made simple. Harness the power of AI to organize, summarize,
          and secure your documents effortlessly.
        </p>

        <div className="flex flex-wrap gap-4 mb-6">
          
            <button  onClick={handleLogout} className="px-7 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white font-semibold rounded-full shadow hover:scale-105 transition">
              Get Started
            </button>
        
          <Link href="#">
            <button className="px-7 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition">
              Learn More
            </button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            AI Summaries
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            Secure Uploads
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            Smart Search
          </span>
        </div>
      </motion.div>

      {/* Right Curved Background with Texture + Design */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 z-0 overflow-hidden">
        <svg
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="heroGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>

            {/* Subtle dot texture */}
            <pattern id="dotPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1" fill="#ffffff22" />
            </pattern>
          </defs>

          <path
            d="M0,0 C300,150 300,350 0,500 L500,500 L500,0 Z"
            fill="url(#heroGradient)"
          />
          <rect width="500" height="500" fill="url(#dotPattern)" />
        </svg>

        {/* Blob background shape */}
        <div className="absolute -top-20 right-10 w-96 h-96 bg-pink-400 opacity-30 rounded-full blur-3xl z-0"></div>

        {/* Hero illustration */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-0 right-0 w-full h-full flex items-center justify-center z-10"
        >
          <Image
            src="/hero-image.png" // Or your uploaded image path
            alt="Sortify Illustration"
            width={640}
            height={640}
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
