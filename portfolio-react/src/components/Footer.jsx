export function Footer({ data }) {
  return (
    <footer className="border-t border-white/10 py-8 bg-[#050c0b]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-400">
          Proudly designed by {data.designedBy}
        </p>
        <p className="mt-1 text-center text-xs text-slate-500">© {data.year}</p>
      </div>
    </footer>
  )
}
