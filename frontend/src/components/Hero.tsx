import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import sainath from "/sainath.webp";
import './Hero.css'

export default function Hero() {

  

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block px-3 py-1 border border-yellow-400/30 rounded-full bg-yellow-400/10">
            <span className="text-xs font-bold tracking-widest text-yellow-400 uppercase">Est. 2025 • Premium Quality</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.9] text-white">
            Curated <br />
            <span className="italic text-gray-400">For The</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-white">Exceptional</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-md leading-relaxed">
            Welcome to Sainath's exclusive collection. Where luxury meets utility in a seamless blend of craftsmanship.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-white text-black hover:bg-gray-200 transition-colors rounded-full px-8 py-4 text-base font-medium">
              Shop Collection
            </button>
            <button className="border border-white/20 text-white hover:bg-white/10 transition-colors rounded-full px-8 py-4 text-base font-medium flex items-center gap-2">
              About Sainath <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative aspect-[3/4] max-w-md mx-auto">
            <div className="absolute -top-10 -right-10 w-full h-full border border-yellow-400/20 rounded-full transform rotate-6 scale-90" />
            <div className="absolute -bottom-10 -left-10 w-full h-full bg-yellow-400/5 rounded-full blur-3xl" />
            
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="myImage ">
                <img src={sainath} alt="sainath" className='zoom-image'/>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}