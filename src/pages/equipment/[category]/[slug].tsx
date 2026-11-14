import { GetStaticPaths, GetStaticProps } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Seo from '../../../components/Seo'
import EquipmentDetails from '../../../components/EquipmentDetails'
import { FLEET, machineRentalLabel, machineSeo } from '../../../config/site'

type Props = { category: string; slug: string }

export default function MachinePage({ category, slug }: Props) {
  const machine = FLEET.find((item) => item.slug === slug)
  const seo = machineSeo(slug)
  const label = machineRentalLabel(slug)

  return (
    <>
      <Seo title={seo.title} description={seo.description} path={`/equipment/${category}/${slug}/`} />
      <Header />
      <main id="main">
        <section className="page-hero">
          <p className="kicker">{machine?.kicker}</p>
          <h1>{label} rental in Anaconda & Butte, MT</h1>
          <p>{machine?.summary}</p>
        </section>
        <EquipmentDetails slug={slug} />
      </main>
      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: FLEET.map((machine) => ({
    params: { category: machine.groups[0], slug: machine.slug },
  })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: {
    category: String(params?.category ?? ''),
    slug: String(params?.slug ?? ''),
  },
})
