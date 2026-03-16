import { SectionHeader } from './SectionHeader'

export function Projects({ data }) {
  return (
    <section id="projects" className="relative py-24">
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {data.items.map((project) => (
          <div
            key={project.title}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30"
          >
            <div className="absolute inset-0 bg-white/5" />
            <div className="relative flex h-full flex-col">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-200">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-3 text-sm font-semibold transition hover:opacity-90"
              >
                View details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
