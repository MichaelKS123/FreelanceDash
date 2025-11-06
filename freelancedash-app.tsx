import React, { useState, useEffect, createContext, useContext } from 'react';

// Inject CSS styles
const styles = `
  /* FreelanceDash - Complete Styling by Michael Semera */
  :root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --secondary: #64748b;
    --success: #10b981;
    --warning: #f59e0b;
    --danger: #ef4444;
    --background: #f8fafc;
    --surface: #ffffff;
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --border: #e2e8f0;
    --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
    --radius: 8px;
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: var(--text-primary);
    line-height: 1.6;
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .auth-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
  }

  .auth-container {
    background: var(--surface);
    border-radius: 16px;
    box-shadow: var(--shadow-lg);
    max-width: 440px;
    width: 100%;
    padding: 48px;
    animation: fadeInUp 0.5s ease;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .auth-header {
    text-align: center;
    margin-bottom: 32px;
  }

  .auth-logo {
    font-size: 32px;
    font-weight: 800;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
  }

  .auth-subtitle {
    color: var(--text-secondary);
    font-size: 14px;
  }

  .auth-form h2 {
    font-size: 24px;
    margin-bottom: 24px;
    color: var(--text-primary);
    text-align: center;
  }

  .auth-switch {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    color: var(--text-secondary);
  }

  .link-btn {
    background: none;
    border: none;
    color: var(--primary);
    cursor: pointer;
    font-weight: 600;
    margin-left: 5px;
    text-decoration: none;
    transition: var(--transition);
  }

  .link-btn:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }

  .navbar {
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow);
  }

  .nav-brand h1 {
    font-size: 24px;
    font-weight: 800;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .nav-links {
    display: flex;
    gap: 8px;
  }

  .nav-links button {
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  .nav-links button:hover {
    background: var(--background);
    color: var(--text-primary);
  }

  .nav-links button.active {
    background: var(--primary);
    color: white;
  }

  .nav-user {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .nav-user span {
    color: var(--text-primary);
    font-weight: 500;
    font-size: 14px;
  }

  .btn-logout {
    background: none;
    border: 1px solid var(--border);
    color: var(--text-secondary);
    cursor: pointer;
    padding: 6px 14px;
    border-radius: var(--radius);
    font-size: 14px;
    font-weight: 500;
    transition: var(--transition);
  }

  .btn-logout:hover {
    background: var(--background);
    border-color: var(--text-secondary);
  }

  .main-content {
    flex: 1;
    padding: 32px;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
  }

  .page-title {
    font-size: 32px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 24px;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }

  .page-container {
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    margin-bottom: 32px;
  }

  .stat-card {
    background: var(--surface);
    border-radius: var(--radius);
    padding: 24px;
    box-shadow: var(--shadow);
    display: flex;
    align-items: center;
    gap: 16px;
    transition: var(--transition);
    border-left: 4px solid transparent;
  }

  .stat-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .stat-card-green { border-left-color: var(--success); }
  .stat-card-blue { border-left-color: var(--primary); }
  .stat-card-purple { border-left-color: #8b5cf6; }
  .stat-card-orange { border-left-color: var(--warning); }

  .stat-icon {
    font-size: 48px;
    filter: grayscale(0.2);
  }

  .stat-content h3 {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .stat-value {
    font-size: 28px;
    font-weight: 700;
    color: var(--text-primary);
  }

  .dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 24px;
  }

  .dashboard-section {
    background: var(--surface);
    border-radius: var(--radius);
    padding: 24px;
    box-shadow: var(--shadow);
  }

  .dashboard-section h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    color: var(--text-primary);
  }

  .list-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: var(--background);
    border-radius: var(--radius);
    transition: var(--transition);
  }

  .list-item:hover {
    background: #f1f5f9;
  }

  .list-item-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .text-muted {
    color: var(--text-secondary);
    font-size: 14px;
  }

  .badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    text-transform: capitalize;
  }

  .badge-draft {
    background: #f1f5f9;
    color: #64748b;
  }

  .badge-sent {
    background: #dbeafe;
    color: #2563eb;
  }

  .badge-paid {
    background: #dcfce7;
    color: #16a34a;
  }

  .badge-overdue {
    background: #fee2e2;
    color: #dc2626;
  }

  .badge-not-started {
    background: #f1f5f9;
    color: #64748b;
  }

  .badge-in-progress {
    background: #fef3c7;
    color: #d97706;
  }

  .badge-completed {
    background: #dcfce7;
    color: #16a34a;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 8px;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    font-size: 14px;
    font-family: inherit;
    transition: var(--transition);
    background: var(--surface);
    color: var(--text-primary);
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: var(--radius);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    font-family: inherit;
  }

  .btn-primary {
    background: var(--primary);
    color: white;
  }

  .btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  }

  .btn-secondary {
    background: var(--background);
    color: var(--text-primary);
    border: 1px solid var(--border);
  }

  .btn-secondary:hover {
    background: #f1f5f9;
  }

  .btn-block {
    width: 100%;
  }

  .btn-sm {
    padding: 6px 12px;
    font-size: 13px;
  }

  .btn-icon {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    padding: 4px 8px;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  .btn-icon:hover {
    background: var(--background);
    transform: scale(1.1);
  }

  .btn-icon-danger:hover {
    background: #fee2e2;
    color: var(--danger);
  }

  .table-container {
    background: var(--surface);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    overflow: hidden;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
  }

  .data-table thead {
    background: var(--background);
  }

  .data-table th {
    text-align: left;
    padding: 16px;
    font-weight: 600;
    font-size: 13px;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .data-table td {
    padding: 16px;
    border-top: 1px solid var(--border);
    font-size: 14px;
  }

  .data-table tbody tr {
    transition: var(--transition);
  }

  .data-table tbody tr:hover {
    background: var(--background);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
  }

  .project-card {
    background: var(--surface);
    border-radius: var(--radius);
    padding: 24px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    border-top: 4px solid var(--primary);
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 12px;
  }

  .project-header h3 {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
  }

  .project-client {
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 8px;
  }

  .project-description {
    font-size: 14px;
    color: var(--text-primary);
    margin-bottom: 16px;
    line-height: 1.5;
  }

  .project-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    border-top: 1px solid var(--border);
  }

  .project-deadline {
    font-size: 13px;
    color: var(--text-secondary);
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    animation: fadeIn 0.2s ease;
  }

  .modal-content {
    background: var(--surface);
    border-radius: var(--radius);
    padding: 32px;
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: slideDown 0.3s ease;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  }

  @keyframes slideDown {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--text-secondary);
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  .modal-close:hover {
    background: var(--background);
    color: var(--text-primary);
  }

  .modal-content h2 {
    margin-bottom: 24px;
    font-size: 24px;
    color: var(--text-primary);
  }

  .modal-actions {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid var(--border);
  }

  .line-item {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr auto;
    gap: 8px;
    margin-bottom: 12px;
    align-items: center;
  }

  .line-item input {
    padding: 8px 12px;
  }

  .invoice-total {
    text-align: right;
    font-size: 18px;
    padding: 16px 0;
    border-top: 2px solid var(--border);
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    .navbar {
      padding: 0 16px;
      height: auto;
      flex-wrap: wrap;
    }

    .nav-links {
      order: 3;
      width: 100%;
      justify-content: space-around;
      padding: 8px 0;
      border-top: 1px solid var(--border);
    }

    .nav-links button {
      padding: 6px 12px;
      font-size: 13px;
    }

    .main-content {
      padding: 16px;
    }

    .page-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }

    .dashboard-grid {
      grid-template-columns: 1fr;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }

    .form-row {
      grid-template-columns: 1fr;
    }

    .line-item {
      grid-template-columns: 1fr;
    }

    .modal-content {
      padding: 24px;
    }

    .auth-container {
      padding: 32px 24px;
    }

    .data-table {
      font-size: 13px;
    }

    .data-table th,
    .data-table td {
      padding: 12px 8px;
    }
  }

  @media (max-width: 480px) {
    .page-title {
      font-size: 24px;
    }

    .nav-brand h1 {
      font-size: 20px;
    }

    .stat-value {
      font-size: 24px;
    }

    .auth-logo {
      font-size: 28px;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--text-secondary);
  }
`;

// Inject styles into the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

// Context for authentication and data management
const AppContext = createContext();

// Utility function to format currency
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

// Utility function to format dates
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Main App Component
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [clients, setClients] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState('login');

  // Initialize with demo data
  useEffect(() => {
    if (currentUser) {
      setClients([
        { id: 1, name: 'TechCorp Inc', email: 'contact@techcorp.com', phone: '555-0100', company: 'TechCorp Inc' },
        { id: 2, name: 'Creative Studios', email: 'hello@creativestudios.com', phone: '555-0200', company: 'Creative Studios' }
      ]);
      
      setInvoices([
        { 
          id: 1, 
          clientId: 1, 
          invoiceNumber: 'INV-001', 
          status: 'paid', 
          amount: 2500, 
          dueDate: '2025-10-15',
          issueDate: '2025-10-01',
          items: [{ description: 'Website Development', quantity: 1, rate: 2500 }]
        },
        { 
          id: 2, 
          clientId: 2, 
          invoiceNumber: 'INV-002', 
          status: 'sent', 
          amount: 1800, 
          dueDate: '2025-11-20',
          issueDate: '2025-11-01',
          items: [{ description: 'Brand Design', quantity: 1, rate: 1800 }]
        }
      ]);
      
      setProjects([
        { id: 1, clientId: 1, name: 'E-commerce Platform', deadline: '2025-12-01', status: 'in-progress', description: 'Build custom e-commerce solution' },
        { id: 2, clientId: 2, name: 'Marketing Campaign', deadline: '2025-11-15', status: 'in-progress', description: 'Design assets for Q4 campaign' }
      ]);
    }
  }, [currentUser]);

  const contextValue = {
    currentUser,
    setCurrentUser,
    clients,
    setClients,
    invoices,
    setInvoices,
    projects,
    setProjects,
    currentPage,
    setCurrentPage
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="app">
        {!currentUser ? (
          <AuthPage />
        ) : (
          <>
            <Navigation />
            <main className="main-content">
              {currentPage === 'dashboard' && <Dashboard />}
              {currentPage === 'clients' && <ClientsPage />}
              {currentPage === 'invoices' && <InvoicesPage />}
              {currentPage === 'projects' && <ProjectsPage />}
            </main>
          </>
        )}
      </div>
    </AppContext.Provider>
  );
}

// Authentication Page
function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { setCurrentUser, setCurrentPage } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser({ name: formData.name || 'Michael Semera', email: formData.email });
    setCurrentPage('dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="auth-logo">FreelanceDash</h1>
          <p className="auth-subtitle">Your all-in-one freelance workspace</p>
        </div>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Michael Semera"
                required={!isLogin}
              />
            </div>
          )}
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="••••••••"
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary btn-block">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
          
          <p className="auth-switch">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button type="button" onClick={() => setIsLogin(!isLogin)} className="link-btn">
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

// Navigation Component
function Navigation() {
  const { currentPage, setCurrentPage, setCurrentUser, currentUser } = useContext(AppContext);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1>FreelanceDash</h1>
      </div>
      
      <div className="nav-links">
        <button 
          className={currentPage === 'dashboard' ? 'active' : ''} 
          onClick={() => setCurrentPage('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={currentPage === 'clients' ? 'active' : ''} 
          onClick={() => setCurrentPage('clients')}
        >
          Clients
        </button>
        <button 
          className={currentPage === 'invoices' ? 'active' : ''} 
          onClick={() => setCurrentPage('invoices')}
        >
          Invoices
        </button>
        <button 
          className={currentPage === 'projects' ? 'active' : ''} 
          onClick={() => setCurrentPage('projects')}
        >
          Projects
        </button>
      </div>
      
      <div className="nav-user">
        <span>{currentUser?.name}</span>
        <button onClick={() => setCurrentUser(null)} className="btn-logout">Logout</button>
      </div>
    </nav>
  );
}

// Dashboard Page
function Dashboard() {
  const { invoices, projects, clients } = useContext(AppContext);
  
  const totalEarnings = invoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0);
  const pendingAmount = invoices.filter(inv => inv.status !== 'paid').reduce((sum, inv) => sum + inv.amount, 0);
  const upcomingProjects = projects.filter(p => p.status === 'in-progress').length;

  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard Overview</h1>
      
      <div className="stats-grid">
        <div className="stat-card stat-card-green">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>Total Earnings</h3>
            <p className="stat-value">{formatCurrency(totalEarnings)}</p>
          </div>
        </div>
        
        <div className="stat-card stat-card-blue">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h3>Pending Invoices</h3>
            <p className="stat-value">{formatCurrency(pendingAmount)}</p>
          </div>
        </div>
        
        <div className="stat-card stat-card-purple">
          <div className="stat-icon">📋</div>
          <div className="stat-content">
            <h3>Active Projects</h3>
            <p className="stat-value">{upcomingProjects}</p>
          </div>
        </div>
        
        <div className="stat-card stat-card-orange">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>Total Clients</h3>
            <p className="stat-value">{clients.length}</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-section">
          <h2>Recent Invoices</h2>
          <div className="list-container">
            {invoices.slice(0, 5).map(invoice => {
              const client = clients.find(c => c.id === invoice.clientId);
              return (
                <div key={invoice.id} className="list-item">
                  <div>
                    <strong>{invoice.invoiceNumber}</strong>
                    <span className="text-muted"> - {client?.name}</span>
                  </div>
                  <div className="list-item-right">
                    <span className={`badge badge-${invoice.status}`}>{invoice.status}</span>
                    <strong>{formatCurrency(invoice.amount)}</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Upcoming Deadlines</h2>
          <div className="list-container">
            {projects.map(project => {
              const client = clients.find(c => c.id === project.clientId);
              return (
                <div key={project.id} className="list-item">
                  <div>
                    <strong>{project.name}</strong>
                    <span className="text-muted"> - {client?.name}</span>
                  </div>
                  <div className="text-muted">{formatDate(project.deadline)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Clients Page
function ClientsPage() {
  const { clients, setClients } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingClient) {
      setClients(clients.map(c => c.id === editingClient.id ? { ...formData, id: c.id } : c));
    } else {
      setClients([...clients, { ...formData, id: Date.now() }]);
    }
    setShowModal(false);
    setEditingClient(null);
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  const handleEdit = (client) => {
    setEditingClient(client);
    setFormData(client);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      setClients(clients.filter(c => c.id !== id));
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Clients</h1>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          + Add Client
        </button>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <tr key={client.id}>
                <td><strong>{client.name}</strong></td>
                <td>{client.company}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>
                  <button className="btn-icon" onClick={() => handleEdit(client)}>✏️</button>
                  <button className="btn-icon" onClick={() => handleDelete(client.id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <Modal onClose={() => { setShowModal(false); setEditingClient(null); setFormData({ name: '', email: '', phone: '', company: '' }); }}>
          <h2>{editingClient ? 'Edit Client' : 'Add New Client'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Client Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="modal-actions">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

// Invoices Page
function InvoicesPage() {
  const { invoices, setInvoices, clients } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [editingInvoice, setEditingInvoice] = useState(null);
  const [formData, setFormData] = useState({
    clientId: '',
    invoiceNumber: '',
    issueDate: '',
    dueDate: '',
    status: 'draft',
    items: [{ description: '', quantity: 1, rate: 0 }]
  });

  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = calculateTotal(formData.items);
    
    if (editingInvoice) {
      setInvoices(invoices.map(inv => 
        inv.id === editingInvoice.id ? { ...formData, id: inv.id, amount } : inv
      ));
    } else {
      setInvoices([...invoices, { 
        ...formData, 
        id: Date.now(), 
        amount,
        invoiceNumber: `INV-${String(invoices.length + 1).padStart(3, '0')}`
      }]);
    }
    
    setShowModal(false);
    setEditingInvoice(null);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      clientId: '',
      invoiceNumber: '',
      issueDate: '',
      dueDate: '',
      status: 'draft',
      items: [{ description: '', quantity: 1, rate: 0 }]
    });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { description: '', quantity: 1, rate: 0 }]
    });
  };

  const removeItem = (index) => {
    setFormData({
      ...formData,
      items: formData.items.filter((_, i) => i !== index)
    });
  };

  const updateItem = (index, field, value) => {
    const newItems = [...formData.items];
    newItems[index][field] = value;
    setFormData({ ...formData, items: newItems });
  };

  const generatePDF = (invoice) => {
    const client = clients.find(c => c.id === invoice.clientId);
    
    // Create a printable HTML version
    const printWindow = window.open('', '', 'height=800,width=800');
    
    printWindow.document.write(`
      <html>
        <head>
          <title>Invoice ${invoice.invoiceNumber}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 40px;
              color: #333;
            }
            .invoice-header {
              border-bottom: 3px solid #6366f1;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            h1 {
              color: #6366f1;
              margin: 0;
              font-size: 36px;
            }
            .invoice-details {
              margin-bottom: 30px;
            }
            .invoice-details p {
              margin: 5px 0;
            }
            .client-info {
              background: #f8fafc;
              padding: 20px;
              border-radius: 8px;
              margin-bottom: 30px;
            }
            .client-info h3 {
              margin-top: 0;
              color: #1e293b;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 30px;
            }
            th {
              background: #f1f5f9;
              padding: 12px;
              text-align: left;
              font-weight: 600;
              border-bottom: 2px solid #e2e8f0;
            }
            td {
              padding: 12px;
              border-bottom: 1px solid #e2e8f0;
            }
            .total-row {
              font-size: 18px;
              font-weight: bold;
              background: #f8fafc;
            }
            .text-right {
              text-align: right;
            }
            @media print {
              body { padding: 20px; }
            }
          </style>
        </head>
        <body>
          <div class="invoice-header">
            <h1>INVOICE</h1>
          </div>
          
          <div class="invoice-details">
            <p><strong>Invoice Number:</strong> ${invoice.invoiceNumber}</p>
            <p><strong>Issue Date:</strong> ${formatDate(invoice.issueDate)}</p>
            <p><strong>Due Date:</strong> ${formatDate(invoice.dueDate)}</p>
            <p><strong>Status:</strong> ${invoice.status.toUpperCase()}</p>
          </div>
          
          <div class="client-info">
            <h3>Bill To:</h3>
            <p><strong>${client?.name || 'N/A'}</strong></p>
            <p>${client?.company || ''}</p>
            <p>${client?.email || ''}</p>
            <p>${client?.phone || ''}</p>
          </div>
          
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th class="text-right">Quantity</th>
                <th class="text-right">Rate</th>
                <th class="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              ${invoice.items.map(item => `
                <tr>
                  <td>${item.description}</td>
                  <td class="text-right">${item.quantity}</td>
                  <td class="text-right">${formatCurrency(item.rate)}</td>
                  <td class="text-right">${formatCurrency(item.quantity * item.rate)}</td>
                </tr>
              `).join('')}
              <tr class="total-row">
                <td colspan="3" class="text-right">TOTAL:</td>
                <td class="text-right">${formatCurrency(invoice.amount)}</td>
              </tr>
            </tbody>
          </table>
          
          <p style="color: #64748b; font-size: 14px; margin-top: 40px;">
            Thank you for your business!
          </p>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    
    // Trigger print dialog after content loads
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  const handleEdit = (invoice) => {
    setEditingInvoice(invoice);
    setFormData(invoice);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this invoice?')) {
      setInvoices(invoices.filter(inv => inv.id !== id));
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Invoices</h1>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          + Create Invoice
        </button>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Client</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map(invoice => {
              const client = clients.find(c => c.id === invoice.clientId);
              return (
                <tr key={invoice.id}>
                  <td><strong>{invoice.invoiceNumber}</strong></td>
                  <td>{client?.name}</td>
                  <td>{formatDate(invoice.issueDate)}</td>
                  <td>{formatDate(invoice.dueDate)}</td>
                  <td><strong>{formatCurrency(invoice.amount)}</strong></td>
                  <td><span className={`badge badge-${invoice.status}`}>{invoice.status}</span></td>
                  <td>
                    <button className="btn-icon" onClick={() => generatePDF(invoice)} title="Print/Save as PDF">🖨️</button>
                    <button className="btn-icon" onClick={() => handleEdit(invoice)}>✏️</button>
                    <button className="btn-icon" onClick={() => handleDelete(invoice.id)}>🗑️</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {showModal && (
        <Modal onClose={() => { setShowModal(false); setEditingInvoice(null); resetForm(); }}>
          <h2>{editingInvoice ? 'Edit Invoice' : 'Create New Invoice'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Client</label>
              <select
                value={formData.clientId}
                onChange={(e) => setFormData({ ...formData, clientId: parseInt(e.target.value) })}
                required
              >
                <option value="">Select a client</option>
                {clients.map(client => (
                  <option key={client.id} value={client.id}>{client.name}</option>
                ))}
              </select>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Issue Date</label>
                <input
                  type="date"
                  value={formData.issueDate}
                  onChange={(e) => setFormData({ ...formData, issueDate: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Due Date</label>
                <input
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="draft">Draft</option>
                <option value="sent">Sent</option>
                <option value="paid">Paid</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>

            <div className="form-group">
              <label>Line Items</label>
              {formData.items.map((item, index) => (
                <div key={index} className="line-item">
                  <input
                    type="text"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) => updateItem(index, 'description', e.target.value)}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Qty"
                    value={item.quantity}
                    onChange={(e) => updateItem(index, 'quantity', parseFloat(e.target.value))}
                    min="1"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Rate"
                    value={item.rate}
                    onChange={(e) => updateItem(index, 'rate', parseFloat(e.target.value))}
                    min="0"
                    step="0.01"
                    required
                  />
                  {formData.items.length > 1 && (
                    <button type="button" onClick={() => removeItem(index)} className="btn-icon-danger">✕</button>
                  )}
                </div>
              ))}
              <button type="button" onClick={addItem} className="btn btn-secondary btn-sm">+ Add Item</button>
            </div>

            <div className="invoice-total">
              <strong>Total: {formatCurrency(calculateTotal(formData.items))}</strong>
            </div>

            <div className="modal-actions">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              <button type="submit" className="btn btn-primary">Save Invoice</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

// Projects Page
function ProjectsPage() {
  const { projects, setProjects, clients } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    clientId: '',
    name: '',
    description: '',
    deadline: '',
    status: 'not-started'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProject) {
      setProjects(projects.map(p => p.id === editingProject.id ? { ...formData, id: p.id } : p));
    } else {
      setProjects([...projects, { ...formData, id: Date.now() }]);
    }
    setShowModal(false);
    setEditingProject(null);
    setFormData({ clientId: '', name: '', description: '', deadline: '', status: 'not-started' });
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData(project);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          + Add Project
        </button>
      </div>

      <div className="projects-grid">
        {projects.map(project => {
          const client = clients.find(c => c.id === project.clientId);
          return (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.name}</h3>
                <span className={`badge badge-${project.status}`}>{project.status}</span>
              </div>
              <p className="project-client">👤 {client?.name}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <span className="project-deadline">📅 {formatDate(project.deadline)}</span>
                <div>
                  <button className="btn-icon" onClick={() => handleEdit(project)}>✏️</button>
                  <button className="btn-icon" onClick={() => handleDelete(project.id)}>🗑️</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {showModal && (
        <Modal onClose={() => { setShowModal(false); setEditingProject(null); setFormData({ clientId: '', name: '', description: '', deadline: '', status: 'not-started' }); }}>
          <h2>{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Client</label>
              <select
                value={formData.clientId}
                onChange={(e) => setFormData({ ...formData, clientId: parseInt(e.target.value) })}
                required
              >
                <option value="">Select a client</option>
                {clients.map(client => (
                  <option key={client.id} value={client.id}>{client.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Project Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="3"
                required
              />
            </div>
            <div className="form-group">
              <label>Deadline</label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="not-started">Not Started</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="modal-actions">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

// Modal Component
function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  );
}

export default App;