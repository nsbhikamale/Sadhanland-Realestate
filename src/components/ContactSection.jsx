import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Mail, Globe, MapPin, Send, CheckCircle, User, MessageSquare } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '9164322355',
    href: 'tel:9164322355',
    id: 'contact-phone',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sadhanlandinfo@gmail.com',
    href: 'mailto:sadhanlandinfo@gmail.com',
    id: 'contact-email',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'www.sadhanland.com',
    href: 'https://www.sadhanland.com',
    id: 'contact-website',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kalaburagi, Karnataka 585101',
    href: 'https://maps.google.com/?q=Kalaburagi,Karnataka',
    id: 'contact-location',
  },
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    // Simulate form submission (replace with real API call)
    await new Promise((res) => setTimeout(res, 1000))
    console.log('Form data:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-dark-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      {/* BG accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ✦ Get In Touch ✦
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Contact <span className="text-gradient-gold">Us</span>
          </motion.h2>
          <div className="gold-divider" />
          <motion.p
            className="font-inter text-gray-400 max-w-xl mx-auto text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have a property in mind or need expert advice? Reach out to us — our team is ready to assist you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-playfair text-2xl text-white font-semibold mb-8">
              Reach Out To Us
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    target={item.label === 'Website' || item.label === 'Location' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    id={item.id}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors duration-300">
                      <Icon size={18} className="text-gold-500" />
                    </div>
                    <div>
                      <p className="font-inter text-gray-500 text-[11px] tracking-wider uppercase mb-0.5">{item.label}</p>
                      <p className="font-inter text-white text-sm group-hover:text-gold-400 transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:9164322355"
                className="btn-gold justify-center"
                id="contact-call-now"
              >
                <Phone size={15} />
                Call Now
              </a>
              <a
                href="https://wa.me/919164322355?text=Hi, I'm interested in a property at Sadhanland Realestate."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold justify-center"
                id="contact-whatsapp"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-8 border border-dark-600 hover:border-gold-800 transition-colors duration-500"
          >
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full py-12 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={56} className="text-gold-500 mb-4" />
                <h4 className="font-playfair text-2xl text-white font-semibold mb-2">Message Sent!</h4>
                <p className="font-inter text-gray-400 text-sm">
                  Our team will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" id="contact-form">
                <h3 className="font-playfair text-xl text-white font-semibold mb-6">Send us a Message</h3>

                {/* Name */}
                <div>
                  <label className="font-inter text-gray-400 text-xs tracking-wide uppercase mb-1.5 block">
                    Full Name *
                  </label>
                  <div
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 border transition-all duration-300
                      ${errors.name
                        ? 'border-red-500 bg-dark-700'
                        : 'border-dark-400 bg-dark-700 focus-within:border-gold-500'
                      }`}
                  >
                    <User size={15} className="text-gray-500 shrink-0" />
                    <input
                      id="form-name"
                      type="text"
                      placeholder="Your full name"
                      {...register('name', { required: 'Name is required' })}
                      className="bg-transparent flex-1 text-white text-sm placeholder-gray-500 outline-none font-inter"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="font-inter text-gray-400 text-xs tracking-wide uppercase mb-1.5 block">
                    Phone Number *
                  </label>
                  <div
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 border transition-all duration-300
                      ${errors.phone
                        ? 'border-red-500 bg-dark-700'
                        : 'border-dark-400 bg-dark-700 focus-within:border-gold-500'
                      }`}
                  >
                    <Phone size={15} className="text-gray-500 shrink-0" />
                    <input
                      id="form-phone"
                      type="tel"
                      placeholder="Your phone number"
                      {...register('phone', {
                        required: 'Phone is required',
                        pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit Indian mobile number' },
                      })}
                      className="bg-transparent flex-1 text-white text-sm placeholder-gray-500 outline-none font-inter"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="font-inter text-gray-400 text-xs tracking-wide uppercase mb-1.5 block">
                    Email Address
                  </label>
                  <div
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 border transition-all duration-300
                      ${errors.email
                        ? 'border-red-500 bg-dark-700'
                        : 'border-dark-400 bg-dark-700 focus-within:border-gold-500'
                      }`}
                  >
                    <Mail size={15} className="text-gray-500 shrink-0" />
                    <input
                      id="form-email"
                      type="email"
                      placeholder="your@email.com"
                      {...register('email', {
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
                      })}
                      className="bg-transparent flex-1 text-white text-sm placeholder-gray-500 outline-none font-inter"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Property Type */}
                <div>
                  <label className="font-inter text-gray-400 text-xs tracking-wide uppercase mb-1.5 block">
                    Interested In
                  </label>
                  <select
                    id="form-interest"
                    {...register('interest')}
                    className="w-full bg-dark-700 border border-dark-400 text-white rounded-xl px-4 py-3
                               focus:outline-none focus:border-gold-500 transition-all duration-300
                               font-inter text-sm"
                    style={{ color: '#9E9E9E' }}
                    onChange={(e) => { e.target.style.color = e.target.value ? 'white' : '#9E9E9E' }}
                  >
                    <option value="" className="bg-dark-700 text-gray-400">Select property type</option>
                    <option value="2BHK" className="bg-dark-700 text-white">2 BHK Apartment</option>
                    <option value="3BHK" className="bg-dark-700 text-white">3 BHK Apartment</option>
                    <option value="Plot" className="bg-dark-700 text-white">Residential Plot</option>
                    <option value="Commercial" className="bg-dark-700 text-white">Commercial Property</option>
                    <option value="Villa" className="bg-dark-700 text-white">Villa / Independent House</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-inter text-gray-400 text-xs tracking-wide uppercase mb-1.5 block">
                    Message
                  </label>
                  <div
                    className="flex items-start gap-3 rounded-xl px-4 py-3 border border-dark-400
                               bg-dark-700 focus-within:border-gold-500 transition-all duration-300"
                  >
                    <MessageSquare size={15} className="text-gray-500 shrink-0 mt-0.5" />
                    <textarea
                      id="form-message"
                      rows={3}
                      placeholder="Tell us about your property requirements..."
                      {...register('message')}
                      className="bg-transparent flex-1 text-white text-sm placeholder-gray-500 outline-none resize-none font-inter"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="form-submit-btn"
                  className="btn-gold w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
