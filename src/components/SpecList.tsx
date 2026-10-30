type Spec = {
  label: string
  value: string
}

export default function SpecList({ specs, limit }: { specs: readonly Spec[]; limit?: number }) {
  const rows = typeof limit === 'number' ? specs.slice(0, limit) : specs
  if (rows.length === 0) return null

  return (
    <dl className="spec-list">
      {rows.map((spec) => (
        <div key={spec.label}>
          <dt>{spec.label}</dt>
          <dd>{spec.value}</dd>
        </div>
      ))}
    </dl>
  )
}
