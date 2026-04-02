export function SectionHeader({ title, subtitle }) {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(34,211,238,0.25)]">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  )
}
