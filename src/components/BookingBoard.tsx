import { useEffect, useId, useMemo, useState, type FormEvent } from 'react'
import { useRouter } from 'next/router'
import {
  ATTACHMENTS,
  CONTRACT_TERMS,
  FLEET,
  JOB_GUIDES,
  SITE_DELIVERY_FEE,
  SITE_OWNER,
  SITE_PICKUP_WINDOWS,
  SITE_WEEKLY_DAYS,
  formatUsd,
} from '../config/site'
import { buildQuote, rangeHasHold, rentalDays, todayISO } from '../lib/booking'
import { buildInquiryText, mailInquiryHref, whatsAppHref } from './InquiryButtons'
import BookingCalendar from './BookingCalendar'
import JobSelector from './JobSelector'

type BookingBoardProps = {
  initialSlug?: string
  compact?: boolean
}

export default function BookingBoard({ initialSlug = '', compact = false }: BookingBoardProps) {
  const router = useRouter()
  const fieldId = useId()
  const [slugs, setSlugs] = useState<string[]>(initialSlug ? [initialSlug] : [])
  const [attachments, setAttachments] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [delivery, setDelivery] = useState(false)
  const [windowSlot, setWindowSlot] = useState<(typeof SITE_PICKUP_WINDOWS)[number]>(SITE_PICKUP_WINDOWS[0])
  const [job, setJob] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [sent, setSent] = useState(false)
  const [formErrors, setFormErrors] = useState<string[]>([])

  useEffect(() => {
    if (initialSlug) {
      setSlugs([initialSlug])
      return
    }
    const jobId = typeof router.query.job === 'string' ? router.query.job : ''
    const item = typeof router.query.item === 'string' ? router.query.item : ''
    const guide = JOB_GUIDES.find((entry) => entry.id === jobId)
    if (guide) {
      setSlugs([...guide.slugs])
      return
    }
    if (item && FLEET.some((entry) => entry.slug === item)) setSlugs([item])
  }, [initialSlug, router.query.job, router.query.item])

  const selected = useMemo(() => FLEET.filter((item) => slugs.includes(item.slug)), [slugs])

  useEffect(() => {
    if (selected.length > 0 && !start && !end) {
      const today = todayISO()
      setStart(today)
      setEnd(today)
    }
  }, [selected.length, start, end])
  const days = rentalDays(start, end)
  const quote = useMemo(() => buildQuote(selected, start && end ? days : 1, delivery), [days, delivery, selected, start, end])
  const conflict = rangeHasHold(slugs, start, end)

  const toggle = (slug: string) => {
    setSlugs((current) => (current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug]))
  }

  const inquiry = buildInquiryText({
    name,
    phone,
    machine: selected.map((item) => item.name).join(', '),
    attachments: [
      attachments,
      delivery ? `Delivery (+${formatUsd(SITE_DELIVERY_FEE)})` : 'Yard pickup',
      `Window: ${windowSlot}`,
      email ? `Email: ${email}` : '',
      `Est. due: ${quote.lines.find((line) => line.label === 'Est. due')?.value ?? ''}`,
      `Deposit: ${formatUsd(quote.deposit)}`,
    ]
      .filter(Boolean)
      .join(' · '),
    start,
    end,
    job,
  })

  const canSend = selected.length > 0 && start && end && name.trim().length > 1 && phone.replace(/\D/g, '').length >= 10 && agreed

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const next: string[] = []
    if (selected.length === 0) next.push('Choose at least one machine.')
    if (!start || !end) next.push('Pick a start and return date.')
    if (name.trim().length < 2) next.push('Enter your name.')
    if (phone.replace(/\D/g, '').length < 10) next.push('Enter a phone number with at least 10 digits.')
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.push('That email does not look complete.')
    if (!agreed) next.push('Agree to the rental terms to send the request.')
    setFormErrors(next)
    if (next.length > 0) return
    window.location.href = mailInquiryHref(`Rental request — ${name.trim()}`, inquiry)
    setSent(true)
  }

  return (
    <form className={`booking${compact ? ' is-compact' : ''}`} onSubmit={submit}>
      <div className="booking-main">
        <section className="booking-panel">
          <p className="kicker">What do you need</p>
          <h2>Select the iron</h2>
          <JobSelector selected={slugs} onSelect={setSlugs} />
          <div className="booking-machines">
            {FLEET.map((item) => (
              <label key={item.slug} className={`booking-machine${slugs.includes(item.slug) ? ' is-active' : ''}`}>
                <input
                  type="checkbox"
                  checked={slugs.includes(item.slug)}
                  onChange={() => toggle(item.slug)}
                />
                <strong>{item.name}</strong>
                <span>{formatUsd(item.dailyRate)} / day · {formatUsd(item.dailyRate * SITE_WEEKLY_DAYS)} / week</span>
              </label>
            ))}
          </div>
          <label className="form-field">
            <span>Attachments</span>
            <input
              type="text"
              value={attachments}
              onChange={(event) => setAttachments(event.target.value)}
              placeholder="Bucket, forks, grapple…"
              list={`${fieldId}-attachments`}
            />
            <datalist id={`${fieldId}-attachments`}>
              {ATTACHMENTS.map((item) => (
                <option key={item.name} value={item.name} />
              ))}
            </datalist>
          </label>
        </section>

        <section className="booking-panel">
          <p className="kicker">When</p>
          <h2>Pick the window</h2>
          <BookingCalendar start={start} end={end} slugs={slugs} onChange={(nextStart, nextEnd) => {
            setStart(nextStart)
            setEnd(nextEnd)
          }} />
          <div className="booking-logistics">
            <label className={`booking-choice${!delivery ? ' is-active' : ''}`}>
              <input type="radio" name={`${fieldId}-fulfillment`} checked={!delivery} onChange={() => setDelivery(false)} />
              <strong>Yard pickup</strong>
              <span>Free · {SITE_OWNER} walks you through it</span>
            </label>
            <label className={`booking-choice${delivery ? ' is-active' : ''}`}>
              <input type="radio" name={`${fieldId}-fulfillment`} checked={delivery} onChange={() => setDelivery(true)} />
              <strong>Delivery</strong>
              <span>{formatUsd(SITE_DELIVERY_FEE)} · Anaconda to Philipsburg</span>
            </label>
          </div>
          <label className="form-field">
            <span>Pickup or drop window</span>
            <select value={windowSlot} onChange={(event) => setWindowSlot(event.target.value as (typeof SITE_PICKUP_WINDOWS)[number])}>
              {SITE_PICKUP_WINDOWS.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </label>
          <label className="form-field">
            <span>Job and site</span>
            <textarea rows={3} value={job} onChange={(event) => setJob(event.target.value)} placeholder="What is the work and where is it?" />
          </label>
          {conflict ? <p className="booking-warn">A gold day in this range is already requested. Send it anyway — Neal will confirm what is actually open.</p> : null}
        </section>
      </div>

      <aside className="booking-side">
        <div className="quote-card">
          <p className="kicker">Live quote</p>
          <h3>{selected.length ? `${selected.length} item${selected.length === 1 ? '' : 's'}` : 'Select equipment'}</h3>
          <ul>
            {quote.lines.map((line) => (
              <li key={line.label}>
                <span>{line.label}</span>
                <strong>{line.value}</strong>
              </li>
            ))}
          </ul>
          <p className="contact-note">A week on the calendar bills as 6 days. Deposit is a hold, not extra rent. Neal confirms the number before a card is run.</p>
        </div>
        <div className="stripe-step">
          <p className="kicker">Stripe deposit</p>
          <p>Guest checkout first. After Neal confirms the window, you get a Stripe payment link for the deposit hold — no card number is typed on this site.</p>
        </div>

        <div className="booking-panel" id="guest-checkout">
          <p className="kicker">Guest checkout</p>
          <h3>No account needed</h3>
          <label className="form-field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              autoCapitalize="words"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>
          <label className="form-field">
            <span>Phone</span>
            <input
              type="tel"
              name="tel"
              autoComplete="tel"
              inputMode="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </label>
          <label className="form-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="For the confirm and deposit link"
            />
          </label>
          <div className="contract-box">
            {CONTRACT_TERMS.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          {name ? <p className="sign-preview">{name}</p> : null}
          <label className="contract-agree">
            <input type="checkbox" checked={agreed} onChange={(event) => setAgreed(event.target.checked)} />
            <span>I agree to the rental terms. Typed name is my signature on this request.</span>
          </label>
          {formErrors.length > 0 ? (
            <ul className="field-error-list" role="alert">
              {formErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          ) : null}
          {sent ? (
            <p className="modal-confirm" role="status">Request opened in email. Neal confirms the window, then texts a secure card link for the deposit — no card on this site.</p>
          ) : (
            <p className="contact-note">Check the iron, dates, name, phone, and terms, then send. Neal confirms before any card is charged.</p>
          )}
          <div className="booking-actions">
            <a className="btn-whatsapp" href={whatsAppHref(inquiry)} target="_blank" rel="noreferrer">WhatsApp</a>
            <button type="submit" className="btn-primary">Send request</button>
          </div>
        </div>
      </aside>
      {!compact ? (
      <aside className="quote-dock" aria-label="Quote summary">
        <p>
          <strong>{selected.length ? formatUsd(quote.due, true) : 'Pick iron'}</strong>
          <span>
            {selected.length
              ? `${selected[0].name}${selected.length > 1 ? ` +${selected.length - 1}` : ''} · ${quote.days} day${quote.days === 1 ? '' : 's'}`
              : 'Tap a job, then dates'}
          </span>
        </p>
        {canSend ? (
          <button type="submit" className="btn-primary">Send</button>
        ) : (
          <a href="#guest-checkout" className="btn-primary">Checkout</a>
        )}
      </aside>
      ) : null}
    </form>
  )
}
