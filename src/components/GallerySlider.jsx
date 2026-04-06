import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const galleryImages = [
  {
    src: '/images/gallery1.png',
    caption: 'Luxury Master Bedroom Suite',
    subtitle: 'Spacious & Elegantly Designed',
  },
  {
    src: '/images/gallery2.png',
    caption: 'Premium Kitchen Design',
    subtitle: 'Modern Appliances & Marble Finishes',
  },
  {
    src: '/images/gallery3.png',
    caption: 'Resort-Style Pool & Terrace',
    subtitle: 'Amenities That Elevate Your Lifestyle',
  },
  {
    src: '/images/property1.png',
    caption: 'Modern Apartment Exterior',
    subtitle: 'Premium Architecture & Facade',
  },
  {
    src: '/images/about.png',
    caption: 'Our Expert Team',
    subtitle: 'Dedicated to Your Property Goals',
  },
]

export default function GallerySlider() {
  return (
    <section id="gallery" className="py-24 bg-dark-800 relative overflow-hidden">
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
            ✦ Visual Tour ✦
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Property <span className="text-gradient-gold">Gallery</span>
          </motion.h2>
          <div className="gold-divider" />
        </div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.975 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-card border border-dark-600"
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            loop
            className="gallery-swiper"
          >
            {galleryImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-[400px] md:h-[550px]">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                  />
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark-900/90 to-transparent">
                    <p className="font-inter text-gold-500 text-xs tracking-widest uppercase mb-1">{img.subtitle}</p>
                    <h3 className="font-playfair text-white text-2xl md:text-3xl font-semibold">{img.caption}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Thumbnail row */}
        <div className="grid grid-cols-5 gap-3 mt-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden h-16 md:h-20 border border-dark-600 hover:border-gold-500 transition-colors duration-300 cursor-pointer"
            >
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          color: #C9A84C;
          background: rgba(10,10,10,0.6);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.3);
        }
        .gallery-swiper .swiper-button-next::after,
        .gallery-swiper .swiper-button-prev::after {
          font-size: 16px;
        }
        .gallery-swiper .swiper-pagination-bullet {
          background: #C9A84C;
          opacity: 0.4;
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #C9A84C;
        }
      `}</style>
    </section>
  )
}
