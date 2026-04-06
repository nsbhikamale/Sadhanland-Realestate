import { motion } from 'framer-motion'
import { MapPin, Bed, Maximize2, IndianRupee } from 'lucide-react'

export default function PropertyCard({ property, index }) {
  return (
    <motion.div
      className="card-property group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image container */}
      <div className="relative overflow-hidden h-56">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-gold-500 text-dark-900 font-inter font-semibold text-[11px] px-3 py-1 rounded-full tracking-wide uppercase">
            {property.badge}
          </span>
        </div>
        {/* Price floating */}
        <div className="absolute bottom-4 right-4 glass px-3 py-1.5 rounded-xl">
          <div className="flex items-center gap-1 text-gold-400 font-playfair font-bold text-base">
            <IndianRupee size={13} />
            <span>{property.price}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-playfair text-white text-lg font-semibold mb-1 group-hover:text-gold-400 transition-colors">
          {property.title}
        </h3>
        <div className="flex items-center gap-1.5 mb-4">
          <MapPin size={13} className="text-gold-500 shrink-0" />
          <span className="font-inter text-gray-400 text-sm">{property.location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 pt-4 border-t border-dark-500">
          <div className="flex items-center gap-1.5 text-gray-400">
            <Bed size={14} className="text-gold-600" />
            <span className="font-inter text-xs">{property.type}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <Maximize2 size={14} className="text-gold-600" />
            <span className="font-inter text-xs">{property.area}</span>
          </div>
          <div className="ml-auto">
            <a
              href="tel:9164322355"
              className="text-gold-500 hover:text-gold-400 font-inter text-xs font-semibold tracking-wide transition-colors"
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
