import Link from 'next/link'
import { FLEET, JOB_GUIDES } from '../config/site'

type JobSelectorProps = {
  selected?: string[]
  onSelect?: (slugs: string[]) => void
}

export default function JobSelector({ selected = [], onSelect }: JobSelectorProps) {
  return (
    <div className="job-guides" role="group" aria-label="What is the job">
      {JOB_GUIDES.map((job) => {
        const active = job.slugs.every((slug) => selected.includes(slug)) && job.slugs.length > 0
        const names = job.slugs.map((slug) => FLEET.find((item) => item.slug === slug)?.name).filter(Boolean).join(', ')
        const inner = (
          <>
            <strong>{job.label}</strong>
            <span>{job.hint} · {names}</span>
          </>
        )
        if (!onSelect) {
          return (
            <Link key={job.id} href={`/book/?job=${job.id}`} className="job-guide">
              {inner}
            </Link>
          )
        }
        return (
          <button
            key={job.id}
            type="button"
            className={`job-guide${active ? ' is-active' : ''}`}
            onClick={() => onSelect([...job.slugs])}
          >
            {inner}
          </button>
        )
      })}
    </div>
  )
}
