const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Client name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  industry: {
    type: String,
    trim: true
  },
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }],
  status: {
    type: String,
    default: 'active',
    enum: ['active', 'inactive', 'completed']
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Client', clientSchema)
