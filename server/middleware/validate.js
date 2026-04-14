const { body, validationResult } = require('express-validator')

// Validation middleware runner
const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(e => ({ field: e.path, message: e.msg }))
    })
  }
  next()
}

// Lead form validation rules
const leadRules = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }).escape(),
  body('email').trim().isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('phone').optional().trim().isLength({ max: 20 }).escape(),
  body('businessType').optional().trim().escape(),
  body('budget').optional().trim().escape(),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 2000 }).escape(),
]

// Testimonial validation rules
const testimonialRules = [
  body('clientName').trim().notEmpty().withMessage('Client name is required').escape(),
  body('content').trim().notEmpty().withMessage('Content is required').isLength({ max: 1000 }).escape(),
  body('rating').optional().isInt({ min: 1, max: 5 }).withMessage('Rating must be 1-5'),
  body('company').optional().trim().escape(),
  body('role').optional().trim().escape(),
]

// Case study validation rules
const caseStudyRules = [
  body('title').trim().notEmpty().withMessage('Title is required').escape(),
  body('client').trim().notEmpty().withMessage('Client name is required').escape(),
  body('industry').trim().notEmpty().withMessage('Industry is required').escape(),
  body('service').trim().notEmpty().withMessage('Service is required').escape(),
  body('challenge').trim().notEmpty().withMessage('Challenge is required'),
  body('solution').trim().notEmpty().withMessage('Solution is required'),
]

module.exports = { validate, leadRules, testimonialRules, caseStudyRules }
