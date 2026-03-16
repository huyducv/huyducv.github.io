import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
}

export function Contact({ data }) {
  return (
    <section id="contact" className="relative border-t border-white/5 bg-[#000000] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              {data.title}
            </h2>
            <p className="mt-4 max-w-lg text-lg text-slate-200">{data.subtitle}</p>

            <div className="mt-10 space-y-4">
              {data.socials.map((item) => {
                const Icon = ICONS[item.icon]
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl underline border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-black">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>{item.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-black/30">
            <h3 className="text-lg font-bold text-white">Send a message</h3>
            <p className="mt-2 text-sm text-slate-200">
              Feel free to reach out for collaborations, mentoring, or just to say hi.
            </p>

            <form className="mt-8 space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="What’s on your mind?"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
