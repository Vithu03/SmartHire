import { Link } from 'react-router-dom';

function CompanyDashboard() {
  return (
    <div className="company-dashboard-page">

      <nav className="navbar">
        <h2 className="logo">SmartHire</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/login">Logout</Link>
        </div>
      </nav>

      <div className="company-dashboard-container">

        <h1>Company Dashboard</h1>
        <p>Manage your company and job opportunities.</p>

        <div className="company-dashboard-cards">

          <div className="company-dashboard-card">
            <h2>Post a Job</h2>
            <p>Create and publish new job opportunities.</p>
           <Link to="/post-job" className="dashboard-button">
  Post Job
</Link>
          </div>

          <div className="company-dashboard-card">
            <h2>My Job Posts</h2>
            <p>View and manage your published jobs.</p>
            <Link to="/my-jobs" className="dashboard-button">
  View Jobs
</Link>
          </div>

          <div className="company-dashboard-card">
            <h2>Applications</h2>
            <p>View candidates who applied for your jobs.</p>
            <Link to="/applications" className="dashboard-button">
  View Applications
</Link>
          </div>

          <div className="company-dashboard-card">
            <h2>Company Profile</h2>
            <p>Manage your company information.</p>
            <Link to="/company-profile" className="dashboard-button">
  View Profile
</Link>
          </div>

        </div>
      </div>

    </div>
  );
}

export default CompanyDashboard;