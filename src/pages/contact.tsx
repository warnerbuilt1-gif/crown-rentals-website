import Seo from '../components/Seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PhoneNumber } from '../components/PhoneLink'
import BookingBoard from '../components/BookingBoard'
import { SITE_ADDRESS, SITE_CITY, SITE_EMAIL, SITE_HOURS, SITE_NAME, SITE_OWNER, SITE_PHONE_DISPLAY, SITE_PHONE_TEL_URI, SITE_WHATSAPP_URI } from '../config/site'

export default function Contact() {
  return (
    <>
      <Seo
        title={`Reserve Equipment in Anaconda, MT | ${SITE_NAME}`}
        description="Reserve equipment in Anaconda, MT. Pick dates online or call Crown Rentals at (406) 595-4472."
        path="/contact/"
      />
      <Header />
      <main id="main">
        <section className="page-hero">
          <p className="kicker">{SITE_CITY}, Montana · Run by {SITE_OWNER}</p>
          <h1>Reserve equipment</h1>
          <p>
            Use the calendar to pick what you need and when. Guest checkout — no account. Neal confirms, then sends a
            card link for the deposit.
          </p>
        </section>

        <section className="contact-panel contact-panel-wide">
          <p className="kicker">Direct line</p>
          <a href={SITE_PHONE_TEL_URI} className="contact-phone metal-text">
            {SITE_PHONE_DISPLAY}
          </a>
          <p>{SITE_ADDRESS} · {SITE_HOURS}</p>
          <p>
            Email: <a href={`mailto:${SITE_EMAIL}`} className="footer-link">{SITE_EMAIL}</a>
            {' · '}
            Or call <PhoneNumber className="footer-link" />.
          </p>
          <div className="inquiry-row is-compact">
            <a href={SITE_WHATSAPP_URI} className="btn-whatsapp" target="_blank" rel="noreferrer">
              WhatsApp Neal
            </a>
          </div>
        </section>

        <div className="section-shell booking-page">
          <BookingBoard />
        </div>
      </main>
      <Footer />
    </>
  )
}
