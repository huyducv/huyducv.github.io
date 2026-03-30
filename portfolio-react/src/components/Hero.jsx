import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
}

function Tagline({ text }) {
  const parts = text.split(/\s*·\s*/)
  return (
    <>
      {parts.map((part, i) => (
        <span key={`${i}-${part}`}>
          {i > 0 ? (
            <span className="mx-1.5 text-cyan-400" aria-hidden>
              ·
            </span>
          ) : null}
          <span>{part}</span>
        </span>
      ))}
    </>
  )
}

/** `**like this**` → emphasized spans; outside stays muted. */
function RichBioLine({ text, emphasisClass }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const inner = part.slice(2, -2)
      return (
        <strong key={i} className={`font-semibold ${emphasisClass}`}>
          {inner}
        </strong>
      )
    }
    return (
      <span key={i} className="text-slate-400">
        {part}
      </span>
    )
  })
}

export function Hero({ data }) {
  return (
    <section
      id="main"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#070a0f] py-28 sm:py-32"
    >
      {/* Subtle cyan grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Soft orbs (cyan / teal — site theme) */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-32 -top-32 h-[380px] w-[380px] rounded-full bg-cyan-500/15 blur-3xl animate-float-orb"
          style={{ animationDuration: '12s' }}
        />
        <div
          className="absolute -bottom-32 -right-24 h-[360px] w-[360px] rounded-full bg-teal-600/12 blur-3xl animate-float-orb"
          style={{ animationDuration: '15s', animationDelay: '2s' }}
        />

        {/* Floating dots */}
        {[
          { top: '12%', left: '8%', size: 3, dur: '5s', delay: '0s' },
          { top: '25%', left: '80%', size: 4, dur: '7s', delay: '1.2s' },
          { top: '60%', left: '15%', size: 2, dur: '6s', delay: '0.6s' },
          { top: '75%', left: '70%', size: 3, dur: '8s', delay: '2s' },
          { top: '45%', left: '88%', size: 2, dur: '5.5s', delay: '0.3s' },
          { top: '85%', left: '35%', size: 4, dur: '7.5s', delay: '1.8s' },
          { top: '18%', left: '55%', size: 2, dur: '6.5s', delay: '0.9s' },
          { top: '55%', left: '45%', size: 3, dur: '9s', delay: '2.4s' },
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

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-[auto_1fr] lg:gap-38">
          <div className="mx-auto mt-10 shrink-0 sm:mt-12 lg:mx-0 lg:mt-14 lg:order-1">
            <div className="h-36 w-36 overflow-hidden rounded-full border-[3px] border-cyan-400/35 bg-white/5 shadow-lg shadow-cyan-900/25 sm:h-40 sm:w-40">
              <img
                src={data.photoUrl}
                alt={data.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="text-left lg:order-2 lg:pl-14">
            <p className="flex flex-wrap items-center gap-2 text-sm font-medium lowercase tracking-wide text-slate-500">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)] animate-hero-tag-blink"
                aria-hidden
              />
              <Tagline text={data.tagline} />
            </p>

            <h1 className="mt-6 text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-white">{data.headlinePrimary}</span>{' '}
              <span className="text-cyan-400">{data.headlineAccent}</span>
            </h1>

            <div className="mt-8 max-w-xl space-y-3 text-sm leading-relaxed sm:text-base">
              <p>
                <RichBioLine text={data.bioParagraph1} emphasisClass="text-white" />
              </p>
              <p>
                <RichBioLine text={data.bioParagraph2} emphasisClass="text-cyan-400" />
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {data.actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target={action.openInNewTab ? '_blank' : undefined}
                  rel={action.openInNewTab ? 'noreferrer' : undefined}
                  className={`inline-flex items-center justify-center rounded-full border px-8 py-3 text-sm font-semibold transition ${
                    action.style === 'primary'
                      ? 'border-cyan-400 bg-cyan-400 text-black hover:bg-cyan-300'
                      : 'border-white/40 bg-transparent text-white hover:bg-white/10'
                  }`}
                >
                  {action.label}
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2">
              {data.socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-400"
                  >
                    {Icon ? (
                      <Icon className="h-5 w-5" />
                    ) : (
                      <span className="text-[10px] font-bold leading-none tracking-tight">CV</span>
                    )}
                  </a>
                )
              })}
            </div>

            <div className="mt-14 grid max-w-md grid-cols-3 gap-1 border-t border-white/10 pt-4">
              {data.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-base font-bold tabular-nums text-white sm:text-lg">{s.value}</p>
                  <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[10px]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
