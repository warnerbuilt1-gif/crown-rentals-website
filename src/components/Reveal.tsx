import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<'idle' | 'wait' | 'in'>('idle')

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const show = () => setPhase('in')
    const rect = node.getBoundingClientRect()
    const viewHeight = window.innerHeight || 0
    if (rect.top < viewHeight * 0.92 && rect.bottom > 24) {
      show()
      return undefined
    }

    setPhase('wait')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal${phase === 'wait' ? ' is-wait' : ''}${phase === 'in' ? ' is-in' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
