import { motion } from 'framer-motion'
import { ArrowRight, MapPin, ChevronDown } from 'lucide-react'

const words = ['Find', 'Your', 'Dream', 'Property', 'in', 'Kalaburagi']

export default function HeroSection() {
  const scrollToProperties = () => {
    document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero_bg.png')` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Gold vignette bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-900 to-transparent" />

      {/* Animated particles / dots overlay */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,168,76,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 md:pt-32">
        {/* Location badge */}
        <motion.div
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Mini logo in badge */}
          <div
            className="rounded flex items-center justify-center overflow-hidden"
            style={{ width: 20, height: 20, background: '#132248' }}
          >
            <img
              src="/images/logo-icon.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-inter text-xs text-gray-300 tracking-wider uppercase">
            Kalaburagi, Karnataka
          </span>
        </motion.div>

        {/* Subtext */}
        <motion.p
          className="section-subtitle text-base mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          ✦ Trusted Real Estate Partner ✦
        </motion.p>

        {/* Animated Headline - word by word */}
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className={`inline-block mr-3 md:mr-4 ${
                word === 'Dream' || word === 'Kalaburagi'
                  ? 'text-gradient-gold'
                  : 'text-white'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {word}
              {word === 'Property' ? <br className="hidden md:block" /> : null}
            </motion.span>
          ))}
        </h1>

        {/* Description */}
        <motion.p
          className="font-inter text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          Discover premium residential and commercial properties tailored to your vision.
          Your dream home awaits in the heart of Kalaburagi.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <button
            onClick={scrollToProperties}
            className="btn-gold group"
            id="hero-view-properties"
          >
            View Properties
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToContact}
            className="btn-outline-gold"
            id="hero-contact-us"
          >
            Contact Us
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          {[
            { num: '500+', label: 'Properties' },
            { num: '10+', label: 'Years' },
            { num: '1000+', label: 'Clients' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-playfair text-2xl md:text-3xl text-gradient-gold font-bold">{stat.num}</p>
              <p className="font-inter text-gray-400 text-xs tracking-wide uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="font-inter text-gray-500 text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-gold-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
