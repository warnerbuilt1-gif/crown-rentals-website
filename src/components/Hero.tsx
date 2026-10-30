import Image from 'next/image'
import Link from 'next/link'
import PhoneLink from './PhoneLink'
import ReserveButton from './ReserveButton'
import { SITE_CITY, SITE_OWNER, SITE_SLOGAN, SITE_TAGLINE } from '../config/site'

export default function Hero() {
  return (
    <section className="hero hero-ad" aria-labelledby="hero-heading">
      <p className="hero-locale">{SITE_SLOGAN} · {SITE_CITY}, Montana · Run by {SITE_OWNER}</p>
      <div className="hero-lockup">
        <Image
          src="/logo-hero.png"
          alt="Crown Rentals — crown mark with skid steer and Z-boom"
          width={720}
          height={720}
          sizes="(max-width: 700px) 78vw, 420px"
          priority
          className="hero-logo"
        />
      </div>
      <h1 id="hero-heading" className="hero-title metal-text">
        Equipment rental in Anaconda, MT
      </h1>
      <p className="hero-lead">
        {SITE_TAGLINE} Rent a Cat 242D3 with attachments, a Genie Z-34/22, compaction, and concrete finishing tools
        from Neal&apos;s yard in {SITE_CITY}.
      </p>
      <div className="hero-actions">
        <Link href="/book" className="btn-primary">
          Book dates
        </Link>
        <ReserveButton className="btn-secondary" />
        <PhoneLink className="btn-secondary" />
      </div>
      <p className="hero-note">Skid steer · Z-boom · Compaction · Concrete tools</p>
    </section>
  )
}
