import { Link, useLocation, useNavigate } from 'react-router-dom';

function JobDetails() {
  const navigate = useNavigate();

  const location = useLocation();
  const job = location.state?.job;

  if (!job) {
    return (
      <div className="job-details-page">
        <nav className="navbar">
          <h2 className="logo">SmartHire</h2>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/jobs">Find Jobs</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>

        <div className="job-details-container">
          <div className="job-details-card">
            <h2>Job Not Found</h2>
            <Link to="/jobs">← Back to Jobs</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="job-details-page">

      <nav className="navbar">
        <h2 className="logo">SmartHire</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <div className="job-details-container">

        <div className="job-details-card">

          <h1>{job.title}</h1>

          <h3>{job.company}</h3>

          <div className="job-info">
            <p>📍 Location: {job.location}</p>
            <p>💼 Job Type: {job.type}</p>
            <p>💰 Salary: {job.salary}</p>
            <p>📂 Category: {job.category}</p>
          </div>

          <hr />

          <h2>Job Description</h2>

          <p>
            We are looking for a suitable candidate for the position
            of {job.title} at {job.company}.
            The selected candidate will work with the team
            and contribute to company projects.
          </p>

          <h2>Required Skills</h2>

          <ul>
            <li>Relevant technical knowledge</li>
            <li>Good Communication Skills</li>
            <li>Teamwork</li>
            <li>Problem Solving Skills</li>
          </ul>

          <h2>Qualifications</h2>

          <ul>
            <li>Knowledge related to {job.title}</li>
            <li>Willingness to learn</li>
            <li>Good working attitude</li>
          </ul>

         <button
  className="apply-btn"
  onClick={() => navigate('/job-application', { state: { job } })}
>
  Apply Now
</button>
          <br /><br />

          <Link to="/jobs">← Back to Jobs</Link>

        </div>

      </div>

    </div>
  );
}

export default JobDetails;
