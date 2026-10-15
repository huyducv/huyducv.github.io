import powerBiCertificationIcon from '../assets/power-bi-certification.svg'

export function Certifications({ data }) {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="relative overflow-hidden border-t border-white/5 bg-black py-16"
    >
      <div className="mx-auto max-w-[1344px] px-4 sm:px-6 lg:px-12">
        <h2
          id="certifications-title"
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          {data.title}
        </h2>

        <div className="mt-7 flex flex-col gap-5 rounded-2xl border border-[#2a3441] bg-[#101923] p-6 sm:flex-row sm:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1d2933]">
            <img
              src={powerBiCertificationIcon}
              alt=""
              className="h-7 w-7"
              aria-hidden="true"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold leading-7 text-white sm:text-xl">
              {data.name}
            </h3>
            <p className="mt-2 text-xs font-medium leading-[18px] text-slate-300">
              {data.issuer} · Issued {data.issued}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-5">
            <span className="rounded-full bg-[#1b2836] px-3 py-2 text-xs font-medium leading-[18px] text-white">
              {data.code}
            </span>
            <a
              href={data.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold leading-4 text-[#f2c811] transition hover:text-[#ffe353] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2c811]"
              aria-label={`View ${data.name} credential`}
            >
              View credential ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
