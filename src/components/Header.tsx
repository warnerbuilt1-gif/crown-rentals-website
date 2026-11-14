import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useId, useRef, useState } from 'react'
import PhoneLink from './PhoneLink'
import ReserveButton from './ReserveButton'
import { SITE_CREDENTIAL, SITE_NAME, SITE_SLOGAN } from '../config/site'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/equipment', label: 'Equipment' },
  { href: '/book', label: 'Book' },
  { href: '/attachments', label: 'Attachments' },
  { href: '/contractors', label: 'Contractors' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const isActive = (href: string) => {
    if (href === '/') return router.pathname === '/'
    return router.pathname.startsWith(href)
  }

  const crumb = navItems.find((item) => item.href !== '/' && isActive(item.href))
    ?? (router.pathname.startsWith('/contact') ? { href: '/contact', label: 'Reserve' } : undefined)

  useEffect(() => {
    setOpen(false)
  }, [router.pathname])

  useEffect(() => {
    if (!open) return
    const root = menuRef.current
    const focusable = root ? Array.from(root.querySelectorAll<HTMLElement>('a, button')) : []
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    first?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || focusable.length === 0) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="header-bar">
        <Link href="/" className="header-brand" aria-label={`${SITE_NAME} ${SITE_SLOGAN} ${SITE_CREDENTIAL}`}>
          <Image src="/crown-mark.webp" alt="" width={110} height={99} className="header-mark" priority />
          <span className="header-brand-copy">
            <span className="header-wordmark metal-text">{SITE_NAME}</span>
            <span className="header-slogan">{SITE_SLOGAN}</span>
            <span className="header-credential">{SITE_CREDENTIAL}</span>
          </span>
        </Link>

        <nav className="header-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`nav-link${isActive(item.href) ? ' is-active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <ReserveButton className={`nav-link nav-link-accent${router.pathname.startsWith('/contact') || router.pathname.startsWith('/book') ? ' is-active' : ''}`}>
            Reserve
          </ReserveButton>
        </nav>

        <div className="header-tools">
          <PhoneLink className="header-phone" />
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mobile-nav-layer" ref={menuRef}>
          <nav id={menuId} className="mobile-nav" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={isActive(item.href) ? 'is-active' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" aria-current={router.pathname.startsWith('/contact') ? 'page' : undefined}>
              Reserve
            </Link>
          </nav>
        </div>
      ) : null}

      {crumb ? (
        <nav className="crumb-bar" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li aria-current="page">{crumb.label}</li>
          </ol>
        </nav>
      ) : null}
    </header>
  )
}
