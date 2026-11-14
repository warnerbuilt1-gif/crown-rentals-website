import Head from 'next/head'
import Seo from '../components/Seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FaqList from '../components/FaqList'
import { FAQ_PAGE, FIRST_RUN_LINE, SITE_CREDENTIAL, SITE_NAME, faqPageJsonLd } from '../config/site'

export default function Faq() {
  return (
    <>
      <Seo
        title={`Equipment Rental FAQ | ${SITE_NAME}, Anaconda & Butte, MT`}
        description="How to book, what delivery costs, the cancellation rule, deposits, and the towns Crown Rentals serves from Anaconda and Butte, MT."
        path="/faq/"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd()) }}
        />
      </Head>
      <Header />
      <main id="main">
        <section className="page-hero">
          <p className="kicker">Questions</p>
          <h1>Equipment rental FAQ</h1>
          <p>Booking, delivery, and the yard rules for {SITE_NAME} in Anaconda and Butte.</p>
          <p className="footer-credential">{SITE_CREDENTIAL}</p>
        </section>
        <section className="section section-flush">
          <div className="section-shell">
            <FaqList items={FAQ_PAGE} />
          </div>
        </section>
        <section className="section">
          <div className="section-shell">
            <h2 className="section-title">First time running it?</h2>
            <p className="section-intro">{FIRST_RUN_LINE}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
