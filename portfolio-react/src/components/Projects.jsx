import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { SectionHeader } from './SectionHeader'

function ProjectCard({ project }) {
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
      {/* ── Image carousel ── */}
      <div className="group relative h-44 overflow-hidden bg-white/5">
        {images.length > 0 ? (
          <img
            key={current}
            src={images[current]}
            alt={`${project.title} ${current + 1}`}
            className="h-full w-full object-cover transition-opacity duration-300"
          />
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
              onClick={prev}
              className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white/80 opacity-0 backdrop-blur-sm transition group-hover:opacity-100 hover:bg-black/70 hover:text-white"
              aria-label="Previous image"
            >
              <FaChevronLeft className="h-3 w-3" />
            </button>
            <button
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
                onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                aria-label={`Image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Card content ── */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        {project.subtitle && (
          <p className="mt-1 text-xs font-medium text-slate-400">{project.subtitle}</p>
        )}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
          {project.description}
        </p>
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
  return (
    <section id="projects" className="relative border-t border-white/5 bg-[#060e17] py-24">
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {data.items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
