import { Link } from 'react-router-dom';

function PostJob() {
  return (
    <div className="post-job-page">

      <nav className="navbar">
        <h2 className="logo">SmartHire</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/company-dashboard">Dashboard</Link>
        </div>
      </nav>

      <div className="post-job-container">

        <h1>Post a New Job</h1>
        <p>Find the right candidates for your company.</p>

        <div className="post-job-card">

          <form>
            <label>Job Title</label>
            <input type="text" placeholder="Enter job title" />

            <label>Company Name</label>
            <input type="text" placeholder="Enter company name" />

            <label>Location</label>
            <input type="text" placeholder="Enter job location" />

            <label>Job Type</label>
            <select>
              <option value="">Select Job Type</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>

            <label>Salary</label>
            <input type="text" placeholder="Enter salary" />

            <label>Job Description</label>
            <textarea placeholder="Enter job description"></textarea>

            <label>Required Skills</label>
            <textarea placeholder="Enter required skills"></textarea>

            <button type="button">Publish Job</button>
          </form>

        </div>
      </div>

    </div>
  );
}

export default PostJob;