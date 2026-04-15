require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorHandler')
const { apiLimiter } = require('./middleware/rateLimiter')

const app = express()

// Connect to MongoDB
if (process.env.MONGODB_URI) {
  connectDB()
} else {
  console.log('⚠️  No MONGODB_URI found — running without database connection')
  console.log('   Set MONGODB_URI in .env to enable database features')
}

// Middleware
app.use(cors({
  origin: [
    process.env.CLIENT_URL || 'http://localhost:5173',
    process.env.ADMIN_URL || 'http://localhost:5174'
  ],
  credentials: true
}))
app.use(express.json({ limit: '10mb' }))
app.use('/api', apiLimiter)

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/leads', require('./routes/leads'))
app.use('/api/testimonials', require('./routes/testimonials'))
app.use('/api/case-studies', require('./routes/caseStudies'))
app.use('/api', require('./routes/clientProjects'))

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'LocalLift API is running',
    timestamp: new Date().toISOString()
  })
})

// Error handler
app.use(errorHandler)

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`\n🚀 LocalLift API running on port ${PORT}`)
  console.log(`   Health check: http://localhost:${PORT}/api/health\n`)
})
