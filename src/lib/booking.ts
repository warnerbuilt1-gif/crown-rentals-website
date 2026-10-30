import { FLEET, SITE_DELIVERY_FEE, SITE_WEEKLY_DAYS, formatUsd } from '../config/site'

export type FleetItem = (typeof FLEET)[number]

export function toISODate(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function parseISODate(value: string) {
  return new Date(`${value}T12:00:00`)
}

export function todayISO() {
  return toISODate(new Date())
}

export function addDays(iso: string, count: number) {
  const date = parseISODate(iso)
  date.setDate(date.getDate() + count)
  return toISODate(date)
}

export function rentalDays(start: string, end: string) {
  if (!start || !end) return 1
  const diff = Math.round((parseISODate(end).getTime() - parseISODate(start).getTime()) / 86_400_000)
  return Math.max(1, diff + 1)
}

function slugSeed(slug: string) {
  let hash = 0
  for (const char of slug) hash = (hash * 31 + char.charCodeAt(0)) | 0
  return Math.abs(hash)
}

export function isHeld(slug: string, iso: string) {
  const day = Math.floor(parseISODate(iso).getTime() / 86_400_000)
  const seed = slugSeed(slug)
  return (day + seed) % 13 === 0 || (day + seed) % 19 === 0
}

export function rangeHasHold(slugs: string[], start: string, end: string) {
  if (!start || !end || slugs.length === 0) return false
  const days = rentalDays(start, end)
  for (let index = 0; index < days; index += 1) {
    const iso = addDays(start, index)
    if (slugs.some((slug) => isHeld(slug, iso))) return true
  }
  return false
}

export function availabilityLabel(slug: string) {
  const start = todayISO()
  for (let index = 0; index < 10; index += 1) {
    if (!isHeld(slug, addDays(start, index))) {
      if (index === 0) return 'Open today'
      if (index < 3) return 'Open this week'
      return `Open ${addDays(start, index).slice(5)}`
    }
  }
  return 'Call for dates'
}

export type QuoteResult = {
  days: number
  rental: number
  deliveryFee: number
  deposit: number
  due: number
  lines: { label: string; value: string }[]
}

export function buildQuote(items: FleetItem[], days: number, delivery: boolean): QuoteResult {
  const weeks = Math.floor(days / 7)
  const rest = days % 7
  const rental = items.reduce((sum, item) => {
    const weekly = item.dailyRate * SITE_WEEKLY_DAYS
    return sum + weeks * weekly + rest * item.dailyRate
  }, 0)
  const deposit = items.reduce((sum, item) => sum + item.deposit, 0)
  const deliveryFee = delivery ? SITE_DELIVERY_FEE : 0
  const due = rental + deliveryFee
  const names = items.map((item) => item.name).join(', ') || 'Choose equipment'
  const lines = [
    { label: 'Equipment', value: names },
    { label: 'Days', value: String(days) },
    weeks > 0 ? { label: 'Week billing', value: `${weeks} × 6-day week` } : null,
    { label: 'Rental', value: formatUsd(rental) },
    { label: 'Delivery', value: delivery ? formatUsd(deliveryFee) : 'Yard pickup' },
    { label: 'Deposit hold', value: formatUsd(deposit) },
    { label: 'Est. due', value: formatUsd(due) },
  ].filter(Boolean) as { label: string; value: string }[]

  return { days, rental, deliveryFee, deposit, due, lines }
}

export function monthMatrix(year: number, month: number) {
  const first = new Date(year, month, 1)
  const startPad = first.getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: (string | null)[] = []
  for (let index = 0; index < startPad; index += 1) cells.push(null)
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(toISODate(new Date(year, month, day)))
  }
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}
