import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
}

export function Hero({ data }) {
  return (
    <section id="main" className="relative flex min-h-screen items-center justify-center py-32 overflow-hidden">

      {/* ── Floating background ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient orbs */}
        <div
          className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-cyan-600/20 blur-3xl animate-float-orb"
          style={{ animationDuration: '11s' }}
        />
        <div
          className="absolute -bottom-24 -right-24 h-[380px] w-[380px] rounded-full bg-teal-600/20 blur-3xl animate-float-orb"
          style={{ animationDuration: '14s', animationDelay: '3s' }}
        />
        <div
          className="absolute left-1/2 top-1/3 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-cyan-700/15 blur-3xl animate-float-orb"
          style={{ animationDuration: '9s', animationDelay: '1.5s' }}
        />

        {/* Floating dots */}
        {[
          { top: '12%',  left: '8%',  size: 3, dur: '5s',   delay: '0s'   },
          { top: '25%',  left: '80%', size: 4, dur: '7s',   delay: '1.2s' },
          { top: '60%',  left: '15%', size: 2, dur: '6s',   delay: '0.6s' },
          { top: '75%',  left: '70%', size: 3, dur: '8s',   delay: '2s'   },
          { top: '45%',  left: '88%', size: 2, dur: '5.5s', delay: '0.3s' },
          { top: '85%',  left: '35%', size: 4, dur: '7.5s', delay: '1.8s' },
          { top: '18%',  left: '55%', size: 2, dur: '6.5s', delay: '0.9s' },
          { top: '55%',  left: '45%', size: 3, dur: '9s',   delay: '2.4s' },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-300/40 animate-float-dot"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              animationDuration: dot.dur,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 text-center">
        <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-cyan-400/40 shadow-2xl shadow-cyan-900/30">
          <img src={data.photoUrl} alt={data.name} className="h-full w-full object-cover" />
        </div>

        <div>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            {data.title}
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-300">{data.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {data.actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={`inline-flex items-center justify-center rounded-full border px-8 py-3 text-sm font-semibold transition ${
                action.style === 'outline'
                  ? 'border-white/40 bg-transparent text-white hover:bg-white/10'
                  : 'border-cyan-400 bg-cyan-400 text-black hover:bg-cyan-300'
              }`}
            >
              {action.label}
            </a>
          ))}
        </div>

        <div className="flex gap-5">
          {data.socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.icon]
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
