import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard-page">

      <nav className="navbar">
        <h2 className="logo">SmartHire</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/login">Logout</Link>
        </div>
      </nav>

      <div className="dashboard-container">

        <div className="dashboard-welcome">

  <h1>Welcome to SmartHire!</h1>

  <p>
    Manage your job search, track applications,
    and explore new career opportunities.
  </p>

</div>

        <div className="dashboard-stats">

  <div className="stat-card">
    <h3>12</h3>
    <p>Applied Jobs</p>
  </div>

  <div className="stat-card">
    <h3>8</h3>
    <p>Saved Jobs</p>
  </div>

  <div className="stat-card">
    <h3>25</h3>
    <p>Profile Views</p>
  </div>

  <div className="stat-card">
    <h3>3</h3>
    <p>Interviews</p>
  </div>

</div>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h2>My Profile</h2>
            <p>View and manage your personal information.</p>
            <Link to="/profile">
  GO TO PROFILE
</Link>
          </div>

          <div className="dashboard-card">
  <h2>Applied Jobs</h2>
  <p>Track the jobs you have applied for.</p>

  <Link to="/applications">
    <button>View Applications</button>
  </Link>
</div>

          <div className="dashboard-card">
            <h2>Saved Jobs</h2>
            <p>View your saved job opportunities.</p>
           <Link to="/saved-jobs">
  <button>View Saved Jobs</button>
</Link>
          </div>

          <div className="dashboard-card">
            <h2>Find Jobs</h2>
            <p>Explore the latest job opportunities.</p>
            <Link to="/jobs">
              <button>Browse Jobs</button>
            </Link>
          </div>

        </div>

        <div className="quick-actions">

  <h2>Quick Actions</h2>

  <div className="quick-action-buttons">

    <Link to="/jobs">
      Browse New Jobs
    </Link>

    <Link to="/profile">
      Update Profile
    </Link>

    <Link to="/applications">
      Track Applications
    </Link>

  </div>

</div>
      </div>

    </div>
  );
}

export default Dashboard;