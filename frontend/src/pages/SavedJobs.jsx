import { Link } from 'react-router-dom';
import { useState } from 'react';

function SavedJobs() {

 const [savedJobs, setSavedJobs] = useState(() => {
  return JSON.parse(
    localStorage.getItem('savedJobs') || '[]'
  );
});
 const removeJob = (id) => {
  const updatedJobs = savedJobs.filter(
    (job) => job.id !== id
  );

  setSavedJobs(updatedJobs);

  localStorage.setItem(
    'savedJobs',
    JSON.stringify(updatedJobs)
  );
};
  return (
    <div className="saved-jobs-page">

      <nav className="navbar">
        <h2 className="logo">SmartHire</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <div className="saved-jobs-container">

        <h1>My Saved Jobs</h1>

        <p>Keep track of the jobs you are interested in.</p>

        <div className="saved-jobs-grid">

          {savedJobs.length > 0 ? (

            savedJobs.map((job) => (

              <div className="saved-job-card" key={job.id}>

                <h2>{job.title}</h2>

                <p>🏢 {job.company}</p>
                <p>📍 {job.location}</p>
                <p>💼 {job.type}</p>
                <p>💰 {job.salary}</p>

                <div className="saved-job-buttons">

                  <Link
                    to="/job-details"
                    className="view-job-btn"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => removeJob(job.id)}
                    className="remove-job-btn"
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))

          ) : (

            <div className="no-saved-jobs">
              <h2>No Saved Jobs!</h2>
              <p>You have not saved any jobs yet.</p>

              <Link to="/jobs">
                Explore Jobs
              </Link>
            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default SavedJobs;