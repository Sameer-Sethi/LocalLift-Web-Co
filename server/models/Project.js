const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['website-design', 'redesign', 'cro', 'speed-optimization', 'seo', 'maintenance']
  },
  status: {
    type: String,
    default: 'discovery',
    enum: ['discovery', 'proposal', 'design', 'development', 'testing', 'launched', 'retainer']
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  budget: {
    amount: { type: Number },
    currency: { type: String, default: 'INR' },
    plan: { type: String, enum: ['starter', 'growth', 'premium', 'custom'] }
  },
  deliverables: [{
    name: { type: String },
    completed: { type: Boolean, default: false }
  }],
  url: {
    type: String,
    trim: true
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
})

projectSchema.index({ clientId: 1 })
projectSchema.index({ status: 1 })

module.exports = mongoose.model('Project', projectSchema)
