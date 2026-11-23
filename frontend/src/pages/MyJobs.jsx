import { Link } from 'react-router-dom';
import { useState } from 'react';

function MyJobs() {

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Solutions',
      location: 'Colombo',
      salary: 'Rs. 60,000 - 90,000',
      type: 'Full Time'
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Tech Solutions',
      location: 'Kandy',
      salary: 'Rs. 70,000 - 100,000',
      type: 'Full Time'
    },
    {
      id: 3,
      title: 'Software Engineer Intern',
      company: 'Tech Solutions',
      location: 'Remote',
      salary: 'Rs. 25,000 - 35,000',
      type: 'Internship'
    }
  ]);

  const deleteJob = (id) => {
  const confirmDelete = window.confirm(
    'Are you sure you want to delete this job?'
  );

  if (confirmDelete) {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
    alert('Job Deleted Successfully!');
  }
};

  const [editingJob, setEditingJob] = useState(null);

const handleEdit = (job) => {
  setEditingJob({ ...job });
};

const handleUpdate = (e) => {
  e.preventDefault();

  const updatedJobs = jobs.map((job) =>
    job.id === editingJob.id ? editingJob : job
  );

  setJobs(updatedJobs);
  setEditingJob(null);

  alert('Job Updated Successfully!');
};

const handleEditChange = (e) => {
  setEditingJob({
    ...editingJob,
    [e.target.name]: e.target.value
  });
};

  return (
    <div className="my-jobs-page">

      <nav className="navbar">
        <h2 className="logo">SmartHire</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/company-dashboard">Dashboard</Link>
        </div>
      </nav>

      <div className="my-jobs-container">

        <h1>My Job Posts</h1>
        <p>Manage your published job opportunities.</p>

        {editingJob && (
  <div className="edit-job-form-container">

    <form onSubmit={handleUpdate} className="edit-job-form">

      <h2>Edit Job Details</h2>

      <label>Job Title</label>
      <input
        type="text"
        name="title"
        value={editingJob.title}
        onChange={handleEditChange}
        required
      />

      <label>Company</label>
      <input
        type="text"
        name="company"
        value={editingJob.company}
        onChange={handleEditChange}
        required
      />

      <label>Location</label>
      <input
        type="text"
        name="location"
        value={editingJob.location}
        onChange={handleEditChange}
        required
      />

      <label>Salary</label>
      <input
        type="text"
        name="salary"
        value={editingJob.salary}
        onChange={handleEditChange}
        required
      />

      <label>Job Type</label>
      <select
        name="type"
        value={editingJob.type}
        onChange={handleEditChange}
      >
        <option>Full Time</option>
        <option>Part Time</option>
        <option>Internship</option>
        <option>Remote</option>
      </select>

      <button type="submit">Update Job</button>

      <button
        type="button"
        onClick={() => setEditingJob(null)}
      >
        Cancel
      </button>

    </form>

  </div>
)}


        <div className="my-jobs-list">

          {jobs.length === 0 ? (
            <h3>No jobs available.</h3>
          ) : (

            jobs.map((job) => (
              <div className="my-job-card" key={job.id}>

                <h2>{job.title}</h2>

                <p>Company: {job.company}</p>
                <p>Location: {job.location}</p>
                <p>Salary: {job.salary}</p>
                <p>Job Type: {job.type}</p>

                <div className="my-job-actions">

                 <button
  className="edit-job-btn"
  onClick={() => handleEdit(job)}
>
  Edit Job
</button>

                  <button
                    className="delete-job-btn"
                    onClick={() => deleteJob(job.id)}
                  >
                    Delete Job
                  </button>

                </div>

              </div>
            ))

          )}

        </div>

        <Link to="/company-dashboard">
          ← Back to Dashboard
        </Link>

      </div>
    </div>
  );
}

export default MyJobs;