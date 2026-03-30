import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
}

export function Nav({ name, links, socials }) {
  const [active, setActive] = useState('#main')
  const [navHidden, setNavHidden] = useState(true)

  useEffect(() => {
    let hideTimer = null

    const navHeight = () =>
      document.querySelector('nav')?.getBoundingClientRect().height ?? 72

    /** Document Y of section top (offsetTop breaks inside positioned ancestors). */
    const sectionDocumentTop = (el) =>
      el.getBoundingClientRect().top + window.scrollY

    const computeActive = () => {
      const sections = Array.from(document.querySelectorAll('section[id]'))
        .map((el) => ({ id: el.id, top: sectionDocumentTop(el) }))
        .sort((a, b) => a.top - b.top)

      const line = window.scrollY + navHeight() + 24
      let current = '#main'
      for (const s of sections) {
        if (line >= s.top) current = `#${s.id}`
      }
      setActive(current)
    }

    const onScroll = () => {
      computeActive()

      // Hide the bar when the page is at the very top.
      if (window.scrollY <= 8) {
        if (hideTimer) window.clearTimeout(hideTimer)
        setNavHidden(true)
        return
      }

      // Show when scrolling down, then hide shortly after the user stops.
      setNavHidden(false)

      if (hideTimer) window.clearTimeout(hideTimer)
      hideTimer = window.setTimeout(() => {
        setNavHidden(true)
      }, 900)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', computeActive)
    computeActive()
    const id = requestAnimationFrame(() => computeActive())
    return () => {
      cancelAnimationFrame(id)
      if (hideTimer) window.clearTimeout(hideTimer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', computeActive)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center px-6 py-4 backdrop-blur-md transition-transform duration-300 ease-out ${
        navHidden ? '-translate-y-full pointer-events-none' : 'translate-y-0 pointer-events-auto'
      }`}
    >
      <a
        href="#main"
        className="relative z-10 shrink-0 text-lg font-bold tracking-tight text-white transition hover:opacity-80"
      >
        {name}
      </a>

      <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
        <div className="pointer-events-auto flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-10 ml-auto hidden items-center gap-3 md:flex">
        {socials.map((social) => {
          const Icon = SOCIAL_ICONS[social.icon]
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-slate-300 transition hover:border-white/50 hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          )
        })}
      </div>

      <div className="relative z-10 ml-auto md:hidden">
        <button
          type="button"
          className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white"
          onClick={() => {
            const menu = document.getElementById('mobile-menu')
            if (!menu) return
            menu.classList.toggle('hidden')
          }}
        >
          Menu
        </button>
      </div>

      <div id="mobile-menu" className="absolute right-6 top-16 hidden w-48 rounded-xl border border-white/10 bg-black/80 p-4 backdrop-blur-md">
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium ${active === link.href ? 'text-white' : 'text-slate-200'}`}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex gap-3 border-t border-white/10 pt-3">
            {socials.map((social) => {
              const Icon = SOCIAL_ICONS[social.icon]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-slate-300 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
