const Testimonial = require('../models/Testimonial')

// @desc    Get all testimonials (public)
// @route   GET /api/testimonials
// @access  Public
exports.getTestimonials = async (req, res, next) => {
  try {
    const { featured } = req.query
    const query = featured === 'true' ? { featured: true } : {}
    const testimonials = await Testimonial.find(query).sort('-createdAt')
    res.json({ success: true, data: testimonials })
  } catch (error) {
    next(error)
  }
}

// @desc    Create testimonial
// @route   POST /api/testimonials
// @access  Private (Admin)
exports.createTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.create(req.body)
    res.status(201).json({ success: true, data: testimonial })
  } catch (error) {
    next(error)
  }
}

// @desc    Update testimonial
// @route   PUT /api/testimonials/:id
// @access  Private (Admin)
exports.updateTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!testimonial) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' })
    }
    res.json({ success: true, data: testimonial })
  } catch (error) {
    next(error)
  }
}

// @desc    Delete testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private (Admin)
exports.deleteTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id)
    if (!testimonial) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' })
    }
    res.json({ success: true, message: 'Testimonial deleted' })
  } catch (error) {
    next(error)
  }
}
