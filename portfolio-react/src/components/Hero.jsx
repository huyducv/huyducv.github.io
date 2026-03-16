import { FaArrowRight } from 'react-icons/fa'

export function Hero({ data }) {
  return (
    <section id="main" className="relative min-h-[92vh]">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur-lg">
        <span className="text-lg font-bold tracking-tight text-white">Bjorn Melin</span>
        <div className="hidden gap-8 text-sm font-medium text-slate-200 md:flex">
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <div className="grid min-h-[92vh] grid-cols-12">
        <div className="col-span-12 lg:col-span-5 relative">
          <div className="absolute inset-0 bg-black/70" />
          <img
            src={data.photoUrl}
            alt={data.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 px-8 text-center text-white">
            <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-white/20 shadow-xl">
              <img src={data.photoUrl} alt={data.name} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-slate-300">
                Professional Portfolio
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                {data.title}
              </h1>
              <p className="mt-4 max-w-xl text-sm text-slate-200">
                {data.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {data.actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className={`inline-flex items-center justify-center gap-2 rounded-full border px-8 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 ${
                    action.style === 'outline'
                      ? 'border-white/40 bg-transparent text-white hover:bg-white/10'
                      : 'border-white bg-white text-black hover:opacity-90'
                  }`}
                >
                  {action.label}
                  <FaArrowRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 flex items-center justify-center px-8 py-20">
          <div className="w-full max-w-3xl">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-lg">
              <div className="absolute -left-10 top-8 h-20 w-20 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -right-10 bottom-8 h-20 w-20 rounded-full bg-white/10 blur-3xl" />

              <h2 className="text-2xl font-bold text-white">Experience timeline</h2>
              <p className="mt-2 text-sm text-slate-200">
                A quick look at past roles and education, with a clean, modern timeline.
              </p>

              <div className="mt-8 space-y-6">
                {data.timeline.map((item) => (
                  <div key={item.date} className="relative pl-10">
                    <div className="absolute left-0 top-1 h-full w-0.5 bg-white/10" />
                    <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-white/80 ring-2 ring-black" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-300">
                      {item.date}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-200">{item.org}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
