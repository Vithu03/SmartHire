import { Link } from 'react-router-dom';
import { useState } from 'react';

function MyApplications() {
    const [selectedApplication, setSelectedApplication] = useState(null);
  const applications = JSON.parse(
    localStorage.getItem('applications') || '[]'
  );

  return (
    <div className="my-applications-page">

      <nav className="navbar">
        <h2 className="logo">SmartHire</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>

      <div className="my-applications-container">

        <h1>My Applications</h1>

        <p>Track all your submitted job applications.</p>

        {applications.length === 0 ? (

          <div className="no-applications">
            <h2>No Applications Yet</h2>
            <p>You have not applied for any jobs yet.</p>

            <Link to="/jobs" className="browse-jobs-btn">
              Browse Jobs
            </Link>
          </div>

        ) : (

          <div className="my-applications-list">

            {applications.map((application, index) => (

              <div className="my-application-card" key={index}>

                <div>
                  <h2>{application.jobTitle}</h2>
                  <p>{application.company}</p>
                  <p>{application.location}</p>
                </div>

                <button
  className="view-application-btn"
  onClick={() => setSelectedApplication(application)}
>
  View Details
</button>

                <div className="application-details">
                  <p>
                    Applied Date: {application.appliedDate || 'Recently'}
                  </p>

                  <span className="application-status">
                    {application.status || 'Pending'}
                  </span>
                </div>

              </div>

            ))}

          </div>

        )}

        {selectedApplication && (
  <div className="application-modal">
    <div className="application-modal-content">

      <button
        className="close-modal-btn"
        onClick={() => setSelectedApplication(null)}
      >
        ✕
      </button>

      <h2>Application Details</h2>

      <p><strong>Full Name:</strong> {selectedApplication.fullName}</p>
      <p><strong>Email:</strong> {selectedApplication.email}</p>
      <p><strong>Phone:</strong> {selectedApplication.phone}</p>
      <p><strong>Education:</strong> {selectedApplication.education}</p>
      <p><strong>Experience:</strong> {selectedApplication.experience}</p>
      <p><strong>Cover Letter:</strong> {selectedApplication.coverLetter}</p>

      <p><strong>Job:</strong> {selectedApplication.jobTitle}</p>
      <p><strong>Company:</strong> {selectedApplication.company}</p>
      <p><strong>Status:</strong> {selectedApplication.status}</p>

    </div>
  </div>
)}

        <Link to="/jobs" className="back-link">
          ← Back to Jobs
        </Link>

      </div>

    </div>
  );
}

export default MyApplications;