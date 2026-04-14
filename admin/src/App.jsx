import { useState, useEffect, createContext, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom'
import {
  Zap, LayoutDashboard, Users, FolderKanban, BookOpen, MessageSquareQuote,
  LogOut, ChevronRight
} from 'lucide-react'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

// Auth Context
const AuthContext = createContext()
const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('admin_token'))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (token) {
      fetch(`${API}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(r => r.json())
        .then(data => {
          if (data.success) setUser(data.data)
          else { localStorage.removeItem('admin_token'); setToken(null) }
        })
        .catch(() => { localStorage.removeItem('admin_token'); setToken(null) })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [token])

  const login = async (email, password) => {
    const res = await fetch(`${API}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    if (data.success) {
      localStorage.setItem('admin_token', data.data.token)
      setToken(data.data.token)
      setUser(data.data)
      return { success: true }
    }
    return { success: false, message: data.message }
  }

  const logout = () => {
    localStorage.removeItem('admin_token')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

// API helper
function useApi() {
  const { token } = useAuth()
  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }

  return {
    get: (url) => fetch(`${API}${url}`, { headers }).then(r => r.json()),
    post: (url, body) => fetch(`${API}${url}`, { method: 'POST', headers, body: JSON.stringify(body) }).then(r => r.json()),
    put: (url, body) => fetch(`${API}${url}`, { method: 'PUT', headers, body: JSON.stringify(body) }).then(r => r.json()),
    patch: (url, body) => fetch(`${API}${url}`, { method: 'PATCH', headers, body: JSON.stringify(body) }).then(r => r.json()),
    del: (url) => fetch(`${API}${url}`, { method: 'DELETE', headers }).then(r => r.json()),
  }
}

// === LOGIN PAGE ===
function LoginPage() {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const result = await login(email, password)
    if (!result.success) setError(result.message || 'Login failed')
    setLoading(false)
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <div className="sidebar__logo-icon" style={{ width: 48, height: 48 }}>
            <Zap size={24} color="#fff" />
          </div>
        </div>
        <h1 className="login-card__title">Admin Dashboard</h1>
        <p className="login-card__subtitle">Sign in to manage LocalLift</p>
        {error && (
          <div style={{ padding: 12, background: '#FEE2E2', color: '#991B1B', borderRadius: 8, fontSize: '0.8rem', marginBottom: 16, textAlign: 'center' }}>
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@locallift.co" required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn btn--primary" style={{ width: '100%', padding: '12px', marginTop: 8 }} disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}

// === SIDEBAR ===
function Sidebar() {
  const { user, logout } = useAuth()
  const location = useLocation()
  
  const links = [
    { path: '/', icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
    { path: '/leads', icon: <Users size={18} />, label: 'Leads' },
    { path: '/projects', icon: <FolderKanban size={18} />, label: 'Projects' },
    { path: '/case-studies', icon: <BookOpen size={18} />, label: 'Case Studies' },
    { path: '/testimonials', icon: <MessageSquoteQuote size={18} />, label: 'Testimonials' },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <div className="sidebar__logo-icon"><Zap size={18} /></div>
        LocalLift Admin
      </div>
      <nav className="sidebar__nav">
        {links.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`sidebar__link ${location.pathname === link.path ? 'sidebar__link--active' : ''}`}
          >
            {link.icon} {link.label}
          </Link>
        ))}
      </nav>
      <div className="sidebar__footer">
        <div className="sidebar__user">
          <div className="sidebar__avatar">{user?.name?.charAt(0) || 'A'}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: '0.8rem' }}>{user?.name || 'Admin'}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)' }}>{user?.email}</div>
          </div>
          <button onClick={logout} style={{ background: 'none', color: 'var(--gray-400)', padding: 4 }} title="Logout">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  )
}

// Fix: MessageSquareQuote imported differently
const MessageSquoteQuote = MessageSquareQuote

// === DASHBOARD ===
function DashboardPage() {
  const api = useApi()
  const [stats, setStats] = useState({ leads: {}, projects: {} })

  useEffect(() => {
    Promise.all([
      api.get('/leads/stats').catch(() => ({ data: {} })),
      api.get('/projects/stats').catch(() => ({ data: {} })),
    ]).then(([l, p]) => {
      setStats({ leads: l.data || {}, projects: p.data || {} })
    })
  }, [])

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Overview of your business</p>
        </div>
      </div>
      <div className="grid grid-4" style={{ marginBottom: 32 }}>
        <div className="stat-card">
          <div className="stat-card__label">Total Leads</div>
          <div className="stat-card__value">{stats.leads.total || 0}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__label">New Leads</div>
          <div className="stat-card__value" style={{ color: 'var(--primary)' }}>{stats.leads.newLeads || 0}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__label">Won Deals</div>
          <div className="stat-card__value" style={{ color: 'var(--success)' }}>{stats.leads.won || 0}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__label">Active Projects</div>
          <div className="stat-card__value" style={{ color: 'var(--warning)' }}>{stats.projects.active || 0}</div>
        </div>
      </div>
      <div className="grid grid-2">
        <div className="stat-card">
          <div className="stat-card__label">This Month's Leads</div>
          <div className="stat-card__value">{stats.leads.monthlyLeads || 0}</div>
          <div className="stat-card__change stat-card__change--up">Tracking</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__label">Launched Projects</div>
          <div className="stat-card__value" style={{ color: 'var(--success)' }}>{stats.projects.launched || 0}</div>
        </div>
      </div>
    </div>
  )
}

// === LEADS PAGE ===
function LeadsPage() {
  const api = useApi()
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchLeads = () => {
    api.get('/leads').then(data => {
      setLeads(data.data || [])
      setLoading(false)
    }).catch(() => setLoading(false))
  }

  useEffect(() => { fetchLeads() }, [])

  const updateStatus = async (id, status) => {
    await api.patch(`/leads/${id}`, { status })
    fetchLeads()
  }

  const deleteLead = async (id) => {
    if (confirm('Delete this lead?')) {
      await api.del(`/leads/${id}`)
      fetchLeads()
    }
  }

  const statusColors = {
    'new': 'status-badge--new',
    'contacted': 'status-badge--contacted',
    'qualified': 'status-badge--qualified',
    'proposal-sent': 'status-badge--proposal-sent',
    'won': 'status-badge--won',
    'lost': 'status-badge--lost',
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Leads</h1>
          <p className="page-subtitle">{leads.length} total leads</p>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Business</th>
              <th>Budget</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr><td colSpan="7" style={{ textAlign: 'center', padding: 48, color: 'var(--gray-400)' }}>
                {loading ? 'Loading...' : 'No leads yet. They\'ll appear here when someone submits the contact form.'}
              </td></tr>
            ) : leads.map(lead => (
              <tr key={lead._id}>
                <td style={{ fontWeight: 600, color: 'var(--gray-800)' }}>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.businessType || '—'}</td>
                <td>{lead.budgetRange || '—'}</td>
                <td>
                  <select
                    value={lead.status}
                    onChange={(e) => updateStatus(lead._id, e.target.value)}
                    style={{ padding: '4px 8px', borderRadius: 6, border: '1px solid var(--gray-200)', fontSize: '0.75rem', fontWeight: 600 }}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="proposal-sent">Proposal Sent</option>
                    <option value="won">Won</option>
                    <option value="lost">Lost</option>
                  </select>
                </td>
                <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                <td>
                  <button className="btn btn--danger btn--sm" onClick={() => deleteLead(lead._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// === SIMPLE CRUD PAGE (Testimonials & Case Studies) ===
function TestimonialsPage() {
  const api = useApi()
  const [items, setItems] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ clientName: '', company: '', role: '', content: '', rating: 5, result: '', featured: false })

  const fetch_ = () => api.get('/testimonials').then(d => setItems(d.data || []))
  useEffect(() => { fetch_() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await api.post('/testimonials', form)
    setForm({ clientName: '', company: '', role: '', content: '', rating: 5, result: '', featured: false })
    setShowModal(false)
    fetch_()
  }

  const handleDelete = async (id) => {
    if (confirm('Delete?')) { await api.del(`/testimonials/${id}`); fetch_() }
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Testimonials</h1>
          <p className="page-subtitle">{items.length} testimonials</p>
        </div>
        <button className="btn btn--primary" onClick={() => setShowModal(true)}>+ Add Testimonial</button>
      </div>
      <div className="grid grid-2">
        {items.map(t => (
          <div key={t._id} className="stat-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <strong>{t.clientName}</strong>
              <button className="btn btn--danger btn--sm" onClick={() => handleDelete(t._id)}>Delete</button>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', marginBottom: 8 }}>{t.role} at {t.company}</p>
            <p style={{ fontSize: '0.875rem', fontStyle: 'italic', color: 'var(--gray-600)' }}>"{t.content}"</p>
            {t.result && <div style={{ marginTop: 8, fontSize: '0.8rem', fontWeight: 600, color: 'var(--success)' }}>Result: {t.result}</div>}
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal__header">
              <h2 className="modal__title">Add Testimonial</h2>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', fontSize: '1.2rem' }}>✕</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group"><label className="form-label">Client Name *</label><input className="form-input" value={form.clientName} onChange={e => setForm({...form, clientName: e.target.value})} required /></div>
              <div className="form-group"><label className="form-label">Company</label><input className="form-input" value={form.company} onChange={e => setForm({...form, company: e.target.value})} /></div>
              <div className="form-group"><label className="form-label">Role</label><input className="form-input" value={form.role} onChange={e => setForm({...form, role: e.target.value})} /></div>
              <div className="form-group"><label className="form-label">Testimonial *</label><textarea className="form-textarea" value={form.content} onChange={e => setForm({...form, content: e.target.value})} required /></div>
              <div className="form-group"><label className="form-label">Key Result</label><input className="form-input" value={form.result} onChange={e => setForm({...form, result: e.target.value})} placeholder="e.g., 3x more leads" /></div>
              <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>Save Testimonial</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

function CaseStudiesPage() {
  const api = useApi()
  const [items, setItems] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ title: '', client: '', industry: '', service: '', challenge: '', solution: '' })

  const fetch_ = () => api.get('/case-studies').then(d => setItems(d.data || []))
  useEffect(() => { fetch_() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await api.post('/case-studies', form)
    setForm({ title: '', client: '', industry: '', service: '', challenge: '', solution: '' })
    setShowModal(false)
    fetch_()
  }

  const handleDelete = async (id) => {
    if (confirm('Delete?')) { await api.del(`/case-studies/${id}`); fetch_() }
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Case Studies</h1>
          <p className="page-subtitle">{items.length} case studies</p>
        </div>
        <button className="btn btn--primary" onClick={() => setShowModal(true)}>+ Add Case Study</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr><th>Title</th><th>Industry</th><th>Service</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr><td colSpan="4" style={{ textAlign: 'center', padding: 48, color: 'var(--gray-400)' }}>No case studies yet.</td></tr>
            ) : items.map(cs => (
              <tr key={cs._id}>
                <td style={{ fontWeight: 600, color: 'var(--gray-800)' }}>{cs.title}</td>
                <td>{cs.industry}</td>
                <td>{cs.service}</td>
                <td><button className="btn btn--danger btn--sm" onClick={() => handleDelete(cs._id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal__header">
              <h2 className="modal__title">Add Case Study</h2>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', fontSize: '1.2rem' }}>✕</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group"><label className="form-label">Title *</label><input className="form-input" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required /></div>
              <div className="form-group"><label className="form-label">Client *</label><input className="form-input" value={form.client} onChange={e => setForm({...form, client: e.target.value})} required /></div>
              <div className="form-group"><label className="form-label">Industry *</label><input className="form-input" value={form.industry} onChange={e => setForm({...form, industry: e.target.value})} required /></div>
              <div className="form-group"><label className="form-label">Service *</label><input className="form-input" value={form.service} onChange={e => setForm({...form, service: e.target.value})} required /></div>
              <div className="form-group"><label className="form-label">Challenge *</label><textarea className="form-textarea" value={form.challenge} onChange={e => setForm({...form, challenge: e.target.value})} required /></div>
              <div className="form-group"><label className="form-label">Solution *</label><textarea className="form-textarea" value={form.solution} onChange={e => setForm({...form, solution: e.target.value})} required /></div>
              <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>Save Case Study</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

function ProjectsPage() {
  const api = useApi()
  const [projects, setProjects] = useState([])
  const fetch_ = () => api.get('/projects').then(d => setProjects(d.data || []))
  useEffect(() => { fetch_() }, [])

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">{projects.length} projects</p>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr><th>Title</th><th>Client</th><th>Type</th><th>Status</th><th>Date</th></tr>
          </thead>
          <tbody>
            {projects.length === 0 ? (
              <tr><td colSpan="5" style={{ textAlign: 'center', padding: 48, color: 'var(--gray-400)' }}>No projects yet.</td></tr>
            ) : projects.map(p => (
              <tr key={p._id}>
                <td style={{ fontWeight: 600, color: 'var(--gray-800)' }}>{p.title}</td>
                <td>{p.clientId?.name || '—'}</td>
                <td>{p.type}</td>
                <td><span className={`status-badge status-badge--${p.status === 'launched' ? 'won' : 'new'}`}>{p.status}</span></td>
                <td>{new Date(p.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// === PROTECTED ROUTE ===
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>Loading...</div>
  if (!user) return <Navigate to="/login" replace />
  return children
}

// === ADMIN LAYOUT ===
function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  )
}

// === APP ===
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={
            <ProtectedRoute>
              <AdminLayout>
                <Routes>
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/leads" element={<LeadsPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/testimonials" element={<TestimonialsPage />} />
                </Routes>
              </AdminLayout>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
