import Link from 'next/link'
import PhoneLink, { PhoneNumber } from './PhoneLink'
import { SERVICE_AREAS, SITE_ADDRESS, SITE_CITY, SITE_CONSTRUCTION_URL, SITE_CREDENTIAL, SITE_DELIVERY_LINE, SITE_EMAIL, SITE_HOURS, SITE_NAME, SITE_OWNER, SITE_SERVICE_AREA, SITE_SLOGAN, SITE_SMS_URI } from '../config/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <p className="kicker">Ready to rent</p>
        <h2 className="footer-title metal-text">{SITE_SLOGAN}</h2>
        <p className="footer-copy">
          Call Neal with the job, the dates, and the machine. We will kit the rental and get you on the lot.
        </p>
        <div className="hero-actions">
          <Link href="/book" className="btn-primary">Book dates</Link>
          <PhoneLink className="btn-secondary" />
        </div>
      </div>

      <div className="footer-grid">
        <div>
          <p className="footer-brand-name">{SITE_NAME}</p>
          <p className="footer-credential">{SITE_CREDENTIAL}</p>
          <p>{SITE_ADDRESS}</p>
          <p>{SITE_HOURS}</p>
          <p>{SITE_DELIVERY_LINE}</p>
          <p>{SITE_CITY}, Montana · Run by {SITE_OWNER}</p>
          <p>Serving {SITE_SERVICE_AREA}.</p>
          <p>© {new Date().getFullYear()} {SITE_NAME}</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <Link href="/equipment/earthmoving/">Earthmoving</Link>
          <Link href="/equipment/concrete/">Concrete tools</Link>
          {SERVICE_AREAS.map((area) => (
            <Link key={area.slug} href={area.path}>{area.city} rental</Link>
          ))}
          <Link href="/equipment">Equipment</Link>
          <Link href="/book">Book</Link>
          <Link href="/attachments">Attachments</Link>
          <Link href="/contractors">Contractors</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Reserve</Link>
          <a href={SITE_CONSTRUCTION_URL}>Crown Construction</a>
        </nav>
        <div>
          <p>
            Call: <PhoneNumber className="footer-link" />
            {' · '}
            <a href={SITE_SMS_URI} className="footer-link">Text</a>
          </p>
          <p>
            Email: <a href={`mailto:${SITE_EMAIL}`} className="footer-link">{SITE_EMAIL}</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
