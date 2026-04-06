import { motion } from 'framer-motion'
import { Phone, Mail, Globe, MapPin } from 'lucide-react'

// Social icon SVGs (lucide-react removed brand icons)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { Icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram', id: 'social-instagram' },
  { Icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook', id: 'social-facebook' },
  { Icon: YoutubeIcon, href: 'https://youtube.com', label: 'YouTube', id: 'social-youtube' },
  { Icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter', id: 'social-twitter' },
]

export default function Footer() {
  const handleNavClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-800 border-t border-dark-600 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            {/* Logo + Brand */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div
                className="relative flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  width: 48,
                  height: 48,
                  background: '#132248',
                  boxShadow: '0 0 20px rgba(201,168,76,0.35)',
                }}
              >
                <img
                  src="/images/logo-icon.png"
                  alt="Sadhanland Real Estate"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="leading-none">
                <h2 className="font-playfair text-white text-sm sm:text-base font-bold tracking-wide">SADHANLAND</h2>
                <p className="font-inter text-[8px] sm:text-[9px] tracking-[0.22em] uppercase mt-1" style={{ color: '#C9A84C' }}>
                  Real Estate
                </p>
              </div>
            </div>
            <p className="font-inter text-gray-400 text-sm leading-relaxed mb-5 sm:mb-6 max-w-sm">
              Your trusted real estate partner in Kalaburagi — specializing in premium
              independent 2BHK homes with 100% transparent dealings.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={social.id}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass-gold flex items-center justify-center hover:bg-gold-500/20 transition-all duration-300 text-gray-400 hover:text-gold-500"
                >
                  <social.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold text-white text-sm tracking-wider uppercase mb-4 sm:mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-inter text-gray-400 text-sm hover:text-gold-500 transition-colors duration-300 flex items-center gap-2 group"
                    id={`footer-nav-${link.label.toLowerCase()}`}
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-600 group-hover:bg-gold-400 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-inter font-semibold text-white text-sm tracking-wider uppercase mb-4 sm:mb-5">
              Contact Info
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="tel:9164322355" className="flex items-start gap-2.5 sm:gap-3 group" id="footer-phone">
                  <Phone size={14} className="text-gold-500 shrink-0 mt-0.5" />
                  <span className="font-inter text-gray-400 text-sm group-hover:text-gold-400 transition-colors">9164322355</span>
                </a>
              </li>
              <li>
                <a href="mailto:sadhanlandinfo@gmail.com" className="flex items-start gap-2.5 sm:gap-3 group" id="footer-email">
                  <Mail size={14} className="text-gold-500 shrink-0 mt-0.5" />
                  <span className="font-inter text-gray-400 text-xs sm:text-sm group-hover:text-gold-400 transition-colors break-all">sadhanlandinfo@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://www.sadhanland.com" className="flex items-start gap-2.5 sm:gap-3 group" id="footer-website">
                  <Globe size={14} className="text-gold-500 shrink-0 mt-0.5" />
                  <span className="font-inter text-gray-400 text-sm group-hover:text-gold-400 transition-colors">www.sadhanland.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <MapPin size={14} className="text-gold-500 shrink-0 mt-0.5" />
                  <span className="font-inter text-gray-400 text-sm">Kalaburagi, Karnataka — 585101</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-600 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="font-inter text-gray-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Sadhanland Realestate. All Rights Reserved.
          </p>
          <p className="font-inter text-gray-600 text-xs">
            Designed with ❤️ for Kalaburagi
          </p>
        </div>
      </div>
    </footer>
  )
}
