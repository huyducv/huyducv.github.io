export function Experience({ data }) {
  return (
    <section id="experience" className="relative py-24 bg-[#050c0b]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-white">
          {data.titlePrefix}{' '}
          <span className="text-cyan-400">{data.titleAccent}</span>
        </h2>

        <div className="relative mt-16">
          {/* Vertical line — left rail on mobile, centered on desktop */}
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 lg:left-1/2 lg:-translate-x-1/2" />

          {/* pl-10 on mobile creates room for the left rail; removed on desktop */}
          <div className="space-y-14 pl-10 lg:pl-0">
            {data.items.map((item) => (
              <div key={item.title + item.company} className="relative lg:grid lg:grid-cols-2 lg:gap-0">
                {/* LEFT — title, company, type (desktop only) */}
                <div className="hidden items-start justify-end pr-12 pt-0.5 text-right lg:flex lg:flex-col">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-cyan-400">{item.company}</p>
                  <span className="mt-2 inline-block rounded-full border border-white/20 px-3 py-0.5 text-xs text-slate-400">
                    {item.type}
                  </span>
                </div>

                {/* Timeline dot — left rail on mobile, centered on desktop */}
                <div className="absolute -left-6 top-2 -translate-x-1/2 flex items-center justify-center lg:left-1/2">
                  <div className="h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-[#050c0b]" />
                </div>

                {/* RIGHT — dates + description */}
                <div className="lg:pl-12">
                  {/* Mobile: title, company, type shown here */}
                  <div className="mb-3 lg:hidden">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-cyan-400">{item.company}</p>
                    <span className="mt-2 inline-block rounded-full border border-white/20 px-3 py-0.5 text-xs text-slate-400">
                      {item.type}
                    </span>
                  </div>

                  <div className="mb-3">
                    <p className="text-base font-bold text-white">{item.endDate}</p>
                    <p className="text-sm font-medium text-cyan-400">{item.startDate}</p>
                  </div>

                  <p className="max-w-sm text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
