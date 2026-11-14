import { FormEvent, useState } from 'react'
import Seo from '../components/Seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PhoneLink from '../components/PhoneLink'
import { mailInquiryHref } from '../components/InquiryButtons'
import { SITE_EMAIL, SITE_NAME, SITE_PHONE_TEL_URI, SITE_SMS_URI } from '../config/site'

const BENEFITS = [
  'Priority scheduling',
  'One call to book multiple machines',
  'Delivery to your job site',
  'Owner-operated by Neal',
] as const

export default function Contractors() {
  const [company, setCompany] = useState('')
  const [contact, setContact] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [equipment, setEquipment] = useState('')
  const [notes, setNotes] = useState('')
  const [errors, setErrors] = useState<string[]>([])
  const [sent, setSent] = useState(false)

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const next: string[] = []
    if (company.trim().length < 2) next.push('Enter the company name.')
    if (contact.trim().length < 2) next.push('Enter a contact name.')
    if (phone.replace(/\D/g, '').length < 10) next.push('Enter a phone number with at least 10 digits.')
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.push('That email does not look complete.')
    setErrors(next)
    if (next.length > 0) return
    const body = [
      'Crown Rentals contractor account request',
      `Company: ${company.trim()}`,
      `Contact: ${contact.trim()}`,
      `Phone: ${phone.trim()}`,
      email.trim() ? `Email: ${email.trim()}` : '',
      equipment.trim() ? `Typical equipment: ${equipment.trim()}` : '',
      notes.trim() ? `Notes: ${notes.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n')
    window.location.href = mailInquiryHref(`Contractor account — ${company.trim()}`, body)
    setSent(true)
  }

  return (
    <>
      <Seo
        title={`Contractor Equipment Rentals in Anaconda & Butte, MT | ${SITE_NAME}`}
        description="Contractor equipment rentals in Anaconda and Butte, MT. Set up an account for faster booking and repeat rentals. Contractor rates: call or text Neal."
        path="/contractors/"
      />
      <Header />
      <main id="main">
        <section className="page-hero">
          <p className="kicker">Accounts</p>
          <h1>Contractor Accounts</h1>
          <p>
            Crown Rentals works with local contractors in Anaconda, Butte and the surrounding area. Set up an account
            for faster booking and repeat rentals.
          </p>
          <div className="hero-actions page-actions">
            <PhoneLink className="btn-primary" />
          </div>
        </section>

        <section className="about-grid">
          <div className="about-panel">
            <h2 className="panel-title">Benefits</h2>
            <ul className="stack-list">
              {BENEFITS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Contractor rates:{' '}
              <a href={SITE_PHONE_TEL_URI} className="footer-link">call</a>
              {' or '}
              <a href={SITE_SMS_URI} className="footer-link">text</a>
              {' '}Neal.
            </p>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <h2 className="panel-title">Request an account</h2>
            <label className="form-field">
              <span>Company name</span>
              <input
                type="text"
                name="organization"
                autoComplete="organization"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                required
              />
            </label>
            <label className="form-field">
              <span>Contact name</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                autoCapitalize="words"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
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
              />
            </label>
            <label className="form-field">
              <span>Typical equipment needed</span>
              <input
                type="text"
                name="equipment"
                value={equipment}
                onChange={(event) => setEquipment(event.target.value)}
              />
            </label>
            <label className="form-field">
              <span>Notes</span>
              <textarea name="notes" rows={4} value={notes} onChange={(event) => setNotes(event.target.value)} />
            </label>
            {errors.length > 0 ? (
              <ul className="field-error-list" role="alert">
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            ) : null}
            {sent ? (
              <p className="modal-confirm" role="status">Request opened in email to {SITE_EMAIL}.</p>
            ) : (
              <p className="contact-note">Send opens an email to {SITE_EMAIL}.</p>
            )}
            <button type="submit" className="contact-submit">Send request</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}
