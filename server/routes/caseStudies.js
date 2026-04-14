const express = require('express')
const router = express.Router()
const { getCaseStudies, getCaseStudy, createCaseStudy, updateCaseStudy, deleteCaseStudy } = require('../controllers/caseStudyController')
const { protect } = require('../middleware/auth')
const { caseStudyRules, validate } = require('../middleware/validate')

// Public
router.get('/', getCaseStudies)
router.get('/:id', getCaseStudy)

// Admin
router.post('/', protect, caseStudyRules, validate, createCaseStudy)
router.put('/:id', protect, updateCaseStudy)
router.delete('/:id', protect, deleteCaseStudy)

module.exports = router
