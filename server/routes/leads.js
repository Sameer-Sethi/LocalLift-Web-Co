const express = require('express')
const router = express.Router()
const { createLead, getLeads, getLead, updateLead, deleteLead, getLeadStats } = require('../controllers/leadController')
const { protect } = require('../middleware/auth')
const { formLimiter } = require('../middleware/rateLimiter')
const { leadRules, validate } = require('../middleware/validate')

// Public route (form submission)
router.post('/', formLimiter, leadRules, validate, createLead)

// Admin routes
router.get('/stats', protect, getLeadStats)
router.get('/', protect, getLeads)
router.get('/:id', protect, getLead)
router.patch('/:id', protect, updateLead)
router.delete('/:id', protect, deleteLead)

module.exports = router
