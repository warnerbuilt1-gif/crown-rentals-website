import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ProductGallery from './ProductGallery'
import PriceBlock from './PriceBlock'
import PhoneLink from './PhoneLink'
import ReserveButton from './ReserveButton'
import SpecList from './SpecList'
import { EQUIPMENT_CATEGORIES, FLEET, categoryFromLocation, machineInCategory } from '../config/site'
import { useAvailabilityLabel } from '../lib/booking'

type CategoryId = (typeof EQUIPMENT_CATEGORIES)[number]['id']

function MachineKicker({ kicker, slug }: { kicker: string; slug: string }) {
  const label = useAvailabilityLabel(slug)
  return <p className="kicker">{label ? `${kicker} · ${label}` : kicker}</p>
}

export default function EquipmentDetails({ category }: { category?: string }) {
  const router = useRouter()
  const [tag, setTag] = useState<CategoryId>(category ? (category as CategoryId) : 'all')

  useEffect(() => {
    if (category) {
      setTag(category as CategoryId)
      return
    }
    setTag(categoryFromLocation(router.query.category))
  }, [category, router.asPath, router.query.category])

  const machines = FLEET.filter((item) => machineInCategory(item.groups, tag))

  return (
    <div className="detail-stack">
      {machines.map((machine) => (
        <article className="detail-card" id={machine.slug} key={machine.slug}>
          <ProductGallery images={machine.gallery} alt={machine.alt} position={machine.imagePosition} fit={machine.fit} />
          <div className="detail-copy">
            <MachineKicker kicker={machine.kicker} slug={machine.slug} />
            <h2>{machine.name}</h2>
            <PriceBlock dailyRate={machine.dailyRate} deposit={machine.deposit} />
            <SpecList specs={machine.specs} />
            <div className="hero-actions equip-detail-actions">
              <Link href={`/book/?item=${machine.slug}`} className="btn-primary">
                Check availability
              </Link>
              <ReserveButton slug={machine.slug} className="btn-secondary">
                Request a quote
              </ReserveButton>
              <PhoneLink className="btn-secondary">Call to reserve</PhoneLink>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
