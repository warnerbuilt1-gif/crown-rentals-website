import { useMemo, useState } from 'react'
import {
  addDays,
  isHeld,
  monthMatrix,
  parseISODate,
  rentalDays,
  todayISO,
} from '../lib/booking'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const PRESETS = [
  { id: '1', label: '1 day', days: 1 },
  { id: '2', label: '2 days', days: 2 },
  { id: 'weekend', label: 'Weekend', days: 3 },
  { id: 'week', label: '1 week', days: 7 },
] as const

type BookingCalendarProps = {
  start: string
  end: string
  slugs: string[]
  onChange: (start: string, end: string) => void
}

export default function BookingCalendar({ start, end, slugs, onChange }: BookingCalendarProps) {
  const today = todayISO()
  const initial = parseISODate(start || today)
  const [cursor, setCursor] = useState({ year: initial.getFullYear(), month: initial.getMonth() })

  const cells = useMemo(() => monthMatrix(cursor.year, cursor.month), [cursor])
  const label = new Date(cursor.year, cursor.month, 1).toLocaleString('en-US', { month: 'long', year: 'numeric' })
  const span = start && end ? rentalDays(start, end) : 0

  const pick = (iso: string) => {
    if (iso < today) return
    if (!start || (start && end)) {
      onChange(iso, '')
      return
    }
    if (iso < start) {
      onChange(iso, start)
      return
    }
    onChange(start, iso)
  }

  const applyPreset = (days: number) => {
    const from = start && start >= today ? start : today
    onChange(from, addDays(from, Math.max(0, days - 1)))
  }

  const inRange = (iso: string) => {
    if (!start) return false
    if (!end) return iso === start
    return iso >= start && iso <= end
  }

  const held = (iso: string) => slugs.some((slug) => isHeld(slug, iso))

  return (
    <div className="cal">
      <div className="cal-toolbar">
        <button type="button" className="cal-nav" onClick={() => setCursor((value) => {
          const date = new Date(value.year, value.month - 1, 1)
          return { year: date.getFullYear(), month: date.getMonth() }
        })}>
          Prev
        </button>
        <p className="cal-label">{label}</p>
        <button type="button" className="cal-nav" onClick={() => setCursor((value) => {
          const date = new Date(value.year, value.month + 1, 1)
          return { year: date.getFullYear(), month: date.getMonth() }
        })}>
          Next
        </button>
      </div>
      <div className="cal-presets" role="group" aria-label="Duration">
        {PRESETS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`cal-preset${span === item.days ? ' is-active' : ''}`}
            onClick={() => applyPreset(item.days)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="cal-week">
        {WEEKDAYS.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="cal-grid">
        {cells.map((iso, index) => {
          if (!iso) return <span key={`empty-${index}`} className="cal-cell is-empty" />
          const past = iso < today
          const selected = inRange(iso)
          const isStart = iso === start
          const isEnd = iso === end
          const busy = held(iso)
          return (
            <button
              key={iso}
              type="button"
              disabled={past}
              className={`cal-cell${selected ? ' is-range' : ''}${isStart || isEnd ? ' is-pick' : ''}${busy ? ' is-held' : ''}${iso === today ? ' is-today' : ''}`}
              onClick={() => pick(iso)}
            >
              {Number(iso.slice(8))}
              {busy ? <em>Held</em> : null}
            </button>
          )
        })}
      </div>
      <p className="cal-note">
        {start && end
          ? `${start} → ${end} · ${span} day${span === 1 ? '' : 's'}`
          : start
            ? 'Select the return day.'
            : 'Select start, then return.'}
        {' '}Gold days are already requested — Neal can still confirm a window.
      </p>
    </div>
  )
}
