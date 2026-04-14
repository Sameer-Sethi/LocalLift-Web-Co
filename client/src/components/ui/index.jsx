import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="accordion" id="faq-accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion__item ${openIndex === index ? 'accordion__item--open' : ''}`}
        >
          <button
            className="accordion__trigger"
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            aria-expanded={openIndex === index}
            id={`faq-item-${index}`}
          >
            {item.question}
            <ChevronDown size={20} />
          </button>
          {openIndex === index && (
            <div className="accordion__content">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export function SectionHeader({ badge, title, description, light }) {
  return (
    <div className="section-header">
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className="heading-2">{title}</h2>
      {description && <p className="text-lg">{description}</p>}
    </div>
  )
}

export function StatCard({ number, suffix = '', label, prefix = '' }) {
  return (
    <div className="stat">
      <div className="stat__number stat__number--gradient">
        {prefix}{number}{suffix}
      </div>
      <div className="stat__label">{label}</div>
    </div>
  )
}
