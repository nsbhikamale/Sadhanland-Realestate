import { useState } from 'react'
import { motion } from 'framer-motion'
import PropertyCard from './PropertyCard'

const properties = [
  {
    id: 1,
    title: 'Luxury 3BHK Apartment',
    location: 'Super Market Road, Kalaburagi',
    price: '65 Lakhs',
    type: '3 BHK',
    area: '1450 sq.ft',
    badge: 'Featured',
    category: '3BHK',
    image: '/images/property1.png',
  },
  {
    id: 2,
    title: 'Premium 2BHK Villa',
    location: 'Sedam Road, Kalaburagi',
    price: '42 Lakhs',
    type: '2 BHK',
    area: '1050 sq.ft',
    badge: 'New',
    category: '2BHK',
    image: '/images/property2.png',
  },
  {
    id: 3,
    title: 'Investment Plot',
    location: 'Gulbarga Layout, Kalaburagi',
    price: '28 Lakhs',
    type: 'Plot',
    area: '1200 sq.ft',
    badge: 'Hot Deal',
    category: 'Plot',
    image: '/images/property3.png',
  },
  {
    id: 4,
    title: 'Sky-View Penthouse',
    location: 'Aland Road, Kalaburagi',
    price: '1.2 Cr',
    type: '4 BHK',
    area: '2800 sq.ft',
    badge: 'Luxury',
    category: '3BHK',
    image: '/images/property4.png',
  },
  {
    id: 5,
    title: 'Gated Community Villa',
    location: 'Muradi Road, Kalaburagi',
    price: '55 Lakhs',
    type: '3 BHK',
    area: '1700 sq.ft',
    badge: 'New Launch',
    category: '3BHK',
    image: '/images/property5.png',
  },
  {
    id: 6,
    title: 'Cozy 2BHK Flat',
    location: 'Station Road, Kalaburagi',
    price: '32 Lakhs',
    type: '2 BHK',
    area: '900 sq.ft',
    badge: 'Ready to Move',
    category: '2BHK',
    image: '/images/property1.png',
  },
]

const FILTERS = ['All', '2BHK', '3BHK', 'Plot']

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? properties
    : properties.filter((p) => p.category === activeFilter)

  return (
    <section id="properties" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ✦ Handpicked For You ✦
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Featured{' '}
            <span className="text-gradient-gold">Properties</span>
          </motion.h2>
          <div className="gold-divider" />
          <motion.p
            className="font-inter text-gray-400 max-w-xl mx-auto text-sm leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Explore our curated collection of premium residential and commercial
            properties across Kalaburagi's prime locations.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              id={`filter-${filter.toLowerCase()}`}
              className={`font-inter text-sm font-medium px-6 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gold-500 border-gold-500 text-dark-900'
                  : 'border-dark-500 text-gray-400 hover:border-gold-600 hover:text-gold-500'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        {/* View All */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="tel:9164322355"
            className="btn-outline-gold"
            id="view-all-properties"
          >
            View All Properties
          </a>
        </motion.div>
      </div>
    </section>
  )
}
