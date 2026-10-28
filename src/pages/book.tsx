import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookingBoard from '../components/BookingBoard'
import { SITE_NAME, SITE_PHONE_DISPLAY } from '../config/site'

export default function Book() {
  return (
    <>
      <Head>
        <title>{`Book dates | ${SITE_NAME}`}</title>
        <meta
          name="description"
          content={`Select equipment and dates at Crown Rentals in Anaconda. Live quote, guest checkout, then Neal confirms. Call ${SITE_PHONE_DISPLAY}.`}
        />
      </Head>
      <Header />
      <main id="main">
        <section className="page-hero">
          <p className="kicker">Calendar</p>
          <h1>What do you need, and when?</h1>
          <p>
            Tap the job, check the iron, pick start and return on the calendar. The quote updates with days, weekly
            billing, deposit, and delivery. Guest checkout — no account. Neal confirms, then sends a card link for the
            deposit.
          </p>
        </section>
        <div className="section-shell booking-page">
          <BookingBoard />
        </div>
      </main>
      <Footer />
    </>
  )
}
