import { useReserve } from './ReserveContext'

type ReserveButtonProps = {
  slug?: string
  className?: string
  children?: string
}

export default function ReserveButton({ slug, className = 'btn-primary', children = 'Reserve equipment' }: ReserveButtonProps) {
  const { openReserve } = useReserve()
  return (
    <button type="button" className={className} onClick={() => openReserve(slug)}>
      {children}
    </button>
  )
}
