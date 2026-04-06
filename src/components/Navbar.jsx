import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-900/95 backdrop-blur-lg border-b border-dark-600 shadow-2xl'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* ── Premium Logo ── */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleNavClick('#home')}
            >
              {/* Icon with gold glow */}
              <div className="relative flex-shrink-0">
                {/* Soft gold ring frame */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: '0 0 18px 4px rgba(201,168,76,0.45)' }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center relative z-10
                             group-hover:scale-105 transition-transform duration-300 overflow-hidden"
                  style={{ background: '#132248' }}
                >
                  <img
                    src="/images/logo-icon.png"
                    alt="Sadhanland Real Estate"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              </div>

              {/* Brand text */}
              <div className="leading-none">
                <p className="font-playfair text-white text-[15px] font-bold tracking-wide leading-tight">
                  SADHANLAND
                </p>
                <p
                  className="font-inter text-[9px] tracking-[0.22em] uppercase leading-tight mt-0.5"
                  style={{ color: '#C9A84C' }}
                >
                  Real Estate
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link"
                  id={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="tel:9164322355"
                className="hidden md:flex items-center gap-2 text-sm font-inter font-medium transition-colors duration-300"
                style={{ color: '#C9A84C' }}
              >
                <Phone size={14} />
                9164322355
              </a>
              <button
                onClick={() => handleNavClick('#contact')}
                className="hidden md:inline-flex btn-gold text-xs px-5 py-2"
                id="nav-enquire-btn"
              >
                Enquire Now
              </button>
              <button
                className="md:hidden text-white p-1"
                onClick={() => setMobileOpen(!mobileOpen)}
                id="mobile-menu-btn"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 backdrop-blur-xl pt-24 px-6 flex flex-col"
            style={{ background: 'rgba(10,10,10,0.97)' }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {/* Mobile logo */}
            <div className="flex items-center gap-3 mb-10">
              <div
                className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center"
                style={{ background: '#132248', boxShadow: '0 0 16px rgba(201,168,76,0.4)' }}
              >
                <img src="/images/logo-icon.png" alt="Sadhanland" className="w-full h-full object-contain p-1" />
              </div>
              <div>
                <p className="font-playfair text-white text-base font-bold">SADHANLAND</p>
                <p className="font-inter text-[9px] tracking-widest uppercase" style={{ color: '#C9A84C' }}>Real Estate</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-playfair text-3xl text-left text-white hover:text-gold-500 transition-colors"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  id={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            <div className="mt-auto mb-12">
              <p className="text-gray-500 text-sm mb-2 font-inter">Call Us</p>
              <a href="tel:9164322355" className="font-playfair text-2xl font-semibold" style={{ color: '#C9A84C' }}>
                9164322355
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
