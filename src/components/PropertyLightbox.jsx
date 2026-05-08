import { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

export default function PropertyLightbox({ images, initialIndex, title, onClose }) {
  const [current, setCurrent] = useState(initialIndex || 0)
  const [zoomed, setZoomed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const prev = useCallback(() => {
    setLoaded(false)
    setCurrent((c) => (c - 1 + images.length) % images.length)
  }, [images.length])

  const next = useCallback(() => {
    setLoaded(false)
    setCurrent((c) => (c + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  useEffect(() => {
    setZoomed(false)
    setLoaded(false)
  }, [current])

  const img = images[current]

  return createPortal(
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.96)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        animation: 'lb-fadein 0.25s ease',
      }}
      onClick={onClose}
    >
      <style>{`
        @keyframes lb-fadein { from { opacity:0 } to { opacity:1 } }
        @keyframes lb-img-in { from { opacity:0; transform:scale(0.97) } to { opacity:1; transform:scale(1) } }
        .lb-btn { background:rgba(255,255,255,0.08); backdrop-filter:blur(8px); border:1px solid rgba(201,168,76,0.25); border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all 0.2s; color:#C9A84C; }
        .lb-btn:hover { background:rgba(201,168,76,0.2); border-color:#C9A84C; }
      `}</style>

      {/* Close */}
      <button
        type="button"
        className="lb-btn"
        style={{ position: 'absolute', top: 20, right: 20, width: 42, height: 42, zIndex: 10 }}
        onClick={onClose}
        aria-label="Close"
      >
        <X size={18} />
      </button>

      {/* Title + counter */}
      <div style={{
        position: 'absolute', top: 20, left: 20, right: 72, zIndex: 10,
        fontFamily: 'Inter, sans-serif',
      }}>
        <p style={{ color: '#C9A84C', fontWeight: 700, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>
          {img.label}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>{title} · {current + 1} / {images.length}</p>
      </div>

      {/* Prev */}
      {images.length > 1 && (
        <button type="button" className="lb-btn"
          style={{ position: 'absolute', left: 16, width: 48, height: 48, zIndex: 10 }}
          onClick={(e) => { e.stopPropagation(); prev() }}
          aria-label="Previous"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* Main image */}
      <div
        style={{
          position: 'relative', maxWidth: '90vw', maxHeight: '78vh',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={current}
          src={img.src}
          alt={img.label}
          onLoad={() => setLoaded(true)}
          style={{
            maxWidth: '90vw', maxHeight: '78vh',
            objectFit: 'contain',
            borderRadius: 12,
            boxShadow: '0 25px 80px rgba(0,0,0,0.8)',
            cursor: zoomed ? 'zoom-out' : 'zoom-in',
            transform: zoomed ? 'scale(1.6)' : 'scale(1)',
            transition: 'transform 0.35s ease',
            animation: loaded ? 'lb-img-in 0.25s ease' : 'none',
            opacity: loaded ? 1 : 0.4,
          }}
          onClick={() => setZoomed((z) => !z)}
        />
        {!zoomed && (
          <ZoomIn size={18} style={{
            position: 'absolute', bottom: 12, right: 12,
            color: 'rgba(255,255,255,0.4)', pointerEvents: 'none',
          }} />
        )}
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button type="button" className="lb-btn"
          style={{ position: 'absolute', right: 16, width: 48, height: 48, zIndex: 10 }}
          onClick={(e) => { e.stopPropagation(); next() }}
          aria-label="Next"
        >
          <ChevronRight size={22} />
        </button>
      )}

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div style={{
          position: 'absolute', bottom: 16,
          display: 'flex', gap: 8, padding: '0 16px',
          overflowX: 'auto', maxWidth: '100vw',
        }}
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => { setLoaded(false); setCurrent(i) }}
              style={{
                width: 60, height: 44, flexShrink: 0,
                borderRadius: 8, overflow: 'hidden', padding: 0, border: 'none',
                outline: i === current ? '2px solid #C9A84C' : '2px solid transparent',
                opacity: i === current ? 1 : 0.5,
                transition: 'all 0.2s', cursor: 'pointer',
              }}
              aria-label={`View ${img.label}`}
            >
              <img src={img.src} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      )}
    </div>,
    document.body
  )
}
