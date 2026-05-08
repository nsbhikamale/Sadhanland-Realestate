import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, A11y } from 'swiper/modules'
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

export default function PropertyImageSlider({ images, badge, price, cardId, onImageClick }) {
  const swiperRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const sc = `ps${cardId}`

  const prev = (e) => { e.stopPropagation(); swiperRef.current?.slidePrev() }
  const next = (e) => { e.stopPropagation(); swiperRef.current?.slideNext() }

  // Badge color
  const badgeStyle = (() => {
    if (badge === 'Under Construction') return { bg: 'linear-gradient(135deg,#2563eb,#0ea5e9)', color: '#fff' }
    if (badge === 'Premium Property')   return { bg: 'linear-gradient(135deg,#16a34a,#22c55e)', color: '#fff' }
    if (badge === 'New Launch')         return { bg: 'linear-gradient(135deg,#d97706,#f59e0b)', color: '#fff' }
    return { bg: 'linear-gradient(135deg,#C9A84C,#e8c97a)', color: '#0A0A0A' }
  })()

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '100%', cursor: 'pointer' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <style>{`
        .${sc}-pagination { position:absolute; bottom:10px; left:50%; transform:translateX(-50%); display:flex; gap:4px; z-index:15; }
        .${sc}-dot { width:6px; height:6px; border-radius:99px; background:rgba(255,255,255,0.35); transition:all 0.3s; cursor:pointer; }
        .${sc}-dot.active { width:18px; background:#C9A84C; }
        .${sc}-arrow { position:absolute; top:50%; z-index:20; background:rgba(0,0,0,0.55); backdrop-filter:blur(6px); border:1px solid rgba(201,168,76,0.3); border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; color:#C9A84C; cursor:pointer; transition:all 0.25s; }
        .${sc}-arrow:hover { background:rgba(201,168,76,0.25); border-color:#C9A84C; }
        .${sc}-arrow-l { left:8px; }
        .${sc}-arrow-r { right:8px; }
      `}</style>

      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop={images.length > 1}
        onSwiper={(s) => { swiperRef.current = s }}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        style={{ width: '100%', height: '100%' }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <button
              type="button"
              style={{ display: 'block', width: '100%', height: '100%', padding: 0, border: 'none', background: 'none' }}
              onClick={() => onImageClick && onImageClick(i)}
              aria-label={`View ${img.label}`}
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: img.position || 'center 50%',
                  transform: hovered ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.6s ease',
                  display: 'block',
                }}
              />
              {/* Image label */}
              {img.label && (
                <span style={{
                  position: 'absolute', bottom: 30, left: 10, zIndex: 10,
                  fontFamily: 'Inter, sans-serif', fontSize: 9, fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.7)', pointerEvents: 'none',
                }}>
                  {img.label}
                </span>
              )}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button type="button" aria-label="Previous" onClick={prev} className={`${sc}-arrow ${sc}-arrow-l`}
            style={{ opacity: hovered ? 1 : 0, transform: `translateY(-50%) translateX(${hovered ? '0' : '-4px'})`, transition: 'all 0.25s' }}>
            <ChevronLeft size={15} strokeWidth={2.5} />
          </button>
          <button type="button" aria-label="Next" onClick={next} className={`${sc}-arrow ${sc}-arrow-r`}
            style={{ opacity: hovered ? 1 : 0, transform: `translateY(-50%) translateX(${hovered ? '0' : '4px'})`, transition: 'all 0.25s' }}>
            <ChevronRight size={15} strokeWidth={2.5} />
          </button>
        </>
      )}

      {/* Pagination dots */}
      {images.length > 1 && (
        <div className={`${sc}-pagination`}>
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${sc}-dot${i === activeIndex ? ' active' : ''}`}
              onClick={(e) => { e.stopPropagation(); swiperRef.current?.slideToLoop(i) }}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Badge — top left */}
      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 20, pointerEvents: 'none' }}>
        <span style={{
          background: badgeStyle.bg,
          color: badgeStyle.color,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: 9,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '4px 10px',
          borderRadius: 99,
          display: 'inline-block',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        }}>
          {badge}
        </span>
      </div>

      {/* Photo counter + camera icon — top right */}
      <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 20, pointerEvents: 'none' }}>
        <span style={{
          display: 'flex', alignItems: 'center', gap: 4,
          background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)',
          border: '1px solid rgba(201,168,76,0.25)',
          color: 'rgba(255,255,255,0.9)',
          fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10,
          padding: '3px 8px', borderRadius: 99,
        }}>
          <Camera size={10} />
          {activeIndex + 1}/{images.length}
        </span>
      </div>

      {/* Price tag — bottom right */}
      <div style={{ position: 'absolute', bottom: 10, right: 10, zIndex: 20, pointerEvents: 'none' }}>
        <span style={{
          display: 'flex', alignItems: 'center', gap: 3,
          background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
          color: '#C9A84C',
          fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 11,
          padding: '4px 10px', borderRadius: 99,
          border: '1px solid rgba(201,168,76,0.3)',
        }}>
          ₹ {price}
        </span>
      </div>
    </div>
  )
}
