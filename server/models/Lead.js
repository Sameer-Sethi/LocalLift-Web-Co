const mongoose = require('mongoose')

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: 100
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    trim: true,
    maxlength: 20
  },
  businessType: {
    type: String,
    trim: true,
    enum: ['restaurant', 'healthcare', 'education', 'ecommerce', 'services', 'technology', 'construction', 'fitness', 'other', '']
  },
  budgetRange: {
    type: String,
    trim: true,
    enum: ['starter', 'growth', 'premium', 'enterprise', 'unsure', '']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: 2000
  },
  source: {
    type: String,
    default: 'website',
    enum: ['website', 'referral', 'linkedin', 'cold-outreach', 'google', 'other']
  },
  status: {
    type: String,
    default: 'new',
    enum: ['new', 'contacted', 'qualified', 'proposal-sent', 'won', 'lost']
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
})

leadSchema.index({ email: 1 })
leadSchema.index({ status: 1 })
leadSchema.index({ createdAt: -1 })

module.exports = mongoose.model('Lead', leadSchema)
