import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { useRouter } from 'next/router'

type ReserveContextValue = {
  isOpen: boolean
  machineSlug: string
  openReserve: (slug?: string) => void
  closeReserve: () => void
}

const ReserveContext = createContext<ReserveContextValue | null>(null)

export function ReserveProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [machineSlug, setMachineSlug] = useState('')

  const openReserve = useCallback((slug = '') => {
    const mobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches
    if (mobile) {
      setIsOpen(false)
      void router.push(slug ? `/book/?item=${slug}` : '/book/')
      return
    }
    setMachineSlug(slug)
    setIsOpen(true)
  }, [router])

  const closeReserve = useCallback(() => {
    setIsOpen(false)
  }, [])

  const value = useMemo(
    () => ({ isOpen, machineSlug, openReserve, closeReserve }),
    [isOpen, machineSlug, openReserve, closeReserve]
  )

  return <ReserveContext.Provider value={value}>{children}</ReserveContext.Provider>
}

export function useReserve() {
  const context = useContext(ReserveContext)
  if (!context) {
    throw new Error('useReserve must be used within ReserveProvider')
  }
  return context
}
