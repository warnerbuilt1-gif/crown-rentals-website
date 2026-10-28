import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FLEET, FILTER_TAGS, SITE_WEEKLY_DAYS, formatUsd } from '../config/site'
import { availabilityLabel } from '../lib/booking'
import { useReserve } from './ReserveContext'
import Reveal from './Reveal'

type FilterId = (typeof FILTER_TAGS)[number]['id']
type ViewMode = 'grid' | 'list'

export default function EquipmentBrowse({ headingId }: { headingId?: string }) {
  const { openReserve } = useReserve()
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState<FilterId>('all')
  const [view, setView] = useState<ViewMode>('grid')

  const machines = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return FLEET.filter((item) => {
      const matchesTag = tag === 'all' || item.category === tag
      const haystack = `${item.name} ${item.kicker} ${item.summary} ${item.details}`.toLowerCase()
      const matchesQuery = !needle || haystack.includes(needle)
      return matchesTag && matchesQuery
    })
  }, [query, tag])

  return (
    <div className="browse">
      <div className="browse-toolbar">
        <label className="browse-search">
          <span className="sr-only">Search equipment</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search skid steer, trowel, concrete saw…"
          />
        </label>
        <div className="browse-tags" role="group" aria-label="Filter by type">
          {FILTER_TAGS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`filter-tag${tag === item.id ? ' is-active' : ''}`}
              onClick={() => setTag(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="browse-views" role="group" aria-label="Layout">
          <button type="button" className={view === 'grid' ? 'is-active' : ''} onClick={() => setView('grid')}>
            Grid
          </button>
          <button type="button" className={view === 'list' ? 'is-active' : ''} onClick={() => setView('list')}>
            List
          </button>
        </div>
      </div>

      {machines.length === 0 ? (
        <p className="browse-empty">No machines match that search. Clear the filter or call Neal.</p>
      ) : (
        <div className={`equip-grid is-${view}`} aria-labelledby={headingId}>
          {machines.map((item, index) => (
            <Reveal key={item.slug} delay={index * 80}>
              <article className="equip-card">
                <div className="equip-card-media">
                  <div className="equip-skeleton-fill" aria-hidden="true" />
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: item.imagePosition }}
                  />
                  <div className="equip-badges">
                    {item.featured ? <span className="badge badge-featured">Featured</span> : null}
                    <span className="badge badge-status">{availabilityLabel(item.slug)}</span>
                  </div>
                </div>
                <div className="equip-card-copy">
                  <p className="kicker">{item.kicker}</p>
                  <h3>{item.name}</h3>
                  <p className="equip-price">
                    <strong>{formatUsd(item.dailyRate)}</strong>
                    <span> / day · {formatUsd(item.dailyRate * SITE_WEEKLY_DAYS)} / week</span>
                  </p>
                  <p>{item.summary}</p>
                  <div className="equip-card-actions">
                    <button type="button" className="btn-primary" onClick={() => openReserve(item.slug)}>
                      Reserve
                    </button>
                    <Link className="btn-secondary" href={`/book/?item=${item.slug}`}>
                      Book dates
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}
