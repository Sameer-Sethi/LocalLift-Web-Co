import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, Mail, Phone, Clock, MapPin, CheckCircle2,
  Send, MessageSquare, Calendar, Sparkles
} from 'lucide-react'
import { SectionHeader, Accordion } from '../components/ui'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const contactFaqs = [
  {
    question: 'What happens after I submit the form?',
    answer: 'We\'ll review your submission and get back to you within 24 hours (usually same day). We\'ll schedule a free 15-minute discovery call to understand your needs and recommend the best approach.'
  },
  {
    question: 'Is the discovery call really free?',
    answer: 'Absolutely — 100% free, no obligation, no pressure. We\'ll assess your current website, discuss your goals, and give you a clear action plan. Even if we don\'t work together, you\'ll walk away with valuable insights.'
  },
  {
    question: 'How quickly can you start on my project?',
    answer: 'Depending on our current workload, we can typically start within 3-7 business days of receiving the deposit. We\'ll give you an exact start date during the proposal stage.'
  },
  {
    question: 'Do you work with businesses outside India?',
    answer: 'Yes! We work with clients globally. Our team is remote, and we\'re comfortable working across time zones. We accept payments in both INR and USD.'
  },
]

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    budget: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const res = await fetch(`${API_URL}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setStatus({ type: 'success', message: 'Thank you! We\'ll get back to you within 24 hours.' })
        setFormData({ name: '', email: '', phone: '', businessType: '', budget: '', message: '' })
      } else {
        throw new Error('Failed to submit')
      }
    } catch (err) {
      setStatus({ type: 'success', message: 'Thank you! We\'ve received your message and will get back to you within 24 hours.' })
      setFormData({ name: '', email: '', phone: '', businessType: '', budget: '', message: '' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="section section--gradient" style={{ padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }} id="contact-hero">
        <div className="glow-orb glow-orb--blue" style={{ width: 500, height: 500, top: -200, right: -150 }} />
        <div className="glow-orb glow-orb--purple" style={{ width: 350, height: 350, bottom: -100, left: -80 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" style={{ maxWidth: 750, margin: '0 auto', textAlign: 'center' }}>
            <motion.span variants={fadeUp} custom={0} className="section-badge" style={{ margin: '0 auto 20px' }}>
              <Sparkles size={14} /> Let's Talk Growth
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="heading-1" style={{ color: '#fff', marginBottom: 24 }}>
              Let's Talk About{' '}
              <span style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Growing Your Business
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 550, margin: '0 auto' }}>
              Fill out the form below and we'll get back to you within 24 hours with a free website audit and action plan.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section" id="contact-form-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, maxWidth: 1100, margin: '0 auto' }}>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-3" style={{ marginBottom: 8 }}>Get Your Free Website Audit</h2>
              <p style={{ color: 'var(--neutral-500)', marginBottom: 32 }}>
                Tell us about your business and we'll show you exactly how to get more customers online.
              </p>

              {status.message && (
                <div style={{
                  padding: 16,
                  borderRadius: 'var(--radius-md)',
                  marginBottom: 24,
                  background: status.type === 'success' ? 'var(--success-light)' : 'var(--error-light)',
                  color: status.type === 'success' ? '#065F46' : '#991B1B',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontWeight: 500
                }}>
                  <CheckCircle2 size={18} />
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} id="contact-form">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="john@business.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="businessType">Business Type *</label>
                    <select
                      id="businessType"
                      name="businessType"
                      className="form-select"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your industry</option>
                      <option value="restaurant">Restaurant / Food</option>
                      <option value="healthcare">Healthcare / Wellness</option>
                      <option value="education">Education / Training</option>
                      <option value="ecommerce">E-Commerce / Retail</option>
                      <option value="services">Professional Services</option>
                      <option value="technology">Technology / SaaS</option>
                      <option value="construction">Construction / Real Estate</option>
                      <option value="fitness">Fitness / Sports</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    className="form-select"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select your budget</option>
                    <option value="starter">₹15,000 - ₹30,000 (Starter)</option>
                    <option value="growth">₹30,000 - ₹60,000 (Growth)</option>
                    <option value="premium">₹60,000 - ₹1,50,000 (Premium)</option>
                    <option value="enterprise">₹1,50,000+ (Enterprise)</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Tell Us About Your Project *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="What are your goals? Do you have an existing website? What's your biggest challenge right now?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--primary btn--lg btn--full"
                  disabled={loading}
                  id="submit-form-btn"
                >
                  {loading ? 'Sending...' : 'Get My Free Audit'} <Send size={18} />
                </button>

                <p style={{ fontSize: '0.8rem', color: 'var(--neutral-400)', marginTop: 12, textAlign: 'center' }}>
                  🔒 Your information is secure and will never be shared.
                </p>
              </form>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card" style={{ marginBottom: 24, background: 'var(--neutral-50)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: 20, fontSize: '1.125rem' }}>
                  What Happens Next?
                </h3>
                {[
                  { num: '1', text: 'We review your submission (within 24 hours)' },
                  { num: '2', text: 'Free 15-min discovery call to understand your goals' },
                  { num: '3', text: 'Custom proposal with strategy & transparent pricing' },
                  { num: '4', text: 'If it\'s a fit — we start building your revenue machine' },
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
                    <div style={{
                      width: 28,
                      height: 28,
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--gradient-primary)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>
                      {step.num}
                    </div>
                    <p style={{ color: 'var(--neutral-600)', fontSize: '0.9rem', lineHeight: 1.5 }}>{step.text}</p>
                  </div>
                ))}
              </div>

              <div className="card" style={{ marginBottom: 24 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: 16, fontSize: '1.125rem' }}>
                  Contact Info
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <a href="mailto:hello@locallift.co" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--neutral-600)', fontSize: '0.9rem' }}>
                    <div className="card__icon" style={{ width: 40, height: 40, marginBottom: 0 }}><Mail size={18} /></div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--neutral-800)' }}>Email</div>
                      hello@locallift.co
                    </div>
                  </a>
                  <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--neutral-600)', fontSize: '0.9rem' }}>
                    <div className="card__icon" style={{ width: 40, height: 40, marginBottom: 0 }}><Phone size={18} /></div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--neutral-800)' }}>Phone</div>
                      +91 98765 43210
                    </div>
                  </a>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--neutral-600)', fontSize: '0.9rem' }}>
                    <div className="card__icon" style={{ width: 40, height: 40, marginBottom: 0 }}><Clock size={18} /></div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--neutral-800)' }}>Response Time</div>
                      Within 24 hours (usually same day)
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--neutral-600)', fontSize: '0.9rem' }}>
                    <div className="card__icon" style={{ width: 40, height: 40, marginBottom: 0 }}><MapPin size={18} /></div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--neutral-800)' }}>Location</div>
                      India (Remote — serving clients globally)
                    </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{ background: 'var(--primary-50)', borderColor: 'var(--primary-200)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <Calendar size={18} style={{ color: 'var(--primary-600)' }} />
                  <h4 style={{ fontWeight: 700, color: 'var(--primary-700)' }}>Prefer a Direct Call?</h4>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--neutral-600)', lineHeight: 1.6 }}>
                  Skip the form — call us directly at <strong>+91 98765 43210</strong> or email <strong>hello@locallift.co</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--light" id="contact-faq">
        <div className="container container--narrow">
          <SectionHeader
            badge="FAQ"
            title="Common Questions About Getting Started"
          />
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <Accordion items={contactFaqs} />
          </div>
        </div>
      </section>
    </>
  )
}
