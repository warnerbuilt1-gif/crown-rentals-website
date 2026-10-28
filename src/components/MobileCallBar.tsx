import Link from 'next/link'
import PhoneLink from './PhoneLink'
import { SITE_WHATSAPP_URI } from '../config/site'

export default function MobileCallBar() {
  return (
    <div className="mobile-call-bar" aria-label="Quick contact actions">
      <PhoneLink className="mobile-call-bar-btn mobile-call-bar-btn-call">Call</PhoneLink>
      <a href={SITE_WHATSAPP_URI} className="mobile-call-bar-btn mobile-call-bar-btn-reserve" target="_blank" rel="noreferrer">
        WhatsApp
      </a>
      <Link href="/book" className="mobile-call-bar-btn mobile-call-bar-btn-reserve">
        Book
      </Link>
    </div>
  )
}
