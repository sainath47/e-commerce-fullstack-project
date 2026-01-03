import { useState, useEffect } from 'react'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-yellow-400 transition-colors"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Logo */}
        <a href="/" className="text-2xl md:text-3xl font-serif font-bold text-white hover:opacity-80 transition-opacity">
          SAINATH<span className="text-yellow-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">NEW ARRIVALS</a>
          <a href="#" className="hover:text-white transition-colors">COLLECTIONS</a>
          <a href="#" className="hover:text-white transition-colors">ABOUT</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="text-white hover:text-yellow-400 transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="text-white hover:text-yellow-400 transition-colors relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-yellow-400 rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a href="#" className="text-lg text-gray-300 hover:text-white transition-colors">New Arrivals</a>
            <a href="#" className="text-lg text-gray-300 hover:text-white transition-colors">Collections</a>
            <a href="#" className="text-lg text-gray-300 hover:text-white transition-colors">About</a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}