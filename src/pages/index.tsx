import Head from 'next/head'
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
import { ATTACHMENTS, FLEET, HOME_FAQS, SITE_CITY, SITE_CONSTRUCTION_URL, SITE_HOURS_SHORT, SITE_NAME, SITE_OWNER, SITE_SERVICE_AREA, SITE_SLOGAN, SITE_TAGLINE } from '../config/site'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Equipment Rental in Anaconda, MT | ${SITE_NAME}`}</title>
        <meta
          name="description"
          content={`${SITE_SLOGAN} ${SITE_TAGLINE} Rent a skid steer, 35-foot Z-boom, compaction, and concrete finishing tools in Anaconda, MT.`}
        />
      </Head>
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
                  Iron, attachments, and concrete tools. Search, filter, then reserve — Neal confirms the window before
                  anything is locked.
                </p>
              </div>
            </Reveal>
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
                    src="/skid-bucket-job.jpg"
                    alt="Compact track loader with bucket attachment on gravel"
                    width={1600}
                    height={900}
                  />
                </div>
                <div>
                  <div className="attach-grid">
                    {ATTACHMENTS.slice(0, 8).map((item) => (
                      <div className="attach-chip" key={item.name}>
                        <strong>{item.name}</strong>
                        <span>{item.use}</span>
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
                  Power trowel, Texas fresno, knee boards, finishing tools, and a concrete saw. Kit the pour, then cut
                  the joints.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="attach-grid attach-grid-full">
                {FLEET.filter((item) => item.category === 'concrete').map((item) => (
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
                  <p>Choose morning or afternoon. Yard pickup is free. Delivery is quoted to Anaconda through Philipsburg.</p>
                </article>
              </Reveal>
            </div>
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

        <section className="section" aria-labelledby="crew-heading">
          <div className="section-shell">
            <Reveal>
              <div className="section-head">
                <p className="kicker">Need the crew</p>
                <h2 id="crew-heading" className="section-title">Want it built, not rented?</h2>
                <p className="section-intro">
                  Crown Construction of Montana is {SITE_OWNER} Warner&apos;s crew at 2121 Garfield St. Foundations,
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
