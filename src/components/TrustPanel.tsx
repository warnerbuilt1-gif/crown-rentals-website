import Image from 'next/image'
import { RENTAL_POLICIES, REVIEWS } from '../config/site'

export default function TrustPanel() {
  return (
    <div className="trust-panel">
      <div className="review-grid">
        {REVIEWS.map((item) => (
          <article className="review-card" key={item.name}>
            <div className="review-photo">
              <Image src={item.photo} alt={`${item.machine} on a job in ${item.place}`} width={640} height={360} />
            </div>
            <p className="review-stars" aria-label="5 stars">★★★★★</p>
            <p className="review-quote">{item.quote}</p>
            <p className="review-verified">Job from the yard</p>
            <p className="review-meta">
              <strong>{item.name}</strong>
              <span>{item.place} · {item.machine}</span>
            </p>
          </article>
        ))}
      </div>
      <div className="policy-grid">
        {RENTAL_POLICIES.map((item) => (
          <article className="policy-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
