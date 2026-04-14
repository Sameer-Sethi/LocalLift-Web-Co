const CaseStudy = require('../models/CaseStudy')

// @desc    Get all case studies (public)
// @route   GET /api/case-studies
// @access  Public
exports.getCaseStudies = async (req, res, next) => {
  try {
    const { featured, industry } = req.query
    const query = {}
    if (featured === 'true') query.featured = true
    if (industry) query.industry = industry

    const caseStudies = await CaseStudy.find(query).sort('order -createdAt')
    res.json({ success: true, data: caseStudies })
  } catch (error) {
    next(error)
  }
}

// @desc    Get single case study
// @route   GET /api/case-studies/:id
// @access  Public
exports.getCaseStudy = async (req, res, next) => {
  try {
    const caseStudy = await CaseStudy.findById(req.params.id)
    if (!caseStudy) {
      return res.status(404).json({ success: false, message: 'Case study not found' })
    }
    res.json({ success: true, data: caseStudy })
  } catch (error) {
    next(error)
  }
}

// @desc    Create case study
// @route   POST /api/case-studies
// @access  Private (Admin)
exports.createCaseStudy = async (req, res, next) => {
  try {
    const caseStudy = await CaseStudy.create(req.body)
    res.status(201).json({ success: true, data: caseStudy })
  } catch (error) {
    next(error)
  }
}

// @desc    Update case study
// @route   PUT /api/case-studies/:id
// @access  Private (Admin)
exports.updateCaseStudy = async (req, res, next) => {
  try {
    const caseStudy = await CaseStudy.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!caseStudy) {
      return res.status(404).json({ success: false, message: 'Case study not found' })
    }
    res.json({ success: true, data: caseStudy })
  } catch (error) {
    next(error)
  }
}

// @desc    Delete case study
// @route   DELETE /api/case-studies/:id
// @access  Private (Admin)
exports.deleteCaseStudy = async (req, res, next) => {
  try {
    const caseStudy = await CaseStudy.findByIdAndDelete(req.params.id)
    if (!caseStudy) {
      return res.status(404).json({ success: false, message: 'Case study not found' })
    }
    res.json({ success: true, message: 'Case study deleted' })
  } catch (error) {
    next(error)
  }
}
