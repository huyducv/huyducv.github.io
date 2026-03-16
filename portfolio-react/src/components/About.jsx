import { SectionHeader } from './SectionHeader'

export function About({ data }) {
  return (
    <section id="about" className="relative py-24">
      <SectionHeader title={data.title} subtitle={data.subtitle} />

      <div className="mx-auto mt-14 max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-white/10" />

          <div className="space-y-10">
            {data.timeline.map((item) => (
              <div key={item.date + item.title} className="relative pl-12">
                <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <div className="h-2 w-2 rounded-full bg-white/80" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-wide ${
                        item.type === 'work'
                          ? 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-500/30'
                          : 'bg-teal-500/20 text-teal-300 ring-1 ring-teal-500/30'
                      }`}
                    >
                      {item.type === 'work' ? 'Work' : 'Education'}
                    </span>
                    <span className="text-xs font-medium text-slate-400">{item.date}</span>
                  </div>
                  <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{item.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
