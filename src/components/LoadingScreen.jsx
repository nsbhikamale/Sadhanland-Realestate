import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
      style={{ background: '#0A0A0A' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Ambient gold glow behind logo */}
      <div
        className="absolute rounded-full"
        style={{
          width: 220,
          height: 220,
          background: 'radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Logo container */}
      <motion.div
        className="relative mb-10 flex items-center justify-center"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Outer slow-rotating gold ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 140,
            height: 140,
            border: '1.5px solid rgba(201,168,76,0.5)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />

        {/* Inner fast-rotating dashed ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 115,
            height: 115,
            border: '1.5px dashed rgba(201,168,76,0.25)',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />

        {/* Logo image */}
        <div
          className="relative flex items-center justify-center rounded-2xl overflow-hidden"
          style={{
            width: 96,
            height: 96,
            background: '#132248',
            boxShadow: '0 0 32px rgba(201,168,76,0.4), 0 0 8px rgba(201,168,76,0.2)',
          }}
        >
          <img
            src="/images/logo-icon.png"
            alt="Sadhanland Real Estate"
            className="w-full h-full object-contain p-2"
          />
        </div>
      </motion.div>

      {/* Brand Name */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <h1
          className="font-playfair text-3xl font-bold tracking-wider mb-1"
          style={{
            background: 'linear-gradient(135deg, #C9A84C, #E8C97A, #C9A84C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          SADHANLAND
        </h1>
        <p className="font-inter text-xs tracking-[0.35em] uppercase" style={{ color: '#9E9E9E' }}>
          Real Estate
        </p>
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="font-inter text-xs mt-3 tracking-widest uppercase"
        style={{ color: 'rgba(201,168,76,0.5)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.6 }}
      >
        Premium Properties · Kalaburagi
      </motion.p>

      {/* Loading bar */}
      <motion.div
        className="mt-10 rounded-full overflow-hidden"
        style={{ width: 180, height: 2, background: 'rgba(255,255,255,0.07)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #8B6914, #C9A84C, #E8C97A)' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ delay: 1, duration: 1.4, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}
