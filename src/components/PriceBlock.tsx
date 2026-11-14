import { SITE_DELIVERY_LINE, SITE_WEEKLY_DAYS, formatUsd } from '../config/site'

type PriceBlockProps = {
  dailyRate: number
  deposit: number
  compact?: boolean
}

export default function PriceBlock({ dailyRate, deposit, compact = false }: PriceBlockProps) {
  const week = dailyRate * SITE_WEEKLY_DAYS

  return (
    <div className={`price-block${compact ? ' is-compact' : ''}`}>
      <p className="equip-price">
        <strong>{formatUsd(dailyRate)}</strong>
        <span> / day</span>
      </p>
      <ul className="price-lines">
        <li>
          <span>Week</span>
          <strong>{formatUsd(week)} · 6 days</strong>
        </li>
        <li>
          <span>Deposit hold</span>
          <strong>{formatUsd(deposit)}</strong>
        </li>
        {compact ? null : (
          <li className="price-line-rule">{SITE_DELIVERY_LINE}</li>
        )}
      </ul>
      <p className="price-note">
        {compact
          ? 'No sales tax. The deposit is a hold, not part of the rental.'
          : 'No sales tax. The deposit is a card hold and releases when the unit is walked back in.'}
      </p>
    </div>
  )
}
