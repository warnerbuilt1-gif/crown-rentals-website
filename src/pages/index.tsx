import Seo from '../components/Seo'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import EquipmentBrowse from '../components/EquipmentBrowse'
import ServiceMap from '../components/ServiceMap'
import TrustPanel from '../components/TrustPanel'
import Reveal from '../components/Reveal'
import JobSelector from '../components/JobSelector'
import CategoryStrip from '../components/CategoryStrip'
import PhoneLink, { CallForPrice, TextPhotoLink } from '../components/PhoneLink'
import { ATTACHMENTS, FLEET, HOME_FAQS, SERVICE_AREAS, SITE_CITY, SITE_CONSTRUCTION_URL, SITE_DELIVERY_LINE, SITE_HOURS_SHORT, SITE_NAME, SITE_OWNER, SITE_SERVICE_AREA, machineInCategory } from '../config/site'

export default function Home() {
  return (
    <>
      <Seo
        title={`Equipment Rental in Anaconda, MT | ${SITE_NAME}`}
        description={`Rent a skid steer, boom lift, and compaction in Anaconda, MT. ${SITE_DELIVERY_LINE} Call Crown Rentals.`}
        path="/"
      />
      <Header />
      <main id="main">
        <Hero />

        <div className="trust-bar" aria-label="Yard details">
          <div className="trust-item">
            <span>Location</span>
            <strong>{SITE_CITY}, MT</strong>
          </div>
          <div className="trust-item">
            <span>Hours</span>
            <strong>{SITE_HOURS_SHORT}</strong>
          </div>
          <div className="trust-item">
            <span>Operator</span>
            <strong>{SITE_OWNER}</strong>
          </div>
          <div className="trust-item">
            <span>Pickup</span>
            <strong>Free at the yard</strong>
          </div>
        </div>

        <section className="section" aria-labelledby="job-heading">
          <div className="section-shell">
            <Reveal>
              <div className="section-head">
                <p className="kicker">Calendar</p>
                <h2 id="job-heading" className="section-title">What do you need, and when?</h2>
                <p className="section-intro">
                  Tap the job. The calendar opens with the right iron checked. Pick start and return, then send the
                  request.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <JobSelector />
            </Reveal>
            <Link href="/book/" className="fleet-link">
              Open the full calendar
            </Link>
          </div>
        </section>

        <section className="section section-dark" aria-labelledby="fleet-heading">
          <div className="section-shell">
            <Reveal>
              <div className="section-head">
                <p className="kicker">On the lot</p>
                <h2 id="fleet-heading" className="section-title">The fleet</h2>
                <p className="section-intro">
                  Tap a category. The machines in that group are one more tap away, with the day rate and deposit on the card.
                </p>
              </div>
            </Reveal>
            <CategoryStrip />
            <EquipmentBrowse headingId="fleet-heading" />
          </div>
        </section>

        <section className="section" aria-labelledby="attach-heading">
          <div className="section-shell">
            <Reveal>
              <div className="section-head">
                <p className="kicker">Skid steer rack</p>
                <h2 id="attach-heading" className="section-title">Attachments</h2>
                <p className="section-intro">
                  Reserve the machine with the tools for dirt, brush, holes, demo, snow, and finish work.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="attach-panel">
                <div className="attach-photo">
                  <Image
                    src="/skid-steer-attachments.jpg"
                    alt="Skid steer bucket, forks, grapple, auger, trencher, and breaker"
                    width={1400}
                    height={933}
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <div className="attach-grid">
                    {ATTACHMENTS.slice(0, 8).map((item) => (
                      <div className="attach-chip" key={item.name}>
                        <strong>{item.name}</strong>
                        <span>{item.use}</span>
                        <CallForPrice />
                      </div>
                    ))}
                  </div>
                  <Link href="/attachments" className="fleet-link">
                    Full attachment list
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section section-dark" aria-labelledby="concrete-heading">
          <div className="section-shell">
            <Reveal>
              <div className="section-head">
                <p className="kicker">Slab work</p>
                <h2 id="concrete-heading" className="section-title">Concrete tools</h2>
                <p className="section-intro">
                  Power trowel, Texas fresno with a bull float, knee boards, finishing tools, and a concrete saw. Kit the pour, then cut
                  the joints.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="attach-grid attach-grid-full">
                {FLEET.filter((item) => machineInCategory(item.groups, 'concrete')).map((item) => (
                  <Link href={`/book/?item=${item.slug}`} className="attach-chip" key={item.slug}>
                    <strong>{item.name}</strong>
                    <span>{item.summary}</span>
                  </Link>
                ))}
              </div>
            </Reveal>
            <Link href="/equipment/#power-trowel" className="fleet-link">
              See concrete on the lot
            </Link>
          </div>
        </section>

        <section className="section" aria-labelledby="how-heading">
          <div className="section-shell">
            <Reveal>
              <div className="section-head">
                <p className="kicker">How it works</p>
                <h2 id="how-heading" className="section-title">Reserve. Load. Work.</h2>
              </div>
            </Reveal>
            <div className="steps">
              <Reveal>
                <article className="step">
                  <span>01</span>
                  <h3>Pick what and when</h3>
                  <p>Tap the job, check the iron, and mark start and return on the calendar. The quote updates live.</p>
                </article>
              </Reveal>
              <Reveal delay={90}>
                <article className="step">
                  <span>02</span>
                  <h3>Send the request</h3>
                  <p>Guest checkout — name, phone, e-sign. Neal confirms the window, then sends a Stripe deposit link.</p>
                </article>
              </Reveal>
              <Reveal delay={180}>
                <article className="step">
                  <span>03</span>
                  <h3>Pickup or delivery</h3>
                  <p>Choose morning or afternoon. {SITE_DELIVERY_LINE}</p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="area-heading">
          <div className="section-shell">
            <h2 id="area-heading">Equipment rental across Southwest Montana</h2>
            <p>The yard is in Anaconda. {SITE_DELIVERY_LINE}</p>
            <p>
              {SERVICE_AREAS.map((area, index) => (
                <span key={area.slug}>
                  <Link href={area.path}>{`Equipment rental in ${area.city}, MT`}</Link>
                  {index < SERVICE_AREAS.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </p>
          </div>
        </section>

        <section className="section section-dark" aria-labelledby="map-heading">
          <div className="section-shell">
            <Reveal>
              <ServiceMap />
            </Reveal>
          </div>
        </section>

        <section className="section" aria-labelledby="trust-heading">
          <div className="section-shell">
            <Reveal>
              <div className="section-head">
                <p className="kicker">From the valley</p>
                <h2 id="trust-heading" className="section-title">How the yard works</h2>
                <p className="section-intro">
                  Serving {SITE_SERVICE_AREA}. Hold the machine for two hours on request. Neal confirms rate, deposit,
                  and pickup before the clock starts.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <TrustPanel />
            </Reveal>
          </div>
        </section>

        <section className="section section-dark" aria-labelledby="neal-heading">
          <div className="section-shell">
            <div className="attach-panel">
              <div className="attach-photo photo-spot">
                <p>[PLACEHOLDER: photo of Neal with a machine]</p>
              </div>
              <div className="section-head">
                <p className="kicker">Owner</p>
                <h2 id="neal-heading" className="section-title">Meet Neal, Owner and Operator</h2>
                <p className="section-intro">
                  Neal runs Crown Rentals and has years of experience running Cat heavy equipment. He delivers, sets up,
                  and can show you how to run the machine. Call or text Neal directly.
                </p>
                <p>[PLACEHOLDER: years running Cat]</p>
                <p>[PLACEHOLDER: certifications/qualifications]</p>
                <div className="hero-actions">
                  <PhoneLink className="btn-secondary" />
                  <TextPhotoLink className="btn-secondary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="crew-heading">
          <div className="section-shell">
            <Reveal>
              <div className="section-head">
                <p className="kicker">Need the crew</p>
                <h2 id="crew-heading" className="section-title">Want it built, not rented?</h2>
                <p className="section-intro">
                  Crown Construction of Montana is {SITE_OWNER}&apos;s crew at the same Garfield Street yard. Foundations,
                  slabs, waterproofing, and site work across the same towns. Same phone.
                </p>
                <a href={SITE_CONSTRUCTION_URL} className="btn-primary">Get a construction estimate</a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section section-dark" aria-labelledby="faq-heading">
          <div className="section-shell">
            <Reveal>
              <div className="section-head">
                <p className="kicker">Questions</p>
                <h2 id="faq-heading" className="section-title">Straight answers</h2>
                <p className="section-intro">Serving {SITE_SERVICE_AREA}.</p>
              </div>
            </Reveal>
            <div className="faq-grid">
              {HOME_FAQS.map((faq, index) => (
                <Reveal key={faq.question} delay={index * 60}>
                  <article className="faq-card">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
