import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function JobApplication() {
  const location = useLocation();
  const navigate = useNavigate();

  const job = location.state?.job;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    coverLetter: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const newApplication = {
    ...formData,
    jobTitle: job.title,
    company: job.company,
    location: job.location,
    appliedDate: new Date().toLocaleDateString(),
    status: 'Pending'
  };

  const existingApplications = JSON.parse(
    localStorage.getItem('applications') || '[]'
  );

  const updatedApplications = [
    ...existingApplications,
    newApplication
  ];

  localStorage.setItem(
    'applications',
    JSON.stringify(updatedApplications)
  );

  alert('Application Submitted Successfully!');

  navigate('/my-applications');
};

  if (!job) {
    return (
      <div className="application-page">
        <h2>Job Information Not Found</h2>
        <Link to="/jobs">Back to Jobs</Link>
      </div>
    );
  }

  return (
    <div className="application-page">
      <div className="application-card">

        <h1>Job Application</h1>
        <p>Apply for your dream job today.</p>

        <div className="application-job-info">
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>
        </div>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Education</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />

          <label>Experience</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />

          <label>Cover Letter</label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Submit Application
          </button>

        </form>

        <Link to="/jobs" className="back-link">
          Back to Jobs
        </Link>

      </div>
    </div>
  );
}

export default JobApplication;