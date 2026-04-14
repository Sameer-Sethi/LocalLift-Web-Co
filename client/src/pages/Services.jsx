import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, ArrowRight, Globe, RefreshCcw, TrendingUp, Gauge,
  Search, CheckCircle2, Users, DollarSign, Target, Zap,
  Layers, FileText, Smartphone, BarChart3, Code2, Palette
} from 'lucide-react'
import { SectionHeader } from '../components/ui'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const services = [
  {
    id: 'web-design',
    icon: <Globe size={28} />,
    title: 'Website Design & Development',
    tagline: 'Your digital storefront, built to sell.',
    description: 'We design and develop custom websites from scratch that are engineered to convert visitors into paying customers. Not just a pretty portfolio — a revenue-generating machine.',
    forWho: 'Businesses with no website, or a DIY site that isn\'t generating leads.',
    impact: 'Companies with professional websites generate 2-3x more leads than those without. Our custom sites consistently outperform templates by 200%+ in conversion rates.',
    deliverables: [
      'Custom UI/UX design (Figma mockups)',
      'Responsive development (mobile, tablet, desktop)',
      'Content strategy & copywriting',
      'Contact forms with lead capture',
      'Analytics & conversion tracking',
      'Speed optimization (sub-3s load time)',
      'Basic SEO setup',
      'Cross-browser testing'
    ],
    color: '#2563EB'
  },
  {
    id: 'redesign',
    icon: <RefreshCcw size={28} />,
    title: 'Website Redesign',
    tagline: 'Turn your underperformer into a leadgen machine.',
    description: 'Already have a website that looks okay but doesn\'t generate results? We audit, redesign, and rebuild it with conversion-focused architecture that actually drives business.',
    forWho: 'Businesses with existing websites that have low conversion rates, outdated designs, or poor user experience.',
    impact: 'Our redesigns typically see 150-300% increase in conversions within the first 60 days. One client went from 2 leads/month to 18 leads/month after a redesign.',
    deliverables: [
      'Full website audit & gap analysis',
      'Competitive analysis',
      'Complete UI/UX redesign',
      'Conversion-focused layout restructuring',
      'Updated content & messaging',
      'Performance optimization',
      'A/B testing setup',
      'Migration & redirect handling'
    ],
    color: '#7C3AED'
  },
  {
    id: 'cro',
    icon: <TrendingUp size={28} />,
    title: 'Conversion Rate Optimization',
    tagline: 'Make your traffic work harder.',
    description: 'Getting traffic but not enough leads or sales? We analyze your visitor behavior, identify conversion blockers, and implement data-driven changes to turn more visitors into customers.',
    forWho: 'Businesses with decent website traffic but poor conversion rates (leads, sign-ups, purchases).',
    impact: 'Average 40% increase in conversion rates. Even small improvements (1% to 2%) can double your revenue from existing traffic — with zero additional ad spend.',
    deliverables: [
      'Heatmap & user behavior analysis',
      'Conversion funnel audit',
      'Landing page optimization',
      'CTA placement & copy testing',
      'Form optimization',
      'A/B testing implementation',
      'Monthly conversion reports',
      'Ongoing optimization recommendations'
    ],
    color: '#10B981'
  },
  {
    id: 'speed',
    icon: <Gauge size={28} />,
    title: 'Speed & Performance Optimization',
    tagline: 'Faster website = more revenue.',
    description: 'A 1-second delay in page load time reduces conversions by 7%. We optimize your website\'s performance to load blazing fast, improving user experience, SEO rankings, and conversion rates.',
    forWho: 'Businesses with slow-loading websites (3+ second load times) that are losing visitors and search rankings.',
    impact: 'Our optimizations typically achieve 60-80% improvement in load times. Clients see an average 25% reduction in bounce rates and higher search rankings within weeks.',
    deliverables: [
      'Performance audit (Core Web Vitals)',
      'Image & asset optimization',
      'Code minification & compression',
      'CDN configuration',
      'Caching strategy implementation',
      'Database/server optimization',
      'Lazy loading implementation',
      'Performance monitoring setup'
    ],
    color: '#F59E0B'
  },
  {
    id: 'seo',
    icon: <Search size={28} />,
    title: 'SEO Basics',
    tagline: 'Get found by customers searching for you.',
    description: 'Your ideal customers are searching Google right now for exactly what you offer. We implement foundational SEO so your website shows up when they search — bringing you free, high-intent traffic.',
    forWho: 'Local businesses and service providers who are invisible on Google search results.',
    impact: 'Businesses on Google\'s first page capture 75% of all clicks. Our SEO foundations help clients appear in local search results within 60-90 days.',
    deliverables: [
      'Keyword research & strategy',
      'On-page SEO optimization',
      'Meta titles & descriptions',
      'Google Business Profile setup',
      'Local SEO optimization',
      'Schema markup implementation',
      'XML sitemap & robots.txt',
      'Google Search Console setup'
    ],
    color: '#EF4444'
  }
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="section section--gradient" style={{ padding: '120px 0 100px', position: 'relative', overflow: 'hidden' }} id="services-hero">
        <div className="glow-orb glow-orb--blue" style={{ width: 500, height: 500, top: -200, right: -150 }} />
        <div className="glow-orb glow-orb--purple" style={{ width: 350, height: 350, bottom: -100, left: -80 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" style={{ maxWidth: 750, margin: '0 auto', textAlign: 'center' }}>
            <motion.span variants={fadeUp} custom={0} className="section-badge" style={{ margin: '0 auto 20px' }}>
              Our Services
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="heading-1" style={{ color: '#fff', marginBottom: 24 }}>
              Services That Drive{' '}
              <span style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Revenue, Not Just Traffic
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto' }}>
              Every service we offer is designed with one goal: growing your business revenue. No vanity metrics, no fluffy deliverables — just real, measurable results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, i) => (
        <section
          key={service.id}
          className={`section ${i % 2 === 1 ? 'section--light' : ''}`}
          id={service.id}
        >
          <div className="container container--narrow">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
                <div className="card__icon" style={{ background: `${service.color}15`, color: service.color }}>{service.icon}</div>
                <span className="badge" style={{ background: `${service.color}15`, color: service.color }}>{`0${i + 1}`}</span>
              </div>
              <h2 className="heading-2" style={{ marginBottom: 8 }}>{service.title}</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--neutral-500)', fontWeight: 500, marginBottom: 24 }}>{service.tagline}</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48 }}>
                <div>
                  <p style={{ color: 'var(--neutral-600)', lineHeight: 1.8, marginBottom: 24 }}>{service.description}</p>

                  <div style={{ padding: 20, background: 'var(--primary-50)', borderRadius: 'var(--radius-md)', marginBottom: 20, borderLeft: `4px solid ${service.color}` }}>
                    <h4 style={{ fontWeight: 700, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Users size={18} style={{ color: service.color }} /> Who It's For
                    </h4>
                    <p style={{ color: 'var(--neutral-600)', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.forWho}</p>
                  </div>

                  <div style={{ padding: 20, background: 'var(--success-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--success)' }}>
                    <h4 style={{ fontWeight: 700, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <DollarSign size={18} style={{ color: 'var(--success)' }} /> Business Impact
                    </h4>
                    <p style={{ color: 'var(--neutral-600)', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.impact}</p>
                  </div>
                </div>

                <div>
                  <div className="card" style={{ height: '100%' }}>
                    <h4 style={{ fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Layers size={18} style={{ color: service.color }} /> What You Get
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {service.deliverables.map((d, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem' }}>
                          <CheckCircle2 size={16} style={{ color: 'var(--success)', flexShrink: 0, marginTop: 2 }} />
                          <span style={{ color: 'var(--neutral-600)' }}>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: 40 }}>
                <Link to="/contact" className="btn btn--primary">
                  Discuss This Service <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Comparison */}
      <section className="section section--dark" id="comparison">
        <div className="container container--narrow">
          <SectionHeader
            badge="The Difference"
            title='A "Website" vs. A Revenue Machine'
            description="See what separates a basic website from a LocalLift build."
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card card--glass"
            style={{ overflow: 'hidden', padding: 0 }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ padding: 40, borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: 24, color: 'var(--neutral-400)' }}>
                  ❌ Typical Website
                </h3>
                {[
                  'Looks "nice" but doesn\'t convert',
                  'No clear call-to-action',
                  'Slow load times (5+ seconds)',
                  'No SEO foundation',
                  'No analytics or tracking',
                  'Template-based design',
                  'No content strategy',
                  'Set it and forget it'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', color: 'var(--neutral-400)', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--error)' }}>✕</span> {item}
                  </div>
                ))}
              </div>
              <div style={{ padding: 40, background: 'rgba(37, 99, 235, 0.05)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: 24, color: '#fff' }}>
                  ✅ LocalLift Revenue Machine
                </h3>
                {[
                  'Conversion-optimized design',
                  'Strategic CTAs throughout',
                  'Sub-3-second load times',
                  'Full SEO foundation',
                  'Complete analytics setup',
                  'Custom, branded design',
                  'Persuasive copywriting',
                  'Ongoing optimization support'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--success)' }} /> {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }} id="services-cta">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="heading-2" style={{ marginBottom: 16 }}>
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-muted" style={{ maxWidth: 500, margin: '0 auto 32px' }}>
              Book a free 15-minute call. We'll assess your current situation and recommend exactly what will drive the most revenue.
            </p>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Book a Free Consultation <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
