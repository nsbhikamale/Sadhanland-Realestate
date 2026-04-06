import { motion } from 'framer-motion'
import { MapPin, Bed, Maximize2, IndianRupee } from 'lucide-react'

export default function PropertyCard({ property, index }) {
  const whatsappLink = `https://wa.me/919164322355?text=${encodeURIComponent(
    `Hi, I'm interested in "${property.title}" at ${property.location}. Please share more details.`
  )}`

  return (
    <motion.div
      className="card-property group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="bg-gold-500 text-dark-900 font-inter font-semibold text-[10px] sm:text-[11px] px-2.5 sm:px-3 py-1 rounded-full tracking-wide uppercase">
            {property.badge}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 glass px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl">
          <div className="flex items-center gap-1 text-gold-400 font-inter font-bold text-xs sm:text-sm leading-none">
            <IndianRupee size={11} className="shrink-0" />
            <span className="truncate max-w-[120px]">{property.price}</span>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-playfair text-white text-base sm:text-lg font-semibold mb-1 group-hover:text-gold-400 transition-colors leading-snug">
          {property.title}
        </h3>
        <div className="flex items-center gap-1.5 mb-3 sm:mb-4">
          <MapPin size={12} className="text-gold-500 shrink-0" />
          <span className="font-inter text-gray-400 text-xs sm:text-sm">{property.location}</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-dark-500">
          <div className="flex items-center gap-1.5 shrink-0">
            <Bed size={13} className="text-gold-600 shrink-0" />
            <span className="font-inter text-gray-400 text-xs leading-none">{property.type}</span>
          </div>
          <div className="flex items-center gap-1.5 min-w-0">
            <Maximize2 size={13} className="text-gold-600 shrink-0" />
            <span className="font-inter text-gray-400 text-xs leading-none truncate">{property.area}</span>
          </div>
          <div className="ml-auto shrink-0">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-500 hover:text-gold-400 font-inter text-xs font-semibold tracking-wide transition-colors leading-none whitespace-nowrap"
              id={`property-enquire-${property.id}`}
            >
              Enquire →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
