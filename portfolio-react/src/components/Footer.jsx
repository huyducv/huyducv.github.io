export function Footer({ data }) {
  return (
    <footer className="border-t border-white/10 py-8 bg-[#050c0b]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-400">
          {data.name} · {data.location}
        </p>
      </div>
    </footer>
  )
}
