'use client'
import LoginPopup from '../../../../Authentication/Login'
import SignupPopup from '../../../../Authentication/SignUp'

import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const [activePopup, setActivePopup] = useState<null | 'login' | 'signup'>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  const handleAuthSuccess = () => {
    setIsAuthenticated(true)
    setActivePopup(null)
    router.push('/Landing')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    router.push('/')
  }

  return (
    <>
      {/* Navbar */}
      <nav
        className="w-full px-6 md:px-12 py-4 flex justify-between items-center shadow-md sticky top-0 z-40 text-white"
        style={{ backgroundColor: '#7e22ce' }}
      >
        {/* Brand */}
        <motion.div
          className="text-2xl md:text-3xl font-extrabold tracking-wide cursor-pointer"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => router.push('/')}
        >
          SORTIFY
        </motion.div>

        {/* Navigation Links */}
        <motion.ul
          className="hidden md:flex gap-8 uppercase font-semibold tracking-wide"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          {['Home', 'Features', 'About', 'Contact'].map((item) => (
            <motion.li
              key={item}
              className="hover:text-purple-300 transition cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.1 }}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Auth Buttons */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {!isAuthenticated ? (
            <>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-md bg-white text-purple-700 font-bold shadow hover:shadow-lg transition"
                onClick={() => setActivePopup('login')}
              >
                LOGIN
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-md bg-white text-purple-700 font-bold shadow hover:shadow-lg transition"
                onClick={() => setActivePopup('signup')}
              >
                SIGNUP
              </motion.button>
            </>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
               className="px-4 py-2 rounded-md bg-white text-purple-700 font-bold shadow hover:shadow-lg transition"
              onClick={handleLogout}
            >
              LOGOUT
            </motion.button>
          )}
        </motion.div>
      </nav>

      {/* Popup Overlay with Blur */}
      <AnimatePresence>
        {activePopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActivePopup(null)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-xl relative w-[350px]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePopup(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                ×
              </button>

              {activePopup === 'login' && (
                <LoginPopup
                  switchToSignup={() => setActivePopup('signup')}
                  onSuccess={handleAuthSuccess}
                />
              )}
              {activePopup === 'signup' && (
                <SignupPopup
                  switchToLogin={() => setActivePopup('login')}
                  onSuccess={handleAuthSuccess}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
