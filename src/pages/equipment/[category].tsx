import { GetStaticPaths, GetStaticProps } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Seo from '../../components/Seo'
import EquipmentBrowse from '../../components/EquipmentBrowse'
import EquipmentDetails from '../../components/EquipmentDetails'
import { EQUIPMENT_CATEGORIES, SERVICE_AREAS, SITE_DELIVERY_LINE, SITE_NAME } from '../../config/site'
import Link from 'next/link'

type Props = { category: string }

export default function CategoryPage({ category }: Props) {
  const item = EQUIPMENT_CATEGORIES.find((entry) => entry.id === category) ?? EQUIPMENT_CATEGORIES[0]
  const title = `${item.label} Rental in Anaconda, MT | ${SITE_NAME}`
  const description = `Rent ${item.label.toLowerCase()} equipment in Anaconda, MT. Day and week rates, no sales tax. Call Crown Rentals.`

  return (
    <>
      <Seo title={title} description={description} path={`/equipment/${item.id}/`} />
      <Header />
      <main id="main">
        <section className="page-hero">
          <p className="kicker">On the lot</p>
          <h1>{item.label} rental in Anaconda, MT</h1>
          <p>{item.blurb} Rates are the rental price. There is no sales tax.</p>
        </section>
        <div className="equipment-tabs">
          <EquipmentBrowse category={item.id} />
        </div>
        <EquipmentDetails category={item.id} />
        <section className="section">
          <div className="section-shell">
            <h2>Delivery towns</h2>
            <p>{SITE_DELIVERY_LINE}</p>
            <p>
              {SERVICE_AREAS.map((area, index) => (
                <span key={area.slug}>
                  <Link href={area.path}>{area.city}</Link>
                  {index < SERVICE_AREAS.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: EQUIPMENT_CATEGORIES.filter((item) => item.id !== 'all').map((item) => ({ params: { category: item.id } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: { category: String(params?.category ?? '') },
})
