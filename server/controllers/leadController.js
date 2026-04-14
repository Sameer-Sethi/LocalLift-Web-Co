const Lead = require('../models/Lead')

// @desc    Create a new lead (public form submission)
// @route   POST /api/leads
// @access  Public
exports.createLead = async (req, res, next) => {
  try {
    const { name, email, phone, businessType, budget, message } = req.body

    const lead = await Lead.create({
      name,
      email,
      phone,
      businessType,
      budgetRange: budget,
      message,
      source: 'website'
    })

    res.status(201).json({
      success: true,
      message: 'Thank you! We\'ll get back to you within 24 hours.',
      data: { id: lead._id }
    })
  } catch (error) {
    next(error)
  }
}

// @desc    Get all leads
// @route   GET /api/leads
// @access  Private (Admin)
exports.getLeads = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 20, sort = '-createdAt' } = req.query
    const query = status ? { status } : {}

    const leads = await Lead.find(query)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))

    const total = await Lead.countDocuments(query)

    res.json({
      success: true,
      data: leads,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    next(error)
  }
}

// @desc    Get single lead
// @route   GET /api/leads/:id
// @access  Private (Admin)
exports.getLead = async (req, res, next) => {
  try {
    const lead = await Lead.findById(req.params.id)
    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found' })
    }
    res.json({ success: true, data: lead })
  } catch (error) {
    next(error)
  }
}

// @desc    Update lead status
// @route   PATCH /api/leads/:id
// @access  Private (Admin)
exports.updateLead = async (req, res, next) => {
  try {
    const { status, notes } = req.body
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status, notes },
      { new: true, runValidators: true }
    )

    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found' })
    }

    res.json({ success: true, data: lead })
  } catch (error) {
    next(error)
  }
}

// @desc    Delete lead
// @route   DELETE /api/leads/:id
// @access  Private (Admin)
exports.deleteLead = async (req, res, next) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id)
    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found' })
    }
    res.json({ success: true, message: 'Lead deleted' })
  } catch (error) {
    next(error)
  }
}

// @desc    Get lead statistics
// @route   GET /api/leads/stats
// @access  Private (Admin)
exports.getLeadStats = async (req, res, next) => {
  try {
    const total = await Lead.countDocuments()
    const newLeads = await Lead.countDocuments({ status: 'new' })
    const qualified = await Lead.countDocuments({ status: 'qualified' })
    const won = await Lead.countDocuments({ status: 'won' })

    const thisMonth = new Date()
    thisMonth.setDate(1)
    thisMonth.setHours(0, 0, 0, 0)
    const monthlyLeads = await Lead.countDocuments({ createdAt: { $gte: thisMonth } })

    res.json({
      success: true,
      data: { total, newLeads, qualified, won, monthlyLeads }
    })
  } catch (error) {
    next(error)
  }
}
