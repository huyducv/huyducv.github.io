import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaExpand, FaTimes } from 'react-icons/fa'
import { SectionHeader } from './SectionHeader'

function BoldText({ text }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*|_[^_]+_| \*[^*]+\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const inner = part.slice(2, -2)
      return (
        <strong key={i} className="font-bold text-white">
          {inner}
        </strong>
      )
    }
    if (
      (part.startsWith('_') && part.endsWith('_')) ||
      (part.startsWith('*') && part.endsWith('*'))
    ) {
      const inner = part.slice(1, -1)
      return (
        <em key={i} className="italic text-slate-400">
          {inner}
        </em>
      )
    }
    return <span key={i}>{part}</span>
  })
}

function ProjectCard({ project, onImageOpen }) {
  const images = project.images || []
  const total = images.length
  const [current, setCurrent] = useState(0)

  const prev = (e) => {
    e.stopPropagation()
    setCurrent((i) => (i - 1 + total) % total)
  }
  const next = (e) => {
    e.stopPropagation()
    setCurrent((i) => (i + 1) % total)
  }

  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-black/30 transition-all duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]">
      {/* ── Card content ── */}
      <div className="flex flex-1 flex-col p-6">
        {project.categoryLine ? (
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-400/55">
            {project.categoryLine}
          </p>
        ) : null}
        <h3 className="mt-2 text-lg font-bold text-white">{project.title}</h3>
        {project.subtitle && (
          <p className="mt-1 text-xs font-medium text-slate-400">{project.subtitle}</p>
        )}

        {/* ── Image carousel (moved below subtitle) ── */}
        <div className="group relative mt-4 h-44 overflow-hidden rounded-xl border border-white/10 bg-slate-900/40">
          {images.length > 0 ? (
            <button
              key={current}
              type="button"
              onClick={() =>
                onImageOpen({
                  src: images[current],
                  alt: `${project.title} ${current + 1}`,
                })
              }
              className="relative block h-full w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cyan-400"
              aria-label={`Enlarge ${project.title} image ${current + 1}`}
            >
              <img
                src={images[current]}
                alt={`${project.title} ${current + 1}`}
                className="h-full w-full object-contain transition-opacity duration-300"
              />
              <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/65 text-white/90 opacity-70 backdrop-blur-sm transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                <FaExpand className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </button>
          ) : (
            <div className="flex h-full w-full items-center justify-center text-slate-600">
              <span className="text-4xl">🖼</span>
            </div>
          )}

          {/* Award badge */}
          {project.award && (
            <span
              className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-1 text-lg backdrop-blur-sm"
              role="img"
              aria-label="award"
            >
              {project.award}
            </span>
          )}

          {/* Left / right arrows */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white/80 opacity-0 backdrop-blur-sm transition group-hover:opacity-100 hover:bg-black/70 hover:text-white"
                aria-label="Previous image"
              >
                <FaChevronLeft className="h-3 w-3" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white/80 opacity-0 backdrop-blur-sm transition group-hover:opacity-100 hover:bg-black/70 hover:text-white"
                aria-label="Next image"
              >
                <FaChevronRight className="h-3 w-3" />
              </button>
            </>
          )}

          {/* Pill dot navigation */}
          {total > 1 && (
            <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrent(i)
                  }}
                  aria-label={`Image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Description (match Experience typography) */}
        {Array.isArray(project.description) ? (
          <div className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-slate-300">
            {project.description.map((line, idx) => (
              <p key={`${idx}-${line}`}>
                <BoldText text={line} />
              </p>
            ))}
          </div>
        ) : (
          <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
            <BoldText text={project.description} />
          </p>
        )}

        {Array.isArray(project.metrics) && project.metrics.length > 0 ? (
          <div className="mt-5 grid max-w-[280px] grid-cols-3 gap-0.5 border-t border-white/10 pt-4">
            {project.metrics.slice(0, 3).map((m) => (
              <div key={m.label}>
                <p className="text-base font-bold tabular-nums text-white">{m.value}</p>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.link && project.link !== '#' && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center text-xs font-semibold text-slate-300 underline-offset-4 hover:text-white hover:underline"
          >
            View project →
          </a>
        )}
      </div>
    </div>
  )
}

export function Projects({ data }) {
  const [lightboxImage, setLightboxImage] = useState(null)

  useEffect(() => {
    if (!lightboxImage) return undefined

    const previousOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setLightboxImage(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [lightboxImage])

  return (
    <>
      <section id="projects" className="relative border-t border-white/5 bg-[#060e17] py-24">
        <SectionHeader title={data.title} subtitle={data.subtitle} />
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {data.items.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onImageOpen={setLightboxImage}
            />
          ))}
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged project image"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 sm:right-7 sm:top-7"
            aria-label="Close enlarged image"
            autoFocus
          >
            <FaTimes className="h-5 w-5" aria-hidden="true" />
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-h-[calc(100vh-2rem)] max-w-full rounded-lg object-contain shadow-2xl shadow-black sm:max-h-[calc(100vh-4rem)]"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
