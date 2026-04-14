const mongoose = require('mongoose')

const testimonialSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: [true, 'Client name is required'],
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Testimonial content is required'],
    trim: true,
    maxlength: 1000
  },
  rating: {
    type: Number,
    default: 5,
    min: 1,
    max: 5
  },
  result: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Testimonial', testimonialSchema)
