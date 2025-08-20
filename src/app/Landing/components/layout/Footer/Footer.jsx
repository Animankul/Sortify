'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0e1629] text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-purple-600 p-2 rounded-full text-white">⭐</div>
            <h3 className="text-white text-lg font-semibold">Sortify</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            The future of file management is here. Organize, secure, and optimize your digital workspace with AI-powered intelligence.
          </p>
          <div className="flex gap-4 text-xs">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Support</Link>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Features</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">Security</Link></li>
            <li><Link href="#">Integrations</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
