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
    <span ref={ref} className="font-playfair text-4xl text-gradient-gold font-bold">
      <span ref={displayRef}>0{suffix}</span>
    </span>
  )
}

const stats = [
  { label: 'Properties Sold', value: 500, suffix: '+' },
  { label: 'Happy Clients', value: 1000, suffix: '+' },
  { label: 'Years Experience', value: 10, suffix: '+' },
  { label: 'Prime Locations', value: 25, suffix: '+' },
]

const highlights = [
  'Licensed & RERA registered real estate firm',
  'Expert knowledge of Kalaburagi real estate market',
  'End-to-end assistance from search to registration',
  '100% transparent dealings — no hidden charges',
  'Dedicated post-sale support & legal guidance',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src="/images/about.png"
                alt="Sadhanland Realestate team"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* Gold frame accent */}
              <div className="absolute inset-0 border-2 border-gold-500/20 rounded-3xl pointer-events-none" />
            </div>
            {/* Floating card */}
            <motion.div
              className="absolute -bottom-8 -right-4 md:-right-8 glass-gold p-5 rounded-2xl shadow-gold max-w-[200px]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring' }}
            >
              <p className="font-playfair text-gold-400 text-3xl font-bold">10+</p>
              <p className="font-inter text-gray-300 text-xs mt-1 leading-snug">Years of Real Estate Excellence</p>
            </motion.div>
            {/* Corner accent */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-gold-500 rounded-tl-2xl" />
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
              Kalaburagi's Most{' '}
              <span className="text-gradient-gold">Trusted</span>{' '}
              Real Estate Partner
            </h2>
            <div className="w-16 h-0.5 bg-gold-gradient my-6" />

            <p className="font-inter text-gray-400 text-sm leading-relaxed mb-6">
              Sadhanland Realestate has been serving the people of Kalaburagi for over a decade,
              building trust one property at a time. We specialize in premium residential and
              commercial real estate, guiding our clients through every step of their property journey —
              from discovery to documentation.
            </p>

            <p className="font-inter text-gray-400 text-sm leading-relaxed mb-8">
              Our deep-rooted knowledge of the Kalaburagi market, combined with a client-first approach,
              makes us the go-to real estate partner for homebuyers, investors, and sellers alike.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 font-inter text-sm text-gray-300"
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
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
              <p className="font-inter text-gray-400 text-xs tracking-wide uppercase mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
