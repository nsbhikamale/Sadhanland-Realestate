import { useState } from 'react'
import { motion } from 'framer-motion'
import PropertyCard from './PropertyCard'

const properties = [
  {
    id: 1,
    title: 'Modern 2BHK Independent House',
    location: 'Kalaburagi, Karnataka',
    price: 'Contact for Price',
    type: '2 BHK',
    area: 'Contact for Details',
    badge: 'Available Now',
    category: '2BHK',
    images: [
      { src: '/images/house1_img3.jpg', label: 'Front Elevation',  position: 'center 40%' },
      { src: '/images/house1_img1.png', label: 'Living Room',       position: 'center 30%' },
      { src: '/images/house1_img2.jpg', label: 'Interior View',     position: 'center 50%' },
      { src: '/images/property1.png',   label: 'Main Entrance',     position: 'center 50%' },
    ],
  },
  {
    id: 2,
    title: 'Elegant 2BHK Independent House',
    location: 'Kalaburagi, Karnataka',
    price: 'Contact for Price',
    type: '2 BHK',
    area: 'Contact for Details',
    badge: 'Ready to Move',
    category: '2BHK',
    images: [
      { src: '/images/house2_img3.jpg', label: 'Front Elevation', position: 'center 55%' },
      { src: '/images/house2_img4.png', label: 'Living Room',      position: 'center 50%' },
      { src: '/images/house2_img2.jpg', label: 'Bedroom Door',     position: 'center 40%' },
      { src: '/images/house2_img1.png', label: 'Interior View',    position: 'center 45%' },
    ],
  },
  {
    id: 3,
    title: '2BHK Flat in Apartment',
    location: 'Kalaburagi, Karnataka',
    price: 'Contact for Price',
    type: '2 BHK',
    area: 'Contact for Details',
    badge: 'Under Construction',
    category: 'Apartment',
    images: [
      { src: '/images/apt1_elevation.jpg',     label: 'Building Elevation',  position: 'center 50%' },
      { src: '/images/apt1_floorplan.jpg',     label: '3D Floor Plan',       position: 'center 50%' },
      { src: '/images/apt1_construction3.jpg', label: 'Construction View',   position: 'center 45%' },
      { src: '/images/apt1_construction1.jpg', label: 'Slab & Columns',      position: 'center 40%' },
      { src: '/images/apt1_construction2.jpg', label: 'Site Progress',       position: 'center 45%' },
    ],
  },
  {
    id: 4,
    title: '2 Floor Independent House for Sale',
    location: 'Kalaburagi, Karnataka',
    price: 'Contact for Price',
    type: '4 BHK',
    area: 'G+1 | 2 Floors',
    badge: 'Premium Property',
    category: 'Resale',
    images: [
      { src: '/images/h3_elevation.jpg', label: 'Front Elevation', position: 'center 55%' },
      { src: '/images/h3_living.jpg',    label: 'Living & Dining', position: 'center 50%' },
      { src: '/images/h3_bedroom.jpg',   label: 'Bedroom',         position: 'center 40%' },
      { src: '/images/h3_kitchen.jpg',   label: 'Kitchen',         position: 'center 35%' },
      { src: '/images/h3_hall.jpg',      label: 'Hall / Lounge',   position: 'center 50%' },
    ],
  },
  {
    id: 5,
    title: 'NA GDA Plots in Layout',
    location: 'Kalaburagi, Karnataka',
    price: 'Contact for Price',
    type: 'Plots',
    area: 'NA & GDA Approved',
    badge: 'New Launch',
    category: 'Plots',
    images: [
      { src: '/images/plot1_layout_view.jpg',  label: 'Layout View',           position: 'center 50%' },
      { src: '/images/plot1_gate.jpg',          label: 'Main Gate',             position: 'center 40%' },
      { src: '/images/plot1_masterplan.jpg',    label: 'Master Plan',           position: 'center 50%' },
      { src: '/images/plot1_park_fitness.jpg',  label: 'Fitness Park',          position: 'center 50%' },
      { src: '/images/plot1_park_play.jpg',     label: "Children's Play Area",  position: 'center 50%' },
    ],
  },
]

const FILTERS = ['All', '2BHK', 'Apartment', 'Resale', 'Plots']

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? properties
    : properties.filter((p) => p.category === activeFilter)

  return (
    <section id="properties" className="py-16 sm:py-20 md:py-24 scroll-mt-16 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ✦ Our Current Listings ✦
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Available{' '}
            <span className="text-gradient-gold">Properties</span>
          </motion.h2>
          <div className="gold-divider" />
          <motion.p
            className="font-inter text-gray-400 max-w-xl mx-auto text-sm leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Homes, flats, plots &amp; more — handpicked properties in Kalaburagi's
            finest locations. Quality construction, 100% transparent dealings.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-8 sm:mb-12"
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
              className={`font-inter text-sm font-medium px-5 sm:px-6 py-2 rounded-full border transition-all duration-300 ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {filtered.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        {/* View All */}
        <motion.div
          className="text-center mt-10 sm:mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://wa.me/919164322355?text=Hi%2C%20I%27m%20interested%20in%20your%20available%20properties.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
            id="view-all-properties"
          >
            Enquire About These Properties
          </a>
        </motion.div>
      </div>
    </section>
  )
}
