import { FormEvent, useState } from 'react'
import Link from 'next/link'
import Seo from '../components/Seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PhoneLink from '../components/PhoneLink'
import { mailInquiryHref } from '../components/InquiryButtons'
import { ATTACHMENTS, FLEET, SITE_EMAIL, SITE_NAME, SITE_PHONE_TEL_URI, SITE_SMS_URI, machineRentalLabel } from '../config/site'

const BENEFITS = [
  'Priority scheduling',
  'One call to book multiple machines',
  'Delivery to your job site',
  'Owner-operated by Neal',
] as const

const ICF_SLUGS = [
  'skid-steer',
  'plate-wacker',
  'power-trowel',
  'concrete-saw',
  'texas-fresno',
  'knee-boards',
  'finishing-tools',
] as const

const SKID_TOOLS = ['Auger', 'Standard bucket'] as const

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

        <section className="section">
          <div className="section-shell">
            <h2 className="section-title">ICF Foundation Package</h2>
            <ul className="stack-list">
              {ICF_SLUGS.map((slug) => {
                const machine = FLEET.find((item) => item.slug === slug)
                if (!machine) return null
                const tools = slug === 'skid-steer'
                  ? SKID_TOOLS.flatMap((name) => {
                      const item = ATTACHMENTS.find((entry) => entry.name === name)
                      return item ? [item] : []
                    })
                  : []
                return (
                  <li key={slug}>
                    <Link href={`/equipment/${machine.groups[0]}/${machine.slug}/`} className="footer-link">
                      {machineRentalLabel(slug)}
                    </Link>
                    {tools.length > 0 ? (
                      <>
                        {' with '}
                        {tools.map((item, index) => (
                          <span key={item.name}>
                            <Link href="/attachments/" className="footer-link">{item.name.toLowerCase()}</Link>
                            {index < tools.length - 1 ? ' and ' : ''}
                          </span>
                        ))}
                      </>
                    ) : null}
                  </li>
                )
              })}
            </ul>
            <p>
              <a href={SITE_PHONE_TEL_URI} className="footer-link">Call for package price.</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
