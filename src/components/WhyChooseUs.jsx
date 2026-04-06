import { motion } from 'framer-motion'
import { Shield, Heart, Users, Clock, MapPin, Sparkles } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: '100% Transparent',
    description:
      'No hidden charges, no surprises. We share every detail about the property upfront so you can make an informed decision.',
    accent: 'from-amber-500/15 to-transparent',
  },
  {
    icon: Heart,
    title: 'Built with Love',
    description:
      'Every house we build is crafted with quality materials and personal attention — because your home deserves nothing less.',
    accent: 'from-rose-500/10 to-transparent',
  },
  {
    icon: Users,
    title: 'Personal Attention',
    description:
      'We give every buyer our full time and undivided attention. No long queues, no waiting — just personalized care.',
    accent: 'from-sky-500/10 to-transparent',
  },
  {
    icon: Clock,
    title: 'Ready to Move In',
    description:
      'Our 2BHK homes are fully built and ready. No waiting months for construction — visit, love it, and move in.',
    accent: 'from-emerald-500/10 to-transparent',
  },
  {
    icon: MapPin,
    title: 'Prime Kalaburagi Location',
    description:
      'Strategically located for easy access to schools, markets, hospitals, and public transport.',
    accent: 'from-violet-500/10 to-transparent',
  },
  {
    icon: Sparkles,
    title: 'Best Deals Guaranteed',
    description:
      'We offer the most competitive prices in Kalaburagi with zero hidden charges. What you see is what you get!',
    accent: 'from-gold-500/15 to-transparent',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-24 scroll-mt-16 bg-dark-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ✦ Why Sadhanland ✦
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Why Choose <span className="text-gradient-gold">Us</span>
          </motion.h2>
          <div className="gold-divider" />
          <motion.p
            className="font-inter text-gray-400 max-w-xl mx-auto text-sm leading-relaxed px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We are committed to honesty, quality, and your complete satisfaction.
            Here is why families in Kalaburagi choose Sadhanland.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={i}
                className="relative group bg-dark-700 border border-dark-600 hover:border-gold-600 rounded-2xl p-5 sm:p-7 overflow-hidden
                           transition-all duration-500 hover:shadow-gold hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {/* BG gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${reason.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative z-10 mb-4 sm:mb-5">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl glass-gold flex items-center justify-center
                                group-hover:bg-gold-500/20 transition-colors duration-300"
                  >
                    <Icon className="text-gold-500" size={22} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-playfair text-white text-lg font-semibold mb-2 group-hover:text-gold-400 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="font-inter text-gray-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Corner accent on hover */}
                <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-gold-500/0 group-hover:border-gold-500/30 rounded-tr-2xl transition-all duration-500" />
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10 sm:mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-inter text-gray-400 text-sm mb-5 sm:mb-6 px-2">
            Ready to visit our properties? Let's schedule a free site visit today!
          </p>
          <a
            href="tel:9164322355"
            className="btn-gold"
            id="why-choose-cta"
          >
            📞 Schedule a Visit
          </a>
        </motion.div>
      </div>
    </section>
  )
}
