import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiLangchain,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiPandas,
  SiNumpy,
  SiApachespark,
  SiGit,
  SiGithub,
  SiSnowflake,
  SiDatabricks,
  SiDbt,
  SiRstudioide,
} from 'react-icons/si'
import { FaChartBar } from 'react-icons/fa'
import { IoLogoTableau } from 'react-icons/io5'
import { VscVscode } from 'react-icons/vsc'

const TECHS = [
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'R', Icon: SiRstudioide, color: '#276DC3' },
  { name: 'Pandas', Icon: SiPandas, color: '#150458' },
  { name: 'NumPy', Icon: SiNumpy, color: '#013243' },
  { name: 'PyTorch', Icon: SiPytorch, color: '#EE4C2C' },
  { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
  { name: 'LangChain', Icon: SiLangchain, color: '#1C3C3C' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Tableau', Icon: IoLogoTableau, color: '#E97627' },
  { name: 'Power BI', Icon: FaChartBar, color: '#F2C811' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'GitHub', Icon: SiGithub, color: '#ffffff' },
  { name: 'Spark', Icon: SiApachespark, color: '#E25A1C' },
  { name: 'Snowflake', Icon: SiSnowflake, color: '#29B5E8' },
  { name: 'Databricks', Icon: SiDatabricks, color: '#FF3621' },
  { name: 'dbt', Icon: SiDbt, color: '#FF694B' },
  { name: 'VS Code', Icon: VscVscode, color: '#007ACC' },
]

/** Wide row at top → fewer items each row toward the bottom (∇). */
function splitInvertedPyramid(items) {
  const rows = []
  let index = 0
  let rowWidth = Math.max(2, Math.ceil(items.length * 0.4))
  while (index < items.length) {
    const take = Math.min(rowWidth, items.length - index)
    rows.push(items.slice(index, index + take))
    index += take
    rowWidth = Math.max(1, rowWidth - 1)
  }
  return rows
}

export function TechForge() {
  const pyramidRows = splitInvertedPyramid(TECHS)

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

        <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col items-center gap-4 sm:gap-5">
          {pyramidRows.map((row, rowIndex) => {
            const offset = pyramidRows.slice(0, rowIndex).reduce((a, r) => a + r.length, 0)
            return (
              <div
                key={rowIndex}
                className="flex flex-wrap justify-center gap-3 sm:gap-3.5"
              >
                {row.map((tech, i) => (
                  <div
                    key={tech.name}
                    className="group flex w-[90px] cursor-default flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_24px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:from-cyan-400/10 hover:to-white/[0.04] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_28px_-6px_rgba(34,211,238,0.35)]"
                    style={{ animationDelay: `${(offset + i) * 40}ms` }}
                  >
                    <tech.Icon
                      className="h-8 w-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.16)] transition-[filter] duration-300 group-hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.5)]"
                      style={{ color: tech.color }}
                    />
                    <span className="text-center text-[11px] font-medium leading-tight tracking-wide text-slate-300 transition-colors group-hover:text-slate-100">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
