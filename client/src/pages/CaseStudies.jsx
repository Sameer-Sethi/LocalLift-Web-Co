import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, ArrowRight, TrendingUp, Users, BarChart3,
  Globe, ShoppingCart, Wrench, Stethoscope, GraduationCap,
  ExternalLink, CheckCircle2, Star
} from 'lucide-react'
import { SectionHeader } from '../components/ui'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const caseStudies = [
  {
    id: 1,
    title: 'Spice Route Restaurant',
    industry: 'Food & Beverage',
    icon: <ShoppingCart size={20} />,
    service: 'Website Design & Development',
    challenge: 'Family-owned restaurant with zero online presence, relying entirely on foot traffic. No way for customers to order online or discover the restaurant through search.',
    solution: 'Built a conversion-optimized website with online ordering integration, Google My Business optimization, and local SEO. Implemented a mobile-first design with prominent CTAs.',
    results: {
      primary: '₹12L/month revenue',
      metrics: [
        { label: 'Online Orders', before: '0', after: '40+/day' },
        { label: 'Revenue Increase', before: 'Baseline', after: '+85%' },
        { label: 'Google Ranking', before: 'Not listed', after: 'Top 3 local' },
        { label: 'Time to Results', before: '—', after: '6 weeks' }
      ]
    },
    testimonial: { name: 'Anita Desai', role: 'Owner', quote: 'From zero online orders to 40+ per day. They didn\'t just build a website — they built a customer acquisition system.' },
    color: '#EF4444',
    featured: true
  },
  {
    id: 2,
    title: 'TechBridge Solutions',
    industry: 'IT Services',
    icon: <Globe size={20} />,
    service: 'Website Redesign + CRO',
    challenge: 'B2B tech company spending ₹50K/month on Google Ads with a dated website that had a 0.8% conversion rate. Leads were expensive and low quality.',
    solution: 'Complete website redesign with conversion-focused landing pages, trust signals, case studies, and optimized lead capture forms. Implemented A/B testing framework.',
    results: {
      primary: '240% conversion increase',
      metrics: [
        { label: 'Conversion Rate', before: '0.8%', after: '2.7%' },
        { label: 'Cost per Lead', before: '₹2,400', after: '₹890' },
        { label: 'Monthly Leads', before: '12', after: '38' },
        { label: 'Ad Spend ROI', before: '1.2x', after: '4.1x' }
      ]
    },
    testimonial: { name: 'Rahul Verma', role: 'CEO', quote: 'Our conversion rate jumped 240%. Best investment we\'ve made in years.' },
    color: '#2563EB',
    featured: true
  },
  {
    id: 3,
    title: 'GreenLeaf Wellness',
    industry: 'Health & Wellness',
    icon: <Stethoscope size={20} />,
    service: 'Website Design + SEO',
    challenge: 'New wellness center with no digital presence competing against established players. Needed to build brand credibility and attract local clients quickly.',
    solution: 'Designed a premium, trust-building website with service pages, online booking, testimonials, and comprehensive local SEO optimization.',
    results: {
      primary: '3x more leads',
      metrics: [
        { label: 'Monthly Leads', before: '5', after: '47' },
        { label: 'Organic Traffic', before: '120/mo', after: '1,800/mo' },
        { label: 'Booking Rate', before: '12%', after: '34%' },
        { label: 'Revenue Growth', before: 'Baseline', after: '+220%' }
      ]
    },
    testimonial: { name: 'Priya Sharma', role: 'Founder', quote: 'Our new website generated 3x more leads in the first month. The ROI has been incredible.' },
    color: '#10B981',
    featured: false
  },
  {
    id: 4,
    title: 'UrbanFit Studio',
    industry: 'Fitness',
    icon: <Users size={20} />,
    service: 'Speed Optimization + CRO',
    challenge: 'Fitness studio website taking 8+ seconds to load. 70% bounce rate on mobile. Members complained about poor booking experience.',
    solution: 'Complete performance overhaul — image optimization, code splitting, CDN setup, lazy loading. Rebuilt booking flow for mobile-first experience.',
    results: {
      primary: '60% faster load time',
      metrics: [
        { label: 'Load Time', before: '8.2s', after: '2.1s' },
        { label: 'Bounce Rate', before: '70%', after: '28%' },
        { label: 'Online Bookings', before: '15/week', after: '45/week' },
        { label: 'Member Signups', before: '8/mo', after: '22/mo' }
      ]
    },
    testimonial: { name: 'Vikram Singh', role: 'Owner', quote: 'Our bookings tripled after the optimization. The site feels like a completely different experience.' },
    color: '#F59E0B',
    featured: false
  },
  {
    id: 5,
    title: 'LearnHub Academy',
    industry: 'Education',
    icon: <GraduationCap size={20} />,
    service: 'Website Design + SEO',
    challenge: 'Online tutoring startup struggling to compete with established ed-tech players. No brand credibility, low trust, minimal organic traffic.',
    solution: 'Built a sophisticated, authority-building website with student success stories, interactive course previews, trust badges, and a comprehensive content/SEO strategy.',
    results: {
      primary: '450% traffic increase',
      metrics: [
        { label: 'Monthly Traffic', before: '800', after: '4,400' },
        { label: 'Student Enrollments', before: '12/mo', after: '65/mo' },
        { label: 'Conversion Rate', before: '1.5%', after: '4.2%' },
        { label: 'Revenue', before: '₹96K/mo', after: '₹5.2L/mo' }
      ]
    },
    testimonial: { name: 'Meera Patel', role: 'Co-founder', quote: 'We went from struggling to enroll students to having a waitlist. LocalLift changed our trajectory.' },
    color: '#7C3AED',
    featured: false
  },
  {
    id: 6,
    title: 'BuildRight Contractors',
    industry: 'Construction',
    icon: <Wrench size={20} />,
    service: 'Website Redesign + Local SEO',
    challenge: 'Established contractor with 15 years of experience but a 2010-era website. Competitors with inferior work were outranking them and winning contracts.',
    solution: 'Modern redesign showcasing project portfolio with before/after galleries, client testimonials, and aggressive local SEO targeting "contractor near me" queries.',
    results: {
      primary: '₹35L in new contracts',
      metrics: [
        { label: 'Monthly Inquiries', before: '3', after: '18' },
        { label: 'Contract Value', before: '₹8L/mo', after: '₹35L/mo' },
        { label: 'Google Position', before: 'Page 3', after: '#2 local' },
        { label: 'Close Rate', before: '25%', after: '42%' }
      ]
    },
    testimonial: { name: 'Rajesh Kumar', role: 'Director', quote: 'In 15 years, I\'ve never had this many quality inquiries. The website pays for itself every week.' },
    color: '#D97706',
    featured: false
  }
]

const industries = ['All', 'Food & Beverage', 'IT Services', 'Health & Wellness', 'Fitness', 'Education', 'Construction']

export default function CaseStudies() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? caseStudies : caseStudies.filter(c => c.industry === filter)

  return (
    <>
      {/* Hero */}
      <section className="section section--gradient" style={{ padding: '120px 0 100px', position: 'relative', overflow: 'hidden' }} id="casestudies-hero">
        <div className="glow-orb glow-orb--blue" style={{ width: 500, height: 500, top: -200, right: -150 }} />
        <div className="glow-orb glow-orb--purple" style={{ width: 350, height: 350, bottom: -100, left: -80 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" style={{ maxWidth: 750, margin: '0 auto', textAlign: 'center' }}>
            <motion.span variants={fadeUp} custom={0} className="section-badge" style={{ margin: '0 auto 20px' }}>
              Case Studies
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="heading-1" style={{ color: '#fff', marginBottom: 24 }}>
              Real Results.{' '}
              <span style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Real Revenue.
              </span>{' '}
              Real Businesses.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto' }}>
              We don't just claim results — we prove them. Explore how we've helped businesses across industries turn their websites into revenue machines.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section" id="case-study-list">
        <div className="container">
          {/* Industry Filter */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className={`btn btn--sm ${filter === ind ? 'btn--primary' : 'btn--ghost'}`}
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Case Study Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {filtered.map((cs, i) => (
              <motion.div
                key={cs.id}
                className="card card--featured"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ padding: 0, overflow: 'hidden' }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr' }}>
                  <div style={{ padding: 40 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                      <span className="badge" style={{ background: `${cs.color}15`, color: cs.color }}>
                        {cs.icon} {cs.industry}
                      </span>
                      <span className="badge badge--primary">{cs.service}</span>
                    </div>

                    <h3 className="heading-3" style={{ marginBottom: 12 }}>{cs.title}</h3>
                    
                    <div style={{ marginBottom: 20 }}>
                      <h4 style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--neutral-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Challenge</h4>
                      <p style={{ color: 'var(--neutral-600)', lineHeight: 1.7, fontSize: '0.95rem' }}>{cs.challenge}</p>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <h4 style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--neutral-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Solution</h4>
                      <p style={{ color: 'var(--neutral-600)', lineHeight: 1.7, fontSize: '0.95rem' }}>{cs.solution}</p>
                    </div>

                    {/* Testimonial */}
                    <div style={{ padding: 16, background: 'var(--neutral-50)', borderRadius: 'var(--radius-md)', borderLeft: `4px solid ${cs.color}` }}>
                      <div style={{ display: 'flex', gap: 4, marginBottom: 8, color: 'var(--accent-400)' }}>
                        {[...Array(5)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}
                      </div>
                      <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--neutral-600)', marginBottom: 8 }}>"{cs.testimonial.quote}"</p>
                      <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--neutral-800)' }}>
                        {cs.testimonial.name}, <span style={{ fontWeight: 400, color: 'var(--neutral-500)' }}>{cs.testimonial.role}</span>
                      </p>
                    </div>
                  </div>

                  {/* Results Panel */}
                  <div style={{ background: `linear-gradient(135deg, ${cs.color}, ${cs.color}dd)`, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#fff' }}>
                    <div style={{ textAlign: 'center', marginBottom: 32 }}>
                      <TrendingUp size={32} style={{ marginBottom: 8, opacity: 0.8 }} />
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800 }}>{cs.results.primary}</div>
                      <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Key Result</div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      {cs.results.metrics.map((m, j) => (
                        <div key={j} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 'var(--radius-md)', padding: 16, textAlign: 'center' }}>
                          <div style={{ fontSize: '0.7rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{m.label}</div>
                          <div style={{ fontSize: '0.75rem', opacity: 0.5, marginBottom: 4 }}>{m.before}</div>
                          <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>↓</div>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}>{m.after}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--gradient" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }} id="casestudies-cta">
        <div className="glow-orb glow-orb--amber" style={{ width: 400, height: 400, top: -100, left: '50%', transform: 'translateX(-50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="heading-2" style={{ color: '#fff', marginBottom: 16 }}>
              Want Results Like These?
            </h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto 32px' }}>
              Your business could be our next success story. Let's talk about how we can grow your revenue.
            </p>
            <Link to="/contact" className="btn btn--accent btn--lg">
              Book Your Free Strategy Call <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
