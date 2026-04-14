const express = require('express')
const router = express.Router()
const { getClients, createClient, updateClient, getProjects, createProject, updateProject, getProjectStats } = require('../controllers/clientProjectController')
const { protect } = require('../middleware/auth')

// All routes require admin auth
router.use(protect)

// Client routes
router.get('/clients', getClients)
router.post('/clients', createClient)
router.put('/clients/:id', updateClient)

// Project routes
router.get('/projects/stats', getProjectStats)
router.get('/projects', getProjects)
router.post('/projects', createProject)
router.put('/projects/:id', updateProject)

module.exports = router
