import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

function AnimatedCounter({ target, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const springVal = useSpring(motionVal, { stiffness: 100, damping: 30 })
  const displayRef = useRef(null)

  useEffect(() => {
    if (inView) motionVal.set(target)
  }, [inView, target, motionVal])

  useEffect(() => {
    return springVal.on('change', (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = Math.round(v) + suffix
      }
    })
  }, [springVal, suffix])

  return (
    <span ref={ref} className="font-playfair text-3xl sm:text-4xl text-gradient-gold font-bold">
      <span ref={displayRef}>0{suffix}</span>
    </span>
  )
}

const stats = [
  { label: 'Premium Homes', value: 2, suffix: '' },
  { label: 'Happy Families', value: 100, suffix: '%' },
  { label: 'Transparent Deals', value: 100, suffix: '%' },
  { label: 'Locations', value: 1, suffix: '' },
]

const highlights = [
  'Honest & transparent property dealings — no hidden charges',
  'Personally guided site visits for every buyer',
  'End-to-end assistance from visit to registration',
  'Focus on quality over quantity — every home we sell is our best work',
  'Local expertise: born and based in Kalaburagi',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 scroll-mt-16 bg-dark-800 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-card">
              <img
                src="/images/about.png"
                alt="Sadhanland Realestate team"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
              {/* Gold frame accent */}
              <div className="absolute inset-0 border-2 border-gold-500/20 rounded-2xl sm:rounded-3xl pointer-events-none" />
            </div>
            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 right-2 sm:-bottom-8 sm:-right-4 md:-right-8 glass-gold p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-gold max-w-[160px] sm:max-w-[200px]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring' }}
            >
              <p className="font-playfair text-3xl sm:text-4xl text-gradient-gold font-bold">2BHK</p>
              <p className="font-inter text-gray-300 text-[10px] sm:text-xs mt-1 leading-snug">Independent Homes Ready to Move</p>
            </motion.div>
            {/* Corner accent - hidden on mobile */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-gold-500 rounded-tl-2xl" />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-subtitle">✦ About Us ✦</p>
            <h2 className="section-title text-left mb-0">
              Kalaburagi's Trusted{' '}
              <span className="text-gradient-gold">Real Estate</span>{' '}
              Partner
            </h2>
            <div className="w-16 h-0.5 bg-gold-gradient my-4 sm:my-6" />

            <p className="font-inter text-gray-400 text-sm leading-relaxed mb-4 sm:mb-6">
              At Sadhanland Realestate, we believe every family deserves a beautiful
              home. We specialize in crafting premium independent 2BHK houses in
              Kalaburagi — designed with modern aesthetics, quality materials, and
              attention to every detail.
            </p>

            <p className="font-inter text-gray-400 text-sm leading-relaxed mb-6 sm:mb-8">
              Our mission is simple: deliver homes that you fall in love with, backed
              by 100% transparent dealings and dedicated personal service. When you
              choose Sadhanland, you choose trust, quality, and peace of mind.
            </p>

            {/* Highlights */}
            <ul className="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2.5 sm:gap-3 font-inter text-sm text-gray-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <CheckCircle2 size={16} className="text-gold-500 shrink-0 mt-0.5" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <a
              href="tel:9164322355"
              className="btn-gold"
              id="about-call-us"
            >
              Talk to an Expert
            </a>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20 md:mt-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="font-inter text-gray-400 text-[10px] sm:text-xs tracking-wide uppercase mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
