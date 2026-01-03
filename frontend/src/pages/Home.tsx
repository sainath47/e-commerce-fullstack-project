import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <About />
      </main>
      <Footer />
    </div>
  )
}