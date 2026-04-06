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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-28 md:pt-32">
        {/* Location badge */}
        <motion.div
          className="inline-flex items-center gap-2 glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Mini logo in badge */}
          <div
            className="rounded flex items-center justify-center overflow-hidden"
            style={{ width: 18, height: 18, background: '#132248' }}
          >
            <img
              src="/images/logo-icon.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-inter text-[10px] sm:text-xs text-gray-300 tracking-wider uppercase">
            Kalaburagi, Karnataka
          </span>
        </motion.div>

        {/* Subtext */}
        <motion.p
          className="section-subtitle text-sm sm:text-base mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          ✦ Premium Homes in Kalaburagi ✦
        </motion.p>

        {/* Animated Headline - word by word */}
        <h1 className="font-playfair text-[1.6rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-5 sm:mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className={`inline-block mr-[0.35rem] sm:mr-3 md:mr-4 ${
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
          className="font-inter text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          Discover handcrafted independent 2BHK homes built with quality and care.
          Your dream home in Kalaburagi is waiting — schedule a visit today!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <button
            onClick={scrollToProperties}
            className="btn-gold group w-full sm:w-auto justify-center"
            id="hero-view-properties"
          >
            View Properties
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="https://wa.me/919164322355?text=Hi%2C%20I%27m%20interested%20in%20a%20property%20at%20Sadhanland%20Realestate.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold w-full sm:w-auto justify-center"
            id="hero-contact-us"
          >
            💬 WhatsApp Us
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-3 gap-3 sm:flex sm:justify-center sm:items-stretch sm:gap-6 md:gap-8 mt-10 sm:mt-16 px-0 sm:px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          {[
            { num: '2BHK', label: 'Premium Homes' },
            { num: '100%', label: 'Transparent' },
            { num: '✓', label: 'Ready to Move' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center glass rounded-xl sm:rounded-2xl px-2 sm:px-6 md:px-8 py-3 sm:py-5 sm:flex-1 sm:max-w-[160px]"
            >
              <p className="font-playfair text-2xl sm:text-3xl md:text-4xl text-gradient-gold font-bold leading-none">
                {stat.num}
              </p>
              <p className="font-inter text-gray-400 text-[8px] sm:text-[10px] md:text-xs tracking-wider uppercase mt-1 sm:mt-2 leading-tight">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
