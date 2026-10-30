import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FLEET, FILTER_TAGS, SITE_PHONE_TEL_URI, categoryFromLocation, machineInCategory } from '../config/site'
import { availabilityLabel } from '../lib/booking'
import Reveal from './Reveal'
import SpecList from './SpecList'
import PriceBlock from './PriceBlock'

type FilterId = (typeof FILTER_TAGS)[number]['id']
type ViewMode = 'grid' | 'list'

export default function EquipmentBrowse({ headingId }: { headingId?: string }) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState<FilterId>('all')
  const [view, setView] = useState<ViewMode>('grid')

  useEffect(() => {
    setTag(categoryFromLocation(router.query.category))
  }, [router.asPath, router.query.category])

  const selectTag = (next: FilterId) => {
    setTag(next)
    if (!router.pathname.startsWith('/equipment')) return
    const query = next === 'all' ? {} : { category: next }
    router.replace({ pathname: '/equipment', query }, undefined, { shallow: true, scroll: false })
  }

  const machines = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return FLEET.filter((item) => {
      const matchesTag = machineInCategory(item.groups, tag)
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
              onClick={() => selectTag(item.id)}
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
            <Reveal key={item.slug} delay={Math.min(index, 3) * 40}>
              <article className="equip-card">
                <div className={`equip-card-media${item.fit === 'contain' ? ' is-contain' : ''}`}>
                  <div className="equip-skeleton-fill" aria-hidden="true" />
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 800px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    style={{ objectFit: item.fit, objectPosition: item.imagePosition }}
                  />
                  <div className="equip-badges">
                    {item.featured ? <span className="badge badge-featured">Featured</span> : null}
                    <span className="badge badge-status">{availabilityLabel(item.slug)}</span>
                  </div>
                </div>
                <div className="equip-card-copy">
                  <p className="kicker">{item.kicker}</p>
                  <h3>{item.name}</h3>
                  <PriceBlock dailyRate={item.dailyRate} deposit={item.deposit} compact />
                  <SpecList specs={item.specs} limit={4} />
                  {item.specs.length > 4 ? (
                    <Link className="spec-more" href={`/equipment/#${item.slug}`}>
                      Full specifications
                    </Link>
                  ) : null}
                  <div className="equip-card-actions">
                    <Link className="btn-primary" href={`/book/?item=${item.slug}`}>
                      Check availability
                    </Link>
                    <a className="btn-secondary" href={SITE_PHONE_TEL_URI}>
                      Call to reserve
                    </a>
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
