require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const AdminUser = require('../models/AdminUser')
const Testimonial = require('../models/Testimonial')
const CaseStudy = require('../models/CaseStudy')

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB')

    // Seed admin user
    const existingAdmin = await AdminUser.findOne({ email: 'admin@locallift.co' })
    if (!existingAdmin) {
      await AdminUser.create({
        name: 'Admin',
        email: 'admin@locallift.co',
        password: 'admin123456',
        role: 'superadmin'
      })
      console.log('✅ Admin user created (admin@locallift.co / admin123456)')
    } else {
      console.log('ℹ️  Admin user already exists')
    }

    // Seed testimonials
    const testimonialCount = await Testimonial.countDocuments()
    if (testimonialCount === 0) {
      await Testimonial.insertMany([
        {
          clientName: 'Priya Sharma',
          company: 'GreenLeaf Wellness',
          role: 'Founder',
          content: 'Our new website generated 3x more leads in the first month. LocalLift turned our online presence into a real business asset. The ROI has been incredible.',
          rating: 5,
          result: '3x more leads',
          featured: true
        },
        {
          clientName: 'Rahul Verma',
          company: 'TechBridge Solutions',
          role: 'CEO',
          content: 'We were spending ₹50K/month on ads with a website that didn\'t convert. After LocalLift redesigned it, our conversion rate jumped 240%. Best investment we\'ve made.',
          rating: 5,
          result: '240% more conversions',
          featured: true
        },
        {
          clientName: 'Anita Desai',
          company: 'Spice Route Restaurant',
          role: 'Owner',
          content: 'From zero online orders to 40+ per day. They didn\'t just build a website — they built a customer acquisition system. Our revenue is up 85%.',
          rating: 5,
          result: '85% revenue increase',
          featured: true
        }
      ])
      console.log('✅ Testimonials seeded')
    }

    // Seed case studies
    const csCount = await CaseStudy.countDocuments()
    if (csCount === 0) {
      await CaseStudy.insertMany([
        {
          title: 'Spice Route Restaurant',
          client: 'Spice Route Restaurant',
          industry: 'Food & Beverage',
          service: 'Website Design & Development',
          challenge: 'Family-owned restaurant with zero online presence.',
          solution: 'Built a conversion-optimized website with online ordering integration.',
          results: {
            primary: '₹12L/month revenue',
            metrics: [
              { label: 'Online Orders', before: '0', after: '40+/day' },
              { label: 'Revenue Increase', before: 'Baseline', after: '+85%' }
            ]
          },
          featured: true,
          order: 1
        },
        {
          title: 'TechBridge Solutions',
          client: 'TechBridge Solutions',
          industry: 'IT Services',
          service: 'Website Redesign + CRO',
          challenge: 'B2B tech company with dated website and 0.8% conversion rate.',
          solution: 'Complete redesign with conversion-focused landing pages.',
          results: {
            primary: '240% conversion increase',
            metrics: [
              { label: 'Conversion Rate', before: '0.8%', after: '2.7%' },
              { label: 'Cost per Lead', before: '₹2,400', after: '₹890' }
            ]
          },
          featured: true,
          order: 2
        }
      ])
      console.log('✅ Case studies seeded')
    }

    console.log('\n🎉 Seed complete!')
    process.exit(0)
  } catch (error) {
    console.error('Seed error:', error)
    process.exit(1)
  }
}

seed()
