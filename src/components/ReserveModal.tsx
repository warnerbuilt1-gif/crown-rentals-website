import { useEffect, useId } from 'react'
import { SITE_OWNER } from '../config/site'
import { useReserve } from './ReserveContext'
import BookingBoard from './BookingBoard'

export default function ReserveModal() {
  const { isOpen, machineSlug, closeReserve } = useReserve()
  const titleId = useId()

  useEffect(() => {
    if (!isOpen) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeReserve()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, closeReserve])

  if (!isOpen) return null

  return (
    <div className="modal-root" role="presentation">
      <button type="button" className="modal-backdrop" aria-label="Close reserve form" onClick={closeReserve} />
      <div className="modal-sheet modal-sheet-booking" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="modal-head">
          <p className="kicker">Book with {SITE_OWNER}</p>
          <h2 id={titleId}>What do you need, and when?</h2>
          <button type="button" className="modal-close" onClick={closeReserve}>
            Close
          </button>
        </div>
        <BookingBoard key={`${machineSlug}-${isOpen}`} initialSlug={machineSlug} compact />
      </div>
    </div>
  )
}
