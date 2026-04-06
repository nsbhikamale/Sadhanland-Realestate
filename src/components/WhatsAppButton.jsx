import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919164322355?text=Hi, I'm interested in a property at Sadhanland Realestate."
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-float-btn"
      aria-label="Chat on WhatsApp"
      className="floating-whatsapp group"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        viewBox="0 0 32 32"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 sm:w-7 sm:h-7"
      >
        <path d="M16.003 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.353.641 4.636 1.856 6.64L2.667 29.333l6.88-1.805A13.28 13.28 0 0016.003 29.333C23.37 29.333 29.333 23.364 29.333 16c0-7.364-5.963-13.333-13.33-13.333zm0 24A11.312 11.312 0 019.44 24.08l-.42-.25-4.08 1.07 1.09-3.97-.277-.43A11.297 11.297 0 014.64 16c0-6.27 5.094-11.36 11.363-11.36 6.27 0 11.363 5.09 11.363 11.36 0 6.27-5.093 11.36-11.363 11.36zM22.31 19.1c-.344-.174-2.04-1.006-2.357-1.12-.317-.117-.547-.174-.777.173-.23.346-.894 1.12-1.1 1.35-.2.23-.4.26-.747.087-.346-.17-1.46-.537-2.78-1.715-1.027-.917-1.72-2.05-1.923-2.397-.2-.346-.021-.533.152-.706.155-.154.345-.4.516-.6.17-.2.23-.346.345-.576.115-.23.058-.433-.03-.607-.087-.174-.777-1.873-1.065-2.567-.28-.674-.564-.583-.777-.593l-.663-.01c-.23 0-.603.086-.918.433-.316.347-1.203 1.176-1.203 2.873s1.232 3.333 1.403 3.562c.17.23 2.424 3.704 5.87 5.194.82.354 1.46.565 1.96.723.822.261 1.57.224 2.16.136.66-.098 2.04-.833 2.328-1.638.287-.806.287-1.497.2-1.64-.085-.143-.315-.23-.659-.404z"/>
      </svg>

      {/* Tooltip - hidden on mobile */}
      <span className="hidden sm:block absolute right-16 bg-dark-900 text-white font-inter text-xs px-3 py-1.5 rounded-lg whitespace-nowrap
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-dark-600 shadow-lg pointer-events-none">
        Chat on WhatsApp
      </span>

      {/* Ping animation */}
      <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full">
        <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" />
      </span>
    </motion.a>
  )
}
