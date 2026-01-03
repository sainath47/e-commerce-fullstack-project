import { motion } from 'framer-motion'
import { Award, Shield, Truck } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Every item is carefully selected for exceptional craftsmanship and durability"
    },
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description: "All products come with certificates of authenticity and quality assurance"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Express shipping worldwide with secure packaging and tracking"
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6">
                About Sainath Bazaar
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Founded with a passion for excellence, Sainath Bazaar curates premium products 
                that blend luxury with functionality. Our commitment to quality ensures that 
                every item in our collection meets the highest standards.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From handcrafted leather goods to cutting-edge technology, we believe in 
                offering products that enhance your lifestyle and reflect your refined taste.
              </p>
            </div>

            <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 rounded-full px-8 py-4 text-base font-medium">
              Learn More About Us
            </button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-yellow-400/30 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}