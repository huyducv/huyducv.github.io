import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiFastapi, SiPostgresql, SiMongodb, SiRedis, SiDocker,
  SiPandas, SiNumpy, SiApachespark, SiGit, SiGithub, SiLinux, SiTailwindcss,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

const TECHS = [
  { name: 'Python',       Icon: SiPython,             color: '#3776AB' },
  { name: 'Pytorch',        Icon: SiReact,               color: '#61DAFB' },
  { name: 'TensorFlow',      Icon: SiNextdotjs,           color: '#ffffff' },
  { name: 'LangChain',      Icon: SiNodedotjs,           color: '#68A063' },
  { name: 'PowerBI',      Icon: SiFastapi,             color: '#009688' },
  { name: 'PostgreSQL',   Icon: SiPostgresql,          color: '#4169E1' },
  { name: 'MongoDB',      Icon: SiMongodb,             color: '#47A248' },
  { name: 'Tableau',        Icon: SiRedis,               color: '#DC382D' },
  { name: 'Docker',       Icon: SiDocker,              color: '#2496ED' },
  { name: 'MySQL',          Icon: FaAws,             color: '#FF9900' },
  { name: 'Pandas',       Icon: SiPandas,              color: '#9775fa' },
  { name: 'NumPy',        Icon: SiNumpy,               color: '#4DBBEE' },
  { name: 'Spark',        Icon: SiApachespark,         color: '#E25A1C' },
  { name: 'Git',          Icon: SiGit,                 color: '#F05032' },
  { name: 'GitHub',       Icon: SiGithub,              color: '#ffffff' },
  { name: 'Snowflake',        Icon: SiLinux,               color: '#FCC624' },
  { name: 'Databricks',        Icon: SiLinux,               color: '#FCC624' },
  { name: 'dbt',        Icon: SiLinux,               color: '#FCC624' },
  { name: 'VS Code',      Icon: VscVscode,         color: '#007ACC' },
]

export function TechForge() {
  return (
    <section id="skills" className="relative border-t border-white/5 bg-[#050c0b] py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
            The Tech Forge
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-400">
            Battle-tested technologies powering every project I ship.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {TECHS.map((tech, i) => (
            <div
              key={tech.name}
              className="group flex w-[88px] cursor-default flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:shadow-md hover:shadow-cyan-900/20"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <tech.Icon className="h-8 w-8" style={{ color: tech.color }} />
              <span className="text-center text-[11px] font-medium leading-tight text-slate-400 transition-colors group-hover:text-slate-200">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
