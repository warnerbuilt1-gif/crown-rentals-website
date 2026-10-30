import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import PhoneLink from '../components/PhoneLink'
import { EQUIPMENT_CATEGORIES, SERVICE_AREAS, SITE_ADDRESS, SITE_NAME } from '../config/site'

type Area = (typeof SERVICE_AREAS)[number]

export default function AreaPage({ area }: { area: Area }) {
  const categories = EQUIPMENT_CATEGORIES.filter((item) => item.id !== 'all')
  const title = `Equipment Rental in ${area.city}, MT | ${SITE_NAME}`
  const description = `Rent a skid steer, boom lift, and compaction in ${area.city}, MT. Local delivery from Anaconda. Call Crown Rentals.`

  return (
    <>
      <Seo title={title} description={description} path={area.path} />
      <Header />
      <main id="main">
        <section className="page-hero">
          <p className="kicker">Southwest Montana</p>
          <h1>Equipment rental in {area.city}, MT</h1>
          <p>{area.lead}</p>
          <div className="hero-actions">
            <Link href="/book/" className="btn-primary">Check availability</Link>
            <PhoneLink className="btn-secondary">Call to reserve</PhoneLink>
          </div>
        </section>
        <section className="section">
          <div className="section-shell">
            <h2>What you can rent for a {area.city} job</h2>
            <div className="category-strip">
              {categories.map((item) => (
                <Link key={item.id} href={`/equipment/${item.id}/`} className="category-card">
                  <strong>{item.label}</strong>
                  <span>{item.blurb}</span>
                </Link>
              ))}
            </div>
            <h2>Other towns on the route</h2>
            <p>
              The yard is {SITE_ADDRESS}. Crown Rentals also serves{' '}
              {SERVICE_AREAS.filter((item) => item.slug !== area.slug).map((item, index, list) => (
                <span key={item.slug}>
                  <Link href={item.path}>{item.city}</Link>
                  {index < list.length - 1 ? ', ' : ''}
                </span>
              ))}
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
