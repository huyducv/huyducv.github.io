export function About({ data }) {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl bg-white/5 p-8 shadow-xl shadow-black/40">
              <div className="flex items-center gap-4">
                <div className="h-24 w-24 rounded-full bg-white/10 shadow-lg" />
                <div>
                  <h3 className="text-2xl font-bold text-white">{data.title}</h3>
                  <p className="mt-2 text-sm text-slate-200">{data.subtitle}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {data.blocks.map((block) => (
                  <div
                    key={block.label}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="mt-1 h-2 w-2 rounded-full bg-slate-200" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-200">
                        {block.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">{block.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white/5 p-10 shadow-xl shadow-black/40 backdrop-blur">
              <h3 className="text-xl font-bold text-white">Who I am</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-200">
                I build clean, modern data products with a focus on reliability, usability, and measurable impact.
              </p>

              <div className="mt-8">
                <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wide">
                  Skills & tools
                </h4>
                <div className="mt-4 flex flex-wrap gap-3">
                  {data.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-slate-100 ring-1 ring-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                    What I enjoy
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200">
                    <li>Building end-to-end data platforms</li>
                    <li>Designing scalable pipelines</li>
                    <li>Picking apart complex systems</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                    What I’m learning
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200">
                    <li>Production-grade ML systems</li>
                    <li>Data mesh architectures</li>
                    <li>Real-time analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
