import { useRef, useState, type PointerEvent } from 'react'
import Image from 'next/image'

type ProductGalleryProps = {
  images: readonly string[]
  alt: string
  position?: string
  fit?: 'cover' | 'contain'
}

export default function ProductGallery({ images, alt, position = 'center center', fit = 'cover' }: ProductGalleryProps) {
  const shots = images.length > 0 ? images : []
  const [index, setIndex] = useState(0)
  const drag = useRef<{ x: number; start: number } | null>(null)
  if (shots.length === 0) return null
  const current = shots[index]
  const canOrbit = shots.length > 1

  const moveTo = (next: number) => {
    setIndex(((next % shots.length) + shots.length) % shots.length)
  }

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!canOrbit) return
    drag.current = { x: event.clientX, start: index }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || !canOrbit) return
    const step = Math.round((event.clientX - drag.current.x) / 42)
    if (step !== 0) moveTo(drag.current.start + step)
  }

  const onPointerUp = () => {
    drag.current = null
  }

  return (
    <div className="gallery">
      <div
        className={`gallery-stage${canOrbit ? ' is-orbit' : ''}${fit === 'contain' ? ' is-contain' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <Image
          src={current}
          alt={alt}
          fill
          draggable={false}
          sizes="(max-width: 860px) 100vw, 50vw"
          style={{ objectFit: fit, objectPosition: position }}
        />
        {canOrbit ? <span className="gallery-360">360 · swipe to rotate</span> : null}
        {canOrbit ? (
          <div className="gallery-controls" onPointerDown={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => moveTo(index - 1)}>
              Prev view
            </button>
            <span>{index + 1} / {shots.length}</span>
            <button type="button" onClick={() => moveTo(index + 1)}>
              Next view
            </button>
          </div>
        ) : null}
      </div>
      {canOrbit ? (
        <div className="gallery-thumbs">
          {shots.map((src, thumb) => (
            <button
              key={src}
              type="button"
              className={thumb === index ? 'is-active' : ''}
              onClick={() => setIndex(thumb)}
              aria-label={`View ${thumb + 1}`}
            >
              <Image src={src} alt="" width={120} height={80} style={{ objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
