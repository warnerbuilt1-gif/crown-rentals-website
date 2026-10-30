import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EquipmentBrowse from '../components/EquipmentBrowse'
import EquipmentDetails from '../components/EquipmentDetails'
import CategoryStrip from '../components/CategoryStrip'
import { SITE_NAME } from '../config/site'

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
            Pick a category, then the machine. Day rate, week rate, and deposit are on every card. There is no sales tax. Neal confirms the window
            before a deposit is taken.
          </p>
          <CategoryStrip />
        </section>

        <div className="equipment-tabs">
          <EquipmentBrowse headingId="equipment-heading" />
        </div>

        <EquipmentDetails />
      </main>
      <Footer />
    </>
  )
}
