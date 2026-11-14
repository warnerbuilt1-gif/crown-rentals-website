import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_URI, SITE_PHOTO_SMS_URI } from '../config/site'

type PhoneLinkProps = {
  className?: string
  children?: React.ReactNode
}

export default function PhoneLink({ className, children }: PhoneLinkProps) {
  return (
    <a href={SITE_PHONE_TEL_URI} className={className}>
      {children ?? `Call ${SITE_PHONE_DISPLAY}`}
    </a>
  )
}

export function PhoneNumber({ className }: { className?: string }) {
  return (
    <a href={SITE_PHONE_TEL_URI} className={className}>
      {SITE_PHONE_DISPLAY}
    </a>
  )
}

export function TextPhotoLink({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <a href={SITE_PHOTO_SMS_URI} className={className}>
      {children ?? 'Text Neal a photo'}
    </a>
  )
}

export function CallForPrice() {
  return (
    <span>
      <a href={SITE_PHONE_TEL_URI} className="footer-link">Call for price</a>
    </span>
  )
}
