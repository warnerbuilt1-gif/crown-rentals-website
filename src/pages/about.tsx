import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReserveButton from '../components/ReserveButton'
import ServiceMap from '../components/ServiceMap'
import Reveal from '../components/Reveal'
import { SITE_ADDRESS, SITE_CITY, SITE_CONSTRUCTION_URL, SITE_HOURS, SITE_NAME, SITE_OWNER, SITE_REGION, SITE_TAGLINE } from '../config/site'

export default function About() {
  return (
    <>
      <Head>
        <title>{`About | ${SITE_NAME}`}</title>
        <meta
          name="description"
          content={`Crown Rentals in Anaconda, MT — run by Neal. Skid steer, Z-boom, compaction, and concrete finishing tools.`}
        />
      </Head>
      <Header />
      <main id="main">
        <section className="page-hero">
          <p className="kicker">{SITE_CITY}, Montana · Run by {SITE_OWNER}</p>
          <h1>About Crown Rentals</h1>
          <p>
            {SITE_TAGLINE} Neal runs the yard in {SITE_CITY} — maintained machines, a full attachment rack, concrete
            finishing tools, and rentals that match the job.
          </p>
        </section>

        <section className="about-grid">
          <Reveal>
            <div className="about-panel">
              <h2 className="panel-title">The yard</h2>
              <p>
                Crown Rentals is {SITE_OWNER}&apos;s equipment yard at {SITE_ADDRESS}. You rent the machine, leave with
                the attachments the job actually needs, and bring it back when the work is done.
              </p>
              <p>
                The fleet is tight on purpose. Skid steer with a deep attachment list. A 35-foot Z-boom for reach.
                Compaction for the cut and the pad. Concrete tools for the pour — power trowel, Texas fresno with a bull float, knee
                boards, finishing kit, and a saw.
              </p>
              <p>
                Hours are {SITE_HOURS}. If you want the crew to do the work instead of renting the iron, that is{' '}
                <a href={SITE_CONSTRUCTION_URL}>Crown Construction of Montana</a>, also run by {SITE_OWNER}, at 2121
                Garfield St in {SITE_CITY}.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="about-panel">
              <h2 className="panel-title">How we rent</h2>
              <p>
                Call with the job, the site, and the dates. We will tell you what to take, what to leave, and how
                pickup works from the {SITE_CITY}, {SITE_REGION} lot.
              </p>
              <p>
                The skid steer is the core. If the day is brush, holes, demo, or snow, we kit the attachments before
                you roll. The Z-boom, compaction, and concrete tools rent on their own.
              </p>
              <ReserveButton>Talk to the yard</ReserveButton>
            </div>
          </Reveal>
        </section>

        <section className="section">
          <div className="section-shell">
            <Reveal>
              <ServiceMap />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
