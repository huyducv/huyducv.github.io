import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
}

export function Nav({ name, links, socials }) {
  const [active, setActive] = useState('#main')

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))

    const onScroll = () => {
      const scrollPos = window.scrollY + 140
      let current = '#main'
      sections.forEach((section) => {
        if (scrollPos >= section.offsetTop) {
          current = `#${section.id}`
        }
      })
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md">
      <a href="#main" className="text-lg font-bold tracking-tight text-white hover:opacity-80 transition">
        {name}
      </a>

      <div className="hidden gap-8 text-sm font-medium md:flex">
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

      <div className="hidden items-center gap-3 md:flex">
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

      <div className="md:hidden">
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
