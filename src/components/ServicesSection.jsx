import { motion } from 'framer-motion'
import { Home, TrendingUp, BarChart3, Key } from 'lucide-react'

const services = [
  {
    id: 'buying',
    icon: Home,
    title: 'Property Buying',
    description:
      'Find your perfect home with expert guidance. We help you select, negotiate, and close the best deal tailored to your budget and lifestyle.',
    highlights: ['Site visits & virtual tours', 'Price negotiation', 'Legal documentation'],
    color: 'from-gold-600/20 to-transparent',
  },
  {
    id: 'selling',
    icon: Key,
    title: 'Property Selling',
    description:
      'Sell your property at the best market price with our extensive buyer network and professional marketing strategies.',
    highlights: ['Free property valuation', 'Wide buyer network', 'Fast closure'],
    color: 'from-blue-600/10 to-transparent',
  },
  {
    id: 'investment',
    icon: TrendingUp,
    title: 'Investment Guidance',
    description:
      'Make informed investment decisions with our market insights. We identify high-growth areas in Kalaburagi for maximum ROI.',
    highlights: ['Market trend analysis', 'ROI projections', 'Portfolio management'],
    color: 'from-emerald-600/10 to-transparent',
  },
  {
    id: 'rental',
    icon: BarChart3,
    title: 'Rental Services',
    description:
      'Looking to rent or lease a property? We match tenants with landlords and handle all rental formalities end-to-end.',
    highlights: ['Tenant screening', 'Rental agreements', 'Property management'],
    color: 'from-purple-600/10 to-transparent',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-dark-900 relative">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ✦ What We Offer ✦
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our <span className="text-gradient-gold">Services</span>
          </motion.h2>
          <div className="gold-divider" />
          <motion.p
            className="font-inter text-gray-400 max-w-xl mx-auto text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From buying your first home to building a property portfolio — we cover every aspect of real estate.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                id={`service-${service.id}`}
                className="relative group bg-dark-700 border border-dark-600 hover:border-gold-600 rounded-2xl p-7 overflow-hidden
                           transition-all duration-500 hover:shadow-gold hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* BG gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-14 h-14 rounded-2xl glass-gold flex items-center justify-center
                                group-hover:bg-gold-500/20 transition-colors duration-300">
                    <Icon className="text-gold-500" size={26} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-playfair text-white text-xl font-semibold mb-3 group-hover:text-gold-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-inter text-gray-400 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {service.highlights.map((h, j) => (
                      <li key={j} className="font-inter text-xs text-gray-500 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow indicator */}
                <div className="relative z-10 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a href="tel:9164322355" className="text-gold-500 font-inter text-xs font-semibold">
                    Get Started →
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
