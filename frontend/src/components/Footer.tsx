import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">
              SAINATH<span className="text-yellow-400">.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Curating premium products for the discerning individual. Quality you can trust.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">New Arrivals</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Collections</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Categories</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Leather Goods</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Timepieces</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Technology</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Accessories</a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Help Center</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Shipping Info</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Returns</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Size Guide</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Sainath Bazaar. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}