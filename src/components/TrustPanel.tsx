import { RENTAL_POLICIES } from '../config/site'

export default function TrustPanel() {
  return (
    <div className="trust-panel">
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
