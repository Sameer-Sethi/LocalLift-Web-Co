# LocalLift Web Co.

**Revenue-focused web design agency** — We build high-converting websites that turn visitors into customers.

## 🏗️ Architecture

This is a full MERN stack application:

```
LocalLift-Web-Co/
├── client/          → Public website (React + Vite)
├── server/          → Backend API (Express + MongoDB)
├── admin/           → Admin dashboard (React + Vite)
└── docs/            → Business strategy documents
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### 1. Install Dependencies
```bash
# Install all dependencies
cd client && npm install
cd ../server && npm install
cd ../admin && npm install
```

### 2. Configure Environment
```bash
# Copy and edit the server .env file
cp .env.example server/.env
# Edit server/.env with your MongoDB URI and JWT secret
```

### 3. Seed Database (Optional)
```bash
cd server && npm run seed
# Creates: admin@locallift.co / admin123456
```

### 4. Run Development Servers
Open 3 terminals:

```bash
# Terminal 1: Frontend (http://localhost:5173)
cd client && npm run dev

# Terminal 2: Backend API (http://localhost:5000)
cd server && npm run dev

# Terminal 3: Admin Dashboard (http://localhost:5174)
cd admin && npm run dev
```

## 📋 Features

### Public Website
- 6 pages: Home, About, Services, Case Studies, Pricing, Contact
- Premium design with glassmorphism, gradients, micro-animations
- Conversion-focused copywriting
- INR/USD pricing toggle
- Contact form with lead capture
- Responsive (mobile, tablet, desktop)

### Backend API
- REST API with Express.js
- MongoDB with Mongoose ODM
- JWT authentication
- Rate limiting on public endpoints
- Input validation & sanitization
- Centralized error handling

### Admin Dashboard
- JWT login (admin@locallift.co / admin123456)
- Dashboard with lead & project statistics
- Lead management with status tracking
- Testimonial & case study CRUD
- Project tracking

### Business Strategy
- Complete business model & revenue projections
- Cold outreach email templates
- 8-step delivery SOP
- Scaling strategy (solo → agency)
- Elevator pitch & USPs

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#2563EB` | Trust, CTAs, links |
| Accent | `#F59E0B` | Warmth, urgency |
| Success | `#10B981` | Results, positive metrics |
| Neutral-900 | `#0F172A` | Dark sections, text |
| Font | Inter + DM Sans | Clean, modern typography |

## 📦 Tech Stack

- **Frontend**: React 19, Vite, React Router, Framer Motion, Lucide Icons
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs
- **Admin**: React 19, Vite, React Router, Lucide Icons
- **Styling**: Vanilla CSS with CSS Custom Properties

## 📄 License

Private — LocalLift Web Co.
