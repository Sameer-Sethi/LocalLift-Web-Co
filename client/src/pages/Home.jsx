import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, ArrowRight, Zap, Globe, Gauge, Search, RefreshCcw,
  TrendingUp, Users, DollarSign, CheckCircle2, Star, Shield,
  Clock, BarChart3, ChevronRight, Award, Sparkles, Target
} from 'lucide-react'
import { SectionHeader, Accordion } from '../components/ui'
import { useCountUp } from '../hooks/useScrollAnimation'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

function AnimatedStat({ end, suffix, label, prefix }) {
  const [ref, count] = useCountUp(end, 2000)
  return (
    <div className="stat" ref={ref}>
      <div className="stat__number stat__number--gradient">
        {prefix}{count}{suffix}
      </div>
      <div className="stat__label">{label}</div>
    </div>
  )
}

const services = [
  {
    icon: <Globe size={24} />,
    title: 'Website Design & Development',
    desc: 'Custom websites built to convert visitors into paying customers.',
    link: '/services'
  },
  {
    icon: <RefreshCcw size={24} />,
    title: 'Website Redesign',
    desc: 'Transform your underperforming site into a lead-generation machine.',
    link: '/services'
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Conversion Rate Optimization',
    desc: 'Turn more of your existing traffic into real revenue.',
    link: '/services'
  },
  {
    icon: <Gauge size={24} />,
    title: 'Speed & Performance',
    desc: 'Faster sites rank higher and convert more — we make it happen.',
    link: '/services'
  },
  {
    icon: <Search size={24} />,
    title: 'SEO Basics',
    desc: 'Get found by the customers actively searching for your services.',
    link: '/services'
  }
]

const processSteps = [
  { num: '01', title: 'Discover', desc: 'We analyze your business, audience, and goals.' },
  { num: '02', title: 'Design', desc: 'Craft a premium, conversion-focused design.' },
  { num: '03', title: 'Develop', desc: 'Build with modern tech for speed and reliability.' },
  { num: '04', title: 'Deliver', desc: 'Launch, test, and continuously optimize for growth.' },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Founder, GreenLeaf Wellness',
    quote: 'Our new website generated 3x more leads in the first month. LocalLift turned our online presence into a real business asset. The ROI has been incredible.',
    initials: 'PS',
    result: '3x more leads'
  },
  {
    name: 'Rahul Verma',
    role: 'CEO, TechBridge Solutions',
    quote: 'We were spending ₹50K/month on ads with a website that didn\'t convert. After LocalLift redesigned it, our conversion rate jumped 240%. Best investment we\'ve made.',
    initials: 'RV',
    result: '240% more conversions'
  },
  {
    name: 'Anita Desai',
    role: 'Owner, Spice Route Restaurant',
    quote: 'From zero online orders to 40+ per day. They didn\'t just build a website — they built a customer acquisition system. Our revenue is up 85%.',
    initials: 'AD',
    result: '85% revenue increase'
  }
]

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'Most projects take 2-4 weeks from start to launch. Complex projects or custom functionality may take 4-6 weeks. We\'ll give you a clear timeline during our discovery call.'
  },
  {
    question: 'What if I already have a website?',
    answer: 'Perfect — we offer website redesign and conversion optimization services. We\'ll audit your current site, identify what\'s not working, and rebuild it to generate more leads and revenue.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes! We offer flexible payment options including 50/50 splits (50% upfront, 50% on launch) and monthly payment plans for larger projects. We want to make this accessible.'
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer: 'Absolutely. Every website we build is fully responsive and optimized for mobile, tablet, and desktop. Over 60% of web traffic comes from mobile — we design for that reality.'
  },
  {
    question: 'How do you measure results?',
    answer: 'We set up analytics tracking, conversion tracking, and provide monthly reports showing traffic, leads, and revenue metrics. You\'ll always know exactly how your website is performing.'
  },
  {
    question: 'What happens after the website is launched?',
    answer: 'We offer ongoing maintenance plans, SEO services, and monthly optimization retainers. Your website is a living asset — we help you keep it performing at its best.'
  },
]

export default function Home() {
  return (
    <>
      {/* === HERO SECTION === */}
      <section className="section section--gradient" style={{ padding: '120px 0 100px', position: 'relative', overflow: 'hidden' }} id="hero">
        <div className="glow-orb glow-orb--blue" style={{ width: 500, height: 500, top: -200, right: -100 }} />
        <div className="glow-orb glow-orb--purple" style={{ width: 400, height: 400, bottom: -150, left: -100 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}
          >
            <motion.div variants={fadeUp} custom={0} className="section-badge" style={{ margin: '0 auto 20px' }}>
              <Sparkles size={14} /> Revenue-Focused Web Design
            </motion.div>
            
            <motion.h1 variants={fadeUp} custom={1} className="heading-1" style={{ marginBottom: 24, color: '#fff' }}>
              Your Website Should Be Your{' '}
              <span style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Best Salesperson
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} custom={2} className="text-lg" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto 40px', fontSize: '1.2rem' }}>
              Most business websites look decent but don't generate leads.
              We build high-converting websites that turn visitors into customers
              and drive real, measurable revenue growth.
            </motion.p>
            
            <motion.div variants={fadeUp} custom={3} className="flex items-center justify-center gap-4" style={{ flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn--accent btn--lg">
                Get More Customers <ArrowUpRight size={20} />
              </Link>
              <Link to="/case-studies" className="btn btn--outline btn--lg">
                See Our Results <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} custom={4} className="flex items-center justify-center gap-6" style={{ marginTop: 40, flexWrap: 'wrap' }}>
              <span className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
                <CheckCircle2 size={16} style={{ color: '#10B981' }} /> Free Website Audit
              </span>
              <span className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
                <CheckCircle2 size={16} style={{ color: '#10B981' }} /> No Lock-in Contracts
              </span>
              <span className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
                <CheckCircle2 size={16} style={{ color: '#10B981' }} /> Results Guaranteed
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* === PAIN POINTS === */}
      <section className="section" id="pain-points">
        <div className="container">
          <SectionHeader
            badge="The Problem"
            title="Is Your Website Costing You Customers?"
            description="Every day your website underperforms, you're losing revenue to competitors with better online presence. Here's what's happening right now."
          />
          <div className="grid grid-3">
            {[
              {
                icon: <DollarSign size={24} />,
                title: 'Lost Revenue',
                desc: '75% of users judge a business by its website. A poor site turns away customers who are ready to buy.',
                stat: '₹3.2L+ lost/year',
                statLabel: 'average revenue lost from poor websites'
              },
              {
                icon: <Users size={24} />,
                title: 'Invisible to Customers',
                desc: '93% of online experiences start with a search engine. If you\'re not showing up, your competitors are winning your customers.',
                stat: '93%',
                statLabel: 'of experiences start with Google'
              },
              {
                icon: <Clock size={24} />,
                title: 'Slow = Gone',
                desc: '53% of mobile visitors leave a page that takes longer than 3 seconds to load. Speed directly impacts your bottom line.',
                stat: '53%',
                statLabel: 'bounce rate for slow sites'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="card__icon">{item.icon}</div>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__text" style={{ marginBottom: 16 }}>{item.desc}</p>
                <div style={{ padding: '12px 16px', background: 'var(--error-light)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}>
                  <strong style={{ color: 'var(--error)' }}>{item.stat}</strong>
                  <span style={{ color: 'var(--neutral-600)', marginLeft: 4 }}>{item.statLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === SOCIAL PROOF BAR === */}
      <section className="section section--dark" style={{ padding: '60px 0' }} id="social-proof">
        <div className="container">
          <div className="grid grid-4" style={{ textAlign: 'center' }}>
            <AnimatedStat prefix="₹" end={230} suffix="L+" label="Revenue Generated for Clients" />
            <AnimatedStat end={150} suffix="+" label="Projects Delivered" />
            <AnimatedStat end={97} suffix="%" label="Client Satisfaction" />
            <AnimatedStat end={40} suffix="%" label="Avg. Conversion Increase" />
          </div>
        </div>
      </section>

      {/* === SERVICES === */}
      <section className="section section--light" id="services-overview">
        <div className="container">
          <SectionHeader
            badge="What We Do"
            title="Services That Drive Revenue, Not Just Traffic"
            description="Every service we offer is designed with one goal in mind — growing your business revenue."
          />
          <div className="grid grid-3" style={{ maxWidth: 1000, margin: '0 auto' }}>
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="card__icon">{service.icon}</div>
                <h3 className="card__title" style={{ fontSize: '1.125rem' }}>{service.title}</h3>
                <p className="card__text" style={{ marginBottom: 16 }}>{service.desc}</p>
                <Link to={service.link} className="flex items-center gap-2" style={{ color: 'var(--primary-600)', fontWeight: 600, fontSize: '0.875rem' }}>
                  Learn More <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === FEATURED RESULT === */}
      <section className="section" id="featured-result">
        <div className="container container--narrow">
          <SectionHeader
            badge="Real Results"
            title="From ₹0 Online Revenue to ₹12L/Month"
            description="See how we helped a local restaurant go from zero online presence to a thriving digital business."
          />
          <motion.div
            className="card card--featured"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ padding: 0, overflow: 'hidden' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 350 }}>
              <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span className="badge badge--success" style={{ marginBottom: 16, alignSelf: 'flex-start' }}>Case Study</span>
                <h3 className="heading-3" style={{ marginBottom: 12 }}>Spice Route Restaurant</h3>
                <p style={{ color: 'var(--neutral-500)', marginBottom: 24, lineHeight: 1.7 }}>
                  A family restaurant with zero online presence came to us needing customers. We built a conversion-optimized website with online ordering, and the results speak for themselves.
                </p>
                <div className="grid grid-2" style={{ gap: 16, marginBottom: 24 }}>
                  <div style={{ padding: 16, background: 'var(--primary-50)', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-600)' }}>0 → 40+</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--neutral-500)' }}>Daily Online Orders</div>
                  </div>
                  <div style={{ padding: 16, background: 'var(--success-light)', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: '#065F46' }}>+85%</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--neutral-500)' }}>Revenue Increase</div>
                  </div>
                </div>
                <Link to="/case-studies" className="btn btn--primary" style={{ alignSelf: 'flex-start' }}>
                  Read Full Case Study <ArrowRight size={16} />
                </Link>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 48
              }}>
                <div style={{ textAlign: 'center', color: '#fff' }}>
                  <BarChart3 size={64} style={{ marginBottom: 16, opacity: 0.9 }} />
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 800 }}>₹12L</div>
                  <div style={{ fontSize: '1.1rem', opacity: 0.8 }}>Monthly Revenue</div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: 8 }}>within 3 months of launch</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === PROCESS === */}
      <section className="section section--dark" id="process">
        <div className="container">
          <SectionHeader
            badge="Our Process"
            title="From First Call to First Lead — In Weeks, Not Months"
            description="Our streamlined process ensures your new website is live and generating leads fast."
          />
          <div className="grid grid-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                className="process-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="process-step__number">{step.num}</div>
                <h3 className="process-step__title" style={{ color: '#fff' }}>{step.title}</h3>
                <p className="process-step__desc" style={{ color: 'var(--neutral-400)' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="section" id="testimonials">
        <div className="container">
          <SectionHeader
            badge="Client Stories"
            title="Don't Take Our Word For It — See Their Results"
            description="Real businesses. Real revenue growth. Real testimonials from clients who've seen the difference."
          />
          <div className="grid grid-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-card__stars">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="testimonial-card__quote">"{t.quote}"</p>
                <div style={{ padding: '8px 12px', background: 'var(--success-light)', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', fontWeight: 600, color: '#065F46', marginBottom: 16, display: 'inline-block' }}>
                  Result: {t.result}
                </div>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.initials}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === PRICING PREVIEW === */}
      <section className="section section--light" id="pricing-preview">
        <div className="container">
          <SectionHeader
            badge="Pricing"
            title="Simple, Transparent Pricing"
            description="No hidden fees. No surprises. Just clear pricing for real business results."
          />
          <div className="grid grid-3" style={{ maxWidth: 1000, margin: '0 auto' }}>
            {[
              { name: 'Starter', price: '₹24,999', label: 'Perfect for getting started', features: ['Up to 5 pages', 'Mobile responsive', 'Basic SEO setup', '30-day support'] },
              { name: 'Growth', price: '₹49,999', label: 'Most popular — best value', featured: true, features: ['Up to 10 pages', 'Custom design', 'Advanced SEO', 'Speed optimization', 'Content writing (5 pages)', '60-day support'] },
              { name: 'Premium', price: '₹99,999+', label: 'For serious growth', features: ['Unlimited pages', 'Premium custom design', 'Full SEO suite', 'CRO included', 'All content written', '90-day priority support'] },
            ].map((plan, i) => (
              <motion.div
                key={i}
                className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {plan.featured && <div className="pricing-card__badge">Most Popular</div>}
                <h3 className="pricing-card__name">{plan.name}</h3>
                <p className="pricing-card__desc">{plan.label}</p>
                <div className="pricing-card__price">{plan.price}</div>
                <p className="pricing-card__period">one-time investment</p>
                <div className="pricing-card__features">
                  {plan.features.map((f, j) => (
                    <div key={j} className="pricing-card__feature pricing-card__feature--included">
                      <CheckCircle2 size={16} /> {f}
                    </div>
                  ))}
                </div>
                <Link
                  to="/pricing"
                  className={`btn btn--full ${plan.featured ? 'btn--primary' : 'btn--secondary'}`}
                >
                  View Full Details <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY US === */}
      <section className="section" id="why-us">
        <div className="container container--narrow">
          <SectionHeader
            badge="Why LocalLift"
            title="We're Not Just Web Designers. We're Growth Partners."
            description="Three things that make us different from every other agency."
          />
          <div className="grid grid-3">
            {[
              {
                icon: <Target size={24} />,
                title: 'Revenue-First Approach',
                desc: 'We don\'t measure success in pixels — we measure it in leads, conversions, and revenue. Every design decision is backed by conversion data.'
              },
              {
                icon: <Shield size={24} />,
                title: 'Results Guarantee',
                desc: 'If your new website doesn\'t outperform your old one in 90 days, we\'ll optimize it for free until it does. Zero risk for you.'
              },
              {
                icon: <Award size={24} />,
                title: 'Full-Stack Ownership',
                desc: 'Design, development, content, SEO, speed — we handle everything. One team, one point of contact, zero headaches.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="card__icon">{item.icon}</div>
                <h3 className="card__title" style={{ fontSize: '1.125rem' }}>{item.title}</h3>
                <p className="card__text">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="section section--light" id="faq">
        <div className="container container--narrow">
          <SectionHeader
            badge="FAQ"
            title="Got Questions? We've Got Answers."
          />
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="section section--gradient" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }} id="final-cta">
        <div className="glow-orb glow-orb--amber" style={{ width: 400, height: 400, top: -100, left: '50%', transform: 'translateX(-50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2" style={{ color: '#fff', marginBottom: 16 }}>
              Stop Losing Customers.<br />
              <span style={{ background: 'linear-gradient(135deg, #FBBF24, #F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Start Growing Revenue.
              </span>
            </h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto 32px' }}>
              Book a free 15-minute strategy call. We'll audit your website and show you exactly how to get more customers.
            </p>
            <div className="flex items-center justify-center gap-4" style={{ flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn--accent btn--lg">
                Book Free Strategy Call <ArrowUpRight size={20} />
              </Link>
              <Link to="/pricing" className="btn btn--outline btn--lg">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
