import { useState, useRef, useEffect } from 'react'
import { FaPlus, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const ACTIONS = [
  { label: 'GitHub',   href: 'https://github.com/quanchan',            Icon: FaGithub   },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/anhquantran12',   Icon: FaLinkedin },
  { label: 'Email',    href: 'mailto:quan.trananh12@gmail.com',         Icon: FaEnvelope },
  { label: 'CV',       href: '/cv.pdf',                                 text: 'CV'       },
]

export function FloatingActions() {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState(null)
  const drag = useRef({ active: false, ox: 0, oy: 0 })
  const didMove = useRef(false)

  // Set initial position after mount (window is available)
  useEffect(() => {
    setPos({
      x: window.innerWidth - 64,
      y: Math.round(window.innerHeight / 2),
    })

    const onMouseMove = (e) => {
      if (!drag.current.active) return
      didMove.current = true
      setPos({
        x: Math.max(0, Math.min(e.clientX - drag.current.ox, window.innerWidth  - 44)),
        y: Math.max(0, Math.min(e.clientY - drag.current.oy, window.innerHeight - 44)),
      })
    }
    const onMouseUp = () => { drag.current.active = false }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup',   onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup',   onMouseUp)
    }
  }, [])

  const onMouseDown = (e) => {
    drag.current = { active: true, ox: e.clientX - pos.x, oy: e.clientY - pos.y }
    didMove.current = false
    e.preventDefault()
  }

  const onToggle = () => {
    if (!didMove.current) setOpen((v) => !v)
  }

  if (!pos) return null

  return (
    <div style={{ position: 'fixed', left: pos.x, top: pos.y, zIndex: 50 }}>
      {/* Action buttons — absolutely above the "+" button */}
      <div className="absolute left-0 flex flex-col items-center gap-2.5" style={{ bottom: 52 }}>
        {ACTIONS.map((action, i) => (
          <a
            key={action.label}
            href={action.href}
            target={action.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            title={action.label}
            className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#111827] text-slate-300 shadow-lg transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 ${
              open
                ? 'translate-y-0 opacity-100'
                : 'translate-y-3 opacity-0 pointer-events-none'
            }`}
            style={{
              transitionDelay: open
                ? `${i * 55}ms`
                : `${(ACTIONS.length - 1 - i) * 35}ms`,
            }}
          >
            {action.Icon
              ? <action.Icon className="h-5 w-5" />
              : <span className="text-xs font-bold">{action.text}</span>
            }
          </a>
        ))}
      </div>

      {/* "+" toggle / drag handle */}
      <button
        onMouseDown={onMouseDown}
        onClick={onToggle}
        draggable={false}
        title={open ? 'Close' : 'Links'}
        className={`flex h-11 w-11 select-none cursor-grab items-center justify-center rounded-full border border-white/10 bg-[#111827] text-white shadow-lg transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 active:cursor-grabbing ${
          open ? 'rotate-45 border-cyan-400/30 text-cyan-400' : ''
        }`}
      >
        <FaPlus className="h-4 w-4" />
      </button>
    </div>
  )
}
