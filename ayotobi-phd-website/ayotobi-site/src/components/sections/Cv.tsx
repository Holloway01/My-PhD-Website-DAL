import { useRef } from 'react'
import cvSchools from '@/content/site/cv-schools.json'
import { cvEducationEntries, cvAppointmentEntries, type CvEntry } from '@/lib/content'
import { SectionHeader } from '@/components/effects/SectionHeader'
import { useReveal } from '@/hooks/useReveal'

function CvRow({ entry }: { entry: CvEntry }) {
  const ref = useRef<HTMLDivElement | null>(null)
  useReveal(ref)
  return (
    <div className="cv-row" ref={ref}>
      <div className="cv-row-date">
        {entry.dateStart}
        {entry.dateEnd && (
          <>
            <br />
            {entry.dateEnd}
          </>
        )}
        {!entry.dateEnd && entry.dateStart && (
          <>
            <br />—
          </>
        )}
      </div>
      <div>
        <h4 className="cv-row-title">{entry.title}</h4>
        <div className="cv-row-org">{entry.org}</div>
        <p className="cv-row-desc">{entry.desc}</p>
      </div>
    </div>
  )
}

export function Cv() {
  return (
    <section className="sect" id="cv">
      <SectionHeader
        index="04"
        label="Curriculum vitae"
        heading={
          <>
            Research, teaching <span>&amp;</span> work experience
          </>
        }
        aside={
          <a
            href="https://www.linkedin.com/in/ayotobiholo"
            target="_blank"
            rel="noreferrer"
            data-magnetic="1"
            className="btn btn-ghost"
          >
            Full profile on LinkedIn
          </a>
        }
      />
      <div className="cv-grid">
        <div className="cv-col">
          <div className="cv-col-label">Education</div>
          {cvEducationEntries.map((entry) => (
            <CvRow entry={entry} key={entry.title} />
          ))}
          <div className="cv-schools-label">Conferences &amp; coursework</div>
          <ul className="cv-schools">
            {cvSchools.items.map((s) => (
              <li className="cv-school-item" key={s.label}>
                <span>{s.label}</span>
                <span className="yr">{s.year}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="cv-col">
          <div className="cv-col-label">Appointments</div>
          {cvAppointmentEntries.map((entry) => (
            <CvRow entry={entry} key={entry.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
