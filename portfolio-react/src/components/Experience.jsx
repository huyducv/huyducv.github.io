import { SectionHeader } from './SectionHeader'

function Tag({ label }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100 ring-1 ring-white/10">
      {label}
    </span>
  )
}

export function Experience({ data }) {
  return (
    <section id="experience" className="relative py-24">
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {data.items.map((item) => (
            <div
              key={item.title + item.company}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30"
            >
              <div className="absolute inset-0 bg-white/5" />
              <div className="relative">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-200">
                      {item.company} • {item.location}
                    </p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                    {item.timeframe}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-200">{item.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate-100">Key achievements</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200">
                    {item.highlights.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-200" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
