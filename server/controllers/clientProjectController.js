const Client = require('../models/Client')
const Project = require('../models/Project')

// === CLIENT CONTROLLERS ===

// @desc    Get all clients
// @route   GET /api/clients
// @access  Private (Admin)
exports.getClients = async (req, res, next) => {
  try {
    const clients = await Client.find().populate('projects').sort('-createdAt')
    res.json({ success: true, data: clients })
  } catch (error) {
    next(error)
  }
}

// @desc    Create client
// @route   POST /api/clients
// @access  Private (Admin)
exports.createClient = async (req, res, next) => {
  try {
    const client = await Client.create(req.body)
    res.status(201).json({ success: true, data: client })
  } catch (error) {
    next(error)
  }
}

// @desc    Update client
// @route   PUT /api/clients/:id
// @access  Private (Admin)
exports.updateClient = async (req, res, next) => {
  try {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!client) {
      return res.status(404).json({ success: false, message: 'Client not found' })
    }
    res.json({ success: true, data: client })
  } catch (error) {
    next(error)
  }
}

// === PROJECT CONTROLLERS ===

// @desc    Get all projects
// @route   GET /api/projects
// @access  Private (Admin)
exports.getProjects = async (req, res, next) => {
  try {
    const { status } = req.query
    const query = status ? { status } : {}
    const projects = await Project.find(query).populate('clientId', 'name company').sort('-createdAt')
    res.json({ success: true, data: projects })
  } catch (error) {
    next(error)
  }
}

// @desc    Create project
// @route   POST /api/projects
// @access  Private (Admin)
exports.createProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body)
    
    // Add project to client's projects array
    if (req.body.clientId) {
      await Client.findByIdAndUpdate(req.body.clientId, {
        $push: { projects: project._id }
      })
    }

    res.status(201).json({ success: true, data: project })
  } catch (error) {
    next(error)
  }
}

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private (Admin)
exports.updateProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' })
    }
    res.json({ success: true, data: project })
  } catch (error) {
    next(error)
  }
}

// @desc    Get project stats
// @route   GET /api/projects/stats
// @access  Private (Admin)
exports.getProjectStats = async (req, res, next) => {
  try {
    const total = await Project.countDocuments()
    const active = await Project.countDocuments({ status: { $in: ['discovery', 'proposal', 'design', 'development', 'testing'] } })
    const launched = await Project.countDocuments({ status: 'launched' })
    const retainer = await Project.countDocuments({ status: 'retainer' })

    res.json({
      success: true,
      data: { total, active, launched, retainer }
    })
  } catch (error) {
    next(error)
  }
}
