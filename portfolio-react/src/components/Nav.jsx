import { useEffect, useState } from 'react'

export function Nav({ links }) {
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
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 backdrop-blur-md">
      <span className="text-lg font-bold tracking-tight text-white">Bjorn Melin</span>
      <div className="hidden gap-8 text-sm font-medium text-slate-200 md:flex">
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

      <div id="mobile-menu" className="absolute right-6 top-16 hidden w-48 rounded-xl border border-white/10 bg-black/70 p-4">
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium text-slate-200 ${active === link.href ? 'text-white' : 'text-slate-200'}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
