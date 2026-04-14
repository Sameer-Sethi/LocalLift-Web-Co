const mongoose = require('mongoose')

const caseStudySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  client: {
    type: String,
    required: true,
    trim: true
  },
  industry: {
    type: String,
    required: true,
    trim: true
  },
  service: {
    type: String,
    required: true,
    trim: true
  },
  challenge: {
    type: String,
    required: true,
    trim: true
  },
  solution: {
    type: String,
    required: true,
    trim: true
  },
  results: {
    primary: { type: String },
    metrics: [{
      label: { type: String },
      before: { type: String },
      after: { type: String }
    }]
  },
  testimonial: {
    name: { type: String },
    role: { type: String },
    quote: { type: String }
  },
  images: [{ type: String }],
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('CaseStudy', caseStudySchema)
