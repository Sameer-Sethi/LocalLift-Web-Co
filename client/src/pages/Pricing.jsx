import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, CheckCircle2, X, Shield, Clock, Zap,
  Star, HelpCircle, ArrowRight
} from 'lucide-react'
import { SectionHeader, Accordion } from '../components/ui'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const plans = [
  {
    name: 'Starter',
    desc: 'Perfect for businesses ready to establish their online presence.',
    priceINR: '24,999',
    priceUSD: '299',
    bestFor: 'New businesses, freelancers, solo founders',
    features: [
      { text: 'Up to 5 pages', included: true },
      { text: 'Template-based custom design', included: true },
      { text: 'Mobile responsive', included: true },
      { text: 'Contact form with lead capture', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Google Analytics integration', included: true },
      { text: '2 rounds of revisions', included: true },
      { text: '30-day post-launch support', included: true },
      { text: 'Speed optimization', included: false },
      { text: 'Custom content writing', included: false },
      { text: 'Conversion rate optimization', included: false },
      { text: 'Monthly retainer included', included: false },
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    desc: 'Our most popular plan — designed to generate real leads and revenue.',
    priceINR: '49,999',
    priceUSD: '599',
    bestFor: 'Growing businesses, local service providers',
    features: [
      { text: 'Up to 10 pages', included: true },
      { text: 'Fully custom design', included: true },
      { text: 'Mobile responsive', included: true },
      { text: 'Advanced lead capture & forms', included: true },
      { text: 'Advanced SEO setup', included: true },
      { text: 'Google Analytics + Search Console', included: true },
      { text: '5 rounds of revisions', included: true },
      { text: '60-day post-launch support', included: true },
      { text: 'Speed optimization (sub-3s)', included: true },
      { text: 'Content writing (5 pages)', included: true },
      { text: 'Basic CRO implementation', included: true },
      { text: 'Monthly retainer (optional)', included: true },
    ],
    cta: 'Choose Growth',
    featured: true,
  },
  {
    name: 'Premium',
    desc: 'The full package for businesses serious about dominating online.',
    priceINR: '99,999',
    priceUSD: '1,199',
    bestFor: 'Established businesses, multi-location, high-growth',
    isPlus: true,
    features: [
      { text: 'Unlimited pages', included: true },
      { text: 'Premium custom design + branding', included: true },
      { text: 'Mobile responsive + PWA-ready', included: true },
      { text: 'Advanced lead capture + CRM integration', included: true },
      { text: 'Full SEO suite + local SEO', included: true },
      { text: 'Complete analytics dashboard', included: true },
      { text: 'Unlimited revisions', included: true },
      { text: '90-day priority support', included: true },
      { text: 'Advanced speed optimization', included: true },
      { text: 'Full content writing (all pages)', included: true },
      { text: 'Advanced CRO + A/B testing', included: true },
      { text: '3-month retainer included', included: true },
    ],
    cta: 'Go Premium',
    featured: false,
  }
]

const addons = [
  { name: 'Monthly Maintenance', priceINR: '4,999/mo', priceUSD: '$59/mo', desc: 'Updates, backups, uptime monitoring' },
  { name: 'SEO Monthly Package', priceINR: '9,999/mo', priceUSD: '$119/mo', desc: 'Ongoing SEO optimization & reporting' },
  { name: 'Content Writing', priceINR: '2,999/page', priceUSD: '$35/page', desc: 'Professional, conversion-focused copy' },
  { name: 'Paid Ads Management', priceINR: '14,999/mo', priceUSD: '$179/mo', desc: 'Google & Meta Ads management' },
]

const pricingFaqs = [
  {
    question: 'What\'s included in the one-time price?',
    answer: 'Everything needed to launch your website: design, development, content (where included), SEO setup, analytics, speed optimization, testing, and post-launch support. No hidden fees.'
  },
  {
    question: 'Do I need to pay for hosting separately?',
    answer: 'Yes, hosting is separate (typically ₹2,000-5,000/year depending on the provider). We\'ll recommend the best option for your needs and help set everything up.'
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Absolutely! You can upgrade from Starter to Growth or Premium at any time. We\'ll apply a credit for what you\'ve already paid toward the upgrade.'
  },
  {
    question: 'What if I\'m not happy with the result?',
    answer: 'We offer unlimited revisions on our Premium plan and multiple revision rounds on others. Plus, our 90-day results guarantee means if your website doesn\'t outperform your old one, we\'ll optimize for free.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes! We offer 50/50 payment splits (50% upfront, 50% on launch) for all plans. For Premium, we also offer 3-month payment plans. No interest, no catches.'
  },
  {
    question: 'What are the monthly retainer options?',
    answer: 'Our monthly retainers cover ongoing maintenance, updates, performance monitoring, and optimization. Plans start from ₹4,999/month. This keeps your website performing at its best long-term.'
  },
]

export default function Pricing() {
  const [currency, setCurrency] = useState('INR')

  return (
    <>
      {/* Hero */}
      <section className="section section--gradient" style={{ padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }} id="pricing-hero">
        <div className="glow-orb glow-orb--blue" style={{ width: 500, height: 500, top: -200, right: -150 }} />
        <div className="glow-orb glow-orb--purple" style={{ width: 350, height: 350, bottom: -100, left: -80 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" style={{ maxWidth: 750, margin: '0 auto', textAlign: 'center' }}>
            <motion.span variants={fadeUp} custom={0} className="section-badge" style={{ margin: '0 auto 20px' }}>
              Pricing
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="heading-1" style={{ color: '#fff', marginBottom: 24 }}>
              Invest in Growth.{' '}
              <span style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                See Real Returns.
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 550, margin: '0 auto 32px' }}>
              Transparent pricing, no hidden fees. Every plan is designed to pay for itself through the revenue your new website generates.
            </motion.p>
            
            {/* Currency Toggle */}
            <motion.div variants={fadeUp} custom={3} style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-full)', padding: 4 }}>
              <button
                onClick={() => setCurrency('INR')}
                className={`btn btn--sm ${currency === 'INR' ? 'btn--primary' : ''}`}
                style={{ borderRadius: 'var(--radius-full)', color: currency === 'INR' ? '#fff' : 'rgba(255,255,255,0.6)' }}
              >
                🇮🇳 INR (₹)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`btn btn--sm ${currency === 'USD' ? 'btn--primary' : ''}`}
                style={{ borderRadius: 'var(--radius-full)', color: currency === 'USD' ? '#fff' : 'rgba(255,255,255,0.6)' }}
              >
                🇺🇸 USD ($)
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section" style={{ marginTop: -40 }} id="pricing-cards">
        <div className="container">
          <div className="grid grid-3" style={{ maxWidth: 1100, margin: '0 auto', alignItems: 'start' }}>
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {plan.featured && <div className="pricing-card__badge">⚡ Most Popular</div>}
                <h3 className="pricing-card__name">{plan.name}</h3>
                <p className="pricing-card__desc">{plan.desc}</p>
                
                <div className="pricing-card__price">
                  {currency === 'INR' ? `₹${plan.priceINR}` : `$${plan.priceUSD}`}
                  {plan.isPlus && <span style={{ fontSize: '1.5rem' }}>+</span>}
                </div>
                <p className="pricing-card__period">one-time investment</p>

                <div style={{ padding: '8px 12px', background: 'var(--primary-50)', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', color: 'var(--primary-700)', marginBottom: 24 }}>
                  Best for: {plan.bestFor}
                </div>

                <div className="pricing-card__features">
                  {plan.features.map((f, j) => (
                    <div key={j} className={`pricing-card__feature ${f.included ? 'pricing-card__feature--included' : 'pricing-card__feature--excluded'}`}>
                      {f.included ? <CheckCircle2 size={16} /> : <X size={16} />}
                      {f.text}
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`btn btn--full ${plan.featured ? 'btn--primary btn--lg' : 'btn--secondary'}`}
                >
                  {plan.cta} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="section section--light" id="pricing-guarantees">
        <div className="container">
          <div className="grid grid-3" style={{ maxWidth: 900, margin: '0 auto' }}>
            {[
              { icon: <Shield size={24} />, title: '90-Day Results Guarantee', desc: 'If your website doesn\'t outperform within 90 days, we optimize for free.' },
              { icon: <Clock size={24} />, title: 'Flexible Payment Plans', desc: '50/50 splits available on all plans. Monthly options for Premium.' },
              { icon: <Zap size={24} />, title: 'ROI-Positive Investment', desc: 'Our websites typically pay for themselves within 2-3 months of launch.' },
            ].map((v, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <div className="card__icon" style={{ margin: '0 auto 16px' }}>{v.icon}</div>
                <h3 className="card__title" style={{ fontSize: '1rem' }}>{v.title}</h3>
                <p className="card__text" style={{ fontSize: '0.9rem' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section" id="addons">
        <div className="container container--narrow">
          <SectionHeader
            badge="Add-Ons"
            title="Boost Your Results With Monthly Services"
            description="Optional monthly services to keep your website performing and growing."
          />
          <div className="grid grid-2" style={{ maxWidth: 800, margin: '0 auto' }}>
            {addons.map((addon, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="card__title" style={{ fontSize: '1rem', marginBottom: 4 }}>{addon.name}</h4>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-600)', marginBottom: 8 }}>
                  {currency === 'INR' ? `₹${addon.priceINR}` : addon.priceUSD}
                </p>
                <p className="card__text" style={{ fontSize: '0.875rem' }}>{addon.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--light" id="pricing-faq">
        <div className="container container--narrow">
          <SectionHeader
            badge="FAQ"
            title="Pricing Questions? We've Got Answers."
          />
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <Accordion items={pricingFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--gradient" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }} id="pricing-cta">
        <div className="glow-orb glow-orb--amber" style={{ width: 400, height: 400, top: -100, left: '50%', transform: 'translateX(-50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="heading-2" style={{ color: '#fff', marginBottom: 16 }}>
              Ready to Turn Your Website Into a{' '}
              <span style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Revenue Machine?
              </span>
            </h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto 32px' }}>
              Schedule a free discovery call. We'll recommend the perfect plan for your business goals and budget.
            </p>
            <Link to="/contact" className="btn btn--accent btn--lg">
              Schedule Free Discovery Call <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
