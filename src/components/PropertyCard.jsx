import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Bed, Maximize2 } from 'lucide-react'
import PropertyImageSlider from './PropertyImageSlider'
import PropertyLightbox from './PropertyLightbox'

export default function PropertyCard({ property, index }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const whatsappLink = `https://wa.me/919164322355?text=${encodeURIComponent(
    `Hi, I'm interested in "${property.title}" at ${property.location}. Please share more details.`
  )}`

  // Support both old single-image and new multi-image format
  const images = property.images
    ? property.images
    : [{ src: property.image, label: property.title, position: 'center 50%' }]

  const openLightbox = (i = 0) => {
    setLightboxIndex(i)
    setLightboxOpen(true)
  }

  return (
    <>
      <motion.div
        className="card-property group"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {/* Image Slider */}
        <div className="relative overflow-hidden" style={{ height: 220 }}>
          <PropertyImageSlider
            images={images}
            badge={property.badge}
            price={property.price}
            cardId={`card-${property.id}`}
            onImageClick={openLightbox}
          />
        </div>

        {/* Card Body */}
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

      {/* Lightbox */}
      {lightboxOpen && (
        <PropertyLightbox
          images={images}
          initialIndex={lightboxIndex}
          title={property.title}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
