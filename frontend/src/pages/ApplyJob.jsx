import { Link, useLocation } from 'react-router-dom';
function ApplyJob() {
    const location = useLocation();
const job = location.state?.job;
  return (
    <div className="apply-job-page">

      <nav className="navbar">
        <h2 className="logo">SmartHire</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
        </div>
      </nav>

      <div className="apply-job-container">
        <div className="apply-job-card">

          <h1>Job Application Form</h1>
          {job && (
  <h3>Applying for: {job.title}</h3>
)}

        <form onSubmit={(e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const application = {
  fullName: formData.get('fullName'),
  email: formData.get('email'),
  phone: formData.get('phone'),
  coverLetter: formData.get('coverLetter'),
  jobTitle: job?.title,
  company: job?.company,
  appliedDate: new Date().toLocaleDateString(),
  status: 'Pending'
};

  const applications = JSON.parse(
    localStorage.getItem('applications') || '[]'
  );

  applications.push(application);

  localStorage.setItem(
    'applications',
    JSON.stringify(applications)
  );

  alert('Your application has been saved successfully!');
  e.currentTarget.reset();
}}>
            <label>Full Name</label>
           <input
  type="text"
  name="fullName"
  placeholder="Enter your full name"
  required
/>

            <label>Email Address</label>
            <input
  type="email"
  name="email"
  placeholder="Enter your email"
  required
/>

            <label>Phone Number</label>
           <input
  type="tel"
  name="phone"
  placeholder="Enter your phone number"
  required
/>

            <label>Cover Letter</label>
            <textarea
  name="coverLetter"
  placeholder="Write your cover letter"
  required
></textarea>

            <button type="submit" className="apply-btn">
              Submit Application
            </button>
          </form>

        </div>
      </div>

    </div>
  );
}

export default ApplyJob;