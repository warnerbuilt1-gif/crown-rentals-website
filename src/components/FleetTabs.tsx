import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FLEET } from '../config/site'
import { useReserve } from './ReserveContext'

export default function FleetTabs() {
  const [activeSlug, setActiveSlug] = useState<(typeof FLEET)[number]['slug']>(FLEET[0].slug)
  const machine = FLEET.find((item) => item.slug === activeSlug) ?? FLEET[0]
  const { openReserve } = useReserve()

  return (
    <div className="fleet-tabs">
      <div className="fleet-tab-list" role="tablist" aria-label="Current fleet">
        {FLEET.map((item) => {
          const selected = item.slug === machine.slug
          return (
            <button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`fleet-tab${selected ? ' is-active' : ''}`}
              onClick={() => setActiveSlug(item.slug)}
            >
              <span className="fleet-tab-photo">
                <Image src={item.image} alt="" width={280} height={180} />
              </span>
              <span className="fleet-tab-label">{item.name}</span>
            </button>
          )
        })}
      </div>

      <article className="fleet-stage" role="tabpanel">
        <div className="fleet-stage-photo">
          <Image
            src={machine.image}
            alt={machine.alt}
            fill
            sizes="(max-width: 900px) 100vw, 62vw"
            style={{ objectFit: 'cover', objectPosition: machine.imagePosition }}
          />
        </div>
        <div className="fleet-stage-copy">
          <p className="kicker">{machine.kicker}</p>
          <h3>{machine.name}</h3>
          <p>{machine.details}</p>
          <div className="hero-actions">
            <button type="button" className="btn-primary" onClick={() => openReserve(machine.slug)}>
              Reserve
            </button>
            <Link href={`/equipment/#${machine.slug}`} className="btn-secondary">
              Details
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
