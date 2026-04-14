import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, ArrowRight, Users, Target, Heart, Rocket, 
  Shield, Award, Zap, Code2, Paintbrush, BarChart3
} from 'lucide-react'
import { SectionHeader } from '../components/ui'
import { useCountUp } from '../hooks/useScrollAnimation'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

function AnimatedStat({ end, suffix, label, prefix }) {
  const [ref, count] = useCountUp(end, 2000)
  return (
    <div className="stat" ref={ref}>
      <div className="stat__number stat__number--gradient">{prefix}{count}{suffix}</div>
      <div className="stat__label">{label}</div>
    </div>
  )
}

const values = [
  {
    icon: <Target size={24} />,
    title: 'Results Over Everything',
    desc: 'We don\'t just build pretty websites. Every pixel, every line of code, every word of copy serves one purpose — generating more revenue for your business.'
  },
  {
    icon: <Heart size={24} />,
    title: 'Your Success = Our Success',
    desc: 'We treat every client\'s business like our own. When your revenue grows, we celebrate. That\'s why we guarantee results — we have skin in the game.'
  },
  {
    icon: <Shield size={24} />,
    title: 'Radical Transparency',
    desc: 'No jargon, no hidden fees, no black-box processes. You\'ll always know exactly what we\'re doing, why we\'re doing it, and how it impacts your bottom line.'
  }
]

const differentiators = [
  {
    icon: <BarChart3 size={28} />,
    title: 'Revenue-First Design',
    desc: 'While other agencies focus on aesthetics, we focus on conversions. Our designs are backed by data and proven to generate leads. Beautiful? Always. Profitable? Guaranteed.',
    highlight: 'We measure success in ₹, not just pixels.'
  },
  {
    icon: <Zap size={28} />,
    title: '90-Day Results Guarantee',
    desc: 'If your new website doesn\'t outperform your old one within 90 days, we\'ll optimize it for free until it does. No other agency offers this because no other agency is this confident.',
    highlight: 'Zero risk. Total accountability.'
  },
  {
    icon: <Code2 size={28} />,
    title: 'Full-Stack, Single Team',
    desc: 'Strategy, design, development, content, SEO, speed optimization — one team handles everything. No miscommunication between vendors, no finger-pointing, no delays.',
    highlight: 'One team. One vision. Zero headaches.'
  }
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="section section--gradient" style={{ padding: '120px 0 100px', position: 'relative', overflow: 'hidden' }} id="about-hero">
        <div className="glow-orb glow-orb--blue" style={{ width: 500, height: 500, top: -200, right: -150 }} />
        <div className="glow-orb glow-orb--purple" style={{ width: 350, height: 350, bottom: -100, left: -80 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" style={{ maxWidth: 750, margin: '0 auto', textAlign: 'center' }}>
            <motion.span variants={fadeUp} custom={0} className="section-badge" style={{ margin: '0 auto 20px' }}>
              About LocalLift
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="heading-1" style={{ color: '#fff', marginBottom: 24 }}>
              We Don't Just Build Websites.{' '}
              <span style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                We Build Revenue Machines.
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto' }}>
              Founded with a single belief: every business deserves a website that actually makes them money. Not just a digital brochure — a real customer acquisition system.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section" id="our-story">
        <div className="container container--narrow">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="section-badge">Our Story</span>
              <h2 className="heading-2" style={{ marginBottom: 20 }}>Born From Frustration With the Status Quo</h2>
              <p style={{ color: 'var(--neutral-600)', lineHeight: 1.8, marginBottom: 16 }}>
                We saw businesses spending ₹50,000+ on websites that looked great but generated zero leads. Agencies were selling "pretty" instead of "profitable." That frustrated us.
              </p>
              <p style={{ color: 'var(--neutral-600)', lineHeight: 1.8, marginBottom: 16 }}>
                So we built LocalLift with a different promise: <strong>every website we create must generate measurable business results.</strong> If it doesn't make you money, we haven't done our job.
              </p>
              <p style={{ color: 'var(--neutral-600)', lineHeight: 1.8 }}>
                Today, we've helped 150+ businesses across India turn their websites from cost centers into profit centers — generating over ₹2.3 Crore in combined revenue for our clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: 'var(--gradient-primary)',
                borderRadius: 'var(--radius-xl)',
                padding: 48,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#fff',
                minHeight: 380
              }}
            >
              <Rocket size={48} style={{ marginBottom: 20, opacity: 0.9 }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: 12 }}>Our Mission</h3>
              <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.7, maxWidth: 320 }}>
                Help every business generate more revenue through high-converting websites that work as hard as they do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--light" id="values">
        <div className="container">
          <SectionHeader
            badge="Our Values"
            title="What Drives Everything We Do"
            description="These aren't just words on a wall. They're the principles that shape every project, every decision, and every result."
          />
          <div className="grid grid-3">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="card__icon">{v.icon}</div>
                <h3 className="card__title" style={{ fontSize: '1.125rem' }}>{v.title}</h3>
                <p className="card__text">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="section" id="why-different">
        <div className="container container--narrow">
          <SectionHeader
            badge="Why We're Different"
            title="Not Your Average Web Agency"
            description="We operate more like a growth partner than a vendor. Here's what makes LocalLift different."
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}
              >
                <div className="card__icon" style={{ flexShrink: 0 }}>{d.icon}</div>
                <div>
                  <h3 className="card__title">{d.title}</h3>
                  <p className="card__text" style={{ marginBottom: 12 }}>{d.desc}</p>
                  <p style={{ fontWeight: 600, color: 'var(--primary-600)', fontSize: '0.9rem' }}>{d.highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section--dark" id="about-stats">
        <div className="container">
          <div className="grid grid-4" style={{ textAlign: 'center' }}>
            <AnimatedStat prefix="₹" end={230} suffix="L+" label="Revenue Generated" />
            <AnimatedStat end={150} suffix="+" label="Websites Delivered" />
            <AnimatedStat end={97} suffix="%" label="Client Satisfaction" />
            <AnimatedStat end={3} suffix=" yrs" label="Industry Experience" />
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section" id="team">
        <div className="container container--narrow">
          <SectionHeader
            badge="Our Team"
            title="Small Team. Big Results."
            description="We're a tight-knit team of designers, developers, and strategists who are obsessed with driving business results."
          />
          <div className="grid grid-3">
            {[
              { icon: <Paintbrush size={28} />, role: 'Design', desc: 'UI/UX designers who think in conversions, not just aesthetics.' },
              { icon: <Code2 size={28} />, role: 'Development', desc: 'Full-stack developers who build fast, reliable, scalable websites.' },
              { icon: <BarChart3 size={28} />, role: 'Strategy', desc: 'Growth strategists who optimize every element for maximum ROI.' },
            ].map((t, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <div className="card__icon" style={{ margin: '0 auto 16px' }}>{t.icon}</div>
                <h3 className="card__title" style={{ fontSize: '1.125rem' }}>{t.role}</h3>
                <p className="card__text">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--gradient" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }} id="about-cta">
        <div className="glow-orb glow-orb--amber" style={{ width: 400, height: 400, top: -100, left: '50%', transform: 'translateX(-50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="heading-2" style={{ color: '#fff', marginBottom: 16 }}>
              Let's Build Something That{' '}
              <span style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Makes You Money
              </span>
            </h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto 32px' }}>
              Get a free website audit and discover how much revenue you're leaving on the table.
            </p>
            <Link to="/contact" className="btn btn--accent btn--lg">
              Get Your Free Audit <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
