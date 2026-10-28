import { SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_TEL_URI, SITE_WHATSAPP_URI } from '../config/site'

export function buildInquiryText(fields: {
  name?: string
  phone?: string
  machine?: string
  attachments?: string
  start?: string
  end?: string
  job?: string
}) {
  return [
    'Crown Rentals request',
    fields.name ? `Name: ${fields.name}` : '',
    fields.phone ? `Phone: ${fields.phone}` : '',
    fields.machine ? `Machine: ${fields.machine}` : '',
    fields.attachments ? `Attachments: ${fields.attachments}` : '',
    fields.start || fields.end ? `Dates: ${fields.start || 'TBD'} to ${fields.end || 'TBD'}` : '',
    fields.job ? `Job: ${fields.job}` : '',
  ]
    .filter(Boolean)
    .join('\n')
}

export function whatsAppHref(text?: string) {
  if (!text) return SITE_WHATSAPP_URI
  return `${SITE_WHATSAPP_URI}?text=${encodeURIComponent(text)}`
}

export function mailInquiryHref(subject: string, body: string) {
  return `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

type InquiryButtonsProps = {
  message?: string
  compact?: boolean
}

export default function InquiryButtons({ message, compact }: InquiryButtonsProps) {
  return (
    <div className={`inquiry-row${compact ? ' is-compact' : ''}`}>
      <a href={SITE_PHONE_TEL_URI} className="btn-primary">
        Call {SITE_PHONE_DISPLAY}
      </a>
      <a href={whatsAppHref(message)} className="btn-whatsapp" target="_blank" rel="noreferrer">
        WhatsApp Neal
      </a>
    </div>
  )
}
