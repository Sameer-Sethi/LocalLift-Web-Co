const express = require('express')
const router = express.Router()
const { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } = require('../controllers/testimonialController')
const { protect } = require('../middleware/auth')
const { testimonialRules, validate } = require('../middleware/validate')

// Public
router.get('/', getTestimonials)

// Admin
router.post('/', protect, testimonialRules, validate, createTestimonial)
router.put('/:id', protect, updateTestimonial)
router.delete('/:id', protect, deleteTestimonial)

module.exports = router
