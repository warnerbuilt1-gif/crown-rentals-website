import Seo from '../components/Seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EquipmentBrowse from '../components/EquipmentBrowse'
import EquipmentDetails from '../components/EquipmentDetails'
import CategoryStrip from '../components/CategoryStrip'
import { SITE_NAME } from '../config/site'

export default function Equipment() {
  return (
    <>
      <Seo
        title={`Equipment Rental in Anaconda, MT | ${SITE_NAME}`}
        description="Skid steer, boom, trench roller, and concrete tools for rent in Anaconda, MT. See day rates. Call Crown Rentals."
        path="/equipment/"
      />
      <Header />
      <main id="main">
        <section className="page-hero">
          <p className="kicker">Current lot</p>
          <h1>Equipment rental in Anaconda, MT</h1>
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
