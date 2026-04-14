const jwt = require('jsonwebtoken')
const AdminUser = require('../models/AdminUser')

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' })
}

// @desc    Register admin user
// @route   POST /api/auth/register
// @access  Private (first user can register, then requires auth)
exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body

    // Check if any admin exists (allow first registration)
    const adminCount = await AdminUser.countDocuments()
    if (adminCount > 0 && !req.user) {
      return res.status(403).json({
        success: false,
        message: 'Registration requires admin authentication'
      })
    }

    const existingUser = await AdminUser.findOne({ email })
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Email already registered'
      })
    }

    const user = await AdminUser.create({
      name,
      email,
      password,
      role: adminCount === 0 ? 'superadmin' : 'admin'
    })

    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id)
      }
    })
  } catch (error) {
    next(error)
  }
}

// @desc    Login admin user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      })
    }

    const user = await AdminUser.findOne({ email }).select('+password')
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      })
    }

    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      })
    }

    res.json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id)
      }
    })
  } catch (error) {
    next(error)
  }
}

// @desc    Get current admin user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res) => {
  res.json({
    success: true,
    data: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    }
  })
}
