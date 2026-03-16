export function Footer() {
  return (
    <footer className="bg-black/40 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Bjorn Melin. All rights reserved.</p>
          <p className="text-sm text-slate-400">
            Built with React + Tailwind • Minimal black & white theme
          </p>
        </div>
      </div>
    </footer>
  )
}
