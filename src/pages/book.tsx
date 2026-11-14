import Seo from '../components/Seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookingBoard from '../components/BookingBoard'
import { SITE_DELIVERY_LINE, SITE_NAME } from '../config/site'

export default function Book() {
  return (
    <>
      <Seo
        title={`Book Equipment Dates | ${SITE_NAME}`}
        description={`Pick start and return on the calendar in Anaconda, MT. Guest checkout, no account. Neal confirms, then sends a card link for the deposit. ${SITE_DELIVERY_LINE}`}
        path="/book/"
      />
      <Header />
      <main id="main">
        <section className="page-hero">
          <p className="kicker">Calendar</p>
          <h1>Reserve equipment in Anaconda, MT</h1>
          <p>
            Tap the job, check the iron, pick start and return on the calendar. The quote updates with days, weekly
            billing, deposit, and delivery. {SITE_DELIVERY_LINE} Guest checkout — no account. Neal confirms, then sends a card link for the
            deposit.
          </p>
          <p>Owner-operated by Neal</p>
        </section>
        <div className="section-shell booking-page">
          <BookingBoard />
        </div>
      </main>
      <Footer />
    </>
  )
}
