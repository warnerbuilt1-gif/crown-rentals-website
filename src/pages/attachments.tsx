import Seo from '../components/Seo'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReserveButton from '../components/ReserveButton'
import { ATTACHMENTS, SITE_NAME } from '../config/site'

export default function Attachments() {
  return (
    <>
      <Seo
        title={`Skid Steer Attachments in Anaconda, MT | ${SITE_NAME}`}
        description="Skid steer attachments in Anaconda, MT. Buckets, forks, auger, and breaker. Reserve with the machine."
        path="/attachments/"
      />
      <Header />
      <main id="main">
        <section className="page-hero">
          <p className="kicker">Skid steer rack</p>
          <h1>Skid steer attachments in Anaconda, MT</h1>
          <p>
            The machine is half the rental. Tell us the work and we hang the right tool — dirt, brush, holes, demo,
            snow, or finish grade.
          </p>
        </section>

        <section className="section section-flush">
          <div className="section-shell">
            <div className="attach-photo attach-photo-wide">
                <Image
                  src="/skid-bucket-job.jpg"
                  alt="Track loader with bucket on the job — Crown Rentals attachments start here"
                  width={1600}
                  height={900}
                />
            </div>
            <div className="attach-grid attach-grid-full">
              {ATTACHMENTS.map((item) => (
                <div className="attach-chip" key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.use}</span>
                </div>
              ))}
            </div>
            <div className="hero-actions page-actions">
              <ReserveButton slug="skid-steer">Reserve with attachments</ReserveButton>
              <Link href="/equipment" className="btn-secondary">See the skid steer</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
