import { SITE_ADDRESS, SITE_CITY, SITE_HOURS, SITE_MAP_EMBED, SITE_MAP_LINK, SITE_OWNER, SITE_SERVICE_AREA } from '../config/site'

export default function ServiceMap() {
  return (
    <section className="map-block" aria-labelledby="map-heading">
      <div className="map-copy">
        <p className="kicker">Yard</p>
        <h2 id="map-heading" className="section-title">Anaconda, Montana</h2>
        <p>{SITE_ADDRESS}</p>
        <p>{SITE_HOURS}</p>
        <p>
          Neal runs Crown Rentals from {SITE_CITY}. Serving {SITE_SERVICE_AREA}.
        </p>
        <p>Run by {SITE_OWNER}. Call if you need load-out help.</p>
        <a className="fleet-link" href={SITE_MAP_LINK} target="_blank" rel="noreferrer">
          Open the map
        </a>
      </div>
      <div className="map-frame">
        <iframe
          title="Map of Anaconda, Montana"
          src={SITE_MAP_EMBED}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
