import Link from 'next/link'
import { EQUIPMENT_CATEGORIES } from '../config/site'

export default function CategoryStrip() {
  const categories = EQUIPMENT_CATEGORIES.filter((item) => item.id !== 'all')

  return (
    <nav className="category-strip" aria-label="Equipment categories">
      {categories.map((item) => (
        <Link key={item.id} href={`/equipment/?category=${item.id}`} className="category-card">
          <strong>{item.label}</strong>
          <span>{item.blurb}</span>
        </Link>
      ))}
    </nav>
  )
}
