import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ProductGallery from './ProductGallery'
import PriceBlock from './PriceBlock'
import PhoneLink from './PhoneLink'
import ReserveButton from './ReserveButton'
import SpecList from './SpecList'
import { ATTACHMENTS, EQUIPMENT_CATEGORIES, FLEET, categoryFromLocation, machineGoodFor, machineInCategory, machineKeySpecs } from '../config/site'
import { useAvailabilityLabel } from '../lib/booking'

type CategoryId = (typeof EQUIPMENT_CATEGORIES)[number]['id']

function MachineKicker({ kicker, slug }: { kicker: string; slug: string }) {
  const label = useAvailabilityLabel(slug)
  return <p className="kicker">{label ? `${kicker} · ${label}` : kicker}</p>
}

export default function EquipmentDetails({ category, slug }: { category?: string; slug?: string }) {
  const router = useRouter()
  const [tag, setTag] = useState<CategoryId>(category ? (category as CategoryId) : 'all')

  useEffect(() => {
    if (category) {
      setTag(category as CategoryId)
      return
    }
    setTag(categoryFromLocation(router.query.category))
  }, [category, router.asPath, router.query.category])

  const machines = FLEET.filter((item) => (slug ? item.slug === slug : machineInCategory(item.groups, tag)))

  return (
    <div className="detail-stack">
      {machines.map((machine) => (
        <article className="detail-card" id={machine.slug} key={machine.slug}>
          <ProductGallery images={machine.gallery} alt={machine.alt} position={machine.imagePosition} fit={machine.fit} />
          <div className="detail-copy">
            <MachineKicker kicker={machine.kicker} slug={machine.slug} />
            <h2>
              <Link href={`/equipment/${machine.groups[0]}/${machine.slug}/`}>{machine.name}</Link>
            </h2>
            <PriceBlock dailyRate={machine.dailyRate} deposit={machine.deposit} />
            <div className="hero-actions equip-detail-actions">
              <Link href={`/book/?item=${machine.slug}`} className="btn-primary">
                Book Now
              </Link>
              <PhoneLink className="btn-secondary" />
              <ReserveButton slug={machine.slug} className="btn-secondary">
                Request a quote
              </ReserveButton>
            </div>
            {machineGoodFor(machine.slug).length > 0 ? (
              <p className="detail-good-for">
                <span>Good for</span>
                {machineGoodFor(machine.slug).join(', ')}
              </p>
            ) : null}
            <SpecList specs={machineKeySpecs(machine.slug)} />
            {machine.slug === 'skid-steer' ? (
              <p className="detail-attach">
                <span>Compatible attachments</span>
                {ATTACHMENTS.map((item, index) => (
                  <span key={item.name}>
                    <Link href="/attachments/">{item.name}</Link>
                    {index < ATTACHMENTS.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </p>
            ) : null}
            <SpecList specs={machine.specs} />
          </div>
        </article>
      ))}
    </div>
  )
}
