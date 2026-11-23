import { Link } from 'react-router-dom';

function AdminDashboard() {
  const users = JSON.parse(localStorage.getItem('users') || '[]');

const companies = JSON.parse(
  localStorage.getItem('companies') || '[]'
);

const jobs = JSON.parse(localStorage.getItem('jobs') || '[]');

const applications = JSON.parse(
  localStorage.getItem('applications') || '[]'
);
  return (
    <div className="admin-dashboard-page">

      <nav className="navbar">
        <h2 className="logo">SmartHire Admin</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Logout</Link>
        </div>
      </nav>

      <div className="admin-dashboard-container">

        <h1>Admin Dashboard</h1>
        <p>Manage and monitor the SmartHire platform.</p>

        <div className="admin-stats">

         <div className="admin-stat-card">
  <h2>{users.length}</h2>
  <p>Total Users</p>
</div>

          <div className="admin-stat-card">
  <h2>{companies.length}</h2>
  <p>Total Companies</p>
</div>

          <div className="admin-stat-card">
  <h2>{jobs.length}</h2>
  <p>Total Jobs</p>
</div>

          <div className="admin-stat-card">
  <h2>{applications.length}</h2>
  <p>Total Applications</p>
</div>

        </div>

        <div className="admin-activities">

  <h2>Recent Activities</h2>

  <div className="activity-item">
    <p>New user registered</p>
    <span>Today</span>
  </div>

  <div className="activity-item">
    <p>New company registered</p>
    <span>Yesterday</span>
  </div>

  <div className="activity-item">
    <p>New job posted</p>
    <span>2 days ago</span>
  </div>

  <div className="activity-item">
    <p>New application submitted</p>
    <span>3 days ago</span>
  </div>

</div>

        <div className="admin-management">

          <div className="admin-management-card">
            <h2>Manage Users</h2>
            <p>View and manage registered users.</p>
            <Link to="/manage-users" className="admin-btn">
  View Users
</Link>
          </div>

          <div className="admin-management-card">
            <h2>Manage Companies</h2>
            <p>View and manage registered companies.</p>
            <Link to="/manage-companies" className="admin-btn">
  View Companies
</Link>
          </div>

          <div className="admin-management-card">
            <h2>Manage Jobs</h2>
            <p>Monitor and manage job postings.</p>
           <Link to="/manage-jobs" className="admin-btn">
  View Jobs
</Link>
          </div>

          <div className="admin-management-card">
            <h2>Manage Applications</h2>
            <p>Monitor submitted job applications.</p>
            <Link to="/manage-applications" className="admin-btn">
  View Applications
</Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;