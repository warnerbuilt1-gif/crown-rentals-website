import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EquipmentBrowse from '../components/EquipmentBrowse'
import ReserveButton from '../components/ReserveButton'
import ProductGallery from '../components/ProductGallery'
import { FLEET, SITE_NAME, SITE_WEEKLY_DAYS, formatUsd } from '../config/site'
import { availabilityLabel } from '../lib/booking'
import Link from 'next/link'

export default function Equipment() {
  return (
    <>
      <Head>
        <title>{`Equipment | ${SITE_NAME}`}</title>
        <meta
          name="description"
          content="Rent a skid steer, Z-boom, compaction, power trowel, Texas fresno, and concrete saw from Crown Rentals in Anaconda."
        />
      </Head>
      <Header />
      <main id="main">
        <section className="page-hero">
          <p className="kicker">Current lot</p>
          <h1>Equipment</h1>
          <p>
            Filter the yard, check live calendar badges, then book dates. Weekly bills as 6 days. Neal confirms the
            window before a deposit is taken.
          </p>
        </section>

        <div className="equipment-tabs">
          <EquipmentBrowse headingId="equipment-heading" />
        </div>

        <div className="detail-stack">
          {FLEET.map((machine) => (
            <article className="detail-card" id={machine.slug} key={machine.slug}>
              <ProductGallery images={machine.gallery} alt={machine.alt} position={machine.imagePosition} />
              <div className="detail-copy">
                <p className="kicker">{machine.kicker} · {availabilityLabel(machine.slug)}</p>
                <h2>{machine.name}</h2>
                <p className="equip-price">
                  <strong>{formatUsd(machine.dailyRate)}</strong>
                  <span> / day · {formatUsd(machine.dailyRate * SITE_WEEKLY_DAYS)} / week · {formatUsd(machine.deposit)} deposit</span>
                </p>
                <p>{machine.details}</p>
                <div className="hero-actions">
                  <ReserveButton slug={machine.slug} className="btn-primary">
                    {machine.category === 'concrete' ? 'Reserve this tool' : 'Reserve this machine'}
                  </ReserveButton>
                  <Link href={`/book/?item=${machine.slug}`} className="btn-secondary">
                    Book on calendar
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
