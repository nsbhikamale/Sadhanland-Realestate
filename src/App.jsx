import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedProperties from './components/FeaturedProperties'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import GallerySlider from './components/GallerySlider'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <div className="bg-dark-900 min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedProperties />
        <AboutSection />
        <ServicesSection />
        <GallerySlider />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
