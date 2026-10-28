import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PhoneLink from '../components/PhoneLink'
import { SITE_NAME } from '../config/site'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>{`Page not found | ${SITE_NAME}`}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Header />
      <main id="main">
        <section className="page-hero">
          <p className="kicker">404</p>
          <h1>That page is not in the yard.</h1>
          <p>The equipment, the calendar, and the phone number are still here.</p>
          <div className="hero-actions">
            <Link href="/" className="btn-primary">Home</Link>
            <Link href="/equipment" className="btn-secondary">Equipment</Link>
            <Link href="/book" className="btn-secondary">Book dates</Link>
            <PhoneLink className="btn-secondary" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
