import { Link } from 'react-router-dom';
import { useState } from 'react';

function Applications() {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const applications = JSON.parse(
    localStorage.getItem('applications') || '[]'
  );

  return (
    <div className="applications-page">

      <nav className="navbar">
        <h2 className="logo">SmartHire</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/company-dashboard">Dashboard</Link>
        </div>
      </nav>

      <div className="applications-container">

        <h1>Job Applications</h1>
        <p>Manage candidates who applied for your jobs.</p>

        <div className="applications-card">

          <table>
            <thead>
              <tr>
                <th>Candidate Name</th>
                <th>Job Title</th>
                <th>Email</th>
                <th>Details</th>
                <th>Applied Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
  {applications.map((application, index) => (
    <tr key={index}>
      <td>{application.fullName}</td>
      <td>{application.jobTitle}</td>
      <td>{application.email}</td>
      <td>
  <button
    className="view-application-btn"
    onClick={() => setSelectedApplication(application)}
  >
    View Details
  </button>
</td>
      <td>{application.appliedDate || 'Recently'}</td>
      <td>
  <select
  className="status-select"
    value={application.status || 'Pending'}
    onChange={(e) => {
      const updatedApplications = applications.map((app, i) =>
        i === index ? { ...app, status: e.target.value } : app
      );

      localStorage.setItem(
        'applications',
        JSON.stringify(updatedApplications)
      );

      window.location.reload();
    }}  
  >
    
    <option value="Pending">Pending</option>
    <option value="Reviewed">Reviewed</option>
    <option value="Shortlisted">Shortlisted</option>
    <option value="Rejected">Rejected</option>
  </select>
</td>
<td>
  <button
  className="delete-application-btn"
    onClick={() => {
  if (!window.confirm('Are you sure you want to delete this application?')) {
    return;
  }
      const updatedApplications = applications.filter(
        (_, i) => i !== index
      );

      localStorage.setItem(
        'applications',
        JSON.stringify(updatedApplications)
      );

      window.location.reload();
    }}
  >
    Delete
  </button>
</td>


    </tr>
  ))}
</tbody>
          </table>

        </div>

        {selectedApplication && (
  <div className="application-modal">

    <div className="application-modal-content">

      <button
        className="close-modal-btn"
        onClick={() => setSelectedApplication(null)}
      >
        ✕
      </button>

      <h2>Applicant Details</h2>

      <p><strong>Full Name:</strong> {selectedApplication.fullName}</p>

      <p><strong>Email:</strong> {selectedApplication.email}</p>

      <p><strong>Phone:</strong> {selectedApplication.phone}</p>

      <p><strong>Education:</strong> {selectedApplication.education}</p>

      <p><strong>Experience:</strong> {selectedApplication.experience}</p>

      <p><strong>Cover Letter:</strong> {selectedApplication.coverLetter}</p>

      <p><strong>Job:</strong> {selectedApplication.jobTitle}</p>

      <p><strong>Status:</strong> {selectedApplication.status}</p>

    </div>

  </div>
)}

        <Link to="/company-dashboard">← Back to Dashboard</Link>

      </div>
    </div>
  );
}

export default Applications;