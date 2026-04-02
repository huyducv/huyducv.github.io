import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
}

export function Contact({ data }) {
  const phoneHref = data.phone ? `tel:${String(data.phone).replace(/[^\d+]/g, '')}` : null
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio message — Name: ${name || '(no name)'} | Email: ${email || '(no email)'}`
    const body = message || ''
    const mailto = `mailto:vuhuyduc03@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="relative border-t border-white/5 bg-[#060e17] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(34,211,238,0.25)]">
              {data.title}
            </h2>
            <p className="mt-4 max-w-lg text-lg text-slate-200">{data.subtitle}</p>

            <div className="mt-10 space-y-4">
              {data.location ? (
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-100">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-black">
                    <FaMapMarkerAlt className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <span className="text-xs font-semibold tracking-wide text-slate-400">
                      Location
                    </span>
                    <p className="mt-0.5 font-semibold text-white">{data.location}</p>
                  </div>
                </div>
              ) : null}
              {data.phone ? (
                <a
                  href={phoneHref ?? undefined}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-100 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-black">
                    <FaPhone className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <span className="text-xs font-semibold tracking-wide text-slate-400">
                      Phone
                    </span>
                    <p className="mt-0.5 font-semibold text-white underline underline-offset-4">
                      {data.phone}
                    </p>
                  </div>
                </a>
              ) : null}
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

            <form className="mt-8 space-y-4" onSubmit={onSubmit}>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
